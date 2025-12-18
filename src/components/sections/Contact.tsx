"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
                Ready to source your components? Contact us today or visit our office.
            </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 space-y-8 self-center">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Reach out to our sales team directly for quotes and inquiries, or visit our headquarters in Erbil for meeting.
                    </p>
                </div>

                <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Our Location</h4>
                            <p className="text-slate-600">Iraq - Erbil , kouran Road near Pepsi factory</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        {/* <div className="p-3 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                            <Mail size={24} />
                        </div> */}
                        {/* <div>
                            <h4 className="font-bold text-slate-900">Email Us</h4>
                            <a href="mailto:sales@elektra-components.iq" className="text-slate-600 hover:text-blue-600 transition-colors">sales@elektra-components.iq</a>
                        </div> */}
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Call Us</h4>
                            <div className="flex flex-col gap-1">
                                <a href="tel:+9647500282000" className="text-slate-600 hover:text-blue-600 transition-colors">+964 750 028 2000</a>
                                <a href="tel:+9647701554812" className="text-slate-600 hover:text-blue-600 transition-colors">+964 770 155 4812</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 h-[400px] lg:h-auto min-h-[400px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15321.377965304982!2d43.985886845583245!3d36.168429489259545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40072385619fbbe5%3A0xebb8067c34e1ecd4!2sDara.Automation!5e0!3m2!1sen!2siq!4v1766091566954!5m2!1sen!2siq" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
    </section>
  );
}
