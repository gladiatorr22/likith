
import React, { useState } from 'react';
import { Wifi, Bluetooth, Plane, Moon } from 'lucide-react';

const ControlToggle = ({
    icon: Icon,
    active = false,
    onClick
}: {
    icon: any,
    active?: boolean,
    onClick?: () => void
}) => (
    <button
        onClick={onClick}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 border ${active
                ? 'bg-blue-500 text-white border-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                : 'bg-white/10 text-white/70 border-white/5 hover:bg-white/20'
            }`}
    >
        <Icon className="w-5 h-5" />
    </button>
);

export default function ControlGroup() {
    const [state, setState] = useState({
        wifi: true,
        bluetooth: true,
        plane: false,
        dark: true
    });

    const toggle = (key: keyof typeof state) => setState(p => ({ ...p, [key]: !p[key] }));

    return (
        <div className="bg-black/20 backdrop-blur-3xl p-4 rounded-[32px] grid grid-cols-2 gap-3 shadow-2xl border border-white/10 ring-1 ring-white/5 w-[140px]">
            <ControlToggle icon={Wifi} active={state.wifi} onClick={() => toggle('wifi')} />
            <ControlToggle icon={Bluetooth} active={state.bluetooth} onClick={() => toggle('bluetooth')} />
            <ControlToggle icon={Plane} active={state.plane} onClick={() => toggle('plane')} />
            <ControlToggle icon={Moon} active={state.dark} onClick={() => toggle('dark')} />
        </div>
    );
}
