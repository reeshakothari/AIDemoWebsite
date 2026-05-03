'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Inventory', 'Sales', 'Test Drives', 'Leads', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Derek Walsh', source: 'Google', interest: '2024 BMW X5', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Simone Dubois', source: 'AutoTrader', interest: 'Mercedes C-Class', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Ryan Nguyen', source: 'Walk-in', interest: 'Ford F-150', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Hana Petrov', source: 'Referral', interest: 'Audi Q7', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Carlos Lima', source: 'Instagram', interest: 'Toyota Camry', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'inventory', label: 'Featured Cars', preview: '6 vehicle cards' },
  { id: 'contact', label: 'Contact & Hours', preview: 'Address, phone, hours' },
]

export default function CarDealershipAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'PREMIUM AUTO DEALERSHIP',
    heroHeadline: 'Drive Your Dream Car Today',
    heroSub: 'Hundreds of new and pre-owned vehicles in stock. Competitive financing. Expert service.',
    cta1: 'Browse Inventory',
    cta2: 'Book Test Drive',
    c1name: '2024 BMW X5', c2name: '2024 Mercedes C300', c3name: '2024 Audi Q7',
    c4name: '2024 Ford F-150', c5name: '2024 Toyota Camry', c6name: '2024 Tesla Model 3',
    c1price: '$72,900', c2price: '$56,400', c3price: '$68,750',
    c4price: '$48,200', c5price: '$31,500', c6price: '$42,990',
    phone: '(555) 777-8899', email: 'sales@peakautomotive.com',
    address: '2200 Auto Drive, Dallas, TX 75201',
    hours: 'Mon–Fri 9am–8pm · Sat 9am–6pm · Sun 11am–5pm',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const inventory = [
    { vin: 'WBA5E1C5X', make: 'BMW', model: 'X5 xDrive40i', year: 2024, color: 'Alpine White', miles: 0, price: '$72,900', status: 'available' },
    { vin: 'WDDWF4JB3', make: 'Mercedes', model: 'C300 Sedan', year: 2024, color: 'Obsidian Black', miles: 0, price: '$56,400', status: 'reserved' },
    { vin: 'WA1LHAF73', make: 'Audi', model: 'Q7 Premium Plus', year: 2024, color: 'Mythos Black', miles: 0, price: '$68,750', status: 'available' },
    { vin: '1FTFW1E83', make: 'Ford', model: 'F-150 Lariat', year: 2024, color: 'Iconic Silver', miles: 1200, price: '$48,200', status: 'testdrive' },
    { vin: '4T1BZ1HK8', make: 'Toyota', model: 'Camry XSE', year: 2024, color: 'Midnight Black', miles: 0, price: '$31,500', status: 'sold' },
    { vin: '5YJ3E1EA1', make: 'Tesla', model: 'Model 3 LR AWD', year: 2024, color: 'Pearl White', miles: 0, price: '$42,990', status: 'available' },
  ]

  const sales = [
    { id: 'SALE-441', customer: 'Ryan Nguyen', vehicle: '2024 Ford F-150', price: '$48,200', finance: 'Financed', date: 'Apr 22', salesperson: 'Mike R.', status: 'completed' },
    { id: 'SALE-442', customer: 'Hana Petrov', vehicle: '2024 Audi Q7', price: '$68,750', finance: 'Cash', date: 'Apr 24', salesperson: 'Lisa T.', status: 'completed' },
    { id: 'SALE-443', customer: 'Derek Walsh', vehicle: '2024 BMW X5', price: '$72,900', finance: 'Financed', date: 'Apr 27', salesperson: 'Mike R.', status: 'pending' },
    { id: 'SALE-444', customer: 'Simone Dubois', vehicle: '2024 Mercedes C300', price: '$56,400', finance: 'Lease', date: 'Apr 27', salesperson: 'Jake W.', status: 'pending' },
  ]

  const testDrives = [
    { id: 'TD-201', customer: 'Derek Walsh', vehicle: '2024 BMW X5', date: 'Apr 27', time: '10:00 AM', salesperson: 'Mike R.', status: 'confirmed' },
    { id: 'TD-202', customer: 'Simone Dubois', vehicle: '2024 Mercedes C300', date: 'Apr 27', time: '2:00 PM', salesperson: 'Lisa T.', status: 'confirmed' },
    { id: 'TD-203', customer: 'Carlos Lima', vehicle: '2024 Toyota Camry', date: 'Apr 28', time: '11:00 AM', salesperson: 'Jake W.', status: 'pending' },
    { id: 'TD-204', customer: 'Ryan Nguyen', vehicle: '2024 Ford F-150', date: 'Apr 28', time: '3:30 PM', salesperson: 'Mike R.', status: 'completed' },
  ]

  const crmLeads = [
    { name: 'Derek Walsh', interest: '2024 BMW X5', budget: '$75k', contact: 'Apr 22', follow: 'Today', score: 'Hot' },
    { name: 'Simone Dubois', interest: 'Mercedes C-Class', budget: '$60k', contact: 'Apr 21', follow: 'Today', score: 'Hot' },
    { name: 'Ryan Nguyen', interest: 'Ford F-150', budget: '$50k', contact: 'Apr 20', follow: 'Done', score: 'Sold' },
    { name: 'Hana Petrov', interest: 'Audi Q7', budget: '$70k', contact: 'Apr 19', follow: 'Done', score: 'Sold' },
    { name: 'Carlos Lima', interest: 'Toyota Camry', budget: '$35k', contact: 'Apr 18', follow: 'Apr 30', score: 'Warm' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>PEAK</span> AUTO</div>
          <div className={styles.brandSub}>DEALERSHIP ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '📊' : t === 'Inventory' ? '🚗' : t === 'Sales' ? '💰' :
                t === 'Test Drives' ? '🔑' : t === 'Leads' ? '🎯' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Test Drives' && <span className={styles.navBadge}>2</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/car-dealership" target="_blank" className={styles.viewSite}>View Live Site →</a>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Monday, 28 April 2026</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>2</span></div>
            <div className={styles.avatar}>PA</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'CARS IN STOCK', val: '148', sub: '12 new arrivals this week', a: '#dc2626' },
                  { label: 'MONTHLY SALES', val: '34', sub: '$2.1M total value', a: '#f59e0b' },
                  { label: 'TEST DRIVES TODAY', val: '8', sub: '3 confirmed · 5 pending', a: '#8b5cf6' },
                  { label: 'ACTIVE LEADS', val: '62', sub: '18 hot leads', a: '#10b981' },
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
                    <div className={styles.panelHead}>Inventory Snapshot <span className={styles.chip}>148 vehicles</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>VEHICLE</th><th>YEAR</th><th>PRICE</th><th>STATUS</th></tr></thead>
                      <tbody>
                        {inventory.map(v => (
                          <tr key={v.vin}>
                            <td><span className={styles.bold}>{v.make} {v.model}</span><br /><span className={styles.muted}>{v.color}</span></td>
                            <td>{v.year}</td>
                            <td><span className={styles.price}>{v.price}</span></td>
                            <td><span className={`${styles.tag} ${styles[v.status]}`}>{v.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Today's Test Drives</div>
                    {testDrives.slice(0,3).map(td => (
                      <div key={td.id} style={{ padding:'8px 0', borderBottom:'1px solid rgba(220,38,38,0.04)' }}>
                        <div className={styles.bold}>{td.customer}</div>
                        <div className={styles.muted}>{td.vehicle} · {td.time}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Sales This Month</div>
                    {[
                      { label: 'Vehicles sold', val: '34' },
                      { label: 'Revenue', val: '$2.1M' },
                      { label: 'Financed', val: '22' },
                      { label: 'Avg deal size', val: '$61,800' },
                    ].map(s => (
                      <div key={s.label} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(220,38,38,0.04)' }}>
                        <span className={styles.muted}>{s.label}</span>
                        <span className={styles.bold}>{s.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Inventory' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Vehicle Inventory <button className={styles.addBtn}>+ Add Vehicle</button></div>
              <div className={styles.filterRow} style={{ marginBottom: 16 }}>
                {['All', 'Available', 'Reserved', 'Test Drive', 'Sold'].map(f => (
                  <button key={f} className={styles.filterBtn}>{f}</button>
                ))}
              </div>
              <table className={styles.table}>
                <thead><tr><th>VIN</th><th>MAKE & MODEL</th><th>YEAR</th><th>COLOR</th><th>MILEAGE</th><th>PRICE</th><th>STATUS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {inventory.map(v => (
                    <tr key={v.vin}>
                      <td className={styles.muted}>{v.vin}</td>
                      <td><span className={styles.bold}>{v.make} {v.model}</span></td>
                      <td>{v.year}</td>
                      <td>{v.color}</td>
                      <td>{v.miles.toLocaleString()} mi</td>
                      <td><span className={styles.price}>{v.price}</span></td>
                      <td><span className={`${styles.tag} ${styles[v.status]}`}>{v.status}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>View</button><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Sales' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Sales Records <button className={styles.addBtn}>+ Log Sale</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>CUSTOMER</th><th>VEHICLE</th><th>PRICE</th><th>FINANCE</th><th>DATE</th><th>SALESPERSON</th><th>STATUS</th></tr></thead>
                <tbody>
                  {sales.map(s => (
                    <tr key={s.id}>
                      <td className={styles.muted}>{s.id}</td>
                      <td><span className={styles.bold}>{s.customer}</span></td>
                      <td>{s.vehicle}</td>
                      <td><span className={styles.price}>{s.price}</span></td>
                      <td><span className={styles.catChip}>{s.finance}</span></td>
                      <td>{s.date}</td>
                      <td>{s.salesperson}</td>
                      <td><span className={`${styles.tag} ${styles[s.status]}`}>{s.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Test Drives' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Test Drive Schedule <button className={styles.addBtn}>+ Book Test Drive</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>CUSTOMER</th><th>VEHICLE</th><th>DATE</th><th>TIME</th><th>SALESPERSON</th><th>STATUS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {testDrives.map(td => (
                    <tr key={td.id}>
                      <td className={styles.muted}>{td.id}</td>
                      <td><span className={styles.bold}>{td.customer}</span></td>
                      <td>{td.vehicle}</td>
                      <td>{td.date}</td>
                      <td>{td.time}</td>
                      <td>{td.salesperson}</td>
                      <td><span className={`${styles.tag} ${styles[td.status]}`}>{td.status}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Leads' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>CRM — Sales Leads <button className={styles.addBtn}>+ Add Lead</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>INTEREST</th><th>BUDGET</th><th>FIRST CONTACT</th><th>FOLLOW-UP</th><th>SCORE</th></tr></thead>
                <tbody>
                  {crmLeads.map(l => (
                    <tr key={l.name}>
                      <td><span className={styles.bold}>{l.name}</span></td>
                      <td>{l.interest}</td>
                      <td><span className={styles.price}>{l.budget}</span></td>
                      <td className={styles.muted}>{l.contact}</td>
                      <td>{l.follow}</td>
                      <td><span className={`${styles.tag} ${l.score==='Hot'?styles.reserved:l.score==='Sold'?styles.sold:styles.testdrive}`}>{l.score}</span></td>
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
                  <a href="/demos/car-dealership" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection === 'inventory' && (
                  <div className={styles.ecInventory}>
                    <div className={styles.ecSectionLabel}>FEATURED VEHICLES</div>
                    <div className={styles.ecCarGrid}>
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className={styles.ecCarCard}>
                          <div className={styles.ecCarName}><input className={styles.inlineInput} value={content[`c${i}name`]} onChange={e=>set(`c${i}name`,e.target.value)}/></div>
                          <div className={styles.ecCarPrice}><input className={styles.inlineInput} value={content[`c${i}price`]} onChange={e=>set(`c${i}price`,e.target.value)}/></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection === 'contact' && (
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>CONTACT & HOURS</div>
                    <div className={styles.ecContactGrid}>
                      {[
                        { label: 'PHONE', key: 'phone' }, { label: 'EMAIL', key: 'email' },
                        { label: 'ADDRESS', key: 'address' }, { label: 'HOURS', key: 'hours' },
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
