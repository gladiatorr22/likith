import Link from 'next/link';
import { notFound } from 'next/navigation';

// Project data
const projects: Record<string, {
    title: string;
    client: string;
    year: string;
    websiteUrl: string;
    websiteLabel: string;
    overview: string[];
    screenshots: string[];
}> = {
    frsnl: {
        title: 'FRSNL Link Planner',
        client: 'FRSNL',
        year: '2025',
        websiteUrl: 'https://frsnl-rf-link-planner.vercel.app/',
        websiteLabel: 'View Live',
        overview: [
            'This web-based tool is designed for planning simple point-to-point radio frequency (RF) links between towers on an interactive map. It serves as a practical utility for visualizing how towers communicate based on their geographic positions and technical configurations.',
            'Core features include the ability to place towers with specific frequencies and draw links between them, provided their frequencies match. Users can interact with the map to precisely position equipment and analyze the distance and frequency of each link.',
            'A standout feature is the visualization of the first Fresnel zone as an ellipse around the link, which helps identify potential terrain obstructions. The tool integrates with elevation APIs to fetch terrain data and calculate clearance requirements.',
            'The frontend is implemented using React and Leaflet for map interactions, styled with Tailwind CSS for a minimalist and high-contrast user interface. It handles complex geometric calculations entirely on the client side to provide immediate visual feedback.',
        ],
        screenshots: [
            '/images/screenshots/frsnl/Screenshot 2026-01-18 121438.png',
            '/images/screenshots/frsnl/Screenshot 2026-01-18 121557.png',
            '/images/screenshots/frsnl/Screenshot 2026-01-18 121655.png',
        ],
    },
    lumina: {
        title: 'Lumina AI Platform',
        client: 'Lumina',
        year: '2025',
        websiteUrl: 'https://lumina-ai-video-manager.vercel.app/',
        websiteLabel: 'View Live',
        overview: [
            'This SaaS platform provides a comprehensive solution for managing and processing videos through Cloudinary\'s cloud infrastructure. The application is designed to handle media assets efficiently, offering a modern interface for users to interact with their video content.',
            'Users can perform a variety of video-related tasks, including uploading videos, managing metadata, and utilizing AI-powered processing features. The platform also includes a social sharing component, allowing users to generate drafts and distribute their content across different channels.',
            'The technical architecture is built on Next.js 16 and React 19, utilizing TypeScript for type safety and Tailwind CSS for styling. It uses Prisma 7 as an ORM to interact with a PostgreSQL database, which is managed through Docker containers.',
            'Security is a primary focus, with Clerk integrated for modern user authentication and session management. Route protection is handled via custom middleware that redirects users based on their authentication status.',
        ],
        screenshots: [
            '/images/screenshots/lumina/Screenshot 2026-01-18 120927.png',
            '/images/screenshots/lumina/Screenshot 2026-01-18 121118.png',
            '/images/screenshots/lumina/Screenshot 2026-01-18 121325.png',
        ],
    },
    radiance: {
        title: 'Radiance Design System',
        client: 'Radiance',
        year: '2025',
        websiteUrl: 'https://radiance-skin-care.vercel.app/',
        websiteLabel: 'View Live',
        overview: [
            'Radiance is a modern e-commerce product website specifically designed for a skincare brand. It provides a professional landing page that introduces the brand\'s story and core product offerings to potential customers.',
            'The site features a full-featured product catalog with filtering options, allowing users to browse items by category or specific skin concerns. It also includes detailed product pages, a shopping cart, and contact forms for customer inquiries.',
            'Built using React and Vite, the application leverages fast refresh and optimized build performances to deliver a smooth user experience. Styling is handled through Tailwind CSS, providing a responsive and clean layout that adapts to various screen sizes.',
        ],
        screenshots: [
            '/images/screenshots/radiance/Screenshot 2026-01-18 122012.png',
            '/images/screenshots/radiance/Screenshot 2026-01-18 121809.png',
            '/images/screenshots/radiance/Screenshot 2026-01-18 121913.png',

        ],
    },
    vera: {
        title: 'Vera AI Macro Tracker',
        client: 'Vera',
        year: '2026',
        websiteUrl: 'https://vera.health',
        websiteLabel: 'vera.health',
        overview: [
            'Vera is an advanced "Meal Intelligence" system that goes beyond traditional calorie counting by focusing on the nuances of regional Indian cuisine. It is designed to understand the cultural context of food, distinguishing between various regional dishes like dal makhani and dal tadka.',
            'The system features sophisticated capabilities such as recognizing portion sizes from visual cues and identifying the impact of different cooking methods on nutritional value. It provides users with a "Health Score" along with actionable, culturally relevant tips to improve their diet.',
            'Technically, the application is powered by the Gemini 2.0 Flash AI model for fast and cost-effective processing of food images and descriptions. It leverages Next.js for the frontend and Supabase for backend services.',
            'The application\'s workflow includes multiple input methods, such as barcode scanning, audio recording for verbal logs, and image analysis. This multi-modal approach ensures that users can track their nutrition in the way that best fits their lifestyle.',
        ],
        screenshots: [
            '/images/screenshots/vera/Screenshot 2026-01-18 122252.png',
            '/images/screenshots/vera/Screenshot 2026-01-18 122510.png',
            '/images/screenshots/vera/Screenshot 2026-01-18 123945.png',
        ],
    },
    'onyx-code-editor': {
        title: 'Onyx AI IDE',
        client: 'Personal',
        year: '2026',
        websiteUrl: 'https://github.com/likith/onyx',
        websiteLabel: 'View Link',
        overview: [
            'Onyx AI IDE is a high performance web based integrated development environment that brings a full coding experience directly to the browser. Built to leverage the latest in web technology, it combines the power of Next.js 15, WebContainers, and Monaco Editor to offer developers a seamless and efficient workflow without the need for local setup.',
            'One of its core features is the integration of local Large Language Models via Ollama, providing privacy focused AI code suggestions and real time assistance. The editor supports instant environment booting for various frameworks like React, Next.js, and Angular, allowing users to write, run, and debug code instantly.',
            'Key features include a modern, responsive user interface designed with TailwindCSS and ShadCN UI, featuring dark and light theme toggles. It offers robust authentication using NextAuth for Google and GitHub, along with a fully functional file explorer and an enhanced code editor with syntax highlighting and formatting. The application also includes interactive terminal integration using xterm.js for command line operations and enables direct execution of frontend and backend applications within the browser using WebContainers.',
            'This project demonstrates the capability to build complex, desktop grade applications on the web, focusing on performance, user experience, and modern AI integration.'
        ],
        screenshots: [
            '/images/screenshots/onyx code editor/Screenshot 2026-01-18 214634.png',
            '/images/screenshots/onyx code editor/Screenshot 2026-01-18 214927.png',
            '/images/screenshots/onyx code editor/Screenshot 2026-01-18 215511.png'
        ],
    },
};

export default async function ProjectPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const project = projects[slug];

    if (!project) {
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
                        href="/"
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
                            Back to home
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
                        {project.title}
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
                            {project.client}
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
                            {project.year}
                        </span>

                        {/* Separator */}
                        <div
                            className="w-[1px] h-5"
                            style={{ backgroundColor: 'rgba(19, 19, 19, 0.12)' }}
                        />

                        {/* Website Link */}
                        <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[18px] hover:opacity-70 transition-opacity"
                            style={{
                                color: 'rgb(33, 137, 255)',
                                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            }}
                        >
                            {project.websiteLabel}
                        </a>
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
                        {project.overview.map((paragraph, index) => (
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
                <div className="mb-16">
                    {project.screenshots.length > 0 ? (
                        <div className="space-y-6">
                            {project.screenshots.map((src, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl overflow-hidden"
                                >
                                    <img
                                        src={src}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        className="w-full h-auto"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div
                            className="p-12 rounded-xl text-center"
                            style={{
                                backgroundColor: 'rgba(19, 19, 19, 0.03)',
                                color: 'rgba(19, 19, 19, 0.32)',
                            }}
                        >
                            <p className="text-[14px]">Project screenshots coming soon</p>
                        </div>
                    )}
                </div>

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
