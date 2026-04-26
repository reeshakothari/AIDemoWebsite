'use client'
import { useState } from 'react'
import styles from './page.module.css'

const classes = [
  { time: '6:00 AM', name: 'HIIT Blast', trainer: 'Marcus', capacity: 20, enrolled: 20, room: 'Studio A', status: 'full' },
  { time: '7:30 AM', name: 'Yoga Flow', trainer: 'Priya', capacity: 15, enrolled: 12, room: 'Studio B', status: 'open' },
  { time: '9:00 AM', name: 'Spin Cycle', trainer: 'Jake', capacity: 25, enrolled: 23, room: 'Spin Room', status: 'open' },
  { time: '10:30 AM', name: 'Strength & Conditioning', trainer: 'Marcus', capacity: 18, enrolled: 18, room: 'Weights Floor', status: 'full' },
  { time: '12:00 PM', name: 'Boxing Fundamentals', trainer: 'Dani', capacity: 12, enrolled: 9, room: 'Boxing Ring', status: 'open' },
  { time: '5:30 PM', name: 'CrossFit', trainer: 'Jake', capacity: 20, enrolled: 20, room: 'Studio A', status: 'full' },
  { time: '6:30 PM', name: 'Pilates Core', trainer: 'Priya', capacity: 15, enrolled: 14, room: 'Studio B', status: 'open' },
  { time: '7:30 PM', name: 'Night HIIT', trainer: 'Marcus', capacity: 20, enrolled: 17, room: 'Studio A', status: 'open' },
]

const recentMembers = [
  { name: 'Jordan Hayes', plan: 'Elite Monthly', joined: '20 Apr 2025', checkins: 4 },
  { name: 'Sonia Mehta', plan: 'Annual Pro', joined: '18 Apr 2025', checkins: 7 },
  { name: 'Chris Dale', plan: 'Basic Monthly', joined: '15 Apr 2025', checkins: 5 },
  { name: 'Anita Osei', plan: 'Elite Monthly', joined: '12 Apr 2025', checkins: 9 },
  { name: 'Tom Garfield', plan: 'Day Pass', joined: '23 Apr 2025', checkins: 1 },
]

const trainers = [
  { name: 'Marcus Reid', specialty: 'HIIT · Strength', classes: 3, rating: 4.9, members: 87 },
  { name: 'Priya Kapoor', specialty: 'Yoga · Pilates', classes: 2, rating: 5.0, members: 64 },
  { name: 'Jake Torres', specialty: 'CrossFit · Spin', classes: 2, rating: 4.8, members: 72 },
  { name: 'Dani Okafor', specialty: 'Boxing · Cardio', classes: 1, rating: 4.7, members: 51 },
]

const initialContent = {
  heroHeadline: 'Forge Your Limits.',
  heroSub: 'PowerForge is the gym for people who are serious about results. No fluff. Just work.',
  ctaText: 'Start Free Trial',
  phone: '+1 (555) 100-LIFT',
  email: 'join@powerforge.gym',
  hours: 'Mon–Fri: 5am – 11pm · Sat–Sun: 6am – 10pm',
  pricing: [
    { name: 'Basic', price: '$29/mo', perks: 'Gym floor access · Locker room' },
    { name: 'Elite', price: '$59/mo', perks: 'All classes · Personal training discount' },
    { name: 'Annual Pro', price: '$499/yr', perks: 'All access · 2 PT sessions/mo' },
  ],
}

export default function FitnessAdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [content, setContent] = useState(initialContent)
  const [saved, setSaved] = useState(false)

  function handleSave() { setSaved(true); setTimeout(() => setSaved(false), 2500) }

  const navItems = [
    { id: 'dashboard', icon: '◈', label: 'Dashboard' },
    { id: 'classes', icon: '🏋️', label: 'Class Schedule' },
    { id: 'members', icon: '👤', label: 'Members' },
    { id: 'trainers', icon: '🥊', label: 'Trainers' },
    { id: 'edit', icon: '✏️', label: 'Edit Website' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <div className={styles.brandLogo}>POWERFORGE</div>
          <div className={styles.brandSub}>Admin Panel</div>
        </div>
        <nav className={styles.sideNav}>
          {navItems.map(n => (
            <button key={n.id} className={`${styles.navItem} ${activeTab === n.id ? styles.navActive : ''}`} onClick={() => setActiveTab(n.id)}>
              <span className={styles.navIcon}>{n.icon}</span>{n.label}
            </button>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <a href="/demos/fitness-gym" className={styles.viewSite}>← View Live Site</a>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <h1 className={styles.pageTitle}>
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'classes' && 'Class Schedule'}
              {activeTab === 'members' && 'Member Directory'}
              {activeTab === 'trainers' && 'Trainer Management'}
              {activeTab === 'edit' && 'Edit Website Content'}
            </h1>
            <p className={styles.pageDate}>Wednesday, 23 April 2025</p>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notifBell}>🔔 <span>2</span></div>
            <div className={styles.avatar}>PF</div>
          </div>
        </header>

        <div className={styles.content}>
          {activeTab === 'dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'Active Members', value: '342', sub: '↑ 18 this month', accent: '#FFE500' },
                  { label: 'Classes Today', value: '8', sub: '4 full · 4 open', accent: '#f97316' },
                  { label: "Check-ins Today", value: '127', sub: 'As of 2pm', accent: '#34d399' },
                  { label: 'Monthly Revenue', value: '$28,900', sub: '↑ 9% vs last month', accent: '#a78bfa' },
                ].map(s => (
                  <div key={s.label} className={styles.statCard} style={{ '--a': s.accent }}>
                    <div className={styles.statVal}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                    <div className={styles.statSub}>{s.sub}</div>
                  </div>
                ))}
              </div>

              <div className={styles.twoCol}>
                <div className={styles.panel}>
                  <div className={styles.panelHead}><span>Today's Classes</span><span className={styles.badge}>8 classes</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Time</th><th>Class</th><th>Trainer</th><th>Room</th><th>Spots</th><th>Status</th></tr></thead>
                    <tbody>
                      {classes.map(c => (
                        <tr key={c.time+c.name}>
                          <td className={styles.time}>{c.time}</td>
                          <td className={styles.bold}>{c.name}</td>
                          <td>{c.trainer}</td>
                          <td>{c.room}</td>
                          <td className={styles.spots}>{c.enrolled}/{c.capacity}</td>
                          <td><span className={`${styles.status} ${styles[c.status]}`}>{c.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className={styles.colRight}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Trainers Today</div>
                    {trainers.map(t => (
                      <div key={t.name} className={styles.trainerRow}>
                        <div className={styles.trainerAvatar}>{t.name.split(' ').map(n=>n[0]).join('')}</div>
                        <div className={styles.trainerInfo}>
                          <div className={styles.trainerName}>{t.name}</div>
                          <div className={styles.trainerSpec}>{t.specialty}</div>
                        </div>
                        <div className={styles.trainerStats}>
                          <span>{t.classes} classes</span>
                          <strong>{t.rating}★</strong>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Membership Breakdown</div>
                    {[['Elite Monthly','148','43%','#FFE500'],['Annual Pro','112','33%','#f97316'],['Basic Monthly','82','24%','#34d399']].map(([n,v,p,c])=>(
                      <div key={n} className={styles.memRow}>
                        <div className={styles.memLabel}>{n}</div>
                        <div className={styles.memBar}><div className={styles.memFill} style={{ width: p, background: c }} /></div>
                        <div className={styles.memCount}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'classes' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Full Class Schedule</span><button className={styles.addBtn}>+ Add Class</button></div>
              <table className={styles.table}>
                <thead><tr><th>Time</th><th>Class Name</th><th>Trainer</th><th>Room</th><th>Capacity</th><th>Enrolled</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  {classes.map(c => (
                    <tr key={c.time+c.name}>
                      <td className={styles.time}>{c.time}</td>
                      <td className={styles.bold}>{c.name}</td>
                      <td>{c.trainer}</td>
                      <td>{c.room}</td>
                      <td>{c.capacity}</td>
                      <td className={styles.spots}>{c.enrolled}</td>
                      <td><span className={`${styles.status} ${styles[c.status]}`}>{c.status}</span></td>
                      <td><button className={styles.editRowBtn}>Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'members' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Recent Members</span><span className={styles.badge}>342 total</span></div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Plan</th><th>Joined</th><th>Check-ins</th><th>Action</th></tr></thead>
                <tbody>
                  {recentMembers.map(m => (
                    <tr key={m.name}>
                      <td className={styles.bold}>{m.name}</td>
                      <td><span className={styles.planTag}>{m.plan}</span></td>
                      <td className={styles.time}>{m.joined}</td>
                      <td>{m.checkins}</td>
                      <td><button className={styles.editRowBtn}>View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'trainers' && (
            <div className={styles.trainersGrid}>
              {trainers.map(t => (
                <div key={t.name} className={styles.trainerCard}>
                  <div className={styles.tcAvatar}>{t.name.split(' ').map(n=>n[0]).join('')}</div>
                  <div className={styles.tcName}>{t.name}</div>
                  <div className={styles.tcSpec}>{t.specialty}</div>
                  <div className={styles.tcStats}>
                    <div className={styles.tcStat}><strong>{t.classes}</strong><span>Classes Today</span></div>
                    <div className={styles.tcStat}><strong>{t.rating}★</strong><span>Rating</span></div>
                    <div className={styles.tcStat}><strong>{t.members}</strong><span>Members</span></div>
                  </div>
                  <button className={styles.editRowBtn} style={{ width: '100%', padding: '9px' }}>Edit Profile</button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'edit' && (
            <div className={styles.editLayout}>
              <div className={styles.panel}>
                <div className={styles.panelHead}>Hero Section</div>
                <div className={styles.fieldGroup}><label>Headline</label><input value={content.heroHeadline} onChange={e => setContent({ ...content, heroHeadline: e.target.value })} /></div>
                <div className={styles.fieldGroup}><label>Subheadline</label><textarea rows={2} value={content.heroSub} onChange={e => setContent({ ...content, heroSub: e.target.value })} /></div>
                <div className={styles.fieldGroup}><label>CTA Button Text</label><input value={content.ctaText} onChange={e => setContent({ ...content, ctaText: e.target.value })} /></div>
              </div>
              <div className={styles.panel}>
                <div className={styles.panelHead}>Contact & Hours</div>
                <div className={styles.fieldGroup}><label>Phone</label><input value={content.phone} onChange={e => setContent({ ...content, phone: e.target.value })} /></div>
                <div className={styles.fieldGroup}><label>Email</label><input value={content.email} onChange={e => setContent({ ...content, email: e.target.value })} /></div>
                <div className={styles.fieldGroup}><label>Opening Hours</label><textarea rows={2} value={content.hours} onChange={e => setContent({ ...content, hours: e.target.value })} /></div>
              </div>
              <div className={styles.panel}>
                <div className={styles.panelHead}>Membership Pricing</div>
                {content.pricing.map((p, i) => (
                  <div key={i} className={styles.pricingRow}>
                    <input value={p.name} className={styles.serviceNameInput} placeholder="Plan Name" onChange={e => {
                      const updated = content.pricing.map((pr, pi) => pi === i ? { ...pr, name: e.target.value } : pr)
                      setContent({ ...content, pricing: updated })
                    }} />
                    <input value={p.price} className={styles.servicePriceInput} placeholder="Price" onChange={e => {
                      const updated = content.pricing.map((pr, pi) => pi === i ? { ...pr, price: e.target.value } : pr)
                      setContent({ ...content, pricing: updated })
                    }} />
                    <input value={p.perks} className={styles.perksInput} placeholder="Included perks" onChange={e => {
                      const updated = content.pricing.map((pr, pi) => pi === i ? { ...pr, perks: e.target.value } : pr)
                      setContent({ ...content, pricing: updated })
                    }} />
                  </div>
                ))}
              </div>
              <div className={styles.saveRow}>
                <button className={styles.saveBtn} onClick={handleSave}>{saved ? '✓ Changes Saved!' : 'Save All Changes'}</button>
                <a href="/demos/fitness-gym" className={styles.previewBtn} target="_blank">Preview Live Site →</a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
