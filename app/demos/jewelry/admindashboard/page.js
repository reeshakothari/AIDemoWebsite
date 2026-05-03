'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Orders','Products','Collections','Customers','Inbound Leads','Edit Website']

const orders = [
  { id:'JW-4401', customer:'Isabelle Fontaine', item:'Diamond Solitaire Ring', material:'18k White Gold', total:'$3,800', date:'22 Apr', status:'confirmed' },
  { id:'JW-4400', customer:'Priya Sharma', item:'Sapphire Tennis Bracelet', material:'Platinum', total:'$5,200', date:'21 Apr', status:'shipped' },
  { id:'JW-4399', customer:'Mei Lin', item:'Pearl Drop Earrings', material:'925 Silver', total:'$480', date:'21 Apr', status:'pending' },
  { id:'JW-4398', customer:'Sofia Reyes', item:'Bespoke Engagement Ring', material:'18k Rose Gold', total:'$8,400', date:'20 Apr', status:'confirmed' },
  { id:'JW-4397', customer:'Emma Clarke', item:'Gold Chain Necklace', material:'14k Yellow Gold', total:'$920', date:'19 Apr', status:'shipped' },
]

const products = [
  { sku:'JW-R01', name:'Diamond Solitaire Ring', collection:'Eternal', material:'18k White Gold', price:'$3,800', stock:4 },
  { sku:'JW-B01', name:'Sapphire Tennis Bracelet', collection:'Royale', material:'Platinum', price:'$5,200', stock:2 },
  { sku:'JW-E01', name:'Pearl Drop Earrings', collection:'Classic', material:'925 Silver', price:'$480', stock:12 },
  { sku:'JW-R02', name:'Bespoke Ring (Bespoke)', collection:'Custom', material:'Various', price:'POA', stock:0 },
  { sku:'JW-N01', name:'Gold Chain Necklace', collection:'Classic', material:'14k Yellow Gold', price:'$920', stock:7 },
]

const customers = [
  { name:'Isabelle Fontaine', orders:4, spent:'$14,200', tier:'Platinum', last:'22 Apr' },
  { name:'Priya Sharma', orders:2, spent:'$6,100', tier:'Gold', last:'21 Apr' },
  { name:'Sofia Reyes', orders:1, spent:'$8,400', tier:'Gold', last:'20 Apr' },
  { name:'Emma Clarke', orders:6, spent:'$9,800', tier:'Platinum', last:'19 Apr' },
]

const initLeads = [
  { id:1, name:'Charlotte Webb', source:'Instagram', interest:'Engagement Ring Design', date:'22 Apr', status:'new' },
  { id:2, name:'Aisha Karimi', source:'Website', interest:'Anniversary Gift', date:'21 Apr', status:'contacted' },
  { id:3, name:'Nina Vogel', source:'Referral', interest:'Custom Necklace', date:'20 Apr', status:'qualified' },
  { id:4, name:'Lily Chen', source:'Boutique Visit', interest:'Eternity Band', date:'19 Apr', status:'booked' },
  { id:5, name:'Grace Hall', source:'Google Ad', interest:'Pearl Collection', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'collections', label:'Collections', preview:'Collection highlights' },
  { id:'contact', label:'Contact & Atelier', preview:'Address, hours, contact' },
]

export default function JewelryAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'MAISON LUMIÈRE · EST. 2008',
    heroHeadline:'Jewellery Crafted for a Lifetime.',
    heroSub:'Each piece tells a story. Ethically sourced, handcrafted to perfection, designed to be treasured for generations.',
    cta1:'Explore Collections', cta2:'Bespoke Design',
    c1:'Eternal · Diamonds', c2:'Royale · Sapphires', c3:'Classic · Pearls', c4:'Rose Gold · Romance', c5:'Bespoke · Custom', c6:'Archive · Vintage',
    phone:'+1 (555) 241-GOLD', email:'atelier@maisonlumiere.com', address:'18 Jewellery Quarter, Suite 2', hours:'Mon–Sat 10am–6pm',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>MAISON LUMIÈRE</div>
          <div className={styles.brandSub}>ADMIN PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','🛍️','💎','✨','👥','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/jewelry" className={styles.viewSite}>← View Live Site</a></div>
      </aside>
      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Maison Lumière · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>2</span></div>
            <div className={styles.avatar}>ML</div>
          </div>
        </div>
        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Orders This Month',val:'42',sub:'↑ 8 vs last',color:'#d4af37'},
                  {label:'Revenue (Apr)',val:'$88.4K',sub:'+22% vs Mar',color:'#c4a662'},
                  {label:'Bespoke Commissions',val:'6',sub:'In progress',color:'#94a3b8'},
                  {label:'Avg Order Value',val:'$2,104',sub:'↑ 14%',color:'#34d399'},
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
                  <div className={styles.panelHead}>Recent Orders<span className={styles.chip}>42 this month</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Customer</th><th>Item</th><th>Material</th><th>Total</th><th>Status</th></tr></thead>
                  <tbody>{orders.map(o=>(
                    <tr key={o.id}>
                      <td><div className={styles.bold}>{o.customer}</div></td>
                      <td className={styles.muted}>{o.item}</td>
                      <td><span className={styles.catChip}>{o.material}</span></td>
                      <td className={styles.price}>{o.total}</td>
                      <td><span className={`${styles.tag} ${styles[o.status]}`}>{o.status}</span></td>
                    </tr>
                  ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>VIP Customers</div>
                    {customers.map(c=>(
                      <div key={c.name} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid rgba(212,175,55,0.05)',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{c.name}</div><div className={styles.muted}>{c.tier} · {c.orders} orders</div></div>
                        <div className={styles.price}>{c.spent}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Stock Alerts</div>
                    {products.filter(p=>p.stock<5).map(p=>(
                      <div key={p.sku} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(212,175,55,0.05)',fontSize:'13px'}}>
                        <div className={styles.bold}>{p.name}</div>
                        <span className={`${styles.tag} ${p.stock===0?styles.outofstock:styles.lowstock}`}>{p.stock===0?'Out':p.stock+' left'}</span>
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
                <thead><tr><th>ID</th><th>Customer</th><th>Item</th><th>Material</th><th>Total</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{orders.map(o=>(
                  <tr key={o.id}>
                    <td className={styles.muted}>{o.id}</td>
                    <td><div className={styles.bold}>{o.customer}</div></td>
                    <td className={styles.muted}>{o.item}</td>
                    <td><span className={styles.catChip}>{o.material}</span></td>
                    <td className={styles.price}>{o.total}</td>
                    <td className={styles.muted}>{o.date}</td>
                    <td><span className={`${styles.tag} ${styles[o.status]}`}>{o.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>View</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Products'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Product Catalogue<button className={styles.addBtn}>+ Add Piece</button></div>
              <table className={styles.table}>
                <thead><tr><th>SKU</th><th>Name</th><th>Collection</th><th>Material</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead>
                <tbody>{products.map(p=>(
                  <tr key={p.sku}>
                    <td className={styles.muted}>{p.sku}</td>
                    <td><div className={styles.bold}>{p.name}</div></td>
                    <td><span className={styles.catChip}>{p.collection}</span></td>
                    <td className={styles.muted}>{p.material}</td>
                    <td className={styles.price}>{p.price}</td>
                    <td><span className={`${styles.tag} ${p.stock===0?styles.outofstock:p.stock<4?styles.lowstock:styles.instock}`}>{p.stock===0?'Out':p.stock}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Collections'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Collections</div>
              {['Eternal · Diamonds','Royale · Sapphires','Classic · Pearls','Rose Gold · Romance'].map(c=>(
                <div key={c} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 0',borderBottom:'1px solid rgba(212,175,55,0.06)'}}>
                  <div className={styles.bold}>{c}</div>
                  <div className={styles.actions}><button className={styles.rowBtn}>Edit</button><button className={styles.rowBtn}>View</button></div>
                </div>
              ))}
            </div>
          )}
          {tab==='Customers'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Client Register</div>
              <table className={styles.table}>
                <thead><tr><th>Client</th><th>Orders</th><th>Total Spent</th><th>Last Order</th><th>Tier</th><th>Actions</th></tr></thead>
                <tbody>{customers.map(c=>(
                  <tr key={c.name}>
                    <td><div className={styles.bold}>{c.name}</div></td>
                    <td className={styles.bold}>{c.orders}</td>
                    <td className={styles.price}>{c.spent}</td>
                    <td className={styles.muted}>{c.last}</td>
                    <td><span className={styles.catChip}>{c.tier}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Profile</button></div></td>
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
                <thead><tr><th>Client</th><th>Source</th><th>Interest</th><th>Date</th><th>Status</th><th>Update</th></tr></thead>
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
                  <a href="/demos/jewelry" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection==='collections'&&(
                  <div className={styles.ecCollections}>
                    <div className={styles.ecSectionLabel}>COLLECTIONS</div>
                    <div className={styles.ecCollGrid}>
                      {['c1','c2','c3','c4','c5','c6'].map(k=>(
                        <div key={k} className={styles.ecCollCard}>
                          <div style={{fontSize:24,marginBottom:10}}>💎</div>
                          <input className={`${styles.inlineInput} ${styles.ecCollName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>ATELIER & CONTACT</div>
                    <div className={styles.ecContactGrid}>
                      {[['phone','📞 Phone',content.phone],['email','✉️ Email',content.email],['address','📍 Atelier',content.address],['hours','🕐 Hours',content.hours]].map(([k,label,val])=>(
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
