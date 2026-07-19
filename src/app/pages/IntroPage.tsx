import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import ParticleBackground from '../components/ParticleBackground';

export default function IntroPage() {
  const navigate = useNavigate();
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    // Show subtext after 1 second
    const subtextTimer = setTimeout(() => {
      setShowSubtext(true);
    }, 1000);

    // Navigate to language selection after 5 seconds
    const navigationTimer = setTimeout(() => {
      navigate('/home');
    }, 5000);

    return () => {
      clearTimeout(subtextTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <ParticleBackground />
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 
            className="text-8xl md:text-9xl font-bold mb-8"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              background: 'linear-gradient(135deg, #08185f 0%, #692daa 50%, #513dc1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(56, 4, 152, 0.5)',
              filter: 'drop-shadow(0 0 20px rgba(1, 22, 80, 0.8))'
            }}
          >
            SYSOUT
          </h1>
        </motion.div>

        {/* {showSubtext && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl text-purple-300"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Enter the Future
          </motion.p>
        )} */}



        {/* Sound indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex items-center gap-2 text-purple-400/60 text-sm">
            <div className="flex gap-1">
              <motion.div
                className="w-1 h-4 bg-purple-400/60"
                animate={{ height: [16, 8, 16] }}
                transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
              />
              <motion.div
                className="w-1 h-4 bg-purple-400/60"
                animate={{ height: [16, 12, 16] }}
                transition={{ repeat: Infinity, duration: 0.8, delay: 0.1 }}
              />
              <motion.div
                className="w-1 h-4 bg-purple-400/60"
                animate={{ height: [16, 10, 16] }}
                transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
              />
            </div>
            <span style={{ fontFamily: 'Rajdhani, sans-serif' }}>Audio Experience</span>
          </div>
        </motion.div> */}
      </div>

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
