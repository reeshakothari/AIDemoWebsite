'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Orders','Products','Inventory','Customers','Inbound Leads','Edit Website']

const orders = [
  { id:'ORD-4401', customer:'Zara Whitfield', items:'Silk Slip Dress, Belt', total:'$348', date:'22 Apr', status:'shipped' },
  { id:'ORD-4400', customer:'Mei Lin', items:'Oversized Blazer', total:'$192', date:'22 Apr', status:'confirmed' },
  { id:'ORD-4399', customer:'Isabella Rossi', items:'Structured Coat, Scarf', total:'$520', date:'21 Apr', status:'pending' },
  { id:'ORD-4398', customer:'Aisha Karimi', items:'Velvet Midi Skirt', total:'$165', date:'21 Apr', status:'shipped' },
  { id:'ORD-4397', customer:'Sofia Park', items:'Linen Co-ord Set', total:'$280', date:'20 Apr', status:'returned' },
]

const products = [
  { sku:'SKU-001', name:'Silk Slip Dress', collection:'SS26', price:'$245', stock:18, status:'active' },
  { sku:'SKU-002', name:'Oversized Blazer', collection:'FW25', price:'$192', stock:7, status:'active' },
  { sku:'SKU-003', name:'Structured Coat', collection:'FW25', price:'$380', stock:3, status:'active' },
  { sku:'SKU-004', name:'Velvet Midi Skirt', collection:'SS26', price:'$165', stock:24, status:'active' },
  { sku:'SKU-005', name:'Linen Co-ord Set', collection:'SS26', price:'$280', stock:0, status:'pending' },
]

const customers = [
  { name:'Zara Whitfield', orders:8, spent:'$2,340', tier:'VIP', last:'22 Apr' },
  { name:'Mei Lin', orders:4, spent:'$890', tier:'Regular', last:'22 Apr' },
  { name:'Isabella Rossi', orders:12, spent:'$4,100', tier:'VIP', last:'21 Apr' },
  { name:'Aisha Karimi', orders:3, spent:'$620', tier:'Regular', last:'21 Apr' },
]

const initLeads = [
  { id:1, name:'Chloe Fontaine', source:'Instagram', interest:'SS26 Collection', date:'22 Apr', status:'new' },
  { id:2, name:'Nina Vogel', source:'Website', interest:'VIP Styling Session', date:'21 Apr', status:'contacted' },
  { id:3, name:'Priya Sharma', source:'Referral', interest:'Wedding Wardrobe', date:'20 Apr', status:'qualified' },
  { id:4, name:'Elena Vasquez', source:'Pinterest', interest:'Bespoke Order', date:'19 Apr', status:'booked' },
  { id:5, name:'Jamie Chen', source:'Google Ad', interest:'FW25 Clearance', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'collections', label:'Collections', preview:'Season highlights' },
  { id:'contact', label:'Contact Info', preview:'Store address, hours' },
]

export default function FashionAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [orderFilter, setOrderFilter] = useState('all')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'✦ NEW COLLECTION LIVE ✦',
    heroHeadline:'Dress the Story You Want to Tell.',
    heroSub:'Curated collections for the modern woman. Elevated basics, statement pieces, and everything in between.',
    cta1:'Shop Now', cta2:'View Lookbook',
    c1:'Spring / Summer 2026', c2:'The Edit', c3:'Resort Collection', c4:'FW25 Archive', c5:'Accessories', c6:'Bespoke',
    phone:'+1 (555) 324-MODE', email:'hello@maison-arc.com', address:'24 Fashion District, Suite 1', hours:'Mon–Sat 10am–7pm',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredOrders = orderFilter==='all' ? orders : orders.filter(o=>o.status===orderFilter)
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>MAISON ARC</div>
          <div className={styles.brandSub}>ADMIN PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','🛍️','👗','📦','👥','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/fashion" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Maison Arc · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>3</span></div>
            <div className={styles.avatar}>MA</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Orders This Month',val:'184',sub:'↑ 22 vs last month',color:'#ec4899'},
                  {label:'Revenue (Apr)',val:'$48.2K',sub:'+14% vs Mar',color:'#8b5cf6'},
                  {label:'Active Products',val:'62',sub:'4 new launches',color:'#f59e0b'},
                  {label:'Avg Order Value',val:'$262',sub:'↑ 8%',color:'#10b981'},
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
                  <div className={styles.panelHead}>Recent Orders<span className={styles.chip}>184 total</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th></tr></thead>
                    <tbody>{orders.map(o=>(
                      <tr key={o.id}>
                        <td className={styles.muted}>{o.id}</td>
                        <td><div className={styles.bold}>{o.customer}</div></td>
                        <td className={styles.muted}>{o.items}</td>
                        <td className={styles.price}>{o.total}</td>
                        <td><span className={`${styles.tag} ${styles[o.status]}`}>{o.status}</span></td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Products</div>
                    {products.slice(0,4).map(p=>(
                      <div key={p.sku} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(255,255,255,0.03)',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{p.name}</div><div className={styles.muted}>{p.collection}</div></div>
                        <div className={styles.price}>{p.price}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Inventory Alerts</div>
                    {products.filter(p=>p.stock<8).map(p=>(
                      <div key={p.sku} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(255,255,255,0.03)',fontSize:'13px'}}>
                        <div className={styles.bold}>{p.name}</div>
                        <span className={`${styles.tag} ${p.stock===0?styles.cancelled:styles.pending}`}>{p.stock===0?'Out of stock':`${p.stock} left`}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab==='Orders'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                All Orders
                <div style={{display:'flex',gap:8}}>
                  <div className={styles.filterRow}>
                    {['all','confirmed','shipped','pending','returned','cancelled'].map(f=>(
                      <button key={f} className={`${styles.filterBtn} ${orderFilter===f?styles.filterActive:''}`} onClick={()=>setOrderFilter(f)}>{f}</button>
                    ))}
                  </div>
                </div>
              </div>
              <table className={styles.table}>
                <thead><tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{filteredOrders.map(o=>(
                  <tr key={o.id}>
                    <td className={styles.muted}>{o.id}</td>
                    <td><div className={styles.bold}>{o.customer}</div></td>
                    <td className={styles.muted}>{o.items}</td>
                    <td className={styles.price}>{o.total}</td>
                    <td className={styles.muted}>{o.date}</td>
                    <td><span className={`${styles.tag} ${styles[o.status]}`}>{o.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>View</button><button className={styles.rowBtn}>Ship</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Products'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Product Catalogue<button className={styles.addBtn}>+ Add Product</button></div>
              <table className={styles.table}>
                <thead><tr><th>SKU</th><th>Product</th><th>Collection</th><th>Price</th><th>Stock</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{products.map(p=>(
                  <tr key={p.sku}>
                    <td className={styles.muted}>{p.sku}</td>
                    <td><div className={styles.bold}>{p.name}</div></td>
                    <td><span className={styles.catChip}>{p.collection}</span></td>
                    <td className={styles.price}>{p.price}</td>
                    <td className={styles.bold}>{p.stock}</td>
                    <td><span className={`${styles.tag} ${p.stock===0?styles.cancelled:styles.confirmed}`}>{p.stock===0?'Out of Stock':p.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Inventory'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Inventory Overview</div>
              <table className={styles.table}>
                <thead><tr><th>SKU</th><th>Product</th><th>Collection</th><th>In Stock</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{products.map(p=>(
                  <tr key={p.sku}>
                    <td className={styles.muted}>{p.sku}</td>
                    <td><div className={styles.bold}>{p.name}</div></td>
                    <td><span className={styles.catChip}>{p.collection}</span></td>
                    <td className={`${styles.bold} ${p.stock<5?styles.price:''}`}>{p.stock}</td>
                    <td><span className={`${styles.tag} ${p.stock===0?styles.cancelled:p.stock<8?styles.pending:styles.confirmed}`}>{p.stock===0?'Out of Stock':p.stock<8?'Low Stock':'In Stock'}</span></td>
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
                <thead><tr><th>Customer</th><th>Orders</th><th>Total Spent</th><th>Last Order</th><th>Tier</th><th>Actions</th></tr></thead>
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
              <div className={styles.panelHead}>
                Inbound Leads
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
                  <a href="/demos/fashion" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                          <input className={`${styles.inlineInput} ${styles.ecCollName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>CONTACT & STORE</div>
                    <div className={styles.ecContactGrid}>
                      {[['phone','📞 Phone',content.phone],['email','✉️ Email',content.email],['address','📍 Address',content.address],['hours','🕐 Hours',content.hours]].map(([k,label,val])=>(
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
