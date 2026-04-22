import styles from './page.module.css'
export const metadata={title:'Celebrate Co. — Event Management'}
const eventTypes=[
  {icon:'🎊',t:'Corporate Events',d:'Conferences, product launches, team off-sites, and brand activations.'},
  {icon:'💒',t:'Weddings',d:'Full-service wedding planning from venue scouting to day-of coordination.'},
  {icon:'🎂',t:'Private Parties',d:'Birthdays, anniversaries, galas, and intimate celebrations.'},
  {icon:'🎤',t:'Concerts & Shows',d:'Live music events, comedy nights, and performance productions.'},
  {icon:'🏆',t:'Award Ceremonies',d:'Gala dinners, trophy nights, and recognition events done right.'},
  {icon:'🌐',t:'Virtual Events',d:'Hybrid and fully virtual experiences with live streaming.'},
]
const packages=[
  {name:'Starter',price:'$1,500',desc:'Planning checklist, vendor referrals, day-of coordinator.',color:'#FF3CAC'},
  {name:'Signature',price:'$4,500',desc:'Full planning, venue & vendor management, décor design.',color:'#784BA0',popular:true},
  {name:'Elite',price:'$9,000+',desc:'White-glove service, bespoke experience, dedicated team.',color:'#2B86C5'},
]
const stats=[['500+','Events Delivered'],['12','In-House Planners'],['98%','Client Satisfaction'],['50+','Vendor Partners']]
export default function EventManagementPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>Celebrate<span>Co.</span></div>
        <ul className={styles.links}>
          <li><a href="#events">Events</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className={styles.navCta}>Plan My Event</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.orb1}/><div className={styles.orb2}/><div className={styles.orb3}/>
        <div className={styles.heroInner}>
          <div className={styles.pills}>
            {['🎊 Weddings','🎤 Concerts','🏆 Galas','💼 Corporate','🎂 Parties'].map(p=>(
              <span key={p} className={styles.pill}>{p}</span>
            ))}
          </div>
          <h1>Events That<br /><span className={styles.grad1}>Leave</span> a<br /><span className={styles.grad2}>Legacy.</span></h1>
          <p>From intimate gatherings to 10,000-person spectacles — we design, manage, and execute experiences people talk about for years.</p>
          <div className={styles.heroCtas}>
            <a href="#contact" className={styles.btnPrimary}>Start Planning</a>
            <a href="#events" className={styles.btnGhost}>See What We Do</a>
          </div>
        </div>
        <div className={styles.heroStats}>
          {stats.map(([v,l])=>(
            <div key={l} className={styles.hStat}>
              <strong>{v}</strong><span>{l}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="events" className={styles.eventsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>WHAT WE PLAN</span>
            <h2>Every Occasion, Perfectly Executed</h2>
          </div>
          <div className={styles.eventsGrid}>
            {eventTypes.map((e,i)=>(
              <div key={e.t} className={styles.eventCard} style={{'--c':['#FF3CAC','#784BA0','#2B86C5','#F59E0B','#10B981','#EF4444'][i]}}>
                <div className={styles.eventIcon}>{e.icon}</div>
                <h3>{e.t}</h3>
                <p>{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>PACKAGES</span>
            <h2>Simple, Transparent Pricing</h2>
          </div>
          <div className={styles.pkgGrid}>
            {packages.map(p=>(
              <div key={p.name} className={`${styles.pkgCard} ${p.popular?styles.pkgFeatured:''}`} style={{'--c':p.color}}>
                {p.popular && <div className={styles.badge}>Most Popular</div>}
                <div className={styles.pkgName}>{p.name}</div>
                <div className={styles.pkgPrice}>{p.price}</div>
                <p className={styles.pkgDesc}>{p.desc}</p>
                <a href="#contact" className={styles.pkgBtn}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactLeft}>
              <span className={styles.tag}>LET'S CREATE SOMETHING UNFORGETTABLE</span>
              <h2>Tell Us About Your Event</h2>
              <p>Our planners respond within 2 hours with a personalised proposal tailored to your vision and budget.</p>
              <div className={styles.contactInfo}>
                <div>📞 +1 (555) 200-EVENT</div>
                <div>📧 hello@celebrateco.com</div>
                <div>📍 Available Nationwide</div>
              </div>
            </div>
            <form className={styles.form}>
              <div className={styles.row}><input type="text" placeholder="Your Name"/><input type="email" placeholder="Email Address"/></div>
              <div className={styles.row}><input type="tel" placeholder="Phone Number"/><input type="text" placeholder="Event Date"/></div>
              <select>
                <option>Event Type</option>
                {eventTypes.map(e=><option key={e.t}>{e.t}</option>)}
              </select>
              <div className={styles.row}>
                <select><option>Guest Count</option><option>Under 50</option><option>50–150</option><option>150–500</option><option>500+</option></select>
                <select><option>Budget Range</option><option>$1k–$5k</option><option>$5k–$20k</option><option>$20k–$50k</option><option>$50k+</option></select>
              </div>
              <textarea placeholder="Describe your vision..." rows={3}/>
              <button type="submit" className={styles.btnPrimary}>Send My Brief</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>Celebrate<span>Co.</span></div>
        <p>© 2024 Celebrate Co. Event Management · Demo Landing Page</p>
      </footer>
    </div>
  )
}
