
import React, { useState } from 'react';

export default function SmartDial() {
    const [temp, setTemp] = useState(72);

    // Simple scroll interaction using wheel or drag could be complex, 
    // keeping it simple click-to-change for now or just visual
    return (
        <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center relative group cursor-grab active:cursor-grabbing">

            {/* Tick Marks (CSS Conic) */}
            <div className="absolute inset-2 rounded-full border border-white/5" />

            {/* Active Arc (Simulated by gradient mask or SVG) */}
            <svg className="absolute inset-0 w-full h-full rotate-[130deg] pointer-events-none">
                <circle cx="50%" cy="50%" r="64" stroke="white" strokeWidth="2" fill="none" strokeDasharray="10 10" opacity="0.1" />
            </svg>

            {/* Knob */}
            <div className="w-[100px] h-[100px] rounded-full bg-neutral-800 shadow-inner flex items-center justify-center relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                <div className="text-center z-10">
                    <span className="block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-red-500 drop-shadow-sm">{temp}°</span>
                    <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-medium">Heating</span>
                </div>
            </div>

            {/* Indicator */}
            <div className="absolute top-2 w-1.5 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
        </div>
    );
}
