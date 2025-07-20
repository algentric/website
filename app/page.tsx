import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TechnologyShowcase from '@/components/TechnologyShowcase'
import VisionSection from '@/components/VisionSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <TechnologyShowcase />
      <VisionSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="text-cyber-400 font-mono">
                [/] 
              </div>
              <span className="text-xl font-mono font-bold text-white">
                ALGENTRIC
              </span>
            </div>
            <p className="text-gray-400 mb-4 font-mono">
              Building autonomous agents for tomorrow's challenges
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Algentric. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 