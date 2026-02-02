import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "75–85%", label: "Match Accuracy", desc: "Powered by OpenAI" },
  { value: "< 24h", label: "Avg. Recovery", desc: "For reported pets" },
  { value: "5km", label: "Search Radius", desc: "Real-time alerts" },
  { value: "100%", label: "Verified Users", desc: "Identity checked" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}