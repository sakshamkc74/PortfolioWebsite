import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '10+' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-accent-primary font-mono text-sm mb-4 block">01. About Me</span>
            <h2 className="section-title">
              Crafting Digital Experiences
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Code-inspired background */}
                <div className="absolute inset-0 bg-dark-800 rounded-2xl overflow-hidden border border-gray-800">
                  <div className="p-4 font-mono text-xs text-gray-600 leading-relaxed">
                    <span className="text-accent-primary">const</span> developer = {'{'}<br/>
                    &nbsp;&nbsp;name: <span className="text-green-400">"Saksham K.C"</span>,<br/>
                    &nbsp;&nbsp;role: <span className="text-green-400">"Software Engineer"</span>,<br/>
                    &nbsp;&nbsp;location: <span className="text-green-400">"Kathmandu, Nepal"</span>,<br/>
                    &nbsp;&nbsp;passions: [<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Clean Code"</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"System Design"</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Problem Solving"</span><br/>
                    &nbsp;&nbsp;],<br/>
                    &nbsp;&nbsp;available: <span className="text-accent-primary">true</span><br/>
                    {'}'};
                  </div>
                </div>
                
                {/* Profile Image Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent-primary/20 shadow-xl shadow-accent-primary/10">
                    <img 
                      src="/images/SS.png" 
                      alt="Saksham K.C" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent-primary/20 rounded-xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-primary/5 rounded-xl" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Software Engineer with expertise in building scalable, 
                high-performance applications. Currently working at <span className="text-accent-primary font-medium">Infinite Nepal</span>, 
                I specialize in crafting robust backend systems and intuitive frontend interfaces.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                With a strong foundation in <span className="text-white">.NET, Angular, Blazor, React, and Flutter</span>, 
                I bring ideas to life through clean, maintainable code. I'm driven by the challenge 
                of solving complex problems and the satisfaction of delivering solutions that 
                exceed expectations.
              </p>

              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source, or sharing knowledge with the developer community.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-white">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Resume Button */}
              <div className="pt-4">
                <a 
                  href="/images/Saksham-Resume.pdf" 
                  download
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
