'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Orders', 'Menu', 'Riders', 'Customers', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Priya Mehta', source: 'Google', interest: 'Corporate Catering', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Liam Carter', source: 'Instagram', interest: 'Weekly Meal Plan', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Sofia Russo', source: 'Referral', interest: 'Restaurant Partner', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Kai Nakamura', source: 'App', interest: 'Subscription Box', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Amira Osei', source: 'Facebook', interest: 'Event Catering', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'menu', label: 'Featured Menu', preview: '6 menu item cards' },
  { id: 'contact', label: 'Contact & Delivery', preview: 'Address, phone, zones' },
]

export default function FoodDeliveryAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'FAST FOOD DELIVERY',
    heroHeadline: 'Hot Food, Fast Delivery',
    heroSub: 'Order from the best local restaurants and get it delivered in 30 minutes or less.',
    cta1: 'Order Now',
    cta2: 'View Menu',
    m1name: 'Spicy Ramen Bowl', m2name: 'Margherita Pizza', m3name: 'BBQ Burger',
    m4name: 'Pad Thai', m5name: 'Caesar Salad', m6name: 'Truffle Fries',
    m1price: '$14.99', m2price: '$18.50', m3price: '$13.99',
    m4price: '$12.50', m5price: '$10.99', m6price: '$7.99',
    phone: '(555) 444-5566', email: 'support@quickbite.com',
    address: '88 Market Street, Chicago, IL 60601',
    deliveryZone: 'Up to 10km · Est. 25–40 min',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const orders = [
    { id: 'ORD-8801', customer: 'Priya M.', items: 'Ramen Bowl × 2', total: '$31.98', rider: 'Jake S.', eta: '12 min', status: 'delivering' },
    { id: 'ORD-8802', customer: 'Liam C.', items: 'Pizza × 1, Fries × 2', total: '$34.48', rider: 'Mia T.', eta: '28 min', status: 'preparing' },
    { id: 'ORD-8803', customer: 'Sofia R.', items: 'Burger × 3', total: '$41.97', rider: 'Tom K.', eta: 'Delivered', status: 'delivered' },
    { id: 'ORD-8804', customer: 'Kai N.', items: 'Pad Thai × 1', total: '$12.50', rider: 'Assigned', eta: '35 min', status: 'confirmed' },
    { id: 'ORD-8805', customer: 'Amira O.', items: 'Caesar Salad × 2', total: '$21.98', rider: '—', eta: '—', status: 'cancelled' },
  ]

  const menuItems = [
    { name: 'Spicy Ramen Bowl', category: 'Noodles', price: '$14.99', rating: 4.8, orders: 342, available: true },
    { name: 'Margherita Pizza', category: 'Pizza', price: '$18.50', rating: 4.7, orders: 288, available: true },
    { name: 'BBQ Burger', category: 'Burgers', price: '$13.99', rating: 4.6, orders: 401, available: true },
    { name: 'Pad Thai', category: 'Asian', price: '$12.50', rating: 4.5, orders: 219, available: true },
    { name: 'Caesar Salad', category: 'Salads', price: '$10.99', rating: 4.3, orders: 155, available: false },
    { name: 'Truffle Fries', category: 'Sides', price: '$7.99', rating: 4.9, orders: 512, available: true },
  ]

  const riders = [
    { name: 'Jake Santos', zone: 'Downtown', orders: 18, rating: 4.9, status: 'On Delivery' },
    { name: 'Mia Tanaka', zone: 'Midtown', orders: 14, rating: 4.8, status: 'On Delivery' },
    { name: 'Tom Klein', zone: 'Westside', orders: 22, rating: 4.7, status: 'Available' },
    { name: 'Rita Gomez', zone: 'Eastside', orders: 9, rating: 4.6, status: 'Off Shift' },
    { name: 'Sam Park', zone: 'North', orders: 16, rating: 4.8, status: 'Available' },
  ]

  const customers = [
    { name: 'Priya Mehta', orders: 34, totalSpent: '$482', lastOrder: 'Apr 27', joined: 'Jan 2024' },
    { name: 'Liam Carter', orders: 21, totalSpent: '$298', lastOrder: 'Apr 26', joined: 'Mar 2024' },
    { name: 'Sofia Russo', orders: 58, totalSpent: '$841', lastOrder: 'Apr 27', joined: 'Nov 2023' },
    { name: 'Kai Nakamura', orders: 12, totalSpent: '$167', lastOrder: 'Apr 25', joined: 'Feb 2025' },
    { name: 'Amira Osei', orders: 7, totalSpent: '$94', lastOrder: 'Apr 18', joined: 'Apr 2025' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Quick<span>Bite</span></div>
          <div className={styles.brandSub}>DELIVERY ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '📊' : t === 'Orders' ? '🛵' : t === 'Menu' ? '🍽️' :
                t === 'Riders' ? '🏍️' : t === 'Customers' ? '👥' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Orders' && <span className={styles.navBadge}>4</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/food-delivery" target="_blank" className={styles.viewSite}>View Live Site →</a>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Monday, 28 April 2026</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>4</span></div>
            <div className={styles.avatar}>QB</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'LIVE ORDERS', val: '24', sub: '8 delivering · 16 preparing', a: '#f97316' },
                  { label: 'TODAY\'S REVENUE', val: '$2,840', sub: '+18% vs yesterday', a: '#10b981' },
                  { label: 'ACTIVE RIDERS', val: '12', sub: '5 on delivery right now', a: '#3b82f6' },
                  { label: 'AVG DELIVERY TIME', val: '28 min', sub: 'Target: 30 min ✓', a: '#8b5cf6' },
                ].map(s => (
                  <div key={s.label} className={styles.statCard} style={{ '--a': s.a }}>
                    <div className={styles.statVal}>{s.val}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                    <div className={styles.statSub}>{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className={styles.twoCol}>
                <div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Live Orders <span className={styles.chip}>24 active</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>ORDER</th><th>CUSTOMER</th><th>ITEMS</th><th>TOTAL</th><th>RIDER</th><th>STATUS</th></tr></thead>
                      <tbody>
                        {orders.map(o => (
                          <tr key={o.id}>
                            <td className={styles.muted}>{o.id}</td>
                            <td><span className={styles.bold}>{o.customer}</span></td>
                            <td>{o.items}</td>
                            <td><span className={styles.price}>{o.total}</span></td>
                            <td>{o.rider}</td>
                            <td><span className={`${styles.tag} ${styles[o.status]}`}>{o.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Items Today</div>
                    {menuItems.slice(0,4).map(m => (
                      <div key={m.name} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(249,115,22,0.04)' }}>
                        <span className={styles.muted}>{m.name}</span>
                        <span className={styles.bold}>{m.orders} orders</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Rider Status</div>
                    {riders.slice(0,4).map(r => (
                      <div key={r.name} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderBottom:'1px solid rgba(249,115,22,0.04)' }}>
                        <span className={styles.muted}>{r.name}</span>
                        <span className={`${styles.tag} ${r.status==='On Delivery'?styles.delivering:r.status==='Available'?styles.confirmed:styles.delivered}`}>{r.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Orders' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Orders <button className={styles.addBtn}>+ New Order</button></div>
              <table className={styles.table}>
                <thead><tr><th>ORDER</th><th>CUSTOMER</th><th>ITEMS</th><th>TOTAL</th><th>RIDER</th><th>ETA</th><th>STATUS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {orders.map(o => (
                    <tr key={o.id}>
                      <td className={styles.muted}>{o.id}</td>
                      <td><span className={styles.bold}>{o.customer}</span></td>
                      <td>{o.items}</td>
                      <td><span className={styles.price}>{o.total}</span></td>
                      <td>{o.rider}</td>
                      <td>{o.eta}</td>
                      <td><span className={`${styles.tag} ${styles[o.status]}`}>{o.status}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Track</button><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Menu' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Menu Items <button className={styles.addBtn}>+ Add Item</button></div>
              <table className={styles.table}>
                <thead><tr><th>ITEM</th><th>CATEGORY</th><th>PRICE</th><th>RATING</th><th>ORDERS</th><th>STATUS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {menuItems.map(m => (
                    <tr key={m.name}>
                      <td><span className={styles.bold}>{m.name}</span></td>
                      <td><span className={styles.catChip}>{m.category}</span></td>
                      <td><span className={styles.price}>{m.price}</span></td>
                      <td>⭐ {m.rating}</td>
                      <td>{m.orders}</td>
                      <td><span className={`${styles.tag} ${m.available?styles.confirmed:styles.cancelled}`}>{m.available?'Available':'Unavailable'}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Riders' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Rider Fleet <button className={styles.addBtn}>+ Add Rider</button></div>
              <table className={styles.table}>
                <thead><tr><th>RIDER</th><th>ZONE</th><th>ORDERS TODAY</th><th>RATING</th><th>STATUS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {riders.map(r => (
                    <tr key={r.name}>
                      <td><span className={styles.bold}>{r.name}</span></td>
                      <td>{r.zone}</td>
                      <td>{r.orders}</td>
                      <td>⭐ {r.rating}</td>
                      <td><span className={`${styles.tag} ${r.status==='On Delivery'?styles.delivering:r.status==='Available'?styles.confirmed:styles.delivered}`}>{r.status}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>View</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Customers' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Customers <button className={styles.addBtn}>+ Add Customer</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>ORDERS</th><th>TOTAL SPENT</th><th>LAST ORDER</th><th>MEMBER SINCE</th></tr></thead>
                <tbody>
                  {customers.map(c => (
                    <tr key={c.name}>
                      <td><span className={styles.bold}>{c.name}</span></td>
                      <td>{c.orders}</td>
                      <td><span className={styles.price}>{c.totalSpent}</span></td>
                      <td>{c.lastOrder}</td>
                      <td className={styles.muted}>{c.joined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Inbound Leads' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                Inbound Leads
                <div className={styles.filterRow}>
                  {['all','new','contacted','qualified','booked','lost'].map(f => (
                    <button key={f} className={`${styles.filterBtn} ${leadFilter===f?styles.filterActive:''}`} onClick={()=>setLeadFilter(f)}>{f}</button>
                  ))}
                </div>
              </div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>SOURCE</th><th>INTEREST</th><th>DATE</th><th>STATUS</th></tr></thead>
                <tbody>
                  {filteredLeads.map(l => (
                    <tr key={l.id}>
                      <td><span className={styles.bold}>{l.name}</span></td>
                      <td>{l.source}</td>
                      <td>{l.interest}</td>
                      <td className={styles.muted}>{l.date}</td>
                      <td>
                        <select className={styles.statusSelect} value={l.status} onChange={e=>updateLead(l.id,e.target.value)}>
                          {['new','contacted','qualified','booked','lost'].map(s=><option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Edit Website' && (
            <div className={styles.editShell}>
              <div className={styles.editNav}>
                <div className={styles.editNavTitle}>SECTIONS</div>
                {editSections.map(s => (
                  <button key={s.id} className={`${styles.editNavItem} ${editSection===s.id?styles.editNavActive:''}`} onClick={()=>setEditSection(s.id)}>
                    <span className={styles.editNavLabel}>{s.label}</span>
                    <span className={styles.editNavSub}>{s.preview}</span>
                  </button>
                ))}
                <div className={styles.editSaveArea}>
                  <button className={styles.saveBtn} onClick={handleSave}>{saved ? '✓ Saved!' : 'Save Changes'}</button>
                  <a href="/demos/food-delivery" target="_blank" className={styles.previewLink}>Preview site →</a>
                </div>
              </div>
              <div className={styles.editCanvas}>
                {editSection === 'hero' && (
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
                {editSection === 'menu' && (
                  <div className={styles.ecMenu}>
                    <div className={styles.ecSectionLabel}>FEATURED MENU</div>
                    <div className={styles.ecMenuGrid}>
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className={styles.ecMenuCard}>
                          <div className={styles.ecMenuName}><input className={styles.inlineInput} value={content[`m${i}name`]} onChange={e=>set(`m${i}name`,e.target.value)}/></div>
                          <div className={styles.ecMenuPrice}><input className={styles.inlineInput} value={content[`m${i}price`]} onChange={e=>set(`m${i}price`,e.target.value)}/></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection === 'contact' && (
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>CONTACT & DELIVERY</div>
                    <div className={styles.ecContactGrid}>
                      {[
                        { label: 'PHONE', key: 'phone' }, { label: 'EMAIL', key: 'email' },
                        { label: 'ADDRESS', key: 'address' }, { label: 'DELIVERY ZONE', key: 'deliveryZone' },
                      ].map(f => (
                        <div key={f.key} className={styles.ecContactBlock}>
                          <div className={styles.ecFieldLabel}>{f.label}</div>
                          <input className={`${styles.inlineInput} ${styles.ecContactInput}`} value={content[f.key]} onChange={e=>set(f.key,e.target.value)}/>
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
