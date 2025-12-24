"use client";

import { useState } from 'react';
import { MessageCircle, Linkedin, Instagram, Facebook, Share2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SocialWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: MessageCircle, href: "#", color: "bg-[#25D366]", label: "WhatsApp" },
    { icon: Linkedin, href: "#", color: "bg-[#0077B5]", label: "LinkedIn" },
    { icon: Instagram, href: "#", color: "bg-[#E4405F]", label: "Instagram" },
    { icon: Facebook, href: "#", color: "bg-[#1877F2]", label: "Facebook" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${social.color} w-12 h-12 flex items-center justify-center text-white shadow-lg hover:brightness-110 transition-all cursor-pointer`}
                title={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#1B4D3E] text-white flex items-center justify-center shadow-2xl hover:bg-[#153d31] transition-colors"
      >
        {isOpen ? <X size={24} /> : <Share2 size={24} />}
      </button>
    </div>
  );
}

