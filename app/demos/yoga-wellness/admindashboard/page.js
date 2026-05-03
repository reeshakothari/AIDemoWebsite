'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Classes','Members','Instructors','Wellness Plans','Inbound Leads','Edit Website']

const classes = [
  { name:'Vinyasa Flow', instructor:'Maya Sundar', time:'Mon/Wed/Fri 7am', capacity:18, booked:16, level:'All Levels', status:'active' },
  { name:'Yin & Restore', instructor:'Leila Patel', time:'Tue/Thu 7pm', capacity:14, booked:14, level:'Beginner', status:'active' },
  { name:'Hot Yoga (Bikram)', instructor:'Maya Sundar', time:'Sat 9am', capacity:20, booked:11, level:'Intermediate', status:'active' },
  { name:'Breathwork & Meditation', instructor:'Raj Devi', time:'Sun 8am', capacity:16, booked:8, level:'All Levels', status:'active' },
  { name:'Advanced Ashtanga', instructor:'Leila Patel', time:'Fri 6pm', capacity:10, booked:4, level:'Advanced', status:'active' },
]

const members = [
  { name:'Sophie Nash', plan:'Unlimited', sessions:18, joined:'Jan 2026', status:'active' },
  { name:'Tom Clarke', plan:'8 Classes/Month', sessions:6, joined:'Mar 2026', status:'active' },
  { name:'Priya Mehta', plan:'Unlimited', sessions:22, joined:'Dec 2025', status:'active' },
  { name:'Jack Frost', plan:'Drop-in', sessions:3, joined:'Apr 2026', status:'pending' },
  { name:'Amara Diallo', plan:'Unlimited', sessions:15, joined:'Feb 2026', status:'active' },
]

const instructors = [
  { name:'Maya Sundar', specialty:'Vinyasa, Hot Yoga', cert:'RYT-500', classes:4, rating:'5.0' },
  { name:'Leila Patel', specialty:'Yin, Ashtanga', cert:'RYT-200', classes:3, rating:'4.9' },
  { name:'Raj Devi', specialty:'Breathwork, Meditation', cert:'E-RYT-500', classes:2, rating:'5.0' },
]

const initLeads = [
  { id:1, name:'Claire Dubois', source:'Instagram', interest:'Vinyasa Flow', date:'22 Apr', status:'new' },
  { id:2, name:'Sam Rivers', source:'Google Ad', interest:'Unlimited Membership', date:'21 Apr', status:'contacted' },
  { id:3, name:'Nina Osei', source:'Website', interest:'Beginner Yoga', date:'20 Apr', status:'qualified' },
  { id:4, name:'Kavya Sharma', source:'Referral', interest:'Private Sessions', date:'19 Apr', status:'booked' },
  { id:5, name:'Leo Park', source:'Facebook', interest:'Meditation Class', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'classes', label:'Class Offerings', preview:'Class cards' },
  { id:'contact', label:'Contact & Studio', preview:'Address, phone, hours' },
]

export default function YogaAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'🌿 Find Your Balance',
    heroHeadline:'Move. Breathe. Belong.',
    heroSub:'A welcoming yoga studio for every body and every level. From energising flows to deep restoration — discover your practice.',
    cta1:'Book a Class', cta2:'View Memberships',
    cl1:'Vinyasa Flow', cl2:'Yin & Restore', cl3:'Hot Yoga', cl4:'Breathwork', cl5:'Ashtanga', cl6:'Sound Bath',
    phone:'+1 (555) 328-YOGA', email:'hello@zenstudioco.com', address:'22 Serenity Lane, Studio A', hours:'Mon–Sun 6am–9pm',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Zen Studio Co.</div>
          <div className={styles.brandSub}>ADMIN PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','🧘','👥','🌿','💚','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/yoga-wellness" className={styles.viewSite}>← View Live Site</a></div>
      </aside>
      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Zen Studio · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>2</span></div>
            <div className={styles.avatar}>ZS</div>
          </div>
        </div>
        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Active Members',val:'124',sub:'+14 this month',color:'#3d7a3a'},
                  {label:'Classes This Week',val:'18',sub:'5 instructors',color:'#84cc16'},
                  {label:'Avg Attendance',val:'78%',sub:'↑ 6% vs last',color:'#10b981'},
                  {label:'Revenue (Apr)',val:'$14.8K',sub:'+9% vs Mar',color:'#f59e0b'},
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
                  <div className={styles.panelHead}>Class Schedule<span className={styles.chip}>5 classes</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Class</th><th>Instructor</th><th>Time</th><th>Booked</th><th>Level</th></tr></thead>
                  <tbody>{classes.map(c=>(
                    <tr key={c.name}>
                      <td><div className={styles.bold}>{c.name}</div></td>
                      <td className={styles.muted}>{c.instructor}</td>
                      <td className={styles.muted}>{c.time}</td>
                      <td><span className={`${styles.tag} ${c.booked>=c.capacity?styles.cancelled:styles.confirmed}`}>{c.booked}/{c.capacity}</span></td>
                      <td><span className={styles.catChip}>{c.level}</span></td>
                    </tr>
                  ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Instructors</div>
                    {instructors.map(i=>(
                      <div key={i.name} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid #f5f3ef',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{i.name}</div><div className={styles.muted}>{i.specialty}</div></div>
                        <div style={{textAlign:'right'}}><div className={styles.price}>⭐ {i.rating}</div><div className={styles.muted}>{i.cert}</div></div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Members</div>
                    {members.slice(0,4).map(m=>(
                      <div key={m.name} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #f5f3ef',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{m.name}</div><div className={styles.muted}>{m.plan}</div></div>
                        <div className={styles.price}>{m.sessions} sessions</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {tab==='Classes'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Class Schedule<button className={styles.addBtn}>+ Add Class</button></div>
              <table className={styles.table}>
                <thead><tr><th>Class</th><th>Instructor</th><th>Schedule</th><th>Capacity</th><th>Booked</th><th>Level</th><th>Status</th></tr></thead>
                <tbody>{classes.map(c=>(
                  <tr key={c.name}>
                    <td><div className={styles.bold}>{c.name}</div></td>
                    <td className={styles.muted}>{c.instructor}</td>
                    <td className={styles.muted}>{c.time}</td>
                    <td className={styles.bold}>{c.capacity}</td>
                    <td><span className={`${styles.tag} ${c.booked>=c.capacity?styles.cancelled:styles.confirmed}`}>{c.booked}</span></td>
                    <td><span className={styles.catChip}>{c.level}</span></td>
                    <td><span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Members'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Member List<button className={styles.addBtn}>+ Add Member</button></div>
              <table className={styles.table}>
                <thead><tr><th>Member</th><th>Membership</th><th>Sessions</th><th>Joined</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{members.map(m=>(
                  <tr key={m.name}>
                    <td><div className={styles.bold}>{m.name}</div></td>
                    <td><span className={styles.catChip}>{m.plan}</span></td>
                    <td className={styles.bold}>{m.sessions}</td>
                    <td className={styles.muted}>{m.joined}</td>
                    <td><span className={`${styles.tag} ${styles[m.status]}`}>{m.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Profile</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Instructors'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Instructor Team<button className={styles.addBtn}>+ Add Instructor</button></div>
              <table className={styles.table}>
                <thead><tr><th>Instructor</th><th>Specialty</th><th>Certification</th><th>Classes</th><th>Rating</th><th>Actions</th></tr></thead>
                <tbody>{instructors.map(i=>(
                  <tr key={i.name}>
                    <td><div className={styles.bold}>{i.name}</div></td>
                    <td><span className={styles.catChip}>{i.specialty}</span></td>
                    <td className={styles.muted}>{i.cert}</td>
                    <td className={styles.bold}>{i.classes}</td>
                    <td className={styles.muted}>⭐ {i.rating}</td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Profile</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Wellness Plans'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Membership Plans<button className={styles.addBtn}>+ Add Plan</button></div>
              {[
                {name:'Drop-In Class',price:'$22/class',perks:'Single session, any class'},
                {name:'8 Classes/Month',price:'$140/mo',perks:'8 sessions, roll over 2'},
                {name:'Unlimited',price:'$198/mo',perks:'Unlimited classes + workshops'},
                {name:'Annual Unlimited',price:'$1,800/yr',perks:'Best value, 15% saving'},
              ].map(p=>(
                <div key={p.name} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 0',borderBottom:'1px solid #f5f3ef'}}>
                  <div><div className={styles.bold}>{p.name}</div><div className={styles.muted}>{p.perks}</div></div>
                  <div className={styles.price}>{p.price}</div>
                </div>
              ))}
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
                  <a href="/demos/yoga-wellness" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection==='classes'&&(
                  <div className={styles.ecClasses}>
                    <div className={styles.ecSectionLabel}>CLASS OFFERINGS</div>
                    <div className={styles.ecClassGrid}>
                      {['cl1','cl2','cl3','cl4','cl5','cl6'].map((k,i)=>(
                        <div key={k} className={styles.ecClassCard}>
                          <div style={{fontSize:24,marginBottom:8}}>{'🧘🌙🔥🌬️🕉️🎵'[i]}</div>
                          <input className={`${styles.inlineInput} ${styles.ecClassName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>STUDIO & CONTACT</div>
                    <div className={styles.ecContactGrid}>
                      {[['phone','📞 Phone',content.phone],['email','✉️ Email',content.email],['address','📍 Studio',content.address],['hours','🕐 Hours',content.hours]].map(([k,label,val])=>(
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
