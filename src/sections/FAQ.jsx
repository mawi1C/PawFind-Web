import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  { question: "Why isn't this on the Play Store?", answer: "We are currently in a Live Beta phase, rolling out updates rapidly based on user feedback. The APK allows us to push critical bug fixes instantly without waiting for store reviews. We will be on the Play Store in Q3 2026." },
  { question: "Is the APK safe to install?", answer: "Yes. The APK is signed with our secure developer key and scanned for malware. You may need to enable 'Install from Unknown Sources' in your settings, which is a standard Android security prompt for direct downloads." },
  { question: "How accurate is the AI prediction?", answer: "Our model achieves a 65-80% accuracy rate in determining 'High Probability Zones' by analyzing breed specific behaviors (e.g., Beagles follow scents, Cats hide in silence) against local map data." },
  { question: "Is the service free?", answer: "Yes, PawFind is free for all pet owners and finders. We believe safety shouldn't have a price tag." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left bg-surface hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-secondary">{faq.question}</span>
                <motion.div 
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="text-primary" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-500 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}