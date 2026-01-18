'use client';

import Image from 'next/image';

const experiences = [
    {
        company: 'Freelance', // Title said "freelance software developer"
        role: 'Freelance Software Developer', // The user prompt structure was a bit mixed, using title as role.
        // "title freelance software developer" -> I'll assume this is the role text. 
        // "do the same for webdesign agency logo" -> imply company is the agency.
        // User request: "do the same for webdesign agency logo , add the logo image same style , title freelance software developer , remote aug 2025- present"
        location: 'Remote',
        date: 'Aug 2025 - Present',
        logo: '/images/Webdesign agency logo.jpg',
    },

    {
        company: 'Pentagon Space',
        role: 'Python Full Stack Development Trainee at',
        location: 'Bengaluru, KA',
        date: 'April 2025 - Jan 2026',
        logo: '/images/Pentagon space Golden Logo.png',
    },
    {
        company: 'Biosoft',
        role: 'Software Engineering Intern at',
        location: 'Bengaluru, KA',
        date: 'October 2024 - February 2025',
        logo: '/images/Biosoft-Logo.png',
    },

];

export default function WorkExperience() {
    return (
        <section className="w-full max-w-[600px] mt-12 flex flex-col gap-8">
            {experiences.map((exp, index) => (
                <div key={index} className="flex items-center gap-4">
                    {/* Logo Container */}
                    <div
                        className="relative flex-shrink-0 bg-gray-100 rounded-[12px] overflow-hidden"
                        style={{ width: '48px', height: '48px' }} // Choosing a reasonable size for the logo
                    >
                        {/* Using standard img tag as requested style usually works best with direct props for object-fit if not using Next.js Image fill */}
                        <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            style={{
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                borderRadius: 'inherit',
                                objectPosition: 'center center',
                                objectFit: 'cover'
                            }}
                            onError={(e) => {
                                // Fallback for missing images
                                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23eee"/><text x="50" y="50" font-family="sans-serif" font-size="20" text-anchor="middle" dy=".3em" fill="%23999">Img</text></svg>';
                            }}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col">
                        {/* Role & Company */}
                        <p
                            style={{
                                fontFamily: '"SF Pro", "SF Pro Placeholder", sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '132%',
                                color: 'rgba(19, 19, 19, 0.9)',
                                margin: 0
                            }}
                        >
                            {exp.role}{' '}
                            <span style={{ fontWeight: 600, color: 'rgb(19, 19, 19)' }}>
                                {exp.company !== 'Freelance' ? exp.company : ''}
                                {/* Logic correction: simple mapping based on prompt structure */}
                            </span>
                        </p>

                        {/* Location */}
                        <p
                            style={{
                                fontFamily: '"SF Pro", "SF Pro Placeholder", sans-serif',
                                fontSize: '13px',
                                lineHeight: '132%',
                                color: 'rgb(19, 19, 19)',
                                margin: 0
                            }}
                        >
                            {exp.location}


                            {/* Date */}
                            <span
                                style={{
                                    fontFamily: '"SF Pro", "SF Pro Placeholder", sans-serif',
                                    fontSize: '13px',
                                    lineHeight: '132%',
                                    color: 'rgba(18, 18, 18, 0.44)',
                                    margin: 0,
                                    marginLeft: '8px'
                                }}
                            >
                                {exp.date}
                            </span>

                        </p>


                    </div>
                </div>
            ))}
        </section>
    );
}
