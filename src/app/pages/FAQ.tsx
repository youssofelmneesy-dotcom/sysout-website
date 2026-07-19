import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
 
// ✏️ عدّل الأسئلة والإجابات دي براحتك، دي بس محتوى مبدئي
const faqs = [
  {
    question: 'What services does SysOut offer?',
    answer: 'We offer web development, mobile app development, AI solutions, cybersecurity, blockchain, UI/UX design, data analysis, and digital marketing.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'It depends on the scope, but most websites take 2-4 weeks and full applications take 4-8 weeks. We give you a clear timeline before we start.',
  },
  {
    question: 'Do you offer support after delivery?',
    answer: 'Yes, we provide post-launch support and maintenance packages to keep your product running smoothly.',
  },
  {
    question: 'How can I request a quote?',
    answer: 'Reach out to us via email, phone, or WhatsApp on the Contact section of our homepage, and we\'ll get back to you as soon as possible.',
  },
];
 
export default function FAQ() {
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
          className="text-4xl md:text-5xl mb-12 text-white"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Frequently Asked <span className="text-purple-400">Questions</span>
        </motion.h1>
 
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6"
            >
              <h3
                className="text-xl mb-2 text-white"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {faq.question}
              </h3>
              <p
                className="text-purple-200"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}