import styles from './page.module.css'
export const metadata={title:'Pawsome Pet Care'}
const services=[{icon:'🐾',t:'Grooming',d:'Full grooming, bath & brush, nail trim, and ear cleaning for all breeds.'},{icon:'🏥',t:'Veterinary Care',d:'Annual check-ups, vaccinations, diagnostics, and emergency services.'},{icon:'🏠',t:'Pet Boarding',d:'Cozy overnight stays with 24/7 supervision and play sessions.'},{icon:'🦴',t:'Doggy Daycare',d:'Full-day supervised play, socialisation, and enrichment activities.'},{icon:'🐕',t:'Dog Training',d:'Puppy classes, obedience training, and behaviour modification.'},{icon:'🚐',t:'Mobile Vet',d:'In-home veterinary visits — convenient care at your door.'}]
export default function PetCarePage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>Paw<span>some</span></div>
        <ul className={styles.links}><li><a href="#services">Services</a></li><li><a href="#book">Book</a></li></ul>
        <a href="#book" className={styles.navCta}>Book Appointment</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>🐾 Trusted by 3,000+ Pet Families</div>
          <h1>Happy Pets.<br /><span>Happy You.</span></h1>
          <p>From grooming to vet care, boarding to training — Pawsome is your one-stop destination for everything your furry family member needs.</p>
          <div className={styles.heroCtas}>
            <a href="#book" className={styles.btnOrange}>Book Now</a>
            <a href="#services" className={styles.btnOutline}>Our Services</a>
          </div>
          <div className={styles.heroPets}><span>🐶 Dogs</span><span>🐱 Cats</span><span>🐰 Rabbits</span><span>🐹 Small Animals</span></div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImgA}/>
          <div className={styles.heroImgB}/>
          <div className={styles.heroCard}><div className={styles.heroCardIcon}>⭐</div><div><div className={styles.heroCardVal}>4.9/5</div><div className={styles.heroCardSub}>from 2,800+ reviews</div></div></div>
        </div>
      </section>
      <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>What We Offer</span><h2>Everything Your Pet Needs</h2></div>
          <div className={styles.servGrid}>
            {services.map(s=>(
              <div key={s.t} className={styles.servCard}><div className={styles.servIcon}>{s.icon}</div><h3>{s.t}</h3><p>{s.d}</p><a href="#book" className={styles.servLink}>Book →</a></div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            {[{icon:'❤️',t:'We Love Animals',d:'Every staff member is pet-certified and genuinely passionate about animal welfare.'},{icon:'🔒',t:'Safe & Insured',d:'Fully licensed, insured, and CCTV monitored for your peace of mind.'},{icon:'🕐',t:'Open 7 Days',d:'Including evenings and weekends — because pets need care on their schedule.'},{icon:'📱',t:'Pet Updates',d:'Live photo and status updates throughout every appointment and stay.'}].map(w=>(
              <div key={w.t} className={styles.whyCard}><div className={styles.whyIcon}>{w.icon}</div><h3>{w.t}</h3><p>{w.d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section id="book" className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookGrid}>
            <div><span className={styles.tag}>Book Online</span><h2>Schedule Your Pet's Visit</h2><p>Easy online booking — just tell us about your pet and we'll take care of the rest.</p>
            <div className={styles.bookInfo}><div>📍 88 Paw Lane, Pet District</div><div>📞 +1 (555) 729-WOOF</div><div>🕐 Open 7 days: 8am – 7pm</div></div></div>
            <form className={styles.bookForm}>
              <div className={styles.formRow}><input type="text" placeholder="Your Name"/><input type="text" placeholder="Pet's Name"/></div>
              <input type="email" placeholder="Email Address"/>
              <div className={styles.formRow}><select><option>Pet Type</option><option>Dog</option><option>Cat</option><option>Rabbit</option><option>Other</option></select><input type="text" placeholder="Breed"/></div>
              <select><option>Select Service</option>{services.map(s=><option key={s.t}>{s.t}</option>)}</select>
              <input type="date"/>
              <textarea placeholder="Any special needs or notes about your pet?" rows={3}/>
              <button type="submit" className={styles.btnOrange}>Book My Appointment</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.footerLogo}>Paw<span>some</span></div><p>© 2024 Pawsome Pet Care · Demo Landing Page</p></footer>
    </div>
  )
}
