'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Reservations','Rooms','Guests','F&B','Inbound Leads','Edit Website']

const reservations = [
  { id:'RES-2841', guest:'Lord & Lady Ashworth', room:'The Grand Suite', checkin:'23 Apr', checkout:'26 Apr', nights:3, total:'$3,600', status:'checkedin' },
  { id:'RES-2840', guest:'Mr. James Holloway', room:'Superior King', checkin:'23 Apr', checkout:'25 Apr', nights:2, total:'$680', status:'checkedin' },
  { id:'RES-2839', guest:'Ms. Isabelle Fontaine', room:'Deluxe Sea View', checkin:'24 Apr', checkout:'27 Apr', nights:3, total:'$1,440', status:'reserved' },
  { id:'RES-2838', guest:'The Nakamura Family', room:'Family Suite', checkin:'25 Apr', checkout:'28 Apr', nights:3, total:'$2,100', status:'reserved' },
  { id:'RES-2837', guest:'Dr. Sarah Lin', room:'Classic Twin', checkin:'22 Apr', checkout:'23 Apr', nights:1, total:'$240', status:'checkedout' },
]

const rooms = [
  { number:'101', type:'Classic Twin', floor:1, rate:'$240/nt', status:'checkedout', guest:'' },
  { number:'201', type:'Superior King', floor:2, rate:'$340/nt', status:'checkedin', guest:'J. Holloway' },
  { number:'301', type:'Deluxe Sea View', floor:3, rate:'$480/nt', status:'reserved', guest:'I. Fontaine' },
  { number:'401', type:'Family Suite', floor:4, rate:'$700/nt', status:'reserved', guest:'Nakamura Family' },
  { number:'501', type:'The Grand Suite', floor:5, rate:'$1,200/nt', status:'checkedin', guest:'Lord Ashworth' },
  { number:'102', type:'Classic Twin', floor:1, rate:'$240/nt', status:'vacant', guest:'' },
]

const guests = [
  { name:'Lord & Lady Ashworth', nationality:'UK', visits:8, spent:'$24,800', tier:'Platinum' },
  { name:'Mr. James Holloway', nationality:'USA', visits:3, spent:'$3,200', tier:'Gold' },
  { name:'Ms. Isabelle Fontaine', nationality:'France', visits:5, spent:'$8,400', tier:'Gold' },
  { name:'The Nakamura Family', nationality:'Japan', visits:2, spent:'$4,600', tier:'Silver' },
]

const initLeads = [
  { id:1, name:'Mr. & Mrs. Reeves', source:'Direct Enquiry', interest:'Honeymoon Suite', date:'22 Apr', status:'new' },
  { id:2, name:'Harrington Events', source:'Website', interest:'Corporate Block Booking', date:'21 Apr', status:'contacted' },
  { id:3, name:'Ms. Clara Vogel', source:'Referral', interest:'Family Suite Weekend', date:'20 Apr', status:'qualified' },
  { id:4, name:'Chen Consulting', source:'Travel Agent', interest:'Business Rate 10 nights', date:'19 Apr', status:'booked' },
  { id:5, name:'The Park Family', source:'OTA', interest:'Classic Rooms x3', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'rooms', label:'Room Categories', preview:'Room type cards' },
  { id:'contact', label:'Hotel Information', preview:'Address, phone, concierge' },
]

export default function HotelAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'FIVE STAR · EST. 1924',
    heroHeadline:'Where Luxury Becomes a Memory.',
    heroSub:'An iconic hotel of unrivalled elegance, exquisite dining, and deeply personal service — in the heart of the city.',
    cta1:'Reserve a Room', cta2:'Explore Suites',
    r1:'Classic Twin', r2:'Superior King', r3:'Deluxe Sea View', r4:'Family Suite', r5:'Junior Suite', r6:'The Grand Suite',
    phone:'+1 (555) 100-HOTEL', email:'reservations@grandhall.com', address:'1 Grand Hall Place, City Centre', concierge:'24/7 Concierge',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)
  const statusLabel = s => ({checkedin:'Checked In',checkedout:'Checked Out',reserved:'Reserved',vacant:'Vacant'})[s]||s

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>GRAND HALL</div>
          <div className={styles.brandSub}>HOTEL ADMIN</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','🎫','🛏️','👥','🍽️','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/hotel" className={styles.viewSite}>← View Live Site</a></div>
      </aside>
      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Grand Hall Hotel · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>2</span></div>
            <div className={styles.avatar}>GH</div>
          </div>
        </div>
        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Rooms Occupied',val:'4/6',sub:'67% occupancy',color:'#c4a662'},
                  {label:'Revenue (Apr)',val:'$48K',sub:'+18% vs Mar',color:'#34d399'},
                  {label:'Arrivals Today',val:'2',sub:'Departures: 1',color:'#818cf8'},
                  {label:'Avg Nightly Rate',val:'$640',sub:'↑ 8% vs last',color:'#f59e0b'},
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
                  <div className={styles.panelHead}>Current Reservations<span className={styles.chip}>5 active</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Guest</th><th>Room</th><th>Check-in</th><th>Check-out</th><th>Total</th><th>Status</th></tr></thead>
                  <tbody>{reservations.map(r=>(
                    <tr key={r.id}>
                      <td><div className={styles.bold}>{r.guest}</div></td>
                      <td className={styles.muted}>{r.room}</td>
                      <td className={styles.muted}>{r.checkin}</td>
                      <td className={styles.muted}>{r.checkout}</td>
                      <td className={styles.price}>{r.total}</td>
                      <td><span className={`${styles.tag} ${styles[r.status]}`}>{statusLabel(r.status)}</span></td>
                    </tr>
                  ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Room Status</div>
                    {rooms.map(r=>(
                      <div key={r.number} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(196,166,98,0.06)',fontSize:'13px'}}>
                        <div><div className={styles.bold}>Room {r.number} · {r.type}</div><div className={styles.muted}>{r.guest||'—'}</div></div>
                        <span className={`${styles.tag} ${styles[r.status]}`}>{statusLabel(r.status)}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>VIP Guests</div>
                    {guests.slice(0,3).map(g=>(
                      <div key={g.name} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(196,166,98,0.06)',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{g.name}</div><div className={styles.muted}>{g.tier} · {g.visits} stays</div></div>
                        <div className={styles.price}>{g.spent}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {tab==='Reservations'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Reservations<button className={styles.addBtn}>+ New Reservation</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Guest</th><th>Room</th><th>Check-in</th><th>Check-out</th><th>Nights</th><th>Total</th><th>Status</th></tr></thead>
                <tbody>{reservations.map(r=>(
                  <tr key={r.id}>
                    <td className={styles.muted}>{r.id}</td>
                    <td><div className={styles.bold}>{r.guest}</div></td>
                    <td className={styles.muted}>{r.room}</td>
                    <td className={styles.muted}>{r.checkin}</td>
                    <td className={styles.muted}>{r.checkout}</td>
                    <td className={styles.bold}>{r.nights}</td>
                    <td className={styles.price}>{r.total}</td>
                    <td><span className={`${styles.tag} ${styles[r.status]}`}>{statusLabel(r.status)}</span></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Rooms'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Room Overview</div>
              <table className={styles.table}>
                <thead><tr><th>Room</th><th>Type</th><th>Floor</th><th>Rate</th><th>Guest</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{rooms.map(r=>(
                  <tr key={r.number}>
                    <td><div className={styles.bold}>{r.number}</div></td>
                    <td><span className={styles.catChip}>{r.type}</span></td>
                    <td className={styles.muted}>Floor {r.floor}</td>
                    <td className={styles.price}>{r.rate}</td>
                    <td className={styles.muted}>{r.guest||'—'}</td>
                    <td><span className={`${styles.tag} ${styles[r.status]}`}>{statusLabel(r.status)}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Details</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='Guests'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Guest Register</div>
              <table className={styles.table}>
                <thead><tr><th>Guest</th><th>Nationality</th><th>Visits</th><th>Total Spent</th><th>Tier</th><th>Actions</th></tr></thead>
                <tbody>{guests.map(g=>(
                  <tr key={g.name}>
                    <td><div className={styles.bold}>{g.name}</div></td>
                    <td className={styles.muted}>{g.nationality}</td>
                    <td className={styles.bold}>{g.visits}</td>
                    <td className={styles.price}>{g.spent}</td>
                    <td><span className={styles.catChip}>{g.tier}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Profile</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
          {tab==='F&B'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Food & Beverage</div>
              {[
                {name:'The Grand Restaurant',type:'Fine Dining',status:'Open · 6pm–10pm'},
                {name:'The Terrace Bar',type:'Bar & Lounge',status:'Open · 12pm–1am'},
                {name:'The Library Café',type:'All-Day Café',status:'Open · 7am–6pm'},
                {name:'In-Room Dining',type:'24/7 Service',status:'Always Available'},
              ].map(f=>(
                <div key={f.name} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 0',borderBottom:'1px solid rgba(196,166,98,0.06)'}}>
                  <div><div className={styles.bold}>{f.name}</div><div className={styles.muted}>{f.type}</div></div>
                  <span className={`${styles.tag} ${styles.checkedin}`}>{f.status}</span>
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
                <thead><tr><th>Guest / Company</th><th>Source</th><th>Interest</th><th>Date</th><th>Status</th><th>Update</th></tr></thead>
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
                  <a href="/demos/hotel" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection==='rooms'&&(
                  <div className={styles.ecRooms}>
                    <div className={styles.ecSectionLabel}>ROOM CATEGORIES</div>
                    <div className={styles.ecRoomGrid}>
                      {['r1','r2','r3','r4','r5','r6'].map(k=>(
                        <div key={k} className={styles.ecRoomCard}>
                          <input className={`${styles.inlineInput} ${styles.ecRoomName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>HOTEL INFORMATION</div>
                    <div className={styles.ecContactGrid}>
                      {[['phone','📞 Reservations',content.phone],['email','✉️ Email',content.email],['address','📍 Address',content.address],['concierge','🎩 Concierge',content.concierge]].map(([k,label,val])=>(
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
