import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'INVURA Wear Website',
    type: 'E-Commerce',
    url: 'https://youssofelmneesy-dotcom.github.io/invura/',
    image: 'https://images.unsplash.com/photo-1758598303946-385680e4eabd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NTAzNjYxMXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Barbershop Website',
    type: 'Business Website',
    url: 'https://am-barbershop-live-20260327.netlify.app/',
    image: 'https://images.unsplash.com/photo-1754294437661-129b86f868ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzc0OTgwMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Barbershop Website',
    type: 'Business Website',
    url: 'https://am-barbershop-live-20260327.netlify.app/',
    image: 'https://images.unsplash.com/photo-1754294437661-129b86f868ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzc0OTgwMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16 text-white"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Our <span className="text-purple-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Type label */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full">
                  <span 
                    className="text-sm text-white"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {project.type}
                  </span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/30 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span style={{ fontFamily: 'Rajdhani, sans-serif' }} className="text-xl">
                      View Project
                    </span>
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 
                  className="text-2xl text-white"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {project.name}
                </h3>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-purple-500/10 blur-xl" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
