import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, PawPrint, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Download APK",
    desc: "Get the latest v1.0 Live Beta directly. Your browser might ask for permission—simply confirm to proceed.",
    icon: <Download size={24} />,
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600"
  },
  {
    num: "02",
    title: "Install & Verify",
    desc: "Enable 'Install from Unknown Sources' in settings. Our app is verified and safe for your device.",
    icon: <ShieldCheck size={24} />,
    color: "bg-slate-900",
    lightColor: "bg-slate-50",
    textColor: "text-slate-900"
  },
  {
    num: "03",
    title: "Protect Your Pet",
    desc: "Generate a unique Digital Certificate and let our AI start analyzing safe zones for your furry friend.",
    icon: <PawPrint size={24} />,
    color: "bg-primary",
    lightColor: "bg-orange-50",
    textColor: "text-primary"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-orange-50/50 rounded-[100%] blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Matching Hero Style */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-600 font-bold text-[10px] uppercase tracking-[0.2em] bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100"
          >
            Setup Guide
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 tracking-tight">
            Ready in <span className="text-slate-400">three simple steps.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting SVG Path (Hidden on Mobile) */}
          <svg className="hidden md:block absolute top-24 left-0 w-full h-12 -z-10 opacity-10" fill="none" viewBox="0 0 1000 100">
            <path d="M0,50 Q250,0 500,50 T1000,50" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="text-slate-900" />
          </svg>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative"
            >
              <div className="relative z-10 bg-white border border-slate-200/60 p-10 rounded-[2.5rem] h-full transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2">
                
                {/* Number Badge */}
                <div className="absolute top-6 right-8 text-5xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {step.num}
                </div>

                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  {step.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed text-sm mb-6">
                  {step.desc}
                </p>

                {/* Bottom Link/Hint */}
                <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${step.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  Learn More <ArrowRight size={14} />
                </div>
              </div>

              {/* Decorative Blur behind active card */}
              <div className="absolute inset-0 bg-orange-100/20 blur-2xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}