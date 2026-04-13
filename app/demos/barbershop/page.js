import styles from './page.module.css'
export const metadata={title:"King's Cut Barbershop"}
const services=[{name:'Classic Haircut',time:'30 min',price:'$35'},{name:'Haircut & Beard',time:'50 min',price:'$55'},{name:'Hot Towel Shave',time:'40 min',price:'$45'},{name:'Beard Sculpt',time:'30 min',price:'$30'},{name:'The Works',time:'75 min',price:'$80'},{name:'Junior Cut (U12)',time:'25 min',price:'$25'}]
const barbers=[{name:'Marcus King',role:'Master Barber',exp:'18 years',spec:'Classic & Fades'},{name:'Tommy Ray',role:'Senior Barber',exp:'11 years',spec:'Texture & Curls'},{name:'Darius Cole',role:'Barber',exp:'7 years',spec:'Razor Fades & Beards'}]
export default function BarbershopPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>KING'S <span>CUT</span></div>
        <ul className={styles.links}><li><a href="#services">Services</a></li><li><a href="#barbers">Barbers</a></li><li><a href="#book">Book</a></li></ul>
        <a href="#book" className={styles.navCta}>BOOK APPOINTMENT</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroBg}/>
        <div className={styles.heroLeft}>
          <div className={styles.poleStripe}/>
          <div className={styles.poleStripe}/>
          <div className={styles.poleStripe}/>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>EST. 2008 · TRADITIONAL BARBERSHOP</div>
          <h1>Old School<br />Craft.<br /><span>New School</span><br />Edge.</h1>
          <p>Walk in looking good. Walk out looking great. Hot towels, straight razors, and decades of craft — at King's Cut we do it right.</p>
          <div className={styles.heroCtas}>
            <a href="#book" className={styles.btnRed}>BOOK NOW</a>
            <a href="#services" className={styles.btnCream}>VIEW SERVICES</a>
          </div>
          <div className={styles.heroMeta}><span>📍 7 Barber Street, Old Town</span><span>🕐 Mon–Sat: 9am – 8pm</span></div>
        </div>
      </section>
      <div className={styles.statsBar}>
        {[['15+','Years Open'],['20K+','Cuts Given'],['4.9★','Rating'],['3','Master Barbers']].map(([v,l])=>(
          <div key={l} className={styles.stat}><span>{v}</span><p>{l}</p></div>
        ))}
      </div>
      <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>THE MENU</span><h2>Services & Pricing</h2></div>
          <div className={styles.servGrid}>
            {services.map(s=>(
              <div key={s.name} className={styles.servCard}>
                <div className={styles.servInfo}><div className={styles.servName}>{s.name}</div><div className={styles.servTime}>{s.time}</div></div>
                <div className={styles.servRight}><div className={styles.servPrice}>{s.price}</div><a href="#book" className={styles.bookSmall}>Book</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="barbers" className={styles.barbersSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>THE CREW</span><h2>Your Barbers</h2></div>
          <div className={styles.barbersGrid}>
            {barbers.map(b=>(
              <div key={b.name} className={styles.barberCard}>
                <div className={styles.barberAvatar}>{b.name.split(' ').map(n=>n[0]).join('')}</div>
                <div className={styles.barberName}>{b.name}</div>
                <div className={styles.barberRole}>{b.role}</div>
                <div className={styles.barberSpec}>{b.spec}</div>
                <div className={styles.barberExp}>{b.exp} experience</div>
                <a href="#book" className={styles.btnRed}>Book with {b.name.split(' ')[0]}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="book" className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookGrid}>
            <div><span className={styles.tag}>RESERVATIONS</span><h2>Book Your Chair</h2><p>No walk-ins required but always welcome. Book ahead to secure your preferred barber and time.</p>
            <div className={styles.bookInfo}><div>📍 7 Barber Street, Old Town</div><div>📞 +1 (555) 777-CUTS</div><div>🕐 Mon–Sat: 9am – 8pm</div></div></div>
            <form className={styles.bookForm}>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email Address"/>
              <input type="tel" placeholder="Phone Number"/>
              <select><option>Select Barber</option>{barbers.map(b=><option key={b.name}>{b.name}</option>)}</select>
              <select><option>Select Service</option>{services.map(s=><option key={s.name}>{s.name} — {s.price}</option>)}</select>
              <div className={styles.formRow}><input type="date"/><select><option>9:00 AM</option><option>10:00 AM</option><option>11:00 AM</option><option>12:00 PM</option><option>2:00 PM</option><option>4:00 PM</option><option>6:00 PM</option></select></div>
              <button type="submit" className={styles.btnRed}>CONFIRM BOOKING</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.footerLogo}>KING'S <span>CUT</span></div><p>© 2024 King's Cut Barbershop · Demo Landing Page</p></footer>
    </div>
  )
}
