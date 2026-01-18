
import React from 'react';

const AppIcon = ({ color, icon }: { color: string; icon: React.ReactNode }) => (
    <div className="group cursor-grab active:cursor-grabbing relative">
        <div
            className={`w-[48px] h-[48px] rounded-[14px] ${color} shadow-lg flex items-center justify-center text-white/90 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-active:scale-95`}
            style={{
                boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255,255,255,0.4)',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/10 to-white/30 rounded-[14px] pointer-events-none" />
            {icon}
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
);

export default function AppIcons() {
    return (
        <div className="bg-white/10 backdrop-blur-2xl p-4 rounded-[24px] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] border border-white/20 flex gap-4 ring-1 ring-white/20">
            <AppIcon
                color="bg-gradient-to-b from-[#007AFF] to-[#0051A8]"
                icon={<svg className="w-6 h-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>}
            />
            <AppIcon
                color="bg-gradient-to-b from-[#FF2D55] to-[#D10028]"
                icon={<svg className="w-6 h-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>}
            />
            <AppIcon
                color="bg-gradient-to-b from-[#34C759] to-[#248A3D]"
                icon={<svg className="w-6 h-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.161 15.161 0 01-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1.01A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 15.161 15.161 0 0015.161 15.161c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" /></svg>}
            />
        </div>
    );
}
