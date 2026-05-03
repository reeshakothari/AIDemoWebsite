'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Bookings','Packages','Destinations','Customers','Inbound Leads','Edit Website']

const bookings = [
  { id:'BK-001', customer:'Alice Moore', package:'Bali Escape 7N', pax:2, depart:'12 May 2026', amount:'$3,400', status:'confirmed' },
  { id:'BK-002', customer:'Tom & Sarah Webb', package:'Swiss Alps 10N', pax:2, depart:'20 Jun 2026', amount:'$6,200', status:'confirmed' },
  { id:'BK-003', customer:'Raj Kapoor', package:'Japan Explorer 12N', pax:4, depart:'01 Jul 2026', amount:'$9,800', status:'pending' },
  { id:'BK-004', customer:'Claire Dunne', package:'Santorini Honeymoon', pax:2, depart:'15 Aug 2026', amount:'$4,750', status:'confirmed' },
  { id:'BK-005', customer:'Mike Chen', package:'Peru & Machu Picchu', pax:3, depart:'03 Sep 2026', amount:'$7,100', status:'pending' },
]

const packages = [
  { name:'Bali Escape', duration:'7 nights', price:'$1,700/pp', sold:28, available:true },
  { name:'Swiss Alps Adventure', duration:'10 nights', price:'$3,100/pp', sold:14, available:true },
  { name:'Japan Explorer', duration:'12 nights', price:'$2,450/pp', sold:19, available:true },
  { name:'Santorini Honeymoon', duration:'8 nights', price:'$2,375/pp', sold:32, available:true },
  { name:'Peru & Machu Picchu', duration:'11 nights', price:'$2,367/pp', sold:11, available:false },
]

const destinations = [
  { name:'Bali, Indonesia', region:'Asia', bookings:28, rating:'4.9', trend:'↑' },
  { name:'Santorini, Greece', region:'Europe', bookings:32, rating:'4.8', trend:'↑' },
  { name:'Swiss Alps', region:'Europe', bookings:14, rating:'4.7', trend:'→' },
  { name:'Kyoto, Japan', region:'Asia', bookings:19, rating:'5.0', trend:'↑' },
  { name:'Cusco, Peru', region:'Americas', bookings:11, rating:'4.6', trend:'↓' },
]

const customers = [
  { name:'Alice Moore', trips:3, spent:'$8,400', last:'Apr 2026', tier:'Gold' },
  { name:'Tom & Sarah Webb', trips:2, spent:'$9,800', last:'Jun 2026', tier:'Gold' },
  { name:'Raj Kapoor', trips:1, spent:'$9,800', last:'Jul 2026', tier:'Silver' },
  { name:'Claire Dunne', trips:4, spent:'$14,200', last:'Aug 2026', tier:'Platinum' },
]

const initLeads = [
  { id:1, name:'Jessica Hart', source:'Instagram', interest:'Maldives Honeymoon', date:'22 Apr', status:'new' },
  { id:2, name:'Paul & Emma Davis', source:'Website', interest:'Europe 3-Country Tour', date:'21 Apr', status:'contacted' },
  { id:3, name:'Ananya Patel', source:'Referral', interest:'Solo Japan Trip', date:'20 Apr', status:'qualified' },
  { id:4, name:'Mark Okafor', source:'Google Ad', interest:'Family Safari Kenya', date:'19 Apr', status:'booked' },
  { id:5, name:'Fiona Leung', source:'Website', interest:'Santorini Getaway', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'destinations', label:'Top Destinations', preview:'6 destination cards' },
  { id:'contact', label:'Contact Info', preview:'Address, phone, hours' },
]

export default function TravelAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'🌍 Trusted by 10,000+ Travellers',
    heroHeadline:'The World Is Waiting. Let\'s Go.',
    heroSub:'Handcrafted journeys to the world\'s most breathtaking destinations. Stress-free, unforgettable, and built just for you.',
    cta1:'Explore Packages', cta2:'Plan My Trip',
    d1:'Bali, Indonesia', d2:'Santorini, Greece', d3:'Japanese Alps', d4:'Machu Picchu', d5:'Maldives', d6:'Swiss Alps',
    phone:'+1 (555) 887-TRIP', email:'hello@wanderlustco.com', address:'12 Explorer Blvd, Suite 3', hours:'Mon–Sat 9am–7pm',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>Wanderlust</span>Co</div>
          <div className={styles.brandSub}>ADMIN PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','🎫','📦','🗺️','👥','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/travel" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>WanderlustCo · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>3</span></div>
            <div className={styles.avatar}>WL</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Bookings This Month',val:'38',sub:'↑ 12 vs last month',color:'#f97316'},
                  {label:'Total Revenue',val:'$142K',sub:'April 2026',color:'#10b981'},
                  {label:'Active Packages',val:'12',sub:'2 fully booked',color:'#6366f1'},
                  {label:'Avg Booking Value',val:'$3,740',sub:'↑ 8% vs Mar',color:'#f59e0b'},
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
                  <div className={styles.panelHead}>Recent Bookings<span className={styles.chip}>5 shown</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Customer</th><th>Package</th><th>Depart</th><th>Amount</th><th>Status</th></tr></thead>
                    <tbody>{bookings.map(b=>(
                      <tr key={b.id}>
                        <td><div className={styles.bold}>{b.customer}</div><div className={styles.muted}>{b.pax} pax</div></td>
                        <td className={styles.muted}>{b.package}</td>
                        <td className={styles.muted}>{b.depart}</td>
                        <td className={styles.price}>{b.amount}</td>
                        <td><span className={`${styles.tag} ${styles[b.status]}`}>{b.status}</span></td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Destinations</div>
                    {destinations.map(d=>(
                      <div key={d.name} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #fff7f0',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{d.name}</div><div className={styles.muted}>{d.region}</div></div>
                        <div style={{textAlign:'right'}}><div className={styles.price}>{d.bookings} booked</div><div className={styles.muted}>⭐ {d.rating} {d.trend}</div></div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Package Performance</div>
                    {packages.slice(0,3).map(p=>(
                      <div key={p.name} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #fff7f0',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{p.name}</div><div className={styles.muted}>{p.duration}</div></div>
                        <div className={styles.price}>{p.sold} sold</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab==='Bookings'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>All Bookings<button className={styles.addBtn}>+ New Booking</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Customer</th><th>Package</th><th>Pax</th><th>Departure</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{bookings.map(b=>(
                  <tr key={b.id}>
                    <td className={styles.muted}>{b.id}</td>
                    <td><div className={styles.bold}>{b.customer}</div></td>
                    <td className={styles.muted}>{b.package}</td>
                    <td className={styles.bold}>{b.pax}</td>
                    <td className={styles.muted}>{b.depart}</td>
                    <td className={styles.price}>{b.amount}</td>
                    <td><span className={`${styles.tag} ${styles[b.status]}`}>{b.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>View</button><button className={styles.rowBtn}>Voucher</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Packages'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Travel Packages<button className={styles.addBtn}>+ Add Package</button></div>
              <table className={styles.table}>
                <thead><tr><th>Package</th><th>Duration</th><th>Price</th><th>Bookings</th><th>Available</th><th>Actions</th></tr></thead>
                <tbody>{packages.map(p=>(
                  <tr key={p.name}>
                    <td><div className={styles.bold}>{p.name}</div></td>
                    <td className={styles.muted}>{p.duration}</td>
                    <td className={styles.price}>{p.price}</td>
                    <td className={styles.bold}>{p.sold}</td>
                    <td><span className={`${styles.tag} ${p.available?styles.confirmed:styles.cancelled}`}>{p.available?'Open':'Full'}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button><button className={styles.rowBtn}>View</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Destinations'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Destinations<button className={styles.addBtn}>+ Add Destination</button></div>
              <table className={styles.table}>
                <thead><tr><th>Destination</th><th>Region</th><th>Bookings</th><th>Rating</th><th>Trend</th><th>Actions</th></tr></thead>
                <tbody>{destinations.map(d=>(
                  <tr key={d.name}>
                    <td><div className={styles.bold}>{d.name}</div></td>
                    <td><span className={styles.catChip}>{d.region}</span></td>
                    <td className={styles.bold}>{d.bookings}</td>
                    <td className={styles.muted}>⭐ {d.rating}</td>
                    <td className={styles.bold} style={{fontSize:16}}>{d.trend}</td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Customers'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Customer List<button className={styles.addBtn}>+ Add Customer</button></div>
              <table className={styles.table}>
                <thead><tr><th>Customer</th><th>Trips</th><th>Total Spent</th><th>Last Trip</th><th>Tier</th><th>Actions</th></tr></thead>
                <tbody>{customers.map(c=>(
                  <tr key={c.name}>
                    <td><div className={styles.bold}>{c.name}</div></td>
                    <td className={styles.bold}>{c.trips}</td>
                    <td className={styles.price}>{c.spent}</td>
                    <td className={styles.muted}>{c.last}</td>
                    <td><span className={styles.catChip}>{c.tier}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Profile</button></div></td>
                  </tr>
                ))}</tbody>
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
                  <a href="/demos/travel" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection==='destinations'&&(
                  <div className={styles.ecDestinations}>
                    <div className={styles.ecSectionLabel}>TOP DESTINATIONS</div>
                    <div className={styles.ecDestGrid}>
                      {['d1','d2','d3','d4','d5','d6'].map((k,i)=>(
                        <div key={k} className={styles.ecDestCard}>
                          <div style={{fontSize:28,marginBottom:8}}>{'🏝️🏔️🌸🗿🌊⛷️'[i]}</div>
                          <input className={`${styles.inlineInput} ${styles.ecDestName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
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
