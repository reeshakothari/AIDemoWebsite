import styles from './page.module.css'
export const metadata={title:'HopeForward — Nonprofit'}
const causes=[
  {icon:'🍽️',t:'Food Security',d:'Providing nutritious meals to families experiencing food insecurity across 12 communities.'},
  {icon:'📚',t:'Education Access',d:'Scholarships, tutoring, and school supplies for underprivileged children.'},
  {icon:'🏥',t:'Healthcare Outreach',d:'Mobile health clinics and preventive care for underserved populations.'},
  {icon:'🌱',t:'Environmental Action',d:'Community clean-ups, tree planting, and sustainability education programmes.'},
]
const impact=[
  {v:'48,000',l:'Meals Served This Year'},
  {v:'1,200',l:'Children in School'},
  {v:'320',l:'Volunteer Champions'},
  {v:'98¢',l:'Of Every $1 Goes to Programmes'},
]
const tiers=[
  {name:'Supporter',amount:'$10/mo',perks:['Monthly impact report','Supporter badge','Tax receipt'],color:'#F97316'},
  {name:'Champion',amount:'$25/mo',perks:['All above','Exclusive updates','Name in annual report'],color:'#E85D4A',featured:true},
  {name:'Guardian',amount:'$50/mo',perks:['All above','Direct project updates','Invitation to annual gala'],color:'#C0392B'},
]
const stories=[
  {name:'Amara, 9',story:'"Before HopeForward, I missed school three days a week to help my mum find food. Now I haven\'t missed a day in two years."',loc:'Chicago, IL'},
  {name:'James & Kezia',story:'"The mobile health clinic caught my husband\'s condition before it became serious. We\'re forever grateful for this organisation."',loc:'Detroit, MI'},
  {name:'Coach Rafa',story:'"Volunteering here has changed my perspective on what a community truly is. Every Saturday I leave feeling like I\'ve done something real."',loc:'Houston, TX'},
]
export default function NonprofitPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>Hope<span>Forward</span></div>
        <ul className={styles.links}>
          <li><a href="#causes">Our Work</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#donate">Donate</a></li>
        </ul>
        <a href="#donate" className={styles.navCta}>Donate Now</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>❤️ Registered 501(c)(3) Nonprofit</div>
          <h1>Together, We Change<br /><span>More Lives.</span></h1>
          <p>HopeForward works with communities to end food insecurity, expand education, and build a healthier, more equitable world — one life at a time.</p>
          <div className={styles.heroCtas}>
            <a href="#donate" className={styles.btnCoral}>Donate Today</a>
            <a href="#causes" className={styles.btnOutline}>See Our Work</a>
          </div>
        </div>
        <div className={styles.impactWall}>
          {impact.map(({v,l})=>(
            <div key={l} className={styles.impactTile}>
              <strong>{v}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="causes" className={styles.causesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>OUR PROGRAMMES</span>
            <h2>Where Your Support Goes</h2>
          </div>
          <div className={styles.causesGrid}>
            {causes.map(c=>(
              <div key={c.t} className={styles.causeCard}>
                <div className={styles.causeIcon}>{c.icon}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                <a href="#donate" className={styles.causeLink}>Support this cause →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className={styles.storiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>REAL STORIES</span>
            <h2>The People Behind the Numbers</h2>
          </div>
          <div className={styles.storiesGrid}>
            {stories.map(s=>(
              <div key={s.name} className={styles.storyCard}>
                <div className={styles.quoteIcon}>&ldquo;</div>
                <p className={styles.storyText}>{s.story}</p>
                <div className={styles.storyAuthor}>
                  <div className={styles.authorDot}/>
                  <div><strong>{s.name}</strong><span>{s.loc}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className={styles.donateSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>MAKE A DIFFERENCE</span>
            <h2>Choose Your Impact Level</h2>
            <p>Every dollar is accounted for. 98 cents of every $1 donated goes directly to our programmes.</p>
          </div>
          <div className={styles.tiersGrid}>
            {tiers.map(t=>(
              <div key={t.name} className={`${styles.tierCard} ${t.featured?styles.tierFeatured:''}`} style={{'--c':t.color}}>
                {t.featured && <div className={styles.tierBadge}>Most Impactful</div>}
                <div className={styles.tierName}>{t.name}</div>
                <div className={styles.tierAmount}>{t.amount}</div>
                <ul className={styles.tierPerks}>
                  {t.perks.map(p=><li key={p}>{p}</li>)}
                </ul>
                <a href="#" className={styles.btnCoral}>Become a {t.name}</a>
              </div>
            ))}
          </div>
          <div className={styles.oneTime}>
            <p>Prefer a one-time donation? <a href="#">Click here →</a></p>
          </div>
          <div className={styles.volunteerBox}>
            <div className={styles.volunteerLeft}>
              <h3>Can't donate right now?</h3>
              <p>Join our volunteer network — we need people as much as funding.</p>
            </div>
            <a href="#" className={styles.btnOutline}>Become a Volunteer</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>Hope<span>Forward</span></div>
        <p>© 2024 HopeForward Nonprofit · EIN: 12-3456789 · Demo Landing Page</p>
      </footer>
    </div>
  )
}
