import React from 'react';
import { Cpu, Database, Shield, Globe, Cloud, Code } from 'lucide-react';

const techs = [
  { name: "Open AI", icon: <Cpu /> },
  { name: "Firebase", icon: <Database /> },
  { name: "Google Maps", icon: <Globe /> },
  { name: "Cloudinary", icon: <Cloud /> },
  { name: "React Native", icon: <Code /> },
  { name: "AES-256", icon: <Shield /> },
];

export default function TechMarquee() {
  return (
    <div className="bg-white py-10 border-y border-gray-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="flex w-max animate-scroll">
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-3 mx-12 text-gray-400 font-bold uppercase tracking-wider text-sm">
            <span className="text-gray-300">{tech.icon}</span>
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
}