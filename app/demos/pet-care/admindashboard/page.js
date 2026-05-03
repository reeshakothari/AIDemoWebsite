'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Appointments', 'Pets', 'Services', 'Clients', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Sarah Mitchell', source: 'Google', interest: 'Dog Boarding', date: '22 Apr', status: 'new' },
  { id: 2, name: 'James Patel', source: 'Instagram', interest: 'Grooming Package', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Emily Chen', source: 'Referral', interest: 'Daycare Monthly', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Marcus Webb', source: 'Facebook', interest: 'Vet Check-up', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Olivia Torres', source: 'Walk-in', interest: 'Cat Boarding', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'services', label: 'Our Services', preview: '6 service cards' },
  { id: 'contact', label: 'Contact & Hours', preview: 'Address, phone, hours' },
]

export default function PetCareAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'TRUSTED PET CARE',
    heroHeadline: 'Where Every Pet Feels at Home',
    heroSub: 'Professional boarding, grooming, and daycare services for your beloved companions.',
    cta1: 'Book a Visit',
    cta2: 'View Services',
    s1name: 'Dog Boarding', s2name: 'Cat Boarding', s3name: 'Dog Grooming',
    s4name: 'Puppy Daycare', s5name: 'Vet Check-up', s6name: 'Training',
    s1price: '$45/night', s2price: '$35/night', s3price: 'From $55',
    s4price: '$30/day', s5price: 'From $80', s6price: '$120/session',
    phone: '(555) 222-3344', email: 'hello@pawsfirst.com',
    address: '47 Maple Lane, Austin, TX 78701',
    hours: 'Mon–Sat 7am–8pm · Sun 9am–6pm',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const appointments = [
    { id: 'A-1001', pet: 'Buddy (Lab)', owner: 'Sarah M.', service: 'Grooming', date: 'Apr 27', time: '10:00 AM', status: 'confirmed' },
    { id: 'A-1002', pet: 'Luna (Persian)', owner: 'James P.', service: 'Boarding', date: 'Apr 27', time: '2:00 PM', status: 'pending' },
    { id: 'A-1003', pet: 'Max (Poodle)', owner: 'Emily C.', service: 'Daycare', date: 'Apr 28', time: '8:00 AM', status: 'confirmed' },
    { id: 'A-1004', pet: 'Bella (Siamese)', owner: 'Marcus W.', service: 'Vet Check', date: 'Apr 28', time: '11:30 AM', status: 'boarded' },
    { id: 'A-1005', pet: 'Charlie (Beagle)', owner: 'Olivia T.', service: 'Training', date: 'Apr 29', time: '3:00 PM', status: 'cancelled' },
  ]

  const pets = [
    { id: 'P-301', name: 'Buddy', type: 'Dog · Labrador', owner: 'Sarah Mitchell', age: '3 yrs', weight: '32 kg', visits: 12 },
    { id: 'P-302', name: 'Luna', type: 'Cat · Persian', owner: 'James Patel', age: '5 yrs', weight: '4.2 kg', visits: 7 },
    { id: 'P-303', name: 'Max', type: 'Dog · Poodle', owner: 'Emily Chen', age: '2 yrs', weight: '14 kg', visits: 20 },
    { id: 'P-304', name: 'Bella', type: 'Cat · Siamese', owner: 'Marcus Webb', age: '4 yrs', weight: '3.8 kg', visits: 5 },
    { id: 'P-305', name: 'Charlie', type: 'Dog · Beagle', owner: 'Olivia Torres', age: '1 yr', weight: '9 kg', visits: 3 },
  ]

  const services = [
    { name: 'Dog Boarding', price: '$45/night', duration: 'Overnight', booked: 28 },
    { name: 'Cat Boarding', price: '$35/night', duration: 'Overnight', booked: 14 },
    { name: 'Dog Grooming', price: 'From $55', duration: '2–3 hrs', booked: 41 },
    { name: 'Puppy Daycare', price: '$30/day', duration: 'Full day', booked: 33 },
    { name: 'Vet Check-up', price: 'From $80', duration: '30 min', booked: 19 },
    { name: 'Training Session', price: '$120/session', duration: '1 hr', booked: 11 },
  ]

  const clients = [
    { name: 'Sarah Mitchell', pets: 2, since: 'Jan 2023', spent: '$1,240', status: 'Active' },
    { name: 'James Patel', pets: 1, since: 'Mar 2023', spent: '$620', status: 'Active' },
    { name: 'Emily Chen', pets: 3, since: 'Nov 2022', spent: '$3,180', status: 'VIP' },
    { name: 'Marcus Webb', pets: 1, since: 'Jun 2024', spent: '$320', status: 'Active' },
    { name: 'Olivia Torres', pets: 2, since: 'Sep 2023', spent: '$870', status: 'Inactive' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>PawsFirst</div>
          <div className={styles.brandSub}>PET CARE ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '🐾' : t === 'Appointments' ? '📅' : t === 'Pets' ? '🐶' :
                t === 'Services' ? '✂️' : t === 'Clients' ? '👥' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Appointments' && <span className={styles.navBadge}>3</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/pet-care" target="_blank" className={styles.viewSite}>View Live Site →</a>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Sunday, 27 April 2026</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>3</span></div>
            <div className={styles.avatar}>PC</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'TODAY\'S BOOKINGS', val: '14', sub: '3 pending check-in', a: '#0d9488' },
                  { label: 'PETS IN CARE', val: '38', sub: '22 boarding · 16 daycare', a: '#3d7a3a' },
                  { label: 'MONTHLY REVENUE', val: '$18.4k', sub: '+12% vs last month', a: '#0891b2' },
                  { label: 'ACTIVE CLIENTS', val: '214', sub: '8 new this month', a: '#f59e0b' },
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
                    <div className={styles.panelHead}>Today's Appointments <span className={styles.chip}>14 today</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>PET</th><th>SERVICE</th><th>TIME</th><th>STATUS</th></tr></thead>
                      <tbody>
                        {appointments.slice(0,4).map(a => (
                          <tr key={a.id}>
                            <td><span className={styles.bold}>{a.pet}</span><br /><span className={styles.muted}>{a.owner}</span></td>
                            <td>{a.service}</td>
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
                    <div className={styles.panelHead}>Quick Stats</div>
                    {[
                      { label: 'Dogs in boarding', val: '22' },
                      { label: 'Cats in boarding', val: '8' },
                      { label: 'In daycare', val: '16' },
                      { label: 'Grooming today', val: '6' },
                    ].map(s => (
                      <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0faf8' }}>
                        <span className={styles.muted}>{s.label}</span>
                        <span className={styles.bold}>{s.val}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Revenue This Week</div>
                    {['Mon','Tue','Wed','Thu','Fri'].map((d, i) => {
                      const vals = [68, 74, 55, 80, 63]
                      return (
                        <div key={d} style={{ marginBottom: 8 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}>
                            <span className={styles.muted}>{d}</span><span className={styles.bold}>${vals[i] * 6}</span>
                          </div>
                          <div style={{ background: '#f0faf8', borderRadius: 4, height: 5 }}>
                            <div style={{ width: `${vals[i]}%`, height: '100%', background: '#0d9488', borderRadius: 4 }} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Appointments' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Appointments <button className={styles.addBtn}>+ New Appointment</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>PET</th><th>OWNER</th><th>SERVICE</th><th>DATE</th><th>TIME</th><th>STATUS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {appointments.map(a => (
                    <tr key={a.id}>
                      <td className={styles.muted}>{a.id}</td>
                      <td><span className={styles.bold}>{a.pet}</span></td>
                      <td>{a.owner}</td>
                      <td>{a.service}</td>
                      <td>{a.date}</td>
                      <td>{a.time}</td>
                      <td><span className={`${styles.tag} ${styles[a.status]}`}>{a.status}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>View</button><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Pets' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Pet Registry <button className={styles.addBtn}>+ Add Pet</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>NAME</th><th>TYPE</th><th>OWNER</th><th>AGE</th><th>WEIGHT</th><th>VISITS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {pets.map(p => (
                    <tr key={p.id}>
                      <td className={styles.muted}>{p.id}</td>
                      <td><span className={styles.bold}>{p.name}</span></td>
                      <td>{p.type}</td>
                      <td>{p.owner}</td>
                      <td>{p.age}</td>
                      <td>{p.weight}</td>
                      <td><span className={styles.price}>{p.visits}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Profile</button><button className={styles.rowBtn}>Book</button></div></td>
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
                <thead><tr><th>SERVICE</th><th>PRICE</th><th>DURATION</th><th>BOOKINGS THIS MONTH</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {services.map(s => (
                    <tr key={s.name}>
                      <td><span className={styles.bold}>{s.name}</span></td>
                      <td><span className={styles.price}>{s.price}</span></td>
                      <td>{s.duration}</td>
                      <td>{s.booked}</td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Clients' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Client Directory <button className={styles.addBtn}>+ Add Client</button></div>
              <table className={styles.table}>
                <thead><tr><th>CLIENT</th><th>PETS</th><th>MEMBER SINCE</th><th>TOTAL SPENT</th><th>STATUS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {clients.map(c => (
                    <tr key={c.name}>
                      <td><span className={styles.bold}>{c.name}</span></td>
                      <td>{c.pets}</td>
                      <td>{c.since}</td>
                      <td><span className={styles.price}>{c.spent}</span></td>
                      <td><span className={styles.catChip}>{c.status}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>View</button></div></td>
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
                  <a href="/demos/pet-care" target="_blank" className={styles.previewLink}>Preview site →</a>
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
