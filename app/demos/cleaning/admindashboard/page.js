'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Jobs', 'Services', 'Teams', 'Customers', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Fiona Walsh', source: 'Google', interest: 'Weekly Home Clean', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Marcus Lee', source: 'Referral', interest: 'Office Cleaning', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Dana Park', source: 'Facebook', interest: 'Deep Clean', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Tom Singh', source: 'Website', interest: 'Move-out Clean', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Yvette Cruz', source: 'Instagram', interest: 'Monthly Package', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'services', label: 'Our Services', preview: '6 service cards' },
  { id: 'contact', label: 'Contact & Coverage', preview: 'Address, phone, areas' },
]

export default function CleaningAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'PROFESSIONAL CLEANING',
    heroHeadline: 'Spotless Homes, Happy Families',
    heroSub: 'Trusted cleaning services for homes and offices. Book online in minutes.',
    cta1: 'Get a Quote',
    cta2: 'View Services',
    s1name: 'Standard Home Clean', s2name: 'Deep Clean', s3name: 'Move-in / Move-out',
    s4name: 'Office Cleaning', s5name: 'Post-Construction', s6name: 'Carpet Cleaning',
    s1price: 'From $89', s2price: 'From $180', s3price: 'From $220',
    s4price: 'From $150', s5price: 'From $300', s6price: 'From $120',
    phone: '(555) 311-9900', email: 'book@sparkleplus.com',
    address: 'Serving Greater Boston, MA',
    coverage: 'Mon–Sat 8am–6pm · Same-week bookings available',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const jobs = [
    { id: 'JOB-901', customer: 'Fiona Walsh', type: 'Weekly Home', address: '14 Elm St', team: 'Team A', date: 'Apr 28', time: '9:00 AM', status: 'confirmed' },
    { id: 'JOB-902', customer: 'Marcus Lee', type: 'Office', address: '88 Commerce Ave', team: 'Team B', date: 'Apr 28', time: '11:00 AM', status: 'inprogress' },
    { id: 'JOB-903', customer: 'Dana Park', type: 'Deep Clean', address: '5 Oak Lane', team: 'Team A', date: 'Apr 29', time: '8:30 AM', status: 'pending' },
    { id: 'JOB-904', customer: 'Tom Singh', type: 'Move-out', address: '22 River Rd', team: 'Team C', date: 'Apr 29', time: '2:00 PM', status: 'confirmed' },
    { id: 'JOB-905', customer: 'Yvette Cruz', type: 'Monthly', address: '77 Park Blvd', team: 'Team B', date: 'Apr 30', time: '10:00 AM', status: 'cancelled' },
  ]

  const services = [
    { name: 'Standard Home Clean', duration: '2–3 hrs', price: 'From $89', bookings: 148 },
    { name: 'Deep Clean', duration: '4–6 hrs', price: 'From $180', bookings: 62 },
    { name: 'Move-in / Move-out', duration: '5–7 hrs', price: 'From $220', bookings: 34 },
    { name: 'Office Cleaning', duration: 'Varies', price: 'From $150', bookings: 41 },
    { name: 'Post-Construction', duration: '6–8 hrs', price: 'From $300', bookings: 12 },
    { name: 'Carpet Cleaning', duration: '2–4 hrs', price: 'From $120', bookings: 28 },
  ]

  const teams = [
    { name: 'Team A', members: 3, jobs: 8, rating: 4.9, lead: 'Sofia R.' },
    { name: 'Team B', members: 2, jobs: 7, rating: 4.8, lead: 'Carlos M.' },
    { name: 'Team C', members: 3, jobs: 6, rating: 4.7, lead: 'Nina K.' },
    { name: 'Team D', members: 2, jobs: 5, rating: 4.9, lead: 'Jake T.' },
  ]

  const customers = [
    { name: 'Fiona Walsh', type: 'Weekly', address: '14 Elm St', since: 'Jan 2024', spent: '$2,120' },
    { name: 'Marcus Lee', type: 'Office', address: '88 Commerce Ave', since: 'Mar 2024', spent: '$4,800' },
    { name: 'Dana Park', type: 'One-time', address: '5 Oak Lane', since: 'Apr 2025', spent: '$180' },
    { name: 'Tom Singh', type: 'Move-out', address: '22 River Rd', since: 'Apr 2025', spent: '$220' },
    { name: 'Yvette Cruz', type: 'Monthly', address: '77 Park Blvd', since: 'Sep 2023', spent: '$1,560' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Sparkle<span>Plus</span></div>
          <div className={styles.brandSub}>CLEANING ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '🧹' : t === 'Jobs' ? '📋' : t === 'Services' ? '✨' :
                t === 'Teams' ? '👷' : t === 'Customers' ? '👥' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Jobs' && <span className={styles.navBadge}>4</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/cleaning" target="_blank" className={styles.viewSite}>View Live Site →</a>
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
            <div className={styles.avatar}>SP</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: "TODAY'S JOBS", val: '18', sub: '4 in progress · 14 confirmed', a: '#0284c7' },
                  { label: 'WEEKLY REVENUE', val: '$6,840', sub: '+14% vs last week', a: '#10b981' },
                  { label: 'ACTIVE TEAMS', val: '4', sub: '12 cleaners on roster', a: '#8b5cf6' },
                  { label: 'ACTIVE CUSTOMERS', val: '284', sub: '22 recurring accounts', a: '#f59e0b' },
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
                    <div className={styles.panelHead}>Today's Jobs <span className={styles.chip}>18 scheduled</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>JOB</th><th>CUSTOMER</th><th>TYPE</th><th>TEAM</th><th>TIME</th><th>STATUS</th></tr></thead>
                      <tbody>
                        {jobs.map(j => (
                          <tr key={j.id}>
                            <td className={styles.muted}>{j.id}</td>
                            <td><span className={styles.bold}>{j.customer}</span><br /><span className={styles.muted}>{j.address}</span></td>
                            <td>{j.type}</td>
                            <td>{j.team}</td>
                            <td>{j.time}</td>
                            <td><span className={`${styles.tag} ${styles[j.status]}`}>{j.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Team Status</div>
                    {teams.map(t => (
                      <div key={t.name} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #f0f9ff' }}>
                        <div>
                          <div className={styles.bold}>{t.name}</div>
                          <div className={styles.muted}>{t.lead} · {t.members} cleaners</div>
                        </div>
                        <span className={styles.chip}>{t.jobs} jobs</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Popular Services</div>
                    {services.slice(0,4).map(s => (
                      <div key={s.name} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderBottom:'1px solid #f0f9ff' }}>
                        <span className={styles.muted}>{s.name}</span>
                        <span className={styles.bold}>{s.bookings}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Jobs' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Jobs <button className={styles.addBtn}>+ Schedule Job</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>CUSTOMER</th><th>TYPE</th><th>ADDRESS</th><th>TEAM</th><th>DATE</th><th>TIME</th><th>STATUS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {jobs.map(j => (
                    <tr key={j.id}>
                      <td className={styles.muted}>{j.id}</td>
                      <td><span className={styles.bold}>{j.customer}</span></td>
                      <td>{j.type}</td>
                      <td>{j.address}</td>
                      <td>{j.team}</td>
                      <td>{j.date}</td>
                      <td>{j.time}</td>
                      <td><span className={`${styles.tag} ${styles[j.status]}`}>{j.status}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>View</button><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Services' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Services & Pricing <button className={styles.addBtn}>+ Add Service</button></div>
              <table className={styles.table}>
                <thead><tr><th>SERVICE</th><th>DURATION</th><th>PRICE</th><th>BOOKINGS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {services.map(s => (
                    <tr key={s.name}>
                      <td><span className={styles.bold}>{s.name}</span></td>
                      <td>{s.duration}</td>
                      <td><span className={styles.price}>{s.price}</span></td>
                      <td>{s.bookings}</td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Teams' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Cleaning Teams <button className={styles.addBtn}>+ Add Team</button></div>
              <table className={styles.table}>
                <thead><tr><th>TEAM</th><th>LEAD</th><th>MEMBERS</th><th>JOBS THIS WEEK</th><th>RATING</th></tr></thead>
                <tbody>
                  {teams.map(t => (
                    <tr key={t.name}>
                      <td><span className={styles.bold}>{t.name}</span></td>
                      <td>{t.lead}</td>
                      <td>{t.members}</td>
                      <td>{t.jobs}</td>
                      <td>⭐ {t.rating}</td>
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
                <thead><tr><th>NAME</th><th>SERVICE TYPE</th><th>ADDRESS</th><th>SINCE</th><th>TOTAL SPENT</th></tr></thead>
                <tbody>
                  {customers.map(c => (
                    <tr key={c.name}>
                      <td><span className={styles.bold}>{c.name}</span></td>
                      <td><span className={styles.catChip}>{c.type}</span></td>
                      <td>{c.address}</td>
                      <td className={styles.muted}>{c.since}</td>
                      <td><span className={styles.price}>{c.spent}</span></td>
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
                  <a href="/demos/cleaning" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                        { label: 'SERVICE AREA', key: 'address' }, { label: 'HOURS', key: 'coverage' },
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
