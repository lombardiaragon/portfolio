export const projects = [
  {
    id: 1,
    featured: true,
    title: 'Client Financial Manager',
    description:
      'A React SPA for managing clients and financial credits. Dashboard with real metrics, CRUD operations, early payment simulation, and fr-FR formatting throughout. Built with feature-based architecture.',
    highlights: [
      'Feature-based modular architecture',
      'Business logic separated from UI (clientsCalculations.js)',
      'Normalized client ↔ credit relationship via clientId',
      'Derived metrics — no duplicated state',
      'fr-FR currency and date formatting with Intl API',
    ],
    tags: ['React', 'Vite', 'Tailwind', 'Context API', 'React Router', 'Intl API'],
    status: 'live',
    demoUrl: '#',
    githubUrl: '#',
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
