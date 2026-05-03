'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Bookings','Vendors','Packages','Timeline','Inbound Leads','Edit Website']

const bookings = [
  { id:'WD-001', couple:'Emily & James Clarke', date:'14 Jun 2026', venue:'Rosewood Estate', guests:180, package:'Grand Romance', deposit:'paid', status:'confirmed' },
  { id:'WD-002', couple:'Priya & Rohan Mehta', date:'05 Jul 2026', venue:'The Grand Pavilion', guests:220, package:'Royal Affair', deposit:'paid', status:'confirmed' },
  { id:'WD-003', couple:'Sofia & Luca Bianchi', date:'02 Aug 2026', venue:'Lakeside Manor', guests:90, package:'Intimate Bloom', deposit:'pending', status:'pending' },
  { id:'WD-004', couple:'Aisha & Daniel Osei', date:'19 Sep 2026', venue:'Garden Terrace', guests:140, package:'Garden Dream', deposit:'pending', status:'deposit' },
  { id:'WD-005', couple:'Hannah & Tom Park', date:'31 Oct 2026', venue:'The Vineyard', guests:160, package:'Grand Romance', deposit:'paid', status:'confirmed' },
]

const vendors = [
  { name:'Blooms & Co', type:'Florist', contact:'blooms@co.com', rating:'5.0', booked:3 },
  { name:'Luminary Films', type:'Videography', contact:'luminary@films.com', rating:'4.9', booked:4 },
  { name:'Artisan Bakes', type:'Wedding Cake', contact:'artisan@bakes.com', rating:'4.8', booked:2 },
  { name:'Melody Strings', type:'Live Music', contact:'melody@strings.com', rating:'4.9', booked:5 },
  { name:'Golden Frame Photo', type:'Photography', contact:'golden@frame.com', rating:'5.0', booked:6 },
]

const packages = [
  { name:'Intimate Bloom', price:'$4,800', guests:'Up to 80', includes:'Coord, Florals, Decor', sold:8 },
  { name:'Garden Dream', price:'$8,500', guests:'Up to 150', includes:'Full coord, Photo, Florals', sold:12 },
  { name:'Grand Romance', price:'$14,000', guests:'Up to 200', includes:'All inclusive', sold:18 },
  { name:'Royal Affair', price:'$22,000', guests:'Unlimited', includes:'Bespoke luxury planning', sold:5 },
]

const initLeads = [
  { id:1, name:'Olivia & Mark Nash', source:'Instagram', interest:'Grand Romance Package', date:'22 Apr', status:'new' },
  { id:2, name:'Leila & Sam Frost', source:'Website', interest:'Garden Dream Package', date:'21 Apr', status:'contacted' },
  { id:3, name:'Chloe & Ben Turner', source:'Referral', interest:'Intimate Bloom', date:'20 Apr', status:'qualified' },
  { id:4, name:'Maya & Raj Patel', source:'Wedding Fair', interest:'Royal Affair', date:'19 Apr', status:'booked' },
  { id:5, name:'Grace & Tom Hall', source:'Google Ad', interest:'Garden Dream Package', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'packages', label:'Packages', preview:'4 wedding packages' },
  { id:'contact', label:'Contact Info', preview:'Address, phone, hours' },
]

export default function WeddingAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'🌸 Crafting Dream Weddings Since 2012',
    heroHeadline:'Your Perfect Day, Beautifully Planned.',
    heroSub:'From intimate garden ceremonies to grand ballroom affairs — we bring every detail of your dream wedding to life.',
    cta1:'Plan My Wedding', cta2:'View Packages',
    p1name:'Intimate Bloom', p1price:'$4,800',
    p2name:'Garden Dream', p2price:'$8,500',
    p3name:'Grand Romance', p3price:'$14,000',
    p4name:'Royal Affair', p4price:'$22,000',
    phone:'+1 (555) 423-LOVE', email:'hello@eternalbride.com', address:'18 Blossom Lane, Studio 2', hours:'Tue–Sat 10am–6pm',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Eternal Bride Co.</div>
          <div className={styles.brandSub}>PLANNER PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','💍','🤝','📦','📅','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/wedding" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Eternal Bride Co. · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>3</span></div>
            <div className={styles.avatar}>EB</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Upcoming Weddings',val:'5',sub:'Next: Jun 14',color:'#b56b5a'},
                  {label:'Total Revenue (2026)',val:'$248K',sub:'5 bookings',color:'#10b981'},
                  {label:'Avg Wedding Size',val:'158',sub:'guests per event',color:'#6366f1'},
                  {label:'Packages Sold (YTD)',val:'43',sub:'↑ 18 vs 2025',color:'#f59e0b'},
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
                  <div className={styles.panelHead}>Upcoming Weddings<span className={styles.chip}>5 booked</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Couple</th><th>Date</th><th>Venue</th><th>Guests</th><th>Status</th></tr></thead>
                    <tbody>{bookings.map(b=>(
                      <tr key={b.id}>
                        <td><div className={styles.bold}>{b.couple}</div><div className={styles.muted}>{b.package}</div></td>
                        <td className={styles.muted}>{b.date}</td>
                        <td className={styles.muted}>{b.venue}</td>
                        <td className={styles.bold}>{b.guests}</td>
                        <td><span className={`${styles.tag} ${styles[b.status]}`}>{b.status}</span></td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Vendors</div>
                    {vendors.map(v=>(
                      <div key={v.name} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid #fdf8f6',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{v.name}</div><div className={styles.muted}>{v.type}</div></div>
                        <div style={{textAlign:'right'}}><div className={styles.price}>⭐ {v.rating}</div><div className={styles.muted}>{v.booked} bookings</div></div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Package Sales</div>
                    {packages.map(p=>(
                      <div key={p.name} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #fdf8f6',fontSize:'13px'}}>
                        <div className={styles.bold}>{p.name}</div>
                        <div><span className={styles.price}>{p.price}</span> <span className={styles.muted}>· {p.sold} sold</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab==='Bookings'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Wedding Bookings<button className={styles.addBtn}>+ New Booking</button></div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Couple</th><th>Date</th><th>Venue</th><th>Guests</th><th>Package</th><th>Deposit</th><th>Status</th></tr></thead>
                <tbody>{bookings.map(b=>(
                  <tr key={b.id}>
                    <td className={styles.muted}>{b.id}</td>
                    <td><div className={styles.bold}>{b.couple}</div></td>
                    <td className={styles.muted}>{b.date}</td>
                    <td className={styles.muted}>{b.venue}</td>
                    <td className={styles.bold}>{b.guests}</td>
                    <td><span className={styles.catChip}>{b.package}</span></td>
                    <td><span className={`${styles.tag} ${b.deposit==='paid'?styles.confirmed:styles.pending}`}>{b.deposit}</span></td>
                    <td><span className={`${styles.tag} ${styles[b.status]}`}>{b.status}</span></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Vendors'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Vendor Directory<button className={styles.addBtn}>+ Add Vendor</button></div>
              <table className={styles.table}>
                <thead><tr><th>Vendor</th><th>Type</th><th>Contact</th><th>Rating</th><th>Bookings</th><th>Actions</th></tr></thead>
                <tbody>{vendors.map(v=>(
                  <tr key={v.name}>
                    <td><div className={styles.bold}>{v.name}</div></td>
                    <td><span className={styles.catChip}>{v.type}</span></td>
                    <td className={styles.muted}>{v.contact}</td>
                    <td className={styles.muted}>⭐ {v.rating}</td>
                    <td className={styles.bold}>{v.booked}</td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Contact</button><button className={styles.rowBtn}>Edit</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Packages'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Wedding Packages<button className={styles.addBtn}>+ Add Package</button></div>
              <table className={styles.table}>
                <thead><tr><th>Package</th><th>Price</th><th>Guest Limit</th><th>Includes</th><th>Sold</th><th>Actions</th></tr></thead>
                <tbody>{packages.map(p=>(
                  <tr key={p.name}>
                    <td><div className={styles.bold}>{p.name}</div></td>
                    <td className={styles.price}>{p.price}</td>
                    <td className={styles.muted}>{p.guests}</td>
                    <td className={styles.muted}>{p.includes}</td>
                    <td className={styles.bold}>{p.sold}</td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Edit</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Timeline'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Upcoming Wedding Timeline</div>
              {bookings.map(b=>(
                <div key={b.id} style={{display:'flex',gap:16,padding:'14px 0',borderBottom:'1px solid #fdf8f6'}}>
                  <div style={{width:100,fontSize:12,fontWeight:700,color:'#b56b5a',flexShrink:0}}>{b.date}</div>
                  <div>
                    <div className={styles.bold}>{b.couple}</div>
                    <div className={styles.muted}>{b.venue} · {b.guests} guests · {b.package}</div>
                  </div>
                  <span className={`${styles.tag} ${styles[b.status]}`} style={{marginLeft:'auto',alignSelf:'center'}}>{b.status}</span>
                </div>
              ))}
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
                <thead><tr><th>Couple</th><th>Source</th><th>Interest</th><th>Date</th><th>Status</th><th>Update</th></tr></thead>
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
                  <a href="/demos/wedding" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection==='packages'&&(
                  <div className={styles.ecPackages}>
                    <div className={styles.ecSectionLabel}>WEDDING PACKAGES</div>
                    <div className={styles.ecPkgGrid}>
                      {['p1','p2','p3','p4'].map(k=>(
                        <div key={k} className={styles.ecPkgCard}>
                          <input className={`${styles.inlineInput} ${styles.ecPkgName}`} value={content[k+'name']} onChange={e=>set(k+'name',e.target.value)}/>
                          <input className={`${styles.inlineInput} ${styles.ecPkgPrice}`} value={content[k+'price']} onChange={e=>set(k+'price',e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>CONTACT INFO</div>
                    <div className={styles.ecContactGrid}>
                      {[['phone','📞 Phone',content.phone],['email','✉️ Email',content.email],['address','📍 Studio',content.address],['hours','🕐 Hours',content.hours]].map(([k,label,val])=>(
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
