import styles from './page.module.css'
export const metadata={title:'Studio Forma — Interior Design'}
const projects=[{name:'The Meridian Penthouse',type:'Residential',style:'Contemporary Minimal'},{name:'Nomad Co-Working',type:'Commercial',style:'Industrial Warm'},{name:'Bloom Boutique Hotel',type:'Hospitality',style:'Biophilic Luxury'},{name:'Casa Verde',type:'Residential',style:'Mediterranean Modern'}]
const services=[{icon:'🏠',t:'Residential Design',d:'Full-home transformations from concept to completion.'},{icon:'🏢',t:'Commercial Spaces',d:'Offices, retail, and hospitality environments.'},{icon:'📐',t:'Space Planning',d:'Optimise flow, function, and feel of any space.'},{icon:'🎨',t:'FF&E Curation',d:'Furniture, fixtures, and equipment sourcing worldwide.'}]
export default function InteriorPage(){
  return(
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>STUDIO <em>FORMA</em></div>
        <ul className={styles.links}><li><a href="#work">Work</a></li><li><a href="#services">Services</a></li><li><a href="#enquire">Enquire</a></li></ul>
        <a href="#enquire" className={styles.navCta}>Start a Project</a>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroTag}>INTERIOR DESIGN STUDIO · EST. 2014</div>
          <h1>Space Is<br /><em>Everything.</em></h1>
          <p>We design interiors that work beautifully — spaces that are effortlessly functional, visually extraordinary, and deeply personal.</p>
          <a href="#work" className={styles.btnTerracotta}>View Our Work</a>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImgA}/>
          <div className={styles.heroImgB}/>
          <div className={styles.heroFloat}>10 years · 200+ spaces</div>
        </div>
      </section>
      <section id="work" className={styles.workSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><span className={styles.tag}>PORTFOLIO</span><h2>Selected Projects</h2></div>
          <div className={styles.workGrid}>
            {projects.map((p,i)=>(
              <div key={p.name} className={`${styles.workCard} ${i===0?styles.workFeat:''}`}>
                <div className={styles.workImg} style={{'--i':i}}/>
                <div className={styles.workBody}>
                  <div className={styles.workStyle}>{p.style}</div>
                  <div className={styles.workName}>{p.name}</div>
                  <div className={styles.workType}>{p.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servGrid}>
            <div><span className={styles.tag}>WHAT WE DO</span><h2>Our Services</h2><p>From a single room to an entire building — we bring clarity, craft, and creativity to every project.</p></div>
            <div className={styles.servCards}>
              {services.map(s=>(
                <div key={s.t} className={styles.servCard}><div className={styles.servIcon}>{s.icon}</div><div><h3>{s.t}</h3><p>{s.d}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="enquire" className={styles.enquireSection}>
        <div className={styles.container}>
          <div className={styles.enquireGrid}>
            <div><span className={styles.tag}>LET'S TALK</span><h2>Start Your Project</h2><p>Tell us about your space and vision. We'll get back to you within 48 hours to arrange a studio visit.</p>
            <div className={styles.info}><div>📍 Studio: 8 Forma Lane, Design Quarter</div><div>📞 +1 (555) 400-FORM</div><div>📧 hello@studioforma.com</div></div></div>
            <form className={styles.form}>
              <div className={styles.formRow}><input type="text" placeholder="Your Name"/><input type="email" placeholder="Email Address"/></div>
              <select><option>Project Type</option>{services.map(s=><option key={s.t}>{s.t}</option>)}</select>
              <select><option>Budget Range</option><option>Under $20,000</option><option>$20,000–$50,000</option><option>$50,000–$150,000</option><option>$150,000+</option></select>
              <textarea placeholder="Describe your space and what you're hoping to achieve..." rows={4}/>
              <button type="submit" className={styles.btnTerracotta}>Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}><div className={styles.footerLogo}>STUDIO <em>FORMA</em></div><p>© 2024 Studio Forma · Demo Landing Page</p></footer>
    </div>
  )
}
