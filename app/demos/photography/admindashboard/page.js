'use client'
import { useState } from 'react'
import styles from './page.module.css'

const sessions = [
  { id:'LMN-001', client:'Sophia & James', type:'Wedding', date:'14 Jun 2025', location:'Kensington Palace Gardens', duration:'8 hrs', price:'£3,200', status:'confirmed', deliverables:'800+ edited images, album' },
  { id:'LMN-002', client:'Marcus Reid', type:'Portrait', date:'02 May 2025', location:'Studio', duration:'2 hrs', price:'£350', status:'confirmed', deliverables:'30 retouched images' },
  { id:'LMN-003', client:'Vogue UK', type:'Commercial', date:'28 Apr 2025', location:'Hyde Park', duration:'6 hrs', price:'£2,800', status:'in-progress', deliverables:'50 final selects, licensing' },
  { id:'LMN-004', client:'Chen Family', type:'Family', date:'26 Apr 2025', location:'Battersea Park', duration:'2 hrs', price:'£420', status:'confirmed', deliverables:'40 edited images' },
  { id:'LMN-005', client:'Oliver & Dana', type:'Engagement', date:'10 May 2025', location:'Richmond Park', duration:'3 hrs', price:'£680', status:'confirmed', deliverables:'60 images, 2 digital prints' },
  { id:'LMN-006', client:'Tara Flynn Maternity', type:'Maternity', date:'18 Apr 2025', location:'Studio', duration:'2 hrs', price:'£290', status:'delivered', deliverables:'25 retouched images' },
]

const packages = [
  { name:'Portrait Session', price:'£350', duration:'2 hrs', deliverables:'30 retouched images, online gallery', bookings:18, active:true },
  { name:'Family Session', price:'£420', duration:'2 hrs', deliverables:'40 retouched images, print release', bookings:12, active:true },
  { name:'Engagement', price:'£680', duration:'3 hrs', deliverables:'60 images, 2 digital prints', bookings:9, active:true },
  { name:'Wedding – Essentials', price:'£2,200', duration:'6 hrs', deliverables:'500+ images, online gallery', bookings:6, active:true },
  { name:'Wedding – Full Day', price:'£3,200', duration:'Full day', deliverables:'800+ images, fine art album', bookings:8, active:true },
  { name:'Commercial', price:'POA', duration:'Custom', deliverables:'Final selects + licensing', bookings:4, active:true },
  { name:'Headshots', price:'£180', duration:'1 hr', deliverables:'10 retouched images', bookings:24, active:true },
]

const gallery = [
  { title:'Sophia & James Wedding', type:'Wedding', images:842, status:'published', views:1240 },
  { title:'SS25 Vogue Commercial', type:'Commercial', images:50, status:'private', views:80 },
  { title:'Spring Portrait Series', type:'Portrait', images:120, status:'published', views:640 },
  { title:'Urban Architecture 2025', type:'Fine Art', images:60, status:'published', views:890 },
]

const leadsData = [
  { id:1, name:'Emma & Tom', email:'emma@email.com', phone:'+44 7700 500 001', interest:'Wedding – Full Day', date:'23 Apr 2025', source:'Instagram', status:'new', note:'August 2025 wedding, 200 guests' },
  { id:2, name:'Natasha Wright', email:'natasha@corp.com', phone:'+44 7700 500 002', interest:'Commercial', date:'22 Apr 2025', source:'Website', status:'contacted', note:'Fashion brand, 2-day shoot in June' },
  { id:3, name:'David Lin', email:'david@email.com', phone:'+44 7700 500 003', interest:'Headshots', date:'22 Apr 2025', source:'Google', status:'booked', note:'LinkedIn profile update' },
  { id:4, name:'The Rodrigues Family', email:'rods@email.com', phone:'+44 7700 500 004', interest:'Family Session', date:'21 Apr 2025', source:'Referral', status:'contacted', note:'3 kids, outdoor preferred' },
  { id:5, name:'Aria Kwan', email:'aria@agency.com', phone:'+44 7700 500 005', interest:'Commercial', date:'20 Apr 2025', source:'Website', status:'qualified', note:'Creative agency, ongoing retainer potential' },
  { id:6, name:'Oliver & Dana', email:'oliver@email.com', phone:'+44 7700 500 006', interest:'Engagement', date:'19 Apr 2025', source:'Instagram', status:'booked', note:'Engaged last week, want autumn outdoor' },
]

const initialContent = {
  badge:'📷 Fine Art Photography — London',
  heroHeadline:'Light.\nEmotion.\nTruth.',
  heroSub:'Capturing the moments that matter most — with artistry, precision, and a timeless eye.',
  cta1:'Book a Session',
  cta2:'View Portfolio',
  phone:'+44 20 7946 0250',
  email:'hello@lumenphotography.com',
  address:'Studio 4, Bermondsey Arts District, London SE1',
  hours:'Mon–Fri: 9am – 6pm · Weekends by appointment',
}

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, badge, CTAs' },
  { id:'packages', label:'Packages & Pricing', preview:'7 session packages' },
  { id:'gallery', label:'Gallery Sections', preview:'Portfolio categories' },
  { id:'contact', label:'Contact & Hours', preview:'Studio address, hours' },
]

export default function PhotographyAdminDashboard() {
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
    { id:'sessions', icon:'📅', label:'Sessions' },
    { id:'gallery', icon:'🖼️', label:'Gallery' },
    { id:'packages', icon:'📦', label:'Packages' },
    { id:'clients', icon:'👤', label:'Clients' },
    { id:'leads', icon:'📬', label:'Inbound Leads', badge: leads.filter(l=>l.status==='new').length },
    { id:'edit', icon:'✏️', label:'Edit Website' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}><div className={styles.brandName}>LUMEN</div><div className={styles.brandSub}>Admin Panel</div></div>
        <nav className={styles.sideNav}>
          {nav.map(n=>(
            <button key={n.id} className={`${styles.navItem} ${tab===n.id?styles.navActive:''}`} onClick={()=>setTab(n.id)}>
              <span className={styles.navIcon}>{n.icon}</span><span>{n.label}</span>
              {n.badge>0&&<span className={styles.navBadge}>{n.badge}</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/photography" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div><h1 className={styles.pageTitle}>{nav.find(n=>n.id===tab)?.label}</h1><p className={styles.pageDate}>Wednesday, 23 April 2025</p></div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>{leads.filter(l=>l.status==='new').length}</span></div>
            <div className={styles.avatar}>LM</div>
          </div>
        </header>

        <div className={styles.content}>
          {tab==='dashboard'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Sessions This Month',val:'9',sub:'3 weddings · 6 portrait',color:'#e2e8f0'},
                {label:'Monthly Revenue',val:'£8,940',sub:'↑ 22% vs last month',color:'#64748b'},
                {label:'Gallery Views',val:'2,770',sub:'Across 4 portfolios',color:'#94a3b8'},
                {label:'Pending Enquiries',val:leads.filter(l=>l.status==='new').length,sub:'Awaiting response',color:'#f59e0b'},
              ].map(s=>(
                <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                  <div className={styles.statVal}>{s.val}</div><div className={styles.statLabel}>{s.label}</div><div className={styles.statSub}>{s.sub}</div>
                </div>
              ))}
            </div>
            <div className={styles.twoCol}>
              <div className={styles.panel}>
                <div className={styles.panelHead}><span>Upcoming Sessions</span><span className={styles.chip}>{sessions.filter(s=>s.status!=='delivered').length} active</span></div>
                <table className={styles.table}>
                  <thead><tr><th>ID</th><th>Client</th><th>Type</th><th>Date</th><th>Location</th><th>Price</th><th>Status</th></tr></thead>
                  <tbody>{sessions.map(s=>(
                    <tr key={s.id}>
                      <td className={styles.muted}>{s.id}</td><td className={styles.bold}>{s.client}</td>
                      <td><span className={styles.catChip}>{s.type}</span></td>
                      <td className={styles.muted}>{s.date}</td><td className={styles.muted}>{s.location}</td>
                      <td className={styles.price}>{s.price}</td>
                      <td><span className={`${styles.tag} ${styles['ss'+s.status.replace('-','')]}`}>{s.status}</span></td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
              <div className={styles.stackCol}>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Top Packages</div>
                  {packages.sort((a,b)=>b.bookings-a.bookings).slice(0,5).map(p=>(
                    <div key={p.name} className={styles.pkgRow}>
                      <div className={styles.bold}>{p.name}</div>
                      <div className={styles.pkgRight}><span className={styles.muted}>{p.bookings} bookings</span><span className={styles.price}>{p.price}</span></div>
                    </div>
                  ))}
                </div>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Portfolio Galleries</div>
                  {gallery.map(g=>(
                    <div key={g.title} className={styles.galleryRow}>
                      <div>
                        <div className={styles.bold}>{g.title}</div>
                        <div className={styles.muted}>{g.images} images · {g.views} views</div>
                      </div>
                      <span className={`${styles.tag} ${g.status==='published'?styles.confirmed:styles.pending}`}>{g.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>)}

          {tab==='sessions'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>All Sessions</span><button className={styles.addBtn}>+ Add Session</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Client</th><th>Type</th><th>Date</th><th>Location</th><th>Duration</th><th>Price</th><th>Deliverables</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{sessions.map(s=>(
                  <tr key={s.id}>
                    <td className={styles.muted}>{s.id}</td><td className={styles.bold}>{s.client}</td>
                    <td><span className={styles.catChip}>{s.type}</span></td>
                    <td className={styles.muted}>{s.date}</td><td className={styles.muted}>{s.location}</td>
                    <td className={styles.muted}>{s.duration}</td><td className={styles.price}>{s.price}</td>
                    <td className={styles.muted} style={{fontSize:11,maxWidth:180}}>{s.deliverables}</td>
                    <td><span className={`${styles.tag} ${styles['ss'+s.status.replace('-','')]}`}>{s.status}</span></td>
                    <td className={styles.actions}><button className={styles.rowBtn}>Edit</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='gallery'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Portfolio Galleries</span><button className={styles.addBtn}>+ New Gallery</button></div>
              <table className={styles.table}>
                <thead><tr><th>Gallery Title</th><th>Type</th><th>Images</th><th>Views</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{gallery.map(g=>(
                  <tr key={g.title}>
                    <td className={styles.bold}>{g.title}</td>
                    <td><span className={styles.catChip}>{g.type}</span></td>
                    <td>{g.images}</td><td>{g.views}</td>
                    <td><span className={`${styles.tag} ${g.status==='published'?styles.confirmed:styles.pending}`}>{g.status}</span></td>
                    <td className={styles.actions}><button className={styles.rowBtn}>Edit</button><button className={styles.rowBtn}>Reorder</button><button className={styles.rowBtn}>{g.status==='published'?'Unpublish':'Publish'}</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='packages'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Session Packages</span><button className={styles.addBtn}>+ Add Package</button></div>
              <table className={styles.table}>
                <thead><tr><th>Package</th><th>Price</th><th>Duration</th><th>Deliverables</th><th>Bookings (30d)</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{packages.map(p=>(
                  <tr key={p.name}>
                    <td className={styles.bold}>{p.name}</td><td className={styles.price}>{p.price}</td>
                    <td className={styles.muted}>{p.duration}</td>
                    <td className={styles.muted} style={{fontSize:11,maxWidth:200}}>{p.deliverables}</td>
                    <td>{p.bookings}</td>
                    <td><span className={`${styles.tag} ${p.active?styles.confirmed:styles.pending}`}>{p.active?'Active':'Hidden'}</span></td>
                    <td className={styles.actions}><button className={styles.rowBtn}>Edit</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='clients'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Client Directory</span><span className={styles.chip}>{sessions.length} clients</span></div>
              <table className={styles.table}>
                <thead><tr><th>Client</th><th>Session Type</th><th>Date</th><th>Revenue</th><th>Status</th></tr></thead>
                <tbody>{sessions.map(s=>(
                  <tr key={s.id}><td className={styles.bold}>{s.client}</td><td><span className={styles.catChip}>{s.type}</span></td>
                    <td className={styles.muted}>{s.date}</td><td className={styles.price}>{s.price}</td>
                    <td><span className={`${styles.tag} ${styles['ss'+s.status.replace('-','')]}`}>{s.status}</span></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='leads'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Total Leads',val:leads.length,color:'#e2e8f0'},
                {label:'New',val:leads.filter(l=>l.status==='new').length,color:'#f59e0b'},
                {label:'Booked',val:leads.filter(l=>l.status==='booked').length,color:'#34d399'},
                {label:'Avg Response',val:'< 2 hrs',color:'#64748b'},
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
                <thead><tr><th>Client</th><th>Email</th><th>Phone</th><th>Session Interest</th><th>Source</th><th>Date</th><th>Note</th><th>Status</th><th>Update</th></tr></thead>
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
                  <a href="/demos/photography" target="_blank" className={styles.previewLink}>Preview site →</a>
                </div>
              </div>
              <div className={styles.editCanvas}>
                {editSection==='hero'&&(
                  <div className={styles.ecHero}>
                    <div className={styles.ecBadge}><input className={styles.inlineInput} value={content.badge} onChange={e=>setContent({...content,badge:e.target.value})} /></div>
                    <h1 className={styles.ecH1}><textarea className={`${styles.inlineInput} ${styles.inlineH1}`} value={content.heroHeadline} rows={3} onChange={e=>setContent({...content,heroHeadline:e.target.value})} /></h1>
                    <p className={styles.ecP}><textarea className={`${styles.inlineInput} ${styles.inlineP}`} value={content.heroSub} rows={2} onChange={e=>setContent({...content,heroSub:e.target.value})} /></p>
                    <div className={styles.ecBtns}>
                      <div className={styles.ecBtn1}><input className={styles.inlineInput} value={content.cta1} onChange={e=>setContent({...content,cta1:e.target.value})} /></div>
                      <div className={styles.ecBtn2}><input className={styles.inlineInput} value={content.cta2} onChange={e=>setContent({...content,cta2:e.target.value})} /></div>
                    </div>
                  </div>
                )}
                {editSection==='packages'&&(
                  <div className={styles.ecPackages}>
                    <div className={styles.ecSectionLabel}>Session Packages</div>
                    <div className={styles.ecPkgList}>
                      {packages.map((p,i)=>(
                        <div key={i} className={styles.ecPkgRow}>
                          <input className={`${styles.inlineInput} ${styles.ecPkgName}`} defaultValue={p.name} />
                          <input className={`${styles.inlineInput} ${styles.ecPkgPrice}`} defaultValue={p.price} />
                          <input className={`${styles.inlineInput} ${styles.ecPkgDelivery}`} defaultValue={p.deliverables} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='gallery'&&(
                  <div className={styles.ecGallery}>
                    <div className={styles.ecSectionLabel}>Portfolio Sections — shown on website</div>
                    <div className={styles.ecGalleryGrid}>
                      {gallery.map((g,i)=>(
                        <div key={i} className={styles.ecGalleryCard}>
                          <input className={`${styles.inlineInput} ${styles.ecGalleryTitle}`} defaultValue={g.title} />
                          <span className={styles.muted} style={{fontSize:11}}>{g.images} images</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>Contact & Studio Hours</div>
                    <div className={styles.ecContactGrid}>
                      {[['Phone',content.phone,'phone'],['Email',content.email,'email'],['Studio Address',content.address,'address'],['Opening Hours',content.hours,'hours']].map(([label,val,key])=>(
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
