
import React from 'react';

export default function WatchFace() {
  return (
    <div className="w-[180px] h-[220px] bg-black rounded-[44px] border-[6px] border-[#222] shadow-2xl ring-1 ring-white/10 relative flex items-center justify-center cursor-grab active:cursor-grabbing group overflow-hidden">

      {/* Screen Glare */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[38px] pointer-events-none z-20" />

      {/* Activity Rings (CSS Conic Gradients) */}
      <div className="relative w-full h-full flex items-center justify-center scale-90 group-hover:scale-95 transition-transform duration-500">
        {/* Red Ring */}
        <div className="absolute w-[120px] h-[120px] rounded-full border-[12px] border-[#1a0505]" />
        <div className="absolute w-[120px] h-[120px] rounded-full border-[12px] border-red-500 border-l-transparent border-b-transparent -rotate-45 blur-[0.5px] shadow-[0_0_15px_rgba(239,68,68,0.4)]" />

        {/* Green Ring */}
        <div className="absolute w-[84px] h-[84px] rounded-full border-[12px] border-[#061a05]" />
        <div className="absolute w-[84px] h-[84px] rounded-full border-[12px] border-green-500 border-r-transparent rotate-90 blur-[0.5px] shadow-[0_0_15px_rgba(34,197,94,0.4)]" />

        {/* Blue Ring */}
        <div className="absolute w-[48px] h-[48px] rounded-full border-[12px] border-[#05121a]" />
        <div className="absolute w-[48px] h-[48px] rounded-full border-[12px] border-blue-500 border-t-transparent rotate-180 blur-[0.5px] shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
      </div>

      {/* Time */}
      <div className="absolute top-8 right-8 text-white font-medium text-xs tracking-wider z-10">
        10:09
      </div>

      {/* Complication Top Left */}
      <div className="absolute top-8 left-8 flex flex-col items-center z-10">
        <span className="text-[9px] text-gray-400 font-medium uppercase">NYC</span>
        <span className="text-[10px] text-white font-semibold">1:09</span>
      </div>

      {/* Hands */}
      <div className="absolute w-1.5 h-16 bg-white rounded-full -translate-y-6 z-10 shadow-sm origin-bottom" style={{ transform: 'translateY(-24px) rotate(0deg)' }} />
      <div className="absolute w-1.5 h-12 bg-gray-400/80 rounded-full -translate-y-4 z-10 origin-bottom" style={{ transform: 'translateY(-20px) rotate(120deg)' }} />
      <div className="absolute w-2 h-2 bg-orange-500 rounded-full z-20 shadow-md" />
    </div>
  );
}
