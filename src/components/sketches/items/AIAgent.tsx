
import React from 'react';

export default function AIAgent() {
    return (
        <div className="w-[300px] h-[80px] bg-black/80 backdrop-blur-3xl rounded-full flex items-center justify-between px-6 shadow-2xl border border-white/10 relative overflow-hidden group cursor-grab active:cursor-grabbing">

            {/* Apple Intelligence Glow Border */}
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-700 animate-gradient-xy" />

            {/* Inner Black Mask */}
            <div className="absolute inset-[1px] bg-black rounded-full z-0" />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-4 w-full">
                {/* Orb Animation */}
                <div className="w-10 h-10 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md animate-pulse" />
                    <div className="absolute inset-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>

                <div className="flex-1">
                    <div className="flex gap-1 h-3 items-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 text-lg font-medium animate-pulse">
                            How can I help?
                        </span>
                    </div>
                </div>
            </div>

            <style jsx>{`
         @keyframes gradient-xy {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
         }
         .animate-gradient-xy {
            background-size: 200% 200%;
            animation: gradient-xy 3s ease infinite;
         }
       `}</style>
        </div>
    );
}
