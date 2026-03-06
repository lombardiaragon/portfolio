export const projects = [
  {
    id: 1,
    featured: true,
    title: 'Fintrak',
    description:
      'A credit and client management SPA. Authentication with JWT, automatic amortization schedule generation (French system), early repayment simulation, and real-time installment tracking. Dashboard with global metrics and charts.',
    highlights: [
      'Feature-based architecture — auth, clients, credits',
      'French amortization engine built from scratch',
      'Early repayment simulation with schedule recalculation',
      'JWT authentication with json-server-auth',
      'Dashboard with Recharts — debt evolution and credit distribution',
      'Split deployment — Netlify frontend, Render backend',
    ],
    tags: ['React 19', 'Vite', 'Tailwind v4', 'React Router v7', 'Recharts', 'JWT'],
    status: 'live',
    demoUrl: 'https://fintrakapp.netlify.app',
    githubUrl: 'https://github.com/flombardidev/fintrak',
  },
  {
    id: 2,
    featured: false,
    title: 'React Ecommerce',
    description:
      'A fully functional ecommerce SPA — product listing, cart management, filtering, and checkout flow. Clean component structure, responsive design.',
    tags: ['React', 'React Router', 'Context API', 'CSS Modules'],
    status: 'live',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    featured: false,
    title: 'WordPress — Local Business',
    description:
      'A complete website for a local business — custom design, SEO optimization, mobile-first. Demonstrating that not every project needs React.',
    tags: ['WordPress', 'Custom theme', 'SEO', 'Performance'],
    status: 'wip',
    demoUrl: null,
    githubUrl: null,
  },
]