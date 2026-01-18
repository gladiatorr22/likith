import Link from 'next/link';

export default function OtherWorkPage() {
    // Other work items with actual content
    const otherWorkItems = [
        {
            id: 1,
            slug: 'vision-pro-card',
            type: 'video',
            title: 'Vision Pro Card',
            subtitle: 'UI Template',
            videoSrc: '/videos/otherwork/Apple Vision Pro — Responsive Card - Google Chrome 2026-01-18 22-32-10.mp4'
        },

        { id: 2, slug: 'epileptic-seizure-detection', type: 'image', title: 'Epileptic Seizure Detection', subtitle: 'ML System', imageSrc: '/images/other projects/Screenshot 2026-01-18 133351.png' },
        { id: 3, slug: 'abha-mobile-app', type: 'small-image', title: 'ABHA Mobile App', subtitle: 'Healthcare Auth', imageSrc: '/images/other projects/1200x630wa.jpg' },
        { id: 4, slug: 'django-twitter-clone', type: 'small-image', title: 'Django Twitter Clone', subtitle: 'Social Media', imageSrc: '/images/other projects/Django Framework Sticker.jpg' },
    ];

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

                {/* Page Header */}
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
                        Other Work
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="text-[16px]"
                        style={{
                            color: 'rgba(19, 19, 19, 0.44)',
                            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        }}
                    >
                        A collection of smaller projects and experiments
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div
                    className="pb-8 mb-8"
                    style={{ borderBottom: '1px solid rgba(19, 19, 19, 0.06)' }}
                >
                    <div className="grid grid-cols-2 gap-6">
                        {otherWorkItems.map((item) => (
                            item.type === 'placeholder' ? (
                                <div key={item.id} className="group block">
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
                                            <span style={{ color: 'rgb(19, 19, 19)' }}>{item.title}</span>
                                            {item.subtitle && ` ${item.subtitle}`}
                                        </p>
                                    </div>
                                    <div className="p-6 bg-gray-100 rounded-xl overflow-hidden">
                                        <div className="aspect-[16/9] w-full flex items-center justify-center text-gray-400 rounded-lg bg-gray-200/50">
                                            <div className="text-center">
                                                <svg
                                                    className="w-12 h-12 mx-auto mb-3 opacity-50"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                                <span className="text-[14px]">New Project</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link key={item.id} href={`/otherwork/${item.slug}`} className="group block">
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
                                            <span style={{ color: 'rgb(19, 19, 19)' }}>{item.title}</span>
                                            {item.subtitle && ` ${item.subtitle}`}
                                        </p>
                                    </div>
                                    <div className="p-6 bg-gray-100 rounded-xl overflow-hidden cursor-pointer">
                                        {item.type === 'video' && item.videoSrc ? (
                                            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
                                                <video
                                                    src={item.videoSrc}
                                                    loop
                                                    muted
                                                    playsInline
                                                    autoPlay
                                                    preload="auto"
                                                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        ) : item.type === 'image' && item.imageSrc ? (
                                            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                                <img
                                                    src={item.imageSrc}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
                                        ) : item.type === 'small-image' && item.imageSrc ? (
                                            <div className="aspect-[16/9] w-full flex items-center justify-center rounded-lg bg-gray-200/50 group-hover:scale-105 transition-transform duration-500">
                                                <img
                                                    src={item.imageSrc}
                                                    alt={item.title}
                                                    className="max-w-[60%] max-h-[60%] object-contain rounded-lg"
                                                />
                                            </div>
                                        ) : (
                                            <div className="aspect-[16/9] w-full flex items-center justify-center text-gray-400 rounded-lg bg-gray-200/50 group-hover:scale-105 transition-transform duration-500">
                                                <div className="text-center">
                                                    <svg
                                                        className="w-8 h-8 mx-auto mb-2 opacity-50"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1.5}
                                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                    <span className="text-[11px]">Add image/video</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            )
                        ))}
                    </div>
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
