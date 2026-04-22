import styles from './page.module.css'
export const metadata={title:'Sparkle Clean — Professional Cleaning'}
const services=[
  {icon:'🏠',t:'Home Cleaning',d:'Weekly, fortnightly, or one-off deep cleans for any home size.'},
  {icon:'🏢',t:'Office Cleaning',d:'Before and after-hours commercial cleaning to keep your workspace spotless.'},
  {icon:'✨',t:'Deep Cleaning',d:'Top-to-bottom intensive clean including inside appliances, grout, and vents.'},
  {icon:'🛋️',t:'Move In / Out',d:'Full property clean to leave your old place ready for the next tenant.'},
  {icon:'🪟',t:'Window Cleaning',d:'Interior and exterior window cleaning for crystal-clear results.'},
  {icon:'🧪',t:'Sanitisation',d:'Hospital-grade disinfection for homes, clinics, and high-traffic spaces.'},
]
const pricing=[
  {plan:'Studio',rooms:'1–2 Rooms',price:'$79',freq:'From'},
  {plan:'Home',rooms:'3–4 Rooms',price:'$139',freq:'From'},
  {plan:'Large Home',rooms:'5+ Rooms',price:'$199',freq:'From'},
  {plan:'Office',rooms:'Custom',price:'Custom',freq:''},
]
export default function CleaningPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}><span>✦</span> Sparkle Clean</div>
        <ul className={styles.links}>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#book">Book Now</a></li>
        </ul>
        <a href="#book" className={styles.navCta}>Get a Free Quote</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>✦ Eco-Friendly & Certified</div>
          <h1>A Cleaner Home<br /><span>Starts Today.</span></h1>
          <p>Professional, insured, and background-checked cleaners using eco-safe products. Book in 60 seconds, results guaranteed.</p>
          <div className={styles.heroCtas}>
            <a href="#book" className={styles.btnBlue}>Book a Clean</a>
            <a href="#services" className={styles.btnOutline}>See Services</a>
          </div>
          <div className={styles.trustRow}>
            {['✔ Insured & Bonded','✔ Eco-Safe Products','✔ 100% Satisfaction','✔ Same-Day Available'].map(t=>(
              <span key={t} className={styles.trust}>{t}</span>
            ))}
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.cleanCard}>
            <div className={styles.cleanTop}>
              <div className={styles.cleanIcon}>🧹</div>
              <div>
                <div className={styles.cleanTitle}>Your Clean is Scheduled!</div>
                <div className={styles.cleanSub}>Today, 2:00 PM – 4:30 PM</div>
              </div>
            </div>
            <div className={styles.steps}>
              {['Cleaner Assigned','On the Way','In Progress','Complete ✓'].map((s,i)=>(
                <div key={s} className={`${styles.step} ${i<2?styles.done:i===2?styles.active:''}`}>
                  <div className={styles.stepDot}/>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bubbles}>
            {['🧼','🫧','✨','🪣','🧽'].map(e=><div key={e} className={styles.bubble}>{e}</div>)}
          </div>
        </div>
      </section>

      <div className={styles.trustBar}>
        {[['10,000+','Cleans Completed'],['4.9★','Average Rating'],['100%','Satisfaction Guarantee'],['2 hrs','Avg Response Time']].map(([v,l])=>(
          <div key={l} className={styles.tbStat}><strong>{v}</strong><span>{l}</span></div>
        ))}
      </div>

      <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>SERVICES</span>
            <h2>What We Clean</h2>
            <p>Every clean is performed by trained, vetted professionals with attention to every detail.</p>
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

      <section id="pricing" className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>PRICING</span>
            <h2>Transparent, No-Surprise Pricing</h2>
          </div>
          <div className={styles.priceGrid}>
            {pricing.map(p=>(
              <div key={p.plan} className={styles.priceCard}>
                <div className={styles.planName}>{p.plan}</div>
                <div className={styles.planRooms}>{p.rooms}</div>
                <div className={styles.planPrice}><small>{p.freq}</small> {p.price}</div>
                <a href="#book" className={styles.btnBlue}>Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookGrid}>
            <div>
              <span className={styles.tag}>BOOK A CLEAN</span>
              <h2>Ready for a Sparkle-Clean Home?</h2>
              <p>Fill in the form and we'll confirm your booking within 1 hour. Available 7 days a week.</p>
              <div className={styles.contactInfo}>
                <div>📞 +1 (555) 700-CLEAN</div>
                <div>📧 book@sparkleclean.com</div>
                <div>🕐 Mon–Sun: 7am – 8pm</div>
              </div>
            </div>
            <form className={styles.form}>
              <div className={styles.fRow}><input type="text" placeholder="Your Name"/><input type="email" placeholder="Email Address"/></div>
              <div className={styles.fRow}><input type="tel" placeholder="Phone Number"/><input type="text" placeholder="Postcode / Area"/></div>
              <select>
                <option>Service Type</option>
                {services.map(s=><option key={s.t}>{s.t}</option>)}
              </select>
              <div className={styles.fRow}>
                <select><option>Property Size</option><option>Studio / 1 Bed</option><option>2–3 Bedrooms</option><option>4–5 Bedrooms</option><option>Commercial</option></select>
                <input type="text" placeholder="Preferred Date"/>
              </div>
              <textarea placeholder="Anything we should know? (pets, access notes, specific areas)" rows={3}/>
              <button type="submit" className={styles.btnBlue}>Request My Quote →</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}><span>✦</span> Sparkle Clean</div>
        <p>© 2024 Sparkle Clean · Demo Landing Page</p>
      </footer>
    </div>
  )
}
