"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/20 z-10" /> {/* Extra tint if needed */}
        <img 
          src="/sensors-bg.png" 
          alt="Electronic Sensors Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Premier Automation Services in Erbil
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 max-w-5xl mx-auto leading-tight">
              Welcome to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Dara Automation
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Monitoring and Automation Services. Experienced in IOT and Industrial Automation and Monitoring Systems and Services.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                Contact Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#products" 
                className="px-8 py-4 bg-white/10 text-white border border-white/10 font-medium rounded-full hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                View Catalog
                <ChevronRight size={18} />
              </a>
            </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
    </section>
  );
}
