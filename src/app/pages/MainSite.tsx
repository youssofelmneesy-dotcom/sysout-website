import { motion } from 'motion/react';
import Hero from '../components/Hero';
import About from '../components/About';
import Values from '../components/Values';
import Team from '../components/Team';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Clients from '../components/Clients';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function MainSite() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-black overflow-x-hidden"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl"
              style={{ 
                fontFamily: 'Orbitron, sans-serif',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SYSOUT
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden md:flex items-center gap-8"
            >
              <a 
                href="#services" 
                className="text-purple-300 hover:text-purple-100 transition-colors duration-300"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="pt-20">
        <Hero />
        <About />
        <Values />
        <Team />
        <Services />
        <Portfolio />
        <Clients />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
}
