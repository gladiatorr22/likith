
import React from 'react';
import { Play, SkipForward, SkipBack } from 'lucide-react';

export default function MusicWidget() {
    return (
        <div className="relative w-[300px] h-[100px] bg-black/40 backdrop-blur-3xl rounded-[24px] overflow-hidden flex items-center p-3 gap-4 shadow-2xl border border-white/10 ring-1 ring-white/5 cursor-grab active:cursor-grabbing group">
            {/* Background Blur of Art */}
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500"
            />

            {/* Album Art */}
            <div className="relative w-[76px] h-[76px] rounded-[18px] bg-white/10 overflow-hidden shadow-lg flex-shrink-0">
                <img
                    src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop"
                    alt="Album Art"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Controls & Info */}
            <div className="flex-1 min-w-0 z-10 flex flex-col justify-center">
                <h4 className="text-white text-sm font-semibold truncate leading-tight">Neon Nights</h4>
                <p className="text-white/50 text-xs font-medium truncate mb-2">Cyberpunk Orchestra</p>

                <div className="flex items-center gap-3">
                    <SkipBack className="w-4 h-4 text-white/70 fill-current" />
                    <Play className="w-5 h-5 text-white fill-current" />
                    <SkipForward className="w-4 h-4 text-white/70 fill-current" />
                </div>
            </div>

            {/* Progress Bar (Absolute Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                <div className="h-full bg-white/80 w-[40%]" />
            </div>
        </div>
    );
}
