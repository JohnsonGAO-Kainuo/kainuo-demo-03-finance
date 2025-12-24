"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const expertiseAreas = [
  {
    title: "Global Asset Allocation",
    content: "We utilize dynamic asset allocation strategies to navigate changing market conditions. Our global macro approach ensures your portfolio is positioned to capitalize on growth opportunities while mitigating downside risk across developed and emerging markets."
  },
  {
    title: "Alternative Investments",
    content: "Gain access to exclusive private equity, venture capital, and hedge fund opportunities. We curate high-conviction alternatives that provide diversification benefits and uncorrelated returns traditionally reserved for institutional investors."
  },
  {
    title: "Estate & Trust Planning",
    content: "Preserve your legacy for future generations. Our legal and tax experts work in tandem to structure efficient wealth transfer vehicles, ensuring your assets are protected and distributed according to your precise wishes."
  },
  {
    title: "Philanthropic Advisory",
    content: "Make a meaningful impact. We help structure charitable trusts and foundations, aligning your capital with the causes you care about most, maximizing both social impact and tax efficiency."
  }
];

export default function ExpertisePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] pt-32 pb-20 px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-serif mb-16"
        >
          Our Expertise
        </motion.h1>

        <div className="space-y-0 border-t border-[#1A1A1A]">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="border-b border-[#E5E5E5]">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group hover:bg-white transition-colors px-4 -mx-4"
              >
                <span className="text-2xl font-serif group-hover:text-[#1B4D3E] transition-colors">{area.title}</span>
                <div className="w-8 h-8 flex items-center justify-center border border-[#E5E5E5] group-hover:border-[#1B4D3E] transition-colors">
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-8 text-lg text-[#666] leading-relaxed max-w-3xl font-light">
                  {area.content}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

