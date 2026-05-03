'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Jobs', 'Services', 'Crews', 'Customers', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Carl Jennings', source: 'Google', interest: 'Weekly Lawn Mowing', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Diane Russo', source: 'Nextdoor', interest: 'Garden Design', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Peter Chong', source: 'Referral', interest: 'Irrigation System', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Sandra Bell', source: 'Facebook', interest: 'Tree Removal', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Mike Torres', source: 'Walk-in', interest: 'Mulching & Edging', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'services', label: 'Our Services', preview: '6 service cards' },
  { id: 'contact', label: 'Contact & Areas', preview: 'Address, phone, service areas' },
]

export default function LandscapingAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'PROFESSIONAL LANDSCAPING',
    heroHeadline: 'Beautiful Outdoors, Every Season',
    heroSub: 'Expert lawn care, garden design, and landscape maintenance for residential and commercial properties.',
    cta1: 'Get Free Quote',
    cta2: 'Our Services',
    s1name: 'Lawn Mowing', s2name: 'Garden Design', s3name: 'Tree & Shrub Care',
    s4name: 'Irrigation Systems', s5name: 'Mulching & Edging', s6name: 'Seasonal Clean-up',
    s1price: 'From $65', s2price: 'From $800', s3price: 'From $150',
    s4price: 'From $1,200', s5price: 'From $120', s6price: 'From $180',
    phone: '(555) 433-2211', email: 'hello@verdancrew.com',
    address: 'Serving Denver Metro Area, CO',
    hours: 'Mon–Sat 7am–5pm · Free estimates Mon–Fri',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const jobs = [
    { id: 'JOB-701', customer: 'Carl Jennings', service: 'Lawn Mowing', address: '12 Birch St', crew: 'Crew A', date: 'Apr 28', time: '8:00 AM', status: 'confirmed' },
    { id: 'JOB-702', customer: 'Diane Russo', service: 'Garden Design', address: '5 Maple Dr', crew: 'Crew B', date: 'Apr 28', time: '10:30 AM', status: 'inprogress' },
    { id: 'JOB-703', customer: 'Peter Chong', service: 'Irrigation', address: '88 Elm Ave', crew: 'Crew C', date: 'Apr 29', time: '7:30 AM', status: 'confirmed' },
    { id: 'JOB-704', customer: 'Sandra Bell', service: 'Tree Removal', address: '34 Oak Rd', crew: 'Crew A', date: 'Apr 29', time: '9:00 AM', status: 'pending' },
    { id: 'JOB-705', customer: 'Mike Torres', service: 'Mulching', address: '66 Pine Blvd', crew: 'Crew B', date: 'Apr 30', time: '8:00 AM', status: 'cancelled' },
  ]

  const services = [
    { name: 'Lawn Mowing', frequency: 'Weekly / Bi-weekly', price: 'From $65', bookings: 184 },
    { name: 'Garden Design', frequency: 'Project-based', price: 'From $800', bookings: 28 },
    { name: 'Tree & Shrub Care', frequency: 'Seasonal', price: 'From $150', bookings: 62 },
    { name: 'Irrigation Systems', frequency: 'Installation', price: 'From $1,200', bookings: 14 },
    { name: 'Mulching & Edging', frequency: 'Per visit', price: 'From $120', bookings: 91 },
    { name: 'Seasonal Clean-up', frequency: 'Spring / Fall', price: 'From $180', bookings: 47 },
  ]

  const crews = [
    { name: 'Crew A', members: 4, jobs: 12, lead: 'Roberto V.', equipment: 'Truck #1' },
    { name: 'Crew B', members: 3, jobs: 10, lead: 'Sam K.', equipment: 'Truck #2' },
    { name: 'Crew C', members: 3, jobs: 8, lead: 'Ana P.', equipment: 'Truck #3' },
    { name: 'Crew D', members: 2, jobs: 6, lead: 'Tim W.', equipment: 'Van #1' },
  ]

  const customers = [
    { name: 'Carl Jennings', plan: 'Weekly Mowing', address: '12 Birch St', since: 'Apr 2023', spent: '$2,860' },
    { name: 'Diane Russo', plan: 'Full Service', address: '5 Maple Dr', since: 'Jan 2024', spent: '$5,400' },
    { name: 'Peter Chong', plan: 'Bi-weekly', address: '88 Elm Ave', since: 'Jun 2024', spent: '$1,560' },
    { name: 'Sandra Bell', plan: 'One-time', address: '34 Oak Rd', since: 'Apr 2025', spent: '$380' },
    { name: 'Mike Torres', plan: 'Monthly', address: '66 Pine Blvd', since: 'Sep 2023', spent: '$1,980' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>Verdan</span> Crew</div>
          <div className={styles.brandSub}>LANDSCAPING ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '🌿' : t === 'Jobs' ? '📋' : t === 'Services' ? '🌱' :
                t === 'Crews' ? '👷' : t === 'Customers' ? '👥' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Jobs' && <span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/landscaping" target="_blank" className={styles.viewSite}>View Live Site →</a>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Monday, 28 April 2026</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>5</span></div>
            <div className={styles.avatar}>VC</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: "TODAY'S JOBS", val: '24', sub: '4 crews in field', a: '#16a34a' },
                  { label: 'WEEKLY REVENUE', val: '$8,640', sub: '+11% vs last week', a: '#0891b2' },
                  { label: 'RECURRING CLIENTS', val: '142', sub: '18 weekly contracts', a: '#8b5cf6' },
                  { label: 'QUOTES PENDING', val: '12', sub: 'awaiting approval', a: '#f59e0b' },
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
                    <div className={styles.panelHead}>Today's Jobs <span className={styles.chip}>24 scheduled</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>JOB</th><th>CUSTOMER</th><th>SERVICE</th><th>CREW</th><th>TIME</th><th>STATUS</th></tr></thead>
                      <tbody>
                        {jobs.map(j => (
                          <tr key={j.id}>
                            <td className={styles.muted}>{j.id}</td>
                            <td><span className={styles.bold}>{j.customer}</span><br /><span className={styles.muted}>{j.address}</span></td>
                            <td>{j.service}</td>
                            <td>{j.crew}</td>
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
                    <div className={styles.panelHead}>Crew Status</div>
                    {crews.map(c => (
                      <div key={c.name} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #f1f8f1' }}>
                        <div>
                          <div className={styles.bold}>{c.name}</div>
                          <div className={styles.muted}>{c.lead} · {c.members} members</div>
                        </div>
                        <span className={styles.chip}>{c.jobs} jobs</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Services</div>
                    {services.slice(0,4).map(s => (
                      <div key={s.name} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderBottom:'1px solid #f1f8f1' }}>
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
                <thead><tr><th>ID</th><th>CUSTOMER</th><th>SERVICE</th><th>ADDRESS</th><th>CREW</th><th>DATE</th><th>TIME</th><th>STATUS</th></tr></thead>
                <tbody>
                  {jobs.map(j => (
                    <tr key={j.id}>
                      <td className={styles.muted}>{j.id}</td>
                      <td><span className={styles.bold}>{j.customer}</span></td>
                      <td>{j.service}</td>
                      <td>{j.address}</td>
                      <td>{j.crew}</td>
                      <td>{j.date}</td>
                      <td>{j.time}</td>
                      <td><span className={`${styles.tag} ${styles[j.status]}`}>{j.status}</span></td>
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
                <thead><tr><th>SERVICE</th><th>FREQUENCY</th><th>PRICE</th><th>BOOKINGS</th></tr></thead>
                <tbody>
                  {services.map(s => (
                    <tr key={s.name}>
                      <td><span className={styles.bold}>{s.name}</span></td>
                      <td>{s.frequency}</td>
                      <td><span className={styles.price}>{s.price}</span></td>
                      <td>{s.bookings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Crews' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Field Crews <button className={styles.addBtn}>+ Add Crew</button></div>
              <table className={styles.table}>
                <thead><tr><th>CREW</th><th>LEAD</th><th>MEMBERS</th><th>JOBS THIS WEEK</th><th>EQUIPMENT</th></tr></thead>
                <tbody>
                  {crews.map(c => (
                    <tr key={c.name}>
                      <td><span className={styles.bold}>{c.name}</span></td>
                      <td>{c.lead}</td>
                      <td>{c.members}</td>
                      <td>{c.jobs}</td>
                      <td>{c.equipment}</td>
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
                <thead><tr><th>NAME</th><th>PLAN</th><th>ADDRESS</th><th>SINCE</th><th>TOTAL SPENT</th></tr></thead>
                <tbody>
                  {customers.map(c => (
                    <tr key={c.name}>
                      <td><span className={styles.bold}>{c.name}</span></td>
                      <td><span className={styles.catChip}>{c.plan}</span></td>
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
                  <a href="/demos/landscaping" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                    <div className={styles.ecSectionLabel}>CONTACT & SERVICE AREAS</div>
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
