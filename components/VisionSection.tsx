'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Rocket, Globe, Users, Lightbulb, Target, Atom } from 'lucide-react'

const VisionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const visionPoints = [
    {
      year: '2024',
      icon: Rocket,
      title: 'Market Launch',
      description: 'Deploy specialized AI agents for customer service, sales, and research tasks'
    },
    {
      year: '2025',
      icon: Globe,
      title: 'Enterprise Adoption',
      description: 'Scale to Fortune 500 companies with industry-specific agent solutions'
    },
    {
      year: '2026',
      icon: Users,
      title: 'Human-AI Teams',
      description: 'Perfect collaboration between human workers and AI agents in complex workflows'
    },
    {
      year: '2027',
      icon: Lightbulb,
      title: 'Advanced Reasoning',
      description: 'Agents capable of complex problem-solving across multiple domains'
    },
    {
      year: '2028',
      icon: Target,
      title: 'Autonomous Operations',
      description: 'Full business processes managed by coordinated teams of AI agents'
    },
    {
      year: '2030',
      icon: Atom,
      title: 'Industry Standard',
      description: 'AI agents become essential infrastructure across all major industries'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="papers" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-500/5 rounded-full blur-3xl" />
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
            Research Milestones
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            Our journey towards building truly autonomous AI agents that can collaborate, reason, and adapt.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyber-400/50 transform md:-translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:mb-0 mb-8`}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="border border-gray-800 p-8 bg-gray-900/20 hover:border-cyber-400/30 transition-all duration-300"
                  >
                    <div className="text-sm text-cyber-400 font-mono mb-2">{point.year}</div>
                    <h3 className="text-2xl font-mono font-bold text-white mb-4">{point.title}</h3>
                    <p className="text-gray-400">{point.description}</p>
                  </motion.div>
                </div>

                                {/* Icon */}
                <div className="relative z-10">
                   <motion.div
                     whileHover={{ scale: 1.1 }}
                     className="w-16 h-16 border-2 border-cyber-400 bg-cyber-400/10 rounded-full flex items-center justify-center"
                   >
                     <point.icon className="w-8 h-8 text-cyber-400" />
                   </motion.div>
                   <div className="absolute inset-0 bg-cyber-400/10 rounded-full blur-lg opacity-50 animate-pulse-slow" />
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
                                           {[
               { value: '15+', label: 'ACTIVE PROJECTS' },
               { value: '50+', label: 'PUBLISHED PAPERS' },
               { value: '∞', label: 'POSSIBILITIES' }
           ].map((stat, index) => (
             <motion.div
               key={index}
               whileHover={{ x: 5 }}
               className="text-center border border-gray-800 p-6 bg-gray-900/20"
             >
               <div className="text-3xl md:text-4xl font-mono font-bold text-cyber-400 mb-2">
                 {stat.value}
               </div>
               <div className="text-gray-400 font-mono text-xs tracking-wider">{stat.label}</div>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  )
}

export default VisionSection 