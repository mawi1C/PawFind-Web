import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Search, Sparkles, FileText } from 'lucide-react';

const cards = [
  {
    subtitle: "COMMUNITY WATCH",
    title: "Power in Numbers",
    desc: "Join a vigilant network of pet lovers. Form a real-time safety net.",
    icon: <Users className="text-white" size={28} />,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    subtitle: "PRECISION MATCHING",
    title: "Smart ID",
    desc: "Cross-references unique markings and behavior to identify pets accurately.",
    icon: <Search className="text-white" size={28} />,
    color: "bg-primary",
    gradient: "from-orange-500 to-red-500"
  },
  {
    subtitle: "AI INTELLIGENCE",
    title: "Next-Gen Protection",
    desc: "AI analyzes environment patterns to predict high-probability zones.",
    icon: <Sparkles className="text-white" size={28} />,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    subtitle: "DIGITAL IDENTITY",
    title: "Always Protected",
    desc: "Secure your pet's future with a tamper-proof digital certificate.",
    icon: <FileText className="text-white" size={28} />,
    color: "bg-green-500",
    gradient: "from-green-500 to-teal-600"
  },
];

export default function OnboardingShowcase() {
  const scrollRef = useRef(null);

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">Features</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary">Why PawFind?</h2>
        </div>
        <div className="hidden md:flex gap-2 text-sm font-bold text-gray-400">
           <span>DRAG TO EXPLORE</span>
           <span>→</span>
        </div>
      </div>

      {/* 🖱️ Drag Interaction Carousel */}
      <motion.div 
        ref={scrollRef}
        className="cursor-grab active:cursor-grabbing overflow-x-hidden"
      >
        <motion.div 
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }} // Adjust based on card width * count
          className="flex gap-6 px-6 md:px-[max(2rem,calc((100vw-80rem)/2))]" // Centers nicely on large screens
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="min-w-[300px] md:min-w-[350px] h-[450px] rounded-[2.5rem] bg-surface border border-gray-100 p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Gradient Animation on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center shadow-lg mb-8 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">
                  {card.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-secondary mb-4">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
              </div>

              {/* Decorative Circle */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${card.color} rounded-full opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-700`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}