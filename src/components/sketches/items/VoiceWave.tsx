
import React from 'react';

export default function VoiceWave() {
    return (
        <div className="relative w-[180px] h-[80px] bg-black/40 backdrop-blur-2xl rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl border border-white/10">

            {/* Orb Glow */}
            <div className="absolute w-20 h-20 bg-blue-500/40 rounded-full blur-[30px] animate-pulse" />
            <div className="absolute w-16 h-16 bg-purple-500/40 rounded-full blur-[25px] flex items-center justify-center animate-pulse delay-75">
                <div className="w-10 h-10 bg-white/30 rounded-full blur-[15px]" />
            </div>

            {/* Waveform */}
            <div className="flex items-center justify-center gap-1 relative z-10 opacity-80">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="w-1 bg-white rounded-full animate-wave shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        style={{
                            height: '16px',
                            animation: `wave 1.2s ease-in-out infinite`,
                            animationDelay: `${i * 0.15}s`
                        }}
                    />
                ))}
            </div>

            <style jsx>{`
        @keyframes wave {
          0%, 100% { height: 8px; opacity: 0.5; }
          50% { height: 32px; opacity: 1; }
        }
      `}</style>
        </div>
    );
}
