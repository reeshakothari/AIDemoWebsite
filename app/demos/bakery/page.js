import styles from './page.module.css'
export const metadata = { title: 'The Golden Crust Bakery' }
const menu=[{cat:'Breads',items:[{n:'Sourdough Country Loaf',p:'$9'},{n:'Dark Rye & Caraway',p:'$8'},{n:'Rosemary Focaccia',p:'$7'},{n:'Brioche Loaf',p:'$10'}]},{cat:'Pastries',items:[{n:'Butter Croissant',p:'$4.50'},{n:'Pain au Chocolat',p:'$5'},{n:'Almond Frangipane Tart',p:'$6.50'},{n:'Kouign-Amann',p:'$5.50'}]},{cat:'Cakes',items:[{n:'Lemon Drizzle',p:'$38 whole'},{n:'Carrot & Walnut',p:'$42 whole'},{n:'Chocolate Ganache',p:'$48 whole'},{n:'Seasonal Fruit Tart',p:'$44 whole'}]}]
export default function BakeryPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>The Golden Crust</div>
        <ul className={styles.links}><li><a href="#menu">Menu</a></li><li><a href="#story">Our Story</a></li><li><a href="#order">Order</a></li></ul>
        <a href="#order" className={styles.navCta}>Order Online</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>🥐 Baked Fresh Every Morning Since 1994</div>
          <h1>Made With Flour,<br />Butter & <em>Love.</em></h1>
          <p>Artisan breads, flaky pastries, and indulgent cakes — baked fresh every morning in our stone oven, just the way grandmother would have.</p>
          <div className={styles.heroCtas}>
            <a href="#menu" className={styles.btnBrown}>See Today's Menu</a>
            <a href="#order" className={styles.btnOutline}>Order for Pickup</a>
          </div>
          <div className={styles.heroHours}><span>📍 14 Mill Lane, Old Quarter</span><span>🕐 Tue–Sun: 7am – 5pm (or until sold out!)</span></div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImgGrid}>
            <div className={styles.hi1}/><div className={styles.hi2}/>
            <div className={styles.hi3}/><div className={styles.hi4}/>
          </div>
        </div>
      </section>
      <div className={styles.freshBar}>✦ Fresh Sourdough Daily ✦ Organic Flour ✦ No Preservatives ✦ Stone-Oven Baked ✦ Free-Range Eggs ✦</div>
      <section id="menu" className={styles.menuSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>Today's Menu</span><h2>What's Fresh Today</h2></div>
          <div className={styles.menuGrid}>
            {menu.map(m=>(
              <div key={m.cat} className={styles.menuCol}>
                <div className={styles.menuCat}>{m.cat}</div>
                {m.items.map(item=>(
                  <div key={item.n} className={styles.menuItem}>
                    <span className={styles.menuName}>{item.n}</span>
                    <span className={styles.menuPrice}>{item.p}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="story" className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImg}/>
            <div className={styles.storyContent}>
              <span className={styles.tag}>Our Story</span>
              <h2>Thirty Years of Early Mornings</h2>
              <p>Jacques Moreau arrived in London from Lyon in 1994 with a single rolling pin, a family recipe book, and a dream. Three decades later, the Golden Crust is a neighbourhood institution.</p>
              <p>We still mill our own flour on Fridays, use the same sourdough starter Jacques brought from France, and refuse to rush a good loaf. Some things are worth doing slowly.</p>
              <div className={styles.storyStats}>
                <div><span>30+</span>Years Baking</div>
                <div><span>100%</span>Organic Flour</div>
                <div><span>4.9★</span>On Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="order" className={styles.orderSection}>
        <div className={styles.container}>
          <div className={styles.orderGrid}>
            <div><span className={styles.tag}>Pre-Order</span><h2>Order for Pickup</h2><p>Pre-order your bread and pastries to guarantee freshness. We hold your order until 11am.</p>
            <div className={styles.orderInfo}><div>📍 14 Mill Lane, Old Quarter</div><div>📞 +1 (555) 220-BAKE</div><div>🕐 Pickup: Tue–Sun 7am–12pm</div></div></div>
            <form className={styles.orderForm}>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email Address"/>
              <input type="tel" placeholder="Phone Number"/>
              <input type="date" placeholder="Pickup Date"/>
              <textarea placeholder="What would you like? Include items and quantities..." rows={5}/>
              <button type="submit" className={styles.btnBrown}>Place Pre-Order</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.footerLogo}>The Golden Crust</div><p>© 2024 The Golden Crust Bakery · Demo Landing Page</p></footer>
    </div>
  )
}
