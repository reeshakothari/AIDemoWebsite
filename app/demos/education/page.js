import styles from './page.module.css'
export const metadata = { title: 'LearnSpark — Education Platform' }
const courses=[{icon:'💻',cat:'Technology',title:'Full-Stack Web Development',lessons:48,students:'12.4K',rating:'4.9',price:'$89',badge:'Bestseller'},{icon:'📊',cat:'Business',title:'Data Analytics Masterclass',lessons:36,students:'8.2K',rating:'4.8',price:'$69',badge:''},{icon:'🎨',cat:'Design',title:'UI/UX Design Fundamentals',lessons:42,students:'9.7K',rating:'4.9',price:'$79',badge:'New'},{icon:'📱',cat:'Technology',title:'iOS App Development with Swift',lessons:55,students:'5.1K',rating:'4.7',price:'$99',badge:''},{icon:'🤖',cat:'AI & ML',title:'Machine Learning Bootcamp',lessons:60,students:'14.1K',rating:'4.9',price:'$119',badge:'Top Rated'},{icon:'✍️',cat:'Creative',title:'Content Writing & Copywriting',lessons:28,students:'6.3K',rating:'4.8',price:'$49',badge:''}]
const categories=['All','Technology','Business','Design','AI & ML','Creative','Marketing']
const stats=[{v:'500K+',l:'Students Enrolled'},{v:'1,200+',l:'Courses Available'},{v:'4.8★',l:'Average Rating'},{v:'95%',l:'Completion Rate'}]
export default function EducationPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>Learn<span>Spark</span></div>
        <ul className={styles.links}><li><a href="#courses">Courses</a></li><li><a href="#courses">Categories</a></li><li><a href="#enroll">Pricing</a></li></ul>
        <div className={styles.navRight}><a href="#enroll" className={styles.navSecondary}>Sign In</a><a href="#enroll" className={styles.navCta}>Start Learning Free</a></div>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>🎓 Join 500,000+ learners worldwide</div>
          <h1>Skills That Open <span>Every Door</span></h1>
          <p>Learn from industry experts with hands-on courses in tech, design, business, and more. At your own pace. On any device.</p>
          <div className={styles.heroSearch}>
            <input type="text" placeholder="🔍  What do you want to learn today?" />
            <button>Search</button>
          </div>
          <div className={styles.heroCategories}>{categories.slice(1).map(c=><a key={c} href="#courses">{c}</a>)}</div>
          <div className={styles.heroStats}>{stats.map(s=><div key={s.l} className={styles.hStat}><strong>{s.v}</strong><span>{s.l}</span></div>)}</div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.coursePreview}>
            <div className={styles.previewBar}><div className={styles.previewDots}><span/><span/><span/></div></div>
            <div className={styles.previewContent}>
              <div className={styles.previewProgress}><div className={styles.previewLabel}>Your Progress<span>68%</span></div><div className={styles.progressBar}><div className={styles.progressFill}/></div></div>
              <div className={styles.previewCourse}><div className={styles.previewIcon}>💻</div><div><div className={styles.previewTitle}>Full-Stack Web Dev</div><div className={styles.previewMeta}>Lesson 32 of 48 · 12 min left</div></div></div>
              <div className={styles.previewStreak}><span>🔥</span> 14-day learning streak!</div>
              <div className={styles.previewBadges}><div className={styles.badge1}>🏆 Top Learner</div><div className={styles.badge2}>⚡ Fast Finisher</div></div>
            </div>
          </div>
        </div>
      </section>
      <section id="courses" className={styles.coursesSection}>
        <div className={styles.container}>
          <div className={styles.coursesHead}>
            <h2>Trending Courses</h2>
            <div className={styles.filterRow}>{categories.map(c=><button key={c}>{c}</button>)}</div>
          </div>
          <div className={styles.coursesGrid}>
            {courses.map(c=>(
              <div key={c.title} className={styles.courseCard}>
                <div className={styles.courseImg}>
                  <span className={styles.courseEmoji}>{c.icon}</span>
                  {c.badge&&<div className={styles.courseBadge}>{c.badge}</div>}
                </div>
                <div className={styles.courseBody}>
                  <div className={styles.courseCat}>{c.cat}</div>
                  <div className={styles.courseTitle}>{c.title}</div>
                  <div className={styles.courseMeta}><span>⭐ {c.rating}</span><span>👥 {c.students}</span><span>📚 {c.lessons} lessons</span></div>
                  <div className={styles.courseFooter}><span className={styles.coursePrice}>{c.price}</span><a href="#enroll" className={styles.courseBtn}>Enroll →</a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            {[{icon:'🎥',t:'HD Video Lessons',d:'Crystal-clear video content with downloadable resources and transcripts.'},{icon:'📱',t:'Learn Anywhere',d:'iOS, Android, and desktop apps so you never miss a lesson.'},{icon:'🏅',t:'Verified Certificates',d:'Earn industry-recognised certificates to boost your career profile.'},{icon:'💬',t:'Expert Mentors',d:'Live Q&A sessions, community forums, and 1:1 mentor office hours.'}].map(w=>(
              <div key={w.t} className={styles.whyCard}><div className={styles.whyIcon}>{w.icon}</div><h3>{w.t}</h3><p>{w.d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section id="enroll" className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2>Start Learning for Free Today</h2>
          <p>7-day free trial on all Pro courses. No credit card required.</p>
          <form className={styles.ctaForm}>
            <input type="text" placeholder="Your full name"/>
            <input type="email" placeholder="Email address"/>
            <button type="submit">Create Free Account →</button>
          </form>
          <p className={styles.ctaNote}>Already have an account? <a href="#">Sign in</a></p>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>Learn<span>Spark</span></div>
        <p>© 2024 LearnSpark · Demo Landing Page</p>
      </footer>
    </div>
  )
}
