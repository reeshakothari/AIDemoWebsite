'use client'
import { useState } from 'react'
import styles from './page.module.css'

const reservations = [
  { time:'12:00 PM', name:'James Whitmore', covers:4, table:'T-3', phone:'+1 555 100 0001', status:'seated', note:'Window seat', deposit:'£40' },
  { time:'12:30 PM', name:'Chen Family', covers:6, table:'T-7', phone:'+1 555 100 0002', status:'seated', note:'Birthday cake arranged', deposit:'£60' },
  { time:'1:00 PM', name:'Fatima Al-Rashid', covers:2, table:'T-1', phone:'+1 555 100 0003', status:'confirmed', note:'', deposit:'£20' },
  { time:'2:00 PM', name:'The Garcias', covers:5, table:'T-9', phone:'+1 555 100 0004', status:'confirmed', note:'Gluten-free', deposit:'£50' },
  { time:'6:30 PM', name:'Marcus & Laura', covers:2, table:'T-2', phone:'+1 555 100 0005', status:'confirmed', note:'Anniversary', deposit:'£20' },
  { time:'7:00 PM', name:'Patel Party', covers:8, table:'T-12', phone:'+1 555 100 0006', status:'pending', note:'Pre-order submitted', deposit:'£80' },
  { time:'7:30 PM', name:'Oliver Stone', covers:3, table:'T-5', phone:'+1 555 100 0007', status:'confirmed', note:'', deposit:'£30' },
  { time:'8:00 PM', name:'Yuki Nishimura', covers:2, table:'T-4', phone:'+1 555 100 0008', status:'pending', note:'', deposit:'£0' },
]

const menuItems = [
  { section:'Starters', name:'Oak-Smoked Salmon', price:'$26', orders:51, allergens:'Fish', active:true },
  { section:'Starters', name:'Lobster Bisque', price:'$33', orders:19, allergens:'Shellfish', active:true },
  { section:'Starters', name:'Burrata & Heritage Tomato', price:'$22', orders:34, allergens:'Dairy', active:true },
  { section:'Mains', name:'Wagyu Ribeye 45-day', price:'$55', orders:34, allergens:'None', active:true },
  { section:'Mains', name:'Truffle Risotto', price:'$31', orders:28, allergens:'Gluten, Dairy', active:true },
  { section:'Mains', name:'Pan-Seared Sea Bass', price:'$38', orders:22, allergens:'Fish', active:true },
  { section:'Desserts', name:'Chocolate Fondant', price:'$16', orders:44, allergens:'Gluten, Dairy, Eggs', active:true },
  { section:'Desserts', name:'Crème Brûlée', price:'$14', orders:31, allergens:'Dairy, Eggs', active:true },
]

const tables = [
  { id:'T-1', cap:2, status:'occupied' }, { id:'T-2', cap:2, status:'available' },
  { id:'T-3', cap:4, status:'occupied' }, { id:'T-4', cap:2, status:'reserved' },
  { id:'T-5', cap:3, status:'available' }, { id:'T-6', cap:4, status:'occupied' },
  { id:'T-7', cap:6, status:'occupied' }, { id:'T-8', cap:4, status:'available' },
  { id:'T-9', cap:5, status:'reserved' }, { id:'T-10', cap:2, status:'available' },
  { id:'T-11', cap:8, status:'available' }, { id:'T-12', cap:8, status:'reserved' },
]

const staff = [
  { name:'Remy Leclair', role:'Head Chef', shift:'12pm–11pm', status:'on-duty', orders:24, rating:4.9 },
  { name:'Isabela Sousa', role:'Sous Chef', shift:'12pm–11pm', status:'on-duty', orders:24, rating:4.8 },
  { name:'Daniel Park', role:'Floor Manager', shift:'11am–11pm', status:'on-duty', orders:0, rating:4.9 },
  { name:'Chloe Martin', role:'Head Sommelier', shift:'5pm–11pm', status:'scheduled', orders:0, rating:5.0 },
  { name:'Tom Okafor', role:'Senior Waiter', shift:'12pm–9pm', status:'on-duty', orders:0, rating:4.7 },
]

const leadsData = [
  { id:1, name:'Henry Bradford', email:'henry@corp.com', phone:'+1 555 200 001', type:'Private Dining', date:'23 Apr 2025', source:'Website', status:'new', note:'Corporate dinner for 20, May 15th' },
  { id:2, name:'Aria Kwan', email:'aria@email.com', phone:'+1 555 200 002', type:'Reservation', date:'22 Apr 2025', source:'Google', status:'contacted', note:'Anniversary dinner, needs champagne' },
  { id:3, name:'The Morrison Wedding', email:'sarah@email.com', phone:'+1 555 200 003', type:'Event Buyout', date:'22 Apr 2025', source:'Referral', status:'qualified', note:'Full restaurant buyout, June 14th' },
  { id:4, name:'DataCo Ltd.', email:'events@dataco.com', phone:'+1 555 200 004', type:'Corporate Lunch', date:'21 Apr 2025', source:'Website', status:'new', note:'Monthly team lunch, 15 covers' },
  { id:5, name:'Priya Nair', email:'priya@email.com', phone:'+1 555 200 005', type:'Reservation', date:'20 Apr 2025', source:'Instagram', status:'booked', note:'Birthday party for 8' },
  { id:6, name:"Chef's Table Inquiry", email:'marcus@email.com', phone:'+1 555 200 006', type:"Chef's Table", date:'19 Apr 2025', source:'Website', status:'contacted', note:"Interested in full chef's table experience" },
]

const initialContent = {
  badge:'🔥 Open for Dinner — Reserve Tonight',
  heroHeadline:'Where Fire Meets\nFlavour.',
  heroSub:'An intimate dining experience crafted around the art of slow cooking and open fire.',
  cta1:'Reserve Your Table',
  cta2:'View Menu',
  phone:'+1 (555) 020-EMBER',
  email:'reservations@emberandoak.com',
  address:'42 Fireside Lane, Downtown District',
  hours:'Tue–Thu: 6pm–10pm · Fri–Sat: 5:30pm–11pm · Sun: 5pm–9pm',
  footerTagline:'© 2024 Ember & Oak · Reservations: +1 (555) 020-EMBER',
}

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, badge, CTAs' },
  { id:'menu', label:'Menu Highlights', preview:'Featured dishes preview' },
  { id:'contact', label:'Contact & Hours', preview:'Phone, hours, address' },
  { id:'footer', label:'Footer', preview:'Tagline, links' },
]

export default function RestaurantAdminDashboard() {
  const [tab, setTab] = useState('dashboard')
  const [editSection, setEditSection] = useState('hero')
  const [content, setContent] = useState(initialContent)
  const [leads, setLeads] = useState(leadsData)
  const [leadFilter, setLeadFilter] = useState('all')
  const [saved, setSaved] = useState(false)
  const [menu, setMenu] = useState(menuItems)

  function handleSave() { setSaved(true); setTimeout(()=>setSaved(false),2500) }
  function updateLead(id, status) { setLeads(leads.map(l=>l.id===id?{...l,status}:l)) }
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  const nav = [
    { id:'dashboard', icon:'⬡', label:'Dashboard' },
    { id:'reservations', icon:'📅', label:'Reservations' },
    { id:'tables', icon:'🪑', label:'Table Status' },
    { id:'menu', icon:'🍽️', label:'Menu Manager' },
    { id:'staff', icon:'👨‍🍳', label:'Staff & Kitchen' },
    { id:'leads', icon:'📬', label:'Inbound Leads', badge: leads.filter(l=>l.status==='new').length },
    { id:'edit', icon:'✏️', label:'Edit Website' },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}><div className={styles.brandName}>Ember & Oak</div><div className={styles.brandSub}>Admin Panel</div></div>
        <nav className={styles.sideNav}>
          {nav.map(n=>(
            <button key={n.id} className={`${styles.navItem} ${tab===n.id?styles.navActive:''}`} onClick={()=>setTab(n.id)}>
              <span className={styles.navIcon}>{n.icon}</span><span>{n.label}</span>
              {n.badge>0&&<span className={styles.navBadge}>{n.badge}</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/restaurant" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div><h1 className={styles.pageTitle}>{nav.find(n=>n.id===tab)?.label}</h1><p className={styles.pageDate}>Wednesday, 23 April 2025</p></div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>{leads.filter(l=>l.status==='new').length}</span></div>
            <div className={styles.avatar}>EO</div>
          </div>
        </header>

        <div className={styles.content}>
          {tab==='dashboard'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Covers Today',val:'84',sub:'Across 8 reservations',color:'#c9956c'},
                {label:"Today's Revenue",val:'$3,240',sub:'↑ 12% vs last Wed',color:'#f59e0b'},
                {label:'Pending Bookings',val:reservations.filter(r=>r.status==='pending').length,sub:'Awaiting confirmation',color:'#ef4444'},
                {label:'Avg Order Value',val:'$38',sub:'Up from $34 last week',color:'#34d399'},
              ].map(s=>(
                <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                  <div className={styles.statVal}>{s.val}</div><div className={styles.statLabel}>{s.label}</div><div className={styles.statSub}>{s.sub}</div>
                </div>
              ))}
            </div>
            <div className={styles.twoCol}>
              <div className={styles.panel}>
                <div className={styles.panelHead}><span>Today's Reservations</span><span className={styles.chip}>{reservations.length} bookings</span></div>
                <table className={styles.table}>
                  <thead><tr><th>Time</th><th>Guest</th><th>Covers</th><th>Table</th><th>Deposit</th><th>Note</th><th>Status</th></tr></thead>
                  <tbody>{reservations.map(r=>(
                    <tr key={r.time+r.name}>
                      <td className={styles.muted}>{r.time}</td><td className={styles.bold}>{r.name}</td><td>{r.covers}</td>
                      <td><span className={styles.tableChip}>{r.table}</span></td>
                      <td className={styles.price}>{r.deposit}</td>
                      <td className={styles.muted}>{r.note||'—'}</td>
                      <td><span className={`${styles.tag} ${styles[r.status]}`}>{r.status}</span></td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
              <div className={styles.stackCol}>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Top Dishes This Week</div>
                  {menuItems.sort((a,b)=>b.orders-a.orders).slice(0,5).map(d=>(
                    <div key={d.name} className={styles.dishRow}>
                      <div className={styles.dishName}>{d.name}</div>
                      <div className={styles.dishRight}><span className={styles.muted}>{d.orders} orders</span><strong className={styles.price}>{d.price}</strong></div>
                    </div>
                  ))}
                </div>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>Floor Status</div>
                  <div className={styles.floorGrid}>
                    {tables.map(t=>(
                      <div key={t.id} className={`${styles.tableCell} ${styles['t_'+t.status]}`}>
                        <div className={styles.tableCellId}>{t.id}</div>
                        <div className={styles.tableCellCap}>{t.cap}p</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.legend}><span className={styles.legOcc}>■ Occupied</span><span className={styles.legRes}>■ Reserved</span><span className={styles.legAvail}>■ Available</span></div>
                </div>
              </div>
            </div>
          </>)}

          {tab==='reservations'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>All Reservations — Today</span><button className={styles.addBtn}>+ New Reservation</button></div>
              <table className={styles.table}>
                <thead><tr><th>Time</th><th>Guest</th><th>Phone</th><th>Covers</th><th>Table</th><th>Deposit</th><th>Note</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{reservations.map(r=>(
                  <tr key={r.time+r.name}>
                    <td className={styles.muted}>{r.time}</td><td className={styles.bold}>{r.name}</td><td className={styles.muted}>{r.phone}</td><td>{r.covers}</td>
                    <td><span className={styles.tableChip}>{r.table}</span></td><td className={styles.price}>{r.deposit}</td><td className={styles.muted}>{r.note||'—'}</td>
                    <td><span className={`${styles.tag} ${styles[r.status]}`}>{r.status}</span></td>
                    <td className={styles.actions}><button className={styles.rowBtn}>Edit</button><button className={styles.rowBtnDanger}>Cancel</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='tables'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Live Floor Plan</div>
              <div className={styles.tableFloor}>
                {tables.map(t=>(
                  <div key={t.id} className={`${styles.tableBlock} ${styles['t_'+t.status]}`}>
                    <div className={styles.tableBlockId}>{t.id}</div>
                    <div className={styles.tableBlockCap}>{t.cap} seats</div>
                    <div className={styles.tableBlockStatus}>{t.status}</div>
                  </div>
                ))}
              </div>
              <div className={styles.legend}><span className={styles.legOcc}>■ Occupied</span><span className={styles.legRes}>■ Reserved</span><span className={styles.legAvail}>■ Available</span></div>
            </div>
          )}

          {tab==='menu'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Menu Manager</span><button className={styles.addBtn}>+ Add Item</button></div>
              <table className={styles.table}>
                <thead><tr><th>Section</th><th>Dish Name</th><th>Price</th><th>Orders (7d)</th><th>Allergens</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{menu.map((m,i)=>(
                  <tr key={i}>
                    <td><span className={styles.catChip}>{m.section}</span></td>
                    <td className={styles.bold}>{m.name}</td><td className={styles.price}>{m.price}</td>
                    <td>{m.orders}</td><td className={styles.muted}>{m.allergens}</td>
                    <td><span className={`${styles.tag} ${m.active?styles.confirmed:styles.pending}`}>{m.active?'Active':'Hidden'}</span></td>
                    <td className={styles.actions}><button className={styles.rowBtn}>Edit</button><button className={styles.rowBtn}>Toggle</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='staff'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}><span>Staff & Kitchen</span><span className={styles.chip}>Today's Shift</span></div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Role</th><th>Shift</th><th>Status</th><th>Orders Handled</th><th>Rating</th></tr></thead>
                <tbody>{staff.map(s=>(
                  <tr key={s.name}>
                    <td className={styles.bold}>{s.name}</td><td>{s.role}</td><td className={styles.muted}>{s.shift}</td>
                    <td><span className={`${styles.tag} ${s.status==='on-duty'?styles.confirmed:styles.pending}`}>{s.status}</span></td>
                    <td>{s.orders||'—'}</td><td className={styles.price}>{s.rating}★</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='leads'&&(<>
            <div className={styles.statsRow}>
              {[
                {label:'Total Leads',val:leads.length,color:'#c9956c'},
                {label:'New',val:leads.filter(l=>l.status==='new').length,color:'#ef4444'},
                {label:'Qualified',val:leads.filter(l=>l.status==='qualified').length,color:'#34d399'},
                {label:'Conversion',val:'67%',color:'#f59e0b'},
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
                <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Type</th><th>Source</th><th>Date</th><th>Note</th><th>Status</th><th>Update</th></tr></thead>
                <tbody>{filteredLeads.map(l=>(
                  <tr key={l.id}><td className={styles.bold}>{l.name}</td><td className={styles.muted}>{l.email}</td><td className={styles.muted}>{l.phone}</td>
                    <td><span className={styles.catChip}>{l.type}</span></td>
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
                  <a href="/demos/restaurant" target="_blank" className={styles.previewLink}>Preview site →</a>
                </div>
              </div>
              <div className={styles.editCanvas}>
                {editSection==='hero'&&(
                  <div className={styles.ecHero}>
                    <div className={styles.ecBadge}><input className={styles.inlineInput} value={content.badge} onChange={e=>setContent({...content,badge:e.target.value})} /></div>
                    <h1 className={styles.ecH1}><textarea className={`${styles.inlineInput} ${styles.inlineH1}`} value={content.heroHeadline} rows={2} onChange={e=>setContent({...content,heroHeadline:e.target.value})} /></h1>
                    <p className={styles.ecP}><textarea className={`${styles.inlineInput} ${styles.inlineP}`} value={content.heroSub} rows={2} onChange={e=>setContent({...content,heroSub:e.target.value})} /></p>
                    <div className={styles.ecBtns}>
                      <div className={styles.ecBtn1}><input className={styles.inlineInput} value={content.cta1} onChange={e=>setContent({...content,cta1:e.target.value})} /></div>
                      <div className={styles.ecBtn2}><input className={styles.inlineInput} value={content.cta2} onChange={e=>setContent({...content,cta2:e.target.value})} /></div>
                    </div>
                  </div>
                )}
                {editSection==='menu'&&(
                  <div className={styles.ecMenu}>
                    <div className={styles.ecSectionLabel}>Menu Highlights — edit dishes shown on website</div>
                    {['Starters','Mains','Desserts'].map(sec=>(
                      <div key={sec} className={styles.ecMenuSection}>
                        <div className={styles.ecMenuSectionHead}>{sec}</div>
                        {menu.filter(m=>m.section===sec).map((m,i)=>(
                          <div key={i} className={styles.ecMenuRow}>
                            <input className={`${styles.inlineInput} ${styles.ecMenuName}`} value={m.name} onChange={e=>{const nm=[...menu];const idx=menu.indexOf(m);nm[idx]={...m,name:e.target.value};setMenu(nm)}} />
                            <input className={`${styles.inlineInput} ${styles.ecMenuPrice}`} value={m.price} onChange={e=>{const nm=[...menu];const idx=menu.indexOf(m);nm[idx]={...m,price:e.target.value};setMenu(nm)}} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>Contact & Hours</div>
                    <div className={styles.ecContactGrid}>
                      {[['Phone',content.phone,'phone'],['Email',content.email,'email'],['Address',content.address,'address'],['Opening Hours',content.hours,'hours']].map(([label,val,key])=>(
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
                      <div className={styles.ecFooterLogo}>Ember & Oak</div>
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
