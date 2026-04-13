import './globals.css'
import styles from './page.module.css'

const categories = [
  {
    icon: '💅',
    title: 'Beauty Salon',
    desc: 'Elegant design for salons, spas, and beauty studios.',
    color: '#f472b6',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    slug: 'beauty-salon',
  },
  {
    icon: '🍽️',
    title: 'Restaurant & Cafe',
    desc: 'Showcase menus, ambiance, and reservations beautifully.',
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, #fb923c, #f97316)',
    slug: 'restaurant',
  },
  {
    icon: '🏋️',
    title: 'Fitness & Gym',
    desc: 'High-energy pages for gyms, trainers, and fitness brands.',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #34d399, #10b981)',
    slug: 'fitness-gym',
  },
  {
    icon: '🏠',
    title: 'Real Estate',
    desc: 'Property listings, agent profiles, and lead capture forms.',
    color: '#60a5fa',
    gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    slug: 'real-estate',
  },
  {
    icon: '📷',
    title: 'Photography Studio',
    desc: 'Portfolio-focused pages for photographers and creatives.',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    slug: 'photography',
  },
  {
    icon: '🏥',
    title: 'Medical & Healthcare',
    desc: 'Clean, trustworthy pages for clinics and health services.',
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
    slug: 'medical',
  },
  {
    icon: '⚖️',
    title: 'Law Firm',
    desc: 'Professional, authoritative pages for legal practices.',
    color: '#fbbf24',
    gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
    slug: 'law-firm',
  },
  {
    icon: '✈️',
    title: 'Travel Agency',
    desc: 'Wanderlust-inspiring pages for travel and tour operators.',
    color: '#f87171',
    gradient: 'linear-gradient(135deg, #f87171, #ef4444)',
    slug: 'travel',
  },
  {
    icon: '👗',
    title: 'Fashion & Clothing',
    desc: 'Stylish storefronts for fashion brands and boutiques.',
    color: '#e879f9',
    gradient: 'linear-gradient(135deg, #e879f9, #d946ef)',
    slug: 'fashion',
  },
  {
    icon: '🚀',
    title: 'Tech Startup',
    desc: 'Modern SaaS-style pages for apps and tech companies.',
    color: '#818cf8',
    gradient: 'linear-gradient(135deg, #818cf8, #6366f1)',
    slug: 'tech-startup',
  },
  {
    icon: '💍',
    title: 'Wedding Planner',
    desc: 'Romantic, elegant pages for wedding and event planners.',
    color: '#fb7185',
    gradient: 'linear-gradient(135deg, #fb7185, #f43f5e)',
    slug: 'wedding',
  },
  {
    icon: '🎓',
    title: 'Education & Courses',
    desc: 'Engaging pages for tutors, courses, and e-learning platforms.',
    color: '#4ade80',
    gradient: 'linear-gradient(135deg, #4ade80, #22c55e)',
    slug: 'education',
  },
  {
    icon: '🐾',
    title: 'Pet Care & Veterinary',
    desc: 'Friendly pages for vets, groomers, and pet service providers.',
    color: '#fdba74',
    gradient: 'linear-gradient(135deg, #fdba74, #fb923c)',
    slug: 'pet-care',
  },
  {
    icon: '🛋️',
    title: 'Interior Design',
    desc: 'Visually rich pages for designers, decorators, and architects.',
    color: '#c4b5fd',
    gradient: 'linear-gradient(135deg, #c4b5fd, #a78bfa)',
    slug: 'interior-design',
  },
  {
    icon: '🦷',
    title: 'Dental Clinic',
    desc: 'Clean, professional pages for dentists and oral care practices.',
    color: '#67e8f9',
    gradient: 'linear-gradient(135deg, #67e8f9, #22d3ee)',
    slug: 'dental',
  },
  {
    icon: '🍕',
    title: 'Food Delivery',
    desc: 'Appetite-driven pages for delivery services and ghost kitchens.',
    color: '#fca5a5',
    gradient: 'linear-gradient(135deg, #fca5a5, #f87171)',
    slug: 'food-delivery',
  },
  {
    icon: '🚗',
    title: 'Car Dealership',
    desc: 'Sleek, modern pages for auto dealers and car service centers.',
    color: '#94a3b8',
    gradient: 'linear-gradient(135deg, #94a3b8, #64748b)',
    slug: 'car-dealership',
  },
  {
    icon: '🧘',
    title: 'Yoga & Wellness',
    desc: 'Calm, inviting pages for yoga studios and wellness coaches.',
    color: '#86efac',
    gradient: 'linear-gradient(135deg, #86efac, #4ade80)',
    slug: 'yoga-wellness',
  },
  {
    icon: '🏨',
    title: 'Hotel & Hospitality',
    desc: 'Luxurious pages for hotels, resorts, and bed & breakfasts.',
    color: '#fcd34d',
    gradient: 'linear-gradient(135deg, #fcd34d, #fbbf24)',
    slug: 'hotel',
  },
  {
    icon: '✂️',
    title: 'Barbershop',
    desc: 'Bold, stylish pages for barbers and men\'s grooming studios.',
    color: '#6ee7b7',
    gradient: 'linear-gradient(135deg, #6ee7b7, #34d399)',
    slug: 'barbershop',
  },
  {
    icon: '🎵',
    title: 'Music School',
    desc: 'Creative pages for music teachers, studios, and academies.',
    color: '#f9a8d4',
    gradient: 'linear-gradient(135deg, #f9a8d4, #f472b6)',
    slug: 'music-school',
  },
  {
    icon: '🌿',
    title: 'Landscaping',
    desc: 'Fresh, earthy pages for garden and landscaping businesses.',
    color: '#a3e635',
    gradient: 'linear-gradient(135deg, #a3e635, #84cc16)',
    slug: 'landscaping',
  },
  {
    icon: '🎉',
    title: 'Event Management',
    desc: 'Vibrant pages for event planners and corporate organizers.',
    color: '#fb7185',
    gradient: 'linear-gradient(135deg, #fb7185, #f43f5e)',
    slug: 'event-management',
  },
  {
    icon: '💎',
    title: 'Jewelry Store',
    desc: 'Luxe, elegant pages for jewelers and accessory brands.',
    color: '#e0e7ff',
    gradient: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
    slug: 'jewelry',
  },
  {
    icon: '🧹',
    title: 'Cleaning Service',
    desc: 'Crisp, trustworthy pages for home and office cleaning companies.',
    color: '#7dd3fc',
    gradient: 'linear-gradient(135deg, #7dd3fc, #38bdf8)',
    slug: 'cleaning',
  },
  {
    icon: '🍰',
    title: 'Bakery & Pastry',
    desc: 'Warm, delightful pages for bakeries, patisseries, and cafes.',
    color: '#fde68a',
    gradient: 'linear-gradient(135deg, #fde68a, #fcd34d)',
    slug: 'bakery',
  },
  {
    icon: '📦',
    title: 'Moving Company',
    desc: 'Reliable, clear pages for movers and logistics providers.',
    color: '#d1d5db',
    gradient: 'linear-gradient(135deg, #d1d5db, #9ca3af)',
    slug: 'moving',
  },
]

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.badge}>Demo Showcase</div>
        <h1 className={styles.heading}>Landing Page Templates</h1>
        <p className={styles.subheading}>
          Click any category below to preview a fully designed demo landing page for that industry.
        </p>
      </header>

      <section className={styles.gridSection}>
        <p className={styles.sectionLabel}>All Categories</p>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} {...cat} />
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        Built as a demo showcase — each card links to a unique industry landing page.
      </footer>
    </>
  )
}

const liveslugs = ['beauty-salon', 'restaurant']

function CategoryCard({ icon, title, desc, color, gradient, slug }) {
  const isLive = liveslugs.includes(slug)
  return (
    <a
      href={isLive ? `/demos/${slug}` : '#'}
      className={styles.card}
      style={{ '--card-color': color, '--card-gradient': gradient }}
    >
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDesc}>{desc}</div>
      </div>
      {isLive ? (
        <div className={styles.cardTag}>→ View Demo</div>
      ) : (
        <div className={`${styles.cardTag} ${styles.comingSoon}`}>Coming Soon</div>
      )}
    </a>
  )
}
