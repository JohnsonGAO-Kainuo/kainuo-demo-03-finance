"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { year: '2019', strategy: 12, benchmark: 8 },
  { year: '2020', strategy: 18, benchmark: 10 },
  { year: '2021', strategy: 25, benchmark: 15 },
  { year: '2022', strategy: 22, benchmark: 12 },
  { year: '2023', strategy: 35, benchmark: 18 },
  { year: '2024', strategy: 42, benchmark: 22 },
];

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] pt-32 pb-20 px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-serif mb-8"
        >
          Track Record
        </motion.h1>
        <p className="text-xl text-[#666] mb-16 max-w-2xl font-light">
          Consistent alpha generation through market cycles. Our quantitative strategies have outperformed the benchmark for 5 consecutive years.
        </p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-12 border border-[#E5E5E5] mb-16"
        >
          <div className="flex items-center gap-8 mb-8 text-sm font-bold tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1B4D3E]"></div>
              <span>Vault Strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#999]"></div>
              <span>Global Benchmark</span>
            </div>
          </div>
          
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="0" stroke="#F5F5F5" vertical={false} />
                <XAxis dataKey="year" stroke="#999" tickLine={false} axisLine={false} style={{ fontSize: '12px' }} />
                <YAxis stroke="#999" tickLine={false} axisLine={false} style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1B4D3E', border: 'none', borderRadius: '0px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="strategy" stroke="#1B4D3E" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="benchmark" stroke="#999" strokeWidth={2} dot={false} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
           {[
             { label: "5-Year ROI", value: "+42%" },
             { label: "Max Drawdown", value: "-4.2%" },
             { label: "Sharpe Ratio", value: "2.8" }
           ].map((stat, i) => (
             <div key={i} className="py-8 border-t border-b border-[#E5E5E5]">
               <div className="text-6xl font-serif text-[#1B4D3E] mb-2">{stat.value}</div>
               <div className="text-xs font-bold tracking-widest uppercase text-[#999]">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

