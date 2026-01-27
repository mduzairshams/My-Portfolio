const Achievements = () => {
    const achievements = [
        {
            title: 'Guinness World Record',
            organization: 'Agentathon 2025',
            period: 'January 2025',
            description: 'Selected among the top 2,500 developers from over 12,500 applicants worldwide to participate in the world\'s largest AI hackathon, contributing to a Guinness World Record achievement.',
            highlights: [
                'Top 20% selection from global applicant pool',
                'Collaborated with elite developers on cutting-edge AI solutions',
                'Demonstrated exceptional problem-solving and innovation skills',
                'Contributed to record-breaking AI development event'
            ],
            link: 'https://www.linkedin.com/posts/mohammed-uzair-shams-2659a2297_%F0%9D%97%A1%F0%9D%97%BC%F0%9D%98%84-%F0%9D%97%B6%F0%9D%98%81%F0%9D%98%80-%F0%9D%97%BC%F0%9D%97%B3%F0%9D%97%B3%F0%9D%97%B6%F0%9D%97%B0%F0%9D%97%B6%F0%9D%97%AE%F0%9D%97%B9%F0%9D%97%B9%F0%9D%98%86-%F0%9D%97%AE%F0%9D%97%BA%F0%9D%97%AE%F0%9D%98%87%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B4-activity-7416138025308463105-OARx?utm_source=share&utm_medium=member_desktop',
            linkText: 'View LinkedIn Post',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            gradient: 'from-yellow-500 to-amber-500',
        },
        {
            title: 'National Semi-Finalist',
            organization: 'Flipkart Grid 7.0',
            period: '2025',
            description: 'Advanced to the national semi-finals of Flipkart Grid 7.0, one of India\'s most prestigious engineering challenges, competing against thousands of talented developers across the country.',
            highlights: [
                'Competed against top engineering talent nationwide',
                'Demonstrated strong technical and analytical skills',
                'Solved complex real-world business problems',
                'Recognized for innovative solution approach'
            ],
            link: 'https://drive.google.com/file/d/1y9-9t__mKvjejxSYGiZ7P7KWMjg4mAcX/view?usp=sharing',
            linkText: 'View Certificate',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            gradient: 'from-purple-500 to-pink-500',
        },
    ];

    return (
        <section id="achievements" className="section-padding bg-dark-900/30">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Notable <span className="gradient-text">Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"></div>
                    <p className="text-dark-300 mt-6 text-lg max-w-2xl mx-auto">
                        Recognition and accomplishments in competitive tech events
                    </p>
                </div>

                <div className="space-y-8">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="timeline-item card-strong"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${achievement.gradient} rounded-lg flex items-center justify-center text-white border border-white/20`}>
                                    {achievement.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                        <h3 className="text-2xl font-bold text-dark-50">{achievement.title}</h3>
                                        <span className="text-primary-400 font-medium text-sm md:text-base mt-1 md:mt-0">
                                            {achievement.period}
                                        </span>
                                    </div>
                                    <p className="text-dark-300 font-medium mb-3">{achievement.organization}</p>
                                    <p className="text-dark-200 mb-4 leading-relaxed">{achievement.description}</p>

                                    {/* Highlights */}
                                    <ul className="space-y-2 mb-4">
                                        {achievement.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start gap-2 text-dark-300">
                                                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Link */}
                                    <a
                                        href={achievement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        {achievement.linkText}
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

export default Achievements;
