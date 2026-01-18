
import React from 'react';
import { Wifi } from 'lucide-react';

export default function PaymentCard() {
    return (
        <div className="w-[240px] h-[150px] rounded-[20px] relative overflow-hidden shadow-2xl transition-transform active:scale-95 group cursor-grab active:cursor-grabbing perspective-1000">
            {/* Holographic Mesh Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-xy" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

            {/* Glass Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity" />

            <div className="relative z-10 p-5 flex flex-col justify-between h-full text-white">
                <div className="flex justify-between items-start">
                    <div className="w-10 h-6 bg-yellow-400/80 rounded-md shadow-sm backdrop-blur-sm" />
                    <Wifi className="w-6 h-6 rotate-90 opacity-70" />
                </div>

                <div>
                    <div className="font-mono text-lg tracking-widest text-shadow mb-1">•••• 4291</div>
                    <div className="flex justify-between items-end">
                        <span className="text-xs font-medium uppercase tracking-wider opacity-80">Likith Raj</span>
                        <span className="text-xs font-semibold">12/28</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
         @keyframes gradient-xy {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
         }
         .animate-gradient-xy {
            background-size: 200% 200%;
            animation: gradient-xy 6s ease infinite;
         }
       `}</style>
        </div>
    );
}
