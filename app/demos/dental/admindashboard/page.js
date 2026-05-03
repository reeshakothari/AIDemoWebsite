'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Appointments', 'Patients', 'Treatments', 'Billing', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Rachel Kim', source: 'Google', interest: 'Teeth Whitening', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Tom Bradley', source: 'Instagram', interest: 'Invisalign', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Nina Sharma', source: 'Referral', interest: 'Dental Implant', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Alex Ford', source: 'Website', interest: 'General Checkup', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Chloe Martin', source: 'Facebook', interest: 'Veneers', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'services', label: 'Our Services', preview: '6 service cards' },
  { id: 'contact', label: 'Contact & Hours', preview: 'Address, phone, hours' },
]

export default function DentalAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'TRUSTED DENTAL CARE',
    heroHeadline: 'Your Perfect Smile Starts Here',
    heroSub: 'Modern dental care with a gentle touch. Comprehensive treatments for the whole family.',
    cta1: 'Book Appointment',
    cta2: 'Our Services',
    s1name: 'Teeth Whitening', s2name: 'Invisalign', s3name: 'Dental Implants',
    s4name: 'General Checkup', s5name: 'Veneers', s6name: 'Root Canal',
    phone: '(555) 123-4567', email: 'hello@brightsmile.com',
    address: '120 Oak Street, San Francisco, CA 94102',
    hours: 'Mon–Fri 8am–6pm · Sat 9am–2pm',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const appointments = [
    { id: 'APT-501', patient: 'Rachel Kim', treatment: 'Whitening', doctor: 'Dr. Patel', date: 'Apr 27', time: '9:00 AM', status: 'confirmed' },
    { id: 'APT-502', patient: 'Tom Bradley', treatment: 'Invisalign Consult', doctor: 'Dr. Chen', date: 'Apr 27', time: '11:00 AM', status: 'pending' },
    { id: 'APT-503', patient: 'Nina Sharma', treatment: 'Implant Review', doctor: 'Dr. Patel', date: 'Apr 28', time: '2:00 PM', status: 'confirmed' },
    { id: 'APT-504', patient: 'Alex Ford', treatment: 'General Checkup', doctor: 'Dr. Lee', date: 'Apr 28', time: '10:00 AM', status: 'completed' },
    { id: 'APT-505', patient: 'Chloe Martin', treatment: 'Veneers Consult', doctor: 'Dr. Chen', date: 'Apr 29', time: '4:00 PM', status: 'cancelled' },
  ]

  const patients = [
    { id: 'PT-101', name: 'Rachel Kim', dob: '15 Mar 1990', phone: '(555) 100-2200', lastVisit: 'Apr 22', nextAppt: 'Apr 27', insurance: 'BlueCross' },
    { id: 'PT-102', name: 'Tom Bradley', dob: '22 Jul 1985', phone: '(555) 100-3300', lastVisit: 'Mar 10', nextAppt: 'Apr 27', insurance: 'Aetna' },
    { id: 'PT-103', name: 'Nina Sharma', dob: '8 Nov 1992', phone: '(555) 100-4400', lastVisit: 'Apr 5', nextAppt: 'Apr 28', insurance: 'United' },
    { id: 'PT-104', name: 'Alex Ford', dob: '3 Jan 1978', phone: '(555) 100-5500', lastVisit: 'Apr 28', nextAppt: 'Jul 28', insurance: 'Delta' },
    { id: 'PT-105', name: 'Chloe Martin', dob: '19 Sep 1995', phone: '(555) 100-6600', lastVisit: 'Feb 14', nextAppt: 'Apr 29', insurance: 'None' },
  ]

  const treatments = [
    { name: 'Teeth Whitening', duration: '1 hr', fee: '$350', category: 'Cosmetic', bookings: 34 },
    { name: 'Invisalign', duration: '45 min consult', fee: '$3,800', category: 'Orthodontic', bookings: 18 },
    { name: 'Dental Implants', duration: '2+ sessions', fee: '$4,500+', category: 'Restorative', bookings: 9 },
    { name: 'General Checkup', duration: '30 min', fee: '$120', category: 'Preventive', bookings: 82 },
    { name: 'Veneers', duration: '2 sessions', fee: '$1,800/tooth', category: 'Cosmetic', bookings: 12 },
    { name: 'Root Canal', duration: '90 min', fee: '$1,200', category: 'Restorative', bookings: 7 },
  ]

  const billing = [
    { id: 'INV-2001', patient: 'Rachel Kim', treatment: 'Whitening', amount: '$350', insurance: '$0', due: '$350', status: 'paid' },
    { id: 'INV-2002', patient: 'Tom Bradley', treatment: 'Invisalign', amount: '$3,800', insurance: '$1,000', due: '$2,800', status: 'pending' },
    { id: 'INV-2003', patient: 'Nina Sharma', treatment: 'Implant', amount: '$4,500', insurance: '$2,000', due: '$2,500', status: 'pending' },
    { id: 'INV-2004', patient: 'Alex Ford', treatment: 'Checkup', amount: '$120', insurance: '$96', due: '$24', status: 'paid' },
    { id: 'INV-2005', patient: 'Chloe Martin', treatment: 'Veneers', amount: '$3,600', insurance: '$0', due: '$3,600', status: 'overdue' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Bright<span>Smile</span></div>
          <div className={styles.brandSub}>DENTAL ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '🦷' : t === 'Appointments' ? '📅' : t === 'Patients' ? '👤' :
                t === 'Treatments' ? '💉' : t === 'Billing' ? '💳' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Appointments' && <span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/dental" target="_blank" className={styles.viewSite}>View Live Site →</a>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Sunday, 27 April 2026</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>5</span></div>
            <div className={styles.avatar}>BS</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: "TODAY'S APPOINTMENTS", val: '12', sub: '5 confirmed · 7 pending', a: '#0284c7' },
                  { label: 'ACTIVE PATIENTS', val: '1,248', sub: '+23 this month', a: '#0891b2' },
                  { label: 'MONTHLY REVENUE', val: '$42.8k', sub: '+8% vs last month', a: '#16a34a' },
                  { label: 'PENDING INVOICES', val: '18', sub: '$24.6k outstanding', a: '#f59e0b' },
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
                    <div className={styles.panelHead}>Today's Schedule <span className={styles.chip}>12 appointments</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>PATIENT</th><th>TREATMENT</th><th>DOCTOR</th><th>TIME</th><th>STATUS</th></tr></thead>
                      <tbody>
                        {appointments.map(a => (
                          <tr key={a.id}>
                            <td><span className={styles.bold}>{a.patient}</span></td>
                            <td>{a.treatment}</td>
                            <td>{a.doctor}</td>
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
                    <div className={styles.panelHead}>Top Treatments</div>
                    {treatments.slice(0,4).map(t => (
                      <div key={t.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f7ff' }}>
                        <span className={styles.muted}>{t.name}</span>
                        <span className={styles.bold}>{t.bookings} pts</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Billing Overview</div>
                    {[
                      { label: 'Paid this month', val: '$38.2k' },
                      { label: 'Outstanding', val: '$24.6k' },
                      { label: 'Overdue (30d+)', val: '$3,600' },
                    ].map(b => (
                      <div key={b.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f7ff' }}>
                        <span className={styles.muted}>{b.label}</span>
                        <span className={styles.price}>{b.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Appointments' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Appointments <button className={styles.addBtn}>+ Schedule</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>PATIENT</th><th>TREATMENT</th><th>DOCTOR</th><th>DATE</th><th>TIME</th><th>STATUS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {appointments.map(a => (
                    <tr key={a.id}>
                      <td className={styles.muted}>{a.id}</td>
                      <td><span className={styles.bold}>{a.patient}</span></td>
                      <td>{a.treatment}</td>
                      <td>{a.doctor}</td>
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

          {tab === 'Patients' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Patient Records <button className={styles.addBtn}>+ Add Patient</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>NAME</th><th>DOB</th><th>PHONE</th><th>LAST VISIT</th><th>NEXT APPT</th><th>INSURANCE</th></tr></thead>
                <tbody>
                  {patients.map(p => (
                    <tr key={p.id}>
                      <td className={styles.muted}>{p.id}</td>
                      <td><span className={styles.bold}>{p.name}</span></td>
                      <td>{p.dob}</td>
                      <td>{p.phone}</td>
                      <td>{p.lastVisit}</td>
                      <td><span className={styles.price}>{p.nextAppt}</span></td>
                      <td><span className={styles.catChip}>{p.insurance}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Treatments' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Treatments & Fees <button className={styles.addBtn}>+ Add Treatment</button></div>
              <table className={styles.table}>
                <thead><tr><th>TREATMENT</th><th>CATEGORY</th><th>DURATION</th><th>FEE</th><th>BOOKINGS</th><th>ACTIONS</th></tr></thead>
                <tbody>
                  {treatments.map(t => (
                    <tr key={t.name}>
                      <td><span className={styles.bold}>{t.name}</span></td>
                      <td><span className={styles.catChip}>{t.category}</span></td>
                      <td>{t.duration}</td>
                      <td><span className={styles.price}>{t.fee}</span></td>
                      <td>{t.bookings}</td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Billing' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Invoices <button className={styles.addBtn}>+ New Invoice</button></div>
              <table className={styles.table}>
                <thead><tr><th>INVOICE</th><th>PATIENT</th><th>TREATMENT</th><th>TOTAL</th><th>INSURANCE</th><th>DUE</th><th>STATUS</th></tr></thead>
                <tbody>
                  {billing.map(b => (
                    <tr key={b.id}>
                      <td className={styles.muted}>{b.id}</td>
                      <td><span className={styles.bold}>{b.patient}</span></td>
                      <td>{b.treatment}</td>
                      <td>{b.amount}</td>
                      <td>{b.insurance}</td>
                      <td><span className={styles.price}>{b.due}</span></td>
                      <td><span className={`${styles.tag} ${styles[b.status]}`}>{b.status}</span></td>
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
                  <a href="/demos/dental" target="_blank" className={styles.previewLink}>Preview site →</a>
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
