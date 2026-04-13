import styles from './page.module.css'
export const metadata = { title: 'Sterling & Associates — Law Firm' }
const areas = [
  { icon: '🏢', title: 'Corporate Law', desc: 'M&A, contracts, governance, and regulatory compliance for businesses of all sizes.' },
  { icon: '⚖️', title: 'Litigation', desc: 'Aggressive representation in civil and commercial disputes at all court levels.' },
  { icon: '🏠', title: 'Real Estate Law', desc: 'Property transactions, disputes, zoning, and development agreements.' },
  { icon: '👨‍👩‍👧', title: 'Family Law', desc: 'Divorce, custody, adoption, and estate planning handled with discretion.' },
  { icon: '🛡️', title: 'Criminal Defence', desc: 'Unwavering defence from investigation through trial and appeal.' },
  { icon: '💼', title: 'Employment Law', desc: 'Protecting both employer and employee rights in the workplace.' },
]
const attorneys = [
  { name: 'James Sterling', title: 'Founding Partner', area: 'Corporate & Litigation', wins: '300+ cases' },
  { name: 'Margaret Cole', title: 'Senior Partner', area: 'Family & Estate Law', wins: '220+ cases' },
  { name: 'David Park', title: 'Partner', area: 'Criminal Defence', wins: '180+ cases' },
]
export default function LawFirmPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>STERLING <span>&</span> ASSOCIATES</div>
        <ul className={styles.links}>
          <li><a href="#areas">Practice Areas</a></li>
          <li><a href="#attorneys">Attorneys</a></li>
          <li><a href="#consult">Consultation</a></li>
        </ul>
        <a href="#consult" className={styles.navCta}>Free Consultation</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroRule} />
          <p className={styles.heroEst}>EST. 1994 · NEW YORK</p>
          <h1>Justice Demands<br />Excellence.</h1>
          <p className={styles.heroSub}>Three decades of fighting for our clients with integrity, strategy, and unwavering commitment. When the stakes are highest, you need Sterling.</p>
          <div className={styles.heroCtas}>
            <a href="#consult" className={styles.btnGold}>Request Consultation</a>
            <a href="#areas" className={styles.btnBorder}>Our Practice Areas</a>
          </div>
          <div className={styles.heroStats}>
            {[['30+','Years of Practice'],['500+','Cases Won'],['$2B+','Recovered for Clients'],['98%','Success Rate']].map(([v,l]) => (
              <div key={l} className={styles.heroStat}><span>{v}</span><p>{l}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.areas} id="areas">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.tag}>PRACTICE AREAS</p>
            <h2>Where We Fight For You</h2>
          </div>
          <div className={styles.areasGrid}>
            {areas.map(a => (
              <div key={a.title} className={styles.areaCard}>
                <div className={styles.areaIcon}>{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <a href="#consult" className={styles.areaLink}>Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.attorneys} id="attorneys">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.tag}>OUR TEAM</p>
            <h2>Meet the Attorneys</h2>
          </div>
          <div className={styles.attyGrid}>
            {attorneys.map(a => (
              <div key={a.name} className={styles.attyCard}>
                <div className={styles.attyImg}>{a.name.split(' ').map(n=>n[0]).join('')}</div>
                <div className={styles.attyName}>{a.name}</div>
                <div className={styles.attyTitle}>{a.title}</div>
                <div className={styles.attyArea}>{a.area}</div>
                <div className={styles.attyWins}>{a.wins}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.consult} id="consult">
        <div className={styles.container}>
          <div className={styles.consultGrid}>
            <div>
              <p className={styles.tag}>CONFIDENTIAL</p>
              <h2>Request a Free Consultation</h2>
              <p>Every great legal strategy starts with a conversation. Our consultations are completely confidential and without obligation.</p>
              <div className={styles.consultInfo}>
                <div>📍 1 Wall Street Plaza, 40th Floor, New York</div>
                <div>📞 +1 (212) 555-LEGAL</div>
                <div>📧 consult@sterlinglaw.com</div>
                <div>🕐 Mon–Fri: 8am – 7pm</div>
              </div>
            </div>
            <form className={styles.form}>
              <div className={styles.formRow}><input type="text" placeholder="First Name" /><input type="text" placeholder="Last Name" /></div>
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <select><option>Practice Area</option>{areas.map(a=><option key={a.title}>{a.title}</option>)}</select>
              <textarea placeholder="Briefly describe your legal matter..." rows={4} />
              <button type="submit" className={styles.btnGold}>Submit Request</button>
              <p className={styles.disclaimer}>All information shared is protected by attorney-client privilege.</p>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerRow}>
            <div className={styles.footerLogo}>STERLING <span>&</span> ASSOCIATES</div>
            <p>© 2024 Sterling & Associates · Demo Landing Page</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
