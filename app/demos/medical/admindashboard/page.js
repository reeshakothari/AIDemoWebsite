'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Appointments','Patients','Doctors','Services','Inbound Leads','Edit Website']

const appointments = [
  { id:'AP001', patient:'James Norton', doctor:'Dr. Sarah Lin', specialty:'Cardiology', date:'23 Apr', time:'9:00 AM', status:'apscheduled' },
  { id:'AP002', patient:'Priya Sharma', doctor:'Dr. Emma Clarke', specialty:'Dermatology', date:'23 Apr', time:'10:30 AM', status:'apcheckout' },
  { id:'AP003', patient:'Mark Henley', doctor:'Dr. Arjun Patel', specialty:'Neurology', date:'23 Apr', time:'11:00 AM', status:'apscheduled' },
  { id:'AP004', patient:'Lisa Tran', doctor:'Dr. Sarah Lin', specialty:'Cardiology', date:'24 Apr', time:'2:00 PM', status:'apwaitlist' },
  { id:'AP005', patient:'Robert Miles', doctor:'Dr. Emma Clarke', specialty:'Dermatology', date:'24 Apr', time:'3:30 PM', status:'apcancelled' },
]

const patients = [
  { id:'PT001', name:'James Norton', dob:'1978-04-12', blood:'O+', last:'18 Apr 2026', next:'23 Apr 2026', doctor:'Dr. Sarah Lin' },
  { id:'PT002', name:'Priya Sharma', dob:'1990-07-25', blood:'A+', last:'20 Apr 2026', next:'23 Apr 2026', doctor:'Dr. Emma Clarke' },
  { id:'PT003', name:'Mark Henley', dob:'1965-11-03', blood:'B-', last:'10 Apr 2026', next:'23 Apr 2026', doctor:'Dr. Arjun Patel' },
  { id:'PT004', name:'Lisa Tran', dob:'1985-02-17', blood:'AB+', last:'15 Apr 2026', next:'24 Apr 2026', doctor:'Dr. Sarah Lin' },
  { id:'PT005', name:'Robert Miles', dob:'1972-09-30', blood:'O-', last:'05 Apr 2026', next:'24 Apr 2026', doctor:'Dr. Emma Clarke' },
]

const doctors = [
  { name:'Dr. Sarah Lin', spec:'Cardiologist', exp:'18 yrs', today:6, rating:'4.9', status:'confirmed' },
  { name:'Dr. Arjun Patel', spec:'Neurologist', exp:'14 yrs', today:4, rating:'4.8', status:'confirmed' },
  { name:'Dr. Emma Clarke', spec:'Dermatologist', exp:'11 yrs', today:7, rating:'5.0', status:'confirmed' },
  { name:'Dr. Kevin Marsh', spec:'Orthopaedist', exp:'9 yrs', today:3, rating:'4.7', status:'pending' },
]

const services = [
  { name:'General Check-up', dept:'General Medicine', price:'$80', duration:'30 min', available:true },
  { name:'ECG & Heart Screening', dept:'Cardiology', price:'$220', duration:'45 min', available:true },
  { name:'MRI Brain Scan', dept:'Neurology', price:'$480', duration:'60 min', available:true },
  { name:'Skin Biopsy', dept:'Dermatology', price:'$150', duration:'30 min', available:true },
  { name:'X-Ray (per zone)', dept:'Orthopaedics', price:'$95', duration:'20 min', available:false },
]

const initLeads = [
  { id:1, name:'Helen Carter', source:'Website Form', service:'Cardiology Consult', date:'22 Apr', status:'new' },
  { id:2, name:'David Osei', source:'Google Ad', service:'General Check-up', date:'21 Apr', status:'contacted' },
  { id:3, name:'Amara Singh', source:'Referral', service:'Dermatology', date:'20 Apr', status:'qualified' },
  { id:4, name:'Tom Briggs', source:'Website Form', service:'Neurology Consult', date:'19 Apr', status:'booked' },
  { id:5, name:'Nina Wolfe', source:'Social Media', service:'Orthopaedics', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'specialties', label:'Specialties', preview:'6 specialty cards' },
  { id:'contact', label:'Contact & Hours', preview:'Address, phone, hours' },
]

export default function MedicalAdminDashboard() {
  const [tab, setTab] = useState('Dashboard')
  const [apFilter, setApFilter] = useState('all')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'✓ Accepting New Patients',
    heroHeadline:'Your Health Is Our Priority',
    heroSub:'Expert medical care delivered with compassion and precision. From routine check-ups to complex conditions.',
    cta1:'Book Appointment',
    cta2:'Our Specialties',
    spec1:'Cardiology',spec2:'Neurology',spec3:'Orthopaedics',spec4:'Ophthalmology',spec5:'General Medicine',spec6:'Dermatology',
    phone:'+1 (555) 911-CARE',email:'hello@clearcareclinic.com',address:'3 Clinics Across the City',hours:'8am – 8pm, 7 Days',
  })

  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id, status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }

  const filteredAp = apFilter==='all' ? appointments : appointments.filter(a=>a.status===apFilter)
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  const statusLabel = s => ({ apscheduled:'Scheduled', apcheckout:'Checked Out', apcancelled:'Cancelled', apwaitlist:'Waitlist' })[s] || s

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>Clear</span>Care Admin</div>
          <div className={styles.brandSub}>CLINIC PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','📅','👥','🩺','💊','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}
              {t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/medical" className={styles.viewSite}>← View Live Site</a>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>ClearCare Clinic · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>3</span></div>
            <div className={styles.avatar}>DR</div>
          </div>
        </div>

        <div className={styles.content}>

          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Today\'s Appointments',val:'20',sub:'6 completed',color:'#0891B2'},
                  {label:'Total Patients',val:'1,248',sub:'+12 this week',color:'#10b981'},
                  {label:'Doctors On Duty',val:'4',sub:'2 specialists',color:'#6366f1'},
                  {label:'Revenue (Apr)',val:'$38.4K',sub:'+9% vs Mar',color:'#f59e0b'},
                ].map(s=>(
                  <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                    <div className={styles.statVal}>{s.val}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                    <div className={styles.statSub}>{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className={styles.twoCol}>
                <div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Today's Appointments<span className={styles.chip}>20 total</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>Patient</th><th>Doctor</th><th>Time</th><th>Status</th></tr></thead>
                      <tbody>
                        {appointments.slice(0,5).map(a=>(
                          <tr key={a.id}>
                            <td><div className={styles.bold}>{a.patient}</div><div className={styles.muted}>{a.specialty}</div></td>
                            <td className={styles.muted}>{a.doctor}</td>
                            <td className={styles.muted}>{a.time}</td>
                            <td><span className={`${styles.tag} ${styles[a.status]}`}>{statusLabel(a.status)}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Doctors On Duty</div>
                    {doctors.map(d=>(
                      <div key={d.name} className={styles.docRow}>
                        <div className={styles.docAvatar}>{d.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
                        <div className={styles.docInfo}>
                          <div className={styles.bold}>{d.name}</div>
                          <div className={styles.muted}>{d.spec}</div>
                        </div>
                        <div className={styles.docRight}>
                          <span className={`${styles.tag} ${styles[d.status]}`}>{d.today} appts</span>
                          <div className={styles.muted}>⭐ {d.rating}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Quick Stats</div>
                    {[['Avg Wait Time','12 min'],['Patient Satisfaction','96%'],['Bed Occupancy','74%'],['Tests Processed','38 today']].map(([k,v])=>(
                      <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'7px 0',borderBottom:'1px solid #f0f9ff',fontSize:'13px'}}>
                        <span className={styles.muted}>{k}</span><strong>{v}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab==='Appointments'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                All Appointments
                <div style={{display:'flex',gap:8}}>
                  <div className={styles.filterRow}>
                    {['all','apscheduled','apcheckout','apwaitlist','apcancelled'].map(f=>(
                      <button key={f} className={`${styles.filterBtn} ${apFilter===f?styles.filterActive:''}`} onClick={()=>setApFilter(f)}>
                        {f==='all'?'All':statusLabel(f)}
                      </button>
                    ))}
                  </div>
                  <button className={styles.addBtn}>+ New Appointment</button>
                </div>
              </div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Patient</th><th>Doctor</th><th>Specialty</th><th>Date & Time</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  {filteredAp.map(a=>(
                    <tr key={a.id}>
                      <td className={styles.muted}>{a.id}</td>
                      <td><div className={styles.bold}>{a.patient}</div></td>
                      <td className={styles.muted}>{a.doctor}</td>
                      <td><span className={styles.catChip}>{a.specialty}</span></td>
                      <td className={styles.muted}>{a.date} · {a.time}</td>
                      <td><span className={`${styles.tag} ${styles[a.status]}`}>{statusLabel(a.status)}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>View</button><button className={styles.rowBtn}>Reschedule</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab==='Patients'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Patient Records<button className={styles.addBtn}>+ Add Patient</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Patient</th><th>DOB</th><th>Blood</th><th>Last Visit</th><th>Next Visit</th><th>Doctor</th><th>Actions</th></tr></thead>
                <tbody>
                  {patients.map(p=>(
                    <tr key={p.id}>
                      <td className={styles.muted}>{p.id}</td>
                      <td><div className={styles.bold}>{p.name}</div></td>
                      <td className={styles.muted}>{p.dob}</td>
                      <td><span className={styles.catChip}>{p.blood}</span></td>
                      <td className={styles.muted}>{p.last}</td>
                      <td className={styles.muted}>{p.next}</td>
                      <td className={styles.muted}>{p.doctor}</td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Records</button><button className={styles.rowBtn}>Book</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab==='Doctors'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Doctor Roster<button className={styles.addBtn}>+ Add Doctor</button></div>
              <table className={styles.table}>
                <thead><tr><th>Doctor</th><th>Specialty</th><th>Experience</th><th>Today's Appts</th><th>Rating</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  {doctors.map(d=>(
                    <tr key={d.name}>
                      <td><div className={styles.bold}>{d.name}</div></td>
                      <td><span className={styles.catChip}>{d.spec}</span></td>
                      <td className={styles.muted}>{d.exp}</td>
                      <td className={styles.bold}>{d.today}</td>
                      <td className={styles.muted}>⭐ {d.rating}</td>
                      <td><span className={`${styles.tag} ${styles[d.status]}`}>{d.status}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Profile</button><button className={styles.rowBtn}>Schedule</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab==='Services'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Services Catalogue<button className={styles.addBtn}>+ Add Service</button></div>
              <table className={styles.table}>
                <thead><tr><th>Service</th><th>Department</th><th>Price</th><th>Duration</th><th>Available</th><th>Actions</th></tr></thead>
                <tbody>
                  {services.map(s=>(
                    <tr key={s.name}>
                      <td><div className={styles.bold}>{s.name}</div></td>
                      <td><span className={styles.catChip}>{s.dept}</span></td>
                      <td className={styles.price}>{s.price}</td>
                      <td className={styles.muted}>{s.duration}</td>
                      <td><span className={`${styles.tag} ${s.available?styles.confirmed:styles.apcancelled}`}>{s.available?'Yes':'No'}</span></td>
                      <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab==='Inbound Leads'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                Inbound Leads
                <div className={styles.filterRow}>
                  {['all','new','contacted','qualified','booked','lost'].map(f=>(
                    <button key={f} className={`${styles.filterBtn} ${leadFilter===f?styles.filterActive:''}`} onClick={()=>setLeadFilter(f)}>{f}</button>
                  ))}
                </div>
              </div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Source</th><th>Service Interest</th><th>Date</th><th>Status</th><th>Update</th></tr></thead>
                <tbody>
                  {filteredLeads.map(l=>(
                    <tr key={l.id}>
                      <td><div className={styles.bold}>{l.name}</div></td>
                      <td className={styles.muted}>{l.source}</td>
                      <td><span className={styles.catChip}>{l.service}</span></td>
                      <td className={styles.muted}>{l.date}</td>
                      <td><span className={`${styles.tag} ${styles['ld'+l.status]}`}>{l.status}</span></td>
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

          {tab==='Edit Website'&&(
            <div className={styles.editShell}>
              <div className={styles.editNav}>
                <div className={styles.editNavTitle}>SECTIONS</div>
                {editSections.map(s=>(
                  <button key={s.id} className={`${styles.editNavItem} ${editSection===s.id?styles.editNavActive:''}`} onClick={()=>setEditSection(s.id)}>
                    <span className={styles.editNavLabel}>{s.label}</span>
                    <span className={styles.editNavSub}>{s.preview}</span>
                  </button>
                ))}
                <div className={styles.editSaveArea}>
                  <button className={styles.saveBtn} onClick={handleSave}>{saved?'✓ Saved!':'Save Changes'}</button>
                  <a href="/demos/medical" target="_blank" className={styles.previewLink}>Preview site →</a>
                </div>
              </div>
              <div className={styles.editCanvas}>
                {editSection==='hero'&&(
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
                {editSection==='specialties'&&(
                  <div className={styles.ecSpecialties}>
                    <div className={styles.ecSectionLabel}>MEDICAL SPECIALTIES</div>
                    <div className={styles.ecSpecGrid}>
                      {[['spec1','❤️'],['spec2','🧠'],['spec3','🦴'],['spec4','👁️'],['spec5','🩺'],['spec6','🧬']].map(([k,icon])=>(
                        <div key={k} className={styles.ecSpecCard}>
                          <div style={{fontSize:24,marginBottom:8}}>{icon}</div>
                          <input className={`${styles.inlineInput} ${styles.ecSpecName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>CONTACT & HOURS</div>
                    <div className={styles.ecContactGrid}>
                      {[['phone','📞 Phone',content.phone],['email','✉️ Email',content.email],['address','📍 Location',content.address],['hours','🕐 Hours',content.hours]].map(([k,label,val])=>(
                        <div key={k} className={styles.ecContactBlock}>
                          <div className={styles.ecFieldLabel}>{label}</div>
                          <input className={`${styles.inlineInput} ${styles.ecContactInput}`} value={val} onChange={e=>set(k,e.target.value)}/>
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
