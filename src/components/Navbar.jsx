import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { Magnetic } from './Animators';
import Logo from '../assets/pawfind_logo.png'; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="relative z-50">
          <img src={Logo} alt="PawFind" className="h-8 w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'AI Process', 'How it Works', 'FAQ'].map((item) => (
            <Magnetic key={item}>
              <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                {item}
              </a>
            </Magnetic>
          ))}
          <Magnetic>
            <a href="https://github.com/mawi1C/PawFind-Web/releases/download/v1-0/application-0121de10-2a2c-4d93-807a-dcaa1799fc69.apk" className="flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-gray-800 transition-all">
              <Download size={16} />
              Download APK
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 text-secondary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Features', 'AIProcess', 'HowItWorks', 'FAQ'].map((item) => (
               <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-secondary">
                 {item}
               </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}