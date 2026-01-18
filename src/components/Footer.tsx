export default function Footer() {
    return (
        <footer className="py-16 px-8 md:px-16">
            <div className="max-w-[1100px] mx-auto">
                <div
                    className="border-t pt-8"
                    style={{ borderColor: 'rgba(19, 19, 19, 0.08)' }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <p
                            className="text-[13px]"
                            style={{ color: 'rgba(19, 19, 19, 0.4)' }}
                        >
                            © 2026 Likith Raj. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[13px] hover:opacity-70 transition-opacity"
                                style={{ color: 'rgba(19, 19, 19, 0.4)' }}
                            >
                                Twitter
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[13px] hover:opacity-70 transition-opacity"
                                style={{ color: 'rgba(19, 19, 19, 0.4)' }}
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[13px] hover:opacity-70 transition-opacity"
                                style={{ color: 'rgba(19, 19, 19, 0.4)' }}
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
