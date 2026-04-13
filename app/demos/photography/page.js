import styles from './page.module.css'
export const metadata = { title: 'Lumen Photography' }

const work = [
  { label: 'Editorial', span: 'tall' }, { label: 'Portrait', span: '' }, { label: 'Wedding', span: '' },
  { label: 'Commercial', span: 'wide' }, { label: 'Travel', span: '' }, { label: 'Fashion', span: 'tall' },
  { label: 'Architecture', span: '' }, { label: 'Events', span: '' },
]
const process = [
  { n: '01', title: 'Discovery Call', desc: 'We start with a conversation about your vision, needs, and the story you want to tell.' },
  { n: '02', title: 'Pre-Shoot Planning', desc: 'Location scouting, mood boards, shot lists — everything planned before we pick up the camera.' },
  { n: '03', title: 'The Shoot', desc: 'A relaxed, creative session designed to capture genuine moments and stunning frames.' },
  { n: '04', title: 'Delivery', desc: 'Edited, gallery-ready images delivered within 5 business days via private online gallery.' },
]
const packages = [
  { name: 'Essential', price: '$800', includes: ['2-hour session', '40 edited images', 'Online gallery', 'Print license'] },
  { name: 'Story', price: '$1,600', includes: ['Full-day shoot', '120 edited images', 'Online gallery', 'Print license', 'Rush delivery'], featured: true },
  { name: 'Campaign', price: 'Custom', includes: ['Multi-day shoots', 'Unlimited images', 'Art direction', 'Licensing', 'Usage rights'] },
]

export default function PhotographyPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>LUMEN</div>
        <ul className={styles.links}>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className={styles.navCta}>Book a Session</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroTag}>Visual Storytelling</div>
          <h1>Every Frame<br />Is a<br /><em>Story.</em></h1>
          <a href="#work" className={styles.heroBtn}>View Portfolio ↓</a>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImgA} />
          <div className={styles.heroImgB} />
          <div className={styles.heroImgC} />
        </div>
        <div className={styles.heroScroll}>SCROLL</div>
      </section>

      <section className={styles.statsBanner}>
        <div className={styles.statItem}><span>8+</span>Years Shooting</div>
        <div className={styles.dot} />
        <div className={styles.statItem}><span>600+</span>Projects</div>
        <div className={styles.dot} />
        <div className={styles.statItem}><span>12</span>Countries</div>
        <div className={styles.dot} />
        <div className={styles.statItem}><span>4</span>Awards</div>
      </section>

      <section id="work" className={styles.workSection}>
        <div className={styles.workHeader}>
          <p className={styles.sectionTag}>Portfolio</p>
          <h2>Selected Work</h2>
        </div>
        <div className={styles.masonryGrid}>
          {work.map((w, i) => (
            <div key={i} className={`${styles.masonryItem} ${w.span === 'tall' ? styles.tall : w.span === 'wide' ? styles.wide : ''}`}
              style={{ '--idx': i }}>
              <span>{w.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processGrid}>
            <div className={styles.processLeft}>
              <p className={styles.sectionTag}>How It Works</p>
              <h2>The Process</h2>
              <p>From first conversation to final delivery, every step is designed to create something extraordinary.</p>
            </div>
            <div className={styles.processSteps}>
              {process.map(p => (
                <div key={p.n} className={styles.step}>
                  <div className={styles.stepNum}>{p.n}</div>
                  <div>
                    <div className={styles.stepTitle}>{p.title}</div>
                    <div className={styles.stepDesc}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHead}>
            <p className={styles.sectionTag}>Pricing</p>
            <h2>Simple, Transparent Packages</h2>
          </div>
          <div className={styles.packagesGrid}>
            {packages.map(p => (
              <div key={p.name} className={`${styles.packageCard} ${p.featured ? styles.featuredCard : ''}`}>
                <div className={styles.packageName}>{p.name}</div>
                <div className={styles.packagePrice}>{p.price}</div>
                <ul className={styles.packageIncludes}>
                  {p.includes.map(i => <li key={i}>— {i}</li>)}
                </ul>
                <a href="#contact" className={p.featured ? styles.btnWhite : styles.btnOutline}>Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div>
              <p className={styles.sectionTag}>Let's Create</p>
              <h2>Start a Project</h2>
              <p>Tell me about your vision and I'll get back to you within 24 hours.</p>
              <div className={styles.contactDetails}>
                <div>hello@lumenphotography.com</div>
                <div>+1 (555) 290-LENS</div>
                <div>Based in New York · Available Worldwide</div>
              </div>
            </div>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <select>
                <option>Type of Project</option>
                <option>Portrait Session</option>
                <option>Wedding</option>
                <option>Editorial</option>
                <option>Commercial</option>
              </select>
              <textarea placeholder="Describe your project..." rows={5} />
              <button type="submit">Send →</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>LUMEN</div>
        <p>© 2024 Lumen Photography · Demo Landing Page</p>
      </footer>
    </div>
  )
}
