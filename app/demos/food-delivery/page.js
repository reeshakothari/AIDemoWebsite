import styles from './page.module.css'
export const metadata={title:'ZipEats — Food Delivery'}
const categories=[{icon:'🍕',name:'Pizza'},{icon:'🍔',name:'Burgers'},{icon:'🍜',name:'Asian'},{icon:'🌮',name:'Mexican'},{icon:'🥗',name:'Healthy'},{icon:'🍣',name:'Sushi'},{icon:'🍗',name:'Chicken'},{icon:'🧆',name:'Middle East'}]
const restaurants=[{name:'Fire & Crust Pizzeria',cat:'Italian · Pizza',rating:'4.8',time:'20–30 min',delivery:'$1.99',tag:'Popular'},{name:'Seoul Kitchen',cat:'Korean · Asian',rating:'4.7',time:'25–35 min',delivery:'Free',tag:'New'},{name:'The Burger Lab',cat:'American · Burgers',rating:'4.9',time:'15–25 min',delivery:'$1.49',tag:'Top Rated'},{name:'Verde Bowl Co.',cat:'Healthy · Salads',rating:'4.6',time:'20–30 min',delivery:'Free',tag:''},{name:'Sushi Omakase',cat:'Japanese · Sushi',rating:'4.9',time:'30–45 min',delivery:'$2.99',tag:'Premium'},{name:'Taco Loco',cat:'Mexican · Street Food',rating:'4.7',time:'15–20 min',delivery:'$0.99',tag:'Fast'}]
export default function FoodDeliveryPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>Zip<span>Eats</span></div>
        <div className={styles.navSearch}><input type="text" placeholder="🔍 Search restaurants or cuisines..."/></div>
        <div className={styles.navRight}><a href="#" className={styles.navLink}>Sign In</a><a href="#" className={styles.navCta}>🛒 Cart (0)</a></div>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>⚡ 30-Minute Delivery Guarantee</div>
          <h1>Food You Love,<br /><span>Delivered Fast.</span></h1>
          <p>500+ restaurants. Real-time tracking. Door-to-door in 30 minutes or your next order is free.</p>
          <div className={styles.heroSearch}>
            <input type="text" placeholder="📍 Enter your delivery address..."/>
            <button>Find Food</button>
          </div>
          <div className={styles.heroBadges}><span>🕐 Avg 28 min delivery</span><span>⭐ 4.8 app rating</span><span>🏪 500+ restaurants</span></div>
        </div>
        <div className={styles.heroImgs}>
          <div className={styles.foodImg1}><span>🍕</span></div>
          <div className={styles.foodImg2}><span>🍔</span></div>
          <div className={styles.foodImg3}><span>🍜</span></div>
          <div className={styles.trackCard}><div className={styles.trackTop}>Your order is on the way! 🛵</div><div className={styles.trackMeta}>Arriving in <strong>12 min</strong></div><div className={styles.trackBar}><div className={styles.trackFill}/></div></div>
        </div>
      </section>
      <section className={styles.catsSection}>
        <div className={styles.container}>
          <h2>Browse by Category</h2>
          <div className={styles.catsGrid}>
            {categories.map(c=>(
              <div key={c.name} className={styles.catCard}><div className={styles.catIcon}>{c.icon}</div><div className={styles.catName}>{c.name}</div></div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.restsSection}>
        <div className={styles.container}>
          <div className={styles.restsHead}><h2>Popular Near You</h2><a href="#">See all →</a></div>
          <div className={styles.restsGrid}>
            {restaurants.map(r=>(
              <div key={r.name} className={styles.restCard}>
                <div className={styles.restImg}>{r.tag&&<span className={styles.restTag}>{r.tag}</span>}</div>
                <div className={styles.restBody}>
                  <div className={styles.restName}>{r.name}</div>
                  <div className={styles.restCat}>{r.cat}</div>
                  <div className={styles.restMeta}><span>⭐ {r.rating}</span><span>🕐 {r.time}</span><span>🚚 {r.delivery}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.appSection}>
        <div className={styles.container}>
          <div className={styles.appGrid}>
            <div><h2>Get the ZipEats App</h2><p>Track your order in real-time, unlock exclusive deals, and reorder your favourites in one tap.</p>
            <div className={styles.appBtns}><div className={styles.appBtn}><span>🍎</span>App Store</div><div className={styles.appBtn}><span>🤖</span>Google Play</div></div></div>
            <div className={styles.appFeatures}>
              {[{icon:'🗺️',t:'Live Tracking',d:'Watch your rider navigate to your door in real-time.'},{icon:'🎁',t:'ZipRewards',d:'Earn points on every order and redeem for free food.'},{icon:'⚡',t:'Express Mode',d:'Priority delivery from your favourite restaurants in under 20 minutes.'}].map(f=>(
                <div key={f.t} className={styles.appFeat}><div className={styles.featIcon}>{f.icon}</div><div><div className={styles.featTitle}>{f.t}</div><div className={styles.featDesc}>{f.d}</div></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.footerLogo}>Zip<span>Eats</span></div><p>© 2024 ZipEats · Demo Landing Page</p></footer>
    </div>
  )
}
