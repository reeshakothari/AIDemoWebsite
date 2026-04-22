import styles from './page.module.css'
export const metadata={title:'PHANTOM INK — Tattoo Studio'}
const artists=[
  {name:'Kai Voss',specialty:'Black & Grey Realism',exp:'12 yrs',flash:'Custom Portraits'},
  {name:'Luna Reyes',specialty:'Fine Line & Botanical',exp:'8 yrs',flash:'Minimalist Florals'},
  {name:'Drix Monroe',specialty:'Neo-Traditional',exp:'10 yrs',flash:'Bold Colour Work'},
  {name:'Sable',specialty:'Blackwork & Geometric',exp:'15 yrs',flash:'Sacred Geometry'},
]
const styles_list=[
  {t:'Blackwork',icon:'◼'},
  {t:'Realism',icon:'◉'},
  {t:'Fine Line',icon:'◌'},
  {t:'Neo-Trad',icon:'◈'},
  {t:'Geometric',icon:'◇'},
  {t:'Watercolour',icon:'◍'},
  {t:'Japanese',icon:'◉'},
  {t:'Lettering',icon:'◻'},
]
export default function TattooPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>PHANTOM <span>INK</span></div>
        <ul className={styles.links}>
          <li><a href="#artists">Artists</a></li>
          <li><a href="#styles">Styles</a></li>
          <li><a href="#book">Book</a></li>
        </ul>
        <a href="#book" className={styles.navCta}>Book a Session</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>EST. 2011 · AWARD WINNING STUDIO</div>
          <h1>ART<br />THAT<br /><span>LASTS.</span></h1>
          <p>Premium custom tattoo studio in the heart of the Arts District. Four world-class artists. Infinite possibilities.</p>
          <div className={styles.heroCtas}>
            <a href="#book" className={styles.btnCyan}>Book Your Session</a>
            <a href="#artists" className={styles.btnGhost}>Meet Our Artists</a>
          </div>
          <div className={styles.openBadge}>
            <div className={styles.greenDot}/>
            <span>Open Now · Mon–Sat 11am – 9pm</span>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.inkGrid}>
            {['◼','◉','◌','◈','◇','◍','◉','◻','◼','◉','◌','◈'].map((s,i)=>(
              <div key={i} className={styles.inkCell} style={{'--i':i}}>{s}</div>
            ))}
          </div>
          <div className={styles.heroStats}>
            {[['4,000+','Tattoos'],['12','Yrs in Business'],['100%','Custom Work']].map(([v,l])=>(
              <div key={l} className={styles.hStat}><strong>{v}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...Array(3)].map((_,ri)=>(
            <span key={ri}>
              {['CUSTOM TATTOOS','WALK-INS WELCOME','AWARD-WINNING ARTISTS','CONSULTATIONS FREE','PREMIUM INKS ONLY','NO FLASH OFF THE SHELF'].map(t=>(
                <span key={t} className={styles.tickerItem}>{t}<span className={styles.dot}>✦</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section id="artists" className={styles.artistsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>THE CREW</span>
            <h2>Meet Your Artist</h2>
          </div>
          <div className={styles.artistsGrid}>
            {artists.map((a,i)=>(
              <div key={a.name} className={styles.artistCard}>
                <div className={styles.artistAvatar} style={{'--i':i}}>
                  {a.name.split(' ').map(n=>n[0]).join('')}
                </div>
                <div className={styles.artistName}>{a.name}</div>
                <div className={styles.artistSpec}>{a.specialty}</div>
                <div className={styles.artistMeta}>
                  <span>{a.exp} experience</span>
                  <span>Flash: {a.flash}</span>
                </div>
                <a href="#book" className={styles.btnCyan} style={{display:'block',textAlign:'center',padding:'10px',fontSize:'13px'}}>
                  Book with {a.name.split(' ')[0]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="styles" className={styles.stylesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.tag}>WHAT WE DO</span>
            <h2>Styles We Master</h2>
          </div>
          <div className={styles.stylesGrid}>
            {styles_list.map((s,i)=>(
              <div key={s.t} className={styles.styleCell} style={{'--i':i}}>
                <div className={styles.styleIcon}>{s.icon}</div>
                <div className={styles.styleLabel}>{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookGrid}>
            <div className={styles.bookLeft}>
              <span className={styles.tag}>BOOK A SESSION</span>
              <h2>Ready to Get Inked?</h2>
              <p>All sessions start with a free consultation. We'll discuss your design, placement, and care before any needle touches skin.</p>
              <div className={styles.bookInfo}>
                <div>📍 22 Ink Row, Arts District</div>
                <div>📞 +1 (555) 800-TATOO</div>
                <div>💬 DM us on Instagram for inspiration</div>
              </div>
              <div className={styles.careNote}>
                <strong>Safe Studio Promise:</strong> Single-use needles, autoclave sterilisation, vegan inks available, full aftercare kit included.
              </div>
            </div>
            <form className={styles.form}>
              <div className={styles.fRow}><input type="text" placeholder="Your Name"/><input type="email" placeholder="Email"/></div>
              <input type="tel" placeholder="Phone Number"/>
              <select>
                <option>Choose Artist</option>
                {artists.map(a=><option key={a.name}>{a.name} — {a.specialty}</option>)}
              </select>
              <select>
                <option>Tattoo Style</option>
                {styles_list.map(s=><option key={s.t}>{s.t}</option>)}
              </select>
              <div className={styles.fRow}>
                <input type="text" placeholder="Preferred Date"/>
                <select><option>Approx. Size</option><option>Small (under 3")</option><option>Medium (3"–6")</option><option>Large (6"+)</option><option>Full Sleeve / Back</option></select>
              </div>
              <textarea placeholder="Describe your idea, placement, and any reference images you have..." rows={4}/>
              <button type="submit" className={styles.btnCyan}>Send Booking Request</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>PHANTOM <span>INK</span></div>
        <p>© 2024 Phantom Ink Tattoo Studio · Demo Landing Page</p>
      </footer>
    </div>
  )
}
