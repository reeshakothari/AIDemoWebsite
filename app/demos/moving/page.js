import styles from './page.module.css'
export const metadata={title:'Atlas Moving Co.'}
const services=[
  {icon:'📦',t:'Local Moving',d:'Efficient same-day and next-day moves within 50 miles.'},
  {icon:'🚛',t:'Long Distance',d:'Cross-state and nationwide relocations with full tracking.'},
  {icon:'🏢',t:'Office Relocation',d:'Minimal downtime business moves, after-hours available.'},
  {icon:'📫',t:'Packing Services',d:'Professional packing with premium materials and labelling.'},
  {icon:'🏗️',t:'Furniture Assembly',d:'Disassembly, transport, and reassembly at your new place.'},
  {icon:'🗄️',t:'Storage Solutions',d:'Secure, climate-controlled short and long-term storage.'},
]
const steps=[
  {n:'01',t:'Get Your Quote',d:'Fill out the form or call us for a free, no-obligation estimate in minutes.'},
  {n:'02',t:'Schedule the Move',d:'Choose your date. We confirm within 1 hour and send your crew details.'},
  {n:'03',t:'We Handle It All',d:'Our trained crew packs, loads, drives, and unloads with care.'},
  {n:'04',t:'Settle In',d:'We reassemble and place furniture — you just tell us where you want it.'},
]
export default function MovingPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>ATLAS <span>MOVING</span></div>
        <ul className={styles.links}>
          <li><a href="#services">Services</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#quote">Get Quote</a></li>
        </ul>
        <a href="#quote" className={styles.navCta}>Free Quote</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>🚛 Licensed & Fully Insured</div>
          <h1>We Move.<br />You <span>Relax.</span></h1>
          <p>Stress-free residential and commercial moving services. Professional crews, transparent pricing, and zero hidden fees — guaranteed.</p>
          <div className={styles.heroCtas}>
            <a href="#quote" className={styles.btnOrange}>Get Free Quote</a>
            <a href="#how" className={styles.btnOutline}>How It Works</a>
          </div>
          <div className={styles.guarantees}>
            {['No Hidden Fees','Fully Insured','On-Time Guarantee','Background-Checked Crews'].map(g=>(
              <div key={g} className={styles.guarantee}>✓ {g}</div>
            ))}
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.truck}>
            <div className={styles.truckBody}>
              <div className={styles.truckCab}/>
              <div className={styles.truckCargo}>
                <span>ATLAS MOVING CO.</span>
              </div>
            </div>
            <div className={styles.truckWheels}>
              <div className={styles.wheel}/><div className={styles.wheel}/>
            </div>
          </div>
          <div className={styles.statsStack}>
            {[['25+','Years Experience'],['50,000+','Moves Completed'],['4.9/5','Customer Rating']].map(([v,l])=>(
              <div key={l} className={styles.stackStat}><strong>{v}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className={styles.servSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>OUR SERVICES</span>
            <h2>Everything You Need to Move</h2>
          </div>
          <div className={styles.servGrid}>
            {services.map(s=>(
              <div key={s.t} className={styles.servCard}>
                <div className={styles.servIcon}>{s.icon}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className={styles.howSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>PROCESS</span>
            <h2>Moving Made Simple</h2>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((s,i)=>(
              <div key={s.n} className={styles.stepCard}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                {i<steps.length-1 && <div className={styles.arrow}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className={styles.quoteSection}>
        <div className={styles.container}>
          <div className={styles.quoteGrid}>
            <div className={styles.quoteLeft}>
              <span className={styles.tag}>FREE ESTIMATE</span>
              <h2>Get Your Moving Quote in Minutes</h2>
              <p>Tell us about your move and we'll get back to you with a firm, all-inclusive price — no surprises.</p>
              <div className={styles.quoteInfo}>
                <div>📞 +1 (555) 300-MOVE</div>
                <div>📧 quotes@atlasmoving.com</div>
                <div>🕐 Available 7 Days · 6am – 10pm</div>
              </div>
            </div>
            <form className={styles.form}>
              <div className={styles.fRow}><input type="text" placeholder="Full Name"/><input type="email" placeholder="Email Address"/></div>
              <div className={styles.fRow}><input type="tel" placeholder="Phone Number"/><input type="text" placeholder="Moving Date"/></div>
              <div className={styles.fRow}>
                <input type="text" placeholder="Moving From (City/ZIP)"/>
                <input type="text" placeholder="Moving To (City/ZIP)"/>
              </div>
              <div className={styles.fRow}>
                <select><option>Home Size</option><option>Studio</option><option>1 Bedroom</option><option>2 Bedrooms</option><option>3 Bedrooms</option><option>4+ Bedrooms</option><option>Office/Commercial</option></select>
                <select><option>Service Needed</option>{services.map(s=><option key={s.t}>{s.t}</option>)}</select>
              </div>
              <textarea placeholder="Anything special? (fragile items, stairs, elevator access, etc.)" rows={3}/>
              <button type="submit" className={styles.btnOrange}>Get My Free Quote →</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>ATLAS <span>MOVING</span></div>
        <p>© 2024 Atlas Moving Co. · Demo Landing Page</p>
      </footer>
    </div>
  )
}
