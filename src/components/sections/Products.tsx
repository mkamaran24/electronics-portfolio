"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Zap, Radio, Activity, Settings, Layers } from "lucide-react";

export function Products() {
  const products = [
    {
      title: "Sensors",
      description: "Precision sensors for industrial automation and IoT applications.",
      icon: Activity,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      title: "Diodes",
      description: "High-performance diodes for power rectification and signal regulation.",
      icon: Zap,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      title: "Transistors",
      description: "Bipolar and Field-Effect transistors for amplification and switching.",
      icon: Layers,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      title: "Integrated Circuits (ICs)",
      description: "Microcontrollers, memory chips, and logic gates for complex systems.",
      icon: Cpu,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      title: "Power Components",
      description: "Robust power modules, thyristors, and regulators for energy management.",
      icon: Zap,
      gradient: "from-red-500 to-rose-600",
      bgGradient: "from-red-50 to-rose-50",
    },
    {
      title: "Custom Parts",
      description: "Sourcing hard-to-find or specific electronic components upon request.",
      icon: Settings,
      gradient: "from-slate-600 to-slate-800",
      bgGradient: "from-slate-50 to-slate-100",
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="products" className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-10 w-[32rem] h-[32rem] bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 rounded-full mx-auto"
          ></motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Our Product Range
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive selection of electronic components from world-renowned manufacturers.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-200/50 h-full flex flex-col">
                {/* Icon container with gradient */}
                <motion.div 
                  className={`relative h-16 w-16 bg-gradient-to-br ${product.bgGradient} rounded-2xl flex items-center justify-center mb-6 overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <product.icon 
                    className={`relative z-10 bg-gradient-to-br ${product.gradient} bg-clip-text text-transparent group-hover:text-white transition-all duration-300`}
                    size={28} 
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Animated bottom accent */}
                  <motion.div 
                    className={`h-1 bg-gradient-to-r ${product.gradient} rounded-full mt-6`}
                    initial={{ width: "2rem" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-xl`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-600 mb-6">Can't find what you're looking for?</p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Custom Component
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}