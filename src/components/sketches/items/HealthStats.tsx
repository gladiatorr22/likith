
import React from 'react';
import { Footprints, Flame, Clock } from 'lucide-react';

export default function HealthStats() {
    return (
        <div className="w-[160px] h-[160px] bg-black rounded-full border border-gray-800 shadow-2xl relative flex items-center justify-center group cursor-grab active:cursor-grabbing">

            {/* Rings Container */}
            <svg className="w-full h-full -rotate-90 p-2">
                {/* Outer Ring (Move) */}
                <circle cx="50%" cy="50%" r="65" stroke="#1f0909" strokeWidth="12" fill="none" />
                <circle cx="50%" cy="50%" r="65" stroke="#fa114f" strokeWidth="12" fill="none"
                    strokeDasharray="408" strokeDashoffset="100" strokeLinecap="round" className="drop-shadow-[0_0_4px_rgba(250,17,79,0.5)]" />

                {/* Middle Ring (Exercise) */}
                <circle cx="50%" cy="50%" r="48" stroke="#121a05" strokeWidth="12" fill="none" />
                <circle cx="50%" cy="50%" r="48" stroke="#aaff00" strokeWidth="12" fill="none"
                    strokeDasharray="301" strokeDashoffset="80" strokeLinecap="round" className="drop-shadow-[0_0_4px_rgba(170,255,0,0.5)]" />

                {/* Inner Ring (Stand) */}
                <circle cx="50%" cy="50%" r="31" stroke="#041416" strokeWidth="12" fill="none" />
                <circle cx="50%" cy="50%" r="31" stroke="#00d1ff" strokeWidth="12" fill="none"
                    strokeDasharray="194" strokeDashoffset="60" strokeLinecap="round" className="drop-shadow-[0_0_4px_rgba(0,209,255,0.5)]" />
            </svg>

            {/* Icons Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm rounded-full pointer-events-none">
                <div className="text-center">
                    <div className="flex items-center gap-1 text-[#fa114f] text-xs font-bold"><Flame size={12} fill="currentColor" /> 450</div>
                    <div className="flex items-center gap-1 text-[#aaff00] text-xs font-bold my-1"><Clock size={12} fill="currentColor" /> 30m</div>
                    <div className="flex items-center gap-1 text-[#00d1ff] text-xs font-bold"><Footprints size={12} fill="currentColor" /> 8h</div>
                </div>
            </div>
        </div>
    );
}
