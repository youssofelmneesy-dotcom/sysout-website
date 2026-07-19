import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
 
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
 
  return (
    <section id="about" ref={ref} className="relative py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-5xl md:text-6xl mb-8 text-white"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 30px rgba(147, 51, 234, 0.5)'
 
            }}
          >
 
            About <span className="text-purple-400">SYSOUT</span>
          </motion.h2>
 
 
          <motion.p
  className="text-xl md:text-2xl text-purple-200 leading-relaxed whitespace-pre-line"
  style={{ fontFamily: "Rajdhani, sans-serif" }}
>
{`Helping businesses grow through thoughtful digital solutions.
 
At SysOut, we partner with businesses to solve real challenges using technology. Whether it's a website, mobile app, custom system, automation, Data Analytics, branding, or digital marketing, we focus on building the right solution—not just delivering another project.
 
Every decision we make is driven by one question:
"What creates the most value for the business?"`}
</motion.p>
 
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
