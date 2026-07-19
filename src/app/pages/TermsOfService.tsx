import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
 
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors duration-300 mb-10"
          style={{ fontFamily: 'Rajdhani, sans-serif' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
 
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-10 text-white"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Terms of <span className="text-purple-400">Service</span>
        </motion.h1>
 
        {/* ✏️ ده محتوى مبدئي، عدّله ليعكس الشروط الفعلية بتاعة SysOut */}
        <div
          className="space-y-8 text-purple-200 leading-relaxed"
          style={{ fontFamily: 'Rajdhani, sans-serif' }}
        >
          <section>
            <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By using our website and services, you agree to be bound by these Terms of Service.
              If you do not agree, please do not use our services.
            </p>
          </section>
 
          <section>
            <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              2. Our Services
            </h2>
            <p>
              SysOut provides web development, mobile app development, AI, cybersecurity, blockchain,
              and digital marketing services. Project scope, pricing, and timelines will be agreed
              upon separately for each engagement.
            </p>
          </section>
 
          <section>
            <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              3. Intellectual Property
            </h2>
            <p>
              All content on this website, including logos, text, and graphics, is the property of
              SysOut unless otherwise stated.
            </p>
          </section>
 
          <section>
            <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              4. Limitation of Liability
            </h2>
            <p>
              SysOut is not liable for any indirect or consequential damages arising from the use
              of our website or services.
            </p>
          </section>
 
          <section>
            <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              5. Contact Us
            </h2>
            <p>
              For any questions about these Terms, please contact us at youssofelmneesy@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
 