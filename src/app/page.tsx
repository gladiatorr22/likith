'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const socialLinks = [
  { name: 'Twitter / X', href: 'https://x.com/SillySnubby' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/liki22' },
  { name: 'GitHub', href: 'https://github.com/gladiatorr22' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About me', href: '/about' },
  { name: 'Sketches', href: '/sketches' },
  { name: 'Contact me', href: '/contact' },
];

export default function Home() {
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

        {/* Hero Section */}
        <section className="mb-10">
          {/* Profile Image - Square with rounded corners */}
          <div className="w-[68px] h-[68px] rounded-2xl overflow-hidden mb-6">
            <img
              src="/images/Snapchat-1861133427.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              style={{ transform: 'scale(1.1)' }}
            />
          </div>

          {/* Hero Text */}
          <p className="text-[20px] leading-[150%] max-w-2xl mb-6" style={{ color: 'rgb(19, 19, 19)' }}>
            Hey, I'm <span className="font-semibold">Likith!</span> A Software Developer crafting digital experiences with code & creativity.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-10 mb-[70px]">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(19,19,19,0.44)] hover:text-[#131313] transition-colors duration-200 ease-in-out cursor-pointer"
                style={{
                  fontFamily: '"SF Pro", "SF Pro Placeholder", sans-serif',
                  fontSize: '14px',
                  letterSpacing: '-0.5px',
                  textDecoration: 'none',
                }}
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 - Vera AI Macro Tracker */}
            <a href="/project/vera" className="group block">
              <div className="mb-2">
                <p
                  className="text-[11px] font-normal"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    letterSpacing: '0.01em',
                    lineHeight: '132%',
                    color: 'rgba(19, 19, 19, 0.56)',
                  }}
                >
                  <span style={{ color: 'rgb(19, 19, 19)' }}>Vera </span>AI Macro Tracker
                </p>
              </div>
              <div className="p-8 bg-gray-100 rounded-xl overflow-hidden">
                <video
                  src="/videos/Vera _ Your Desi AI Macro Tracker - Google Chrome 2026-01-16 15-35-16.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                />
              </div>
            </a>

            {/* Project Card 2 - Onyx Code Editor */}
            <a href="/project/onyx-code-editor" className="group block">
              <div className="mb-2">
                <p
                  className="text-[11px] font-normal"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    letterSpacing: '0.01em',
                    lineHeight: '132%',
                    color: 'rgba(19, 19, 19, 0.56)',
                  }}
                >
                  <span style={{ color: 'rgb(19, 19, 19)' }}>Onyx </span>AI IDE
                </p>
              </div>
              <div className="p-8 bg-gray-100 rounded-xl overflow-hidden">
                <video
                  src="/videos/onyx-ide-demo.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                />
              </div>
            </a>

            {/* Project Card 3 - Lumina */}
            <a href="/project/lumina" className="group block">
              <div className="mb-2">
                <p
                  className="text-[11px] font-normal"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    letterSpacing: '0.01em',
                    lineHeight: '132%',
                    color: 'rgba(19, 19, 19, 0.56)',
                  }}
                >
                  <span style={{ color: 'rgb(19, 19, 19)' }}>Lumina </span>AI Video Platform
                </p>
              </div>
              <div className="p-8 bg-gray-100 rounded-xl overflow-hidden">
                <video
                  src="/videos/Lumina _ AI-Powered Video Platform - Google Chrome 2026-01-16 15-32-27.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                />
              </div>
            </a>

            {/* Project Card 4 - FRSNL Link Planner */}
            <a href="/project/frsnl" className="group block">
              <div className="mb-2">
                <p
                  className="text-[11px] font-normal"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    letterSpacing: '0.01em',
                    lineHeight: '132%',
                    color: 'rgba(19, 19, 19, 0.56)',
                  }}
                >
                  <span style={{ color: 'rgb(19, 19, 19)' }}>FRSNL </span>Link Planner
                </p>
              </div>
              <div className="p-8 bg-gray-100 rounded-xl overflow-hidden">
                <video
                  src="/videos/FRSNL-Link-Planner - Google Chrome 2026-01-16 15-28-02.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                />
              </div>
            </a>

            {/* Project Card 5 - Radiance */}
            <a href="/project/radiance" className="group block">
              <div className="mb-2">
                <p
                  className="text-[11px] font-normal"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    letterSpacing: '0.01em',
                    lineHeight: '132%',
                    color: 'rgba(19, 19, 19, 0.56)',
                  }}
                >
                  <span style={{ color: 'rgb(19, 19, 19)' }}>Radiance </span>Skincare
                </p>
              </div>
              <div className="p-8 bg-gray-100 rounded-xl overflow-hidden">
                <video
                  src="/videos/Radiance - Google Chrome 2026-01-16 15-33-30.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                />
              </div>
            </a>

            {/* Project Card 6 - Weather App */}
            <a href="/otherwork/retro-weather-app" className="group block">
              <div className="mb-2">
                <p
                  className="text-[11px] font-normal"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    letterSpacing: '0.01em',
                    lineHeight: '132%',
                    color: 'rgba(19, 19, 19, 0.56)',
                  }}
                >
                  <span style={{ color: 'rgb(19, 19, 19)' }}>Retro </span>Weather App
                </p>
              </div>
              <div className="p-8 bg-gray-100 rounded-xl overflow-hidden">
                <video
                  src="/videos/Weather App - Google Chrome 2026-01-18 19-00-14.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                />
              </div>
            </a>
          </div>

          {/* Other Work Button */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/otherwork"
              className="inline-flex items-center gap-2 px-3 py-2 hover:opacity-70 transition-opacity"
              style={{
                fontFamily: '"SF Pro Display", "SF Pro Display Placeholder", -apple-system, BlinkMacSystemFont, sans-serif',
                border: '1px solid rgba(19, 19, 19, 0.12)',
                borderRadius: '8px',
              }}
            >
              <span
                className="text-[14px]"
                style={{
                  color: 'rgba(19, 19, 19, 0.44)',
                  lineHeight: '125%',
                  letterSpacing: '0px',
                }}
              >
                Other work
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{
                  color: 'rgb(0, 0, 0)',
                  flexShrink: 0,
                }}
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>
      </div>

      {/* Floating Navbar - Dark Liquid Glass */}
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
