'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard', 'Students', 'Lessons', 'Instructors', 'Recitals', 'Inbound Leads', 'Edit Website']

const initLeads = [
  { id: 1, name: 'Lily Chen', source: 'Google', interest: 'Piano Lessons', date: '22 Apr', status: 'new' },
  { id: 2, name: 'Omar Hassan', source: 'Instagram', interest: 'Guitar — Adult', date: '21 Apr', status: 'contacted' },
  { id: 3, name: 'Sophie Grant', source: 'Referral', interest: 'Voice Coaching', date: '20 Apr', status: 'qualified' },
  { id: 4, name: 'Lucas Berg', source: 'Facebook', interest: 'Drums — Teen', date: '19 Apr', status: 'booked' },
  { id: 5, name: 'Nia Okafor', source: 'School', interest: 'Violin — Child', date: '18 Apr', status: 'lost' },
]

const editSections = [
  { id: 'hero', label: 'Hero Section', preview: 'Headline, tagline, CTAs' },
  { id: 'services', label: 'Our Programs', preview: '6 instrument/program cards' },
  { id: 'contact', label: 'Contact & Location', preview: 'Address, phone, hours' },
]

export default function MusicSchoolAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge: 'MUSIC SCHOOL & ACADEMY',
    heroHeadline: 'Find Your Musical Voice',
    heroSub: 'Expert-led lessons for all ages and skill levels. Piano, guitar, voice, and more.',
    cta1: 'Book Free Trial',
    cta2: 'View Programs',
    s1name: '🎹 Piano', s2name: '🎸 Guitar', s3name: '🎤 Voice',
    s4name: '🥁 Drums', s5name: '🎻 Violin', s6name: '🎺 Brass',
    s1price: 'From $60/hr', s2price: 'From $55/hr', s3price: 'From $65/hr',
    s4price: 'From $60/hr', s5price: 'From $70/hr', s6price: 'From $65/hr',
    phone: '(555) 212-3344', email: 'hello@crescendoschool.com',
    address: '22 Melody Lane, Nashville, TN 37201',
    hours: 'Mon–Fri 3pm–9pm · Sat–Sun 10am–6pm',
  })

  const set = (k, v) => setContent(p => ({ ...p, [k]: v }))
  const updateLead = (id, status) => setLeads(l => l.map(x => x.id === id ? { ...x, status } : x))
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const filteredLeads = leadFilter === 'all' ? leads : leads.filter(l => l.status === leadFilter)

  const students = [
    { name: 'Lily Chen', age: 12, instrument: 'Piano', instructor: 'Ms. Park', level: 'Intermediate', since: 'Sep 2024', status: 'active' },
    { name: 'Omar Hassan', age: 34, instrument: 'Guitar', instructor: 'Mr. Garcia', level: 'Beginner', since: 'Jan 2025', status: 'active' },
    { name: 'Sophie Grant', age: 22, instrument: 'Voice', instructor: 'Ms. Rivera', level: 'Advanced', since: 'Mar 2023', status: 'active' },
    { name: 'Lucas Berg', age: 16, instrument: 'Drums', instructor: 'Mr. Jones', level: 'Intermediate', since: 'Nov 2024', status: 'trial' },
    { name: 'Nia Okafor', age: 8, instrument: 'Violin', instructor: 'Ms. Kim', level: 'Beginner', since: 'Apr 2025', status: 'cancelled' },
  ]

  const lessons = [
    { time: '3:00 PM', student: 'Lily Chen', instrument: 'Piano', instructor: 'Ms. Park', room: 'Studio A', duration: '60 min' },
    { time: '4:00 PM', student: 'Omar Hassan', instrument: 'Guitar', instructor: 'Mr. Garcia', room: 'Studio B', duration: '60 min' },
    { time: '5:00 PM', student: 'Sophie Grant', instrument: 'Voice', instructor: 'Ms. Rivera', room: 'Studio C', duration: '45 min' },
    { time: '5:00 PM', student: 'Lucas Berg', instrument: 'Drums', instructor: 'Mr. Jones', room: 'Drum Room', duration: '60 min' },
    { time: '6:30 PM', student: 'New Student', instrument: 'Violin', instructor: 'Ms. Kim', room: 'Studio A', duration: '30 min trial' },
  ]

  const instructors = [
    { name: 'Ms. Sarah Park', instruments: 'Piano, Keyboard', students: 18, rating: 4.9, experience: '12 yrs' },
    { name: 'Mr. Diego Garcia', instruments: 'Guitar, Bass', students: 14, rating: 4.8, experience: '8 yrs' },
    { name: 'Ms. Elena Rivera', instruments: 'Voice, Choir', students: 12, rating: 4.9, experience: '15 yrs' },
    { name: 'Mr. James Jones', instruments: 'Drums, Percussion', students: 10, rating: 4.7, experience: '10 yrs' },
    { name: 'Ms. Ji-Yeon Kim', instruments: 'Violin, Viola', students: 9, rating: 4.8, experience: '11 yrs' },
  ]

  const recitals = [
    { name: 'Spring Recital 2026', date: 'May 24', venue: 'Main Hall', performers: 42, status: 'confirmed' },
    { name: 'Guitar Showcase', date: 'Jun 14', venue: 'Studio C', performers: 12, status: 'pending' },
    { name: 'Summer Concert', date: 'Jul 19', venue: 'Community Center', performers: 60, status: 'pending' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>Crescendo</span> Academy</div>
          <div className={styles.brandSub}>SCHOOL ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t => (
            <button key={t} className={`${styles.navItem} ${tab === t ? styles.navActive : ''}`} onClick={() => setTab(t)}>
              <span className={styles.navIcon}>{
                t === 'Dashboard' ? '🎵' : t === 'Students' ? '🎓' : t === 'Lessons' ? '📅' :
                t === 'Instructors' ? '👨‍🏫' : t === 'Recitals' ? '🎪' : t === 'Inbound Leads' ? '📬' : '🌐'
              }</span>
              {t}
              {t === 'Lessons' && <span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <a href="/demos/music-school" target="_blank" className={styles.viewSite}>View Live Site →</a>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Monday, 28 April 2026</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>5</span></div>
            <div className={styles.avatar}>CA</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab === 'Dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'ENROLLED STUDENTS', val: '148', sub: '+12 this month', a: '#a855f7' },
                  { label: 'LESSONS TODAY', val: '22', sub: '5 instructors active', a: '#ec4899' },
                  { label: 'MONTHLY REVENUE', val: '$18.6k', sub: '+9% vs last month', a: '#10b981' },
                  { label: 'UPCOMING RECITALS', val: '3', sub: 'Next: May 24', a: '#f59e0b' },
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
                    <div className={styles.panelHead}>Today's Lessons <span className={styles.chip}>22 scheduled</span></div>
                    <table className={styles.table}>
                      <thead><tr><th>TIME</th><th>STUDENT</th><th>INSTRUMENT</th><th>INSTRUCTOR</th><th>ROOM</th></tr></thead>
                      <tbody>
                        {lessons.map(l => (
                          <tr key={l.student+l.time}>
                            <td><span className={styles.bold}>{l.time}</span></td>
                            <td>{l.student}</td>
                            <td><span className={styles.catChip}>{l.instrument}</span></td>
                            <td>{l.instructor}</td>
                            <td className={styles.muted}>{l.room}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Instructors</div>
                    {instructors.map(i => (
                      <div key={i.name} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(168,85,247,0.04)' }}>
                        <div>
                          <div className={styles.bold}>{i.name}</div>
                          <div className={styles.muted}>{i.instruments}</div>
                        </div>
                        <span className={styles.bold}>{i.students} students</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Upcoming Recitals</div>
                    {recitals.map(r => (
                      <div key={r.name} style={{ padding:'8px 0', borderBottom:'1px solid rgba(168,85,247,0.04)' }}>
                        <div className={styles.bold}>{r.name}</div>
                        <div className={styles.muted}>{r.date} · {r.performers} performers</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Students' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Student Roster <button className={styles.addBtn}>+ Enroll Student</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>AGE</th><th>INSTRUMENT</th><th>INSTRUCTOR</th><th>LEVEL</th><th>SINCE</th><th>STATUS</th></tr></thead>
                <tbody>
                  {students.map(s => (
                    <tr key={s.name}>
                      <td><span className={styles.bold}>{s.name}</span></td>
                      <td>{s.age}</td>
                      <td><span className={styles.catChip}>{s.instrument}</span></td>
                      <td>{s.instructor}</td>
                      <td>{s.level}</td>
                      <td className={styles.muted}>{s.since}</td>
                      <td><span className={`${styles.tag} ${styles[s.status]}`}>{s.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Lessons' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Today's Schedule <button className={styles.addBtn}>+ Book Lesson</button></div>
              <table className={styles.table}>
                <thead><tr><th>TIME</th><th>STUDENT</th><th>INSTRUMENT</th><th>INSTRUCTOR</th><th>ROOM</th><th>DURATION</th></tr></thead>
                <tbody>
                  {lessons.map(l => (
                    <tr key={l.student+l.time}>
                      <td><span className={styles.bold}>{l.time}</span></td>
                      <td>{l.student}</td>
                      <td><span className={styles.catChip}>{l.instrument}</span></td>
                      <td>{l.instructor}</td>
                      <td>{l.room}</td>
                      <td>{l.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Instructors' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Instructor Roster <button className={styles.addBtn}>+ Add Instructor</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>INSTRUMENTS</th><th>STUDENTS</th><th>RATING</th><th>EXPERIENCE</th></tr></thead>
                <tbody>
                  {instructors.map(i => (
                    <tr key={i.name}>
                      <td><span className={styles.bold}>{i.name}</span></td>
                      <td>{i.instruments}</td>
                      <td>{i.students}</td>
                      <td>⭐ {i.rating}</td>
                      <td>{i.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'Recitals' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Recitals & Events <button className={styles.addBtn}>+ Plan Recital</button></div>
              <table className={styles.table}>
                <thead><tr><th>NAME</th><th>DATE</th><th>VENUE</th><th>PERFORMERS</th><th>STATUS</th></tr></thead>
                <tbody>
                  {recitals.map(r => (
                    <tr key={r.name}>
                      <td><span className={styles.bold}>{r.name}</span></td>
                      <td>{r.date}</td>
                      <td>{r.venue}</td>
                      <td>{r.performers}</td>
                      <td><span className={`${styles.tag} ${styles[r.status]}`}>{r.status}</span></td>
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
                  <a href="/demos/music-school" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                        { label: 'ADDRESS', key: 'address' }, { label: 'LESSON HOURS', key: 'hours' },
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
