'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Jobs', 'Quotes', 'Trucks', 'Customers', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Janet Ross', source: 'Google', interest: 'Local Move 2BR', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Kevin Marsh', source: 'Yelp', interest: 'Long Distance', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Layla Scott', source: 'Referral', interest: 'Office Relocation', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Ryan Dolan', source: 'Website', interest: 'Storage + Move', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Tara Vance', source: 'Facebook', interest: 'Senior Move', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'services', label: 'Our Services', preview: '6 service cards' },
  { id: 'contact', label: 'Contact & Coverage', preview: 'Phone, email, areas' },
]

export default function MovingAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'TRUSTED MOVING COMPANY',
    heroHeadline: 'Moving Made Simple & Stress-Free',
    heroSub: 'Professional local and long-distance moving services. Licensed, insured, and rated 5 stars.',
    cta1: 'Get Free Quote',
    cta2: 'Our Services',
    s1name: 'Local Moving', s2name: 'Long Distance', s3name: 'Office Relocation',
    s4name: 'Packing Services', s5name: 'Storage Solutions', s6name: 'Senior Moving',
    s1price: 'From $299', s2price: 'From $1,200', s3price: 'From $800',
    s4price: 'From $150', s5price: 'From $99/mo', s6price: 'From $399',
    phone: '(555) 566-7788', email: 'book@swiftmovers.com',
    address: 'Serving Phoenix Metro Area, AZ',
    hours: 'Mon–Sat 7am–7pm · Sun 9am–4pm',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const jobs = [
    { id: 'MV-501', customer: 'Janet Ross', type: 'Local', from: 'Tempe, AZ', to: 'Scottsdale, AZ', crew: '3 movers', date: 'Apr 28', status: 'confirmed' },
    { id: 'MV-502', customer: 'Kevin Marsh', type: 'Long Distance', from: 'Phoenix, AZ', to: 'Denver, CO', crew: '4 movers', date: 'Apr 29', status: 'inprogress' },
    { id: 'MV-503', customer: 'Layla Scott', type: 'Office', from: 'Downtown PHX', to: 'Chandler, AZ', crew: '5 movers', date: 'Apr 30', status: 'pending' },
    { id: 'MV-504', customer: 'Ryan Dolan', type: 'Local + Storage', from: 'Mesa, AZ', to: 'Storage Unit', crew: '2 movers', date: 'May 1', status: 'confirmed' },
    { id: 'MV-505', customer: 'Tara Vance', type: 'Senior', from: 'Glendale, AZ', to: 'Peoria, AZ', crew: '3 movers', date: 'May 2', status: 'cancelled' },
  ]

  const quotes = [
    { id: 'QT-201', customer: 'Janet Ross', type: 'Local 2BR', distance: '12 mi', estimate: '$420', sent: 'Apr 20', status: 'accepted' },
    { id: 'QT-202', customer: 'Kevin Marsh', type: 'Long Distance', distance: '800 mi', estimate: '$2,800', sent: 'Apr 21', status: 'pending' },
    { id: 'QT-203', customer: 'Layla Scott', type: 'Office', distance: '18 mi', estimate: '$1,650', sent: 'Apr 20', status: 'accepted' },
    { id: 'QT-204', customer: 'New Inquiry', type: 'Local Studio', distance: '5 mi', estimate: '$310', sent: 'Apr 22', status: 'pending' },
    { id: 'QT-205', customer: 'Tara Vance', type: 'Senior Move', distance: '8 mi', estimate: '$490', sent: 'Apr 22', status: 'declined' },
  ]

  const trucks = [
    { id: 'TRK-1', size: '26 ft Box Truck', capacity: '10,000 lbs', driver: 'Jose M.', status: 'On Job', job: 'MV-502' },
    { id: 'TRK-2', size: '20 ft Box Truck', capacity: '7,500 lbs', driver: 'Sam H.', status: 'Available', job: '—' },
    { id: 'TRK-3', size: '16 ft Box Truck', capacity: '5,000 lbs', driver: 'Ana L.', status: 'On Job', job: 'MV-501' },
    { id: 'TRK-4', size: '26 ft Box Truck', capacity: '10,000 lbs', driver: 'Mike R.', status: 'Maintenance', job: '—' },
  ]

  const customers = [
    { name: 'Janet Ross', moves: 2, totalSpent: '$920', lastMove: 'Apr 28', type: 'Residential' },
    { name: 'Kevin Marsh', moves: 1, totalSpent: '$2,800', lastMove: 'Apr 29', type: 'Long Distance' },
    { name: 'Layla Scott', moves: 3, totalSpent: '$4,200', lastMove: 'Apr 30', type: 'Commercial' },
    { name: 'Ryan Dolan', moves: 1, totalSpent: '$580', lastMove: 'May 1', type: 'Residential' },
    { name: 'Tara Vance', moves: 1, totalSpent: '$0', lastMove: '—', type: 'Senior' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>Swift</span> Movers</div>
          <div className={styles.brandSub}>MOVING ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '🚚' : t === 'Jobs' ? '📦' : t === 'Quotes' ? '📝' :
                t === 'Trucks' ? '🚛' : t === 'Customers' ? '👥' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Jobs' && <span className={styles.navBadge}>4</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/moving" target="_blank" className={styles.viewSite}>View Live Site →</a>
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
            <div className={styles.avatar}>SM</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'JOBS THIS WEEK', val: '18', sub: '4 trucks deployed', a: '#ea580c' },
                  { label: 'MONTHLY REVENUE', val: '$38.4k', sub: '+16% vs last month', a: '#10b981' },
                  { label: 'OPEN QUOTES', val: '8', sub: '$14.2k potential', a: '#8b5cf6' },
                  { label: 'CUSTOMER RATING', val: '4.9★', sub: '218 reviews', a: '#f59e0b' },
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
                    <div className={styles.panelHead}>Upcoming Moves <span className={styles.chip}>18 this week</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>ID</th><th>CUSTOMER</th><th>TYPE</th><th>FROM → TO</th><th>DATE</th><th>STATUS</th></tr></thead>
                      <tbody>
                        {jobs.map(j => (
                          <tr key={j.id}>
                            <td className={styles.muted}>{j.id}</td>
                            <td><span className={styles.bold}>{j.customer}</span></td>
                            <td><span className={styles.catChip}>{j.type}</span></td>
                            <td className={styles.muted}>{j.from} → {j.to}</td>
                            <td>{j.date}</td>
                            <td><span className={`${styles.tag} ${styles[j.status]}`}>{j.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Fleet Status</div>
                    {trucks.map(t => (
                      <div key={t.id} style={{ padding:'8px 0', borderBottom:'1px solid rgba(234,88,12,0.04)' }}>
                        <div style={{ display:'flex', justifyContent:'space-between' }}>
                          <span className={styles.bold}>{t.id} — {t.size}</span>
                          <span className={`${styles.tag} ${t.status==='On Job'?styles.inprogress:t.status==='Available'?styles.confirmed:styles.cancelled}`}>{t.status}</span>
                        </div>
                        <div className={styles.muted}>{t.driver}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Open Quotes</div>
                    {quotes.filter(q=>q.status==='pending').map(q => (
                      <div key={q.id} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(234,88,12,0.04)' }}>
                        <span className={styles.muted}>{q.customer}</span>
                        <span className={styles.price}>{q.estimate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Jobs' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Jobs <button className={styles.addBtn}>+ Schedule Move</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>CUSTOMER</th><th>TYPE</th><th>FROM</th><th>TO</th><th>CREW</th><th>DATE</th><th>STATUS</th></tr></thead>
                <tbody>
                  {jobs.map(j => (
                    <tr key={j.id}>
                      <td className={styles.muted}>{j.id}</td>
                      <td><span className={styles.bold}>{j.customer}</span></td>
                      <td><span className={styles.catChip}>{j.type}</span></td>
                      <td>{j.from}</td>
                      <td>{j.to}</td>
                      <td>{j.crew}</td>
                      <td>{j.date}</td>
                      <td><span className={`${styles.tag} ${styles[j.status]}`}>{j.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Quotes' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Quotes & Estimates <button className={styles.addBtn}>+ New Quote</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>CUSTOMER</th><th>TYPE</th><th>DISTANCE</th><th>ESTIMATE</th><th>SENT</th><th>STATUS</th></tr></thead>
                <tbody>
                  {quotes.map(q => (
                    <tr key={q.id}>
                      <td className={styles.muted}>{q.id}</td>
                      <td><span className={styles.bold}>{q.customer}</span></td>
                      <td>{q.type}</td>
                      <td>{q.distance}</td>
                      <td><span className={styles.price}>{q.estimate}</span></td>
                      <td>{q.sent}</td>
                      <td><span className={`${styles.tag} ${q.status==='accepted'?styles.confirmed:q.status==='declined'?styles.cancelled:styles.pending}`}>{q.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Trucks' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Fleet Management <button className={styles.addBtn}>+ Add Truck</button></div>
              <table className={styles.table}>
                <thead><tr><th>TRUCK</th><th>SIZE</th><th>CAPACITY</th><th>DRIVER</th><th>STATUS</th><th>CURRENT JOB</th></tr></thead>
                <tbody>
                  {trucks.map(t => (
                    <tr key={t.id}>
                      <td><span className={styles.bold}>{t.id}</span></td>
                      <td>{t.size}</td>
                      <td>{t.capacity}</td>
                      <td>{t.driver}</td>
                      <td><span className={`${styles.tag} ${t.status==='On Job'?styles.inprogress:t.status==='Available'?styles.confirmed:styles.cancelled}`}>{t.status}</span></td>
                      <td className={styles.muted}>{t.job}</td>
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
                <thead><tr><th>NAME</th><th>TYPE</th><th>MOVES</th><th>TOTAL SPENT</th><th>LAST MOVE</th></tr></thead>
                <tbody>
                  {customers.map(c => (
                    <tr key={c.name}>
                      <td><span className={styles.bold}>{c.name}</span></td>
                      <td><span className={styles.catChip}>{c.type}</span></td>
                      <td>{c.moves}</td>
                      <td><span className={styles.price}>{c.totalSpent}</span></td>
                      <td className={styles.muted}>{c.lastMove}</td>
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
                  <a href="/demos/moving" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection === 'services' && (
                  <div className={styles.ecServices}>
                    <div className={styles.ecSectionLabel}>OUR SERVICES</div>
                    <div className={styles.ecServiceGrid}>
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className={styles.ecServiceCard}>
                          <div className={styles.ecServiceName}><input className={styles.inlineInput} value={content[`s${i}name`]} onChange={e=>set(`s${i}name`,e.target.value)}/></div>
                          <div className={styles.ecServicePrice}><input className={styles.inlineInput} value={content[`s${i}price`]} onChange={e=>set(`s${i}price`,e.target.value)}/></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection === 'contact' && (
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>CONTACT & COVERAGE</div>
                    <div className={styles.ecContactGrid}>
                      {[
                        { label: 'PHONE', key: 'phone' }, { label: 'EMAIL', key: 'email' },
                        { label: 'SERVICE AREA', key: 'address' }, { label: 'HOURS', key: 'hours' },
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
