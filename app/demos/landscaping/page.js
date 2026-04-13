import styles from './page.module.css'
export const metadata={title:'GreenCraft Landscaping'}
const services=[{icon:'🌱',t:'Garden Design',d:'Custom garden plans that transform outdoor spaces into living masterpieces.'},{icon:'🌿',t:'Lawn Care',d:'Regular mowing, edging, aeration, seeding, and fertilisation programmes.'},{icon:'🪴',t:'Planting & Softscape',d:'Tree planting, hedging, seasonal bedding, and perennial borders.'},{icon:'🪨',t:'Hard Landscaping',d:'Patios, pathways, retaining walls, and outdoor structures built to last.'},{icon:'💧',t:'Irrigation Systems',d:'Smart irrigation design and installation for water-efficient gardens.'},{icon:'🍂',t:'Maintenance Plans',d:'Seasonal care packages to keep your garden looking its best year-round.'}]
export default function LandscapingPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>Green<span>Craft</span></div>
        <ul className={styles.links}><li><a href="#services">Services</a></li><li><a href="#quote">Free Quote</a></li></ul>
        <a href="#quote" className={styles.navCta}>Get Free Quote</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>🌿 Award-Winning Garden Design</div>
          <h1>Your Garden.<br /><span>Reimagined.</span></h1>
          <p>From a single flower bed to a complete outdoor transformation — GreenCraft turns every outdoor space into a sanctuary you'll love.</p>
          <div className={styles.heroCtas}>
            <a href="#quote" className={styles.btnGreen}>Get Free Quote</a>
            <a href="#services" className={styles.btnOutline}>Our Services</a>
          </div>
          <div className={styles.heroMeta}><span>📍 Serving a 50-mile radius</span><span>⭐ 4.9/5 from 1,200+ clients</span><span>🌱 Est. 2008</span></div>
        </div>
        <div className={styles.heroImgGrid}>
          <div className={styles.hg1}/><div className={styles.hg2}/>
          <div className={styles.hg3}/><div className={styles.hg4}/>
        </div>
      </section>
      <div className={styles.statsBar}>
        {[['15+','Years Experience'],['3,000+','Gardens Transformed'],['100%','Satisfaction Guarantee'],['A-rated','By TrustPilot']].map(([v,l])=>(
          <div key={l} className={styles.stat}><span>{v}</span><p>{l}</p></div>
        ))}
      </div>
      <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>What We Do</span><h2>Garden Services</h2></div>
          <div className={styles.servGrid}>
            {services.map(s=>(
              <div key={s.t} className={styles.servCard}><div className={styles.servIcon}>{s.icon}</div><h3>{s.t}</h3><p>{s.d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section id="quote" className={styles.quoteSection}>
        <div className={styles.container}>
          <div className={styles.quoteGrid}>
            <div><span className={styles.tag}>FREE CONSULTATION</span><h2>Get a Free Garden Quote</h2><p>Tell us about your outdoor space and we'll visit for a free no-obligation assessment and quote.</p>
            <div className={styles.info}><div>📞 +1 (555) 400-GROW</div><div>📧 hello@greencraft.com</div><div>🕐 Mon–Sat: 8am – 6pm</div></div></div>
            <form className={styles.form}>
              <div className={styles.formRow}><input type="text" placeholder="Your Name"/><input type="email" placeholder="Email Address"/></div>
              <input type="tel" placeholder="Phone Number"/>
              <input type="text" placeholder="Property Address"/>
              <select><option>Service Required</option>{services.map(s=><option key={s.t}>{s.t}</option>)}</select>
              <select><option>Garden Size</option><option>Small (under 50m²)</option><option>Medium (50–150m²)</option><option>Large (150–500m²)</option><option>Estate (500m²+)</option></select>
              <textarea placeholder="Describe what you'd like to achieve..." rows={3}/>
              <button type="submit" className={styles.btnGreen}>Request Free Quote</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.footerLogo}>Green<span>Craft</span></div><p>© 2024 GreenCraft Landscaping · Demo Landing Page</p></footer>
    </div>
  )
}
