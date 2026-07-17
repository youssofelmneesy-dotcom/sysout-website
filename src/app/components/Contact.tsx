import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', businessType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16 text-white"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Get In <span className="text-purple-400">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="text-3xl mb-6 text-white"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Contact Information
            </h3>
            
            <p 
              className="text-purple-200 mb-8"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Ready to start your digital transformation? Reach out to us today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-purple-300 text-sm mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Email
                  </p>
                  <p className="text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    contact@sysout.tech
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-purple-300 text-sm mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Phone
                  </p>
                  <p className="text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-purple-300 text-sm mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Location
                  </p>
                  <p className="text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    123 Tech Street, Innovation City
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl flex items-center justify-center">
              <MapPin className="w-12 h-12 text-purple-400" />
            </div>

            {/* WhatsApp button */}
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Chat on WhatsApp
              </span>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-purple-300 mb-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-purple-300 mb-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="businessType" 
                  className="block text-purple-300 mb-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  <option value="">Select business type</option>
                  <option value="startup">Startup</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="agency">Agency</option>
                  <option value="individual">Individual</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-purple-300 mb-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl flex items-center justify-center gap-2 hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              >
                <span style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Send Message
                </span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
