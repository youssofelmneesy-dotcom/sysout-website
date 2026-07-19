import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
 
const team = [
  {
    name: 'Eng/ Youssof Elfaidy',
    portfolio: 'https://youssof-elfaidy-portfolio.vercel.app/',
    image: 'photos/نسخة من IMG_2047.jpg',
  },
  {
    name: 'Eng/ Adham Haiba',
    portfolio: 'https://adham1611.github.io/Professional-Portfolio-Website/',
    image: 'photos/‏لقطة الشاشة ٢٠٢٦-٠٤-٠١ في ١٠.٤٦.٠٤ م.png',
  },
 
];
 
export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
 
  return (
    <section id="team" ref={ref} className="relative py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16 text-white"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Our <span className="text-purple-400">Team</span>
        </motion.h2>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.a
              key={member.name}
              href={member.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
 
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span style={{ fontFamily: 'Rajdhani, sans-serif' }} className="text-xl">
                      View Portfolio
                    </span>
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
 
              {/* Name */}
              <div className="p-6">
                <h3
                  className="text-2xl text-white text-center"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {member.name}
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


