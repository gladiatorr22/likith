
import React from 'react';
import { Battery, Wifi, Moon, MapPin } from 'lucide-react';

const Widget = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-black/20 backdrop-blur-xl rounded-[22px] flex items-center justify-center border border-white/5 active:scale-95 transition-transform ${className}`}>
        {children}
    </div>
);

export default function IOSDashboard() {
    return (
        <div className="w-[160px] h-[160px] cursor-grab active:cursor-grabbing grid grid-cols-2 gap-3 p-3 bg-white/5 backdrop-blur-2xl rounded-[32px] shadow-2xl border border-white/10 ring-1 ring-white/5">
            {/* Battery */}
            <Widget className="group">
                <div className="flex flex-col items-center gap-1">
                    <div className="relative">
                        <Battery className="w-6 h-6 text-green-400 fill-current" />
                        <div className="absolute inset-0 bg-green-400 blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                    </div>
                    <span className="text-[10px] font-medium text-white/80">92%</span>
                </div>
            </Widget>

            {/* Wi-Fi */}
            <Widget className="bg-blue-500/20 active:bg-blue-500/30">
                <Wifi className="w-6 h-6 text-blue-400" />
            </Widget>

            {/* Focus */}
            <Widget className="col-span-2 flex-row justify-between px-4 bg-indigo-500/20 active:bg-indigo-500/30">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                        <Moon className="w-3 h-3 text-white fill-current" />
                    </div>
                    <span className="text-xs font-medium text-white">Focus</span>
                </div>
                <div className="w-8 h-4 bg-white/20 rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                </div>
            </Widget>
        </div>
    );
}
