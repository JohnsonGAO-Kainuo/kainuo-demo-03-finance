"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Users, ArrowRight, LineChart as LineIcon } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { year: '2019', value: 100000 },
  { year: '2020', value: 125000 },
  { year: '2021', value: 165000 },
  { year: '2022', value: 195000 },
  { year: '2023', value: 245000 },
  { year: '2024', value: 310000 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#1B4D3E] selection:text-white">
      
      {/* Hero Section - Sharp Edges, Serif Fonts */}
      <section className="pt-40 pb-32 px-8 border-b border-[#E5E5E5]">
        <div className="container mx-auto grid md:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <span className="block text-[#1B4D3E] font-bold tracking-[0.2em] uppercase text-xs mb-8">
              Wealth Management Since 1999
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-medium text-[#1A1A1A] mb-10 leading-[1.1]">
              Preserving legacy through <span className="italic text-[#1B4D3E]">discipline.</span>
            </h1>
            <p className="text-xl text-[#666] mb-12 max-w-xl font-light leading-relaxed">
              We deploy institutional-grade investment strategies to protect and grow capital for high-net-worth families across generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#1B4D3E] text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-[#143d30] transition duration-300 flex items-center gap-3 group">
                Review Your Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Data Visualization - Minimalist Style */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative mt-12 md:mt-0"
          >
            <div className="border border-[#E5E5E5] bg-white p-8 md:p-12 relative z-10">
              <div className="flex justify-between items-end mb-8 border-b border-[#F0F0F0] pb-6">
                <div>
                  <h3 className="text-xs font-bold text-[#999] uppercase tracking-widest mb-2">Fund Performance</h3>
                  <p className="text-4xl font-serif text-[#1B4D3E]">$310,000</p>
                </div>
                <div className="text-right">
                   <p className="text-sm font-bold text-[#1B4D3E]">+12.4%</p>
                   <p className="text-[10px] text-[#999] uppercase">Annualized Return</p>
                </div>
              </div>
              
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1B4D3E" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#1B4D3E" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="0" stroke="#F5F5F5" vertical={false} />
                    <XAxis dataKey="year" stroke="#CCC" tickLine={false} axisLine={false} style={{ fontSize: '10px', fontFamily: 'var(--font-sans)' }} />
                    <YAxis stroke="#CCC" tickLine={false} axisLine={false} style={{ fontSize: '10px', fontFamily: 'var(--font-sans)' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1B4D3E', border: 'none', borderRadius: '0px', padding: '12px' }}
                      itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                      labelStyle={{ display: 'none' }}
                      formatter={(value) => [`$${Number(value).toLocaleString()}`, '']}
                    />
                    <Area type="monotone" dataKey="value" stroke="#1B4D3E" strokeWidth={2} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Decor element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#1B4D3E] -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - No Cards, Grid Layout */}
      <section id="expertise" className="py-32 px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-[#1A1A1A] pb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">Core Expertise</h2>
            <Link href="#" className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-[#1B4D3E] transition">
              View Full Capabilities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-24">
            {[
              { icon: LineIcon, title: "Asset Allocation", desc: "Rigorous quantitative models to optimize risk-adjusted returns across global markets." },
              { icon: Shield, title: "Estate Planning", desc: "Structuring intergenerational wealth transfer to minimize tax liability and ensure continuity." },
              { icon: Users, title: "Philanthropy", desc: "Strategic giving frameworks that align capital with your family's values and impact goals." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="mb-6 text-[#1B4D3E] group-hover:text-[#2C7A62] transition-colors">
                  <service.icon strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-[#1B4D3E] transition-colors">{service.title}</h3>
                <p className="text-[#666] leading-relaxed font-light mb-8">{service.desc}</p>
                <div className="h-[1px] w-full bg-[#E5E5E5] group-hover:bg-[#1B4D3E] transition-colors duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Numbers - Sharp Grid */}
      <section className="py-0 border-y border-[#E5E5E5]">
        <div className="container mx-auto grid md:grid-cols-4">
          {[
            { label: "Assets Managed", value: "$2.5B" },
            { label: "Client Retention", value: "99.4%" },
            { label: "Avg Tenure", value: "14 Yrs" },
            { label: "Global Reach", value: "12 Mkts" }
          ].map((stat, i) => (
            <div key={i} className="py-16 px-8 border-b md:border-b-0 md:border-r border-[#E5E5E5] last:border-0 text-center hover:bg-[#FAFAFA] transition-colors">
              <div className="text-4xl md:text-5xl font-serif text-[#1B4D3E] mb-3">{stat.value}</div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#999] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Minimalist */}
      <section className="py-32 px-8 bg-[#1B4D3E] text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">The future of your wealth demands precision.</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#1B4D3E] px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-[#F0F0F0] transition duration-300">
              Schedule Consultation
            </button>
            <button className="border border-white/30 text-white px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition duration-300">
              Download 2024 Outlook
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151515] text-[#888] py-20 px-8 text-xs leading-loose">
        <div className="container mx-auto grid md:grid-cols-4 gap-16 border-b border-[#333] pb-16 mb-16">
          <div className="col-span-1">
             <div className="text-white font-serif text-xl mb-6 tracking-wide">VAULT CAPITAL</div>
             <p>Member of SIPC. FINRA Registered.</p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Hong Kong</h4>
            <p>1 Harbour View Street</p>
            <p>Central, Hong Kong</p>
            <p>+852 3456 7890</p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Zurich</h4>
            <p>Bahnhofstrasse 42</p>
            <p>8001 Zurich, Switzerland</p>
            <p>+41 44 215 40 00</p>
          </div>
          <div>
             <h4 className="text-white font-bold uppercase tracking-widest mb-6">Legal</h4>
             <ul className="space-y-2">
               <li><Link href="#" className="hover:text-white transition">Regulatory Disclosures</Link></li>
               <li><Link href="#" className="hover:text-white transition">Privacy Statement</Link></li>
               <li><Link href="#" className="hover:text-white transition">Terms of Use</Link></li>
             </ul>
          </div>
        </div>
        <div className="container mx-auto text-center">
          &copy; 2024 KainuoTech Demo. Vault Capital is a registered trademark. Investment products are not FDIC insured.
        </div>
      </footer>
    </div>
  );
}
