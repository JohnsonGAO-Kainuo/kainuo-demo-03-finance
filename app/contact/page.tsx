"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] pt-32 pb-20 px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-serif mb-16 text-center"
        >
          Begin the conversation.
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-[#666]">First Name</label>
                  <input type="text" className="w-full border-b border-[#E5E5E5] bg-transparent py-2 focus:border-[#1B4D3E] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-[#666]">Last Name</label>
                  <input type="text" className="w-full border-b border-[#E5E5E5] bg-transparent py-2 focus:border-[#1B4D3E] outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-[#666]">Email</label>
                <input type="email" className="w-full border-b border-[#E5E5E5] bg-transparent py-2 focus:border-[#1B4D3E] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-[#666]">Phone</label>
                <input type="tel" className="w-full border-b border-[#E5E5E5] bg-transparent py-2 focus:border-[#1B4D3E] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-[#666]">Inquiry</label>
                <textarea rows={4} className="w-full border-b border-[#E5E5E5] bg-transparent py-2 focus:border-[#1B4D3E] outline-none transition-colors"></textarea>
              </div>
              <button className="bg-[#1B4D3E] text-white px-12 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#143d30] transition w-full">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="flex items-center gap-2 text-[#1B4D3E] font-serif text-lg mb-4">
                  <Phone className="w-5 h-5" /> Call Us
                </h3>
                <p className="text-[#666]">+852 3456 7890</p>
                <p className="text-[#999] text-xs mt-1">Mon-Fri, 9am - 6pm HKT</p>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-[#1B4D3E] font-serif text-lg mb-4">
                  <Mail className="w-5 h-5" /> Email
                </h3>
                <p className="text-[#666]">wealth@vaultcapital.hk</p>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-[#1B4D3E] font-serif text-lg mb-4">
                <MapPin className="w-5 h-5" /> Visit Us
              </h3>
              <p className="text-[#666] mb-6">
                Level 28, IFC Tower 2<br/>
                8 Finance Street, Central<br/>
                Hong Kong
              </p>
              {/* Map Placeholder (Using a styled div to simulate a high-end map) */}
              <div className="w-full h-64 bg-[#E5E5E5] relative grayscale hover:grayscale-0 transition duration-700 overflow-hidden border border-[#1B4D3E]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3690623377747!2d114.15656337595676!3d22.284381942846096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040063063f0367%3A0x6a025777dfb66e!2sTwo%20International%20Finance%20Centre!5e0!3m2!1sen!2shk!4v1703660000000!5m2!1sen!2shk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

