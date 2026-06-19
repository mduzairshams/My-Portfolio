const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"></div>
                </div>

                <div className="card-strong max-w-4xl mx-auto space-y-8">
                    <div className="space-y-6 text-dark-200 text-lg leading-relaxed">
                        <p>
                            I'm a <span className="text-primary-400 font-semibold">Full Stack Developer</span> with
                            a passion for building modern, scalable web applications. With expertise spanning both
                            frontend and backend technologies, I transform ideas into production-ready solutions
                            that deliver real value.
                        </p>

                        <p>
                            My journey in web development has been driven by a{' '}
                            <span className="text-primary-400 font-semibold">problem-solving mindset</span> and
                            a commitment to continuous learning. From crafting intuitive user interfaces with React
                            to architecting robust backend systems with Node.js and Express, I thrive on tackling
                            complex challenges and delivering elegant solutions.
                        </p>

                        <p>
                            I've successfully delivered{' '}
                            <span className="text-primary-400 font-semibold">real-world projects</span> including
                            a stock trading platform, a full-stack rental listing website, and database management
                            systems. Each project has strengthened my ability to write clean, maintainable code and
                            collaborate effectively in team environments.
                        </p>

                        <p>
                            My focus is on creating{' '}
                            <span className="text-primary-400 font-semibold">impactful solutions</span> that not
                            only meet technical requirements but also enhance user experience and drive business
                            growth. I'm always exploring new technologies and best practices to stay at the forefront
                            of web development.
                        </p>
                    </div>

                    {/* Horizontal Education Bar */}
                    <div className="pt-6 border-t border-dark-700">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-dark-900/40 p-4 rounded-xl border border-dark-700/60">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400 border border-primary-500/20">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm0 0v6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-dark-50">B.Tech in CSE (AIML)</h4>
                                    <p className="text-dark-300 text-sm">St. Peter's Engineering College</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 self-start sm:self-center">
                                <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider bg-primary-500/10 px-2 py-0.5 rounded">CGPA</span>
                                <span className="text-xl font-extrabold text-primary-400">9.35 <span className="text-dark-400 text-sm font-normal">/ 10</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <p className="text-primary-400 font-semibold text-xl text-center sm:text-left">
                            Let's build something amazing together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
