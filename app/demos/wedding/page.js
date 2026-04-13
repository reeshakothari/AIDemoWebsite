import styles from './page.module.css'
export const metadata = { title: 'Ivory & Bloom — Wedding Planners' }
const services=[{icon:'💐',t:'Full Planning',d:'End-to-end wedding management from concept to send-off.'},{icon:'🎨',t:'Design & Styling',d:'Custom mood boards, florals, lighting, and décor curation.'},{icon:'📋',t:'Day-of Coordination',d:'Flawless execution on your wedding day so you can be present.'},{icon:'🍽️',t:'Vendor Management',d:'Curated network of photographers, caterers, musicians, and more.'},{icon:'💌',t:'Stationery & Invites',d:'Bespoke invitation suites, seating cards, and signage design.'},{icon:'🌹',t:'Destination Weddings',d:'Intimate elopements to grand overseas celebrations, worldwide.'}]
const recent=[{title:'Emma & James — Tuscany Villa',style:'Garden Romance',guests:'120 guests'},{title:'Priya & Arjun — Rajasthan Palace',style:'Royal Indian',guests:'400 guests'},{title:'Sophie & Marc — Paris Garden',style:'French Chic',guests:'80 guests'}]
export default function WeddingPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>Ivory <em>&</em> Bloom</div>
        <ul className={styles.links}><li><a href="#services">Services</a></li><li><a href="#portfolio">Portfolio</a></li><li><a href="#enquire">Enquire</a></li></ul>
        <a href="#enquire" className={styles.navCta}>Begin Your Journey</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>✦ Luxury Wedding Planners</div>
          <h1>Your Day.<br />Perfectly<br /><em>Imagined.</em></h1>
          <p>From intimate garden ceremonies to grand destination affairs — we craft weddings that feel entirely, beautifully you.</p>
          <a href="#enquire" className={styles.btnSage}>Start Planning Together</a>
          <div className={styles.heroMeta}><span>📍 Serving Worldwide</span><span>🌸 Est. 2012</span><span>💍 800+ Weddings</span></div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImgStack}>
            <div className={styles.heroImgA}/>
            <div className={styles.heroImgB}/>
            <div className={styles.heroCard}>
              <div className={styles.heroCardTop}>Next availability</div>
              <div className={styles.heroCardDate}>Spring 2025</div>
              <div className={styles.heroCardSub}>Limited dates remaining</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.statsBar}>
        {[['800+','Weddings Planned'],['12','Years of Magic'],['50+','Countries'],['4.9★','Average Rating']].map(([v,l])=>(
          <div key={l} className={styles.stat}><span>{v}</span><p>{l}</p></div>
        ))}
      </section>
      <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>What We Offer</span><h2>Our Services</h2><p>Every couple is unique. Our services are designed to fit your vision and your needs.</p></div>
          <div className={styles.servicesGrid}>
            {services.map(s=>(
              <div key={s.t} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3>{s.t}</h3><p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="portfolio" className={styles.portfolioSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>Our Work</span><h2>Recent Celebrations</h2></div>
          <div className={styles.portfolioGrid}>
            {recent.map((r,i)=>(
              <div key={r.title} className={`${styles.portfolioCard} ${i===0?styles.portfolioFeat:''}`}>
                <div className={styles.portfolioImg}/>
                <div className={styles.portfolioBody}>
                  <div className={styles.portfolioStyle}>{r.style}</div>
                  <div className={styles.portfolioTitle}>{r.title}</div>
                  <div className={styles.portfolioGuests}>{r.guests}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <div className={styles.quoteIcon}>💬</div>
          <blockquote>"Ivory & Bloom turned our vision into something beyond anything we could have dreamed. Our wedding was pure magic."</blockquote>
          <cite>— Charlotte & Thomas, Amalfi Coast Wedding 2024</cite>
        </div>
      </section>
      <section id="enquire" className={styles.enquireSection}>
        <div className={styles.container}>
          <div className={styles.enquireGrid}>
            <div><span className={styles.tag}>Let's Talk</span><h2>Start Your Story</h2><p>Fill in your details and one of our lead planners will reach out within 48 hours to schedule a complimentary discovery call.</p>
            <div className={styles.contactDetails}><div>📍 Studio: 22 Blossom Lane, London</div><div>📞 +44 20 7946 BLOOM</div><div>📧 hello@ivoryandbloom.com</div></div></div>
            <form className={styles.enquireForm}>
              <div className={styles.formRow}><input type="text" placeholder="Your Name"/><input type="text" placeholder="Partner's Name"/></div>
              <input type="email" placeholder="Email Address"/>
              <input type="tel" placeholder="Phone Number"/>
              <input type="date" placeholder="Wedding Date"/>
              <select><option>Estimated Guest Count</option><option>Under 50</option><option>50–100</option><option>100–200</option><option>200–400</option><option>400+</option></select>
              <select><option>Service Needed</option>{services.map(s=><option key={s.t}>{s.t}</option>)}</select>
              <textarea placeholder="Tell us about your dream wedding..." rows={3}/>
              <button type="submit" className={styles.btnSage}>Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>Ivory <em>&</em> Bloom</div>
        <p>© 2024 Ivory & Bloom · Demo Landing Page</p>
      </footer>
    </div>
  )
}
