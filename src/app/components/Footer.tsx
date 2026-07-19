import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Instagram, ArrowUp } from 'lucide-react';
 
// ⚠️ استبدل الروابط دي بروابط SYSOUT الحقيقية على كل platform لو مختلفة
const socialLinks = [
  { icon: Twitter, url: 'https://twitter.com/sysout', label: 'Twitter' },
  { icon: Linkedin, url: 'https://www.linkedin.com/company/sysout', label: 'LinkedIn' },
  { icon: Github, url: 'https://github.com/sysout', label: 'GitHub' },
  { icon: Instagram, url: 'https://www.instagram.com/sysout', label: 'Instagram' },
];
 
const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/home#about' },
      { label: 'Team', href: '/home#team' },
      { label: 'Portfolio', href: '/home#portfolio' },
      { label: 'Blog', href: '/home#blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '/home#contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
];
 
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  return (
    <footer className="relative bg-black border-t border-purple-500/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-purple-300 hover:text-purple-200 transition-colors duration-300"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      {link.label}
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