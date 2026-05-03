'use client'
import { useState } from 'react'
import styles from './page.module.css'

const listings = [
  { id:'ELV-001', address:'14 Kensington Park Rd', type:'Apartment', beds:2, baths:2, price:'$1,250,000', status:'active', views:342, enquiries:12, agent:'James Hartley', listed:'10 Apr 2025' },
  { id:'ELV-002', address:'7 Chelsea Embankment', type:'Townhouse', beds:4, baths:3, price:'$3,800,000', status:'active', views:289, enquiries:8, agent:'Sarah Chen', listed:'05 Apr 2025' },
  { id:'ELV-003', address:'22 Mayfair Place', type:'Penthouse', beds:3, baths:3, price:'$6,500,000', status:'under-offer', views:512, enquiries:24, agent:'James Hartley', listed:'01 Mar 2025' },
  { id:'ELV-004', address:'88 Notting Hill Gate', type:'Studio', beds:0, baths:1, price:'$620,000', status:'active', views:178, enquiries:6, agent:'Priya Kapoor', listed:'15 Apr 2025' },
  { id:'ELV-005', address:'3 Belgravia Square', type:'Detached House', beds:6, baths:5, price:'$12,000,000', status:'active', views:621, enquiries:31, agent:'Sarah Chen', listed:'20 Feb 2025' },
  { id:'ELV-006', address:'55 Knightsbridge Ave', type:'Apartment', beds:2, baths:2, price:'$1,900,000', status:'sold', views:408, enquiries:19, agent:'James Hartley', listed:'10 Jan 2025' },
]

const viewings = [
  { time:'9:30 AM', property:'14 Kensington Park Rd', client:'David & Emma Williams', agent:'James Hartley', type:'Second Viewing', status:'confirmed' },
  { time:'11:00 AM', property:'7 Chelsea Embankment', client:'Raj Mehta', agent:'Sarah Chen', type:'First Viewing', status:'confirmed' },
  { time:'1:30 PM', property:'88 Notting Hill Gate', client:'Chloe Patterson', agent:'Priya Kapoor', type:'First Viewing', status:'confirmed' },
  { time:'3:00 PM', property:'22 Mayfair Place', client:'Robert & Fiona King', agent:'James Hartley', type:'Third Viewing', status:'confirmed' },
  { time:'4:30 PM', property:'3 Belgravia Square', client:'Sheikh Al-Rashid', agent:'Sarah Chen', type:'Private Tour', status:'pending' },
]

const agents = [
  { name:'James Hartley', title:'Senior Partner', listings:3, viewings:2, sales:2, revenue:'$28,500k', rating:4.9 },
  { name:'Sarah Chen', title:'Associate Director', listings:2, viewings:2, sales:1, revenue:'$18,200k', rating:4.8 },
  { name:'Priya Kapoor', title:'Property Consultant', listings:1, viewings:1, sales:0, revenue:'$0', rating:4.7 },
]

const leadsData = [
  { id:1, name:'David Williams', email:'david@email.com', phone:'+44 7700 400 001', interest:'2-3 bed flat, Kensington', budget:'£1m–£2m', date:'23 Apr 2025', source:'Website', status:'new', note:'Relocating from NYC, needs by July' },
  { id:2, name:'Raj Mehta', email:'raj@email.com', phone:'+44 7700 400 002', interest:'4-bed townhouse, Chelsea', budget:'£3m–£5m', date:'22 Apr 2025', source:'Referral', status:'contacted', note:'Cash buyer, ready to move fast' },
  { id:3, name:'Chloe Patterson', email:'chloe@email.com', phone:'+44 7700 400 003', interest:'Studio, Notting Hill', budget:'£500k–£700k', date:'22 Apr 2025', source:'Google', status:'viewing-booked', note:'First viewing booked for today' },
  { id:4, name:'Sheikh Al-Rashid', email:'office@alrashid.ae', phone:'+971 50 400 004', interest:'6+ bed estate', budget:'£10m+', date:'21 Apr 2025', source:'Partner Referral', status:'qualified', note:'Discretion required, off-market preferred' },
  { id:5, name:'Marcus & Laura Bloom', email:'marcuslaura@email.com', phone:'+44 7700 400 005', interest:'3-bed family home', budget:'£2m–£3m', date:'20 Apr 2025', source:'Website', status:'contacted', note:'School catchment area important' },
  { id:6, name:'Yuki Tanaka', email:'yuki@corp.jp', phone:'+44 7700 400 006', interest:'Investment portfolio', budget:'£5m+', date:'19 Apr 2025', source:'Website', status:'new', note:'Looking for 3+ properties as investment' },
]

const initialContent = {
  badge:'🏠 London\'s Premier Property Specialists',
  heroHeadline:'Find Your\nForever Home.',
  heroSearchPlaceholder:'Search by area, postcode or property type...',
  heroSub:'Elevate Realty connects discerning buyers and sellers with London\'s finest residential properties.',
  cta1:'Browse Properties',
  cta2:'Book a Valuation',
  phone:'+44 20 7946 0800',
  email:'hello@elevaterealty.com',
  address:'1 Mayfair Square, London W1K 4PP',
  hours:'Mon–Fri: 9am – 6pm · Sat: 10am – 4pm',
  areas:['Kensington & Chelsea','Notting Hill','Mayfair','Belgravia','Chelsea'],
}

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, search bar, CTAs' },
  { id:'areas', label:'Featured Areas', preview:'5 neighbourhood cards' },
  { id:'contact', label:'Contact & Hours', preview:'Phone, email, address' },
  { id:'footer', label:'Footer', preview:'Tagline, social links' },
]

export default function RealEstateAdminDashboard() {
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
    { id:'listings', icon:'🏠', label:'Listings' },
    { id:'viewings', icon:'📅', label:'Viewings' },
    { id:'agents', icon:'👤', label:'Agents' },
    { id:'analytics', icon:'📊', label:'Analytics' },
    { id:'leads', icon:'📬', label:'Inbound Leads', badge: leads.filter(l=>l.status==='new').length },
    { id:'edit', icon:'✏️', label:'Edit Website' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}><div className={styles.brandName}>Elevate Realty</div><div className={styles.brandSub}>Admin Panel</div></div>
        <nav className={styles.sideNav}>
          {nav.map(n=>(
            <button key={n.id} className={`${styles.navItem} ${tab===n.id?styles.navActive:''}`} onClick={()=>setTab(n.id)}>
              <span className={styles.navIcon}>{n.icon}</span><span>{n.label}</span>
              {n.badge>0&&<span className={styles.navBadge}>{n.badge}</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/real-estate" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div><h1 className={styles.pageTitle}>{nav.find(n=>n.id===tab)?.label}</h1><p className={styles.pageDate}>Wednesday, 23 April 2025</p></div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>{leads.filter(l=>l.status==='new').length}</span></div>
            <div className={styles.avatar}>ER</div>
          </div>
        </header>

        <div className={styles.content}>
          {tab==='dashboard'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Active Listings',val:listings.filter(l=>l.status==='active').length,sub:'1 under offer · 1 sold',color:'#3b82f6'},
                {label:'Enquiries This Week',val:'52',sub:'↑ 14% vs last week',color:'#1B2A4A'},
                {label:'Viewings Today',val:viewings.length,sub:'1 pending confirmation',color:'#f59e0b'},
                {label:'Portfolio Value',val:'$26.1M',sub:'Active listings',color:'#34d399'},
              ].map(s=>(
                <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                  <div className={styles.statVal}>{s.val}</div><div className={styles.statLabel}>{s.label}</div><div className={styles.statSub}>{s.sub}</div>
                </div>
              ))}
            </div>
            <div className={styles.twoCol}>
              <div className={styles.panel}>
                <div className={styles.panelHead}><span>Active Listings</span><button className={styles.addBtn}>+ Add Listing</button></div>
                <table className={styles.table}>
                  <thead><tr><th>ID</th><th>Address</th><th>Type</th><th>Price</th><th>Views</th><th>Enquiries</th><th>Status</th></tr></thead>
                  <tbody>{listings.map(l=>(
                    <tr key={l.id}>
                      <td className={styles.muted}>{l.id}</td><td className={styles.bold}>{l.address}</td>
                      <td><span className={styles.catChip}>{l.type}</span></td>
                      <td className={styles.price}>{l.price}</td>
                      <td>{l.views}</td><td>{l.enquiries}</td>
                      <td><span className={`${styles.tag} ${styles['ls'+l.status.replace('-','')]}`}>{l.status}</span></td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
              <div className={styles.stackCol}>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Today's Viewings</div>
                  {viewings.map(v=>(
                    <div key={v.time+v.client} className={styles.viewingRow}>
                      <div className={styles.viewingTime}>{v.time}</div>
                      <div className={styles.viewingInfo}>
                        <div className={styles.bold}>{v.client}</div>
                        <div className={styles.muted}>{v.property}</div>
                      </div>
                      <span className={`${styles.tag} ${v.status==='confirmed'?styles.confirmed:styles.pending}`}>{v.status}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Agent Performance</div>
                  {agents.map(a=>(
                    <div key={a.name} className={styles.agentRow}>
                      <div className={styles.agentAvatar}>{a.name.split(' ').map(n=>n[0]).join('')}</div>
                      <div className={styles.agentInfo}><div className={styles.bold}>{a.name}</div><div className={styles.muted}>{a.title}</div></div>
                      <div className={styles.agentStats}><span className={styles.price}>{a.revenue}</span><span className={styles.muted}>{a.sales} sales</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>)}

          {tab==='listings'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>All Listings</span><button className={styles.addBtn}>+ Add Listing</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Address</th><th>Type</th><th>Beds</th><th>Baths</th><th>Price</th><th>Agent</th><th>Listed</th><th>Views</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{listings.map(l=>(
                  <tr key={l.id}>
                    <td className={styles.muted}>{l.id}</td><td className={styles.bold}>{l.address}</td>
                    <td><span className={styles.catChip}>{l.type}</span></td>
                    <td>{l.beds||'—'}</td><td>{l.baths}</td><td className={styles.price}>{l.price}</td>
                    <td>{l.agent}</td><td className={styles.muted}>{l.listed}</td><td>{l.views}</td>
                    <td><span className={`${styles.tag} ${styles['ls'+l.status.replace('-','')]}`}>{l.status}</span></td>
                    <td className={styles.actions}><button className={styles.rowBtn}>Edit</button><button className={styles.rowBtn}>Photos</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='viewings'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Today's Viewings</span><button className={styles.addBtn}>+ Schedule Viewing</button></div>
              <table className={styles.table}>
                <thead><tr><th>Time</th><th>Property</th><th>Client</th><th>Agent</th><th>Viewing Type</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{viewings.map(v=>(
                  <tr key={v.time+v.client}>
                    <td className={styles.muted}>{v.time}</td><td className={styles.bold}>{v.property}</td>
                    <td>{v.client}</td><td>{v.agent}</td>
                    <td><span className={styles.catChip}>{v.type}</span></td>
                    <td><span className={`${styles.tag} ${v.status==='confirmed'?styles.confirmed:styles.pending}`}>{v.status}</span></td>
                    <td className={styles.actions}><button className={styles.rowBtn}>Edit</button><button className={styles.rowBtnDanger}>Cancel</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='agents'&&(
            <div className={styles.agentsGrid}>
              {agents.map(a=>(
                <div key={a.name} className={styles.agentCard}>
                  <div className={styles.agentCardAvatar}>{a.name.split(' ').map(n=>n[0]).join('')}</div>
                  <div className={styles.agentCardName}>{a.name}</div>
                  <div className={styles.agentCardTitle}>{a.title}</div>
                  <div className={styles.agentCardStats}>
                    <div className={styles.acStat}><strong>{a.listings}</strong><span>Listings</span></div>
                    <div className={styles.acStat}><strong>{a.viewings}</strong><span>Viewings</span></div>
                    <div className={styles.acStat}><strong>{a.sales}</strong><span>Sales</span></div>
                    <div className={styles.acStat}><strong>{a.rating}★</strong><span>Rating</span></div>
                  </div>
                  <div className={styles.agentRevenue}>{a.revenue} pipeline</div>
                  <button className={styles.rowBtn} style={{width:'100%',padding:'9px',marginTop:8}}>View Profile</button>
                </div>
              ))}
            </div>
          )}

          {tab==='analytics'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Website Visitors',val:'4,820',sub:'This month',color:'#3b82f6'},
                {label:'Property Views',val:'12,340',sub:'Avg 15.2 per listing',color:'#f59e0b'},
                {label:'Enquiry Rate',val:'1.8%',sub:'Industry avg: 1.2%',color:'#34d399'},
                {label:'Avg Days to Sale',val:'23',sub:'Down from 31 last quarter',color:'#a78bfa'},
              ].map(s=>(
                <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                  <div className={styles.statVal}>{s.val}</div><div className={styles.statLabel}>{s.label}</div><div className={styles.statSub}>{s.sub}</div>
                </div>
              ))}
            </div>
            <div className={styles.panel}>
              <div className={styles.panelHead}>Listing Performance (30 days)</div>
              <table className={styles.table}>
                <thead><tr><th>Listing</th><th>Views</th><th>Enquiries</th><th>Viewings</th><th>Conv. Rate</th></tr></thead>
                <tbody>{listings.map(l=>(
                  <tr key={l.id}><td className={styles.bold}>{l.address}</td><td>{l.views}</td><td>{l.enquiries}</td><td>{Math.floor(l.enquiries*0.6)}</td><td className={styles.price}>{(l.enquiries/l.views*100).toFixed(1)}%</td></tr>
                ))}</tbody>
              </table>
            </div>
          </>)}

          {tab==='leads'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Total Leads',val:leads.length,color:'#3b82f6'},
                {label:'New',val:leads.filter(l=>l.status==='new').length,color:'#ef4444'},
                {label:'Viewing Booked',val:leads.filter(l=>l.status==='viewing-booked').length,color:'#34d399'},
                {label:'Qualified',val:leads.filter(l=>l.status==='qualified').length,color:'#f59e0b'},
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
                  {['all','new','contacted','qualified','viewing-booked'].map(f=>(
                    <button key={f} className={`${styles.filterBtn} ${leadFilter===f?styles.filterActive:''}`} onClick={()=>setLeadFilter(f)}>{f}</button>
                  ))}
                </div>
              </div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Interest</th><th>Budget</th><th>Source</th><th>Date</th><th>Note</th><th>Status</th><th>Update</th></tr></thead>
                <tbody>{filteredLeads.map(l=>(
                  <tr key={l.id}><td className={styles.bold}>{l.name}</td><td className={styles.muted}>{l.email}</td><td className={styles.muted}>{l.phone}</td>
                    <td className={styles.muted} style={{maxWidth:140,fontSize:11}}>{l.interest}</td>
                    <td><span className={styles.catChip}>{l.budget}</span></td>
                    <td className={styles.muted}>{l.source}</td><td className={styles.muted}>{l.date}</td>
                    <td className={styles.muted} style={{maxWidth:160,fontSize:11}}>{l.note}</td>
                    <td><span className={`${styles.tag} ${styles['ld'+l.status.replace('-','')]}`}>{l.status}</span></td>
                    <td><select className={styles.statusSelect} value={l.status} onChange={e=>updateLead(l.id,e.target.value)}>
                      <option value="new">New</option><option value="contacted">Contacted</option><option value="qualified">Qualified</option><option value="viewing-booked">Viewing Booked</option><option value="lost">Lost</option>
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
                  <a href="/demos/real-estate" target="_blank" className={styles.previewLink}>Preview site →</a>
                </div>
              </div>
              <div className={styles.editCanvas}>
                {editSection==='hero'&&(
                  <div className={styles.ecHero}>
                    <div className={styles.ecBadge}><input className={styles.inlineInput} value={content.badge} onChange={e=>setContent({...content,badge:e.target.value})} /></div>
                    <h1 className={styles.ecH1}><textarea className={`${styles.inlineInput} ${styles.inlineH1}`} value={content.heroHeadline} rows={2} onChange={e=>setContent({...content,heroHeadline:e.target.value})} /></h1>
                    <p className={styles.ecP}><textarea className={`${styles.inlineInput} ${styles.inlineP}`} value={content.heroSub} rows={2} onChange={e=>setContent({...content,heroSub:e.target.value})} /></p>
                    <div className={styles.ecSearchBar}>
                      <input className={`${styles.inlineInput} ${styles.ecSearchInput}`} value={content.heroSearchPlaceholder} onChange={e=>setContent({...content,heroSearchPlaceholder:e.target.value})} />
                      <div className={styles.ecSearchBtn}>Search</div>
                    </div>
                    <div className={styles.ecBtns}>
                      <div className={styles.ecBtn1}><input className={styles.inlineInput} value={content.cta1} onChange={e=>setContent({...content,cta1:e.target.value})} /></div>
                      <div className={styles.ecBtn2}><input className={styles.inlineInput} value={content.cta2} onChange={e=>setContent({...content,cta2:e.target.value})} /></div>
                    </div>
                  </div>
                )}
                {editSection==='areas'&&(
                  <div className={styles.ecAreas}>
                    <div className={styles.ecSectionLabel}>Featured Neighbourhoods</div>
                    <div className={styles.ecAreasGrid}>
                      {content.areas.map((a,i)=>(
                        <div key={i} className={styles.ecAreaCard}>
                          <input className={`${styles.inlineInput} ${styles.ecAreaName}`} value={a} onChange={e=>{const ar=[...content.areas];ar[i]=e.target.value;setContent({...content,areas:ar})}} />
                        </div>
                      ))}
                      <button className={styles.ecAddArea} onClick={()=>setContent({...content,areas:[...content.areas,'New Area']})}>+ Add Area</button>
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>Contact Information</div>
                    <div className={styles.ecContactGrid}>
                      {[['Phone',content.phone,'phone'],['Email',content.email,'email'],['Office Address',content.address,'address'],['Opening Hours',content.hours,'hours']].map(([label,val,key])=>(
                        <div key={key} className={styles.ecContactBlock}>
                          <div className={styles.ecFieldLabel}>{label}</div>
                          <textarea className={`${styles.inlineInput} ${styles.ecContactInput}`} value={val} rows={2} onChange={e=>setContent({...content,[key]:e.target.value})} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='footer'&&(
                  <div className={styles.ecFooter}>
                    <div className={styles.ecFooterInner}>
                      <div className={styles.ecFooterLogo}>Elevate Realty</div>
                      <p style={{color:'rgba(255,255,255,0.3)',fontSize:12,marginTop:8}}>© 2024 Elevate Realty · Mayfair, London</p>
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
