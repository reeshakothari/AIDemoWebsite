'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Cases','Clients','Attorneys','Billing','Inbound Leads','Edit Website']

const cases = [
  { id:'CS-001', title:'Henderson v. Blackwood Corp', client:'James Henderson', attorney:'Sarah Mitchell', type:'Corporate', status:'active', opened:'03 Jan 2026', value:'$45,000' },
  { id:'CS-002', title:'Estate of Reeves (Probate)', client:'Maria Reeves', attorney:'David Park', type:'Probate', status:'active', opened:'15 Feb 2026', value:'$18,500' },
  { id:'CS-003', title:'Nguyen IP Dispute', client:'Linh Nguyen', attorney:'Sarah Mitchell', type:'IP', status:'pending', opened:'01 Mar 2026', value:'$32,000' },
  { id:'CS-004', title:'Metro Lease Agreement', client:'Metro Properties Ltd', attorney:'Tom Asher', type:'Real Estate', status:'closed', opened:'10 Dec 2025', value:'$9,200' },
  { id:'CS-005', title:'Clarke Employment Claim', client:'Diane Clarke', attorney:'David Park', type:'Employment', status:'active', opened:'18 Apr 2026', value:'$27,000' },
]

const clients = [
  { name:'James Henderson', type:'Individual', cases:2, since:'2024', attorney:'Sarah Mitchell', status:'active' },
  { name:'Metro Properties Ltd', type:'Corporate', cases:4, since:'2023', attorney:'Tom Asher', status:'active' },
  { name:'Linh Nguyen', type:'Individual', cases:1, since:'2026', attorney:'Sarah Mitchell', status:'active' },
  { name:'Maria Reeves', type:'Individual', cases:1, since:'2026', attorney:'David Park', status:'pending' },
  { name:'Diane Clarke', type:'Individual', cases:1, since:'2026', attorney:'David Park', status:'active' },
]

const attorneys = [
  { name:'Sarah Mitchell', title:'Senior Partner', spec:'Corporate & IP', cases:8, billable:'142 hrs', rate:'$380/hr' },
  { name:'David Park', title:'Associate', spec:'Probate & Employment', cases:5, billable:'98 hrs', rate:'$240/hr' },
  { name:'Tom Asher', title:'Partner', spec:'Real Estate', cases:6, billable:'118 hrs', rate:'$320/hr' },
  { name:'Priya Nair', title:'Junior Associate', spec:'General Litigation', cases:3, billable:'74 hrs', rate:'$180/hr' },
]

const invoices = [
  { id:'INV-2026-041', client:'James Henderson', attorney:'Sarah Mitchell', amount:'$7,600', due:'30 Apr 2026', status:'pending' },
  { id:'INV-2026-040', client:'Metro Properties Ltd', attorney:'Tom Asher', amount:'$4,800', due:'25 Apr 2026', status:'active' },
  { id:'INV-2026-039', client:'Linh Nguyen', attorney:'Sarah Mitchell', amount:'$12,000', due:'20 Apr 2026', status:'closed' },
]

const initLeads = [
  { id:1, name:'Robert Finch', source:'Website', matter:'Business Formation', date:'22 Apr', status:'new' },
  { id:2, name:'Carla Benson', source:'Referral', matter:'Divorce Proceedings', date:'21 Apr', status:'contacted' },
  { id:3, name:'Owusu & Partners', source:'Google Ad', matter:'Contract Review', date:'20 Apr', status:'qualified' },
  { id:4, name:'Paul Yuen', source:'Website', matter:'Employment Dispute', date:'19 Apr', status:'booked' },
  { id:5, name:'Sandra Obi', source:'LinkedIn', matter:'Estate Planning', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'practice', label:'Practice Areas', preview:'6 area cards' },
  { id:'contact', label:'Contact Info', preview:'Address, phone, hours' },
]

export default function LawFirmAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [caseFilter, setCaseFilter] = useState('all')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'Trusted Legal Counsel Since 1998',
    heroHeadline:'Justice Is Not Just a Word. It\'s Our Promise.',
    heroSub:'Mitchell & Park LLP delivers strategic, results-driven legal representation across corporate, litigation, and estate matters.',
    cta1:'Book a Consultation', cta2:'Our Practice Areas',
    p1:'Corporate Law', p2:'Intellectual Property', p3:'Real Estate', p4:'Probate & Estate', p5:'Employment Law', p6:'General Litigation',
    phone:'+1 (555) 203-LAWS', email:'consult@mitchellpark.com', address:'88 Barrister Ave, Suite 400', hours:'Mon–Fri 8am–6pm',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredCases = caseFilter==='all' ? cases : cases.filter(c=>c.status===caseFilter)
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>MITCHELL & PARK</div>
          <div className={styles.brandSub}>ADMIN PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','⚖️','👥','👔','💰','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/law-firm" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>Mitchell & Park LLP · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>2</span></div>
            <div className={styles.avatar}>SM</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Active Cases',val:'14',sub:'3 new this month',color:'#c9a84c'},
                  {label:'Total Clients',val:'87',sub:'+5 this quarter',color:'#1a2744'},
                  {label:'Billable Hours (Apr)',val:'432',sub:'4 attorneys',color:'#6366f1'},
                  {label:'Revenue (Apr)',val:'$142K',sub:'+11% vs Mar',color:'#10b981'},
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
                  <div className={styles.panelHead}>Active Cases<span className={styles.chip}>14 open</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Case</th><th>Client</th><th>Attorney</th><th>Type</th><th>Status</th></tr></thead>
                    <tbody>{cases.map(c=>(
                      <tr key={c.id}>
                        <td><div className={styles.bold}>{c.title}</div><div className={styles.muted}>{c.id}</div></td>
                        <td className={styles.muted}>{c.client}</td>
                        <td className={styles.muted}>{c.attorney}</td>
                        <td><span className={styles.catChip}>{c.type}</span></td>
                        <td><span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span></td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Attorney Workload</div>
                    {attorneys.map(a=>(
                      <div key={a.name} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid #f5f3ee',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{a.name}</div><div className={styles.muted}>{a.spec}</div></div>
                        <div style={{textAlign:'right'}}><div className={styles.price}>{a.billable}</div><div className={styles.muted}>{a.rate}</div></div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Pending Invoices</div>
                    {invoices.map(i=>(
                      <div key={i.id} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid #f5f3ee',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{i.client}</div><div className={styles.muted}>Due {i.due}</div></div>
                        <div className={styles.price}>{i.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab==='Cases'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                Case Management
                <div style={{display:'flex',gap:8}}>
                  <div className={styles.filterRow}>
                    {['all','active','pending','closed'].map(f=>(
                      <button key={f} className={`${styles.filterBtn} ${caseFilter===f?styles.filterActive:''}`} onClick={()=>setCaseFilter(f)}>{f}</button>
                    ))}
                  </div>
                  <button className={styles.addBtn}>+ New Case</button>
                </div>
              </div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Title</th><th>Client</th><th>Attorney</th><th>Type</th><th>Value</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{filteredCases.map(c=>(
                  <tr key={c.id}>
                    <td className={styles.muted}>{c.id}</td>
                    <td><div className={styles.bold}>{c.title}</div><div className={styles.muted}>Opened {c.opened}</div></td>
                    <td className={styles.muted}>{c.client}</td>
                    <td className={styles.muted}>{c.attorney}</td>
                    <td><span className={styles.catChip}>{c.type}</span></td>
                    <td className={styles.price}>{c.value}</td>
                    <td><span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>View</button><button className={styles.rowBtn}>Edit</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Clients'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Client Directory<button className={styles.addBtn}>+ Add Client</button></div>
              <table className={styles.table}>
                <thead><tr><th>Client</th><th>Type</th><th>Cases</th><th>Since</th><th>Attorney</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{clients.map(c=>(
                  <tr key={c.name}>
                    <td><div className={styles.bold}>{c.name}</div></td>
                    <td><span className={styles.catChip}>{c.type}</span></td>
                    <td className={styles.bold}>{c.cases}</td>
                    <td className={styles.muted}>{c.since}</td>
                    <td className={styles.muted}>{c.attorney}</td>
                    <td><span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>File</button><button className={styles.rowBtn}>Contact</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Attorneys'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Attorney Roster<button className={styles.addBtn}>+ Add Attorney</button></div>
              <table className={styles.table}>
                <thead><tr><th>Attorney</th><th>Title</th><th>Specialisation</th><th>Active Cases</th><th>Billable Hours</th><th>Rate</th><th>Actions</th></tr></thead>
                <tbody>{attorneys.map(a=>(
                  <tr key={a.name}>
                    <td><div className={styles.bold}>{a.name}</div></td>
                    <td className={styles.muted}>{a.title}</td>
                    <td><span className={styles.catChip}>{a.spec}</span></td>
                    <td className={styles.bold}>{a.cases}</td>
                    <td className={styles.muted}>{a.billable}</td>
                    <td className={styles.price}>{a.rate}</td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Profile</button><button className={styles.rowBtn}>Cases</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Billing'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Invoices & Billing<button className={styles.addBtn}>+ New Invoice</button></div>
              <table className={styles.table}>
                <thead><tr><th>Invoice</th><th>Client</th><th>Attorney</th><th>Amount</th><th>Due Date</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{invoices.map(i=>(
                  <tr key={i.id}>
                    <td className={styles.muted}>{i.id}</td>
                    <td><div className={styles.bold}>{i.client}</div></td>
                    <td className={styles.muted}>{i.attorney}</td>
                    <td className={styles.price}>{i.amount}</td>
                    <td className={styles.muted}>{i.due}</td>
                    <td><span className={`${styles.tag} ${styles[i.status]}`}>{i.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Send</button><button className={styles.rowBtn}>Edit</button></div></td>
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
                <thead><tr><th>Name</th><th>Source</th><th>Matter</th><th>Date</th><th>Status</th><th>Update</th></tr></thead>
                <tbody>{filteredLeads.map(l=>(
                  <tr key={l.id}>
                    <td><div className={styles.bold}>{l.name}</div></td>
                    <td className={styles.muted}>{l.source}</td>
                    <td><span className={styles.catChip}>{l.matter}</span></td>
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
                  <a href="/demos/law-firm" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection==='practice'&&(
                  <div className={styles.ecPractice}>
                    <div className={styles.ecSectionLabel}>PRACTICE AREAS</div>
                    <div className={styles.ecPracticeGrid}>
                      {['p1','p2','p3','p4','p5','p6'].map(k=>(
                        <div key={k} className={styles.ecPracticeCard}>
                          <input className={`${styles.inlineInput} ${styles.ecPracticeName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {editSection==='contact'&&(
                  <div className={styles.ecContact}>
                    <div className={styles.ecSectionLabel}>CONTACT INFORMATION</div>
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
