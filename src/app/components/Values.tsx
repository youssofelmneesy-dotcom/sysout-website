import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Lightbulb, Shield, Cpu } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We create new solutions',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We deliver with trust',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'We use cutting-edge tech',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16 text-white"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Our Core <span className="text-purple-400">Values</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-8 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10 blur-xl`} />
              </div>

              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 
                  className="text-2xl mb-3 text-white"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {value.title}
                </h3>

                <p 
                  className="text-purple-200"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {value.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple-500/30 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-500/30 rounded-bl-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
