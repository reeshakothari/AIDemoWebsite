import styles from './page.module.css'
export const metadata = { title: 'Nexus AI — Tech Startup' }
const features = [
  { icon: '🤖', title: 'AI-Powered Automation', desc: 'Automate repetitive workflows with intelligent agents that learn and adapt to your team.' },
  { icon: '⚡', title: 'Real-Time Analytics', desc: 'Instant insights across all your data sources in a single, unified dashboard.' },
  { icon: '🔐', title: 'Enterprise Security', desc: 'SOC 2 Type II certified with end-to-end encryption and zero-trust architecture.' },
  { icon: '🔗', title: '200+ Integrations', desc: 'Connect seamlessly with your existing tools — Slack, Salesforce, Jira, and more.' },
  { icon: '📈', title: 'Scalable Infrastructure', desc: 'Built on cloud-native architecture that grows with your team from startup to enterprise.' },
  { icon: '🎯', title: 'Predictive Intelligence', desc: 'Forecast trends, detect anomalies, and surface opportunities before they happen.' },
]
const tiers = [
  { name: 'Starter', price: '$49', mo: '/mo', limit: 'Up to 5 users', features: ['5 AI agents', '10K automations/mo', 'Basic analytics', 'Email support'] },
  { name: 'Growth', price: '$149', mo: '/mo', limit: 'Up to 25 users', features: ['Unlimited agents', '100K automations/mo', 'Advanced analytics', 'Priority support', 'Custom integrations'], hot: true },
  { name: 'Enterprise', price: 'Custom', mo: '', limit: 'Unlimited users', features: ['Everything in Growth', 'Dedicated CSM', 'SLA guarantee', 'On-premise option', 'Custom AI training'] },
]
const logos = ['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'Shopify']
export default function TechStartupPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.back}>← All Demos</a>
        <div className={styles.logo}>nexus<span>AI</span></div>
        <ul className={styles.links}>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#demo">Demo</a></li>
        </ul>
        <div className={styles.navActions}>
          <a href="#demo" className={styles.navSecondary}>Sign In</a>
          <a href="#demo" className={styles.navCta}>Start Free Trial</a>
        </div>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>🚀 Now in Public Beta — Join 10,000+ teams</div>
          <h1>The AI Platform That<br /><span>Works While You Sleep</span></h1>
          <p>Nexus automates your most complex workflows, surfaces critical insights, and scales with your ambition — all without writing a single line of code.</p>
          <div className={styles.heroCtas}>
            <a href="#demo" className={styles.btnGradient}>Start Free 14-Day Trial</a>
            <a href="#features" className={styles.btnGhost}>Watch Demo ▶</a>
          </div>
          <p className={styles.heroNote}>No credit card required · Cancel anytime · SOC 2 certified</p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.dashboardMock}>
            <div className={styles.mockBar}>
              <div className={styles.mockDots}><span /><span /><span /></div>
              <div className={styles.mockTitle}>Nexus Dashboard</div>
            </div>
            <div className={styles.mockBody}>
              <div className={styles.mockStat}><div className={styles.mockStatLabel}>Automations run</div><div className={styles.mockStatVal}>48,291</div><div className={styles.mockStatUp}>↑ 24%</div></div>
              <div className={styles.mockStat}><div className={styles.mockStatLabel}>Time saved</div><div className={styles.mockStatVal}>1,204h</div><div className={styles.mockStatUp}>↑ 18%</div></div>
              <div className={styles.mockChart}>{[40,65,30,80,55,90,72].map((h,i)=><div key={i} className={styles.bar} style={{height:`${h}%`}} />)}</div>
              <div className={styles.mockAgents}>
                {['Lead Enricher','Email Drafter','Report Gen'].map(a=>(
                  <div key={a} className={styles.agentRow}><div className={styles.agentDot} />{a}<div className={styles.agentStatus}>Running</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.logoBar}>
        <p>Trusted by teams at</p>
        {logos.map(l => <div key={l} className={styles.logoItem}>{l}</div>)}
      </div>
      <section id="features" className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.tag}>PLATFORM</div>
            <h2>Everything you need to move faster</h2>
            <p>One platform to automate, analyse, and accelerate your entire business.</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="pricing" className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.tag}>PRICING</div>
            <h2>Simple, transparent pricing</h2>
          </div>
          <div className={styles.tiersGrid}>
            {tiers.map(t => (
              <div key={t.name} className={`${styles.tier} ${t.hot ? styles.tierHot : ''}`}>
                {t.hot && <div className={styles.hotBadge}>Most Popular</div>}
                <div className={styles.tierName}>{t.name}</div>
                <div className={styles.tierPrice}>{t.price}<span>{t.mo}</span></div>
                <div className={styles.tierLimit}>{t.limit}</div>
                <ul className={styles.tierFeatures}>
                  {t.features.map(f => <li key={f}>✓ {f}</li>)}
                </ul>
                <a href="#demo" className={t.hot ? styles.btnGradient : styles.btnBorder}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="demo" className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <h2>Ready to move at AI speed?</h2>
          <p>Join 10,000+ teams already using Nexus to work smarter.</p>
          <form className={styles.ctaForm}>
            <input type="email" placeholder="Enter your work email" />
            <button type="submit" className={styles.btnGradient}>Get Early Access →</button>
          </form>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>nexus<span>AI</span></div>
        <p>© 2024 NexusAI · Demo Landing Page</p>
      </footer>
    </div>
  )
}
