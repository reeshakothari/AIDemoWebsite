'use client'
import { useState } from 'react'
import styles from './page.module.css'

const reservations = [
  { time: '12:00 PM', name: 'James Whitmore', covers: 4, table: 'T-3', status: 'seated', note: 'Window seat preferred' },
  { time: '12:30 PM', name: 'Chen Family', covers: 6, table: 'T-7', status: 'seated', note: 'Birthday cake arranged' },
  { time: '1:00 PM', name: 'Fatima Al-Rashid', covers: 2, table: 'T-1', status: 'confirmed', note: '' },
  { time: '2:00 PM', name: 'The Garcias', covers: 5, table: 'T-9', status: 'confirmed', note: 'Gluten-free menu' },
  { time: '6:30 PM', name: 'Marcus & Laura', covers: 2, table: 'T-2', status: 'confirmed', note: 'Anniversary' },
  { time: '7:00 PM', name: 'Patel Party', covers: 8, table: 'T-12', status: 'pending', note: 'Pre-order submitted' },
  { time: '7:30 PM', name: 'Oliver Stone', covers: 3, table: 'T-5', status: 'confirmed', note: '' },
  { time: '8:00 PM', name: 'Yuki Nishimura', covers: 2, table: 'T-4', status: 'pending', note: '' },
]

const topDishes = [
  { name: 'Wagyu Ribeye, 45-day aged', orders: 34, rev: '$1,870' },
  { name: 'Oak-Smoked Salmon Starter', orders: 51, rev: '$1,326' },
  { name: 'Truffle Risotto', orders: 28, rev: '$868' },
  { name: 'Chocolate Fondant', orders: 44, rev: '$704' },
  { name: 'Lobster Bisque', orders: 19, rev: '$627' },
]

const tables = [
  { id:'T-1', cap:2, status:'occupied' }, { id:'T-2', cap:2, status:'available' },
  { id:'T-3', cap:4, status:'occupied' }, { id:'T-4', cap:2, status:'reserved' },
  { id:'T-5', cap:3, status:'available' }, { id:'T-6', cap:4, status:'occupied' },
  { id:'T-7', cap:6, status:'occupied' }, { id:'T-8', cap:4, status:'available' },
  { id:'T-9', cap:5, status:'reserved' }, { id:'T-10', cap:2, status:'available' },
  { id:'T-11', cap:8, status:'available' }, { id:'T-12', cap:8, status:'reserved' },
]

const menuSections = [
  { section: 'Starters', items: [{ name: 'Oak-Smoked Salmon', price: '$26' }, { name: 'Lobster Bisque', price: '$33' }, { name: 'Burrata & Heritage Tomato', price: '$22' }] },
  { section: 'Mains', items: [{ name: 'Wagyu Ribeye 45-day', price: '$55' }, { name: 'Truffle Risotto', price: '$31' }, { name: 'Pan-Seared Sea Bass', price: '$38' }] },
  { section: 'Desserts', items: [{ name: 'Chocolate Fondant', price: '$16' }, { name: 'Crème Brûlée', price: '$14' }, { name: 'Seasonal Sorbet', price: '$12' }] },
]

const initialContent = {
  heroHeadline: 'Where Fire Meets Flavour.',
  heroSub: 'An intimate dining experience crafted around the art of slow cooking and open fire.',
  ctaText: 'Reserve Your Table',
  phone: '+1 (555) 020-EMBER',
  email: 'reservations@emberandoak.com',
  hours: 'Tue–Thu: 6pm–10pm · Fri–Sat: 5:30pm–11pm · Sun: 5pm–9pm',
}

export default function RestaurantAdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [content, setContent] = useState(initialContent)
  const [menu, setMenu] = useState(menuSections)
  const [saved, setSaved] = useState(false)

  function handleSave() { setSaved(true); setTimeout(() => setSaved(false), 2500) }

  const navItems = [
    { id: 'dashboard', icon: '◈', label: 'Dashboard' },
    { id: 'reservations', icon: '📅', label: 'Reservations' },
    { id: 'tables', icon: '🪑', label: 'Table Status' },
    { id: 'menu', icon: '🍽️', label: 'Menu Manager' },
    { id: 'edit', icon: '✏️', label: 'Edit Website' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <div className={styles.brandLogo}>Ember & Oak</div>
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
          <a href="/demos/restaurant" className={styles.viewSite}>← View Live Site</a>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <h1 className={styles.pageTitle}>
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'reservations' && 'Reservations'}
              {activeTab === 'tables' && 'Table Status'}
              {activeTab === 'menu' && 'Menu Manager'}
              {activeTab === 'edit' && 'Edit Website Content'}
            </h1>
            <p className={styles.pageDate}>Wednesday, 23 April 2025</p>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notifBell}>🔔 <span>5</span></div>
            <div className={styles.avatar}>EO</div>
          </div>
        </header>

        <div className={styles.content}>
          {activeTab === 'dashboard' && (
            <>
              <div className={styles.statsRow}>
                {[
                  { label: 'Covers Today', value: '84', sub: 'Across 12 reservations', accent: '#c9956c' },
                  { label: "Today's Revenue", value: '$3,240', sub: '↑ 12% vs last Wed', accent: '#f59e0b' },
                  { label: 'Pending Bookings', value: '12', sub: '3 need confirmation', accent: '#ef4444' },
                  { label: 'Avg Order Value', value: '$38', sub: 'Up from $34 last week', accent: '#34d399' },
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
                  <div className={styles.panelHead}><span>Today's Reservations</span><span className={styles.badge}>8 today</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Time</th><th>Guest</th><th>Covers</th><th>Table</th><th>Status</th><th>Note</th></tr></thead>
                    <tbody>
                      {reservations.slice(0,6).map(r => (
                        <tr key={r.time+r.name}>
                          <td className={styles.time}>{r.time}</td>
                          <td className={styles.bold}>{r.name}</td>
                          <td>{r.covers}</td>
                          <td><span className={styles.tableTag}>{r.table}</span></td>
                          <td><span className={`${styles.status} ${styles[r.status]}`}>{r.status}</span></td>
                          <td className={styles.note}>{r.note || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className={styles.colRight}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Dishes This Week</div>
                    {topDishes.map(d => (
                      <div key={d.name} className={styles.dishRow}>
                        <div className={styles.dishName}>{d.name}</div>
                        <div className={styles.dishStats}><span>{d.orders} orders</span><strong>{d.rev}</strong></div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Table Overview</div>
                    <div className={styles.tableMiniGrid}>
                      {tables.slice(0,8).map(t => (
                        <div key={t.id} className={`${styles.tableMini} ${styles['t_'+t.status]}`}>
                          <div className={styles.tableId}>{t.id}</div>
                          <div className={styles.tableCap}>{t.cap}p</div>
                        </div>
                      ))}
                    </div>
                    <div className={styles.tableLegend}>
                      <span className={styles.legOcc}>■ Occupied</span>
                      <span className={styles.legRes}>■ Reserved</span>
                      <span className={styles.legAvail}>■ Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'reservations' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>All Reservations — Today</span><button className={styles.addBtn}>+ New Reservation</button></div>
              <table className={styles.table}>
                <thead><tr><th>Time</th><th>Guest Name</th><th>Covers</th><th>Table</th><th>Status</th><th>Notes</th><th>Action</th></tr></thead>
                <tbody>
                  {reservations.map(r => (
                    <tr key={r.time+r.name}>
                      <td className={styles.time}>{r.time}</td>
                      <td className={styles.bold}>{r.name}</td>
                      <td>{r.covers}</td>
                      <td><span className={styles.tableTag}>{r.table}</span></td>
                      <td><span className={`${styles.status} ${styles[r.status]}`}>{r.status}</span></td>
                      <td className={styles.note}>{r.note || '—'}</td>
                      <td><button className={styles.editRowBtn}>Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'tables' && (
            <div className={styles.panel}>
              <div className={styles.panelHead}>Live Table Status</div>
              <div className={styles.tableFloor}>
                {tables.map(t => (
                  <div key={t.id} className={`${styles.tableBlock} ${styles['t_'+t.status]}`}>
                    <div className={styles.tableBlockId}>{t.id}</div>
                    <div className={styles.tableBlockCap}>{t.cap} seats</div>
                    <div className={styles.tableBlockStatus}>{t.status}</div>
                  </div>
                ))}
              </div>
              <div className={styles.tableLegend}>
                <span className={styles.legOcc}>■ Occupied</span>
                <span className={styles.legRes}>■ Reserved</span>
                <span className={styles.legAvail}>■ Available</span>
              </div>
            </div>
          )}

          {activeTab === 'menu' && (
            <div className={styles.editLayout}>
              {menu.map((sec, si) => (
                <div key={sec.section} className={styles.panel}>
                  <div className={styles.panelHead}>{sec.section}</div>
                  {sec.items.map((item, ii) => (
                    <div key={ii} className={styles.serviceRow}>
                      <input value={item.name} className={styles.serviceNameInput} onChange={e => {
                        const m = menu.map((s,si2) => si2===si ? { ...s, items: s.items.map((it,ii2) => ii2===ii ? { ...it, name: e.target.value } : it) } : s)
                        setMenu(m)
                      }} />
                      <input value={item.price} className={styles.servicePriceInput} onChange={e => {
                        const m = menu.map((s,si2) => si2===si ? { ...s, items: s.items.map((it,ii2) => ii2===ii ? { ...it, price: e.target.value } : it) } : s)
                        setMenu(m)
                      }} />
                    </div>
                  ))}
                  <button className={styles.addBtn} onClick={() => {
                    const m = menu.map((s,si2) => si2===si ? { ...s, items: [...s.items, { name: 'New Item', price: '$0' }] } : s)
                    setMenu(m)
                  }}>+ Add Item</button>
                </div>
              ))}
              <div className={styles.saveRow}>
                <button className={styles.saveBtn} onClick={handleSave}>{saved ? '✓ Saved!' : 'Save Menu Changes'}</button>
              </div>
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
              <div className={styles.saveRow}>
                <button className={styles.saveBtn} onClick={handleSave}>{saved ? '✓ Changes Saved!' : 'Save All Changes'}</button>
                <a href="/demos/restaurant" className={styles.previewBtn} target="_blank">Preview Live Site →</a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
