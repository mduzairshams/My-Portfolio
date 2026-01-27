const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center hero-gradient pt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
                <div className="animate-fade-in">
                    {/* Greeting */}
                    <p className="text-primary-400 text-lg md:text-xl font-medium mb-4">
                        Hi, I'm
                    </p>

                    {/* Name */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="gradient-text whitespace-nowrap">Mohammed Uzair Shams</span>
                    </h1>

                    {/* Title */}
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-dark-200 mb-4">
                        Software Engineer
                    </h2>

                    {/* Location */}
                    <p className="text-dark-400 text-lg md:text-xl mb-8 flex items-center justify-center gap-2">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        Hyderabad, India
                    </p>

                    {/* Tagline */}
                    <p className="text-dark-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                        Crafting scalable web solutions with modern technologies.
                        Passionate about building impactful products that solve real-world problems.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-primary w-full sm:w-auto"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-secondary w-full sm:w-auto"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-20 animate-bounce">
                        <svg
                            className="w-6 h-6 mx-auto text-primary-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
