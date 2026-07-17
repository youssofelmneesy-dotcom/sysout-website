import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of AI in Business',
    preview: 'Discover how artificial intelligence is revolutionizing the way businesses operate in 2026 and beyond...',
    image: 'https://images.unsplash.com/photo-1770171323762-7b9a517a7094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGlnaXRhbHxlbnwxfHx8fDE3NzQ5NjMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'March 15, 2026',
    category: 'AI & Technology',
  },
  {
    title: 'Cybersecurity Best Practices 2026',
    preview: 'Essential security measures every business should implement to protect against modern cyber threats...',
    image: 'https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzc1MDUwMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'March 10, 2026',
    category: 'Security',
  },
  {
    title: 'Building Scalable Web Applications',
    preview: 'Learn the architectural patterns and best practices for creating applications that scale effortlessly...',
    image: 'https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1MDUwMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'March 5, 2026',
    category: 'Development',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-black">
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
            Latest <span className="text-purple-400">Insights</span>
          </h2>
          <p 
            className="text-xl text-purple-200 max-w-2xl mx-auto"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Stay updated with the latest trends in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full">
                  <span 
                    className="text-xs text-white"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-purple-300">
                  <Calendar className="w-4 h-4" />
                  <span style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {post.date}
                  </span>
                </div>

                <h3 
                  className="text-xl mb-3 text-white group-hover:text-purple-300 transition-colors duration-300"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {post.title}
                </h3>

                <p 
                  className="text-purple-200 mb-4 line-clamp-3"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {post.preview}
                </p>

                <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  <span 
                    className="text-sm"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    Read More
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-purple-500/10 blur-xl" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
