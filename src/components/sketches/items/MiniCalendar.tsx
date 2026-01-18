
import React from 'react';

export default function MiniCalendar() {
    const currentDay = 18;
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className="w-[180px] h-[180px] bg-slate-200/40 backdrop-blur-3xl rounded-[32px] p-4 shadow-xl border border-white/20 text-gray-800 flex flex-col items-center justify-between cursor-grab active:cursor-grabbing hover:bg-slate-200/50 transition-colors">
            <div className="text-center w-full">
                <div className="text-[10px] font-bold tracking-widest text-red-500 uppercase mb-0.5">Sunday</div>
                <div className="text-5xl font-extralight tracking-tighter text-black">18</div>
            </div>

            <div className="w-full grid grid-cols-7 gap-1 mt-2">
                {days.map((d, i) => (
                    <div key={i} className="text-[8px] text-center text-gray-500 font-semibold">{d}</div>
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className={`h-1.5 w-1.5 rounded-full mx-auto ${i === 0 ? 'bg-black' : 'bg-gray-400/30'}`} />
                ))}
            </div>

            <div className="w-full bg-white/40 rounded-full h-7 flex items-center justify-center gap-1.5 mt-2 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-sm" />
                <span className="text-[9px] font-semibold text-gray-700">No Events</span>
            </div>
        </div>
    );
}
