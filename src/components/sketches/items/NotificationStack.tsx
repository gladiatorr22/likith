
import React from 'react';

export default function NotificationStack() {
    return (
        <div className="w-[260px] relative group cursor-grab active:cursor-grabbing">
            {/* Stacked Cards for Depth */}
            <div className="absolute top-4 left-2 right-2 h-[60px] bg-white/40 backdrop-blur-md rounded-[18px] scale-95 shadow-sm transition-transform duration-300 group-hover:translate-y-2 group-hover:scale-90 opacity-60" />

            <div className="absolute top-2 left-1 right-1 h-[60px] bg-white/60 backdrop-blur-md rounded-[18px] scale-[0.98] shadow-md transition-transform duration-300 group-hover:translate-y-1 group-hover:scale-95 opacity-80" />

            {/* Main Notification Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-[20px] p-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-white/40 flex gap-3 items-center hover:bg-white/90 transition-colors">
                <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                        <h4 className="text-xs font-bold text-gray-900">Messages</h4>
                        <span className="text-[10px] text-gray-500">now</span>
                    </div>
                    <p className="text-xs text-gray-700 font-medium truncate">Likith: Check out this new design!</p>
                </div>
            </div>
        </div>
    );
}
