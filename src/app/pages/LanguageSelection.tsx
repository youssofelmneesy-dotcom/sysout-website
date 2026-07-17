import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import ParticleBackground from '../components/ParticleBackground';

export default function LanguageSelection() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  const handleLanguageSelect = (lang: string) => {
    setSelectedLang(lang);
    setTimeout(() => {
      navigate('/home');
    }, 500);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-black via-purple-950 to-black overflow-hidden flex items-center justify-center">
      <ParticleBackground />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <h2 
          className="text-5xl md:text-6xl mb-12 text-white"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Select Language
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLanguageSelect('en')}
            className={`relative group w-64 h-32 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-2 border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 ${
              selectedLang === 'en' ? 'border-purple-400' : ''
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-purple-500/20 blur-xl" />
            </div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <span 
                className="text-3xl text-white"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                English
              </span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLanguageSelect('ar')}
            className={`relative group w-64 h-32 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-2 border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 ${
              selectedLang === 'ar' ? 'border-purple-400' : ''
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-purple-500/20 blur-xl" />
            </div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <span 
                className="text-3xl text-white"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                العربية
              </span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
