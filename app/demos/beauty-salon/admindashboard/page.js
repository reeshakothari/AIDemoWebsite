'use client'
import { useState } from 'react'
import styles from './page.module.css'

const appointments = [
  { time: '9:00 AM', client: 'Sophie Laurent', service: 'Hair Colour & Blowout', stylist: 'Isabelle', status: 'confirmed', duration: '90 min' },
  { time: '10:30 AM', client: 'Mia Chen', service: 'Facial & Brow Shape', stylist: 'Camille', status: 'in-progress', duration: '60 min' },
  { time: '11:00 AM', client: 'Priya Sharma', service: 'Keratin Treatment', stylist: 'Isabelle', status: 'confirmed', duration: '120 min' },
  { time: '1:00 PM', client: 'Rachel Moore', service: 'Classic Manicure', stylist: 'Lena', status: 'confirmed', duration: '45 min' },
  { time: '2:30 PM', client: 'Dana Wilkes', service: 'Lash Extensions', stylist: 'Camille', status: 'pending', duration: '90 min' },
  { time: '4:00 PM', client: 'Yuki Tanaka', service: 'Balayage', stylist: 'Isabelle', status: 'confirmed', duration: '150 min' },
]

const topServices = [
  { name: 'Hair Colour', pct: 88 },
  { name: 'Facials', pct: 72 },
  { name: 'Lash Extensions', pct: 65 },
  { name: 'Manicure / Pedicure', pct: 58 },
  { name: 'Keratin Treatment', pct: 44 },
]

const reviews = [
  { name: 'Sophie L.', rating: 5, text: 'Absolutely love my balayage! Isabelle is a genius.' },
  { name: 'Priya S.', rating: 5, text: 'The keratin treatment lasted months. So worth it.' },
  { name: 'Rachel M.', rating: 4, text: 'Great manicure, clean space, friendly staff.' },
]

const initialContent = {
  heroHeadline: 'Where Beauty Meets Artistry.',
  heroSub: 'Lumière is London\'s premier destination for hair, skin, and nail artistry.',
  ctaText: 'Book Your Experience',
  phone: '+44 20 7946 0321',
  email: 'hello@lumiere-salon.com',
  hours: 'Mon–Sat 9am – 7pm · Sun 10am – 5pm',
  services: [
    { name: 'Balayage & Highlights', price: '£120' },
    { name: 'Keratin Treatment', price: '£180' },
    { name: 'Classic Facial', price: '£65' },
    { name: 'Lash Extensions', price: '£85' },
    { name: 'Gel Manicure', price: '£38' },
  ],
}

export default function BeautyAdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [content, setContent] = useState(initialContent)
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const navItems = [
    { id: 'dashboard', icon: '◈', label: 'Dashboard' },
    { id: 'appointments', icon: '📅', label: 'Appointments' },
    { id: 'clients', icon: '👤', label: 'Clients' },
    { id: 'reviews', icon: '⭐', label: 'Reviews' },
    { id: 'edit', icon: '✏️', label: 'Edit Website' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <div className={styles.brandLogo}>Lumière</div>
          <div className={styles.brandSub}>Admin Panel</div>
        </div>
        <nav className={styles.sideNav}>
          {navItems.map(n => (
            <button key={n.id} className={`${styles.navItem} ${activeTab === n.id ? styles.navActive : ''}`} onClick={() => setActiveTab(n.id)}>
              <span className={styles.navIcon}>{n.icon}</span>
              {n.label}
            </button>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <a href="/demos/beauty-salon" className={styles.viewSite}>← View Live Site</a>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <h1 className={styles.pageTitle}>
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'appointments' && 'Appointments'}
              {activeTab === 'clients' && 'Client Directory'}
              {activeTab === 'reviews' && 'Reviews & Ratings'}
              {activeTab === 'edit' && 'Edit Website Content'}
            </h1>
            <p className={styles.pageDate}>Wednesday, 23 April 2025</p>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notifBell}>🔔 <span>3</span></div>
            <div className={styles.avatar}>IS</div>
          </div>
        </header>

        <div className={styles.content}>
          {(activeTab === 'dashboard') && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'Bookings Today', value: '8', sub: '↑ 2 from yesterday', accent: '#e9a0b8' },
                  { label: 'Monthly Revenue', value: '£12,400', sub: '↑ 18% vs last month', accent: '#c9956c' },
                  { label: 'New Clients', value: '24', sub: 'This month', accent: '#a78bfa' },
                  { label: 'Avg. Rating', value: '4.9★', sub: 'From 340 reviews', accent: '#34d399' },
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
                  <div className={styles.panelHead}><span>Today's Appointments</span><span className={styles.badge8}>8</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Time</th><th>Client</th><th>Service</th><th>Stylist</th><th>Status</th></tr></thead>
                    <tbody>
                      {appointments.map(a => (
                        <tr key={a.time}>
                          <td className={styles.time}>{a.time}</td>
                          <td className={styles.bold}>{a.client}</td>
                          <td>{a.service}</td>
                          <td>{a.stylist}</td>
                          <td><span className={`${styles.status} ${styles[a.status]}`}>{a.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className={styles.colRight}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Services This Month</div>
                    <div className={styles.barChart}>
                      {topServices.map(s => (
                        <div key={s.name} className={styles.barRow}>
                          <div className={styles.barLabel}>{s.name}</div>
                          <div className={styles.barTrack}><div className={styles.barFill} style={{ width: s.pct + '%' }}/></div>
                          <div className={styles.barPct}>{s.pct}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Recent Reviews</div>
                    <div className={styles.reviewList}>
                      {reviews.map(r => (
                        <div key={r.name} className={styles.review}>
                          <div className={styles.reviewTop}><strong>{r.name}</strong><span>{'★'.repeat(r.rating)}</span></div>
                          <p>{r.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'appointments' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>All Appointments — Today</span><button className={styles.addBtn}>+ New Booking</button></div>
              <table className={styles.table}>
                <thead><tr><th>Time</th><th>Client</th><th>Service</th><th>Duration</th><th>Stylist</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  {appointments.map(a => (
                    <tr key={a.time}>
                      <td className={styles.time}>{a.time}</td>
                      <td className={styles.bold}>{a.client}</td>
                      <td>{a.service}</td>
                      <td>{a.duration}</td>
                      <td>{a.stylist}</td>
                      <td><span className={`${styles.status} ${styles[a.status]}`}>{a.status}</span></td>
                      <td><button className={styles.editRowBtn}>Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'clients' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Client Directory</span><span className={styles.badgeGrey}>248 total</span></div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Email</th><th>Last Visit</th><th>Total Visits</th><th>Favourite Service</th></tr></thead>
                <tbody>
                  {[
                    ['Sophie Laurent','sophie@email.com','18 Apr 2025','12','Balayage'],
                    ['Mia Chen','mia@email.com','23 Apr 2025','7','Facial'],
                    ['Priya Sharma','priya@email.com','20 Apr 2025','9','Keratin'],
                    ['Rachel Moore','rachel@email.com','23 Apr 2025','4','Manicure'],
                    ['Yuki Tanaka','yuki@email.com','10 Apr 2025','15','Balayage'],
                    ['Dana Wilkes','dana@email.com','02 Apr 2025','3','Lash Extensions'],
                  ].map(([n,e,lv,tv,fs])=>(
                    <tr key={n}><td className={styles.bold}>{n}</td><td>{e}</td><td>{lv}</td><td>{tv}</td><td>{fs}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Reviews</div>
              <div className={styles.reviewGrid}>
                {[...reviews, ...reviews].map((r, i) => (
                  <div key={i} className={styles.reviewCard}>
                    <div className={styles.reviewTop}><strong>{r.name}</strong><span className={styles.stars}>{'★'.repeat(r.rating)}</span></div>
                    <p>{r.text}</p>
                    <span className={styles.reviewDate}>April 2025</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'edit' && (
            <div className={styles.editLayout}>
              <div className={styles.panel}>
                <div className={styles.panelHead}>Hero Section</div>
                <div className={styles.fieldGroup}>
                  <label>Headline</label>
                  <input value={content.heroHeadline} onChange={e => setContent({ ...content, heroHeadline: e.target.value })} />
                </div>
                <div className={styles.fieldGroup}>
                  <label>Subheadline</label>
                  <textarea rows={2} value={content.heroSub} onChange={e => setContent({ ...content, heroSub: e.target.value })} />
                </div>
                <div className={styles.fieldGroup}>
                  <label>CTA Button Text</label>
                  <input value={content.ctaText} onChange={e => setContent({ ...content, ctaText: e.target.value })} />
                </div>
              </div>

              <div className={styles.panel}>
                <div className={styles.panelHead}>Contact Information</div>
                <div className={styles.fieldGroup}><label>Phone</label><input value={content.phone} onChange={e => setContent({ ...content, phone: e.target.value })} /></div>
                <div className={styles.fieldGroup}><label>Email</label><input value={content.email} onChange={e => setContent({ ...content, email: e.target.value })} /></div>
                <div className={styles.fieldGroup}><label>Opening Hours</label><input value={content.hours} onChange={e => setContent({ ...content, hours: e.target.value })} /></div>
              </div>

              <div className={styles.panel}>
                <div className={styles.panelHead}>Services & Pricing</div>
                {content.services.map((s, i) => (
                  <div key={i} className={styles.serviceRow}>
                    <input value={s.name} className={styles.serviceNameInput} onChange={e => {
                      const updated = [...content.services]; updated[i] = { ...s, name: e.target.value }; setContent({ ...content, services: updated })
                    }} />
                    <input value={s.price} className={styles.servicePriceInput} onChange={e => {
                      const updated = [...content.services]; updated[i] = { ...s, price: e.target.value }; setContent({ ...content, services: updated })
                    }} />
                  </div>
                ))}
                <button className={styles.addBtn} onClick={() => setContent({ ...content, services: [...content.services, { name: 'New Service', price: '£0' }] })}>+ Add Service</button>
              </div>

              <div className={styles.saveRow}>
                <button className={styles.saveBtn} onClick={handleSave}>{saved ? '✓ Changes Saved!' : 'Save All Changes'}</button>
                <a href="/demos/beauty-salon" className={styles.previewBtn} target="_blank">Preview Live Site →</a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
