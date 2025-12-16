"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    {
        title: "High-Quality Components",
        description: "We strictly verify all parts for authenticity and performance."
    },
     {
        title: "Trusted Global Suppliers",
        description: "Direct partnerships with leading manufacturers ensuring reliability."
    },
     {
        title: "Fast Sourcing & Delivery",
        description: "Efficient logistics to get critical components to you on time."
    },
     {
        title: "Competitive Pricing",
        description: "Best market rates for bulk orders and individual components."
    },
    {
        title: "Local Presence",
        description: "Based in Erbil, understanding and serving the Iraqi market needs."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative isolate overflow-hidden">
        {/* Background effects */}
         <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
         </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
             >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner With Us?</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    In the fast-paced world of electronics, reliability is everything. We go beyond just selling parts; we provide solutions that empower your business to thrive.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="text-white italic">
                        "Our mission is to modernize the electronic supply chain in Iraq, providing businesses with the components they need to innovate."
                    </p>
                </div>
            </motion.div>

            <div className="space-y-6">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                         initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                    >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                            <Check size={16} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{benefit.title}</h3>
                            <p className="text-slate-400">{benefit.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
