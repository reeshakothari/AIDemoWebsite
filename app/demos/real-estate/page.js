import styles from './page.module.css'
export const metadata = { title: 'Elevate Realty' }

const properties = [
  { type: 'For Sale', name: 'Modern Penthouse', loc: 'Downtown Core', beds: 3, baths: 2, sqft: '2,100', price: '$1.4M', tag: 'Featured' },
  { type: 'For Sale', name: 'Riverside Villa', loc: 'Westside District', beds: 5, baths: 4, sqft: '4,800', price: '$3.2M', tag: 'New' },
  { type: 'For Rent', name: 'Studio Loft', loc: 'Arts Quarter', beds: 1, baths: 1, sqft: '680', price: '$2,400/mo', tag: '' },
  { type: 'For Sale', name: 'Garden Townhouse', loc: 'North Suburbs', beds: 4, baths: 3, sqft: '3,200', price: '$890K', tag: '' },
  { type: 'For Rent', name: 'Executive Suite', loc: 'Financial District', beds: 2, baths: 2, sqft: '1,250', price: '$4,800/mo', tag: 'Hot' },
  { type: 'For Sale', name: 'Beachfront Cottage', loc: 'Seaside Heights', beds: 3, baths: 2, sqft: '1,900', price: '$2.1M', tag: 'New' },
]
const agents = [
  { name: 'Sarah Mitchell', role: 'Senior Broker', sales: '240+ sales', rating: '4.9' },
  { name: 'David Okafor', role: 'Investment Specialist', sales: '180+ sales', rating: '4.8' },
  { name: 'Priya Sharma', role: 'Luxury Properties', sales: '160+ sales', rating: '5.0' },
]
const services = [
  { icon: '🏠', title: 'Buy a Home', desc: 'Find your dream property with expert guidance from search to signing.' },
  { icon: '💰', title: 'Sell Your Property', desc: 'Maximize your sale price with our proven marketing and negotiation.' },
  { icon: '🔑', title: 'Rent & Lease', desc: 'Discover rental properties or list yours with zero hassle.' },
  { icon: '📈', title: 'Investment Advisory', desc: 'Build wealth through smart real estate investments with our experts.' },
]

export default function RealEstatePage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}><span>Elevate</span> Realty</div>
        <ul className={styles.links}>
          <li><a href="#listings">Listings</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#agents">Agents</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className={styles.navCta}>Book a Viewing</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroPre}>Trusted by 10,000+ Families</p>
          <h1>Find Your <span>Perfect</span><br />Place to Call Home</h1>
          <p className={styles.heroSub}>From first apartments to luxury estates — Elevate Realty connects you to properties that fit your life.</p>
          <div className={styles.searchBar}>
            <input type="text" placeholder="🔍  Search by city, neighbourhood, or ZIP..." />
            <select><option>Buy</option><option>Rent</option><option>Invest</option></select>
            <button className={styles.searchBtn}>Search</button>
          </div>
          <div className={styles.heroStats}>
            <div><strong>2,400+</strong><span>Active Listings</span></div>
            <div className={styles.divider} />
            <div><strong>$4.8B+</strong><span>Properties Sold</span></div>
            <div className={styles.divider} />
            <div><strong>15 Years</strong><span>In the Market</span></div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <div className={styles.heroCardImg} />
            <div className={styles.heroCardBody}>
              <div className={styles.heroCardBadge}>Featured</div>
              <div className={styles.heroCardTitle}>Skyline Penthouse</div>
              <div className={styles.heroCardMeta}>Downtown · 3bd · 2ba · $1.85M</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>What We Do</p>
            <h2>Full-Service Real Estate</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map(s => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="listings" className={styles.listingsSection}>
        <div className={styles.container}>
          <div className={styles.listingsHead}>
            <div>
              <p className={styles.sectionTag}>Properties</p>
              <h2>Featured Listings</h2>
            </div>
            <a href="#contact" className={styles.viewAll}>View All 2,400+ →</a>
          </div>
          <div className={styles.listingsGrid}>
            {properties.map(p => (
              <div key={p.name} className={styles.propCard}>
                <div className={styles.propImg}>
                  {p.tag && <span className={styles.propTag}>{p.tag}</span>}
                  <span className={styles.propType}>{p.type}</span>
                </div>
                <div className={styles.propBody}>
                  <div className={styles.propPrice}>{p.price}</div>
                  <div className={styles.propName}>{p.name}</div>
                  <div className={styles.propLoc}>📍 {p.loc}</div>
                  <div className={styles.propMeta}>
                    <span>🛏 {p.beds} Beds</span>
                    <span>🚿 {p.baths} Baths</span>
                    <span>📐 {p.sqft} ft²</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agents" className={styles.agentsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>Our Team</p>
            <h2>Meet Your Agents</h2>
          </div>
          <div className={styles.agentsGrid}>
            {agents.map(a => (
              <div key={a.name} className={styles.agentCard}>
                <div className={styles.agentAvatar}>{a.name.split(' ').map(n => n[0]).join('')}</div>
                <div className={styles.agentName}>{a.name}</div>
                <div className={styles.agentRole}>{a.role}</div>
                <div className={styles.agentStats}>
                  <span>⭐ {a.rating}</span>
                  <span>🏠 {a.sales}</span>
                </div>
                <a href="#contact" className={styles.agentBtn}>Contact Agent</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactLeft}>
              <p className={styles.sectionTag}>Get in Touch</p>
              <h2>Ready to Find Your Home?</h2>
              <p>Our agents are available 7 days a week to help you buy, sell, or rent your next property.</p>
              <div className={styles.contactInfo}>
                <div>📍 88 Park Avenue, Suite 400</div>
                <div>📞 +1 (555) 720-REAL</div>
                <div>📧 hello@elevaterealty.com</div>
                <div>🕐 Mon–Sun: 8am – 8pm</div>
              </div>
            </div>
            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <select><option>I'm looking to...</option><option>Buy</option><option>Sell</option><option>Rent</option><option>Invest</option></select>
              <textarea placeholder="Tell us about your ideal property..." rows={4} />
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <div className={styles.footerLogo}><span>Elevate</span> Realty</div>
            <p>© 2024 Elevate Realty · Demo Landing Page</p>
            <div className={styles.footerLinks}>
              <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
