'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Cpu, Database, Network, Shield, Zap } from 'lucide-react'


const TechnologyShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const technologies = [
    {
      title: 'Multi-Agent Communication',
      description: 'Developing protocols for agents to coordinate and share knowledge effectively',
      status: 'Active Research'
    },
    {
      title: 'Autonomous Learning',
      description: 'Agents that adapt their behavior based on environmental feedback',
      status: 'Beta Testing'
    },
    {
      title: 'Task Delegation',
      description: 'Intelligent distribution of complex tasks across agent networks',
      status: 'Published'
    },
    {
      title: 'Agent Security',
      description: 'Ensuring robust and secure operation in adversarial environments',
      status: 'Active Research'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="research" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-white">
            Research Areas
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            We're exploring the frontiers of autonomous intelligence through collaborative agent systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ x: 5 }}
              className="group"
            >
              <div className="border border-gray-800 p-6 hover:border-cyber-400/30 transition-all duration-300 bg-gray-900/20">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-mono font-bold text-white group-hover:text-cyber-400 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <span className="text-xs text-cyber-400 font-mono px-2 py-1 border border-cyber-400/30 bg-cyber-400/5">
                    {tech.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

                {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#papers"
            whileHover={{ x: 5 }}
            className="text-cyber-400 font-mono text-sm hover:text-cyber-300 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>READ OUR LATEST PAPERS</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologyShowcase 