import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Instagram, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, url: '#', label: 'Twitter' },
  { icon: Linkedin, url: '#', label: 'LinkedIn' },
  { icon: Github, url: '#', label: 'GitHub' },
  { icon: Instagram, url: '#', label: 'Instagram' },
];

const footerLinks = [
  { title: 'Services', links: ['Web Development', 'Mobile Apps', 'AI Solutions', 'Cybersecurity'] },
  { title: 'Company', links: ['About Us', 'Team', 'Portfolio', 'Blog'] },
  { title: 'Support', links: ['Contact', 'FAQ', 'Privacy Policy', 'Terms of Service'] },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-purple-500/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <h3 
              className="text-4xl mb-4"
              style={{ 
                fontFamily: 'Orbitron, sans-serif',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SYSOUT
            </h3>
            <p 
              className="text-purple-200 mb-6 max-w-sm"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Building the digital future, one innovation at a time.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-purple-900/30 border border-purple-500/30 rounded-lg hover:bg-purple-900/50 hover:border-purple-500/50 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-purple-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 
                className="text-white mb-4"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-purple-300 hover:text-purple-200 transition-colors duration-300"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-purple-300 text-center md:text-left"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            © 2026 SYSOUT. All rights reserved.
          </p>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-purple-900/30 border border-purple-500/30 rounded-lg hover:bg-purple-900/50 hover:border-purple-500/50 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-purple-300" />
          </motion.button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-50" />
    </footer>
  );
}
