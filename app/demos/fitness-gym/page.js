import styles from './page.module.css'
export const metadata = { title: 'PowerForge Gym' }

const plans = [
  { name: 'Starter', price: '$29', period: '/mo', perks: ['Full gym access', 'Locker room', '2 group classes/week', 'App tracking'] },
  { name: 'Pro', price: '$59', period: '/mo', perks: ['Everything in Starter', 'Unlimited classes', '1 PT session/month', 'Nutrition guide', 'Guest passes'], highlight: true },
  { name: 'Elite', price: '$99', period: '/mo', perks: ['Everything in Pro', '4 PT sessions/month', 'Body composition scans', 'Priority booking', 'VIP lounge'] },
]
const classes = [
  { time: '06:00', name: 'HIIT Blast', trainer: 'Coach Mia', spots: 4 },
  { time: '08:00', name: 'Power Lifting', trainer: 'Coach Ray', spots: 8 },
  { time: '10:00', name: 'Spin Cycle', trainer: 'Coach Jay', spots: 2 },
  { time: '12:00', name: 'CrossFit WOD', trainer: 'Coach Dex', spots: 6 },
  { time: '17:30', name: 'Boxing Fundamentals', trainer: 'Coach Sam', spots: 10 },
  { time: '19:00', name: 'Yoga Flow', trainer: 'Coach Anya', spots: 12 },
]
const stats = [{ v: '15K+', l: 'Members' }, { v: '200+', l: 'Classes/Week' }, { v: '50+', l: 'Expert Coaches' }, { v: '98%', l: 'Satisfaction' }]

export default function FitnessPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>POWER<span>FORGE</span></div>
        <ul className={styles.links}>
          <li><a href="#classes">Classes</a></li>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#join">Join</a></li>
        </ul>
        <a href="#join" className={styles.navCta}>GET STARTED</a>
        <a href="/demos/fitness-gym/admindashboard" className={styles.navAdmin}>Admin Demo →</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.tag}>No Excuses. Just Results.</div>
          <h1>TRAIN<br /><span>HARDER.</span><br />LIVE<br />STRONGER.</h1>
          <p>Elite equipment. World-class coaches. A community that pushes you beyond your limits every single day.</p>
          <div className={styles.heroCtas}>
            <a href="#join" className={styles.btnYellow}>START FREE TRIAL</a>
            <a href="#classes" className={styles.btnGhost}>VIEW CLASSES</a>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.statsGrid}>
            {stats.map(s => (
              <div key={s.l} className={styles.statBox}>
                <span className={styles.statV}>{s.v}</span>
                <span className={styles.statL}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.diagonal} />
      </section>

      <section id="classes" className={styles.classesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>TODAY'S SCHEDULE</span>
            <h2>FIND YOUR CLASS</h2>
          </div>
          <div className={styles.classGrid}>
            {classes.map(c => (
              <div key={c.name} className={styles.classCard}>
                <div className={styles.classTime}>{c.time}</div>
                <div className={styles.classInfo}>
                  <div className={styles.className}>{c.name}</div>
                  <div className={styles.classTrainer}>{c.trainer}</div>
                </div>
                <div className={styles.classSpots}>{c.spots} spots left</div>
                <a href="#join" className={styles.bookBtn}>BOOK</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className={styles.plansSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>MEMBERSHIP</span>
            <h2>CHOOSE YOUR LEVEL</h2>
          </div>
          <div className={styles.plansGrid}>
            {plans.map(p => (
              <div key={p.name} className={`${styles.planCard} ${p.highlight ? styles.planHighlight : ''}`}>
                {p.highlight && <div className={styles.popularBadge}>MOST POPULAR</div>}
                <div className={styles.planName}>{p.name}</div>
                <div className={styles.planPrice}>{p.price}<span>{p.period}</span></div>
                <ul className={styles.planPerks}>
                  {p.perks.map(perk => <li key={perk}>✓ {perk}</li>)}
                </ul>
                <a href="#join" className={p.highlight ? styles.btnYellow : styles.btnOutline}>JOIN NOW</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className={styles.joinSection}>
        <div className={styles.container}>
          <div className={styles.joinGrid}>
            <div>
              <span className={styles.sectionTag}>START TODAY</span>
              <h2>YOUR FIRST WEEK IS FREE</h2>
              <p>No contracts. No hidden fees. Just show up and we'll take care of the rest.</p>
              <div className={styles.joinPerks}>
                <div>📍 3 Locations in the City</div>
                <div>🕐 Open 5am – 11pm Daily</div>
                <div>📞 +1 (555) 400-LIFT</div>
              </div>
            </div>
            <form className={styles.joinForm}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <select><option>Select Membership</option>{plans.map(p => <option key={p.name}>{p.name} — {p.price}/mo</option>)}</select>
              <button type="submit" className={styles.btnYellow}>CLAIM FREE TRIAL</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>POWER<span>FORGE</span></div>
        <p>© 2024 PowerForge Gym · Demo Landing Page</p>
      </footer>
    </div>
  )
}
