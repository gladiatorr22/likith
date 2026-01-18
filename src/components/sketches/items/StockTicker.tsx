
import React from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export default function StockTicker() {
    return (
        <div className="w-[200px] h-[120px] bg-black/80 backdrop-blur-2xl rounded-[24px] overflow-hidden border border-white/10 shadow-xl relative group cursor-grab active:cursor-grabbing">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

            <div className="p-4 relative z-10 flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                            <span className="text-[10px] font-bold text-black">A</span>
                        </div>
                        <span className="text-xs font-bold text-white tracking-wide">AAPL</span>
                    </div>
                    <div className="text-2xl font-semibold text-white tracking-tight">$182.44</div>
                </div>

                <div className="flex items-center gap-0.5 text-[#30d158] bg-[#30d158]/10 px-1.5 py-0.5 rounded-full">
                    <ArrowUpRight className="w-3 h-3" />
                    <span className="text-[10px] font-bold">+1.2%</span>
                </div>
            </div>

            {/* Graph */}
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#30d158" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#30d158" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M0 64 L20 50 L40 55 L60 35 L80 40 L100 20 L120 25 L140 10 L160 15 L180 5 L200 10 V64 H0 Z" fill="url(#chartGradient)" />
                    <path d="M0 64 L20 50 L40 55 L60 35 L80 40 L100 20 L120 25 L140 10 L160 15 L180 5 L200 10" fill="none" stroke="#30d158" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}
