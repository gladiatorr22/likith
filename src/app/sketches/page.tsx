
import React from 'react';
import DragCanvas from '@/components/sketches/DragCanvas';

export const metadata = {
    title: 'Sketches | Interactive Playground',
    description: 'A collection of interactive, draggable UI components.',
};

export default function SketchesPage() {
    return (
        <main>
            <DragCanvas />
        </main>
    );
}
