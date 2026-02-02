import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Camera, Smartphone, ArrowUpRight, UserCheck, ClipboardList, FileSearch } from 'lucide-react';

const FeatureCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className={`relative overflow-hidden rounded-[2.5rem] border border-slate-100 p-8 bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 ${className}`}
  >
    {children}
  </motion.div>
);

export default function BentoFeatures() {
  return (
    <section id="features" className="py-20 bg-white relative">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-left">
            <span className="text-orange-600 font-bold text-[10px] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              App Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              Intuitive features, <span className="text-slate-400 font-medium">smarter recovery.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-orange-600 transition-colors uppercase tracking-widest">
            Explore All Features <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Image to Image Matching (Top Left - High Importance) */}
          <FeatureCard className="md:col-span-2 h-72 group bg-slate-900 border-none text-white">
            <div className="flex flex-col md:flex-row h-full items-start md:items-center gap-8 relative z-10">
              <div className="bg-orange-500 w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-500">
                <Camera size={40} strokeWidth={1.5} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Image Matching</h3>
                    <span className="text-[10px] font-bold bg-white/10 text-orange-400 px-2 py-1 rounded">75–85% ACCURACY</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed max-w-md">
                  Powered by OpenAI vision models. We cross-reference lost reports with found sightings to identify possible matches instantly.
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none" />
          </FeatureCard>

          {/* 2. AI Behavior Analysis (Top Right) */}
          <FeatureCard className="md:col-span-1 h-72">
            <div className="flex flex-col justify-between h-full relative z-10">
              <div className="flex justify-between items-start">
                <div className="text-orange-500">
                   <Brain size={32} strokeWidth={1.5} />
                </div>
                <div className="px-2 py-1 rounded-md bg-orange-50 text-[10px] font-bold text-orange-600 uppercase">OpenAI Powered</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Behavior Analysis</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Predicts movement patterns based on breed traits and terrain to optimize your search area.
                </p>
              </div>
            </div>
          </FeatureCard>

          {/* 3. Owner Verification & Registration (Bottom Left) */}
          <FeatureCard className="md:col-span-1 h-72">
             <div className="flex flex-col h-full justify-between">
                <div className="flex gap-2">
                    <div className="p-2 bg-slate-50 rounded-xl text-orange-500"><ClipboardList size={24}/></div>
                    <div className="p-2 bg-slate-50 rounded-xl text-orange-500"><UserCheck size={24}/></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Secure Records</h3>
                  <p className="text-gray-700 text-xs mt-3 leading-relaxed">
                    Tamper-proof pet registration and owner verification protocols ensure pets go back to the right home.
                  </p>
                </div>
             </div>
          </FeatureCard>

          {/* 4. Reporting Lost/Found (Bottom Right) */}
          <FeatureCard className="md:col-span-2 h-72 group overflow-hidden border-orange-100 bg-orange-50/10">
            <div className="flex justify-between items-center h-full">
              <div className="relative z-10 p-2 w-1/2">
                <div className="flex items-center gap-2 mb-4">
                    <FileSearch className="text-orange-500" size={20} />
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Community Watch</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Report Lost or Found</h3>
                <p className="text-gray-700 text-sm leading-snug max-w-xs">
                  Instant push notifications sent to users in the area when a new report is filed.
                </p>
              </div>
              
              {/* Abstract App Graphic */}
              <div className="relative w-56 h-80 bg-white rounded-[2.5rem] translate-y-16 translate-x-12 border-[6px] border-slate-900 shadow-2xl group-hover:-translate-y-2 transition-transform duration-700">
                 <div className="w-16 h-4 bg-slate-900 rounded-b-xl mx-auto top-0 absolute left-0 right-0 z-20" />
                 <div className="p-4 pt-10">
                    <div className="w-full h-24 bg-orange-100 rounded-2xl mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-orange-500 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-2 bg-slate-100 rounded" />
                        <div className="w-full h-2 bg-slate-100 rounded" />
                        <div className="w-2/3 h-2 bg-orange-200 rounded" />
                    </div>
                 </div>
              </div>
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}