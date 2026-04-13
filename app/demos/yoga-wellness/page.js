import styles from './page.module.css'
export const metadata = { title: 'Serenova Yoga & Wellness' }
const classes=[{name:'Morning Flow',time:'7:00 AM',level:'All Levels',spots:8},{name:'Power Vinyasa',time:'9:00 AM',level:'Intermediate',spots:4},{name:'Yin & Restore',time:'11:00 AM',level:'All Levels',spots:12},{name:'Breathwork',time:'1:00 PM',level:'Beginner',spots:15},{name:'Hot Yoga',time:'5:30 PM',level:'Advanced',spots:6},{name:'Meditation',time:'7:00 PM',level:'All Levels',spots:20}]
const offerings=[{icon:'🧘',t:'Yoga Classes',d:'Vinyasa, Yin, Hatha, Hot, and Restorative yoga for all experience levels.'},{icon:'🌬️',t:'Breathwork',d:'Conscious breathing practices for stress reduction and mental clarity.'},{icon:'🧠',t:'Meditation',d:'Guided meditation sessions for stillness, focus, and deep rest.'},{icon:'💆',t:'Sound Healing',d:'Tibetan bowl and gong bath sessions for cellular restoration.'},{icon:'🌿',t:'Wellness Coaching',d:'1:1 coaching on nutrition, sleep, stress, and holistic lifestyle.'},{icon:'🛁',t:'Retreat Programmes',d:'Weekend and week-long immersive retreats at our countryside sanctuary.'}]
export default function YogaPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>serenova</div>
        <ul className={styles.links}><li><a href="#classes">Classes</a></li><li><a href="#offerings">Offerings</a></li><li><a href="#book">Book</a></li></ul>
        <a href="#book" className={styles.navCta}>Book a Class</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroBg}/>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>🌿 A Sanctuary for Your Practice</div>
          <h1>Find Your <em>Centre.</em><br />Breathe. Be.</h1>
          <p>A welcoming space for all bodies, all levels, all journeys — where you come to restore, reconnect, and return to yourself.</p>
          <div className={styles.heroCtas}>
            <a href="#book" className={styles.btnSage}>Try Your First Class Free</a>
            <a href="#classes" className={styles.btnOutline}>View Schedule</a>
          </div>
          <div className={styles.heroMeta}><span>📍 22 Still Waters Lane</span><span>🕐 Open Daily 6am – 9pm</span></div>
        </div>
      </section>
      <section className={styles.statsBar}>
        {[['5,000+','Members'],['200+','Classes/Month'],['12','Expert Teachers'],['10 Years','In Practice']].map(([v,l])=>(
          <div key={l} className={styles.stat}><span>{v}</span><p>{l}</p></div>
        ))}
      </section>
      <section id="classes" className={styles.classesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>Today's Schedule</span><h2>Find Your Class</h2></div>
          <div className={styles.classGrid}>
            {classes.map(c=>(
              <div key={c.name} className={styles.classCard}>
                <div className={styles.classTime}>{c.time}</div>
                <div className={styles.classInfo}><div className={styles.className}>{c.name}</div><div className={styles.classLevel}>{c.level} · {c.spots} spots left</div></div>
                <a href="#book" className={styles.classBtn}>Book</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="offerings" className={styles.offeringsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>What We Offer</span><h2>Holistic Wellbeing</h2></div>
          <div className={styles.offeringsGrid}>
            {offerings.map(o=>(
              <div key={o.t} className={styles.offerCard}><div className={styles.offerIcon}>{o.icon}</div><h3>{o.t}</h3><p>{o.d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <div className={styles.leafDecor}>🍃</div>
          <blockquote>"Serenova didn't just teach me yoga — it changed how I relate to myself. I've never felt so grounded."</blockquote>
          <cite>— Maya S., Member since 2021</cite>
        </div>
      </section>
      <section id="book" className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookGrid}>
            <div><span className={styles.tag}>Begin Your Journey</span><h2>Book Your First Class</h2><p>Your first class is on us. Just show up, breathe, and let the rest follow.</p>
            <div className={styles.bookInfo}><div>📍 22 Still Waters Lane, Meadow District</div><div>📞 +1 (555) 360-YOGA</div><div>🕐 Mon–Sun: 6am – 9pm</div></div></div>
            <form className={styles.bookForm}>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email Address"/>
              <select><option>Select a Class</option>{classes.map(c=><option key={c.name}>{c.name} — {c.time}</option>)}</select>
              <input type="date"/>
              <textarea placeholder="Any injuries or areas to be aware of?" rows={3}/>
              <button type="submit" className={styles.btnSage}>Reserve My Free Class</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.footerLogo}>serenova</div><p>© 2024 Serenova Wellness · Demo Landing Page</p></footer>
    </div>
  )
}
