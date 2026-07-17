import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Megaphone, Palette, Video, Share2, Code, FileText, 
  Smartphone, PenTool, BarChart3, Database, TrendingUp, 
  Shield, Brain, Lock 
} from 'lucide-react';

const services = [
  { icon: Megaphone, title: 'Digital Marketing', description: 'Strategic campaigns to grow your brand' },
  { icon: Palette, title: 'Graphic Design', description: 'Creative visuals that captivate' },
  { icon: Video, title: 'Video Editing', description: 'Professional video production' },
  { icon: Share2, title: 'Social Media Management', description: 'Build your online presence' },
  { icon: Code, title: 'Web Development', description: 'Modern, responsive websites' },
  { icon: FileText, title: 'Landing Pages', description: 'High-converting page designs' },
  { icon: PenTool, title: 'UI/UX Design', description: 'Intuitive user experiences' },
  { icon: Smartphone, title: 'Mobile Applications', description: 'Native & cross-platform apps' },
  { icon: BarChart3, title: 'Data Analysis', description: 'Transform data into insights' },
  { icon: Database, title: 'Data Engineering', description: 'Scalable data infrastructure' },
  { icon: TrendingUp, title: 'Business Intelligence', description: 'Smart business decisions' },
  { icon: Shield, title: 'Smart Contracts', description: 'Blockchain solutions' },
  { icon: Lock, title: 'Cybersecurity', description: 'Web, Apps, Financial protection' },
  { icon: Brain, title: 'AI for Business', description: 'Intelligent automation' },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative py-24 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl mb-4 text-white"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Our <span className="text-purple-400">Services</span>
          </h2>
          <p 
            className="text-xl text-purple-200 max-w-2xl mx-auto"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Comprehensive tech solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6 overflow-hidden cursor-pointer"
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-lg" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 
                  className="text-xl mb-2 text-white"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {service.title}
                </h3>

                <p 
                  className="text-sm text-purple-200"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {service.description}
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
