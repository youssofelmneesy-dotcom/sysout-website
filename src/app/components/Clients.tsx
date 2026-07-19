// هذا القسم (Clients) اتعطل بناءً على طلبك.
// الكود الأصلي محفوظ بالكامل في التعليق تحت لو حبيت ترجعه تاني في أي وقت.
 
export default function Clients() {
  return null;
}
 
/*
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
 
const testimonials = [
  {
    text: 'SYSOUT transformed our business completely. Their innovative solutions helped us scale 10x in just 6 months.',
    author: 'Sarah Johnson',
    company: 'TechStart Inc.',
  },
  {
    text: 'Highly professional and fast delivery. The team exceeded our expectations in every way possible.',
    author: 'Michael Chen',
    company: 'Digital Ventures',
  },
  {
    text: 'Working with SYSOUT was a game-changer. They brought our vision to life with cutting-edge technology.',
    author: 'Emma Rodriguez',
    company: 'Future Labs',
  },
  {
    text: 'Outstanding service and support. Their expertise in AI and cybersecurity is unmatched.',
    author: 'David Kim',
    company: 'SecureNet Solutions',
  },
];
 
const companies = [
  { name: 'TechCorp', logo: '🚀' },
  { name: 'DataFlow', logo: '📊' },
  { name: 'CloudSync', logo: '☁️' },
  { name: 'NeuralAI', logo: '🧠' },
  { name: 'CyberShield', logo: '🛡️' },
  { name: 'QuantumLabs', logo: '⚛️' },
];
 
export default function ClientsOriginal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-12 text-white"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Our <span className="text-purple-400">Clients</span>
        </motion.h2>
 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 mb-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-colors duration-300"
            >
              <span className="text-4xl">{company.logo}</span>
              <span
                className="text-sm text-purple-300"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {company.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-16 h-16 text-purple-400" />
            </div>
 
            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <p
                  className="text-xl md:text-2xl text-purple-100 mb-6 italic"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  "{testimonials[currentIndex].text}"
                </p>
 
                <div>
                  <p
                    className="text-lg text-white"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {testimonials[currentIndex].author}
                  </p>
                  <p
                    className="text-purple-300"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
 
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-purple-400 w-8'
                        : 'bg-purple-400/30 hover:bg-purple-400/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
*/
 

