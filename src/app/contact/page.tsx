'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/about' },
    { name: 'Sketches', href: '/sketches' },
    { name: 'Contact me', href: '/contact' },
];

export default function Contact() {
    const pathname = usePathname();

    return (
        <main className="min-h-screen bg-white">
            {/* Main Content Container */}
            <div className="max-w-[1100px] mx-auto px-8 md:px-16 pt-10 pb-32">

                {/* Header */}
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

                {/* Contact Content */}
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
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                        }}
                    >
                        Get in touch
                    </h1>

                    <div className="flex flex-col gap-8">
                        <p
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '150%',
                                letterSpacing: '0.02em',
                                color: 'rgb(19, 19, 19)',
                            }}
                        >
                            I'm always open to discussing new opportunities, collaborations, or just having a chat about design and tech. Feel free to reach out!
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-400 w-16">Email</span>
                                <a href="mailto:likithrajn22@gmail.com" className="text-sm font-medium text-black hover:opacity-70 transition-opacity">
                                    likithrajn22@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-400 w-16">Socials</span>
                                <div className="flex gap-4">
                                    <a
                                        href="https://x.com/SillySnubby"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-black hover:opacity-70 transition-opacity"
                                    >
                                        Twitter / X
                                    </a>
                                    <a
                                        href="https://github.com/gladiatorr22"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-black hover:opacity-70 transition-opacity"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/liki22"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-black hover:opacity-70 transition-opacity"
                                    >
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Floating Navbar */}
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

            <Footer />
        </main>
    );
}
