'use client'
import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import styles from './page.module.css'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const categories = [
  { icon: '💅', title: 'Beauty Salon', desc: 'Elegant booking pages for salons, spas & beauty studios.', color: '#ec4899', slug: 'beauty-salon', group: 'Health & Beauty' },
  { icon: '🍽️', title: 'Restaurant', desc: 'Showcase menus, ambiance, and table reservations.', color: '#f97316', slug: 'restaurant', group: 'Food & Hospitality' },
  { icon: '🏋️', title: 'Fitness & Gym', desc: 'High-energy pages for gyms, trainers & fitness brands.', color: '#10b981', slug: 'fitness-gym', group: 'Health & Beauty' },
  { icon: '🏠', title: 'Real Estate', desc: 'Property listings, agent profiles, and lead capture.', color: '#3b82f6', slug: 'real-estate', group: 'Professional' },
  { icon: '📷', title: 'Photography', desc: 'Portfolio-focused pages for photographers & creatives.', color: '#8b5cf6', slug: 'photography', group: 'Creative' },
  { icon: '🏥', title: 'Medical', desc: 'Clean, trustworthy pages for clinics & health services.', color: '#06b6d4', slug: 'medical', group: 'Health & Beauty' },
  { icon: '⚖️', title: 'Law Firm', desc: 'Authoritative pages for legal practices & attorneys.', color: '#f59e0b', slug: 'law-firm', group: 'Professional' },
  { icon: '✈️', title: 'Travel Agency', desc: 'Wanderlust-inspiring pages for travel & tour operators.', color: '#ef4444', slug: 'travel', group: 'Creative' },
  { icon: '👗', title: 'Fashion', desc: 'Stylish storefronts for fashion brands & boutiques.', color: '#d946ef', slug: 'fashion', group: 'Retail' },
  { icon: '🚀', title: 'Tech Startup', desc: 'Modern SaaS-style pages for apps & tech companies.', color: '#6366f1', slug: 'tech-startup', group: 'Professional' },
  { icon: '💍', title: 'Wedding Planner', desc: 'Romantic, elegant pages for wedding planners.', color: '#f43f5e', slug: 'wedding', group: 'Creative' },
  { icon: '🎓', title: 'Education', desc: 'Engaging pages for tutors, courses & e-learning.', color: '#22c55e', slug: 'education', group: 'Professional' },
  { icon: '🐾', title: 'Pet Care', desc: 'Friendly pages for vets, groomers & pet services.', color: '#fb923c', slug: 'pet-care', group: 'Health & Beauty' },
  { icon: '🛋️', title: 'Interior Design', desc: 'Visually rich pages for designers & decorators.', color: '#a78bfa', slug: 'interior-design', group: 'Home Services' },
  { icon: '🦷', title: 'Dental Clinic', desc: 'Clean, professional pages for dentists & oral care.', color: '#22d3ee', slug: 'dental', group: 'Health & Beauty' },
  { icon: '🍕', title: 'Food Delivery', desc: 'Appetite-driven pages for delivery & ghost kitchens.', color: '#f87171', slug: 'food-delivery', group: 'Food & Hospitality' },
  { icon: '🚗', title: 'Car Dealership', desc: 'Sleek pages for auto dealers & service centers.', color: '#64748b', slug: 'car-dealership', group: 'Home Services' },
  { icon: '🧘', title: 'Yoga & Wellness', desc: 'Calm, inviting pages for yoga studios & coaches.', color: '#4ade80', slug: 'yoga-wellness', group: 'Health & Beauty' },
  { icon: '🏨', title: 'Hotel', desc: 'Luxurious pages for hotels, resorts & B&Bs.', color: '#fbbf24', slug: 'hotel', group: 'Food & Hospitality' },
  { icon: '✂️', title: 'Barbershop', desc: "Bold pages for barbers & men's grooming studios.", color: '#34d399', slug: 'barbershop', group: 'Health & Beauty' },
  { icon: '🎵', title: 'Music School', desc: 'Creative pages for music teachers & academies.', color: '#f472b6', slug: 'music-school', group: 'Creative' },
  { icon: '🌿', title: 'Landscaping', desc: 'Fresh, earthy pages for garden & landscaping businesses.', color: '#84cc16', slug: 'landscaping', group: 'Home Services' },
  { icon: '🎉', title: 'Event Management', desc: 'Vibrant pages for event planners & organizers.', color: '#f43f5e', slug: 'event-management', group: 'Creative' },
  { icon: '💎', title: 'Jewelry Store', desc: 'Luxe, elegant pages for jewelers & accessory brands.', color: '#c7d2fe', slug: 'jewelry', group: 'Retail' },
  { icon: '🧹', title: 'Cleaning Service', desc: 'Crisp, trustworthy pages for home & office cleaners.', color: '#38bdf8', slug: 'cleaning', group: 'Home Services' },
  { icon: '🍰', title: 'Bakery', desc: 'Warm, delightful pages for bakeries & patisseries.', color: '#fcd34d', slug: 'bakery', group: 'Food & Hospitality' },
  { icon: '📦', title: 'Moving Company', desc: 'Reliable, clear pages for movers & logistics.', color: '#9ca3af', slug: 'moving', group: 'Home Services' },
  { icon: '❤️', title: 'Nonprofit', desc: 'Heartfelt, impact-driven pages for charities.', color: '#fb923c', slug: 'nonprofit', group: 'Professional' },
  { icon: '🖋️', title: 'Tattoo Studio', desc: 'Bold, edgy pages for tattoo artists & studios.', color: '#f87171', slug: 'tattoo-studio', group: 'Creative' },
]

const groups = ['All', 'Food & Hospitality', 'Health & Beauty', 'Professional', 'Retail', 'Home Services', 'Creative']

const TICKER = ['Beauty Salon', 'Restaurant', 'Fitness', 'Real Estate', 'Photography', 'Medical', 'Law Firm', 'Travel', 'Fashion', 'Tech Startup', 'Wedding', 'Education', 'Pet Care', 'Interior Design', 'Dental', 'Food Delivery', 'Car Dealership', 'Yoga', 'Hotel', 'Barbershop', 'Music School', 'Landscaping', 'Events', 'Jewelry', 'Cleaning', 'Bakery', 'Moving', 'Nonprofit', 'Tattoo Studio']

const FEATURES = [
  { icon: '🎨', accent: '#7C3AED', tag: 'DESIGN',     title: 'Industry-Specific Design',   desc: 'Each demo has a completely unique visual identity — custom color palette, typography, and layout crafted for that industry.' },
  { icon: '🛠️', accent: '#06B6D4', tag: 'DASHBOARD',  title: 'Working Admin Panel',         desc: 'Every demo ships with a fully functional admin dashboard — data tables, lead management, live stats, and an inline website editor.' },
  { icon: '✏️', accent: '#EC4899', tag: 'EDITOR',     title: 'Live Content Editor',         desc: 'Edit headlines, CTAs, and contact info directly inside the admin and see changes reflected on the demo site instantly.' },
  { icon: '📱', accent: '#10B981', tag: 'RESPONSIVE',  title: 'Mobile Responsive',           desc: 'Every page is fully responsive and tested across all screen sizes — from desktop to mobile, it looks perfect.' },
  { icon: '🎯', accent: '#F59E0B', tag: 'LEADS',      title: 'Lead Capture Built In',       desc: 'Contact forms, booking widgets, and CTA flows are embedded in every demo and feed directly into the admin leads panel.' },
  { icon: '📊', accent: '#6366F1', tag: 'ANALYTICS',  title: 'Analytics & Stats',           desc: 'Every admin dashboard includes live KPI cards, revenue stats, booking counts, and growth metrics at a glance.' },
]

const SERVICES = [
  {
    icon: '🌐', accent: '#7C3AED',
    title: 'Website Design',
    sub: 'Visual identity for every industry',
    desc: 'From color systems to typography, every demo is built with a professional visual identity that speaks directly to its target customer.',
    items: ['Custom color palettes & fonts', 'Hero, features & CTA sections', 'Industry-specific imagery & copy', 'Clean, production-quality code'],
  },
  {
    icon: '🖥️', accent: '#06B6D4',
    title: 'Admin Dashboard',
    sub: 'Full backend panel, out of the box',
    desc: 'Every demo comes with a working admin panel that lets you manage records, view leads, and edit website content — no setup needed.',
    items: ['Tab-based navigation system', 'Data tables with status filters', 'Inbound leads & enquiry tracker', 'Live stats & KPI overview cards'],
  },
  {
    icon: '✏️', accent: '#EC4899',
    title: 'Content Management',
    sub: 'Edit anything without touching code',
    desc: 'The built-in website editor lets you change headlines, CTAs, phone numbers, and section content directly from the admin panel.',
    items: ['Live inline text editing', 'Section-by-section control', 'CTA & contact info changes', 'Preview updates in real time'],
  },
  {
    icon: '🎯', accent: '#F59E0B',
    title: 'Lead Generation',
    sub: 'Convert visitors from day one',
    desc: 'Every demo includes contact forms, enquiry flows, and booking widgets that capture leads and store them automatically in the admin.',
    items: ['Contact & enquiry forms', 'Booking & appointment widgets', 'Leads stored in admin panel', 'Filter leads by status & date'],
  },
  {
    icon: '📱', accent: '#10B981',
    title: 'Mobile Optimization',
    sub: 'Flawless on every screen',
    desc: 'All demos are designed mobile-first and tested across phones, tablets, and desktops — no broken layouts, no missing content.',
    items: ['Fluid responsive grid layouts', 'Touch-friendly nav & buttons', 'Optimized font sizes', 'Fast load on mobile networks'],
  },
  {
    icon: '🚀', accent: '#6366F1',
    title: 'Performance & Speed',
    sub: 'Fast by default',
    desc: 'Built on Next.js with static rendering, every page loads instantly — giving clients confidence that the real site will be just as fast.',
    items: ['Static site generation (SSG)', 'Optimized asset delivery', 'Minimal JavaScript footprint', 'Lighthouse-ready code structure'],
  },
]

const STEPS = [
  { num: '01', accent: '#7C3AED', title: 'Choose an Industry', desc: 'Browse 29 categories — from restaurants to law firms. Filter by group or search by name to find the right demo instantly.' },
  { num: '02', accent: '#06B6D4', title: 'Open the Demo',      desc: 'Click any card to see the full landing page. Switch to the admin dashboard to explore the backend panel.' },
  { num: '03', accent: '#EC4899', title: 'Show Your Client',   desc: 'Share the live demo URL in your pitch. Clients see a real, working website — and make decisions faster.' },
]

// ─── HOOKS ────────────────────────────────────────────────────────────────────

function useCounter(end, duration = 1800) {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  useEffect(() => {
    if (!active) return
    const t0 = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setCount(Math.round(eased * end))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, end, duration])
  return [count, ref]
}

function useReveal(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const show = () => setTimeout(() => el.classList.add(styles.visible), delay)
    // If already in viewport on mount, reveal immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.98) { show(); return }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { show(); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return ref
}

// ─── DEMO CARD ────────────────────────────────────────────────────────────────

function DemoCard({ icon, title, desc, color, slug }) {
  const ref = useRef(null)

  const handleMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    const rx = (y - 0.5) * -14
    const ry = (x - 0.5) * 14
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(12px)`
  }, [])

  const handleLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
  }, [])

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{ '--c': color, '--cs': `${color}22` }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className={styles.cardShimmer} />
      <div className={styles.cardAccent} style={{ background: color }} />
      <div className={styles.cardBody}>
        <div className={styles.cardIconWrap} style={{ background: `${color}18` }}>
          <span className={styles.cardIcon}>{icon}</span>
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.cardActions}>
          <a href={`/demos/${slug}`} className={styles.cardPrimary} style={{ background: color }}>
            View Demo →
          </a>
          <a href={`/demos/${slug}/admindashboard`} className={styles.cardSecondary} style={{ color, borderColor: `${color}45` }}>
            Admin Panel
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Home() {
  const [search, setSearch] = useState('')
  const [activeGroup, setActiveGroup] = useState('All')

  const filtered = useMemo(() => categories.filter(c => {
    const mg = activeGroup === 'All' || c.group === activeGroup
    const ms = !search || c.title.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase())
    return mg && ms
  }), [search, activeGroup])

  const [c1, r1] = useCounter(29)
  const [c2, r2] = useCounter(29)
  const [c3, r3] = useCounter(7)
  const featRef    = useReveal(0)
  const servRef    = useReveal(0)
  const processRef = useReveal(0)
  const demoRef    = useReveal(0)
  const ctaRef     = useReveal(0)

  return (
    <div className={styles.page}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav className={styles.nav}>
        <div className={styles.navBrand}>
          <div className={styles.navMark}>◈</div>
          <span className={styles.navName}>Ai<span>Seva</span></span>
        </div>
        <div className={styles.navLinks}>
          <a href="#demos">Demos</a>
          <a href="#features">Features</a>
          <a href="#services">Services</a>
          <a href="https://github.com/reeshakothari/AIDemoWebsite" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <a href="#demos" className={styles.navCta}>Explore Demos →</a>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroOrb3} />
        <div className={styles.heroGrid} />
        <div className={styles.heroNoise} />

        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            29 Live Industry Demos · Admin Dashboards Included
          </div>

          <h1 className={styles.heroTitle}>
            <div className={styles.heroLineWrap}>
              <div className={styles.heroLine}>
                {'AI'.split('').map((ch, i) => (
                  <span key={i} className={styles.heroChar} style={{ animationDelay: `${0.2 + i * 0.06}s` }}>{ch}</span>
                ))}
              </div>
            </div>
            <div className={styles.heroLineWrap}>
              <div className={`${styles.heroLine} ${styles.heroLineGrad}`}>
                {'SEVA'.split('').map((ch, i) => (
                  <span key={i} className={styles.heroChar} style={{ animationDelay: `${0.4 + i * 0.06}s` }}>{ch}</span>
                ))}
              </div>
            </div>
          </h1>

          <p className={styles.heroSub}>
            Premium demo websites for every industry — each with a unique design and a full admin dashboard built in.
          </p>

          <div className={styles.heroCtas}>
            <a href="#demos" className={styles.heroBtnPrimary}>
              Explore All Demos <span className={styles.heroBtnArrow}>→</span>
            </a>
            <a href="https://github.com/reeshakothari/AIDemoWebsite" target="_blank" rel="noopener noreferrer" className={styles.heroBtnGhost}>
              View on GitHub
            </a>
          </div>

          <div className={styles.heroStatRow}>
            {[
              { num: '29', label: 'Live Demos' },
              { num: '29', label: 'Admin Panels' },
              { num: '7', label: 'Industries' },
              { num: '∞', label: 'Possibilities' },
            ].map((s, i) => (
              <div key={s.label} className={styles.heroStat} style={{ animationDelay: `${1.4 + i * 0.1}s` }}>
                <span className={styles.heroStatNum}>{s.num}</span>
                <span className={styles.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollHint}>
          <span className={styles.scrollText}>scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────────────── */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className={styles.tickerItem}>
              <span className={styles.tickerDiamond}>◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard} ref={r1}>
            <div className={styles.statNum}>{c1}</div>
            <div className={styles.statLabel}>Live Demo Sites</div>
            <div className={styles.statSub}>Unique design per industry</div>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.statCard} ref={r2}>
            <div className={styles.statNum}>{c2}</div>
            <div className={styles.statLabel}>Admin Dashboards</div>
            <div className={styles.statSub}>Data tables, leads & live editor</div>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.statCard} ref={r3}>
            <div className={styles.statNum}>{c3}</div>
            <div className={styles.statLabel}>Industry Categories</div>
            <div className={styles.statSub}>From food to professional services</div>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.statCard}>
            <div className={`${styles.statNum} ${styles.statNumGrad}`}>∞</div>
            <div className={styles.statLabel}>Possibilities</div>
            <div className={styles.statSub}>Customizable for any client</div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className={styles.featSection}>
        <div className={`${styles.featInner} ${styles.reveal}`} ref={featRef}>
          <div className={styles.sectionEye}>What You Get</div>
          <h2 className={styles.sectionTitle}>
            Everything a client needs<br />to say <em>yes.</em>
          </h2>
          <div className={styles.featGrid}>
            {FEATURES.map(f => (
              <div key={f.title} className={styles.featCard} style={{ '--fa': f.accent }}>
                <div className={styles.featCardBar} style={{ background: f.accent }} />
                <div className={styles.featTag} style={{ color: f.accent, background: `${f.accent}16` }}>{f.tag}</div>
                <div className={styles.featIcon}>{f.icon}</div>
                <h3 className={styles.featTitle}>{f.title}</h3>
                <p className={styles.featDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className={styles.servSection}>
        <div className={`${styles.servInner} ${styles.reveal}`} ref={servRef}>
          <div className={styles.sectionEye}>Core Services</div>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleWhite}`}>
            Everything your client <em>needs.</em>
          </h2>
          <div className={styles.servGrid}>
            {SERVICES.map(s => (
              <div key={s.title} className={styles.servCard} style={{ '--sa': s.accent }}>
                <div className={styles.servCardBar} style={{ background: s.accent }} />
                <div className={styles.servHead}>
                  <div className={styles.servIconWrap} style={{ background: `${s.accent}16` }}>
                    <span className={styles.servIcon}>{s.icon}</span>
                  </div>
                  <div>
                    <h3 className={styles.servTitle}>{s.title}</h3>
                    <p className={styles.servSub} style={{ color: s.accent }}>{s.sub}</p>
                  </div>
                </div>
                <p className={styles.servDesc}>{s.desc}</p>
                <ul className={styles.servList} style={{ '--sa': s.accent }}>
                  {s.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={`${styles.processInner} ${styles.reveal}`} ref={processRef}>
          <div className={styles.sectionEye}>The Process</div>
          <h2 className={styles.sectionTitle}>
            From browse to <em>close.</em>
          </h2>
          <div className={styles.processSteps}>
            {STEPS.map((s, i) => (
              <div key={s.num} className={styles.processStep}>
                <div className={styles.processNum} style={{ color: s.accent, borderColor: `${s.accent}35`, background: `${s.accent}0C` }}>{s.num}</div>
                <div className={styles.processBar} style={{ background: s.accent }} />
                <h3 className={styles.processTitle}>{s.title}</h3>
                <p className={styles.processDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO GRID ────────────────────────────────────────────────────── */}
      <section id="demos" className={styles.demoSection}>
        <div className={`${styles.demoInner} ${styles.reveal}`} ref={demoRef}>
          <div className={styles.demoTopRow}>
            <div>
              <div className={styles.sectionEye}>Browse All</div>
              <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>
                {categories.length} Industry <em>Demos.</em>
              </h2>
            </div>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>⌕</span>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search demos…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && (
                <button className={styles.searchClear} onClick={() => setSearch('')}>×</button>
              )}
            </div>
          </div>

          <div className={styles.filterRow}>
            {groups.map(g => (
              <button
                key={g}
                className={`${styles.filterBtn} ${activeGroup === g ? styles.filterActive : ''}`}
                onClick={() => setActiveGroup(g)}
              >
                {g}
                {g !== 'All' && (
                  <span className={styles.filterCount}>{categories.filter(c => c.group === g).length}</span>
                )}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No demos match &ldquo;{search}&rdquo;</p>
              <button onClick={() => { setSearch(''); setActiveGroup('All') }}>Clear filters</button>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map(c => <DemoCard key={c.slug} {...c} />)}
            </div>
          )}

          <div className={styles.gridMeta}>
            Showing {filtered.length} of {categories.length} demos
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow1} />
        <div className={styles.ctaGlow2} />
        <div className={`${styles.ctaInner} ${styles.reveal}`} ref={ctaRef}>
          <div className={styles.sectionEye} style={{ color: 'rgba(255,255,255,0.35)' }}>Start Here</div>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleWhite}`}>
            Show clients what&apos;s <em>possible.</em>
          </h2>
          <p className={styles.ctaSub}>
            Open any demo and let the design do the talking. Built to impress from the very first scroll.
          </p>
          <a href="#demos" className={styles.ctaBtn}>
            Browse All 29 Demos <span>→</span>
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerBrand}>
            <span className={styles.navMark}>◈</span>
            <span className={styles.footerName}>Ai<span>Seva</span></span>
          </div>
          <p className={styles.footerTagline}>Industry demo library</p>
        </div>
        <p className={styles.footerText}>
          AI-generated industry landing pages with full admin dashboards.
        </p>
        <p className={styles.footerCredit}>Built by Reesha Kothari</p>
      </footer>

    </div>
  )
}
