import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
 
export default function PrivacyPolicy() {
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
          Privacy <span className="text-purple-400">Policy</span>
        </motion.h1>
 
        {/* ✏️ ده محتوى مبدئي، عدّله ليعكس السياسة الفعلية بتاعة SysOut */}
        <div
          className="space-y-8 text-purple-200 leading-relaxed"
          style={{ fontFamily: 'Rajdhani, sans-serif' }}
        >
          <section>
            <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              1. Information We Collect
            </h2>
            <p>
              We may collect information you provide directly to us, such as your name, email address,
              and phone number when you contact us through our website or WhatsApp.
            </p>
          </section>
 
          <section>
            <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to respond to your inquiries, provide our services,
              and improve our website experience. We do not sell your personal data to third parties.
            </p>
          </section>
 
          <section>
            <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              3. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your information from unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>
 
          <section>
            <h2 className="text-2xl text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              4. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at
              youssofelmneesy@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
 