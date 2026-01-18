import Link from 'next/link';
import { notFound } from 'next/navigation';

// Other work data
const otherWorks: Record<string, {
    title: string;
    client: string;
    year: string;
    websiteUrl?: string;
    websiteLabel?: string;
    overview: string[];
    screenshots: string[];
}> = {
    'vision-pro-card': {
        title: 'Vision Pro Responsive Card',
        client: 'Personal',
        year: '2025',
        websiteUrl: 'https://vision-pro-custom-card-template.netlify.app/',
        websiteLabel: 'View Live',
        overview: [
            'This project showcases a modern, responsive card template inspired by Apple Vision Pro design aesthetics. It demonstrates advanced CSS techniques and smooth animations to create an immersive, premium user interface component.',
            'The card features glassmorphism effects, smooth transitions, and responsive layouts that adapt seamlessly across different screen sizes. It combines modern web technologies to deliver a polished, production-ready UI component.',
            'Built with vanilla HTML, CSS, and JavaScript, the template emphasizes clean code architecture and performance optimization. The design follows Apple\'s Human Interface Guidelines for spatial computing, bringing depth and dimension to web interfaces.',
        ],
        screenshots: [],
    },
    'retro-weather-app': {
        title: 'Retro Weather App',
        client: 'Personal',
        year: '2025',
        websiteUrl: 'https://retro-weather-app.vercel.app/',
        websiteLabel: 'View Live',
        overview: [
            'The Retro Weather App is a functional tool that provides real-time weather updates for any city while adhering to a unique sci-fi and retro terminal aesthetic. It moves beyond standard UI designs to create an immersive experience inspired by old-school computer terminals.',
            'The interface features a custom pixel font, a subtle CRT scanline overlay, and a pure CSS animated starfield background. Despite its vintage appearance, it delivers precise weather data, including current temperature, conditions, and wind speed.',
            'On the technical side, the app is built with vanilla HTML, CSS, and JavaScript, ensuring a lightweight and responsive performance. It is deployed on Vercel, making use of serverless functions to securely handle API requests to OpenWeatherMap.',
            'The backend integration is a key security feature, as it keeps the API keys completely hidden from the frontend code. The responsive design ensures that the terminal-style UI remains functional and visually appealing across both desktop and mobile devices.',
        ],
        screenshots: ['/images/other projects/Screenshot 2026-01-18 130046.png'],
    },
    'epileptic-seizure-detection': {
        title: 'Epileptic Seizure Detection System',
        client: 'Research',
        year: '2025',
        websiteUrl: 'https://github.com/gladiatorr22/EPILEPTIC-SEIZURE-DETECTION-AND-PREDICTION',
        websiteLabel: 'GitHub',
        overview: [
            'This comprehensive machine learning system is dedicated to the detection and prediction of epileptic seizures using EEG data. The primary goal is to support early medical intervention and improve safety for patients through accurate classification of seizure activity.',
            'The project features an advanced pipeline that includes robust data preprocessing and feature extraction from EEG signals. It utilizes sophisticated deep learning architectures, specifically CNN and LSTM models, to enhance the accuracy and sensitivity of the seizure detection process.',
            'Detailed evaluation metrics are integrated into the training phase to ensure the models generalize well across different datasets. This includes the generation of confusion matrices, ROC curves, and cross-validation results.',
            'For practical application, the system is deployed as a Streamlit-based web app, allowing users to interact with the models and visualize EEG data in real-time.',
        ],
        screenshots: [
            '/images/other projects/epelipsy/Screenshot 2026-01-18 133903.png',
            '/images/other projects/epelipsy/Screenshot 2026-01-18 134023.png',
            '/images/other projects/epelipsy/Screenshot 2026-01-18 134105.png',
        ],
    },
    'abha-mobile-app': {
        title: 'ABHA Mobile Authentication App',
        client: 'Healthcare',
        year: '2025',
        websiteUrl: 'https://github.com/gladiatorr22/abha-mobile-auth-app',
        websiteLabel: 'GitHub',
        overview: [
            'This mobile application serves as a frontend for the Ayushman Bharat Health Account (ABHA) system, designed for seamless user authentication. It provides a critical interface for users to manage their digital health profiles within the Indian healthcare ecosystem.',
            'Key functionalities include secure profile management, allowing users to authenticate their identity and access health-related services. The app is built with a focus on simplicity and speed to ensure it is accessible to a wide range of users across India.',
            'Development was carried out using Expo Go and React Native, which enabled rapid testing and deployment on mobile devices. The project structure includes specialized services for ABHA account creation and authentication logic.',
            'The application is designed to be fully compliant with the National Digital Health Mission (NDHM) standards, ensuring data security and interoperability.',
        ],
        screenshots: [],
    },
    'django-twitter-clone': {
        title: 'Django Twitter Clone',
        client: 'Personal',
        year: '2025',
        websiteUrl: 'https://github.com/gladiatorr22/twitter-django',
        websiteLabel: 'GitHub',
        overview: [
            'This project is a full-stack social media application modeled after Twitter, built to demonstrate core web development concepts using Python. It provides a platform where users can share short text updates and interact with content.',
            'Core social features include user registration, login, and a centralized feed where tweets are displayed in chronological order. Users have the ability to create, edit, and delete their own tweets, as well as upload images to accompany their posts.',
            'The backend is powered by the Django framework, utilizing a relational database to store user information and tweet data. The database schema includes a Tweet model that tracks the author, text content, associated photos, and timestamps.',
            'The frontend is rendered using Django template engine, with dedicated layouts for user authentication and tweet management. Media files, such as uploaded photos, are managed through a dedicated media directory.',
        ],
        screenshots: [],
    },

};

export default async function OtherWorkDetailPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const work = otherWorks[slug];

    if (!work) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <div
                className="max-w-[800px] mx-auto px-4 md:px-8 py-8"
                style={{
                    borderLeft: '1px solid rgba(19, 19, 19, 0.06)',
                    borderRight: '1px solid rgba(19, 19, 19, 0.06)',
                }}
            >

                {/* Back Button */}
                <div className="mb-10">
                    <Link
                        href="/otherwork"
                        className="inline-flex items-center gap-2 px-3 py-2 hover:opacity-70 transition-opacity"
                        style={{
                            fontFamily: '"SF Pro Display", "SF Pro Display Placeholder", -apple-system, BlinkMacSystemFont, sans-serif',
                            border: '1px solid rgba(19, 19, 19, 0.12)',
                            borderRadius: '8px',
                        }}
                    >
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
                                d="M10 12L6 8L10 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span
                            className="text-[14px]"
                            style={{
                                color: 'rgba(19, 19, 19, 0.44)',
                                lineHeight: '125%',
                                letterSpacing: '0px',
                            }}
                        >
                            Back to other work
                        </span>
                    </Link>
                </div>

                {/* Project Header */}
                <div
                    className="pb-8 mb-8"
                    style={{ borderBottom: '1px solid rgba(19, 19, 19, 0.06)' }}
                >
                    {/* Title */}
                    <h1
                        className="text-[36px] mb-6"
                        style={{
                            color: 'rgb(19, 19, 19)',
                            fontFamily: '"SF Pro Display", "SF Pro Display Placeholder", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: 600,
                            letterSpacing: '-1.5px',
                            lineHeight: '150%',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            WebkitFontSmoothing: 'inherit',
                        }}
                    >
                        {work.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4">
                        {/* Client */}
                        <span
                            className="text-[18px]"
                            style={{
                                color: 'rgba(19, 19, 19, 0.44)',
                                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            }}
                        >
                            {work.client}
                        </span>

                        {/* Separator */}
                        <div
                            className="w-[1px] h-5"
                            style={{ backgroundColor: 'rgba(19, 19, 19, 0.12)' }}
                        />

                        {/* Year */}
                        <span
                            className="text-[18px]"
                            style={{
                                color: 'rgba(19, 19, 19, 0.44)',
                                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            }}
                        >
                            {work.year}
                        </span>

                        {/* Website Link (if provided) */}
                        {work.websiteUrl && work.websiteLabel && (
                            <>
                                {/* Separator */}
                                <div
                                    className="w-[1px] h-5"
                                    style={{ backgroundColor: 'rgba(19, 19, 19, 0.12)' }}
                                />

                                <a
                                    href={work.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[18px] hover:opacity-70 transition-opacity"
                                    style={{
                                        color: 'rgb(33, 137, 255)',
                                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    }}
                                >
                                    {work.websiteLabel}
                                </a>
                            </>
                        )}
                    </div>
                </div>

                {/* Overview Section */}
                <div
                    className="pb-8 mb-8 mt-8"
                    style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}
                >
                    <h2
                        className="text-[16px] mb-8"
                        style={{
                            color: 'rgba(19, 19, 19, 0.32)',
                            fontFamily: '"SF Pro Display", "SF Pro Display Placeholder", -apple-system, BlinkMacSystemFont, sans-serif',
                            lineHeight: '125%',
                            letterSpacing: '0px',
                            fontWeight: 400,
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            WebkitFontSmoothing: 'inherit',
                        }}
                    >
                        Overview
                    </h2>
                    <div className="space-y-6">
                        {work.overview.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-[14px]"
                                style={{
                                    color: '#131313',
                                    fontFamily: '"SF Pro", "SF Pro Placeholder", -apple-system, BlinkMacSystemFont, sans-serif',
                                    lineHeight: '1.3em',
                                    letterSpacing: '-0.2px',
                                    fontWeight: 400,
                                    whiteSpace: 'pre-wrap',
                                    wordBreak: 'break-word',
                                    WebkitFontSmoothing: 'inherit',
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Screenshots Section */}
                {work.screenshots.length > 0 && (
                    <div className="mb-16">
                        <div className="space-y-6">
                            {work.screenshots.map((src, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl overflow-hidden"
                                >
                                    <img
                                        src={src}
                                        alt={`${work.title} screenshot ${index + 1}`}
                                        className="w-full h-auto"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="pt-8" style={{ borderTop: '1px solid rgba(19, 19, 19, 0.06)' }}>
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <p
                            className="text-[13px] leading-[150%] max-w-xl"
                            style={{
                                color: 'rgba(19, 19, 19, 0.44)',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            }}
                        >
                            All designs on this website were created by Likith Raj. Some of the featured works are conceptual pieces and may not represent real products.
                        </p>
                        <p
                            className="text-[12px] leading-[150%] md:text-right"
                            style={{
                                color: 'rgba(19, 19, 19, 0.32)',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                            }}
                        >
                            © 2026 Likith Raj. All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}
