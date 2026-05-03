'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Courses','Students','Instructors','Enrolments','Inbound Leads','Edit Website']

const courses = [
  { id:'CRS-01', name:'Full-Stack Web Development', instructor:'Dr. Maya Patel', category:'Tech', students:184, duration:'12 weeks', price:'$1,200', status:'active' },
  { id:'CRS-02', name:'Data Science & ML Fundamentals', instructor:'Prof. James Lin', category:'Tech', students:142, duration:'10 weeks', price:'$980', status:'active' },
  { id:'CRS-03', name:'UX/UI Design Bootcamp', instructor:'Sarah Osei', category:'Design', students:98, duration:'8 weeks', price:'$750', status:'active' },
  { id:'CRS-04', name:'Business Analytics', instructor:'Dr. Maya Patel', category:'Business', students:64, duration:'6 weeks', price:'$540', status:'active' },
  { id:'CRS-05', name:'Python for Beginners', instructor:'Prof. James Lin', category:'Tech', students:210, duration:'4 weeks', price:'$299', status:'draft' },
]

const students = [
  { name:'Alex Torres', email:'alex@mail.com', courses:2, enrolled:'Jan 2026', progress:78, status:'active' },
  { name:'Priya Mehta', email:'priya@mail.com', courses:1, enrolled:'Feb 2026', progress:45, status:'active' },
  { name:'Jamie Reid', email:'jamie@mail.com', courses:3, enrolled:'Dec 2025', progress:92, status:'active' },
  { name:'Yuki Tanaka', email:'yuki@mail.com', courses:1, enrolled:'Mar 2026', progress:20, status:'pending' },
  { name:'Fatima Al-Hassan', email:'fatima@mail.com', courses:2, enrolled:'Apr 2026', progress:8, status:'active' },
]

const instructors = [
  { name:'Dr. Maya Patel', specialty:'Full-Stack & Analytics', courses:2, students:248, rating:'4.9' },
  { name:'Prof. James Lin', specialty:'Data Science & Python', courses:2, students:352, rating:'4.8' },
  { name:'Sarah Osei', specialty:'UX/UI Design', courses:1, students:98, rating:'5.0' },
]

const initLeads = [
  { id:1, name:'Carlos Rivera', source:'Google Ad', interest:'Full-Stack Course', date:'22 Apr', status:'new' },
  { id:2, name:'Nina Wolfe', source:'Website', interest:'Data Science', date:'21 Apr', status:'contacted' },
  { id:3, name:'James Park', source:'Referral', interest:'UX Design', date:'20 Apr', status:'qualified' },
  { id:4, name:'Amira Osei', source:'LinkedIn', interest:'Business Analytics', date:'19 Apr', status:'booked' },
  { id:5, name:'Tom Brett', source:'Instagram', interest:'Python Basics', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'courses', label:'Featured Courses', preview:'Course card highlights' },
  { id:'contact', label:'Contact Info', preview:'Address, phone, hours' },
]

export default function EducationAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'🎓 10,000+ Graduates Worldwide',
    heroHeadline:'Learn Skills That Actually Get You Hired.',
    heroSub:'Practical, industry-led courses taught by working professionals. Start part-time, upskill fast, and land your next role.',
    cta1:'Browse Courses', cta2:'Free Trial Class',
    c1:'Full-Stack Development', c2:'Data Science & ML', c3:'UX/UI Design', c4:'Business Analytics', c5:'Python Fundamentals', c6:'Product Management',
    phone:'+1 (555) 411-LEARN', email:'hello@nexusacademy.io', address:'99 Innovation Park, Floor 3', hours:'Mon–Fri 9am–8pm',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>Nexus</span>Academy</div>
          <div className={styles.brandSub}>ADMIN PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','📚','👥','🎓','📋','📩','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/education" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>NexusAcademy · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>3</span></div>
            <div className={styles.avatar}>NA</div>
          </div>
        </div>
        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Active Courses',val:'5',sub:'1 in draft',color:'#2563eb'},
                  {label:'Total Students',val:'698',sub:'+84 this month',color:'#10b981'},
                  {label:'Avg Completion Rate',val:'74%',sub:'↑ 6% vs last',color:'#6366f1'},
                  {label:'Revenue (Apr)',val:'$68.4K',sub:'+18% vs Mar',color:'#f59e0b'},
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
                  <div className={styles.panelHead}>Courses Overview<span className={styles.chip}>5 active</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Course</th><th>Instructor</th><th>Students</th><th>Price</th><th>Status</th></tr></thead>
                    <tbody>{courses.map(c=>(
                      <tr key={c.id}>
                        <td><div className={styles.bold}>{c.name}</div><div className={styles.muted}>{c.duration}</div></td>
                        <td className={styles.muted}>{c.instructor}</td>
                        <td className={styles.bold}>{c.students}</td>
                        <td className={styles.price}>{c.price}</td>
                        <td><span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span></td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Instructors</div>
                    {instructors.map(i=>(
                      <div key={i.name} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid #f0f4ff',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{i.name}</div><div className={styles.muted}>{i.specialty}</div></div>
                        <div style={{textAlign:'right'}}><div className={styles.price}>⭐ {i.rating}</div><div className={styles.muted}>{i.students} students</div></div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Recent Students</div>
                    {students.slice(0,4).map(s=>(
                      <div key={s.name} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #f0f4ff',fontSize:'13px'}}>
                        <div className={styles.bold}>{s.name}</div>
                        <div style={{display:'flex',alignItems:'center',gap:8}}>
                          <div className={styles.barTrack} style={{width:60}}><div className={styles.barFill} style={{width:`${s.progress}%`}}/></div>
                          <span className={styles.muted}>{s.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {tab==='Courses'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Course Catalogue<button className={styles.addBtn}>+ New Course</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Course</th><th>Instructor</th><th>Category</th><th>Students</th><th>Duration</th><th>Price</th><th>Status</th></tr></thead>
                <tbody>{courses.map(c=>(
                  <tr key={c.id}>
                    <td className={styles.muted}>{c.id}</td>
                    <td><div className={styles.bold}>{c.name}</div></td>
                    <td className={styles.muted}>{c.instructor}</td>
                    <td><span className={styles.catChip}>{c.category}</span></td>
                    <td className={styles.bold}>{c.students}</td>
                    <td className={styles.muted}>{c.duration}</td>
                    <td className={styles.price}>{c.price}</td>
                    <td><span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Students'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Student Records<button className={styles.addBtn}>+ Add Student</button></div>
              <table className={styles.table}>
                <thead><tr><th>Student</th><th>Email</th><th>Courses</th><th>Enrolled</th><th>Progress</th><th>Status</th></tr></thead>
                <tbody>{students.map(s=>(
                  <tr key={s.name}>
                    <td><div className={styles.bold}>{s.name}</div></td>
                    <td className={styles.muted}>{s.email}</td>
                    <td className={styles.bold}>{s.courses}</td>
                    <td className={styles.muted}>{s.enrolled}</td>
                    <td style={{width:120}}>
                      <div style={{display:'flex',alignItems:'center',gap:8}}>
                        <div className={styles.barTrack}><div className={styles.barFill} style={{width:`${s.progress}%`}}/></div>
                        <span className={styles.muted}>{s.progress}%</span>
                      </div>
                    </td>
                    <td><span className={`${styles.tag} ${styles[s.status]}`}>{s.status}</span></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Instructors'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Instructor Roster<button className={styles.addBtn}>+ Add Instructor</button></div>
              <table className={styles.table}>
                <thead><tr><th>Instructor</th><th>Specialty</th><th>Courses</th><th>Students</th><th>Rating</th><th>Actions</th></tr></thead>
                <tbody>{instructors.map(i=>(
                  <tr key={i.name}>
                    <td><div className={styles.bold}>{i.name}</div></td>
                    <td><span className={styles.catChip}>{i.specialty}</span></td>
                    <td className={styles.bold}>{i.courses}</td>
                    <td className={styles.bold}>{i.students}</td>
                    <td className={styles.muted}>⭐ {i.rating}</td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Profile</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Enrolments'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Recent Enrolments</div>
              <table className={styles.table}>
                <thead><tr><th>Student</th><th>Course</th><th>Enrolled</th><th>Progress</th><th>Status</th></tr></thead>
                <tbody>{students.map(s=>(
                  <tr key={s.name}>
                    <td><div className={styles.bold}>{s.name}</div></td>
                    <td className={styles.muted}>{courses[0].name}</td>
                    <td className={styles.muted}>{s.enrolled}</td>
                    <td style={{width:120}}>
                      <div style={{display:'flex',alignItems:'center',gap:8}}>
                        <div className={styles.barTrack}><div className={styles.barFill} style={{width:`${s.progress}%`}}/></div>
                        <span className={styles.muted}>{s.progress}%</span>
                      </div>
                    </td>
                    <td><span className={`${styles.tag} ${styles[s.status]}`}>{s.status}</span></td>
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
                  <a href="/demos/education" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection==='courses'&&(
                  <div className={styles.ecCourses}>
                    <div className={styles.ecSectionLabel}>FEATURED COURSES</div>
                    <div className={styles.ecCourseGrid}>
                      {['c1','c2','c3','c4','c5','c6'].map(k=>(
                        <div key={k} className={styles.ecCourseCard}>
                          <input className={`${styles.inlineInput} ${styles.ecCourseName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>CONTACT INFO</div>
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
