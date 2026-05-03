'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Projects', 'Clients', 'Portfolio', 'Consultations', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Grace Hoffman', source: 'Instagram', interest: 'Full Home Redesign', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Oliver Stone', source: 'Referral', interest: 'Kitchen Renovation', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Ava Lindqvist', source: 'Houzz', interest: 'Living Room', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Leo Fernandez', source: 'Google', interest: 'Office Interior', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Mia Kovacs', source: 'Pinterest', interest: 'Master Bedroom', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'services', label: 'Our Services', preview: '6 service cards' },
  { id: 'contact', label: 'Contact & Studio', preview: 'Address, phone, hours' },
]

export default function InteriorDesignAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'LUXURY INTERIOR DESIGN',
    heroHeadline: 'Spaces That Tell Your Story',
    heroSub: 'Award-winning interior design for residential and commercial spaces. Timeless elegance meets functional beauty.',
    cta1: 'Book Consultation',
    cta2: 'View Portfolio',
    s1name: 'Full Home Design', s2name: 'Kitchen & Bath', s3name: 'Living Spaces',
    s4name: 'Commercial Design', s5name: 'E-Design', s6name: 'Renovation Consult',
    s1price: 'From $12,000', s2price: 'From $6,500', s3price: 'From $4,000',
    s4price: 'From $18,000', s5price: 'From $1,200', s6price: 'From $350/hr',
    phone: '(555) 600-7788', email: 'studio@arcodesign.com',
    address: '14 Design District, Miami, FL 33137',
    hours: 'Mon–Fri 9am–6pm · Sat by appointment',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const projects = [
    { id: 'PRJ-201', name: 'Hoffman Residence', client: 'Grace Hoffman', type: 'Full Home', value: '$48,000', start: 'Apr 15', deadline: 'Jul 30', status: 'active' },
    { id: 'PRJ-202', name: 'Stone Kitchen', client: 'Oliver Stone', type: 'Kitchen', value: '$18,500', start: 'Mar 1', deadline: 'May 20', status: 'active' },
    { id: 'PRJ-203', name: 'Lindqvist Living Room', client: 'Ava Lindqvist', type: 'Living Room', value: '$9,200', start: 'Apr 20', deadline: 'Jun 10', status: 'pending' },
    { id: 'PRJ-204', name: 'Fernandez Office', client: 'Leo Fernandez', type: 'Commercial', value: '$32,000', start: 'May 5', deadline: 'Aug 15', status: 'pending' },
    { id: 'PRJ-205', name: 'Kovacs Bedroom Suite', client: 'Mia Kovacs', type: 'Bedroom', value: '$7,800', start: 'Feb 10', deadline: 'Apr 1', status: 'completed' },
  ]

  const portfolio = [
    { title: 'The Mercer Penthouse', type: 'Residential', location: 'New York, NY', year: 2025, featured: true },
    { title: 'Studio 54 Boutique', type: 'Commercial', location: 'Miami, FL', year: 2025, featured: true },
    { title: 'Villa Terracotta', type: 'Residential', location: 'Malibu, CA', year: 2024, featured: false },
    { title: 'Azure Workspace', type: 'Commercial', location: 'Austin, TX', year: 2024, featured: true },
    { title: 'The Highline Loft', type: 'Residential', location: 'Chicago, IL', year: 2024, featured: false },
  ]

  const consultations = [
    { client: 'Grace Hoffman', type: 'Initial Consult', date: 'Apr 28', time: '10:00 AM', designer: 'Emma R.', status: 'confirmed' },
    { client: 'Oliver Stone', type: 'Design Review', date: 'Apr 28', time: '2:30 PM', designer: 'Lucas M.', status: 'confirmed' },
    { client: 'Ava Lindqvist', type: 'Mood Board Pres.', date: 'Apr 29', time: '11:00 AM', designer: 'Emma R.', status: 'pending' },
    { client: 'Leo Fernandez', type: 'Site Visit', date: 'Apr 30', time: '9:00 AM', designer: 'Lucas M.', status: 'confirmed' },
  ]

  const clients = [
    { name: 'Grace Hoffman', projects: 2, spent: '$58,000', source: 'Instagram', since: 'Jan 2024' },
    { name: 'Oliver Stone', projects: 1, spent: '$18,500', source: 'Referral', since: 'Mar 2025' },
    { name: 'Ava Lindqvist', projects: 1, spent: '$9,200', source: 'Houzz', since: 'Apr 2025' },
    { name: 'Leo Fernandez', projects: 1, spent: '$32,000', source: 'Google', since: 'Apr 2025' },
    { name: 'Mia Kovacs', projects: 3, spent: '$28,400', source: 'Pinterest', since: 'Jun 2023' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>Arco</span> Design</div>
          <div className={styles.brandSub}>STUDIO ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '🏠' : t === 'Projects' ? '📐' : t === 'Clients' ? '👥' :
                t === 'Portfolio' ? '🖼️' : t === 'Consultations' ? '📅' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Consultations' && <span className={styles.navBadge}>4</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/interior-design" target="_blank" className={styles.viewSite}>View Live Site →</a>
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
            <div className={styles.avatar}>AD</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'ACTIVE PROJECTS', val: '8', sub: '$284k total value', a: '#b45309' },
                  { label: 'CONSULTATIONS', val: '4', sub: 'this week', a: '#d97706' },
                  { label: 'MONTHLY REVENUE', val: '$62k', sub: '+18% vs last month', a: '#16a34a' },
                  { label: 'PORTFOLIO PIECES', val: '32', sub: '5 featured', a: '#7c3aed' },
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
                    <div className={styles.panelHead}>Active Projects <span className={styles.chip}>8 in progress</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>PROJECT</th><th>CLIENT</th><th>TYPE</th><th>VALUE</th><th>DEADLINE</th><th>STATUS</th></tr></thead>
                      <tbody>
                        {projects.map(p => (
                          <tr key={p.id}>
                            <td><span className={styles.bold}>{p.name}</span></td>
                            <td>{p.client}</td>
                            <td><span className={styles.catChip}>{p.type}</span></td>
                            <td><span className={styles.price}>{p.value}</span></td>
                            <td>{p.deadline}</td>
                            <td><span className={`${styles.tag} ${styles[p.status]}`}>{p.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Today's Consultations</div>
                    {consultations.slice(0,3).map(c => (
                      <div key={c.client} style={{ padding:'8px 0', borderBottom:'1px solid #faf8f5' }}>
                        <div className={styles.bold}>{c.client}</div>
                        <div className={styles.muted}>{c.type} · {c.time}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Revenue by Type</div>
                    {[
                      { label: 'Residential', val: '$42k' },
                      { label: 'Commercial', val: '$20k' },
                      { label: 'E-Design', val: '$3.6k' },
                    ].map(r => (
                      <div key={r.label} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #faf8f5' }}>
                        <span className={styles.muted}>{r.label}</span>
                        <span className={styles.price}>{r.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Projects' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Projects <button className={styles.addBtn}>+ New Project</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>PROJECT</th><th>CLIENT</th><th>TYPE</th><th>VALUE</th><th>START</th><th>DEADLINE</th><th>STATUS</th></tr></thead>
                <tbody>
                  {projects.map(p => (
                    <tr key={p.id}>
                      <td className={styles.muted}>{p.id}</td>
                      <td><span className={styles.bold}>{p.name}</span></td>
                      <td>{p.client}</td>
                      <td><span className={styles.catChip}>{p.type}</span></td>
                      <td><span className={styles.price}>{p.value}</span></td>
                      <td>{p.start}</td>
                      <td>{p.deadline}</td>
                      <td><span className={`${styles.tag} ${styles[p.status]}`}>{p.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Clients' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Clients <button className={styles.addBtn}>+ Add Client</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>PROJECTS</th><th>TOTAL SPENT</th><th>SOURCE</th><th>CLIENT SINCE</th></tr></thead>
                <tbody>
                  {clients.map(c => (
                    <tr key={c.name}>
                      <td><span className={styles.bold}>{c.name}</span></td>
                      <td>{c.projects}</td>
                      <td><span className={styles.price}>{c.spent}</span></td>
                      <td><span className={styles.catChip}>{c.source}</span></td>
                      <td className={styles.muted}>{c.since}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Portfolio' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Portfolio <button className={styles.addBtn}>+ Add Project</button></div>
              <table className={styles.table}>
                <thead><tr><th>TITLE</th><th>TYPE</th><th>LOCATION</th><th>YEAR</th><th>FEATURED</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {portfolio.map(p => (
                    <tr key={p.title}>
                      <td><span className={styles.bold}>{p.title}</span></td>
                      <td><span className={styles.catChip}>{p.type}</span></td>
                      <td>{p.location}</td>
                      <td>{p.year}</td>
                      <td><span className={`${styles.tag} ${p.featured?styles.active:styles.onhold}`}>{p.featured?'Featured':'Hidden'}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Consultations' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Consultation Schedule <button className={styles.addBtn}>+ Book Consult</button></div>
              <table className={styles.table}>
                <thead><tr><th>CLIENT</th><th>TYPE</th><th>DATE</th><th>TIME</th><th>DESIGNER</th><th>STATUS</th></tr></thead>
                <tbody>
                  {consultations.map(c => (
                    <tr key={c.client}>
                      <td><span className={styles.bold}>{c.client}</span></td>
                      <td>{c.type}</td>
                      <td>{c.date}</td>
                      <td>{c.time}</td>
                      <td>{c.designer}</td>
                      <td><span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span></td>
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
                  <a href="/demos/interior-design" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                    <div className={styles.ecSectionLabel}>CONTACT & STUDIO</div>
                    <div className={styles.ecContactGrid}>
                      {[
                        { label: 'PHONE', key: 'phone' }, { label: 'EMAIL', key: 'email' },
                        { label: 'STUDIO', key: 'address' }, { label: 'HOURS', key: 'hours' },
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
