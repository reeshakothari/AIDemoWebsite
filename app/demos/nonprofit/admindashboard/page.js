'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Donors', 'Programs', 'Volunteers', 'Campaigns', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Patricia Owens', source: 'Website', interest: 'Major Donation', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Robert Chu', source: 'Event', interest: 'Corporate Partnership', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Helen Moss', source: 'Referral', interest: 'Volunteer Program', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'James Addo', source: 'LinkedIn', interest: 'Grant Inquiry', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Lisa Pham', source: 'Email', interest: 'Monthly Giving', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Mission, tagline, CTAs' },
  { id: 'services', label: 'Our Programs', preview: '6 program cards' },
  { id: 'contact', label: 'Contact & Location', preview: 'Address, phone, email' },
]

export default function NonprofitAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'MAKING A DIFFERENCE',
    heroHeadline: 'Together We Build a Better Tomorrow',
    heroSub: 'Empowering communities through education, health, and opportunity. Every donation changes a life.',
    cta1: 'Donate Now',
    cta2: 'Our Programs',
    s1name: 'Youth Education', s2name: 'Food Security', s3name: 'Health Outreach',
    s4name: 'Job Training', s5name: 'Housing Support', s6name: 'Community Events',
    s1price: 'Active since 2018', s2price: '8,200 meals/month', s3price: '1,400 patients/yr',
    s4price: '340 graduates', s5price: '180 families served', s6price: '24 events/year',
    phone: '(555) 100-2020', email: 'info@brighthorizons.org',
    address: '400 Hope Street, Atlanta, GA 30303',
    hours: 'Mon–Fri 9am–5pm · Volunteer registration online',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const donors = [
    { name: 'Patricia Owens', type: 'Major Donor', total: '$48,000', lastGift: 'Apr 2026', frequency: 'Annual', status: 'major' },
    { name: 'Robert Chu (Corp)', type: 'Corporate', total: '$120,000', lastGift: 'Jan 2026', frequency: 'Annual', status: 'major' },
    { name: 'Helen Moss', type: 'Individual', total: '$4,800', lastGift: 'Apr 2026', frequency: 'Monthly', status: 'recurring' },
    { name: 'James Addo Foundation', type: 'Foundation', total: '$85,000', lastGift: 'Mar 2026', frequency: 'Grant', status: 'major' },
    { name: 'Lisa Pham', type: 'Individual', total: '$600', lastGift: 'Feb 2026', frequency: 'Monthly', status: 'recurring' },
  ]

  const programs = [
    { name: 'Youth Education', director: 'Maya Johnson', beneficiaries: 420, budget: '$180,000', funded: '92%', status: 'active' },
    { name: 'Food Security', director: 'Carlos Vega', beneficiaries: 1200, budget: '$90,000', funded: '87%', status: 'active' },
    { name: 'Health Outreach', director: 'Dr. Priya Nair', beneficiaries: 340, budget: '$210,000', funded: '78%', status: 'active' },
    { name: 'Job Training', director: 'Sam Park', beneficiaries: 180, budget: '$120,000', funded: '65%', status: 'active' },
    { name: 'Housing Support', director: 'Ana Cruz', beneficiaries: 90, budget: '$160,000', funded: '55%', status: 'active' },
  ]

  const volunteers = [
    { name: 'Helen Moss', program: 'Youth Education', hours: 142, since: 'Jan 2024', status: 'active' },
    { name: 'David Kim', program: 'Food Security', hours: 88, since: 'Mar 2024', status: 'active' },
    { name: 'Aisha Williams', program: 'Health Outreach', hours: 210, since: 'Sep 2023', status: 'active' },
    { name: 'Tom Hardy', program: 'Job Training', hours: 64, since: 'Jul 2024', status: 'active' },
    { name: 'Nina Osei', program: 'Housing Support', hours: 38, since: 'Feb 2025', status: 'pending' },
  ]

  const campaigns = [
    { name: 'Spring Giving Drive 2026', goal: '$200,000', raised: '$148,000', donors: 842, deadline: 'May 31', status: 'active' },
    { name: 'Education for All', goal: '$80,000', raised: '$80,000', donors: 312, deadline: 'Closed', status: 'completed' },
    { name: 'Summer Gala 2026', goal: '$150,000', raised: '$24,000', donors: 48, deadline: 'Jul 12', status: 'active' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>Bright</span> Horizons</div>
          <div className={styles.brandSub}>NONPROFIT ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '🌟' : t === 'Donors' ? '💝' : t === 'Programs' ? '🌍' :
                t === 'Volunteers' ? '🤝' : t === 'Campaigns' ? '📣' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Campaigns' && <span className={styles.navBadge}>2</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/nonprofit" target="_blank" className={styles.viewSite}>View Live Site →</a>
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
            <div className={styles.avatar}>BH</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'TOTAL RAISED YTD', val: '$892k', sub: '+24% vs last year', a: '#1d4ed8' },
                  { label: 'ACTIVE DONORS', val: '2,840', sub: '312 recurring monthly', a: '#16a34a' },
                  { label: 'VOLUNTEERS', val: '186', sub: '4,200 hrs this year', a: '#8b5cf6' },
                  { label: 'LIVES IMPACTED', val: '8,400+', sub: 'across 5 programs', a: '#f59e0b' },
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
                    <div className={styles.panelHead}>Active Campaigns <span className={styles.chip}>2 live</span></div>
                    {campaigns.map(c => (
                      <div key={c.name} style={{ marginBottom: 16 }}>
                        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                          <div>
                            <div className={styles.bold}>{c.name}</div>
                            <div className={styles.muted}>{c.donors} donors · deadline {c.deadline}</div>
                          </div>
                          <span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span>
                        </div>
                        <div style={{ background:'#f7f9fc', borderRadius:6, height:8, marginBottom:4 }}>
                          <div style={{ width: `${Math.round(parseInt(c.raised.replace(/\D/g,''))/parseInt(c.goal.replace(/\D/g,''))*100)}%`, height:'100%', background:'#1d4ed8', borderRadius:6 }}/>
                        </div>
                        <div style={{ display:'flex', justifyContent:'space-between', fontSize:11 }}>
                          <span className={styles.price}>{c.raised} raised</span>
                          <span className={styles.muted}>Goal: {c.goal}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Programs Overview</div>
                    <table className={styles.table}>
                      <thead><tr><th>PROGRAM</th><th>BENEFICIARIES</th><th>FUNDED</th></tr></thead>
                      <tbody>
                        {programs.map(p => (
                          <tr key={p.name}>
                            <td><span className={styles.bold}>{p.name}</span></td>
                            <td>{p.beneficiaries.toLocaleString()}</td>
                            <td><span className={styles.price}>{p.funded}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Donors</div>
                    {donors.slice(0,4).map(d => (
                      <div key={d.name} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #f7f9fc' }}>
                        <div>
                          <div className={styles.bold}>{d.name}</div>
                          <div className={styles.muted}>{d.frequency}</div>
                        </div>
                        <span className={styles.price}>{d.total}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Volunteer Hours</div>
                    {volunteers.slice(0,4).map(v => (
                      <div key={v.name} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderBottom:'1px solid #f7f9fc' }}>
                        <span className={styles.muted}>{v.name}</span>
                        <span className={styles.bold}>{v.hours} hrs</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Donors' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Donor Database <button className={styles.addBtn}>+ Add Donor</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>TYPE</th><th>TOTAL GIVEN</th><th>LAST GIFT</th><th>FREQUENCY</th><th>STATUS</th></tr></thead>
                <tbody>
                  {donors.map(d => (
                    <tr key={d.name}>
                      <td><span className={styles.bold}>{d.name}</span></td>
                      <td><span className={styles.catChip}>{d.type}</span></td>
                      <td><span className={styles.price}>{d.total}</span></td>
                      <td>{d.lastGift}</td>
                      <td>{d.frequency}</td>
                      <td><span className={`${styles.tag} ${styles[d.status]}`}>{d.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Programs' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Programs <button className={styles.addBtn}>+ Add Program</button></div>
              <table className={styles.table}>
                <thead><tr><th>PROGRAM</th><th>DIRECTOR</th><th>BENEFICIARIES</th><th>BUDGET</th><th>FUNDED</th><th>STATUS</th></tr></thead>
                <tbody>
                  {programs.map(p => (
                    <tr key={p.name}>
                      <td><span className={styles.bold}>{p.name}</span></td>
                      <td>{p.director}</td>
                      <td>{p.beneficiaries.toLocaleString()}</td>
                      <td><span className={styles.price}>{p.budget}</span></td>
                      <td>{p.funded}</td>
                      <td><span className={`${styles.tag} ${styles[p.status]}`}>{p.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Volunteers' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Volunteers <button className={styles.addBtn}>+ Register Volunteer</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>PROGRAM</th><th>HOURS LOGGED</th><th>SINCE</th><th>STATUS</th></tr></thead>
                <tbody>
                  {volunteers.map(v => (
                    <tr key={v.name}>
                      <td><span className={styles.bold}>{v.name}</span></td>
                      <td><span className={styles.catChip}>{v.program}</span></td>
                      <td><span className={styles.price}>{v.hours}</span></td>
                      <td className={styles.muted}>{v.since}</td>
                      <td><span className={`${styles.tag} ${styles[v.status]}`}>{v.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Campaigns' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Fundraising Campaigns <button className={styles.addBtn}>+ New Campaign</button></div>
              {campaigns.map(c => (
                <div key={c.name} style={{ padding:'16px 0', borderBottom:'1.5px solid #f7f9fc' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:10 }}>
                    <div>
                      <div className={styles.bold} style={{ fontSize:15 }}>{c.name}</div>
                      <div className={styles.muted}>{c.donors} donors · Deadline: {c.deadline}</div>
                    </div>
                    <span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span>
                  </div>
                  <div style={{ background:'#f7f9fc', borderRadius:8, height:12, marginBottom:6 }}>
                    <div style={{ width:`${Math.round(parseInt(c.raised.replace(/\D/g,''))/parseInt(c.goal.replace(/\D/g,''))*100)}%`, height:'100%', background:'#1d4ed8', borderRadius:8 }}/>
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between' }}>
                    <span className={styles.price}>{c.raised} raised</span>
                    <span className={styles.muted}>Goal: {c.goal}</span>
                  </div>
                </div>
              ))}
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
                  <a href="/demos/nonprofit" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                    <div className={styles.ecSectionLabel}>OUR PROGRAMS</div>
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
                    <div className={styles.ecSectionLabel}>CONTACT & LOCATION</div>
                    <div className={styles.ecContactGrid}>
                      {[
                        { label: 'PHONE', key: 'phone' }, { label: 'EMAIL', key: 'email' },
                        { label: 'ADDRESS', key: 'address' }, { label: 'OFFICE HOURS', key: 'hours' },
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
