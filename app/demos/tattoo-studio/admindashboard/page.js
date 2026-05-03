'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Appointments', 'Artists', 'Portfolio', 'Clients', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Rico Blanco', source: 'Instagram', interest: 'Full Sleeve — Japanese', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Jade Moreau', source: 'Google', interest: 'Floral Fine Line', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Ivan Kozlov', source: 'Referral', interest: 'Black & Grey Portrait', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Mia Nakano', source: 'TikTok', interest: 'Minimalist Script', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Devon Carr', source: 'Walk-in', interest: 'Cover-up Tattoo', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'services', label: 'Our Styles', preview: '6 tattoo style cards' },
  { id: 'contact', label: 'Studio Info', preview: 'Address, phone, hours' },
]

export default function TattooStudioAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'CUSTOM TATTOO STUDIO',
    heroHeadline: 'Art That Lasts a Lifetime',
    heroSub: 'Custom tattoos crafted by world-class artists. Every piece is a masterwork.',
    cta1: 'Book a Consult',
    cta2: 'View Portfolio',
    s1name: 'Japanese / Irezumi', s2name: 'Fine Line', s3name: 'Black & Grey',
    s4name: 'Neo-Traditional', s5name: 'Geometric', s6name: 'Cover-ups',
    s1price: 'From $300/hr', s2price: 'From $200/hr', s3price: 'From $250/hr',
    s4price: 'From $280/hr', s5price: 'From $220/hr', s6price: 'Consult required',
    phone: '(555) 900-0011', email: 'book@ironinkstudio.com',
    address: '77 Ink Alley, Portland, OR 97201',
    hours: 'Tue–Sat 11am–8pm · Sun 12pm–6pm · Mon Closed',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const appointments = [
    { id: 'APT-801', client: 'Rico Blanco', artist: 'Dante R.', style: 'Japanese', duration: '4 hrs', date: 'Apr 28', time: '11:00 AM', deposit: '$200', status: 'confirmed' },
    { id: 'APT-802', client: 'Jade Moreau', artist: 'Sara K.', style: 'Fine Line', duration: '2 hrs', date: 'Apr 28', time: '2:00 PM', deposit: '$100', status: 'confirmed' },
    { id: 'APT-803', client: 'Ivan Kozlov', artist: 'Dante R.', style: 'Black & Grey', duration: '3 hrs', date: 'Apr 29', time: '12:00 PM', deposit: '$150', status: 'consult' },
    { id: 'APT-804', client: 'Mia Nakano', artist: 'Leo T.', style: 'Fine Line', duration: '1 hr', date: 'Apr 29', time: '4:00 PM', deposit: '$80', status: 'confirmed' },
    { id: 'APT-805', client: 'Devon Carr', artist: 'Sara K.', style: 'Cover-up', duration: '5 hrs', date: 'Apr 30', time: '10:00 AM', deposit: '$250', status: 'cancelled' },
  ]

  const artists = [
    { name: 'Dante Russo', speciality: 'Japanese, Black & Grey', bookings: 22, waitlist: '6 weeks', rating: 4.9 },
    { name: 'Sara Kim', speciality: 'Fine Line, Floral', bookings: 18, waitlist: '4 weeks', rating: 4.9 },
    { name: 'Leo Torres', speciality: 'Geometric, Minimalist', bookings: 14, waitlist: '2 weeks', rating: 4.8 },
    { name: 'Aya Okonkwo', speciality: 'Neo-Traditional, Color', bookings: 16, waitlist: '3 weeks', rating: 4.8 },
  ]

  const portfolio = [
    { title: 'Dragon Full Sleeve', artist: 'Dante Russo', style: 'Japanese', featured: true },
    { title: 'Rose & Butterfly', artist: 'Sara Kim', style: 'Fine Line', featured: true },
    { title: 'Skull Portrait', artist: 'Dante Russo', style: 'Black & Grey', featured: false },
    { title: 'Sacred Geometry Chest', artist: 'Leo Torres', style: 'Geometric', featured: true },
    { title: 'Phoenix Back Piece', artist: 'Aya Okonkwo', style: 'Neo-Traditional', featured: false },
  ]

  const clients = [
    { name: 'Rico Blanco', sessions: 4, totalSpent: '$2,800', since: 'Jan 2023', preferredArtist: 'Dante R.' },
    { name: 'Jade Moreau', sessions: 2, totalSpent: '$680', since: 'Sep 2024', preferredArtist: 'Sara K.' },
    { name: 'Ivan Kozlov', sessions: 6, totalSpent: '$4,200', since: 'Mar 2022', preferredArtist: 'Dante R.' },
    { name: 'Mia Nakano', sessions: 1, totalSpent: '$240', since: 'Apr 2025', preferredArtist: 'Leo T.' },
    { name: 'Devon Carr', sessions: 1, totalSpent: '$0', since: 'Apr 2025', preferredArtist: 'Sara K.' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>IRON</span> INK</div>
          <div className={styles.brandSub}>STUDIO ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '🔱' : t === 'Appointments' ? '📅' : t === 'Artists' ? '🎨' :
                t === 'Portfolio' ? '🖼️' : t === 'Clients' ? '👥' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Appointments' && <span className={styles.navBadge}>4</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/tattoo-studio" target="_blank" className={styles.viewSite}>View Live Site →</a>
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
            <div className={styles.avatar}>II</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: "TODAY'S APPOINTMENTS", val: '8', sub: '4 artists booked', a: '#dc2626' },
                  { label: 'MONTHLY REVENUE', val: '$28.4k', sub: '+14% vs last month', a: '#f59e0b' },
                  { label: 'AVG WAITLIST', val: '3.8 wks', sub: 'Dante: 6 weeks out', a: '#8b5cf6' },
                  { label: 'DEPOSIT COLLECTED', val: '$4,200', sub: 'this month', a: '#10b981' },
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
                    <div className={styles.panelHead}>Today's Appointments <span className={styles.chip}>8 booked</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>CLIENT</th><th>ARTIST</th><th>STYLE</th><th>DURATION</th><th>TIME</th><th>STATUS</th></tr></thead>
                      <tbody>
                        {appointments.map(a => (
                          <tr key={a.id}>
                            <td><span className={styles.bold}>{a.client}</span></td>
                            <td>{a.artist}</td>
                            <td><span className={styles.catChip}>{a.style}</span></td>
                            <td>{a.duration}</td>
                            <td>{a.time}</td>
                            <td><span className={`${styles.tag} ${styles[a.status]}`}>{a.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Artist Status</div>
                    {artists.map(a => (
                      <div key={a.name} style={{ padding:'8px 0', borderBottom:'1px solid rgba(220,38,38,0.04)' }}>
                        <div style={{ display:'flex', justifyContent:'space-between' }}>
                          <span className={styles.bold}>{a.name}</span>
                          <span className={styles.muted}>{a.waitlist}</span>
                        </div>
                        <div className={styles.muted}>{a.speciality}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>This Week</div>
                    {[
                      { label: 'Sessions', val: '28' },
                      { label: 'Consults', val: '6' },
                      { label: 'Deposits', val: '$3,200' },
                      { label: 'New clients', val: '5' },
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

          {tab === 'Appointments' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Appointments <button className={styles.addBtn}>+ Book Appointment</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>CLIENT</th><th>ARTIST</th><th>STYLE</th><th>DURATION</th><th>DATE</th><th>TIME</th><th>DEPOSIT</th><th>STATUS</th></tr></thead>
                <tbody>
                  {appointments.map(a => (
                    <tr key={a.id}>
                      <td className={styles.muted}>{a.id}</td>
                      <td><span className={styles.bold}>{a.client}</span></td>
                      <td>{a.artist}</td>
                      <td><span className={styles.catChip}>{a.style}</span></td>
                      <td>{a.duration}</td>
                      <td>{a.date}</td>
                      <td>{a.time}</td>
                      <td><span className={styles.price}>{a.deposit}</span></td>
                      <td><span className={`${styles.tag} ${styles[a.status]}`}>{a.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Artists' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Artists <button className={styles.addBtn}>+ Add Artist</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>SPECIALITY</th><th>BOOKINGS THIS MONTH</th><th>WAITLIST</th><th>RATING</th></tr></thead>
                <tbody>
                  {artists.map(a => (
                    <tr key={a.name}>
                      <td><span className={styles.bold}>{a.name}</span></td>
                      <td>{a.speciality}</td>
                      <td>{a.bookings}</td>
                      <td><span className={styles.catChip}>{a.waitlist}</span></td>
                      <td>⭐ {a.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Portfolio' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Portfolio <button className={styles.addBtn}>+ Add Piece</button></div>
              <table className={styles.table}>
                <thead><tr><th>TITLE</th><th>ARTIST</th><th>STYLE</th><th>FEATURED</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {portfolio.map(p => (
                    <tr key={p.title}>
                      <td><span className={styles.bold}>{p.title}</span></td>
                      <td>{p.artist}</td>
                      <td><span className={styles.catChip}>{p.style}</span></td>
                      <td><span className={`${styles.tag} ${p.featured?styles.confirmed:styles.completed}`}>{p.featured?'Featured':'Hidden'}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Clients' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Client Records <button className={styles.addBtn}>+ Add Client</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>SESSIONS</th><th>TOTAL SPENT</th><th>CLIENT SINCE</th><th>PREFERRED ARTIST</th></tr></thead>
                <tbody>
                  {clients.map(c => (
                    <tr key={c.name}>
                      <td><span className={styles.bold}>{c.name}</span></td>
                      <td>{c.sessions}</td>
                      <td><span className={styles.price}>{c.totalSpent}</span></td>
                      <td className={styles.muted}>{c.since}</td>
                      <td>{c.preferredArtist}</td>
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
                  <a href="/demos/tattoo-studio" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                    <div className={styles.ecSectionLabel}>OUR STYLES</div>
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
                    <div className={styles.ecSectionLabel}>STUDIO INFO</div>
                    <div className={styles.ecContactGrid}>
                      {[
                        { label: 'PHONE', key: 'phone' }, { label: 'EMAIL', key: 'email' },
                        { label: 'STUDIO ADDRESS', key: 'address' }, { label: 'HOURS', key: 'hours' },
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
