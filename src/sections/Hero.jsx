import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, MapPin, User } from 'lucide-react'; // Added icons for new phones
import { TiltCard, TextReveal } from '../components/Animators';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax Logic: Different speeds for depth perception
  const yMain = useTransform(scrollY, [0, 500], [0, 50]);   // Main phone moves slow
  const yLeft = useTransform(scrollY, [0, 500], [0, 120]);  // Back-left moves faster
  const yRight = useTransform(scrollY, [0, 500], [0, 150]); // Back-right moves fastest

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-38 min-h-screen overflow-hidden bg-surface flex items-center">
      
      {/* 🌀 Ambient Gradient Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* ================= LEFT: CONTENT ================= */}
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

        {/* ================= RIGHT: 3 PHONES ================= */}
        <div className="relative h-[600px] flex items-center justify-center perspective-1000">
            
            {/* 📱 PHONE 2: Left / Back (Map View) */}
            <motion.div 
                style={{ y: yLeft }}
                initial={{ opacity: 0, x: -50, rotate: -15 }}
                animate={{ opacity: 1, x: 0, rotate: -12 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-0 lg:-left-4 top-20 w-[240px] z-0 blur-[1px] opacity-80 hover:opacity-100 hover:blur-0 hover:z-30 transition-all duration-300"
            >
                 <div className="bg-white rounded-[2.5rem] border-[8px] border-gray-100 shadow-2xl overflow-hidden aspect-[9/19.5]">
                    <div className="w-full h-full bg-blue-50 flex flex-col items-center justify-center text-blue-300">
                        {/* Placeholder for Map View */}
                         <img src="/mapview.jpg" alt="Map" className="w-full h-full object-cover" 
                              onError={(e) => { e.target.style.display='none'; e.target.parentNode.innerHTML = '<div class="p-4 text-center text-xs">Map View<br/>(Add map-mockup.png)</div>' }} />
                    </div>
                 </div>
                 {/* Floating Badge Left */}
                 <div className="absolute top-12 -left-4 bg-white p-2 rounded-xl shadow-lg flex items-center gap-2">
                    <div className="bg-blue-100 p-1.5 rounded-full text-blue-600"><MapPin size={14}/></div>
                    <span className="text-[10px] font-bold text-slate-600">Live Tracker</span>
                 </div>
            </motion.div>

            {/* 📱 PHONE 3: Right / Back (Profile View) */}
            <motion.div 
                style={{ y: yRight }}
                initial={{ opacity: 0, x: 50, rotate: 15 }}
                animate={{ opacity: 1, x: 0, rotate: 12 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute right-0 lg:-right-4 top-32 w-[240px] z-0 blur-[1px] opacity-80 hover:opacity-100 hover:blur-0 hover:z-30 transition-all duration-300"
            >
                 <div className="bg-white rounded-[2.5rem] border-[8px] border-gray-100 shadow-2xl overflow-hidden aspect-[9/19.5]">
                    <div className="w-full h-full bg-orange-50 flex flex-col items-center justify-center text-orange-300">
                        {/* Placeholder for Profile View */}
                        <img src="/match.jpg" alt="Profile" className="w-full h-full object-cover" 
                             onError={(e) => { e.target.style.display='none'; e.target.parentNode.innerHTML = '<div class="p-4 text-center text-xs">Profile View<br/>(Add profile-mockup.png)</div>' }} />
                    </div>
                 </div>
                 {/* Floating Badge Right */}
                 <div className="absolute bottom-20 -right-4 bg-white p-2 rounded-xl shadow-lg flex items-center gap-2">
                    <div className="bg-orange-100 p-1.5 rounded-full text-orange-600"><User size={14}/></div>
                    <span className="text-[10px] font-bold text-slate-600">Match Found</span>
                 </div>
            </motion.div>

            {/* 📱 PHONE 1: Center / Main (Interactive) */}
            <motion.div style={{ y: yMain }} className="relative z-20">
                <TiltCard className="w-[280px] lg:w-[300px] bg-white rounded-[3rem] border-[10px] border-secondary shadow-2xl shadow-blue-900/20 overflow-hidden aspect-[9/19.5]">
                    {/* Main App Screen */}
                    <div className="absolute inset-0 bg-gray-50 overflow-hidden">
                        <img 
                            src="/analyzing.jpg" 
                            alt="Main Interface" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-300 p-8 text-center font-bold">Main App UI<br/>(Add app-mockup.png)</div>';
                            }}
                        />
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    </div>
                </TiltCard>

                {/* Floating Status Card (Attached to Main Phone) */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-24 -right-12 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-30 flex items-center gap-3"
                >
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">AI Status</p>
                        <p className="text-sm font-bold text-secondary">Analyzing Pattern...</p>
                    </div>
                </motion.div>
            </motion.div>

        </div>

      </div>
    </section>
  );
}