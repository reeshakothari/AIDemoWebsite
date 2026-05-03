'use client'
import { useState } from 'react'
import styles from './page.module.css'

const appointments = [
  { time:'9:00 AM', client:'Sophie Laurent', service:'Balayage & Highlights', stylist:'Isabelle', status:'confirmed', duration:'120 min', price:'£120' },
  { time:'10:30 AM', client:'Mia Chen', service:'Classic Facial + Brow Shape', stylist:'Camille', status:'in-progress', duration:'75 min', price:'£85' },
  { time:'11:00 AM', client:'Priya Sharma', service:'Keratin Treatment', stylist:'Isabelle', status:'confirmed', duration:'120 min', price:'£180' },
  { time:'1:00 PM', client:'Rachel Moore', service:'Gel Manicure', stylist:'Lena', status:'confirmed', duration:'45 min', price:'£38' },
  { time:'2:30 PM', client:'Dana Wilkes', service:'Lash Extensions (Full Set)', stylist:'Camille', status:'pending', duration:'90 min', price:'£85' },
  { time:'4:00 PM', client:'Yuki Tanaka', service:'Full Colour + Blowout', stylist:'Isabelle', status:'confirmed', duration:'150 min', price:'£145' },
  { time:'5:30 PM', client:'Nina Ferreira', service:'Microblading Consultation', stylist:'Camille', status:'confirmed', duration:'30 min', price:'£0' },
]

const clients = [
  { name:'Sophie Laurent', email:'sophie@email.com', phone:'+44 7700 100001', visits:14, lastVisit:'18 Apr 2025', spent:'£1,620', fav:'Balayage', loyalty:'Gold' },
  { name:'Mia Chen', email:'mia@email.com', phone:'+44 7700 100002', visits:8, lastVisit:'23 Apr 2025', spent:'£680', fav:'Facial', loyalty:'Silver' },
  { name:'Priya Sharma', email:'priya@email.com', phone:'+44 7700 100003', visits:10, lastVisit:'20 Apr 2025', spent:'£1,180', fav:'Keratin', loyalty:'Gold' },
  { name:'Rachel Moore', email:'rachel@email.com', phone:'+44 7700 100004', visits:5, lastVisit:'23 Apr 2025', spent:'£290', fav:'Manicure', loyalty:'Bronze' },
  { name:'Yuki Tanaka', email:'yuki@email.com', phone:'+44 7700 100005', visits:17, lastVisit:'10 Apr 2025', spent:'£2,210', fav:'Balayage', loyalty:'Platinum' },
  { name:'Dana Wilkes', email:'dana@email.com', phone:'+44 7700 100006', visits:4, lastVisit:'02 Apr 2025', spent:'£320', fav:'Lash Extensions', loyalty:'Bronze' },
]

const services = [
  { name:'Balayage & Highlights', price:'£120', duration:'120 min', category:'Hair', bookings:34, active:true },
  { name:'Full Colour & Blowout', price:'£145', duration:'150 min', category:'Hair', bookings:28, active:true },
  { name:'Keratin Treatment', price:'£180', duration:'120 min', category:'Hair', bookings:19, active:true },
  { name:'Classic Facial', price:'£65', duration:'60 min', category:'Skincare', bookings:41, active:true },
  { name:'Lash Extensions (Full Set)', price:'£85', duration:'90 min', category:'Brow & Lash', bookings:37, active:true },
  { name:'Gel Manicure', price:'£38', duration:'45 min', category:'Nails', bookings:52, active:true },
  { name:'Microblading', price:'£320', duration:'180 min', category:'Brow & Lash', bookings:8, active:true },
  { name:'Bridal Package', price:'£350', duration:'240 min', category:'Bridal', bookings:4, active:false },
]

const reviews = [
  { name:'Sophie L.', rating:5, text:'Absolutely love my balayage! Isabelle is a genius.', date:'20 Apr 2025', service:'Balayage', replied:true },
  { name:'Priya S.', rating:5, text:'The keratin treatment lasted months. So worth it.', date:'18 Apr 2025', service:'Keratin', replied:false },
  { name:'Rachel M.', rating:4, text:'Great manicure, clean space, friendly staff.', date:'15 Apr 2025', service:'Manicure', replied:true },
  { name:'Yuki T.', rating:5, text:'Best salon in London hands down. 5 years and counting!', date:'12 Apr 2025', service:'Balayage', replied:true },
  { name:'Dana W.', rating:5, text:'Camille is incredible at lash extensions. So natural!', date:'08 Apr 2025', service:'Lash Extensions', replied:false },
]

const leadsData = [
  { id:1, name:'Olivia Bennett', email:'olivia@email.com', phone:'+44 7700 200001', service:'Balayage', date:'23 Apr 2025', source:'Website Form', status:'new', note:'Wants appointment within 2 weeks' },
  { id:2, name:'Amara Osei', email:'amara@email.com', phone:'+44 7700 200002', service:'Bridal Package', date:'22 Apr 2025', source:'Instagram', status:'contacted', note:'Wedding in July 2025' },
  { id:3, name:'Tara Flynn', email:'tara@email.com', phone:'+44 7700 200003', service:'Lash Extensions', date:'22 Apr 2025', source:'Google', status:'qualified', note:'Ready to book' },
  { id:4, name:'Jade Morrison', email:'jade@email.com', phone:'+44 7700 200004', service:'Facial', date:'21 Apr 2025', source:'Website Form', status:'new', note:'First-time client' },
  { id:5, name:'Chloe Wright', email:'chloe@email.com', phone:'+44 7700 200005', service:'Keratin Treatment', date:'20 Apr 2025', source:'Referral', status:'booked', note:'Referred by Sophie Laurent' },
  { id:6, name:'Nia James', email:'nia@email.com', phone:'+44 7700 200006', service:'Microblading', date:'19 Apr 2025', source:'Website Form', status:'contacted', note:'Has questions about aftercare' },
  { id:7, name:'Sara Patel', email:'sara@email.com', phone:'+44 7700 200007', service:'Balayage', date:'18 Apr 2025', source:'Google', status:'qualified', note:'Budget conscious, offered deal' },
  { id:8, name:'Emma Walsh', email:'emma@email.com', phone:'+44 7700 200008', service:'Gel Manicure', date:'17 Apr 2025', source:'Website Form', status:'booked', note:'Monthly standing appointment' },
]

const initialContent = {
  badge:'🌸 Award-Winning London Salon',
  heroHeadline:'Where Beauty\nMeets Artistry.',
  heroSub:"Lumière is London's premier destination for hair, skin, and nail artistry — where every visit is a signature experience.",
  cta1:'Book Your Experience',
  cta2:'Explore Services',
  phone:'+44 20 7946 0321',
  email:'hello@lumiere-salon.com',
  address:'14 Kensington Row, London W8 5SF',
  hours:'Mon–Sat 9am – 7pm · Sun 10am – 5pm',
  footerTagline:'© 2024 Lumière Beauty Salon · Kensington, London',
  services:[
    { name:'Balayage & Highlights', price:'£120', desc:'Sun-kissed colour tailored to your skin tone.' },
    { name:'Keratin Treatment', price:'£180', desc:'12-week frizz-free transformation.' },
    { name:'Classic Facial', price:'£65', desc:'Deep-cleanse and hydration therapy.' },
    { name:'Lash Extensions', price:'£85', desc:'Natural-looking volume and length.' },
    { name:'Gel Manicure', price:'£38', desc:'Chip-free colour lasting 3 weeks.' },
    { name:'Microblading', price:'£320', desc:'Semi-permanent brow definition.' },
  ],
}

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, badge, CTAs' },
  { id:'services', label:'Services & Pricing', preview:'6 service cards' },
  { id:'contact', label:'Contact & Hours', preview:'Phone, email, address' },
  { id:'footer', label:'Footer', preview:'Tagline, social links' },
]

export default function BeautyAdminDashboard() {
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
    { id:'appointments', icon:'📅', label:'Appointments' },
    { id:'clients', icon:'👤', label:'Clients' },
    { id:'services', icon:'✂️', label:'Services' },
    { id:'reviews', icon:'⭐', label:'Reviews' },
    { id:'leads', icon:'📬', label:'Inbound Leads', badge: leads.filter(l=>l.status==='new').length },
    { id:'edit', icon:'✏️', label:'Edit Website' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}><div className={styles.brandName}>Lumière</div><div className={styles.brandSub}>Admin Panel</div></div>
        <nav className={styles.sideNav}>
          {nav.map(n=>(
            <button key={n.id} className={`${styles.navItem} ${tab===n.id?styles.navActive:''}`} onClick={()=>setTab(n.id)}>
              <span className={styles.navIcon}>{n.icon}</span>
              <span>{n.label}</span>
              {n.badge>0&&<span className={styles.navBadge}>{n.badge}</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/beauty-salon" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <h1 className={styles.pageTitle}>{nav.find(n=>n.id===tab)?.label}</h1>
            <p className={styles.pageDate}>Wednesday, 23 April 2025</p>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>{leads.filter(l=>l.status==='new').length}</span></div>
            <div className={styles.avatar}>IS</div>
          </div>
        </header>

        <div className={styles.content}>

          {tab==='dashboard'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Bookings Today',val:'7',sub:'↑ 1 from yesterday',color:'#e9a0b8'},
                {label:'Monthly Revenue',val:'£12,400',sub:'↑ 18% vs last month',color:'#c9956c'},
                {label:'New Clients',val:'24',sub:'This month',color:'#a78bfa'},
                {label:'Avg. Rating',val:'4.9★',sub:'From 340+ reviews',color:'#34d399'},
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
                <div className={styles.panelHead}><span>Today's Appointments</span><span className={styles.chip}>{appointments.length} total</span></div>
                <table className={styles.table}>
                  <thead><tr><th>Time</th><th>Client</th><th>Service</th><th>Stylist</th><th>Price</th><th>Status</th></tr></thead>
                  <tbody>{appointments.map(a=>(
                    <tr key={a.time}><td className={styles.muted}>{a.time}</td><td className={styles.bold}>{a.client}</td><td>{a.service}</td><td>{a.stylist}</td><td className={styles.price}>{a.price}</td><td><span className={`${styles.tag} ${styles[a.status.replace('-','')]}`}>{a.status}</span></td></tr>
                  ))}</tbody>
                </table>
              </div>
              <div className={styles.stackCol}>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Top Services This Month</div>
                  {[['Balayage',88],['Lash Extensions',72],['Facials',65],['Manicures',58],['Keratin',44]].map(([n,p])=>(
                    <div key={n} className={styles.barRow}><span className={styles.barLabel}>{n}</span><div className={styles.barTrack}><div className={styles.barFill} style={{width:p+'%'}}/></div><span className={styles.barPct}>{p}%</span></div>
                  ))}
                </div>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Recent Reviews</div>
                  {reviews.slice(0,3).map(r=>(
                    <div key={r.name} className={styles.reviewItem}>
                      <div className={styles.reviewTop}><strong>{r.name}</strong><span className={styles.stars}>{'★'.repeat(r.rating)}</span></div>
                      <p>{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>)}

          {tab==='appointments'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Today's Appointments</span><button className={styles.addBtn}>+ New Booking</button></div>
              <table className={styles.table}>
                <thead><tr><th>Time</th><th>Client</th><th>Service</th><th>Duration</th><th>Stylist</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{appointments.map(a=>(
                  <tr key={a.time}><td className={styles.muted}>{a.time}</td><td className={styles.bold}>{a.client}</td><td>{a.service}</td><td>{a.duration}</td><td>{a.stylist}</td><td className={styles.price}>{a.price}</td><td><span className={`${styles.tag} ${styles[a.status.replace('-','')]}`}>{a.status}</span></td><td className={styles.actions}><button className={styles.rowBtn}>Edit</button><button className={styles.rowBtnDanger}>Cancel</button></td></tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='clients'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Client Directory</span><span className={styles.chip}>{clients.length} shown · 248 total</span></div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Visits</th><th>Last Visit</th><th>Total Spent</th><th>Favourite</th><th>Loyalty</th></tr></thead>
                <tbody>{clients.map(c=>(
                  <tr key={c.name}><td className={styles.bold}>{c.name}</td><td className={styles.muted}>{c.email}</td><td className={styles.muted}>{c.phone}</td><td>{c.visits}</td><td className={styles.muted}>{c.lastVisit}</td><td className={styles.price}>{c.spent}</td><td>{c.fav}</td><td><span className={`${styles.loyalty} ${styles['ly'+c.loyalty.toLowerCase()]}`}>{c.loyalty}</span></td></tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='services'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Service Menu</span><button className={styles.addBtn}>+ Add Service</button></div>
              <table className={styles.table}>
                <thead><tr><th>Service Name</th><th>Category</th><th>Price</th><th>Duration</th><th>Bookings (30d)</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{services.map(s=>(
                  <tr key={s.name}><td className={styles.bold}>{s.name}</td><td><span className={styles.catChip}>{s.category}</span></td><td className={styles.price}>{s.price}</td><td className={styles.muted}>{s.duration}</td><td>{s.bookings}</td><td><span className={`${styles.tag} ${s.active?styles.confirmed:styles.pending}`}>{s.active?'Active':'Inactive'}</span></td><td className={styles.actions}><button className={styles.rowBtn}>Edit</button></td></tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='reviews'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>All Reviews</span><span className={styles.chip}>4.9★ avg from 340 reviews</span></div>
              <div className={styles.reviewGrid}>
                {reviews.map((r,i)=>(
                  <div key={i} className={styles.reviewCard}>
                    <div className={styles.reviewTop}><strong>{r.name}</strong><span className={styles.stars}>{'★'.repeat(r.rating)}</span></div>
                    <div className={styles.reviewService}>{r.service} · {r.date}</div>
                    <p>{r.text}</p>
                    {!r.replied&&<button className={styles.rowBtn} style={{marginTop:8}}>Reply</button>}
                    {r.replied&&<span className={styles.muted} style={{fontSize:11,marginTop:8,display:'block'}}>✓ Replied</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab==='leads'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Total Leads',val:leads.length,color:'#e9a0b8'},
                {label:'New Today',val:leads.filter(l=>l.date==='23 Apr 2025').length,color:'#c9956c'},
                {label:'Contacted',val:leads.filter(l=>l.status==='contacted').length,color:'#a78bfa'},
                {label:'Conversion Rate',val:'62%',color:'#34d399'},
              ].map(s=>(
                <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                  <div className={styles.statVal}>{s.val}</div>
                  <div className={styles.statLabel}>{s.label}</div>
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
                <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Service Interest</th><th>Source</th><th>Date</th><th>Note</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>{filteredLeads.map(l=>(
                  <tr key={l.id}><td className={styles.bold}>{l.name}</td><td className={styles.muted}>{l.email}</td><td className={styles.muted}>{l.phone}</td><td>{l.service}</td><td><span className={styles.catChip}>{l.source}</span></td><td className={styles.muted}>{l.date}</td><td className={styles.muted} style={{maxWidth:180,fontSize:11}}>{l.note}</td><td><span className={`${styles.tag} ${styles['ld'+l.status]}`}>{l.status}</span></td>
                  <td className={styles.actions}>
                    <select className={styles.statusSelect} value={l.status} onChange={e=>updateLead(l.id,e.target.value)}>
                      <option value="new">New</option><option value="contacted">Contacted</option><option value="qualified">Qualified</option><option value="booked">Booked</option><option value="lost">Lost</option>
                    </select>
                  </td></tr>
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
                  <a href="/demos/beauty-salon" target="_blank" className={styles.previewLink}>Preview site →</a>
                </div>
              </div>

              <div className={styles.editCanvas}>
                {editSection==='hero'&&(
                  <div className={styles.ecHero}>
                    <div className={styles.ecHeroInner}>
                      <div className={styles.ecBadge}>
                        <input className={styles.inlineInput} value={content.badge} onChange={e=>setContent({...content,badge:e.target.value})} />
                      </div>
                      <h1 className={styles.ecH1}>
                        <textarea className={`${styles.inlineInput} ${styles.inlineH1}`} value={content.heroHeadline} rows={2} onChange={e=>setContent({...content,heroHeadline:e.target.value})} />
                      </h1>
                      <p className={styles.ecP}>
                        <textarea className={`${styles.inlineInput} ${styles.inlineP}`} value={content.heroSub} rows={3} onChange={e=>setContent({...content,heroSub:e.target.value})} />
                      </p>
                      <div className={styles.ecBtns}>
                        <div className={styles.ecBtn1}><input className={styles.inlineInput} value={content.cta1} onChange={e=>setContent({...content,cta1:e.target.value})} /></div>
                        <div className={styles.ecBtn2}><input className={styles.inlineInput} value={content.cta2} onChange={e=>setContent({...content,cta2:e.target.value})} /></div>
                      </div>
                    </div>
                    <div className={styles.ecHeroBlob}/>
                  </div>
                )}
                {editSection==='services'&&(
                  <div className={styles.ecServices}>
                    <div className={styles.ecSectionLabel}>Services & Pricing</div>
                    <div className={styles.ecServGrid}>
                      {content.services.map((s,i)=>(
                        <div key={i} className={styles.ecServCard}>
                          <input className={`${styles.inlineInput} ${styles.ecServName}`} value={s.name} onChange={e=>{const sv=[...content.services];sv[i]={...s,name:e.target.value};setContent({...content,services:sv})}} />
                          <input className={`${styles.inlineInput} ${styles.ecServPrice}`} value={s.price} onChange={e=>{const sv=[...content.services];sv[i]={...s,price:e.target.value};setContent({...content,services:sv})}} />
                          <textarea className={`${styles.inlineInput} ${styles.ecServDesc}`} value={s.desc} rows={2} onChange={e=>{const sv=[...content.services];sv[i]={...s,desc:e.target.value};setContent({...content,services:sv})}} />
                        </div>
                      ))}
                    </div>
                    <button className={styles.addBtn} onClick={()=>setContent({...content,services:[...content.services,{name:'New Service',price:'£0',desc:''}]})}>+ Add Service</button>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>Contact & Hours</div>
                    <div className={styles.ecContactGrid}>
                      <div className={styles.ecContactBlock}>
                        <div className={styles.ecFieldLabel}>Phone Number</div>
                        <input className={`${styles.inlineInput} ${styles.ecContactInput}`} value={content.phone} onChange={e=>setContent({...content,phone:e.target.value})} />
                      </div>
                      <div className={styles.ecContactBlock}>
                        <div className={styles.ecFieldLabel}>Email Address</div>
                        <input className={`${styles.inlineInput} ${styles.ecContactInput}`} value={content.email} onChange={e=>setContent({...content,email:e.target.value})} />
                      </div>
                      <div className={styles.ecContactBlock}>
                        <div className={styles.ecFieldLabel}>Salon Address</div>
                        <input className={`${styles.inlineInput} ${styles.ecContactInput}`} value={content.address} onChange={e=>setContent({...content,address:e.target.value})} />
                      </div>
                      <div className={styles.ecContactBlock}>
                        <div className={styles.ecFieldLabel}>Opening Hours</div>
                        <textarea className={`${styles.inlineInput} ${styles.ecContactInput}`} rows={2} value={content.hours} onChange={e=>setContent({...content,hours:e.target.value})} />
                      </div>
                    </div>
                  </div>
                )}
                {editSection==='footer'&&(
                  <div className={styles.ecFooter}>
                    <div className={styles.ecFooterInner}>
                      <div className={styles.ecFooterLogo}><input className={styles.inlineInput} style={{color:'#c9956c',fontWeight:900,fontSize:22}} value="Lumière" readOnly /></div>
                      <textarea className={`${styles.inlineInput} ${styles.ecFooterTagline}`} value={content.footerTagline} rows={2} onChange={e=>setContent({...content,footerTagline:e.target.value})} />
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
