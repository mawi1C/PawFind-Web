import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ScanFace, FileCheck, Smartphone, ArrowUpRight, Shield } from 'lucide-react';

const FeatureCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className={`relative overflow-hidden rounded-[2rem] border border-slate-200/60 p-6 bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 ${className}`}
  >
    {children}
  </motion.div>
);

export default function BentoFeatures() {
  return (
    <section id="features" className="py-20 bg-white relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - More Compact */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center md:text-left">
            <span className="text-orange-600 font-bold text-[10px] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              Core Engine
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              Powerful tools, <span className="text-slate-400 font-medium">simple recovery.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-orange-600 transition-colors uppercase tracking-widest">
            View Documentation <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Slim Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Feature 1: AI (Horizontal-ish) */}
          <FeatureCard className="md:col-span-2 h-64 group">
            <div className="flex flex-col md:flex-row h-full items-start md:items-center gap-6">
              <div className="bg-slate-900 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-orange-400 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Brain size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Behavioral AI Analysis</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                  Our Gemini-powered engine analyzes terrain and breed instincts to predict movement patterns in real-time.
                </p>
                <div className="mt-4 flex gap-2">
                   <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md">TERRAIN DATA</span>
                   <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md">BREED LOGIC</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-orange-50 rounded-full blur-3xl group-hover:bg-orange-100 transition-colors" />
          </FeatureCard>

          {/* Feature 2: Visual ID (Vertical-ish) */}
          <FeatureCard className="md:col-span-1 h-64 bg-slate-900 text-white border-none">
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-md">
                  <ScanFace size={24} className="text-orange-400" />
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Visual ID</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Biometric matching against live sightings using computer vision.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '16px 16px' }} />
          </FeatureCard>

          {/* Feature 3: Ownership (Bottom Left) */}
          <FeatureCard className="md:col-span-1 h-64">
             <div className="flex flex-col h-full">
                <div className="text-orange-600 mb-auto">
                  <Shield size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Legal Verification</h3>
                  <p className="text-slate-500 text-xs mt-2">
                    Tamper-proof ownership certificates for secure pet recovery.
                  </p>
                </div>
             </div>
          </FeatureCard>

          {/* Feature 4: Mobile App (Bottom Right - Wide) */}
          <FeatureCard className="md:col-span-2 h-64 group bg-orange-500 border-none text-white">
            <div className="flex justify-between items-center h-full overflow-hidden">
              <div className="relative z-10 p-2">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold">Mobile First Control</h3>
                <p className="text-orange-100 text-sm mt-2 max-w-xs">
                  Instant push notifications and real-time tracking from our cross-platform mobile app.
                </p>
              </div>
              {/* Abstract Phone Shape */}
              <div className="relative w-40 h-64 bg-slate-900 rounded-t-[2rem] translate-y-12 translate-x-4 border-4 border-slate-800 shadow-2xl group-hover:-translate-y-2 transition-transform duration-700">
                 <div className="w-12 h-1 bg-slate-800 rounded-full mx-auto mt-4" />
                 <div className="p-4">
                    <div className="w-full h-2 bg-orange-500/20 rounded-full mb-2" />
                    <div className="w-2/3 h-2 bg-orange-500/20 rounded-full" />
                 </div>
              </div>
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}