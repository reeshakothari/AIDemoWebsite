import styles from './page.module.css'
export const metadata={title:'BrightSmile Dental Clinic'}
const treatments=[{icon:'🦷',t:'General Dentistry',d:'Check-ups, fillings, extractions, and preventive care for all ages.'},{icon:'✨',t:'Teeth Whitening',d:'Professional in-office and take-home whitening systems.'},{icon:'😁',t:'Orthodontics',d:'Traditional braces, clear aligners, and retainers for all ages.'},{icon:'🔬',t:'Dental Implants',d:'Permanent tooth replacement that looks and feels completely natural.'},{icon:'🦺',t:'Veneers',d:'Porcelain veneers to transform the shape, colour, and alignment of your smile.'},{icon:'🩺',t:'Emergency Dental',d:'Same-day emergency appointments for pain relief and urgent care.'}]
export default function DentalPage(){
  return(
    <div className={styles.page}>
      <div className={styles.topBar}>🦷 New patients welcome! Free consultation for first-time patients</div>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>Bright<span>Smile</span></div>
        <ul className={styles.links}><li><a href="#treatments">Treatments</a></li><li><a href="#appt">Appointments</a></li></ul>
        <a href="#appt" className={styles.navCta}>Book Free Consult</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>✓ Accepting New Patients · Pain-Free Dentistry</div>
          <h1>Your Smile Deserves<br /><span>the Best Care.</span></h1>
          <p>From routine check-ups to smile transformations — our friendly team uses the latest technology to make every visit comfortable and effective.</p>
          <div className={styles.heroCtas}>
            <a href="#appt" className={styles.btnMint}>Book Appointment</a>
            <a href="#treatments" className={styles.btnOutline}>Our Treatments</a>
          </div>
          <div className={styles.heroTrust}>
            {[['20+','Years Experience'],['15,000+','Happy Smiles'],['4.9★','Google Rating'],['0','Wait Time Guarantee']].map(([v,l])=>(
              <div key={l} className={styles.trustItem}><strong>{v}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroCard}>
            <div className={styles.heroCardHead}>Next Availability</div>
            <div className={styles.slotGrid}>
              {['8:30 AM','9:00 AM','10:30 AM','2:00 PM','3:30 PM','4:00 PM'].map(t=>(
                <div key={t} className={styles.slot}>{t}</div>
              ))}
            </div>
            <a href="#appt" className={styles.btnMint} style={{display:'block',textAlign:'center',marginTop:16}}>See Full Schedule</a>
          </div>
        </div>
      </section>
      <section id="treatments" className={styles.treatSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>Our Services</span><h2>Complete Dental Care</h2><p>Everything you need for a healthy, beautiful smile — all under one roof.</p></div>
          <div className={styles.treatGrid}>
            {treatments.map(t=>(
              <div key={t.t} className={styles.treatCard}><div className={styles.treatIcon}>{t.icon}</div><h3>{t.t}</h3><p>{t.d}</p><a href="#appt" className={styles.treatLink}>Learn More →</a></div>
            ))}
          </div>
        </div>
      </section>
      <section id="appt" className={styles.apptSection}>
        <div className={styles.container}>
          <div className={styles.apptGrid}>
            <div><span className={styles.tag}>Book Online</span><h2>Schedule Your Visit</h2><p>Your first consultation is completely free. Just pick a time and we'll take care of the rest.</p>
            <div className={styles.info}><div>📍 200 Smile Street, Dental Row</div><div>📞 +1 (555) 300-TEETH</div><div>📧 hello@brightsmile.com</div><div>🕐 Mon–Sat: 8am – 6pm</div></div></div>
            <form className={styles.form}>
              <div className={styles.formRow}><input type="text" placeholder="First Name"/><input type="text" placeholder="Last Name"/></div>
              <input type="email" placeholder="Email Address"/>
              <input type="tel" placeholder="Phone Number"/>
              <select><option>Select Treatment</option>{treatments.map(t=><option key={t.t}>{t.t}</option>)}</select>
              <div className={styles.formRow}><input type="date"/><select><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>
              <textarea placeholder="Any concerns or questions?" rows={3}/>
              <button type="submit" className={styles.btnMint}>Confirm Appointment</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.container}><div className={styles.footerRow}><div className={styles.footerLogo}>Bright<span>Smile</span></div><p>© 2024 BrightSmile Dental · Demo Landing Page</p></div></div></footer>
    </div>
  )
}
