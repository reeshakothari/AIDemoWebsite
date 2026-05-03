'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Events', 'Vendors', 'Clients', 'Finances', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Alicia Monroe', source: 'Google', interest: 'Corporate Gala', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Ben Carter', source: 'Instagram', interest: 'Wedding Reception', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Cleo Adeyemi', source: 'Referral', interest: 'Product Launch', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Dan Rivera', source: 'LinkedIn', interest: 'Conference', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Eva Johansson', source: 'Facebook', interest: 'Birthday Party', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'services', label: 'Event Types', preview: '6 event category cards' },
  { id: 'contact', label: 'Contact Info', preview: 'Address, phone, email' },
]

export default function EventManagementAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'PREMIUM EVENT PLANNING',
    heroHeadline: 'Unforgettable Events, Flawlessly Executed',
    heroSub: 'From intimate gatherings to grand celebrations, we bring every vision to life.',
    cta1: 'Plan Your Event',
    cta2: 'View Our Work',
    s1name: 'Corporate Events', s2name: 'Weddings', s3name: 'Product Launches',
    s4name: 'Conferences', s5name: 'Private Parties', s6name: 'Galas & Fundraisers',
    s1price: 'From $8,000', s2price: 'From $15,000', s3price: 'From $12,000',
    s4price: 'From $6,000', s5price: 'From $3,500', s6price: 'From $20,000',
    phone: '(555) 800-9900', email: 'hello@elevateevents.com',
    address: '350 Fifth Ave, New York, NY 10118',
    hours: 'Mon–Fri 9am–7pm · Sat 10am–4pm',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const events = [
    { id: 'EVT-301', name: 'TechForward Annual Gala', client: 'TechForward Inc.', type: 'Corporate', date: 'May 15', guests: 400, budget: '$120,000', status: 'confirmed' },
    { id: 'EVT-302', name: 'Carter-Liu Wedding', client: 'Ben & Mei Carter', type: 'Wedding', date: 'Jun 7', guests: 220, budget: '$85,000', status: 'inprogress' },
    { id: 'EVT-303', name: 'NovaTech Product Launch', client: 'NovaTech Labs', type: 'Launch', date: 'May 22', guests: 150, budget: '$45,000', status: 'confirmed' },
    { id: 'EVT-304', name: 'HealthSummit 2026', client: 'MedCorp', type: 'Conference', date: 'Jul 10', guests: 500, budget: '$90,000', status: 'pending' },
    { id: 'EVT-305', name: 'Rivera 50th Birthday', client: 'Dan Rivera', type: 'Private', date: 'May 4', guests: 80, budget: '$12,000', status: 'completed' },
  ]

  const vendors = [
    { name: 'Lumière Catering', category: 'Catering', contact: 'sophie@lumiere.com', events: 28, rating: 4.9, status: 'active' },
    { name: 'Bloom & Vine', category: 'Florals', contact: 'joe@bloomvine.com', events: 34, rating: 4.8, status: 'active' },
    { name: 'SoundWave AV', category: 'Audio/Visual', contact: 'info@soundwave.com', events: 22, rating: 4.7, status: 'active' },
    { name: 'Capture Studio', category: 'Photography', contact: 'hello@capturestudio.com', events: 19, rating: 4.9, status: 'active' },
    { name: 'Venue Luxe', category: 'Venue', contact: 'events@venueluxe.com', events: 15, rating: 4.6, status: 'preferred' },
  ]

  const clients = [
    { name: 'TechForward Inc.', events: 5, totalSpent: '$480,000', contact: 'hr@techforward.com', type: 'Corporate' },
    { name: 'Ben & Mei Carter', events: 1, totalSpent: '$85,000', contact: 'bencarter@email.com', type: 'Private' },
    { name: 'NovaTech Labs', events: 3, totalSpent: '$180,000', contact: 'events@novatech.com', type: 'Corporate' },
    { name: 'MedCorp', events: 2, totalSpent: '$160,000', contact: 'ops@medcorp.com', type: 'Corporate' },
    { name: 'Dan Rivera', events: 2, totalSpent: '$28,000', contact: 'drivera@email.com', type: 'Private' },
  ]

  const finances = [
    { id: 'INV-601', event: 'TechForward Gala', client: 'TechForward Inc.', total: '$120,000', paid: '$60,000', due: '$60,000', status: 'pending' },
    { id: 'INV-602', event: 'Carter-Liu Wedding', client: 'Ben & Mei Carter', total: '$85,000', paid: '$85,000', due: '$0', status: 'completed' },
    { id: 'INV-603', event: 'NovaTech Launch', client: 'NovaTech Labs', total: '$45,000', paid: '$22,500', due: '$22,500', status: 'pending' },
    { id: 'INV-604', event: 'HealthSummit 2026', client: 'MedCorp', total: '$90,000', paid: '$27,000', due: '$63,000', status: 'pending' },
    { id: 'INV-605', event: 'Rivera Birthday', client: 'Dan Rivera', total: '$12,000', paid: '$12,000', due: '$0', status: 'completed' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>Elevate</span> Events</div>
          <div className={styles.brandSub}>EVENT ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '🎪' : t === 'Events' ? '📅' : t === 'Vendors' ? '🏢' :
                t === 'Clients' ? '👥' : t === 'Finances' ? '💰' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Events' && <span className={styles.navBadge}>3</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/event-management" target="_blank" className={styles.viewSite}>View Live Site →</a>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Monday, 28 April 2026</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>3</span></div>
            <div className={styles.avatar}>EE</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'ACTIVE EVENTS', val: '12', sub: '4 this month', a: '#8b5cf6' },
                  { label: 'PIPELINE VALUE', val: '$940k', sub: '18 proposals out', a: '#ec4899' },
                  { label: 'MONTHLY REVENUE', val: '$185k', sub: '+22% vs last month', a: '#10b981' },
                  { label: 'VENDOR PARTNERS', val: '38', sub: '12 preferred tier', a: '#f59e0b' },
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
                    <div className={styles.panelHead}>Upcoming Events <span className={styles.chip}>12 active</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>EVENT</th><th>CLIENT</th><th>TYPE</th><th>DATE</th><th>GUESTS</th><th>STATUS</th></tr></thead>
                      <tbody>
                        {events.map(e => (
                          <tr key={e.id}>
                            <td><span className={styles.bold}>{e.name}</span></td>
                            <td>{e.client}</td>
                            <td><span className={styles.catChip}>{e.type}</span></td>
                            <td>{e.date}</td>
                            <td>{e.guests}</td>
                            <td><span className={`${styles.tag} ${styles[e.status]}`}>{e.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Revenue Summary</div>
                    {[
                      { label: 'Confirmed revenue', val: '$352k' },
                      { label: 'Invoices outstanding', val: '$145.5k' },
                      { label: 'Pipeline value', val: '$940k' },
                    ].map(r => (
                      <div key={r.label} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(139,92,246,0.04)' }}>
                        <span className={styles.muted}>{r.label}</span>
                        <span className={styles.price}>{r.val}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Vendors</div>
                    {vendors.slice(0,4).map(v => (
                      <div key={v.name} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderBottom:'1px solid rgba(139,92,246,0.04)' }}>
                        <span className={styles.muted}>{v.name}</span>
                        <span className={styles.bold}>⭐ {v.rating}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Events' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Events <button className={styles.addBtn}>+ New Event</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>EVENT NAME</th><th>CLIENT</th><th>TYPE</th><th>DATE</th><th>GUESTS</th><th>BUDGET</th><th>STATUS</th></tr></thead>
                <tbody>
                  {events.map(e => (
                    <tr key={e.id}>
                      <td className={styles.muted}>{e.id}</td>
                      <td><span className={styles.bold}>{e.name}</span></td>
                      <td>{e.client}</td>
                      <td><span className={styles.catChip}>{e.type}</span></td>
                      <td>{e.date}</td>
                      <td>{e.guests}</td>
                      <td><span className={styles.price}>{e.budget}</span></td>
                      <td><span className={`${styles.tag} ${styles[e.status]}`}>{e.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Vendors' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Vendor Directory <button className={styles.addBtn}>+ Add Vendor</button></div>
              <table className={styles.table}>
                <thead><tr><th>VENDOR</th><th>CATEGORY</th><th>CONTACT</th><th>EVENTS</th><th>RATING</th><th>STATUS</th></tr></thead>
                <tbody>
                  {vendors.map(v => (
                    <tr key={v.name}>
                      <td><span className={styles.bold}>{v.name}</span></td>
                      <td><span className={styles.catChip}>{v.category}</span></td>
                      <td className={styles.muted}>{v.contact}</td>
                      <td>{v.events}</td>
                      <td>⭐ {v.rating}</td>
                      <td><span className={`${styles.tag} ${v.status==='preferred'?styles.ldbooked:styles.ldqualified}`}>{v.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Clients' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Client List <button className={styles.addBtn}>+ Add Client</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>TYPE</th><th>EVENTS</th><th>TOTAL SPENT</th><th>CONTACT</th></tr></thead>
                <tbody>
                  {clients.map(c => (
                    <tr key={c.name}>
                      <td><span className={styles.bold}>{c.name}</span></td>
                      <td><span className={styles.catChip}>{c.type}</span></td>
                      <td>{c.events}</td>
                      <td><span className={styles.price}>{c.totalSpent}</span></td>
                      <td className={styles.muted}>{c.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Finances' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Invoices & Payments <button className={styles.addBtn}>+ New Invoice</button></div>
              <table className={styles.table}>
                <thead><tr><th>INVOICE</th><th>EVENT</th><th>CLIENT</th><th>TOTAL</th><th>PAID</th><th>DUE</th><th>STATUS</th></tr></thead>
                <tbody>
                  {finances.map(f => (
                    <tr key={f.id}>
                      <td className={styles.muted}>{f.id}</td>
                      <td><span className={styles.bold}>{f.event}</span></td>
                      <td>{f.client}</td>
                      <td>{f.total}</td>
                      <td>{f.paid}</td>
                      <td><span className={styles.price}>{f.due}</span></td>
                      <td><span className={`${styles.tag} ${styles[f.status]}`}>{f.status}</span></td>
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
                  <a href="/demos/event-management" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                    <div className={styles.ecSectionLabel}>EVENT TYPES</div>
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
                    <div className={styles.ecSectionLabel}>CONTACT INFO</div>
                    <div className={styles.ecContactGrid}>
                      {[
                        { label: 'PHONE', key: 'phone' }, { label: 'EMAIL', key: 'email' },
                        { label: 'OFFICE', key: 'address' }, { label: 'HOURS', key: 'hours' },
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
