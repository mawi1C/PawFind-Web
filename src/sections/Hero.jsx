import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { TiltCard, TextReveal } from '../components/Animators';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]); // Scroll Parallax

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-38 min-h-screen overflow-hidden bg-surface flex items-center">
      
      {/* 🌀 Ambient Gradient Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">v1.0 Live Beta</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-[1.1] mb-6 font-heading">
            <TextReveal text="Find your pet with" className="block" />
            <span className="text-primary block mt-2">
               <TextReveal text="AI Intelligence." />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg"
          >
            Join the community watch. Our advanced behavioral analysis and precision matching bring lost pets home faster than ever.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/mawi1C/PawFind-Web/releases/download/v1-0/PawFind.apk" download="PawFind.apk"
              className="bg-secondary text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-gray-200/50 flex items-center justify-center gap-3 group"
            >
              Download APK 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Right: 3D Tilt Phone Mockup */}
        <motion.div style={{ y: yParallax }} className="relative flex justify-center perspective-1000">
           <TiltCard className="relative z-10 w-[300px] bg-white rounded-[3rem] border-[10px] border-secondary shadow-2xl overflow-hidden aspect-[9/19.5]">
             {/* Dynamic Content Inside Phone (Scrolls automatically) */}
             <div className="absolute inset-0 bg-gray-50 overflow-hidden">
                <img 
                  src="/app-mockup.png" 
                  alt="App Interface" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-300 p-8 text-center">Add app-mockup.png to public folder</div>';
                  }}
                />
                {/* 🖱️ Overlay interaction hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
             </div>
           </TiltCard>

           {/* Floating Elements (Looping Animation) */}
           <motion.div 
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-20 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 z-20 flex items-center gap-3"
           >
             <div className="bg-green-100 p-2 rounded-full text-green-600">
               <ShieldCheck size={20} />
             </div>
             <div>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</p>
               <p className="text-sm font-bold text-secondary">Analyzing...</p>
             </div>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
}