
import React from 'react';
import { Loader2, ArrowRight, Play, Mic } from 'lucide-react';

export default function ModernButtons() {
    return (
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-[32px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-white/10 flex flex-col gap-4 min-w-[220px] ring-1 ring-black/5">

            {/* iOS Primary Button */}
            <button className="h-12 w-full rounded-full bg-[#007AFF] hover:bg-[#0062cc] text-white text-[15px] font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-blue-500/20">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
            </button>

            {/* iOS Tonal Button */}
            <div className="flex gap-3">
                <button className="flex-1 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-[#007AFF] text-[15px] font-semibold flex items-center justify-center active:scale-95 transition-all">
                    Edit
                </button>
                <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-[#007AFF] flex items-center justify-center active:scale-95 transition-all">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
            </div>

            {/* Destructive / Record */}
            <button className="h-12 w-full rounded-full bg-red-500/10 text-red-500 text-[15px] font-semibold hover:bg-red-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Recording
            </button>

        </div>
    );
}
