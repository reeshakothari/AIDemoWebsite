import styles from './page.module.css'

export const metadata = {
  title: 'Ember & Oak — Restaurant',
  description: 'A modern farm-to-table restaurant in the heart of the city.',
}

const menu = [
  {
    category: 'Starters',
    items: [
      { name: 'Burrata & Heirloom Tomatoes', desc: 'Fresh burrata, heirloom tomatoes, basil oil, sea salt flakes', price: '$16' },
      { name: 'Seared Scallops', desc: 'Pan-seared scallops, cauliflower purée, pancetta crisps, micro herbs', price: '$22' },
      { name: 'Wild Mushroom Crostini', desc: 'Toasted sourdough, wild mushroom ragù, truffle oil, pecorino', price: '$14' },
    ],
  },
  {
    category: 'Mains',
    items: [
      { name: 'Dry-Aged Ribeye', desc: '300g 45-day aged ribeye, bone marrow butter, roasted garlic, hand-cut fries', price: '$58' },
      { name: 'Saffron Seafood Risotto', desc: 'Arborio rice, lobster, clams, saffron broth, fresh dill', price: '$44' },
      { name: 'Roasted Cauliflower Steak', desc: 'Spiced cauliflower, lentil dahl, pomegranate, tahini drizzle', price: '$32' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Valrhona Chocolate Fondant', desc: 'Warm dark chocolate fondant, vanilla bean gelato, cocoa tuile', price: '$18' },
      { name: 'Lemon Tart', desc: 'Sharp lemon curd, Italian meringue, shortcrust pastry, candied zest', price: '$14' },
      { name: 'Seasonal Cheese Board', desc: 'Chef\'s selection of 4 cheeses, honeycomb, walnut crackers, fruit paste', price: '$24' },
    ],
  },
]

const testimonials = [
  { name: 'James K.', quote: 'The ribeye was the best steak I\'ve had in years. Perfectly cooked, incredible flavour. Will be back.', stars: 5 },
  { name: 'Lena W.', quote: 'Ambiance is stunning, service impeccable. The tasting menu is an absolute must-try experience.', stars: 5 },
  { name: 'Raj P.', quote: 'Celebrated our anniversary here — they went above and beyond. The desserts alone are worth the visit.', stars: 5 },
]

const features = [
  { icon: '🌿', title: 'Farm to Table', desc: 'Ingredients sourced daily from local farms and sustainable suppliers.' },
  { icon: '🍷', title: 'Curated Wine List', desc: 'Over 200 labels from boutique vineyards around the world.' },
  { icon: '👨‍🍳', title: 'Michelin-Trained Chefs', desc: 'Our kitchen team brings world-class technique to every plate.' },
  { icon: '🕯️', title: 'Private Dining', desc: 'Exclusive rooms for intimate dinners and corporate events.' },
]

export default function RestaurantPage() {
  return (
    <div className={styles.page}>

      {/* NAV */}
      <nav className={styles.nav}>
        <a href="/" className={styles.backLink}>← All Demos</a>
        <div className={styles.logo}>Ember <span>&</span> Oak</div>
        <ul className={styles.navLinks}>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
        <a href="#reserve" className={styles.navCta}>Reserve a Table</a>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Est. 2018 · Farm to Table</span>
          <h1 className={styles.heroHeading}>
            Food Crafted<br />With Purpose
          </h1>
          <p className={styles.heroSub}>
            Experience the finest seasonal ingredients transformed into unforgettable dishes.
            Where every plate tells a story of passion and provenance.
          </p>
          <div className={styles.heroCtas}>
            <a href="#reserve" className={styles.btnPrimary}>Reserve a Table</a>
            <a href="#menu" className={styles.btnOutline}>View Menu</a>
          </div>
          <div className={styles.heroMeta}>
            <span>📍 42 Ember Lane, Downtown</span>
            <span>🕐 Tue–Sun: 12pm – 11pm</span>
            <span>📞 +1 (555) 340-7700</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div>
                  <div className={styles.featureTitle}>{f.title}</div>
                  <div className={styles.featureDesc}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className={styles.menuSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Seasonal Menu</span>
            <h2 className={styles.sectionTitle}>Crafted to Perfection</h2>
            <p className={styles.sectionSub}>Our menu changes with the seasons to reflect the finest available produce.</p>
          </div>
          <div className={styles.menuGrid}>
            {menu.map(group => (
              <div key={group.category} className={styles.menuCategory}>
                <h3 className={styles.menuCategoryTitle}>{group.category}</h3>
                <div className={styles.menuItems}>
                  {group.items.map(item => (
                    <div key={item.name} className={styles.menuItem}>
                      <div className={styles.menuItemTop}>
                        <span className={styles.menuItemName}>{item.name}</span>
                        <span className={styles.menuItemPrice}>{item.price}</span>
                      </div>
                      <p className={styles.menuItemDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>
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
              <div className={styles.aboutImg} />
              <div className={styles.aboutImgSmall} />
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.sectionTag}>Our Philosophy</span>
              <h2 className={styles.sectionTitle}>Born From a Love of Real Food</h2>
              <p className={styles.aboutText}>
                Ember & Oak was founded by chef Marco Renault with one simple belief —
                great food starts with great ingredients. Every morning our team visits
                local farms and markets to hand-select the day's produce.
              </p>
              <p className={styles.aboutText}>
                Our open kitchen lets you watch the craft happen in real time. We believe
                dining is theatre, and every guest deserves a front-row seat.
              </p>
              <div className={styles.aboutStats}>
                <div className={styles.aboutStat}><span>6+</span> Years Open</div>
                <div className={styles.aboutStat}><span>40K+</span> Guests Served</div>
                <div className={styles.aboutStat}><span>3</span> Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Atmosphere</span>
            <h2 className={styles.sectionTitle}>A Feast for the Eyes</h2>
          </div>
          <div className={styles.galleryGrid}>
            <div className={`${styles.galleryItem} ${styles.g1}`}><span>The Kitchen</span></div>
            <div className={`${styles.galleryItem} ${styles.g2}`}><span>Main Dining</span></div>
            <div className={`${styles.galleryItem} ${styles.g3}`}><span>Signature Dish</span></div>
            <div className={`${styles.galleryItem} ${styles.g4}`}><span>Wine Cellar</span></div>
            <div className={`${styles.galleryItem} ${styles.g5}`}><span>Private Room</span></div>
            <div className={`${styles.galleryItem} ${styles.g6}`}><span>Dessert Bar</span></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Guest Reviews</span>
            <h2 className={styles.sectionTitle}>What Our Guests Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map(t => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
                <p className={styles.quote}>"{t.quote}"</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{t.name[0]}</div>
                  <span className={styles.authorName}>{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section id="reserve" className={styles.reserve}>
        <div className={styles.container}>
          <div className={styles.reserveGrid}>
            <div className={styles.reserveContent}>
              <span className={styles.sectionTag}>Reservations</span>
              <h2 className={styles.sectionTitle}>Book Your Table</h2>
              <p className={styles.reserveSub}>
                Reserve online or call us directly. We recommend booking at least 48 hours in advance for weekend dining.
              </p>
              <div className={styles.reserveInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <div className={styles.infoLabel}>Address</div>
                    <div className={styles.infoValue}>42 Ember Lane, Downtown District</div>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🕐</span>
                  <div>
                    <div className={styles.infoLabel}>Hours</div>
                    <div className={styles.infoValue}>Tue–Thu 12–10pm · Fri–Sat 12–11pm · Sun 12–9pm</div>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div>
                    <div className={styles.infoLabel}>Phone</div>
                    <div className={styles.infoValue}>+1 (555) 340-7700</div>
                  </div>
                </div>
              </div>
            </div>
            <form className={styles.reserveForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input type="text" placeholder="Marco" />
                </div>
                <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Renault" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" placeholder="marco@email.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className={styles.formGroup}>
                  <label>Time</label>
                  <select>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Number of Guests</label>
                <select>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Special Requests</label>
                <textarea placeholder="Dietary requirements, allergies, occasion..." rows={3} />
              </div>
              <button type="submit" className={styles.btnPrimary}>Confirm Reservation</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogo}>Ember <span>&</span> Oak</div>
              <p className={styles.footerTagline}>Food crafted with purpose.</p>
            </div>
            <div>
              <div className={styles.footerHeading}>Menu</div>
              <ul className={styles.footerList}>
                <li>Starters</li><li>Mains</li><li>Desserts</li>
                <li>Wine List</li><li>Tasting Menu</li>
              </ul>
            </div>
            <div>
              <div className={styles.footerHeading}>Visit</div>
              <ul className={styles.footerList}>
                <li>42 Ember Lane, Downtown</li>
                <li>+1 (555) 340-7700</li>
                <li>hello@emberandoak.com</li>
                <li>Tue–Sun: 12pm – 11pm</li>
              </ul>
            </div>
            <div>
              <div className={styles.footerHeading}>Follow</div>
              <ul className={styles.footerList}>
                <li>Instagram</li><li>Facebook</li>
                <li>TripAdvisor</li><li>OpenTable</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            © 2024 Ember & Oak · Demo Landing Page
          </div>
        </div>
      </footer>

    </div>
  )
}
