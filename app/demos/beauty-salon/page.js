import styles from './page.module.css'

export const metadata = {
  title: 'Lumière Beauty Salon',
  description: 'Premium beauty salon offering hair, skin, and nail services.',
}

const services = [
  { icon: '✂️', name: 'Hair Styling', desc: 'Cuts, coloring, balayage, keratin treatments, and blowouts tailored to your look.' },
  { icon: '💆', name: 'Facial & Skincare', desc: 'Deep-cleanse facials, anti-aging treatments, and custom skin therapy sessions.' },
  { icon: '💅', name: 'Nail Care', desc: 'Manicures, pedicures, gel, acrylic extensions, and nail art designs.' },
  { icon: '🪮', name: 'Brow & Lash', desc: 'Microblading, tinting, lamination, lash lifts, and custom shaping.' },
  { icon: '💄', name: 'Makeup & Bridal', desc: 'Airbrush makeup, bridal packages, and special occasion glam sessions.' },
  { icon: '🧖', name: 'Body Treatments', desc: 'Exfoliating scrubs, detox wraps, massages, and relaxation therapies.' },
]

const testimonials = [
  {
    name: 'Sophia R.',
    role: 'Regular Client',
    quote: 'Lumière completely transformed my hair. The stylists are artists — I leave feeling like a new person every single time.',
    stars: 5,
  },
  {
    name: 'Priya M.',
    role: 'Bridal Client',
    quote: 'They did my entire bridal party makeup and hair. Absolutely flawless. I cried happy tears looking in the mirror.',
    stars: 5,
  },
  {
    name: 'Amelia T.',
    role: 'Monthly Member',
    quote: 'The skincare facials here are unreal. My skin has never looked better. Worth every penny.',
    stars: 5,
  },
]

const stats = [
  { value: '8+', label: 'Years of Excellence' },
  { value: '12K+', label: 'Happy Clients' },
  { value: '25', label: 'Expert Stylists' },
  { value: '4.9★', label: 'Average Rating' },
]

export default function BeautySalonPage() {
  return (
    <div className={styles.page}>

      {/* NAV */}
      <nav className={styles.nav}>
        <a href="/" className={styles.backLink}>← All Demos</a>
        <div className={styles.logo}>Lumière</div>
        <ul className={styles.navLinks}>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>
        <a href="#booking" className={styles.navCta}>Book Now</a>
        <a href="/demos/beauty-salon/admindashboard" className={styles.navAdmin}>Admin Demo →</a>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroBadge}>Premium Beauty Studio</span>
          <h1 className={styles.heroHeading}>
            Where Beauty<br />Meets Artistry
          </h1>
          <p className={styles.heroSub}>
            Step into a world of elegance. From signature hair transformations to
            luxurious skincare rituals — we craft your most radiant self.
          </p>
          <div className={styles.heroCtas}>
            <a href="#booking" className={styles.btnPrimary}>Book Appointment</a>
            <a href="#services" className={styles.btnOutline}>Explore Services</a>
          </div>
          <div className={styles.heroStats}>
            {stats.map(s => (
              <div key={s.label} className={styles.heroStat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImageBox}>
            <div className={styles.floatingBadge1}>✨ 5-Star Rated</div>
            <div className={styles.floatingBadge2}>💐 Est. 2016</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>What We Offer</span>
            <h2 className={styles.sectionTitle}>Our Signature Services</h2>
            <p className={styles.sectionSub}>Every treatment is designed to make you feel confident, refreshed, and beautiful.</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map(s => (
              <div key={s.name} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceName}>{s.name}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <a href="#booking" className={styles.serviceLink}>Book this →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutVisual}>
              <div className={styles.aboutImgBox}>
                <div className={styles.aboutImgAccent} />
              </div>
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.sectionTag}>Our Story</span>
              <h2 className={styles.sectionTitle}>Beauty Is Our Passion,<br />You Are Our Art</h2>
              <p className={styles.aboutText}>
                Founded in 2016, Lumière was born from a simple belief — every person deserves
                to feel extraordinary. Our award-winning team of stylists, estheticians, and
                nail technicians bring years of training and genuine care to every appointment.
              </p>
              <p className={styles.aboutText}>
                We use only premium, cruelty-free products and stay ahead of the latest trends
                so you always walk out looking and feeling your absolute best.
              </p>
              <a href="#booking" className={styles.btnPrimary}>Meet Our Team</a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Our Work</span>
            <h2 className={styles.sectionTitle}>Beauty in Every Detail</h2>
          </div>
          <div className={styles.galleryGrid}>
            <div className={`${styles.galleryItem} ${styles.g1}`}><span>Hair Coloring</span></div>
            <div className={`${styles.galleryItem} ${styles.g2}`}><span>Nail Art</span></div>
            <div className={`${styles.galleryItem} ${styles.g3}`}><span>Bridal Glam</span></div>
            <div className={`${styles.galleryItem} ${styles.g4}`}><span>Skincare</span></div>
            <div className={`${styles.galleryItem} ${styles.g5}`}><span>Brow Design</span></div>
            <div className={`${styles.galleryItem} ${styles.g6}`}><span>Hair Styling</span></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Client Love</span>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map(t => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{t.name[0]}</div>
                  <div>
                    <div className={styles.authorName}>{t.name}</div>
                    <div className={styles.authorRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className={styles.booking}>
        <div className={styles.container}>
          <div className={styles.bookingGrid}>
            <div className={styles.bookingContent}>
              <span className={styles.sectionTag}>Reserve Your Spot</span>
              <h2 className={styles.sectionTitle}>Book Your Appointment</h2>
              <p className={styles.bookingSub}>
                Ready to treat yourself? Fill in your details and we'll confirm your booking within 2 hours.
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>📍 14 Rose Lane, Blossom District</div>
                <div className={styles.contactItem}>📞 +1 (555) 820-4400</div>
                <div className={styles.contactItem}>🕐 Mon–Sat: 9am – 8pm</div>
              </div>
            </div>
            <form className={styles.bookingForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input type="text" placeholder="Sophie" />
                </div>
                <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Martin" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" placeholder="sophie@email.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className={styles.formGroup}>
                <label>Service</label>
                <select>
                  <option value="">Select a service</option>
                  {services.map(s => <option key={s.name}>{s.name}</option>)}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Preferred Date</label>
                <input type="date" />
              </div>
              <button type="submit" className={styles.btnPrimary}>Confirm Booking</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogo}>Lumière</div>
              <p className={styles.footerTagline}>Where beauty meets artistry.</p>
            </div>
            <div>
              <div className={styles.footerHeading}>Services</div>
              <ul className={styles.footerList}>
                {services.map(s => <li key={s.name}>{s.name}</li>)}
              </ul>
            </div>
            <div>
              <div className={styles.footerHeading}>Visit Us</div>
              <ul className={styles.footerList}>
                <li>14 Rose Lane, Blossom District</li>
                <li>+1 (555) 820-4400</li>
                <li>hello@lumieresalon.com</li>
                <li>Mon–Sat: 9am – 8pm</li>
              </ul>
            </div>
            <div>
              <div className={styles.footerHeading}>Follow Along</div>
              <ul className={styles.footerList}>
                <li>Instagram</li>
                <li>TikTok</li>
                <li>Pinterest</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            © 2024 Lumière Beauty Salon · Demo Landing Page
          </div>
        </div>
      </footer>

    </div>
  )
}
