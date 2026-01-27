const Experience = () => {
    const experiences = [
        {
            title: 'Frontend Developer Intern',
            organization: 'ApexPlanet',
            period: 'May 2025 - July 2025',
            description: 'Contributed to frontend development projects, building responsive and visually appealing user interfaces using modern web technologies and frameworks.',
            highlights: [
                'Developed responsive web applications with React and modern CSS frameworks',
                'Collaborated with cross-functional teams to deliver high-quality features',
                'Implemented pixel-perfect UI designs with attention to detail',
                'Optimized application performance and enhanced user experience',
                'Successfully completed all assigned tasks within project deadlines',
                'Gained hands-on experience with version control and agile methodologies'
            ],
            certificate: 'https://drive.google.com/file/d/1y9joDs_8x6f3E8u8Jymfoll8o2B_lZeN/view?usp=sharing',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="experience" className="section-padding bg-dark-900/50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"></div>
                    <p className="text-dark-300 mt-6 text-lg max-w-2xl mx-auto">
                        Professional journey and hands-on industry experience
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="timeline-item card-strong"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 border border-primary-500/30">
                                    {exp.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                        <h3 className="text-2xl font-bold text-dark-50">{exp.title}</h3>
                                        <span className="text-primary-400 font-medium text-sm md:text-base mt-1 md:mt-0">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-dark-300 font-medium mb-3">{exp.organization}</p>
                                    <p className="text-dark-200 mb-4 leading-relaxed">{exp.description}</p>

                                    {/* Highlights */}
                                    <ul className="space-y-2 mb-4">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start gap-2 text-dark-300">
                                                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Certificate Link */}
                                    <a
                                        href={exp.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        View Internship Certificate
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

