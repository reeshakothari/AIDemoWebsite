import styles from './page.module.css'
export const metadata={title:'The Grandeur Hotel'}
const rooms=[{name:'Deluxe Room',size:'42m²',view:'City View',price:'$280',features:['King bed','Marble bathroom','City views','Nespresso machine']},{name:'Superior Suite',size:'68m²',view:'Garden View',price:'$420',features:['King bed','Lounge area','Private balcony','Butler service']},{name:'Presidential Suite',size:'120m²',view:'Panoramic',price:'$980',features:['2 bedrooms','Grand piano','Rooftop terrace','Private chef available'],featured:true}]
const amenities=[{icon:'🍽️',t:'Fine Dining',d:'Award-winning restaurant helmed by our Michelin-starred executive chef.'},{icon:'🏊',t:'Rooftop Pool',d:'Heated infinity pool with panoramic city views, open year-round.'},{icon:'💆',t:'Spa & Wellness',d:'Full-service spa with 12 treatment rooms, sauna, and steam rooms.'},{icon:'🏋️',t:'Fitness Centre',d:'State-of-the-art equipment with personal training available 24/7.'},{icon:'🎭',t:'Events & Ballroom',d:'Versatile spaces for weddings, galas, and corporate events up to 800 guests.'},{icon:'🚗',t:'Concierge',d:'24-hour concierge service for transfers, tours, dining, and experiences.'}]
export default function HotelPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>THE GRANDEUR</div>
        <ul className={styles.links}><li><a href="#rooms">Rooms</a></li><li><a href="#amenities">Amenities</a></li><li><a href="#reserve">Reserve</a></li></ul>
        <a href="#reserve" className={styles.navCta}>Reserve Now</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}/>
        <div className={styles.heroContent}>
          <div className={styles.heroPre}>FIVE STAR · ESTABLISHED 1923</div>
          <h1>Where Luxury<br />Becomes<br />a Memory.</h1>
          <p>A century of impeccable hospitality in the heart of the city. Every stay is curated, every moment considered.</p>
          <a href="#reserve" className={styles.btnGold}>Reserve Your Stay</a>
          <div className={styles.heroAwards}><span>⭐⭐⭐⭐⭐ Forbes Five-Star</span><span>✦ Condé Nast Traveller Top 50</span></div>
        </div>
        <div className={styles.heroSearchBox}>
          <div className={styles.searchTitle}>Check Availability</div>
          <div className={styles.searchField}><label>Check In</label><input type="date"/></div>
          <div className={styles.searchField}><label>Check Out</label><input type="date"/></div>
          <div className={styles.searchField}><label>Guests</label><select><option>1 Guest</option><option>2 Guests</option><option>3 Guests</option><option>4+ Guests</option></select></div>
          <button className={styles.btnGold}>Search Rooms</button>
        </div>
      </section>
      <section id="rooms" className={styles.roomsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><p className={styles.tag}>ACCOMMODATIONS</p><h2>Rooms & Suites</h2></div>
          <div className={styles.roomsGrid}>
            {rooms.map(r=>(
              <div key={r.name} className={`${styles.roomCard} ${r.featured?styles.roomFeatured:''}`}>
                {r.featured&&<div className={styles.roomBadge}>MOST REQUESTED</div>}
                <div className={styles.roomImg}/>
                <div className={styles.roomBody}>
                  <div className={styles.roomMeta}>{r.size} · {r.view}</div>
                  <div className={styles.roomName}>{r.name}</div>
                  <ul className={styles.roomFeatures}>{r.features.map(f=><li key={f}>{f}</li>)}</ul>
                  <div className={styles.roomFooter}><div className={styles.roomPrice}>{r.price}<span>/night</span></div><a href="#reserve" className={styles.roomBtn}>Book Now</a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="amenities" className={styles.amenitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><p className={styles.tag}>EXPERIENCES</p><h2>A World Within Our Walls</h2></div>
          <div className={styles.amenGrid}>{amenities.map(a=><div key={a.t} className={styles.amenCard}><div className={styles.amenIcon}>{a.icon}</div><h3>{a.t}</h3><p>{a.d}</p></div>)}</div>
        </div>
      </section>
      <section id="reserve" className={styles.reserveSection}>
        <div className={styles.container}>
          <div className={styles.reserveGrid}>
            <div><p className={styles.tag}>RESERVATIONS</p><h2>Begin Your Stay</h2><p>Our reservations team is available 24 hours a day to assist with your booking and special requests.</p>
            <div className={styles.resInfo}><div>📍 1 Grand Avenue, City Centre</div><div>📞 +1 (555) 100-HOTEL</div><div>📧 reservations@thegrandeur.com</div><div>🕐 Concierge: 24/7</div></div></div>
            <form className={styles.resForm}>
              <div className={styles.formRow}><input type="text" placeholder="First Name"/><input type="text" placeholder="Last Name"/></div>
              <input type="email" placeholder="Email Address"/>
              <input type="tel" placeholder="Phone Number"/>
              <div className={styles.formRow}><input type="date" placeholder="Check In"/><input type="date" placeholder="Check Out"/></div>
              <select><option>Room Type</option>{rooms.map(r=><option key={r.name}>{r.name} — {r.price}/night</option>)}</select>
              <textarea placeholder="Special requests, dietary needs, celebrations..." rows={3}/>
              <button type="submit" className={styles.btnGold}>Confirm Reservation</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.container}><div className={styles.footerRow}><div className={styles.footerLogo}>THE GRANDEUR</div><p>© 2024 The Grandeur Hotel · Demo Landing Page</p></div></div></footer>
    </div>
  )
}
