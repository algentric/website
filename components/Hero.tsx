'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Sparkles, Cpu, Zap } from 'lucide-react'
import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Simple Network Visualization */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg width="800" height="600" className="opacity-10">
            {/* Simple network nodes */}
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i * 30) * Math.PI / 180
              const radius = 200 + (i % 3) * 50
              const x = 400 + Math.cos(angle) * radius
              const y = 300 + Math.sin(angle) * radius
              return (
                <g key={i}>
                  <circle 
                    cx={x} 
                    cy={y} 
                    r={3} 
                    fill="#22c55e" 
                    className="animate-pulse" 
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                  {i > 0 && (
                    <line 
                      x1={x} 
                      y1={y} 
                      x2={400 + Math.cos((i-1) * 30 * Math.PI / 180) * (200 + ((i-1) % 3) * 50)} 
                      y2={300 + Math.sin((i-1) * 30 * Math.PI / 180) * (200 + ((i-1) % 3) * 50)} 
                      stroke="#22c55e" 
                      strokeWidth={1}
                      opacity={0.3}
                    />
                  )}
                </g>
              )
            })}
          </svg>
        </div>
      </div>

      <motion.div 
        ref={ref}
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded border border-cyber-500/30 bg-cyber-500/5">
              <div className="w-2 h-2 bg-cyber-400 rounded-full animate-pulse" />
              <span className="text-sm text-cyber-300 font-mono">
                RESEARCH IN PROGRESS
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="block text-white font-mono">
              Building Autonomous
            </span>
            <span className="block text-cyber-400 font-mono">
              AI Agents
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We're pioneering multi-agent systems that collaborate, learn, and execute complex workflows autonomously. 
            Our research focuses on agents that think, adapt, and coordinate to solve real-world challenges.
          </motion.p>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto py-8"
          >
            {[
              { value: '47', label: 'RESEARCH PAPERS', icon: Cpu },
              { value: '12', label: 'AGENT ARCHITECTURES', icon: Zap },
              { value: '∞', label: 'POSSIBILITIES', icon: Sparkles }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-mono font-bold text-cyber-400 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 font-mono tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ x: 5 }}
              className="group px-6 py-3 border border-cyber-400 text-cyber-400 font-mono text-sm hover:bg-cyber-400/5 transition-all duration-200 flex items-center space-x-2"
            >
              <span>VIEW RESEARCH</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              whileHover={{ x: 5 }}
              className="px-6 py-3 text-gray-400 font-mono text-sm hover:text-white transition-colors duration-200"
            >
              READ PAPERS
            </motion.button>
          </motion.div>


        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 