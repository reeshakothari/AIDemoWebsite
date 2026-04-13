import styles from './page.module.css'
export const metadata = { title: 'ClearCare Clinic' }

const specialties = [
  { icon: '❤️', name: 'Cardiology', desc: 'Comprehensive heart care with advanced diagnostics and preventive treatment.' },
  { icon: '🧠', name: 'Neurology', desc: 'Expert care for brain, spine, and nervous system conditions.' },
  { icon: '🦴', name: 'Orthopaedics', desc: 'Bone, joint, and muscle care from injury to full recovery.' },
  { icon: '👁️', name: 'Ophthalmology', desc: 'Complete eye care including surgery, lenses, and vision therapy.' },
  { icon: '🩺', name: 'General Medicine', desc: 'Primary care for the whole family — preventive, acute, and chronic.' },
  { icon: '🧬', name: 'Dermatology', desc: 'Medical and cosmetic skin treatments by certified dermatologists.' },
]
const doctors = [
  { name: 'Dr. Sarah Lin', spec: 'Cardiologist', exp: '18 years', rating: '4.9' },
  { name: 'Dr. Arjun Patel', spec: 'Neurologist', exp: '14 years', rating: '4.8' },
  { name: 'Dr. Emma Clarke', spec: 'Dermatologist', exp: '11 years', rating: '5.0' },
]
const whys = [
  { icon: '🏆', title: 'Award-Winning Care', desc: 'Recognised by the National Health Board for excellence in patient outcomes.' },
  { icon: '🔬', title: 'Advanced Technology', desc: 'Cutting-edge diagnostic equipment and minimally invasive treatment options.' },
  { icon: '⏱️', title: 'Same-Day Appointments', desc: 'Urgent care slots available every day with zero long-term waits.' },
  { icon: '🌍', title: 'Multilingual Staff', desc: 'We speak your language — over 12 languages spoken across our team.' },
]

export default function MedicalPage() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>📞 Emergency: +1 (555) 911-CARE &nbsp;|&nbsp; 🕐 Open 7 Days · 8am – 8pm &nbsp;|&nbsp; 📍 3 Clinics Across the City</div>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}><span>Clear</span>Care</div>
        <ul className={styles.links}>
          <li><a href="#specialties">Specialties</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#appointment">Appointments</a></li>
        </ul>
        <a href="#appointment" className={styles.navCta}>Book Appointment</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>✓ Accepting New Patients</div>
          <h1>Your Health Is Our <span>Priority</span></h1>
          <p>Expert medical care delivered with compassion and precision. From routine check-ups to complex conditions — we're here for every step of your health journey.</p>
          <div className={styles.heroCtas}>
            <a href="#appointment" className={styles.btnTeal}>Book Appointment</a>
            <a href="#specialties" className={styles.btnOutline}>Our Specialties</a>
          </div>
          <div className={styles.heroTrust}>
            <div className={styles.trustItem}><strong>50+</strong><span>Specialist Doctors</span></div>
            <div className={styles.trustItem}><strong>100K+</strong><span>Patients Treated</span></div>
            <div className={styles.trustItem}><strong>25 Years</strong><span>Of Excellence</span></div>
          </div>
        </div>
        <div className={styles.heroCard}>
          <div className={styles.heroCardHeader}>Next Available</div>
          <div className={styles.slotGrid}>
            {['9:00 AM', '9:30 AM', '11:00 AM', '2:00 PM', '3:30 PM', '4:00 PM'].map(t => (
              <div key={t} className={styles.slot}>{t}</div>
            ))}
          </div>
          <a href="#appointment" className={styles.btnTeal} style={{display:'block', textAlign:'center', marginTop: 20}}>See All Availability</a>
        </div>
      </section>

      <section className={styles.specialtiesSection} id="specialties">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>What We Treat</span>
            <h2>Medical Specialties</h2>
            <p>Comprehensive care across all major medical disciplines, under one roof.</p>
          </div>
          <div className={styles.specialtiesGrid}>
            {specialties.map(s => (
              <div key={s.name} className={styles.specCard}>
                <div className={styles.specIcon}>{s.icon}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <a href="#appointment" className={styles.specLink}>Book →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <span className={styles.sectionTag}>Why ClearCare</span>
              <h2>Healthcare You Can Trust</h2>
              <p>We combine medical expertise with genuine human care to ensure every patient feels seen, heard, and well-treated.</p>
              <a href="#appointment" className={styles.btnTeal}>Get Started Today</a>
            </div>
            <div className={styles.whyRight}>
              {whys.map(w => (
                <div key={w.title} className={styles.whyCard}>
                  <div className={styles.whyIcon}>{w.icon}</div>
                  <div>
                    <div className={styles.whyTitle}>{w.title}</div>
                    <div className={styles.whyDesc}>{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.doctorsSection} id="doctors">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>Our Team</span>
            <h2>Meet Our Doctors</h2>
          </div>
          <div className={styles.doctorsGrid}>
            {doctors.map(d => (
              <div key={d.name} className={styles.doctorCard}>
                <div className={styles.doctorAvatar}>{d.name.split(' ')[1][0]}</div>
                <div className={styles.doctorName}>{d.name}</div>
                <div className={styles.doctorSpec}>{d.spec}</div>
                <div className={styles.doctorMeta}>
                  <span>⭐ {d.rating}</span><span>·</span><span>{d.exp} experience</span>
                </div>
                <a href="#appointment" className={styles.btnTealOutline}>Book Appointment</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.appointmentSection} id="appointment">
        <div className={styles.container}>
          <div className={styles.appointmentGrid}>
            <div>
              <span className={styles.sectionTag}>Book Online</span>
              <h2>Schedule Your Appointment</h2>
              <p>Fill in your details and a care coordinator will confirm your booking within 2 hours.</p>
              <div className={styles.infoList}>
                <div>📍 Main Clinic: 200 Health Avenue, Suite 100</div>
                <div>📞 +1 (555) 200-CARE</div>
                <div>📧 appointments@clearcare.com</div>
                <div>🕐 Mon–Sat: 8am – 8pm · Sun: 9am – 5pm</div>
              </div>
            </div>
            <form className={styles.apptForm}>
              <div className={styles.formRow}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <select><option>Select Specialty</option>{specialties.map(s => <option key={s.name}>{s.name}</option>)}</select>
              <div className={styles.formRow}>
                <input type="date" />
                <select><option>Morning (8–12)</option><option>Afternoon (12–4)</option><option>Evening (4–8)</option></select>
              </div>
              <textarea placeholder="Any symptoms or additional notes..." rows={3} />
              <button type="submit" className={styles.btnTeal}>Confirm Appointment</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerRow}>
            <div className={styles.footerLogo}><span>Clear</span>Care</div>
            <p>© 2024 ClearCare Clinic · Demo Landing Page</p>
            <div className={styles.footerLinks}><a href="#">Privacy</a><a href="#">Terms</a></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
