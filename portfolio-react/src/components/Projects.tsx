import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  image: string
  github?: string
  live?: string
  featured: boolean
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const projects: Project[] = [
    {
      id: 1,
      title: 'Enterprise Healthcare Platform',
      description: 'A comprehensive healthcare management system built with microservices architecture, handling millions of patient records with real-time data processing and analytics.',
      techStack: ['C#', '.NET Core', 'Angular', 'SQL Server', 'Azure'],
      image: '/images/port1.jpg',
      github: 'https://github.com/Sakshamkc',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Application',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and an admin dashboard for business analytics.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
      image: '/images/port2.jpg',
      github: 'https://github.com/Sakshamkc',
      live: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and customizable workflows.',
      techStack: ['Angular', 'TypeScript', '.NET', 'PostgreSQL'],
      image: '/images/port3.jpg',
      github: 'https://github.com/Sakshamkc',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/port4.jpg',
      github: 'https://github.com/Sakshamkc',
      live: 'https://sakshamkc.vercel.app',
      featured: true,
    },
    {
      id: 5,
      title: 'API Gateway Service',
      description: 'Scalable API gateway implementing rate limiting, authentication, and request routing for microservices architecture.',
      techStack: ['C#', '.NET Core', 'Redis', 'Docker', 'Kubernetes'],
      image: '/images/port5.jpg',
      github: 'https://github.com/Sakshamkc',
      featured: false,
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat application with support for private messaging, group chats, and media sharing.',
      techStack: ['React', 'SignalR', '.NET Core', 'SQL Server'],
      image: '/images/port2.jpg',
      github: 'https://github.com/Sakshamkc',
      featured: false,
    },
  ]

  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured) 
    : projects

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-accent-primary font-mono text-sm mb-4 block">03. Projects</span>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle mx-auto">
              A selection of projects I've built, from enterprise applications to personal experiments
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-accent-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'featured'
                  ? 'bg-accent-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Featured
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card overflow-hidden h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60" />
                    
                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-dark-800/90 rounded-full text-white hover:bg-accent-primary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-dark-800/90 rounded-full text-white hover:bg-accent-primary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-accent-primary/90 text-white text-xs font-medium rounded">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-dark-700/50 text-gray-400 text-xs font-mono rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Sakshamkc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View More on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
