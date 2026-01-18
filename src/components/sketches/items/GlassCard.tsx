
import React from 'react';
import { Heart, Share2 } from 'lucide-react';

export default function GlassCard() {
    return (
        <div className="relative w-[240px] h-[320px] rounded-[24px] overflow-hidden group cursor-grab active:cursor-grabbing shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop)' }}
            />



            {/* Glass UI */}
            <div className="absolute top-3 right-3 flex gap-2">
                <button className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/40 hover:text-white transition-all active:scale-90">
                    <Heart className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/40 hover:text-white transition-all active:scale-90">
                    <Share2 className="w-4 h-4" />
                </button>
            </div>

            <div className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-xl border-t border-white/20 p-4 rounded-[18px] text-white">
                <h3 className="text-sm font-semibold mb-0.5 text-white/90">Cosmic Void</h3>
                <p className="text-[10px] text-white/50 mb-3 font-medium uppercase tracking-wider">Digital Art</p>

                <div className="flex items-center justify-between">
                    <div className="flex -space-x-1.5">
                        {[1, 2].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full border border-white/20 bg-gray-300"
                                style={{ backgroundImage: `url(https://i.pravatar.cc/100?u=${i + 10})`, backgroundSize: 'cover' }} />
                        ))}
                    </div>
                    <div className="h-6 px-3 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold backdrop-blur-sm">
                        2.4 ETH
                    </div>
                </div>
            </div>
        </div>
    );
}
