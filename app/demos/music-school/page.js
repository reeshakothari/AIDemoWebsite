import styles from './page.module.css'
export const metadata={title:'Resonance Music School'}
const programs=[{icon:'🎸',t:'Guitar',levels:'Beginner to Pro'},{icon:'🎹',t:'Piano',levels:'Beginner to Advanced'},{icon:'🥁',t:'Drums',levels:'All Levels'},{icon:'🎤',t:'Vocals',levels:'All Levels'},{icon:'🎺',t:'Brass',levels:'Beginner to Intermediate'},{icon:'🎻',t:'Strings',levels:'All Levels'},{icon:'🎛️',t:'Music Production',levels:'Beginner to Pro'},{icon:'🎼',t:'Music Theory',levels:'All Levels'}]
const teachers=[{name:'Alex Rivera',instrument:'Guitar & Bass',bio:'Session guitarist with 15+ years playing for major labels.'},{name:'Soo-Yeon Park',instrument:'Piano & Theory',bio:'Julliard graduate and chamber music performer.'},{name:'Marcus Webb',instrument:'Drums & Percussion',bio:'Jazz drummer and recording studio professional.'}]
export default function MusicSchoolPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>RESONANCE</div>
        <ul className={styles.links}><li><a href="#programs">Programs</a></li><li><a href="#teachers">Teachers</a></li><li><a href="#enroll">Enroll</a></li></ul>
        <a href="#enroll" className={styles.navCta}>Free Trial Lesson</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroGlow}/>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>🎵 Professional Music Education</div>
          <h1>Find Your<br /><span>Sound.</span></h1>
          <p>From first notes to full performances — learn from professional musicians in a creative, inspiring environment designed for real growth.</p>
          <div className={styles.heroCtas}>
            <a href="#enroll" className={styles.btnPurple}>Book Free Trial Lesson</a>
            <a href="#programs" className={styles.btnOutline}>Explore Programs</a>
          </div>
          <div className={styles.heroStats}>
            {[['500+','Active Students'],['15','Instruments'],['20+','Expert Teachers'],['Online & In-Person','Classes']].map(([v,l])=>(
              <div key={l} className={styles.hStat}><strong>{v}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.noteGrid}>
            {['🎸','🎹','🎤','🥁','🎺','🎻','🎛️','🎼','🎵','🎶'].map((n,i)=>(
              <div key={i} className={styles.noteCell} style={{'--i':i}}>{n}</div>
            ))}
          </div>
        </div>
      </section>
      <section id="programs" className={styles.programsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>PROGRAMS</span><h2>Choose Your Instrument</h2></div>
          <div className={styles.programsGrid}>
            {programs.map(p=>(
              <div key={p.t} className={styles.programCard}><div className={styles.programIcon}>{p.icon}</div><div className={styles.programName}>{p.t}</div><div className={styles.programLevel}>{p.levels}</div><a href="#enroll" className={styles.programBtn}>Start →</a></div>
            ))}
          </div>
        </div>
      </section>
      <section id="teachers" className={styles.teachersSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>FACULTY</span><h2>Learn from Professionals</h2></div>
          <div className={styles.teachersGrid}>
            {teachers.map(t=>(
              <div key={t.name} className={styles.teacherCard}>
                <div className={styles.teacherAvatar}>{t.name[0]}</div>
                <div className={styles.teacherName}>{t.name}</div>
                <div className={styles.teacherInst}>{t.instrument}</div>
                <div className={styles.teacherBio}>{t.bio}</div>
                <a href="#enroll" className={styles.btnPurple} style={{display:'block',textAlign:'center',padding:'10px'}}>Book with {t.name.split(' ')[0]}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="enroll" className={styles.enrollSection}>
        <div className={styles.container}>
          <div className={styles.enrollGrid}>
            <div><span className={styles.tag}>GET STARTED</span><h2>Book Your Free Trial</h2><p>No experience needed. No commitment. Just show up and discover the joy of making music.</p>
            <div className={styles.info}><div>📍 12 Harmony Street, Arts District</div><div>📞 +1 (555) 600-MUSIC</div><div>🕐 Mon–Sat: 9am – 9pm · Sun: 10am – 6pm</div></div></div>
            <form className={styles.form}>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email Address"/>
              <input type="tel" placeholder="Phone Number"/>
              <select><option>Choose Instrument</option>{programs.map(p=><option key={p.t}>{p.t}</option>)}</select>
              <select><option>Experience Level</option><option>Complete Beginner</option><option>Some Experience</option><option>Intermediate</option><option>Advanced</option></select>
              <select><option>Preferred Schedule</option><option>Weekday Mornings</option><option>Weekday Afternoons</option><option>Weekday Evenings</option><option>Weekends</option></select>
              <button type="submit" className={styles.btnPurple}>Book Free Trial Lesson</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.footerLogo}>RESONANCE</div><p>© 2024 Resonance Music School · Demo Landing Page</p></footer>
    </div>
  )
}
