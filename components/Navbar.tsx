"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 top-0 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#E5E5E5]">
      <div className="container mx-auto px-8 h-24 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          {/* Logo: Text Only (Minimalist) */}
          <Link href="/">
            <span className="text-2xl font-serif font-bold tracking-tight text-[#1B4D3E]">VAULT CAPITAL</span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-12 text-xs font-bold tracking-[0.2em] text-[#4A4A4A] uppercase">
          {[
            { name: 'Expertise', path: '/expertise' },
            { name: 'Performance', path: '/performance' },
            { name: 'Philosophy', path: '/#philosophy' }, // Philosophy is still a section on home
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link key={item.name} href={item.path} className={cn(
              "hover:text-[#1B4D3E] transition-colors relative group py-2",
              pathname === item.path ? "text-[#1B4D3E]" : ""
            )}>
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-[1px] bg-[#1B4D3E] transition-transform origin-left duration-300",
                pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
          ))}
        </div>

        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex border border-[#1B4D3E] text-[#1B4D3E] px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#1B4D3E] hover:text-white transition duration-300"
        >
          Client Login
        </motion.button>
      </div>
    </nav>
  );
}

