'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Orders','Menu','Inventory','Customers','Inbound Leads','Edit Website']

const orders = [
  { id:'BK-0841', customer:'The Hartley Wedding', type:'Custom Cake', item:'6-tier Wedding Cake', total:'$840', pickup:'24 Apr', status:'confirmed' },
  { id:'BK-0840', customer:'Sarah Mills', type:'Daily Order', item:'Sourdough + Croissants (x6)', total:'$38', pickup:'23 Apr', status:'ready' },
  { id:'BK-0839', customer:'Greenfield Office', type:'Corporate', item:'Pastry Box (40 pax)', total:'$160', pickup:'23 Apr', status:'confirmed' },
  { id:'BK-0838', customer:'Tom & Claire Nash', type:'Custom Cake', item:'3-tier Anniversary Cake', total:'$320', pickup:'25 Apr', status:'pending' },
  { id:'BK-0837', customer:'Emma Park', type:'Daily Order', item:'Cinnamon Rolls (x4)', total:'$22', pickup:'22 Apr', status:'confirmed' },
]

const menu = [
  { category:'Cakes', name:'Classic Vanilla Layer Cake', price:'$85', available:true },
  { category:'Cakes', name:'Chocolate Ganache Cake', price:'$95', available:true },
  { category:'Bread', name:'Country Sourdough Loaf', price:'$9', available:true },
  { category:'Pastry', name:'Butter Croissant', price:'$4.50', available:true },
  { category:'Pastry', name:'Cinnamon Roll', price:'$5.50', available:true },
  { category:'Custom', name:'Wedding Cakes (from)', price:'$350', available:true },
]

const inventory = [
  { item:'Bread Flour (kg)', stock:24, unit:'kg', min:10, status:'ok' },
  { item:'Butter (kg)', stock:6, unit:'kg', min:8, status:'low' },
  { item:'Eggs (doz)', stock:18, unit:'doz', min:6, status:'ok' },
  { item:'Sugar (kg)', stock:14, unit:'kg', min:5, status:'ok' },
  { item:'Vanilla Extract', stock:2, unit:'bottles', min:3, status:'low' },
]

const initLeads = [
  { id:1, name:'The Morrison Family', source:'Instagram', interest:'Birthday Cake', date:'22 Apr', status:'new' },
  { id:2, name:'FreshCo Events', source:'Website', interest:'Corporate Pastry Box', date:'21 Apr', status:'contacted' },
  { id:3, name:'Alice & Ben Rees', source:'Referral', interest:'Wedding Cake', date:'20 Apr', status:'qualified' },
  { id:4, name:'Clara Vogel', source:'Google', interest:'Weekly Bread Order', date:'19 Apr', status:'booked' },
  { id:5, name:'Max & Jo Green', source:'Website', interest:'Anniversary Cake', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'menu', label:'Signature Menu', preview:'6 featured items' },
  { id:'contact', label:'Bakery Info', preview:'Address, hours, phone' },
]

export default function BakeryAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'🥐 Baked Fresh Every Morning Since 2011',
    heroHeadline:'Good Bread. Real Butter. Pure Joy.',
    heroSub:'Artisan breads, pastries, and celebration cakes — baked from scratch with the finest local ingredients, every single day.',
    cta1:'Order Now', cta2:'Custom Cakes',
    m1:'Country Sourdough', m2:'Butter Croissant', m3:'Cinnamon Roll', m4:'Chocolate Ganache Cake', m5:'Wedding Cakes', m6:'Pastry Boxes',
    phone:'+1 (555) 482-BAKE', email:'hello@goldcrustbakery.com', address:'4 Market Street, Old Town', hours:'Tue–Sun 7am–4pm',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Gold Crust Bakery</div>
          <div className={styles.brandSub}>ADMIN PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','🛍️','🥐','📦','👥','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/bakery" className={styles.viewSite}>← View Live Site</a></div>
      </aside>
      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Gold Crust Bakery · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>3</span></div>
            <div className={styles.avatar}>GC</div>
          </div>
        </div>
        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Orders Today',val:'28',sub:'6 custom cakes',color:'#a34a1a'},
                  {label:'Revenue (Apr)',val:'$12.4K',sub:'+11% vs Mar',color:'#10b981'},
                  {label:'Custom Cakes Pending',val:'4',sub:'Next pickup: Apr 24',color:'#f59e0b'},
                  {label:'Inventory Alerts',val:'2',sub:'Low stock items',color:'#ef4444'},
                ].map(s=>(
                  <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                    <div className={styles.statVal}>{s.val}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                    <div className={styles.statSub}>{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className={styles.twoCol}>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Today's Orders<span className={styles.chip}>5 shown</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Customer</th><th>Item</th><th>Type</th><th>Total</th><th>Status</th></tr></thead>
                  <tbody>{orders.map(o=>(
                    <tr key={o.id}>
                      <td><div className={styles.bold}>{o.customer}</div></td>
                      <td className={styles.muted}>{o.item}</td>
                      <td><span className={styles.catChip}>{o.type}</span></td>
                      <td className={styles.price}>{o.total}</td>
                      <td><span className={`${styles.tag} ${styles[o.status]}`}>{o.status}</span></td>
                    </tr>
                  ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Inventory Alerts</div>
                    {inventory.filter(i=>i.status==='low').map(i=>(
                      <div key={i.item} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid #fdf8f3',fontSize:'13px'}}>
                        <div className={styles.bold}>{i.item}</div>
                        <span className={`${styles.tag} ${styles.cancelled}`}>{i.stock} {i.unit} (min: {i.min})</span>
                      </div>
                    ))}
                    {inventory.filter(i=>i.status==='ok').slice(0,2).map(i=>(
                      <div key={i.item} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid #fdf8f3',fontSize:'13px'}}>
                        <div className={styles.bold}>{i.item}</div>
                        <span className={`${styles.tag} ${styles.confirmed}`}>{i.stock} {i.unit}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Menu Items</div>
                    {menu.slice(0,4).map(m=>(
                      <div key={m.name} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #fdf8f3',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{m.name}</div><div className={styles.muted}>{m.category}</div></div>
                        <div className={styles.price}>{m.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {tab==='Orders'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Orders<button className={styles.addBtn}>+ New Order</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Customer</th><th>Type</th><th>Item</th><th>Total</th><th>Pickup</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{orders.map(o=>(
                  <tr key={o.id}>
                    <td className={styles.muted}>{o.id}</td>
                    <td><div className={styles.bold}>{o.customer}</div></td>
                    <td><span className={styles.catChip}>{o.type}</span></td>
                    <td className={styles.muted}>{o.item}</td>
                    <td className={styles.price}>{o.total}</td>
                    <td className={styles.muted}>{o.pickup}</td>
                    <td><span className={`${styles.tag} ${styles[o.status]}`}>{o.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>View</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Menu'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Menu Items<button className={styles.addBtn}>+ Add Item</button></div>
              <table className={styles.table}>
                <thead><tr><th>Item</th><th>Category</th><th>Price</th><th>Available</th><th>Actions</th></tr></thead>
                <tbody>{menu.map(m=>(
                  <tr key={m.name}>
                    <td><div className={styles.bold}>{m.name}</div></td>
                    <td><span className={styles.catChip}>{m.category}</span></td>
                    <td className={styles.price}>{m.price}</td>
                    <td><span className={`${styles.tag} ${m.available?styles.confirmed:styles.cancelled}`}>{m.available?'Yes':'No'}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Inventory'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Inventory Tracker<button className={styles.addBtn}>+ Add Item</button></div>
              <table className={styles.table}>
                <thead><tr><th>Ingredient</th><th>Current Stock</th><th>Unit</th><th>Min Level</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{inventory.map(i=>(
                  <tr key={i.item}>
                    <td><div className={styles.bold}>{i.item}</div></td>
                    <td className={`${styles.bold} ${i.status==='low'?styles.price:''}`}>{i.stock}</td>
                    <td className={styles.muted}>{i.unit}</td>
                    <td className={styles.muted}>{i.min}</td>
                    <td><span className={`${styles.tag} ${i.status==='low'?styles.cancelled:styles.confirmed}`}>{i.status==='low'?'Low Stock':'OK'}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Restock</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Customers'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Customer List</div>
              <table className={styles.table}>
                <thead><tr><th>Customer</th><th>Orders</th><th>Last Order</th><th>Type</th></tr></thead>
                <tbody>{orders.map(o=>(
                  <tr key={o.id}>
                    <td><div className={styles.bold}>{o.customer}</div></td>
                    <td className={styles.bold}>1</td>
                    <td className={styles.muted}>{o.pickup}</td>
                    <td><span className={styles.catChip}>{o.type}</span></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Inbound Leads'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Inbound Leads
                <div className={styles.filterRow}>
                  {['all','new','contacted','qualified','booked','lost'].map(f=>(
                    <button key={f} className={`${styles.filterBtn} ${leadFilter===f?styles.filterActive:''}`} onClick={()=>setLeadFilter(f)}>{f}</button>
                  ))}
                </div>
              </div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Source</th><th>Interest</th><th>Date</th><th>Status</th><th>Update</th></tr></thead>
                <tbody>{filteredLeads.map(l=>(
                  <tr key={l.id}>
                    <td><div className={styles.bold}>{l.name}</div></td>
                    <td className={styles.muted}>{l.source}</td>
                    <td><span className={styles.catChip}>{l.interest}</span></td>
                    <td className={styles.muted}>{l.date}</td>
                    <td><span className={`${styles.tag} ${styles['ld'+l.status]}`}>{l.status}</span></td>
                    <td><select className={styles.statusSelect} value={l.status} onChange={e=>updateLead(l.id,e.target.value)}>{['new','contacted','qualified','booked','lost'].map(s=><option key={s} value={s}>{s}</option>)}</select></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Edit Website'&&(
            <div className={styles.editShell}>
              <div className={styles.editNav}>
                <div className={styles.editNavTitle}>SECTIONS</div>
                {editSections.map(s=>(
                  <button key={s.id} className={`${styles.editNavItem} ${editSection===s.id?styles.editNavActive:''}`} onClick={()=>setEditSection(s.id)}>
                    <span className={styles.editNavLabel}>{s.label}</span>
                    <span className={styles.editNavSub}>{s.preview}</span>
                  </button>
                ))}
                <div className={styles.editSaveArea}>
                  <button className={styles.saveBtn} onClick={handleSave}>{saved?'✓ Saved!':'Save Changes'}</button>
                  <a href="/demos/bakery" target="_blank" className={styles.previewLink}>Preview site →</a>
                </div>
              </div>
              <div className={styles.editCanvas}>
                {editSection==='hero'&&(
                  <div className={styles.ecHero}>
                    <div className={styles.ecBadge}><input className={styles.inlineInput} value={content.badge} onChange={e=>set('badge',e.target.value)}/></div>
                    <h1 className={styles.ecH1}><textarea className={`${styles.inlineInput} ${styles.inlineH1}`} value={content.heroHeadline} rows={2} onChange={e=>set('heroHeadline',e.target.value)}/></h1>
                    <p className={styles.ecP}><textarea className={`${styles.inlineInput} ${styles.inlineP}`} value={content.heroSub} rows={2} onChange={e=>set('heroSub',e.target.value)}/></p>
                    <div className={styles.ecBtns}>
                      <div className={styles.ecBtn1}><input className={styles.inlineInput} value={content.cta1} onChange={e=>set('cta1',e.target.value)}/></div>
                      <div className={styles.ecBtn2}><input className={styles.inlineInput} value={content.cta2} onChange={e=>set('cta2',e.target.value)}/></div>
                    </div>
                  </div>
                )}
                {editSection==='menu'&&(
                  <div className={styles.ecMenu}>
                    <div className={styles.ecSectionLabel}>SIGNATURE ITEMS</div>
                    <div className={styles.ecMenuGrid}>
                      {['m1','m2','m3','m4','m5','m6'].map((k,i)=>(
                        <div key={k} className={styles.ecMenuCard}>
                          <div style={{fontSize:24,marginBottom:8}}>{'🍞🥐🌀🎂💍🎁'[i]}</div>
                          <input className={`${styles.inlineInput} ${styles.ecMenuName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>BAKERY INFO</div>
                    <div className={styles.ecContactGrid}>
                      {[['phone','📞 Phone',content.phone],['email','✉️ Email',content.email],['address','📍 Location',content.address],['hours','🕐 Hours',content.hours]].map(([k,label,val])=>(
                        <div key={k} className={styles.ecContactBlock}>
                          <div className={styles.ecFieldLabel}>{label}</div>
                          <input className={`${styles.inlineInput} ${styles.ecContactInput}`} value={val} onChange={e=>set(k,e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
