import styles from './page.module.css'
export const metadata = { title: 'Wanderlust Travel Agency' }
const destinations = [
  { name: 'Santorini, Greece', tag: 'Island Escape', days: '7 Days', price: 'From $2,400', color: 'var(--d1)' },
  { name: 'Kyoto, Japan', tag: 'Cultural Journey', days: '10 Days', price: 'From $3,100', color: 'var(--d2)' },
  { name: 'Patagonia, Chile', tag: 'Adventure Trek', days: '14 Days', price: 'From $4,200', color: 'var(--d3)' },
  { name: 'Maldives', tag: 'Luxury Beach', days: '7 Days', price: 'From $5,800', color: 'var(--d4)' },
  { name: 'Marrakech, Morocco', tag: 'Cultural Immersion', days: '8 Days', price: 'From $1,900', color: 'var(--d5)' },
  { name: 'New Zealand', tag: 'Epic Road Trip', days: '12 Days', price: 'From $3,600', color: 'var(--d6)' },
]
const experiences = [
  { icon: '🏔️', title: 'Adventure', desc: 'Trek, climb, and explore the world\'s most breathtaking landscapes.' },
  { icon: '🏖️', title: 'Beach & Luxury', desc: 'Private villas, overwater bungalows, and pristine white sands.' },
  { icon: '🏛️', title: 'Culture & History', desc: 'Guided tours, local immersions, and UNESCO World Heritage sites.' },
  { icon: '🍜', title: 'Food & Wine', desc: 'Culinary journeys through the world\'s most vibrant food cultures.' },
]
export default function TravelPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>Wanderlust</div>
        <ul className={styles.links}>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#plan">Plan Trip</a></li>
        </ul>
        <a href="#plan" className={styles.navCta}>Plan My Trip</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroPre}>✈️ 50+ Countries · 1,000+ Curated Experiences</p>
          <h1>The World Is Waiting.<br /><span>What's Your Story?</span></h1>
          <p>Handcrafted travel experiences designed around you — from solo adventures to family getaways, honeymoons to bucket-list expeditions.</p>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Where do you want to go?" />
            <select><option>Any month</option><option>Jan-Mar</option><option>Apr-Jun</option><option>Jul-Sep</option><option>Oct-Dec</option></select>
            <select><option>1 Traveller</option><option>2</option><option>3-4</option><option>5+</option></select>
            <button>Search Trips</button>
          </div>
        </div>
      </section>
      <section className={styles.statsBar}>
        {[['50+','Countries'],['1,200+','Trips Planned'],['4.9★','Rating'],['12 Years','Experience']].map(([v,l])=>(
          <div key={l} className={styles.statItem}><span>{v}</span><p>{l}</p></div>
        ))}
      </section>
      <section id="destinations" className={styles.destinationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>Top Picks</span>
            <h2>Destinations You'll Love</h2>
          </div>
          <div className={styles.destGrid}>
            {destinations.map((d,i) => (
              <div key={d.name} className={styles.destCard} style={{'--d':`hsl(${i*40+180},60%,${30+i*5}%)`}}>
                <div className={styles.destImg} />
                <div className={styles.destBody}>
                  <span className={styles.destTag}>{d.tag}</span>
                  <div className={styles.destName}>{d.name}</div>
                  <div className={styles.destMeta}>{d.days} · {d.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="experiences" className={styles.experiencesSection}>
        <div className={styles.container}>
          <div className={styles.expGrid}>
            <div className={styles.expLeft}>
              <span className={styles.tag}>Travel Styles</span>
              <h2>Every Trip Is Uniquely Yours</h2>
              <p>We don't do cookie-cutter tours. Every itinerary is hand-built around your interests, pace, and travel style.</p>
              <a href="#plan" className={styles.btnCoral}>Start Planning →</a>
            </div>
            <div className={styles.expRight}>
              {experiences.map(e => (
                <div key={e.title} className={styles.expCard}>
                  <div className={styles.expIcon}>{e.icon}</div>
                  <div><h3>{e.title}</h3><p>{e.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="plan" className={styles.planSection}>
        <div className={styles.container}>
          <div className={styles.planGrid}>
            <div>
              <span className={styles.tag}>Get Started</span>
              <h2>Plan Your Dream Trip</h2>
              <p>Tell us where you want to go and we'll design a custom itinerary just for you — completely free.</p>
              <div className={styles.planInfo}>
                <div>📞 +1 (555) 480-TRIP</div>
                <div>📧 hello@wanderlusttravel.com</div>
                <div>🕐 Mon–Sat: 9am – 7pm</div>
              </div>
            </div>
            <form className={styles.planForm}>
              <div className={styles.formRow}><input type="text" placeholder="First Name" /><input type="text" placeholder="Last Name" /></div>
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Dream Destination(s)" />
              <div className={styles.formRow}><input type="date" placeholder="Departure Date" /><select><option>Budget: Any</option><option>Under $2,000</option><option>$2,000–$5,000</option><option>$5,000–$10,000</option><option>$10,000+</option></select></div>
              <textarea placeholder="Tell us about your ideal trip..." rows={3} />
              <button type="submit" className={styles.btnCoral}>Send My Request</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerRow}>
            <div className={styles.footerLogo}>Wanderlust</div>
            <p>© 2024 Wanderlust Travel · Demo Landing Page</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
