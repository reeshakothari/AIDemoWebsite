'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Appointments','Services','Barbers','Clients','Inbound Leads','Edit Website']

const appointments = [
  { id:'AP-001', client:'Marcus Webb', barber:'Rico Vega', service:'Skin Fade + Beard', time:'10:00 AM', duration:'45 min', total:'$55', status:'confirmed' },
  { id:'AP-002', client:'Tom Ashford', barber:'Jake Stone', service:'Classic Cut', time:'10:30 AM', duration:'30 min', total:'$35', status:'confirmed' },
  { id:'AP-003', client:'Darius Cole', barber:'Rico Vega', service:'Hot Towel Shave', time:'11:30 AM', duration:'40 min', total:'$45', status:'pending' },
  { id:'AP-004', client:'Ben Park', barber:'Sam Cruz', service:'Skin Fade', time:'12:00 PM', duration:'35 min', total:'$42', status:'confirmed' },
  { id:'AP-005', client:'Kyle Marsh', barber:'Jake Stone', service:'Beard Trim', time:'1:00 PM', duration:'20 min', total:'$25', status:'noshow' },
]

const services = [
  { name:'Classic Cut', duration:'30 min', price:'$35', popular:true },
  { name:'Skin Fade', duration:'35 min', price:'$42', popular:true },
  { name:'Skin Fade + Beard', duration:'45 min', price:'$55', popular:true },
  { name:'Hot Towel Shave', duration:'40 min', price:'$45', popular:false },
  { name:'Beard Trim', duration:'20 min', price:'$25', popular:false },
  { name:'The Full Works', duration:'70 min', price:'$85', popular:false },
]

const barbers = [
  { name:'Rico Vega', specialty:'Fades & Designs', exp:'8 yrs', today:6, rating:'5.0' },
  { name:'Jake Stone', specialty:'Classic Cuts', exp:'12 yrs', today:5, rating:'4.9' },
  { name:'Sam Cruz', specialty:'Beard Work', exp:'5 yrs', today:4, rating:'4.8' },
]

const initLeads = [
  { id:1, name:'Andre Thompson', source:'Instagram', interest:'Skin Fade', date:'22 Apr', status:'new' },
  { id:2, name:'Liam Osei', source:'Website', interest:'Full Works Package', date:'21 Apr', status:'contacted' },
  { id:3, name:'James Carter', source:'Referral', interest:'Regular Appointment', date:'20 Apr', status:'qualified' },
  { id:4, name:'Kai Brooks', source:'Google', interest:'Hot Towel Shave', date:'19 Apr', status:'booked' },
  { id:5, name:'Ryan Patel', source:'Walk-in', interest:'Classic Cut', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'services', label:'Services & Prices', preview:'6 service cards' },
  { id:'contact', label:'Shop Info', preview:'Address, hours, phone' },
]

export default function BarbershopAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'✂️ EST. 2009 · KINGS CUT BARBER CO.',
    heroHeadline:'Sharp Cuts. Clean Lines. No Compromises.',
    heroSub:'Premium barbering for modern men. Walk in looking good. Walk out looking great. Open 7 days.',
    cta1:'Book Now', cta2:'View Services',
    s1:'Classic Cut', s2:'Skin Fade', s3:'Skin Fade + Beard', s4:'Hot Towel Shave', s5:'Beard Trim', s6:'The Full Works',
    sp1:'$35', sp2:'$42', sp3:'$55', sp4:'$45', sp5:'$25', sp6:'$85',
    phone:'+1 (555) 327-FADE', email:'hello@kingscut.com', address:'14 Main Street, Downtown', hours:'Mon–Sat 9am–7pm · Sun 10am–4pm',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Kings Cut Co.</div>
          <div className={styles.brandSub}>ADMIN PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','📅','✂️','💈','👥','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/barbershop" className={styles.viewSite}>← View Live Site</a></div>
      </aside>
      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Kings Cut Co. · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>2</span></div>
            <div className={styles.avatar}>KC</div>
          </div>
        </div>
        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Appointments Today',val:'20',sub:'3 barbers',color:'#dc2626'},
                  {label:'Revenue (Apr)',val:'$8,240',sub:'+12% vs Mar',color:'#f59e0b'},
                  {label:'Avg Ticket',val:'$42',sub:'↑ $4 vs last',color:'#10b981'},
                  {label:'No-Shows (Apr)',val:'3',sub:'1.8% rate',color:'#ef4444'},
                ].map(s=>(
                  <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                    <div className={styles.statVal}>{s.val}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                    <div className={styles.statSub}>{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className={styles.twoCol}>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Today's Book<span className={styles.chip}>20 appts</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Client</th><th>Barber</th><th>Service</th><th>Time</th><th>Total</th><th>Status</th></tr></thead>
                  <tbody>{appointments.map(a=>(
                    <tr key={a.id}>
                      <td><div className={styles.bold}>{a.client}</div></td>
                      <td className={styles.muted}>{a.barber}</td>
                      <td className={styles.muted}>{a.service}</td>
                      <td className={styles.muted}>{a.time}</td>
                      <td className={styles.price}>{a.total}</td>
                      <td><span className={`${styles.tag} ${styles[a.status]}`}>{a.status}</span></td>
                    </tr>
                  ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Barber Performance</div>
                    {barbers.map(b=>(
                      <div key={b.name} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid rgba(220,38,38,0.05)',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{b.name}</div><div className={styles.muted}>{b.specialty}</div></div>
                        <div style={{textAlign:'right'}}><div className={styles.price}>⭐ {b.rating}</div><div className={styles.muted}>{b.today} today</div></div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Services</div>
                    {services.filter(s=>s.popular).map(s=>(
                      <div key={s.name} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(220,38,38,0.04)',fontSize:'13px'}}>
                        <div className={styles.bold}>{s.name}</div>
                        <div><span className={styles.price}>{s.price}</span> <span className={styles.muted}>· {s.duration}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {tab==='Appointments'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Appointments<button className={styles.addBtn}>+ Book Appointment</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Client</th><th>Barber</th><th>Service</th><th>Time</th><th>Total</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{appointments.map(a=>(
                  <tr key={a.id}>
                    <td className={styles.muted}>{a.id}</td>
                    <td><div className={styles.bold}>{a.client}</div></td>
                    <td className={styles.muted}>{a.barber}</td>
                    <td><span className={styles.catChip}>{a.service}</span></td>
                    <td className={styles.muted}>{a.time}</td>
                    <td className={styles.price}>{a.total}</td>
                    <td><span className={`${styles.tag} ${styles[a.status]}`}>{a.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Services'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Service Menu<button className={styles.addBtn}>+ Add Service</button></div>
              <table className={styles.table}>
                <thead><tr><th>Service</th><th>Duration</th><th>Price</th><th>Popular</th><th>Actions</th></tr></thead>
                <tbody>{services.map(s=>(
                  <tr key={s.name}>
                    <td><div className={styles.bold}>{s.name}</div></td>
                    <td className={styles.muted}>{s.duration}</td>
                    <td className={styles.price}>{s.price}</td>
                    <td><span className={`${styles.tag} ${s.popular?styles.confirmed:styles.pending}`}>{s.popular?'Yes':'No'}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Barbers'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Barber Team<button className={styles.addBtn}>+ Add Barber</button></div>
              <table className={styles.table}>
                <thead><tr><th>Barber</th><th>Specialty</th><th>Experience</th><th>Today's Appts</th><th>Rating</th><th>Actions</th></tr></thead>
                <tbody>{barbers.map(b=>(
                  <tr key={b.name}>
                    <td><div className={styles.bold}>{b.name}</div></td>
                    <td><span className={styles.catChip}>{b.specialty}</span></td>
                    <td className={styles.muted}>{b.exp}</td>
                    <td className={styles.bold}>{b.today}</td>
                    <td className={styles.muted}>⭐ {b.rating}</td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Schedule</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Clients'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Client List</div>
              <table className={styles.table}>
                <thead><tr><th>Client</th><th>Barber</th><th>Service</th><th>Last Visit</th><th>Total</th></tr></thead>
                <tbody>{appointments.map(a=>(
                  <tr key={a.id}>
                    <td><div className={styles.bold}>{a.client}</div></td>
                    <td className={styles.muted}>{a.barber}</td>
                    <td><span className={styles.catChip}>{a.service}</span></td>
                    <td className={styles.muted}>Today</td>
                    <td className={styles.price}>{a.total}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Inbound Leads'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Inbound Leads
                <div className={styles.filterRow}>
                  {['all','new','contacted','qualified','booked','lost'].map(f=>(
                    <button key={f} className={`${styles.filterBtn} ${leadFilter===f?styles.filterActive:''}`} onClick={()=>setLeadFilter(f)}>{f}</button>
                  ))}
                </div>
              </div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Source</th><th>Interest</th><th>Date</th><th>Status</th><th>Update</th></tr></thead>
                <tbody>{filteredLeads.map(l=>(
                  <tr key={l.id}>
                    <td><div className={styles.bold}>{l.name}</div></td>
                    <td className={styles.muted}>{l.source}</td>
                    <td><span className={styles.catChip}>{l.interest}</span></td>
                    <td className={styles.muted}>{l.date}</td>
                    <td><span className={`${styles.tag} ${styles['ld'+l.status]}`}>{l.status}</span></td>
                    <td><select className={styles.statusSelect} value={l.status} onChange={e=>updateLead(l.id,e.target.value)}>{['new','contacted','qualified','booked','lost'].map(s=><option key={s} value={s}>{s}</option>)}</select></td>
                  </tr>
                ))}</tbody>
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
                  <a href="/demos/barbershop" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection==='services'&&(
                  <div className={styles.ecServices}>
                    <div className={styles.ecSectionLabel}>SERVICES & PRICES</div>
                    <div className={styles.ecServiceGrid}>
                      {['s1','s2','s3','s4','s5','s6'].map(k=>(
                        <div key={k} className={styles.ecServiceCard}>
                          <input className={`${styles.inlineInput} ${styles.ecServiceName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
                          <input className={`${styles.inlineInput} ${styles.ecServicePrice}`} value={content[k.replace('s','sp')]} onChange={e=>set(k.replace('s','sp'),e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>SHOP INFO</div>
                    <div className={styles.ecContactGrid}>
                      {[['phone','📞 Phone',content.phone],['email','✉️ Email',content.email],['address','📍 Address',content.address],['hours','🕐 Hours',content.hours]].map(([k,label,val])=>(
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
