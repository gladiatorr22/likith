
import React, { useState } from 'react';
import { Sun, Volume2 } from 'lucide-react';

export default function InteractiveSlider() {
    const [brightness, setBrightness] = useState(70);
    const [volume, setVolume] = useState(40);

    return (
        <div className="flex gap-4 p-4 rounded-[32px] w-auto">

            {/* Brightness Vertical Slider */}
            <div className="relative w-[60px] h-[140px] bg-black/20 backdrop-blur-3xl rounded-[28px] overflow-hidden group cursor-pointer border border-white/5 active:scale-95 transition-transform flex flex-col justify-end">
                <div
                    className="absolute bottom-0 left-0 w-full bg-white transition-all duration-100 ease-out"
                    style={{ height: `${brightness}%` }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 pointer-events-none mix-blend-difference text-white/50 z-10">
                    <Sun className="w-6 h-6 fill-current" />
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                />
            </div>

            {/* Volume Vertical Slider */}
            <div className="relative w-[60px] h-[140px] bg-black/20 backdrop-blur-3xl rounded-[28px] overflow-hidden group cursor-pointer border border-white/5 active:scale-95 transition-transform flex flex-col justify-end">
                <div
                    className="absolute bottom-0 left-0 w-full bg-white transition-all duration-100 ease-out"
                    style={{ height: `${volume}%` }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 pointer-events-none mix-blend-difference text-white/50 z-10">
                    <Volume2 className="w-6 h-6 fill-current" />
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                />
            </div>
        </div>
    );
}
