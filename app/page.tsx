"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Users, BarChart3, ArrowRight, Phone, Mail, MapPin, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-800 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-emerald-900">Vault Capital</span>
              <span className="block text-[10px] uppercase tracking-widest text-emerald-700 font-semibold">Wealth Management</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            {['Services', 'Performance', 'About', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-800 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-700 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition shadow-md hover:shadow-lg"
          >
            Schedule Consultation
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-6">
              <TrendingUp className="w-3 h-3" /> Trusted by 5,000+ Investors
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Grow your wealth with <span className="text-emerald-800">confidence.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Data-driven investment strategies tailored to your financial goals. Average annual return of 12.4% over the past 5 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition flex items-center justify-center gap-2">
                <Calculator className="w-4 h-4" /> Investment Calculator
              </button>
            </div>
          </motion.div>

          {/* Chart Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Portfolio Growth</h3>
                <p className="text-3xl font-bold text-emerald-800 mt-1">$310,000</p>
                <p className="text-sm text-emerald-600 font-medium">+26.5% This Year</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-emerald-800" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#064E3B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#064E3B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
                />
                <Area type="monotone" dataKey="value" stroke="#064E3B" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-emerald-900 text-white">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Assets Under Management", value: "$2.5B" },
            { label: "Average Annual Return", value: "12.4%" },
            { label: "Active Clients", value: "5,000+" },
            { label: "Years of Experience", value: "25+" }
          ].map((stat, i) => (
            <div key={i} className="border-r border-emerald-700 last:border-0">
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-emerald-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-emerald-800 font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tailored wealth solutions</h2>
            <p className="text-slate-600 text-lg">From portfolio management to retirement planning, we provide comprehensive financial services.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Portfolio Management", desc: "Diversified investment strategies optimized for risk-adjusted returns." },
              { icon: Shield, title: "Wealth Preservation", desc: "Tax-efficient structures and estate planning to protect your legacy." },
              { icon: Users, title: "Retirement Planning", desc: "Secure your future with data-driven retirement income strategies." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-xl border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-800 mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <Link href="#" className="text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to secure your financial future?</h2>
          <p className="text-xl text-emerald-100 mb-10">Schedule a complimentary consultation with our wealth advisors.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition shadow-xl">
              Book Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <div className="text-2xl font-bold text-white mb-6">Vault Capital</div>
            <p className="mb-6 leading-relaxed">Building wealth through intelligent investment strategies since 1999.</p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Office</h4>
            <p>Level 28, IFC Tower</p>
            <p>1 Harbour View Street</p>
            <p>Hong Kong</p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Contact</h4>
            <p>wealth@vaultcapital.hk</p>
            <p>+852 3456 7890</p>
          </div>
          <div>
             <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Legal</h4>
             <ul className="space-y-2">
               <li><Link href="#" className="hover:text-emerald-400 transition">Privacy Policy</Link></li>
               <li><Link href="#" className="hover:text-emerald-400 transition">Terms of Service</Link></li>
               <li><Link href="#" className="hover:text-emerald-400 transition">Risk Disclosure</Link></li>
             </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-8 mt-8 border-t border-slate-800 text-center text-xs">
          © 2024 KainuoTech Demo. All rights reserved. | Vault Capital is a fictional brand for demonstration purposes.
        </div>
      </footer>
    </div>
  );
}
