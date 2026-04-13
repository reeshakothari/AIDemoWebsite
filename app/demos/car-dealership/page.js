import styles from './page.module.css'
export const metadata={title:'Apex Motors — Car Dealership'}
const cars=[{name:'Apex GT-9',type:'Sports Sedan',price:'$68,900',specs:['0–60 in 4.2s','380 HP','AWD','10" Display'],tag:'New'},{name:'Vertex SUV Elite',type:'Luxury SUV',price:'$82,500',specs:['3-Row seating','400 HP','Air suspension','Night vision'],tag:'Popular'},{name:'Nova EV',type:'Electric SUV',price:'$74,200',specs:['420mi range','Dual motor','OTA updates','Autopilot'],tag:'Electric'},{name:'Phantom Coupe',type:'GT Coupe',price:'$112,000',specs:['560 HP V8','Carbon fibre trim','Track mode','Launch control'],tag:'Limited'},{name:'Vertex Hybrid',type:'Hybrid SUV',price:'$59,900',specs:['52mpg','AWD','ADAS suite','HUD display'],tag:''},{name:'Apex Sport X',type:'Performance Car',price:'$48,500',specs:['0–60 in 5.1s','280 HP','Sport mode','Brembo brakes'],tag:'Best Value'}]
export default function CarPage(){
  return(
    <div className={styles.page}>
      <div className={styles.topBar}>0% APR financing available on all 2025 models · Book a test drive today</div>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>APEX <span>MOTORS</span></div>
        <ul className={styles.links}><li><a href="#inventory">Inventory</a></li><li><a href="#testdrive">Test Drive</a></li><li><a href="#finance">Finance</a></li></ul>
        <a href="#testdrive" className={styles.navCta}>Book Test Drive</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>2025 LINEUP · NOW AVAILABLE</div>
          <h1>DRIVE THE<br />EXTRAORDINARY.</h1>
          <p>Premium vehicles engineered for those who demand performance, luxury, and precision in perfect harmony.</p>
          <div className={styles.heroCtas}>
            <a href="#inventory" className={styles.btnSilver}>Explore Inventory</a>
            <a href="#testdrive" className={styles.btnOutline}>Book Test Drive</a>
          </div>
        </div>
        <div className={styles.heroStats}>
          {[['500+','Vehicles in Stock'],['15+','Years Selling'],['4.9★','Customer Rating'],['$0 down','Finance Available']].map(([v,l])=>(
            <div key={l} className={styles.heroStat}><span>{v}</span><p>{l}</p></div>
          ))}
        </div>
      </section>
      <section id="inventory" className={styles.inventorySection}>
        <div className={styles.container}>
          <div className={styles.invHead}><h2>Our Inventory</h2><div className={styles.invFilters}><button className={styles.active}>All</button><button>Electric</button><button>SUV</button><button>Sedan</button><button>Sports</button></div></div>
          <div className={styles.carGrid}>
            {cars.map(c=>(
              <div key={c.name} className={styles.carCard}>
                <div className={styles.carImg}>{c.tag&&<span className={styles.carTag}>{c.tag}</span>}</div>
                <div className={styles.carBody}>
                  <div className={styles.carType}>{c.type}</div>
                  <div className={styles.carName}>{c.name}</div>
                  <ul className={styles.carSpecs}>{c.specs.map(s=><li key={s}>{s}</li>)}</ul>
                  <div className={styles.carFooter}><div className={styles.carPrice}>{c.price}</div><a href="#testdrive" className={styles.carBtn}>View Details</a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="testdrive" className={styles.testSection}>
        <div className={styles.container}>
          <div className={styles.testGrid}>
            <div><h2>Book a Test Drive</h2><p>Experience the thrill of an Apex vehicle firsthand. Our specialists will guide you through every feature.</p>
            <div className={styles.testInfo}><div>📍 200 Motor Way, Auto District</div><div>📞 +1 (555) 200-APEX</div><div>🕐 Mon–Sat: 9am – 7pm · Sun: 10am – 5pm</div></div></div>
            <form className={styles.testForm}>
              <div className={styles.formRow}><input type="text" placeholder="First Name"/><input type="text" placeholder="Last Name"/></div>
              <input type="email" placeholder="Email Address"/>
              <input type="tel" placeholder="Phone Number"/>
              <select><option>Select Model</option>{cars.map(c=><option key={c.name}>{c.name} — {c.price}</option>)}</select>
              <div className={styles.formRow}><input type="date"/><select><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>
              <button type="submit" className={styles.btnSilver}>Confirm Test Drive</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.footerLogo}>APEX <span>MOTORS</span></div><p>© 2024 Apex Motors · Demo Landing Page</p></footer>
    </div>
  )
}
