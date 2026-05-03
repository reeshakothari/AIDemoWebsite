'use client'
import { useState } from 'react'
import styles from './page.module.css'

const classes = [
  { time:'6:00 AM', name:'HIIT Blast', trainer:'Marcus', capacity:20, enrolled:20, room:'Studio A', status:'full', level:'All' },
  { time:'7:30 AM', name:'Yoga Flow', trainer:'Priya', capacity:15, enrolled:12, room:'Studio B', status:'open', level:'Beginner' },
  { time:'9:00 AM', name:'Spin Cycle', trainer:'Jake', capacity:25, enrolled:23, room:'Spin Room', status:'open', level:'All' },
  { time:'10:30 AM', name:'Strength & Conditioning', trainer:'Marcus', capacity:18, enrolled:18, room:'Weights', status:'full', level:'Intermediate' },
  { time:'12:00 PM', name:'Boxing Fundamentals', trainer:'Dani', capacity:12, enrolled:9, room:'Boxing Ring', status:'open', level:'Beginner' },
  { time:'5:30 PM', name:'CrossFit', trainer:'Jake', capacity:20, enrolled:20, room:'Studio A', status:'full', level:'Advanced' },
  { time:'6:30 PM', name:'Pilates Core', trainer:'Priya', capacity:15, enrolled:14, room:'Studio B', status:'open', level:'All' },
  { time:'7:30 PM', name:'Night HIIT', trainer:'Marcus', capacity:20, enrolled:17, room:'Studio A', status:'open', level:'Intermediate' },
]

const members = [
  { name:'Jordan Hayes', email:'jordan@email.com', plan:'Elite Monthly', joined:'20 Apr 2025', checkins:4, expires:'20 May 2025', status:'active' },
  { name:'Sonia Mehta', email:'sonia@email.com', plan:'Annual Pro', joined:'18 Jan 2025', checkins:52, expires:'18 Jan 2026', status:'active' },
  { name:'Chris Dale', email:'chris@email.com', plan:'Basic Monthly', joined:'15 Mar 2025', checkins:18, expires:'15 May 2025', status:'active' },
  { name:'Anita Osei', email:'anita@email.com', plan:'Elite Monthly', joined:'01 Mar 2025', checkins:31, expires:'01 May 2025', status:'expiring' },
  { name:'Tom Garfield', email:'tom@email.com', plan:'Day Pass', joined:'23 Apr 2025', checkins:1, expires:'23 Apr 2025', status:'active' },
  { name:'Kezia Adu', email:'kezia@email.com', plan:'Annual Pro', joined:'10 Feb 2025', checkins:44, expires:'10 Feb 2026', status:'active' },
]

const trainers = [
  { name:'Marcus Reid', specialty:'HIIT · Strength', classes:3, members:87, rating:4.9, available:true, cert:'CSCS, ACE' },
  { name:'Priya Kapoor', specialty:'Yoga · Pilates', classes:2, members:64, rating:5.0, available:true, cert:'RYT 500, PMA' },
  { name:'Jake Torres', specialty:'CrossFit · Spin', classes:2, members:72, rating:4.8, available:true, cert:'CF-L2, SFG' },
  { name:'Dani Okafor', specialty:'Boxing · Cardio', classes:1, members:51, rating:4.7, available:false, cert:'AIBA, ACE' },
]

const equipment = [
  { name:'Treadmills (x12)', zone:'Cardio Floor', status:'operational', lastService:'01 Apr 2025', next:'01 Jul 2025' },
  { name:'Rowing Machines (x8)', zone:'Cardio Floor', status:'operational', lastService:'15 Mar 2025', next:'15 Jun 2025' },
  { name:'Cable Machines (x6)', zone:'Weights Floor', status:'maintenance', lastService:'20 Apr 2025', next:'N/A' },
  { name:'Power Racks (x8)', zone:'Weights Floor', status:'operational', lastService:'01 Apr 2025', next:'01 Jul 2025' },
  { name:'Spin Bikes (x25)', zone:'Spin Room', status:'operational', lastService:'10 Apr 2025', next:'10 Jul 2025' },
  { name:'Boxing Bags (x6)', zone:'Boxing Ring', status:'operational', lastService:'28 Mar 2025', next:'28 Jun 2025' },
]

const leadsData = [
  { id:1, name:'Jamie Steele', email:'jamie@email.com', phone:'+1 555 300 001', interest:'Elite Monthly', date:'23 Apr 2025', source:'Google', status:'new', note:'Wants to start immediately, asked about PT' },
  { id:2, name:'Lena Fischer', email:'lena@email.com', phone:'+1 555 300 002', interest:'Annual Pro', date:'23 Apr 2025', source:'Instagram', status:'new', note:'Interested in discounted annual' },
  { id:3, name:'Dev Kapoor', email:'dev@email.com', phone:'+1 555 300 003', interest:'Free Trial', date:'22 Apr 2025', source:'Website', status:'contacted', note:'Trial booked for Saturday' },
  { id:4, name:'Zara Ahmed', email:'zara@email.com', phone:'+1 555 300 004', interest:'Corporate Package', date:'21 Apr 2025', source:'Referral', status:'qualified', note:'Company of 20 employees, bulk discount requested' },
  { id:5, name:'Oliver Black', email:'oliver@email.com', phone:'+1 555 300 005', interest:'Basic Monthly', date:'20 Apr 2025', source:'Website', status:'booked', note:'Signed up online, needs induction' },
  { id:6, name:'Mia Torres', email:'mia@email.com', phone:'+1 555 300 006', interest:'Personal Training', date:'19 Apr 2025', source:'Google', status:'contacted', note:'1:1 sessions, 3x per week' },
]

const initialContent = {
  badge:'💪 Join 500+ Members Achieving Results',
  heroHeadline:'Forge Your\nLimits.',
  heroSub:'PowerForge is the gym for people who are serious about results. No fluff. Just relentless work.',
  cta1:'Start Free Trial',
  cta2:'View Memberships',
  phone:'+1 (555) 100-LIFT',
  email:'join@powerforge.gym',
  address:'88 Industrial Ave, Downtown',
  hours:'Mon–Fri: 5am – 11pm · Sat–Sun: 6am – 10pm',
  footerTagline:'© 2024 PowerForge Gym · Training Harder, Together.',
  pricing:[
    { name:'Basic', price:'$29/mo', perks:'Gym floor · Locker rooms' },
    { name:'Elite', price:'$59/mo', perks:'All classes · PT discount · Guest pass' },
    { name:'Annual Pro', price:'$499/yr', perks:'Full access · 2 PT sessions/mo · Merchandise' },
  ],
}

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, badge, CTAs' },
  { id:'pricing', label:'Membership Pricing', preview:'3 plan cards' },
  { id:'classes', label:'Class Schedule', preview:'Featured classes' },
  { id:'contact', label:'Contact & Hours', preview:'Location, hours' },
]

export default function FitnessAdminDashboard() {
  const [tab, setTab] = useState('dashboard')
  const [editSection, setEditSection] = useState('hero')
  const [content, setContent] = useState(initialContent)
  const [leads, setLeads] = useState(leadsData)
  const [leadFilter, setLeadFilter] = useState('all')
  const [saved, setSaved] = useState(false)

  function handleSave() { setSaved(true); setTimeout(()=>setSaved(false),2500) }
  function updateLead(id, status) { setLeads(leads.map(l=>l.id===id?{...l,status}:l)) }
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  const nav = [
    { id:'dashboard', icon:'⬡', label:'Dashboard' },
    { id:'classes', icon:'🏋️', label:'Class Schedule' },
    { id:'members', icon:'👤', label:'Members' },
    { id:'trainers', icon:'🥊', label:'Trainers' },
    { id:'equipment', icon:'⚙️', label:'Equipment' },
    { id:'leads', icon:'📬', label:'Inbound Leads', badge: leads.filter(l=>l.status==='new').length },
    { id:'edit', icon:'✏️', label:'Edit Website' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}><div className={styles.brandName}>POWERFORGE</div><div className={styles.brandSub}>Admin Panel</div></div>
        <nav className={styles.sideNav}>
          {nav.map(n=>(
            <button key={n.id} className={`${styles.navItem} ${tab===n.id?styles.navActive:''}`} onClick={()=>setTab(n.id)}>
              <span className={styles.navIcon}>{n.icon}</span><span>{n.label}</span>
              {n.badge>0&&<span className={styles.navBadge}>{n.badge}</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/fitness-gym" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div><h1 className={styles.pageTitle}>{nav.find(n=>n.id===tab)?.label}</h1><p className={styles.pageDate}>Wednesday, 23 April 2025</p></div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>{leads.filter(l=>l.status==='new').length}</span></div>
            <div className={styles.avatar}>PF</div>
          </div>
        </header>

        <div className={styles.content}>
          {tab==='dashboard'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Active Members',val:'342',sub:'↑ 18 this month',color:'#FFE500'},
                {label:'Classes Today',val:'8',sub:'4 full · 4 open',color:'#f97316'},
                {label:'Check-ins Today',val:'127',sub:'As of 2pm',color:'#34d399'},
                {label:'Monthly Revenue',val:'$28,900',sub:'↑ 9% vs last month',color:'#a78bfa'},
              ].map(s=>(
                <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                  <div className={styles.statVal}>{s.val}</div><div className={styles.statLabel}>{s.label}</div><div className={styles.statSub}>{s.sub}</div>
                </div>
              ))}
            </div>
            <div className={styles.twoCol}>
              <div className={styles.panel}>
                <div className={styles.panelHead}><span>Today's Classes</span><span className={styles.chip}>8 classes</span></div>
                <table className={styles.table}>
                  <thead><tr><th>Time</th><th>Class</th><th>Trainer</th><th>Room</th><th>Level</th><th>Spots</th><th>Status</th></tr></thead>
                  <tbody>{classes.map(c=>(
                    <tr key={c.time+c.name}>
                      <td className={styles.muted}>{c.time}</td><td className={styles.bold}>{c.name}</td><td>{c.trainer}</td><td>{c.room}</td>
                      <td><span className={styles.catChip}>{c.level}</span></td>
                      <td className={styles.price}>{c.enrolled}/{c.capacity}</td>
                      <td><span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span></td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
              <div className={styles.stackCol}>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Trainers On Duty</div>
                  {trainers.map(t=>(
                    <div key={t.name} className={styles.trainerRow}>
                      <div className={styles.trainerAvatar}>{t.name.split(' ').map(n=>n[0]).join('')}</div>
                      <div className={styles.trainerInfo}><div className={styles.bold}>{t.name}</div><div className={styles.muted}>{t.specialty}</div></div>
                      <div className={styles.trainerRight}><span className={styles.price}>{t.rating}★</span><div className={styles.muted}>{t.classes} cls</div></div>
                    </div>
                  ))}
                </div>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Membership Mix</div>
                  {[['Elite Monthly','148','43%','#FFE500'],['Annual Pro','112','33%','#f97316'],['Basic','82','24%','#34d399']].map(([n,v,p,c])=>(
                    <div key={n} className={styles.barRow}><span className={styles.barLabel}>{n}</span><div className={styles.barTrack}><div className={styles.barFill} style={{width:p,background:c}}/></div><span>{v}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </>)}

          {tab==='classes'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Full Schedule — Today</span><button className={styles.addBtn}>+ Add Class</button></div>
              <table className={styles.table}>
                <thead><tr><th>Time</th><th>Class</th><th>Trainer</th><th>Room</th><th>Level</th><th>Capacity</th><th>Enrolled</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{classes.map(c=>(
                  <tr key={c.time+c.name}>
                    <td className={styles.muted}>{c.time}</td><td className={styles.bold}>{c.name}</td><td>{c.trainer}</td><td>{c.room}</td>
                    <td><span className={styles.catChip}>{c.level}</span></td><td>{c.capacity}</td>
                    <td className={styles.price}>{c.enrolled}</td>
                    <td><span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span></td>
                    <td className={styles.actions}><button className={styles.rowBtn}>Edit</button><button className={styles.rowBtnDanger}>Cancel</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='members'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Members</span><span className={styles.chip}>342 total</span></div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Email</th><th>Plan</th><th>Joined</th><th>Check-ins</th><th>Expires</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{members.map(m=>(
                  <tr key={m.name}>
                    <td className={styles.bold}>{m.name}</td><td className={styles.muted}>{m.email}</td>
                    <td><span className={styles.catChip}>{m.plan}</span></td>
                    <td className={styles.muted}>{m.joined}</td><td>{m.checkins}</td><td className={styles.muted}>{m.expires}</td>
                    <td><span className={`${styles.tag} ${m.status==='expiring'?styles.pending:styles.confirmed}`}>{m.status}</span></td>
                    <td className={styles.actions}><button className={styles.rowBtn}>View</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='trainers'&&(
            <div className={styles.trainersGrid}>
              {trainers.map(t=>(
                <div key={t.name} className={styles.trainerCard}>
                  <div className={styles.tcAvatar}>{t.name.split(' ').map(n=>n[0]).join('')}</div>
                  <div className={styles.tcName}>{t.name}</div><div className={styles.tcSpec}>{t.specialty}</div>
                  <div className={styles.tcCert}>{t.cert}</div>
                  <div className={styles.tcStats}>
                    <div className={styles.tcStat}><strong>{t.classes}</strong><span>Classes Today</span></div>
                    <div className={styles.tcStat}><strong>{t.rating}★</strong><span>Rating</span></div>
                    <div className={styles.tcStat}><strong>{t.members}</strong><span>Members</span></div>
                  </div>
                  <div className={styles.tcStatus}><span className={`${styles.tag} ${t.available?styles.confirmed:styles.pending}`}>{t.available?'Available':'In Session'}</span></div>
                  <button className={styles.rowBtn} style={{width:'100%',padding:'9px',marginTop:8}}>Edit Profile</button>
                </div>
              ))}
            </div>
          )}

          {tab==='equipment'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Equipment Tracker</span><span className={styles.chip}>1 in maintenance</span></div>
              <table className={styles.table}>
                <thead><tr><th>Equipment</th><th>Zone</th><th>Status</th><th>Last Serviced</th><th>Next Service</th><th>Actions</th></tr></thead>
                <tbody>{equipment.map(e=>(
                  <tr key={e.name}>
                    <td className={styles.bold}>{e.name}</td><td>{e.zone}</td>
                    <td><span className={`${styles.tag} ${e.status==='maintenance'?styles.pending:styles.confirmed}`}>{e.status}</span></td>
                    <td className={styles.muted}>{e.lastService}</td><td className={styles.muted}>{e.next}</td>
                    <td className={styles.actions}><button className={styles.rowBtn}>Log Service</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='leads'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Total Leads',val:leads.length,color:'#FFE500'},
                {label:'New',val:leads.filter(l=>l.status==='new').length,color:'#f97316'},
                {label:'Trial Booked',val:leads.filter(l=>l.status==='booked').length,color:'#34d399'},
                {label:'Conversion',val:'48%',color:'#a78bfa'},
              ].map(s=>(
                <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                  <div className={styles.statVal}>{s.val}</div><div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <span>Inbound Leads</span>
                <div className={styles.filterRow}>
                  {['all','new','contacted','qualified','booked'].map(f=>(
                    <button key={f} className={`${styles.filterBtn} ${leadFilter===f?styles.filterActive:''}`} onClick={()=>setLeadFilter(f)}>{f}</button>
                  ))}
                </div>
              </div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Interest</th><th>Source</th><th>Date</th><th>Note</th><th>Status</th><th>Update</th></tr></thead>
                <tbody>{filteredLeads.map(l=>(
                  <tr key={l.id}><td className={styles.bold}>{l.name}</td><td className={styles.muted}>{l.email}</td><td className={styles.muted}>{l.phone}</td>
                    <td><span className={styles.catChip}>{l.interest}</span></td>
                    <td className={styles.muted}>{l.source}</td><td className={styles.muted}>{l.date}</td>
                    <td className={styles.muted} style={{maxWidth:180,fontSize:11}}>{l.note}</td>
                    <td><span className={`${styles.tag} ${styles['ld'+l.status]}`}>{l.status}</span></td>
                    <td><select className={styles.statusSelect} value={l.status} onChange={e=>updateLead(l.id,e.target.value)}>
                      <option value="new">New</option><option value="contacted">Contacted</option><option value="qualified">Qualified</option><option value="booked">Booked</option><option value="lost">Lost</option>
                    </select></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </>)}

          {tab==='edit'&&(
            <div className={styles.editShell}>
              <div className={styles.editNav}>
                <div className={styles.editNavTitle}>Page Sections</div>
                {editSections.map(s=>(
                  <button key={s.id} className={`${styles.editNavItem} ${editSection===s.id?styles.editNavActive:''}`} onClick={()=>setEditSection(s.id)}>
                    <span className={styles.editNavLabel}>{s.label}</span>
                    <span className={styles.editNavSub}>{s.preview}</span>
                  </button>
                ))}
                <div className={styles.editSaveArea}>
                  <button className={styles.saveBtn} onClick={handleSave}>{saved?'✓ Saved!':'Save Changes'}</button>
                  <a href="/demos/fitness-gym" target="_blank" className={styles.previewLink}>Preview site →</a>
                </div>
              </div>
              <div className={styles.editCanvas}>
                {editSection==='hero'&&(
                  <div className={styles.ecHero}>
                    <div className={styles.ecBadge}><input className={styles.inlineInput} value={content.badge} onChange={e=>setContent({...content,badge:e.target.value})} /></div>
                    <h1 className={styles.ecH1}><textarea className={`${styles.inlineInput} ${styles.inlineH1}`} value={content.heroHeadline} rows={2} onChange={e=>setContent({...content,heroHeadline:e.target.value})} /></h1>
                    <p className={styles.ecP}><textarea className={`${styles.inlineInput} ${styles.inlineP}`} value={content.heroSub} rows={2} onChange={e=>setContent({...content,heroSub:e.target.value})} /></p>
                    <div className={styles.ecBtns}>
                      <div className={styles.ecBtn1}><input className={styles.inlineInput} value={content.cta1} onChange={e=>setContent({...content,cta1:e.target.value})} /></div>
                      <div className={styles.ecBtn2}><input className={styles.inlineInput} value={content.cta2} onChange={e=>setContent({...content,cta2:e.target.value})} /></div>
                    </div>
                  </div>
                )}
                {editSection==='pricing'&&(
                  <div className={styles.ecPricing}>
                    <div className={styles.ecSectionLabel}>Membership Plans</div>
                    <div className={styles.ecPricingGrid}>
                      {content.pricing.map((p,i)=>(
                        <div key={i} className={styles.ecPricingCard}>
                          <input className={`${styles.inlineInput} ${styles.ecPlanName}`} value={p.name} onChange={e=>{const pr=[...content.pricing];pr[i]={...p,name:e.target.value};setContent({...content,pricing:pr})}} />
                          <input className={`${styles.inlineInput} ${styles.ecPlanPrice}`} value={p.price} onChange={e=>{const pr=[...content.pricing];pr[i]={...p,price:e.target.value};setContent({...content,pricing:pr})}} />
                          <textarea className={`${styles.inlineInput} ${styles.ecPlanPerks}`} value={p.perks} rows={2} onChange={e=>{const pr=[...content.pricing];pr[i]={...p,perks:e.target.value};setContent({...content,pricing:pr})}} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='classes'&&(
                  <div className={styles.ecClasses}>
                    <div className={styles.ecSectionLabel}>Featured Classes — shown on website</div>
                    {classes.slice(0,4).map((c,i)=>(
                      <div key={i} className={styles.ecClassRow}>
                        <div className={styles.ecClassIcon}>🏋️</div>
                        <input className={`${styles.inlineInput} ${styles.ecClassName}`} defaultValue={c.name} />
                        <input className={`${styles.inlineInput} ${styles.ecClassTime}`} defaultValue={c.time} />
                        <span className={styles.ecClassTrainer}>{c.trainer}</span>
                      </div>
                    ))}
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>Contact & Hours</div>
                    <div className={styles.ecContactGrid}>
                      {[['Phone',content.phone,'phone'],['Email',content.email,'email'],['Address',content.address,'address'],['Opening Hours',content.hours,'hours']].map(([label,val,key])=>(
                        <div key={key} className={styles.ecContactBlock}>
                          <div className={styles.ecFieldLabel}>{label}</div>
                          <textarea className={`${styles.inlineInput} ${styles.ecContactInput}`} value={val} rows={2} onChange={e=>setContent({...content,[key]:e.target.value})} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
