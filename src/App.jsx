import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import TechMarquee from './components/TechMarquee';

// Sections
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import BentoFeatures from './sections/BentoFeatures';
import AIProcess from './sections/AIProcess';
import HowItWorks from './sections/HowItWorks';
import FAQ from './sections/FAQ';

// Asset
import LoadingIcon from './assets/image.png';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans text-secondary bg-white selection:bg-primary selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          >
            <motion.img 
              src={LoadingIcon} 
              alt="Loading"
              className="w-24 h-24 object-contain mb-6"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: 100 }}
               transition={{ duration: 1.5 }}
               className="h-1 bg-primary rounded-full"
            />
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Hero />
            <TechMarquee />
            <Stats />
            <BentoFeatures />
            <AIProcess />
            <HowItWorks />
            <FAQ />
            
            <footer className="bg-secondary text-white py-12 text-center border-t border-gray-800">
               <img src={LoadingIcon} alt="" className="w-12 h-12 mx-auto mb-6 opacity-50 grayscale" />
               <p className="text-gray-500 text-xs tracking-widest uppercase">
                 © 2026 PawFind Capstone Project
               </p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}