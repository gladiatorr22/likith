'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import BentoGrid from '@/components/BentoGrid';
import WorkExperience from '@/components/WorkExperience';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/about' },
    { name: 'Sketches', href: '/sketches' },
    { name: 'Contact me', href: '/contact' },
];

export default function About() {
    const pathname = usePathname();

    return (
        <main className="min-h-screen bg-white">
            {/* Main Content Container - Matches Home Page Margins */}
            <div className="max-w-[1100px] mx-auto px-8 md:px-16 pt-10 pb-32">

                {/* Header - Matches Home Page Header Structure if needed, or just spacers */}
                <motion.header
                    className="mb-16"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p
                        className="text-[14px] font-normal"
                        style={{
                            color: 'rgba(19, 19, 19, 0.32)',
                            fontFeatureSettings: 'normal',
                            fontVariationSettings: 'normal',
                        }}
                    >
                        Software Developer <span style={{ color: 'rgb(19, 19, 19)' }}>Likith Raj</span>
                    </p>
                </motion.header>

                {/* About Content */}
                <section className="max-w-2xl">
                    <h1
                        className="mb-6"
                        style={{
                            fontFamily: 'var(--font-instrument-serif), serif',
                            fontSize: '26px',
                            fontStyle: 'italic',
                            fontWeight: 400,
                            lineHeight: '150%',
                            letterSpacing: '0.02em',
                            color: 'rgb(19, 19, 19)',
                            // Framer overrides from request
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                        }}
                    >
                        Nice to meet you!
                    </h1>

                    <div
                        className="flex flex-col gap-6"
                    >
                        <p
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '150%',
                                letterSpacing: '0.02em',
                                color: 'rgb(19, 19, 19)',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                            }}
                        >
                            I build software that bridges complex technical challenges with intuitive user experiences. My projects range from telecom infrastructure tools that visualize RF signal paths to AI-powered platforms that understand the nuances of regional Indian cooking—each one driven by a real need and a desire to make things work beautifully.
                        </p>
                        <p
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '150%',
                                letterSpacing: '0.02em',
                                color: 'rgb(19, 19, 19)',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                            }}
                        >
                            With experience spanning internships, intensive training, and freelance work, I've developed a versatile skill set in Python, React, Next.js, and AI integration. I thrive on 0-to-1 product development, transforming ideas into functional, polished applications.
                        </p>
                        <p
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '150%',
                                letterSpacing: '0.02em',
                                color: 'rgb(19, 19, 19)',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                            }}
                        >
                            Beyond code, I'm deeply interested in design and the business side of building products. I believe great software isn't just technically sound—it needs to look good, feel intuitive, and actually solve the user's problem. That's why I focus on understanding user requirements first, then aligning technical and design decisions with real business goals.
                        </p>
                    </div>
                </section>

                {/* Liquid Glass Bento Grid */}
                <div className="mt-12 mb-12">
                    <BentoGrid />
                </div>

                {/* Work Experience */}
                <WorkExperience />

            </div>

            {/* Floating Navbar - Duplicated from Home Page */}
            <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <div
                    className="flex items-center gap-[25px] pl-6 pr-6 py-2 rounded-[8px] whitespace-nowrap"
                    style={{
                        backgroundColor: 'rgba(19, 19, 19, 0.8)',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        boxShadow: 'rgba(92, 92, 92, 0.1) 0px 4px 9px 0px, rgba(92, 92, 92, 0.09) 0px 16px 16px 0px, rgba(92, 92, 92, 0.05) 0px 37px 22px 0px, rgba(92, 92, 92, 0.01) 0px 66px 26px 0px, rgba(92, 92, 92, 0) 0px 103px 29px 0px',
                        width: 'max-content',
                        height: 'min-content',
                    }}
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[12px] font-medium transition-colors duration-300 ease-out ${isActive
                                    ? 'text-white'
                                    : 'text-white/50 hover:text-white'
                                    }`}
                                style={{
                                    fontFamily: 'sans-serif',
                                }}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Footer */}
            <Footer />
        </main>
    );
}
