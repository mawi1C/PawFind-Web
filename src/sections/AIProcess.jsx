import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  "Analyzing pet behavior patterns...",
  "Fetching nearby OpenStreetMap data...",
  "Processing environmental factors...",
  "Calculating movement probabilities...",
  "Mapping high-probability zones..."
];

export default function AIProcess() {
  return (
    <section id="ai-search" className="py-24 bg-secondary text-white relative">
      {/* 🌀 Noise Texture Overlay for "Atmosphere" */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        <div>
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="inline-block bg-white/10 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest text-primary mb-6"
           >
             Under the Hood
           </motion.div>
           <h2 className="text-4xl font-bold mb-6">How our AI thinks.</h2>
           <p className="text-gray-400 mb-10 text-lg">PawFind doesn't just look at a map. It "thinks" like your pet, using thousands of data points to predict their next move.</p>

           <div className="space-y-6">
             {steps.map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ margin: "-50px" }}
                 className="flex items-center gap-4 group"
               >
                 <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-primary text-xs font-bold group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors duration-300">
                   {i + 1}
                 </div>
                 <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{step}</span>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Visualizer Card */}
        <div className="relative">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             className="bg-surface-dark p-8 rounded-[2.5rem] border border-gray-700 shadow-2xl"
           >
              {/* Fake UI Elements */}
              <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"/>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                    <div className="w-3 h-3 rounded-full bg-green-500"/>
                 </div>
                 <div className="text-xs text-gray-500 font-mono">AI_ANALYSIS_V2.JSON</div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                    className="flex justify-between text-green-400"
                  >
                     <span>{`> ${step.split(' ')[0]}...`}</span>
                     <span>OK</span>
                  </motion.div>
                ))}
                <motion.div 
                   initial={{ width: 0 }} 
                   whileInView={{ width: "100%" }} 
                   transition={{ delay: 1.5, duration: 1 }}
                   className="h-1 bg-primary mt-4 rounded-full" 
                />
              </div>
           </motion.div>
           
           {/* Glow Effect behind card */}
           <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full" />
        </div>

      </div>
    </section>
  );
}