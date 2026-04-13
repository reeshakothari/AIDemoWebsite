import styles from './page.module.css'
export const metadata = { title: 'MAISON — Fashion' }
const collections = [
  { name: 'The Void Collection', season: 'SS 2025', pieces: 24, tag: 'New Arrival' },
  { name: 'Ébène Series', season: 'AW 2024', pieces: 18, tag: 'Bestseller' },
  { name: 'Monochrome Edit', season: 'Resort 2025', pieces: 12, tag: 'Limited' },
]
const categories = ['Outerwear','Dresses','Tailoring','Knitwear','Accessories','Footwear']
export default function FashionPage() {
  return (
    <div className={styles.page}>
      <div className={styles.topStrip}>Free worldwide shipping on orders over $300 · New collection: The Void SS25</div>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← Demos</a>
        <div className={styles.logo}>MAISON</div>
        <ul className={styles.links}>
          {categories.map(c => <li key={c}><a href="#shop">{c}</a></li>)}
        </ul>
        <div className={styles.navIcons}>
          <span>🔍</span><span>♡</span><span>🛍 (0)</span>
        </div>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLeftImg} />
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroTag}>New Collection · SS 2025</div>
          <h1>THE VOID</h1>
          <p className={styles.heroDesc}>A meditation on absence and presence. Structured silhouettes in black, ivory, and shadow.</p>
          <div className={styles.heroCtas}>
            <a href="#shop" className={styles.btnBlack}>Shop Collection</a>
            <a href="#collections" className={styles.btnLink}>View Lookbook →</a>
          </div>
          <div className={styles.heroSmallGrid}>
            <div className={styles.smallImg} />
            <div className={styles.smallImg} />
          </div>
        </div>
      </section>
      <section className={styles.marqueeSection}>
        <div className={styles.marquee}>
          {['NEW ARRIVALS','FREE SHIPPING','SS 2025','SUSTAINABLE','LIMITED EDITION','MAISON'].map(t=>(
            <span key={t}>{t} &nbsp;·&nbsp;</span>
          ))}
          {['NEW ARRIVALS','FREE SHIPPING','SS 2025','SUSTAINABLE','LIMITED EDITION','MAISON'].map(t=>(
            <span key={t+'2'}>{t} &nbsp;·&nbsp;</span>
          ))}
        </div>
      </section>
      <section id="collections" className={styles.collectionsSection}>
        <div className={styles.container}>
          <div className={styles.collectionsGrid}>
            {collections.map((c,i) => (
              <div key={c.name} className={`${styles.collCard} ${i===0?styles.collCardLarge:''}`}>
                <div className={styles.collImg} />
                <div className={styles.collBody}>
                  <div className={styles.collTag}>{c.tag}</div>
                  <div className={styles.collName}>{c.name}</div>
                  <div className={styles.collMeta}>{c.season} · {c.pieces} Pieces</div>
                  <a href="#shop" className={styles.btnLink}>Explore →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="shop" className={styles.shopSection}>
        <div className={styles.container}>
          <div className={styles.shopHead}>
            <h2>Shop All</h2>
            <div className={styles.shopFilters}>
              {categories.map(c => <button key={c}>{c}</button>)}
            </div>
          </div>
          <div className={styles.productGrid}>
            {[
              { name: 'Oversized Void Coat', price: '$680', tag: 'New' },
              { name: 'Structured Midi Dress', price: '$420' },
              { name: 'Wool Blazer Noir', price: '$590', tag: 'Low Stock' },
              { name: 'Minimal Turtleneck', price: '$180' },
              { name: 'Wide-Leg Trousers', price: '$320' },
              { name: 'Leather Crossbody', price: '$480', tag: 'New' },
              { name: 'Knit Cardigan', price: '$280' },
              { name: 'Platform Loafer', price: '$540' },
            ].map((p,i) => (
              <div key={p.name} className={styles.product}>
                <div className={styles.productImg} style={{'--idx':i}}>
                  {p.tag && <span className={styles.productTag}>{p.tag}</span>}
                  <button className={styles.wishlist}>♡</button>
                </div>
                <div className={styles.productName}>{p.name}</div>
                <div className={styles.productPrice}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.ethos}>
        <div className={styles.ethosGrid}>
          <div className={styles.ethosImg} />
          <div className={styles.ethosContent}>
            <p className={styles.ethosTag}>Our Philosophy</p>
            <h2>Clothes That Outlast Trends</h2>
            <p>MAISON was founded on the belief that fashion should be considered, not consumed. Every piece is designed to last a decade, not a season.</p>
            <p>We use only certified sustainable fabrics, partner with artisan ateliers in Paris and Milan, and produce in limited runs to reduce waste.</p>
            <a href="#shop" className={styles.btnBlack}>Discover Our Story</a>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div><div className={styles.footerLogo}>MAISON</div><p>Considered fashion.<br />Limited edition.</p></div>
            <div><div className={styles.footerH}>Shop</div><ul>{categories.map(c=><li key={c}>{c}</li>)}</ul></div>
            <div><div className={styles.footerH}>Company</div><ul><li>Our Story</li><li>Sustainability</li><li>Careers</li><li>Press</li></ul></div>
            <div><div className={styles.footerH}>Help</div><ul><li>Sizing Guide</li><li>Shipping</li><li>Returns</li><li>Contact</li></ul></div>
          </div>
          <div className={styles.footerBottom}>© 2024 MAISON · Demo Landing Page</div>
        </div>
      </footer>
    </div>
  )
}
