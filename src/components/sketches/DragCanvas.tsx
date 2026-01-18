
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import Link from 'next/link';

// Components (Batch 1, 2, 3)
import AppIcons from './items/AppIcons';
import ModernButtons from './items/ModernButtons';
import GlassCard from './items/GlassCard';
import InteractiveSlider from './items/InteractiveSlider';
import MiniCalendar from './items/MiniCalendar';
import MusicWidget from './items/MusicWidget';
import WeatherGlass from './items/WeatherGlass';
import ControlGroup from './items/ControlGroup';
import IOSDashboard from './items/IOSDashboard';
import WatchFace from './items/WatchFace';
import AIAgent from './items/AIAgent';

// Components (Batch 4 - New)
import PaymentCard from './items/PaymentCard';
import HealthStats from './items/HealthStats';
import SmartDial from './items/SmartDial';
import StockTicker from './items/StockTicker';
import NotificationStack from './items/NotificationStack';
import FileStack from './items/FileStack';

type DraggableItem = {
    id: string;
    x: number;
    y: number;
    zIndex: number;
    component: React.ReactNode;
};

export default function DragCanvas() {
    const [items, setItems] = useState<DraggableItem[]>([]);
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [canvasHeight, setCanvasHeight] = useState('160vh');
    const maxZIndex = useRef(20);

    const generateLayout = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const isMobile = w < 768;

        if (isMobile) {
            setCanvasHeight('350vh'); // Taller for mobile stack
            const cx = w / 2; // Center X

            // Vertical Stack with some zig-zag offsets
            return [
                // Header Group
                { id: 'dashboard', x: cx - 80, y: h * 0.25, zIndex: 1, component: <IOSDashboard /> },
                { id: 'ai', x: cx - 150, y: h * 0.45, zIndex: 15, component: <AIAgent /> },

                // Essential Info
                { id: 'weather', x: cx - 120, y: h * 0.58, zIndex: 2, component: <WeatherGlass /> },
                { id: 'calendar', x: cx + 10, y: h * 0.60, zIndex: 3, component: <MiniCalendar /> },

                // Cards & Buttons
                { id: 'payment', x: cx - 120, y: h * 0.85, zIndex: 5, component: <PaymentCard /> },
                { id: 'buttons', x: cx - 110, y: h * 1.05, zIndex: 6, component: <ModernButtons /> },

                // Wearables & Health
                { id: 'watch', x: cx - 100, y: h * 1.35, zIndex: 7, component: <WatchFace /> },
                { id: 'health', x: cx - 80, y: h * 1.6, zIndex: 8, component: <HealthStats /> },

                // Utility & Finance
                { id: 'notify', x: cx - 130, y: h * 1.8, zIndex: 4, component: <NotificationStack /> },
                { id: 'stocks', x: cx - 100, y: h * 1.95, zIndex: 10, component: <StockTicker /> },

                // Smart Home
                { id: 'dial', x: cx - 70, y: h * 2.15, zIndex: 9, component: <SmartDial /> },
                { id: 'music', x: cx - 140, y: h * 2.35, zIndex: 11, component: <MusicWidget /> },

                // Files & Control
                { id: 'files', x: cx - 60, y: h * 2.50, zIndex: 12, component: <FileStack /> },
                { id: 'slider', x: cx + 30, y: h * 2.65, zIndex: 13, component: <InteractiveSlider /> },
                { id: 'controls', x: cx - 110, y: h * 2.75, zIndex: 14, component: <ControlGroup /> },

                // Bottom
                { id: 'card', x: cx - 120, y: h * 2.95, zIndex: 16, component: <GlassCard /> },
                { id: 'icons', x: cx - 110, y: h * 3.3, zIndex: 17, component: <AppIcons /> },
            ];
        }

        // Desktop Layout (160vh)
        setCanvasHeight('160vh');
        return [
            { id: 'dashboard', x: w * 0.05, y: h * 0.25, zIndex: 1, component: <IOSDashboard /> },
            { id: 'weather', x: w * 0.08, y: h * 0.45, zIndex: 2, component: <WeatherGlass /> },
            { id: 'notify', x: w * 0.72, y: h * 0.28, zIndex: 3, component: <NotificationStack /> },
            { id: 'calendar', x: w * 0.8, y: h * 0.45, zIndex: 4, component: <MiniCalendar /> },
            { id: 'ai', x: w * 0.5 - 150, y: h * 0.55, zIndex: 15, component: <AIAgent /> },
            { id: 'payment', x: w * 0.2, y: h * 0.65, zIndex: 5, component: <PaymentCard /> },
            { id: 'buttons', x: w * 0.65, y: h * 0.7, zIndex: 6, component: <ModernButtons /> },
            { id: 'watch', x: w * 0.35, y: h * 0.85, zIndex: 7, component: <WatchFace /> },
            { id: 'health', x: w * 0.1, y: h * 0.85, zIndex: 8, component: <HealthStats /> },
            { id: 'dial', x: w * 0.8, y: h * 0.9, zIndex: 9, component: <SmartDial /> },
            { id: 'stocks', x: w * 0.55, y: h * 0.95, zIndex: 10, component: <StockTicker /> },
            { id: 'music', x: w * 0.25, y: h * 1.1, zIndex: 11, component: <MusicWidget /> },
            { id: 'files', x: w * 0.65, y: h * 1.15, zIndex: 12, component: <FileStack /> },
            { id: 'slider', x: w * 0.08, y: h * 1.25, zIndex: 13, component: <InteractiveSlider /> },
            { id: 'controls', x: w * 0.4, y: h * 1.35, zIndex: 14, component: <ControlGroup /> },
            { id: 'card', x: w * 0.6, y: h * 1.3, zIndex: 16, component: <GlassCard /> },
            { id: 'icons', x: w * 0.82, y: h * 1.4, zIndex: 17, component: <AppIcons /> },
        ];
    };

    useEffect(() => {
        // Initial layout
        setItems(generateLayout());

        // Optional: Handle resize if needed
        // const handleResize = () => setItems(generateLayout());
        // window.addEventListener('resize', handleResize);
        // return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleReset = () => {
        setItems(generateLayout());
        maxZIndex.current = 20;
    };

    const handlePointerDown = (e: React.PointerEvent, id: string) => {
        if ((e.target as HTMLElement).tagName === 'INPUT') return;

        const newZ = maxZIndex.current + 1;
        maxZIndex.current = newZ;
        const item = items.find(i => i.id === id);
        if (!item) return;

        (e.target as Element).setPointerCapture(e.pointerId);
        setDraggingId(id);

        setDragOffset({
            x: e.clientX - item.x,
            y: e.clientY - item.y
        });

        setItems(prev => prev.map(i => i.id === id ? { ...i, zIndex: newZ } : i));
        e.stopPropagation();
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!draggingId) return;
        e.preventDefault();
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        setItems(prev => prev.map(i => i.id === draggingId ? { ...i, x: newX, y: newY } : i));
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (draggingId) {
            setDraggingId(null);
            (e.target as Element).releasePointerCapture(e.pointerId);
        }
    };

    return (
        <div
            className="w-full relative bg-[#FAFAFA] overflow-x-hidden overflow-y-auto"
            style={{
                height: '100dvh', // Wrapper is viewport height
                backgroundImage: `
                linear-gradient(#E5E5E5 0.5px, transparent 0.5px), 
                linear-gradient(90deg, #E5E5E5 0.5px, transparent 0.5px)
            `,
                backgroundSize: '32px 32px',
            }}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
        >
            {/* Floating Header */}
            <div className="fixed top-8 left-0 right-0 z-0 flex justify-center pointer-events-none mix-blend-darken opacity-60">
                <p className="text-[13px] text-[#131313] font-normal tracking-wide">
                    Creative Designer <span className="font-medium text-black">Likith Raj</span>
                </p>
            </div>

            {/* Main Title */}
            <div className="absolute inset-x-0 top-[120px] text-center pointer-events-none z-0">
                <h1
                    className="text-[42px] md:text-[56px] text-[#131313] italic font-normal leading-[1.1]"
                    style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
                >
                    Interactive<br />Playground
                </h1>
                <p className="mt-4 text-[13px] text-[#131313]/40 uppercase tracking-[0.15em] font-medium">
                    Drag to explore some of my designs!
                </p>
            </div>

            <button
                onClick={handleReset}
                className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-xl p-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all ring-1 ring-black/5"
                title="Reset Layout"
            >
                <RotateCcw className="w-4 h-4 text-black/70" />
            </button>

            {/* Floating Nav */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <div className="flex items-center gap-6 px-6 py-2 rounded-full whitespace-nowrap bg-[#131313]/90 backdrop-blur-xl text-white shadow-2xl">
                    <Link href="/" className="text-[12px] text-white/50 hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="text-[12px] text-white/50 hover:text-white transition-colors">About me</Link>
                    <span className="text-[12px] font-medium text-white">Sketches</span>
                    <Link href="/contact" className="text-[12px] text-white/50 hover:text-white transition-colors">Contact me</Link>
                </div>
            </div>

            <div
                className="w-full relative mb-32 transition-[height] duration-500"
                style={{ height: canvasHeight }}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="absolute touch-none select-none"
                        style={{
                            transform: `translate3d(${item.x}px, ${item.y}px, 0)`,
                            zIndex: item.zIndex,
                            transition: draggingId === item.id ? 'none' : 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                            willChange: 'transform'
                        }}
                        onPointerDown={(e) => handlePointerDown(e, item.id)}
                    >
                        <div
                            className={`transition-all duration-300 ${draggingId === item.id ? 'scale-105 cursor-grabbing shadow-2xl' : 'scale-100 cursor-grab hover:scale-[1.02]'} md:scale-100 scale-[0.6] origin-top-left`}
                        >
                            {item.component}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Area */}
            <footer className="w-full py-12 text-center text-black/30 text-[11px] uppercase tracking-widest relative z-0">
                Likith Raj © {new Date().getFullYear()} — Sketches
            </footer>

        </div>
    );
}
