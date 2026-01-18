
import React from 'react';

export default function FileStack() {
    return (
        <div className="w-[120px] h-[120px] relative group cursor-grab active:cursor-grabbing perspective-600">

            {/* Back Paper */}
            <div className="absolute top-0 left-4 right-0 h-[100px] bg-white rounded-lg shadow-sm border border-gray-200 transform rotate-6 origin-bottom-left transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-2" />

            {/* Middle Paper */}
            <div className="absolute top-2 left-2 right-2 h-[100px] bg-white rounded-lg shadow-md border border-gray-200 transform rotate-3 origin-bottom-left transition-transform duration-300 group-hover:rotate-6 group-hover:translate-x-1" />

            {/* Folder Front */}
            <div className="absolute bottom-0 inset-x-0 h-[80px] bg-blue-500 rounded-xl shadow-lg shadow-blue-500/30 flex items-end p-3 z-10 border-t border-white/20">
                <div className="w-8 h-1 bg-white/30 rounded-full mb-1" />
            </div>

            {/* Folder Tab (Visual Hack) */}
            <div className="absolute bottom-[79px] left-0 w-[50px] h-[10px] bg-blue-500 rounded-t-lg z-10" />

            <div className="absolute bottom-3 right-3 z-20">
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>
        </div>
    );
}
