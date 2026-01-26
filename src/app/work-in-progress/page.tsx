'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WorkInProgress() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1
                    className="text-2xl md:text-4xl font-semibold mb-4"
                    style={{ color: 'rgb(19, 19, 19)' }}
                >
                    Deployment Under Progress
                </h1>
                <p
                    className="text-gray-500 mb-8"
                    style={{ color: 'rgba(19, 19, 19, 0.56)' }}
                >
                    This project is currently being developed. Check back soon!
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#131313] text-white hover:bg-opacity-90 transition-all duration-200"
                >
                    Back to Home
                </Link>
            </motion.div>
        </main>
    );
}
