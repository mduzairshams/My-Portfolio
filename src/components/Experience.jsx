const Experience = () => {
    const experiences = [
        {
            type: 'achievement',
            title: 'Guinness World Record',
            organization: 'Agentathon 2025',
            period: '2025',
            description: 'Participated in the world\'s largest AI hackathon and contributed to setting a Guinness World Record.',
            highlights: [
                'Part of a global event with thousands of participants',
                'Collaborated on cutting-edge AI solutions',
                'Demonstrated teamwork and innovation under pressure'
            ],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
        },
        {
            type: 'internship',
            title: 'Frontend Development Intern',
            organization: 'ApexPlanet',
            period: 'May 2025 - July 2025',
            description: 'Contributed to frontend development tasks, building responsive and visually appealing user interfaces.',
            highlights: [
                'Built responsive UIs with modern frameworks',
                'Completed assigned tasks independently within deadlines',
                'Enhanced skills in UI/UX design and code optimization',
                'Improved cross-browser compatibility expertise',
                'Strengthened time management and task prioritization'
            ],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            type: 'project',
            title: 'AutoFixX - AI Debugging Platform',
            organization: 'Team Project at Agentathon 2025',
            period: '2025',
            description: 'Led development of an Agentic AI platform for autonomous debugging, shortlisted at world\'s largest AI hackathon.',
            highlights: [
                'Designed multi-agent AI architecture',
                'Implemented secure backend orchestration',
                'Demonstrated strong teamwork and collaboration skills',
                'Worked with cutting-edge LLM technologies',
                'Delivered production-ready solution under tight deadlines'
            ],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="experience" className="section-padding bg-dark-900/50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Experience & <span className="gradient-text">Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"></div>
                    <p className="text-dark-300 mt-6 text-lg max-w-2xl mx-auto">
                        Professional journey and notable accomplishments
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
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start gap-2 text-dark-300">
                                                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
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
