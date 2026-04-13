import styles from './page.module.css'
export const metadata = { title: 'AURUM — Luxury Jewelry' }
const collections = [
  { name: 'Celestial', pieces: '18 pieces', desc: 'Inspired by the cosmos — diamonds set like stars across black rhodium.' },
  { name: 'L\'Or Blanc', pieces: '12 pieces', desc: 'Pure 18k white gold with emerald-cut diamonds and sapphires.' },
  { name: 'Terra', pieces: '22 pieces', desc: 'Raw earth tones — rose gold, cognac diamonds, and tourmaline.' },
]
const products = [
  { name: 'Constellation Ring', mat: '18k Gold · 0.8ct Diamond', price: '$4,200' },
  { name: 'Eclipse Pendant', mat: '18k White Gold · Sapphire', price: '$3,800' },
  { name: 'Nebula Earrings', mat: 'Platinum · 1.2ct Diamonds', price: '$6,500' },
  { name: 'Terra Bangle', mat: '18k Rose Gold · Tourmaline', price: '$2,900' },
  { name: 'Soleil Bracelet', mat: '18k Gold · Cognac Diamonds', price: '$5,100' },
  { name: 'Lumière Necklace', mat: 'Platinum · 2.0ct Diamond', price: '$12,000' },
]
export default function JewelryPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>AURUM</div>
        <ul className={styles.links}><li><a href="#collections">Collections</a></li><li><a href="#shop">Shop</a></li><li><a href="#bespoke">Bespoke</a></li></ul>
        <div className={styles.navIcons}><span>🔍</span><span>♡</span><span>🛍</span></div>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroGem}><div className={styles.gemInner}/></div>
        </div>
        <div className={styles.heroRight}>
          <p className={styles.heroEst}>FINE JEWELLERY · EST. 1978</p>
          <h1>Crafted to<br />Outlast<br />Time.</h1>
          <p>Each piece is hand-finished by master artisans in our Geneva atelier — designed for those who appreciate the extraordinary.</p>
          <div className={styles.heroCtas}>
            <a href="#collections" className={styles.btnGold}>Explore Collections</a>
            <a href="#bespoke" className={styles.btnOutline}>Bespoke Orders</a>
          </div>
        </div>
      </section>
      <section className={styles.marqueeBar}>
        {['HAND-CRAFTED IN GENEVA','18K GOLD','CONFLICT-FREE DIAMONDS','EST. 1978','LIFETIME WARRANTY'].map(t=><span key={t}>{t} &nbsp;◆&nbsp; </span>)}
        {['HAND-CRAFTED IN GENEVA','18K GOLD','CONFLICT-FREE DIAMONDS','EST. 1978','LIFETIME WARRANTY'].map(t=><span key={t+'2'}>{t} &nbsp;◆&nbsp; </span>)}
      </section>
      <section id="collections" className={styles.collectionsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><p className={styles.tag}>COLLECTIONS</p><h2>The Aurum Edit</h2></div>
          <div className={styles.collectionsGrid}>
            {collections.map((c,i)=>(
              <div key={c.name} className={styles.collCard}>
                <div className={styles.collImg} style={{'--i':i}}/>
                <div className={styles.collBody}>
                  <div className={styles.collPieces}>{c.pieces}</div>
                  <div className={styles.collName}>{c.name}</div>
                  <div className={styles.collDesc}>{c.desc}</div>
                  <a href="#shop" className={styles.collLink}>View Collection →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="shop" className={styles.shopSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><p className={styles.tag}>SHOP</p><h2>Featured Pieces</h2></div>
          <div className={styles.productGrid}>
            {products.map((p,i)=>(
              <div key={p.name} className={styles.productCard}>
                <div className={styles.productImg} style={{'--i':i}}>
                  <button className={styles.wishBtn}>♡</button>
                </div>
                <div className={styles.productName}>{p.name}</div>
                <div className={styles.productMat}>{p.mat}</div>
                <div className={styles.productPrice}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="bespoke" className={styles.bespokeSection}>
        <div className={styles.container}>
          <div className={styles.bespokeGrid}>
            <div>
              <p className={styles.tag}>BESPOKE</p>
              <h2>Your Vision, Our Craft</h2>
              <p>Commission a one-of-a-kind piece — from sketch to finished jewel, our master craftsmen will bring your vision to life.</p>
              <div className={styles.bespokeSteps}>
                {['Share your vision','Design consultation','Crafted in 6–8 weeks','Delivered worldwide'].map((s,i)=>(
                  <div key={s} className={styles.bespokeStep}><span>0{i+1}</span>{s}</div>
                ))}
              </div>
            </div>
            <form className={styles.bespokeForm}>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email Address"/>
              <select><option>Piece Type</option><option>Ring</option><option>Necklace</option><option>Earrings</option><option>Bracelet</option><option>Bangle</option></select>
              <select><option>Budget Range</option><option>$2,000–$5,000</option><option>$5,000–$15,000</option><option>$15,000–$50,000</option><option>$50,000+</option></select>
              <textarea placeholder="Describe your vision — occasion, style, metals, stones..." rows={4}/>
              <button type="submit" className={styles.btnGold}>Submit Enquiry</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <div className={styles.footerLogo}>AURUM</div>
            <p>© 2024 Aurum Fine Jewellery · Demo Landing Page</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
