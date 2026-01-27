const Certifications = () => {
    const certifications = [
        {
            title: 'Full Stack Web Development',
            issuer: 'Apna College',
            description: 'Comprehensive full-stack development training covering modern web technologies, frontend frameworks, backend development, and database management.',
            skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'RESTful APIs', 'Authentication'],
            link: 'https://drive.google.com/file/d/1rZjPLKGoTumT74bNhXpXXiB-nrHpX7a3/view?usp=sharing',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'TCS iON Career Edge - Young Professional',
            issuer: 'Tata Consultancy Services',
            description: 'Industry-recognized certification focusing on professional skills, workplace readiness, and career development for young professionals in the technology sector.',
            skills: ['Professional Communication', 'Problem Solving', 'Critical Thinking', 'Workplace Ethics', 'Team Collaboration'],
            link: 'https://drive.google.com/file/d/13jjwYLM3ZCOMcOdjKdvkHqmYWfvMT6gx/view?usp=sharing',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Python Essentials 1 & 2',
            issuer: 'CISCO Networking Academy',
            description: 'Comprehensive Python programming certification covering fundamentals, data structures, object-oriented programming, and advanced Python concepts from CISCO\'s renowned networking academy.',
            skills: ['Python Programming', 'Data Structures', 'OOP Concepts', 'File Handling', 'Error Handling', 'Modules & Packages'],
            link: 'https://drive.google.com/file/d/1fOgQA3nNNivJsuggga1You332qSsQMMR/view?usp=sharing',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            gradient: 'from-green-500 to-teal-500',
        },
    ];

    return (
        <section id="certifications" className="section-padding bg-dark-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Professional <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"></div>
                    <p className="text-dark-300 mt-6 text-lg max-w-2xl mx-auto">
                        Verified credentials and continuous learning achievements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="card group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 bg-gradient-to-r ${cert.gradient} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {cert.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-dark-50 mb-2">{cert.title}</h3>
                            <p className="text-primary-400 font-medium mb-3">{cert.issuer}</p>
                            <p className="text-dark-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                            {/* Skills */}
                            <div className="mb-4">
                                <p className="text-dark-400 text-xs font-semibold mb-2 uppercase tracking-wide">Key Skills</p>
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill, sIndex) => (
                                        <span
                                            key={sIndex}
                                            className="px-2 py-1 bg-dark-800/50 text-dark-300 text-xs rounded border border-dark-700 hover:border-primary-500/50 transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Link */}
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium text-sm mt-auto"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                View Certificate
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
