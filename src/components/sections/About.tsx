"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import { CheckCircle2, ShieldCheck, Globe2, Zap } from "lucide-react";

export function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatAnimation: TargetAndTransition = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Content Section */}
          <motion.div 
            className="flex-1 space-y-8"
            variants={itemVariants}
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mb-4 rounded-full"
              ></motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
                About ElektraComponents
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg text-slate-700 leading-relaxed">
                Based in Erbil, we are a leading trading company dedicated to bridging the gap between global manufacturers and the local market in Iraq. We specialize in buying and selling a wide range of electronic components for both industrial applications and commercial electronics.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether you are a large-scale manufacturer or a specialized technician, we ensure that you have access to authentic, high-quality parts when you need them.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              variants={itemVariants}
            >
              {[
                { icon: ShieldCheck, text: "100% Authentic Components", color: "blue" },
                { icon: Globe2, text: "Global Market Sourcing", color: "purple" },
                { icon: CheckCircle2, text: "Serving Iraq & Kurdistan", color: "green" },
                { icon: Zap, text: "Fast & Reliable Delivery", color: "amber" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`p-2 rounded-lg bg-${item.color}-100 group-hover:bg-${item.color}-200 transition-colors`}>
                    <item.icon className={`text-${item.color}-600`} size={20} />
                  </div>
                  <span className="text-slate-800 font-medium text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Visual Section */}
          <motion.div 
            className="flex-1 relative w-full"
            variants={itemVariants}
          >
            <motion.div 
              className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-center p-8"
                  animate={floatAnimation}
                >
                  <motion.span 
                    className="block text-7xl lg:text-8xl font-black text-white/20 mb-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    ERBIL
                  </motion.span>
                  <motion.span 
                    className="block text-2xl font-bold text-white/90"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Regional Hub
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating stats cards */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-xs hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  5+
                </motion.div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Years of</p>
                  <p className="font-bold text-slate-900 text-lg">Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl shadow-2xl max-w-xs hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-white">
                <p className="text-3xl font-bold mb-1">1000+</p>
                <p className="text-sm text-blue-100">Components Available</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}