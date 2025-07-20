'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'investors@algentric.com',
      link: 'mailto:investors@algentric.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <section id="careers" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-500/5 rounded-full blur-3xl" />
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
            Join Our Research Mission
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            We're building the next generation of autonomous AI agents. 
            If you're passionate about pushing the boundaries of what's possible, we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
                      <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border border-gray-800 p-8 bg-gray-900/20"
            >
            <h3 className="text-xl font-mono font-bold text-white mb-6">Join Our Research</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-400 transition-colors duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-400 transition-colors duration-200"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-400 transition-colors duration-200"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-400 transition-colors duration-200 resize-none"
                                      placeholder="Tell us about your research interests and background..."
                  required
                />
              </div>
                              <motion.button
                  type="submit"
                  whileHover={{ x: 5 }}
                  className="w-full px-6 py-3 border border-cyber-400 text-cyber-400 font-mono text-sm hover:bg-cyber-400/5 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="border border-gray-800 p-8 bg-gray-900/20">
              <h3 className="text-xl font-mono font-bold text-white mb-6">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-12 h-12 border border-cyber-400 flex items-center justify-center bg-cyber-400/5">
                      <item.icon className="w-5 h-5 text-cyber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{item.title}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border border-gray-800 p-8 bg-gray-900/20">
              <h3 className="text-xl font-mono font-bold text-white mb-6">Follow us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ x: 2 }}
                    className="w-12 h-12 border border-cyber-400 flex items-center justify-center text-cyber-400 hover:bg-cyber-400/5 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

                          <div className="border border-gray-800 p-8 bg-gray-900/20">
                <h3 className="text-xl font-mono font-bold text-white mb-4">Join Algentric</h3>
              <p className="text-gray-300 mb-4">
                Whether you're a researcher, engineer, or academic exploring the cutting edge, 
                we have opportunities at the frontier of autonomous AI.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                <li>→ Research Scientist positions</li>
                <li>→ PhD Research internships</li>
                <li>→ Visiting scholar programs</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 