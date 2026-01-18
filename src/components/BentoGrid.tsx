
'use client';

import { motion } from 'framer-motion';

const items = [
    { id: 1, className: "col-span-2 md:col-span-1 md:row-span-2 h-[160px] md:h-auto" }, // Tall (Books) - mobile height reduced 20%
    { id: 2, className: "col-span-2 md:col-span-2 md:row-span-1 h-[128px] md:h-auto" }, // Wide (Tech Stack) - mobile height reduced 20%
    { id: 3, className: "col-span-1 md:col-span-1 md:row-span-1 h-[112px] md:h-auto" }, // Square (Music) - Box 1 of Row 3
    { id: 4, className: "col-span-1 md:col-span-1 md:row-span-1 h-[112px] md:h-auto" }, // Square (Gym) - Box 2 of Row 3 - Matched height to Music
];

export default function BentoGrid() {
    return (
        <section className="w-full">
            <div
                className="grid grid-cols-2 md:grid-cols-3 auto-rows-auto md:auto-rows-[100px] gap-4 w-[75%] mx-auto md:mx-0 md:w-full md:max-w-[500px]"
            >
                {items.map((item, index) => {
                    if (item.id === 1) {
                        return (
                            <motion.div
                                key={item.id}
                                initial="initial"
                                whileHover="hover"
                                animate="initial"
                                className={`relative overflow-hidden ${item.className} block group`}
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                                }}
                            >
                                {/* DESKTOP: Vertical Fan */}
                                <div className="hidden md:block absolute inset-0 pointer-events-none">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.a
                                            href="https://www.amazon.in/Mountain-You-Transforming-Self-Sabotage-Self-Mastery/dp/9355434146?s=bazaar"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute h-[45%] w-auto origin-bottom pointer-events-auto cursor-pointer"
                                            variants={{
                                                initial: { x: -20, y: 0, scale: 1, rotate: -8, zIndex: 1 },
                                                hover: { x: -40, y: 80, rotate: -15, zIndex: 4 }
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <img src="/images/bento-grid-images/book1.jpg" alt="Book 1" className="w-full h-full object-contain rounded shadow-lg" />
                                        </motion.a>
                                        <motion.a
                                            href="https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute h-[45%] w-auto origin-bottom pointer-events-auto cursor-pointer"
                                            variants={{
                                                initial: { x: -6, y: 0, scale: 1, rotate: -3, zIndex: 2 },
                                                hover: { x: -15, y: 30, rotate: -5, zIndex: 3 }
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <img src="/images/bento-grid-images/book2.jpg" alt="Book 2" className="w-full h-full object-contain rounded shadow-lg" />
                                        </motion.a>
                                        <motion.a
                                            href="https://www.amazon.in/Almanack-Naval-Ravikant-Wealth-Happiness/dp/9354893899"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute h-[45%] w-auto origin-bottom pointer-events-auto cursor-pointer"
                                            variants={{
                                                initial: { x: 6, y: 0, scale: 1, rotate: 3, zIndex: 3 },
                                                hover: { x: 15, y: -30, rotate: 5, zIndex: 2 }
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <img src="/images/bento-grid-images/book3.jpg" alt="Book 3" className="w-full h-full object-contain rounded shadow-lg" />
                                        </motion.a>
                                        <motion.a
                                            href="https://www.amazon.in/Shoe-Dog-Phil-Knight/dp/1471146715"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute h-[45%] w-auto origin-bottom pointer-events-auto cursor-pointer"
                                            variants={{
                                                initial: { x: 20, y: 0, scale: 1, rotate: 8, zIndex: 4 },
                                                hover: { x: 40, y: -70, rotate: 15, zIndex: 1 } // Matched user edit of -70
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <img src="/images/bento-grid-images/book4.jpg" alt="Book 4" className="w-full h-full object-contain rounded shadow-lg" />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* MOBILE: Horizontal Overlap */}
                                <div className="absolute inset-0 md:hidden flex items-center justify-center overflow-visible">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        {[
                                            { src: "book1.jpg", rotate: -5, x: -66, href: "https://www.amazon.in/Mountain-You-Transforming-Self-Sabotage-Self-Mastery/dp/9355434146" },
                                            { src: "book2.jpg", rotate: -2, x: -22, href: "https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268" },
                                            { src: "book3.jpg", rotate: 2, x: 22, href: "https://www.amazon.in/Almanack-Naval-Ravikant-Wealth-Happiness/dp/9354893899" },
                                            { src: "book4.jpg", rotate: 5, x: 66, href: "https://www.amazon.in/Shoe-Dog-Phil-Knight/dp/1471146715" },
                                        ].map((book, i) => (
                                            <motion.a
                                                key={i}
                                                href={book.href}
                                                className="absolute h-[64%] w-auto origin-bottom shadow-lg rounded"
                                                style={{ zIndex: i + 1 }}
                                                initial={{ x: book.x, rotate: book.rotate, scale: 0.9 }}
                                                whileHover={{ scale: 1.05, zIndex: 10, y: -10 }}
                                            >
                                                <img
                                                    src={`/images/bento-grid-images/${book.src}`}
                                                    alt={`Book ${i + 1}`}
                                                    className="h-full w-auto object-contain rounded shadow-md"
                                                />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                            </motion.div>
                        );
                    }

                    if (item.id === 2) {
                        const techStackImages = [
                            'Download ChatGPT Logo - Chat gpt Icon on White Background.jpg',
                            'figma.jpg',
                            'framer.jpg',
                            'git.jpg',
                            'n8n.jpg',
                            'next.jpg',
                            'node.jpg',
                            'python.jpg',
                            'react.jpg'
                        ];

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className={`relative overflow-hidden ${item.className} block group`}
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                                }}
                            >
                                {/* MOBILE LAYOUT: Spread to fill width with 4px gap from edges */}
                                <div className="absolute inset-0 flex md:hidden items-center justify-center px-1 overflow-hidden">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        {techStackImages.map((img, i) => {
                                            // 9 icons, spread evenly across container width minus 8px (4px each side)
                                            const xOffset = (i - 4) * 28; // Spread to reach edges

                                            return (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-[30px] h-[30px] rounded-full shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 cursor-pointer"
                                                    style={{
                                                        x: xOffset,
                                                        zIndex: i + 1,
                                                    }}
                                                    whileHover={{ scale: 1.2, zIndex: 100, y: -10 }}
                                                    whileTap={{ scale: 1.3, zIndex: 100, y: -15 }}
                                                >
                                                    <img
                                                        src={`/images/bento-grid-images/techstack/${img}`}
                                                        alt={img}
                                                        className="w-full h-full object-contain p-0.5"
                                                    />
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* DESKTOP LAYOUT: Spread like a deck of cards on a table */}
                                <div className="absolute inset-0 hidden md:flex items-center justify-center">
                                    {techStackImages.map((img, i) => {
                                        // Spread logic: Centered, spread out horizontally
                                        const xOffset = (i - 4) * 26; // 26px spread

                                        return (
                                            <motion.div
                                                key={i}
                                                className="absolute w-[48px] h-[48px] rounded-full shadow-lg overflow-hidden bg-white/90 backdrop-blur-md border border-white/30 cursor-pointer"
                                                style={{
                                                    x: xOffset,
                                                    zIndex: i + 1, // Base stacking order
                                                }}
                                                whileHover={{
                                                    scale: 1.15, // Reduced scale
                                                    zIndex: 100, // Pop to top on hover
                                                    y: -10,      // Reduced lift
                                                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 25
                                                }}
                                            >
                                                <img
                                                    src={`/images/bento-grid-images/techstack/${img}`}
                                                    alt={img}
                                                    className="w-full h-full object-contain p-1.5"
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    }

                    if (item.id === 3) {
                        return (
                            <motion.a
                                key={item.id}
                                href="https://open.spotify.com/playlist/74sfUoKnoMMZ7iI3Inqgzu?si=9zKB9VegSSalpaY6tiOA7A&nd=1&dlsi=df20b76d2a764887"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative overflow-hidden ${item.className} block group`}
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                                }}
                            >
                                <motion.img
                                    src="/images/bento-grid-images/music.jpg"
                                    alt="Spotify Playlist"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.a>
                        );
                    }

                    if (item.id === 4) {
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative overflow-hidden ${item.className} block group`}
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                                }}
                            >
                                <motion.img
                                    src="/images/bento-grid-images/gym.jpg"
                                    alt="Gym"
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 0.6 }}
                                    animate={{ scale: 0.6 }}
                                    whileHover={{ scale: 0.75 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        );
                    }

                    return null;
                })}
            </div>
        </section>
    );
}
