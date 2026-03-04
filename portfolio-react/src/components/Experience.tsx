import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      id: 1,
      role: 'Software Engineer II',
      company: 'Infinite Nepal',
      location: 'Kathmandu, Nepal',
      period: '2025 - Present',
      description: [
        'Promoted to Software Engineer II for exceptional performance and contributions',
        'Leading development of enterprise applications using .NET and modern frontend frameworks',
        'Architecting scalable solutions and mentoring junior developers',
        'Driving best practices in code quality and system design',
      ],
      technologies: ['.NET', 'Angular', 'Blazor', 'React', 'SQL Server', 'Linux'],
    },
    {
      id: 2,
      role: 'Software Engineer I',
      company: 'Infinite Nepal',
      location: 'Kathmandu, Nepal',
      period: '2024 - 2025',
      description: [
        'Transitioned from Cotiviti Nepal to Infinite Nepal',
        'Developed and maintained enterprise-level software solutions',
        'Worked with cross-functional teams to deliver high-quality products',
        'Implemented RESTful APIs and optimized database performance',
      ],
      technologies: ['.NET', 'Angular', 'Flutter', 'SQL Server', 'Python'],
    },
    {
      id: 3,
      role: 'Software Engineer I',
      company: 'Cotiviti Nepal',
      location: 'Kathmandu, Nepal',
      period: '2023 - 2024',
      description: [
        'Developed enterprise-level healthcare software solutions using C# and .NET Core',
        'Built responsive frontend applications with Angular and Blazor',
        'Collaborated with cross-functional teams on complex healthcare systems',
        'Participated in code reviews and contributed to documentation',
      ],
      technologies: ['C#', '.NET Core', 'Angular', 'Blazor', 'SQL Server'],
    },
    {
      id: 4,
      role: 'Trainee',
      company: 'Cotiviti Nepal',
      location: 'Kathmandu, Nepal',
      period: '2023',
      description: [
        'Completed intensive training program on enterprise software development',
        'Learned best practices in .NET development and healthcare domain',
        'Worked on real-world projects under senior developer mentorship',
      ],
      technologies: ['C#', '.NET', 'Angular', 'SQL Server'],
    },
    {
      id: 5,
      role: '.NET Developer',
      company: 'Blinqlab',
      location: 'Kathmandu, Nepal',
      period: 'Sep 2022 - Nov 2022',
      description: [
        'Developed web applications using .NET framework',
        'Gained experience in professional software development environment',
        'Collaborated with team members on client projects',
      ],
      technologies: ['.NET', 'C#', 'SQL Server', 'JavaScript'],
    },
    {
      id: 6,
      role: 'Intern',
      company: 'Dynamic Technosoft',
      location: 'Kathmandu, Nepal',
      period: 'Apr 2022 - Sep 2022',
      description: [
        'Started professional career as a software development intern',
        'Learned fundamentals of enterprise software development',
        'Gained hands-on experience with .NET technologies',
      ],
      technologies: ['.NET', 'C#', 'HTML/CSS', 'JavaScript'],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent-primary font-mono text-sm mb-4 block">04. Experience</span>
            <h2 className="section-title">Where I've Worked</h2>
            <p className="section-subtitle mx-auto">
              My professional journey in software development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-cyan" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-primary rounded-full border-4 border-dark-900 z-10" />

                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card p-6 hover:shadow-lg hover:shadow-accent-primary/5 transition-all">
                      {/* Header */}
                      <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <span className="text-accent-primary font-mono text-sm">{exp.period}</span>
                        <h3 className="text-xl font-semibold text-white mt-1">{exp.role}</h3>
                        <p className="text-gray-400">
                          {exp.company} • {exp.location}
                        </p>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className={`text-accent-primary mt-1.5 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech) => (
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

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold text-white text-center mb-8">Education</h3>
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-medium text-white">Master in Computer Science</h4>
                    <p className="text-gray-400">IIMS</p>
                  </div>
                  <span className="text-accent-primary font-mono text-sm">2023 - 2025</span>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-medium text-white">Bachelor in Computer Science & IT</h4>
                    <p className="text-gray-400">Asian College of Higher Studies</p>
                  </div>
                  <span className="text-accent-primary font-mono text-sm">2017 - 2022</span>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-medium text-white">Higher Secondary Education</h4>
                    <p className="text-gray-400">United Academy</p>
                  </div>
                  <span className="text-accent-primary font-mono text-sm">2015 - 2017</span>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-medium text-white">School Leaving Certificate (SLC)</h4>
                    <p className="text-gray-400">Loyola Higher Secondary School</p>
                  </div>
                  <span className="text-accent-primary font-mono text-sm">2006 - 2015</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
