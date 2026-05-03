'use client'
import { useState } from 'react'
import styles from './page.module.css'

const tabs = ['Dashboard','Projects','Team','Clients','Analytics','Inbound Leads','Edit Website']

const projects = [
  { id:'PRJ-01', name:'NeuralPay Integration', client:'FinCore Ltd', lead:'Alex Chen', stack:'React / Node', due:'30 May 2026', progress:72, status:'inprogress' },
  { id:'PRJ-02', name:'HealthTrack Mobile App', client:'Vital Health', lead:'Priya Nair', stack:'Flutter / Firebase', due:'15 Jun 2026', progress:45, status:'inprogress' },
  { id:'PRJ-03', name:'E-commerce Platform v2', client:'RetailNow Inc', lead:'Sam Torres', stack:'Next.js / Postgres', due:'01 Apr 2026', progress:100, status:'completed' },
  { id:'PRJ-04', name:'AI Dashboard MVP', client:'DataSync Co', lead:'Alex Chen', stack:'Python / React', due:'20 Jul 2026', progress:18, status:'active' },
  { id:'PRJ-05', name:'CRM Rebuild', client:'AgencyPro', lead:'Priya Nair', stack:'Vue / Django', due:'TBD', progress:0, status:'onhold' },
]

const team = [
  { name:'Alex Chen', role:'Lead Engineer', skills:'React, Node, AWS', projects:3, utilisation:'92%' },
  { name:'Priya Nair', role:'Full-Stack Dev', skills:'Flutter, Firebase, Vue', projects:2, utilisation:'85%' },
  { name:'Sam Torres', role:'Frontend Dev', skills:'Next.js, Tailwind', projects:2, utilisation:'78%' },
  { name:'Jordan Blake', role:'DevOps', skills:'Docker, K8s, CI/CD', projects:4, utilisation:'88%' },
]

const clients = [
  { name:'FinCore Ltd', industry:'FinTech', projects:2, value:'$84K', since:'2024', status:'active' },
  { name:'Vital Health', industry:'HealthTech', projects:1, value:'$52K', since:'2025', status:'active' },
  { name:'RetailNow Inc', industry:'E-commerce', projects:3, value:'$120K', since:'2023', status:'active' },
  { name:'DataSync Co', industry:'AI / Data', projects:1, value:'$38K', since:'2026', status:'inprogress' },
  { name:'AgencyPro', industry:'Marketing', projects:1, value:'$24K', since:'2025', status:'onhold' },
]

const initLeads = [
  { id:1, name:'Marcus Webb', source:'LinkedIn', interest:'SaaS MVP Build', date:'22 Apr', status:'new' },
  { id:2, name:'Nadia Osei', source:'Website', interest:'AI Integration', date:'21 Apr', status:'contacted' },
  { id:3, name:'Startup X', source:'Referral', interest:'Mobile App Dev', date:'20 Apr', status:'qualified' },
  { id:4, name:'CloudBase Ltd', source:'Cold Outreach', interest:'DevOps Retainer', date:'19 Apr', status:'booked' },
  { id:5, name:'DataBridge Inc', source:'Google Ad', interest:'Data Pipeline', date:'18 Apr', status:'lost' },
]

const editSections = [
  { id:'hero', label:'Hero Section', preview:'Headline, tagline, CTAs' },
  { id:'features', label:'Core Features', preview:'Product feature cards' },
  { id:'contact', label:'Contact Info', preview:'Email, location, hours' },
]

export default function TechStartupAdmin() {
  const [tab, setTab] = useState('Dashboard')
  const [projFilter, setProjFilter] = useState('all')
  const [leadFilter, setLeadFilter] = useState('all')
  const [leads, setLeads] = useState(initLeads)
  const [editSection, setEditSection] = useState('hero')
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState({
    badge:'🚀 Trusted by 80+ Startups',
    heroHeadline:'Build Fast. Ship Smart. Scale Without Limits.',
    heroSub:'We design and engineer digital products that grow with your vision — from MVP to enterprise-grade platform.',
    cta1:'Start a Project', cta2:'See Our Work',
    f1:'Rapid MVP Development', f2:'AI & Automation', f3:'Cloud Infrastructure', f4:'Mobile Apps', f5:'API Integrations', f6:'Ongoing Support',
    phone:'+1 (555) 200-CODE', email:'hello@pixelforge.io', address:'42 Innovation Drive, Floor 8', hours:'Mon–Fri 9am–6pm',
  })
  const set = (k,v) => setContent(p=>({...p,[k]:v}))
  const updateLead = (id,status) => setLeads(l=>l.map(x=>x.id===id?{...x,status}:x))
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2000) }
  const filteredProjects = projFilter==='all' ? projects : projects.filter(p=>p.status===projFilter)
  const filteredLeads = leadFilter==='all' ? leads : leads.filter(l=>l.status===leadFilter)

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}><span>Pixel</span>Forge</div>
          <div className={styles.brandSub}>ADMIN PORTAL</div>
        </div>
        <nav className={styles.sideNav}>
          {tabs.map(t=>(
            <button key={t} className={`${styles.navItem} ${tab===t?styles.navActive:''}`} onClick={()=>setTab(t)}>
              <span className={styles.navIcon}>{['📊','🛠️','👥','🤝','📈','📋','✏️'][tabs.indexOf(t)]}</span>
              {t}{t==='Inbound Leads'&&<span className={styles.navBadge}>5</span>}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}><a href="/demos/tech-startup" className={styles.viewSite}>← View Live Site</a></div>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <div className={styles.pageTitle}>{tab}</div>
            <div className={styles.pageDate}>PixelForge · {new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.notif}>🔔<span>4</span></div>
            <div className={styles.avatar}>PF</div>
          </div>
        </div>

        <div className={styles.content}>
          {tab==='Dashboard'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Active Projects',val:'4',sub:'1 on hold',color:'#7c3aed'},
                  {label:'Team Utilisation',val:'86%',sub:'4 engineers',color:'#2563eb'},
                  {label:'MRR',val:'$38.4K',sub:'+12% vs Mar',color:'#10b981'},
                  {label:'Open Leads',val:'5',sub:'2 qualified',color:'#f59e0b'},
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
                  <div className={styles.panelHead}>Active Projects<span className={styles.chip}>5 total</span></div>
                  <table className={styles.table}>
                    <thead><tr><th>Project</th><th>Client</th><th>Lead</th><th>Progress</th><th>Status</th></tr></thead>
                    <tbody>{projects.map(p=>(
                      <tr key={p.id}>
                        <td><div className={styles.bold}>{p.name}</div><div className={styles.muted}>{p.stack}</div></td>
                        <td className={styles.muted}>{p.client}</td>
                        <td className={styles.muted}>{p.lead}</td>
                        <td style={{width:120}}>
                          <div style={{display:'flex',alignItems:'center',gap:8}}>
                            <div className={styles.barTrack}><div className={styles.barFill} style={{width:`${p.progress}%`}}/></div>
                            <span className={styles.muted}>{p.progress}%</span>
                          </div>
                        </td>
                        <td><span className={`${styles.tag} ${styles[p.status]}`}>{p.status}</span></td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
                <div className={styles.stackCol}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Team Overview</div>
                    {team.map(m=>(
                      <div key={m.name} style={{display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid rgba(124,58,237,0.05)',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{m.name}</div><div className={styles.muted}>{m.role}</div></div>
                        <div style={{textAlign:'right'}}><div className={styles.price}>{m.utilisation}</div><div className={styles.muted}>{m.projects} projects</div></div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>Top Clients</div>
                    {clients.slice(0,3).map(c=>(
                      <div key={c.name} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(124,58,237,0.05)',fontSize:'13px'}}>
                        <div><div className={styles.bold}>{c.name}</div><div className={styles.muted}>{c.industry}</div></div>
                        <div className={styles.price}>{c.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab==='Projects'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                All Projects
                <div style={{display:'flex',gap:8}}>
                  <div className={styles.filterRow}>
                    {['all','active','inprogress','completed','onhold'].map(f=>(
                      <button key={f} className={`${styles.filterBtn} ${projFilter===f?styles.filterActive:''}`} onClick={()=>setProjFilter(f)}>{f}</button>
                    ))}
                  </div>
                  <button className={styles.addBtn}>+ New Project</button>
                </div>
              </div>
              <table className={styles.table}>
                <thead><tr><th>ID</th><th>Project</th><th>Client</th><th>Lead</th><th>Stack</th><th>Due</th><th>Progress</th><th>Status</th></tr></thead>
                <tbody>{filteredProjects.map(p=>(
                  <tr key={p.id}>
                    <td className={styles.muted}>{p.id}</td>
                    <td><div className={styles.bold}>{p.name}</div></td>
                    <td className={styles.muted}>{p.client}</td>
                    <td className={styles.muted}>{p.lead}</td>
                    <td><span className={styles.catChip}>{p.stack}</span></td>
                    <td className={styles.muted}>{p.due}</td>
                    <td style={{width:100}}>
                      <div style={{display:'flex',alignItems:'center',gap:6}}>
                        <div className={styles.barTrack}><div className={styles.barFill} style={{width:`${p.progress}%`}}/></div>
                        <span className={styles.muted}>{p.progress}%</span>
                      </div>
                    </td>
                    <td><span className={`${styles.tag} ${styles[p.status]}`}>{p.status}</span></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Team'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Team Members<button className={styles.addBtn}>+ Add Member</button></div>
              <table className={styles.table}>
                <thead><tr><th>Name</th><th>Role</th><th>Skills</th><th>Active Projects</th><th>Utilisation</th><th>Actions</th></tr></thead>
                <tbody>{team.map(m=>(
                  <tr key={m.name}>
                    <td><div className={styles.bold}>{m.name}</div></td>
                    <td><span className={styles.catChip}>{m.role}</span></td>
                    <td className={styles.muted}>{m.skills}</td>
                    <td className={styles.bold}>{m.projects}</td>
                    <td className={styles.price}>{m.utilisation}</td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>Profile</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Clients'&&(
            <div className={styles.panel}>
              <div className={styles.panelHead}>Client Accounts<button className={styles.addBtn}>+ Add Client</button></div>
              <table className={styles.table}>
                <thead><tr><th>Client</th><th>Industry</th><th>Projects</th><th>Total Value</th><th>Since</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{clients.map(c=>(
                  <tr key={c.name}>
                    <td><div className={styles.bold}>{c.name}</div></td>
                    <td><span className={styles.catChip}>{c.industry}</span></td>
                    <td className={styles.bold}>{c.projects}</td>
                    <td className={styles.price}>{c.value}</td>
                    <td className={styles.muted}>{c.since}</td>
                    <td><span className={`${styles.tag} ${styles[c.status]}`}>{c.status}</span></td>
                    <td><div className={styles.actions}><button className={styles.rowBtn}>View</button></div></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab==='Analytics'&&(
            <>
              <div className={styles.statsRow}>
                {[
                  {label:'Total Revenue (YTD)',val:'$284K',sub:'Ahead of target',color:'#10b981'},
                  {label:'Projects Delivered',val:'18',sub:'On time: 94%',color:'#7c3aed'},
                  {label:'Client Retention',val:'91%',sub:'Industry avg: 74%',color:'#2563eb'},
                  {label:'Avg Project Size',val:'$22K',sub:'↑ from $18K',color:'#f59e0b'},
                ].map(s=>(
                  <div key={s.label} className={styles.statCard} style={{'--a':s.color}}>
                    <div className={styles.statVal}>{s.val}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                    <div className={styles.statSub}>{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className={styles.panel}>
                <div className={styles.panelHead}>Revenue by Client</div>
                {clients.map(c=>(
                  <div key={c.name} style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
                    <span style={{width:140,fontSize:13,color:'rgba(226,232,240,0.6)'}}>{c.name}</span>
                    <div className={styles.barTrack} style={{height:8}}>
                      <div className={styles.barFill} style={{width:`${Math.min(100,(parseInt(c.value.replace(/\D/g,''))/1200))}%`}}/>
                    </div>
                    <span className={styles.price} style={{width:60,textAlign:'right'}}>{c.value}</span>
                  </div>
                ))}
              </div>
            </>
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
                  <a href="/demos/tech-startup" target="_blank" className={styles.previewLink}>Preview site →</a>
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
                {editSection==='features'&&(
                  <div className={styles.ecFeatures}>
                    <div className={styles.ecSectionLabel}>CORE CAPABILITIES</div>
                    <div className={styles.ecFeatureGrid}>
                      {['f1','f2','f3','f4','f5','f6'].map((k,i)=>(
                        <div key={k} className={styles.ecFeatureCard}>
                          <div style={{fontSize:22,marginBottom:10}}>{'🚀🤖☁️📱🔗🛡️'[i]}</div>
                          <input className={`${styles.inlineInput} ${styles.ecFeatureName}`} value={content[k]} onChange={e=>set(k,e.target.value)}/>
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
