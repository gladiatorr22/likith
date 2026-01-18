
import React from 'react';

export default function WeatherGlass() {
    return (
        <div className="w-[160px] h-[160px] bg-gradient-to-b from-blue-400/30 to-blue-600/30 backdrop-blur-2xl rounded-[32px] p-5 flex flex-col justify-between shadow-2xl border border-white/20 relative overflow-hidden group">

            {/* Sun/Cloud Composition */}
            <div className="relative w-12 h-12">
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-tr from-yellow-300 to-orange-400 rounded-full shadow-[0_0_20px_rgba(253,186,116,0.6)] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-12 h-8 bg-white/90 rounded-full blur-[2px] shadow-sm z-10" />
            </div>

            <div className="z-10 text-white">
                <h3 className="text-4xl font-light tracking-tighter">72°</h3>
                <p className="text-xs font-medium opacity-80 mt-1">San Francisco</p>
                <div className="text-[10px] opacity-60 mt-0.5">Partly Cloudy</div>
            </div>

            {/* Rays */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
}
