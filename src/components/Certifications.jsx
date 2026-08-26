import ApnaCollegeLogo from './ApnaCollegeLogo.png';
import Tcsionlogo from './TCS_iON-logo.png';
import ciscologo from './ciscologo.webp';
const Certifications = () => {
    const certifications = [
        {
            title: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate AI-103',
            issuer: 'Microsoft',
            description: 'Microsoft certification validating skills in developing and implementing AI solutions, applications, and intelligent agents using Microsoft Azure.',
            skills: ['Microsoft Azure', 'Azure AI', 'AI Applications', 'AI Agents', 'Generative AI', 'Azure AI Foundry'],
            link: 'https://drive.google.com/file/d/1Ymd4vQf_BWSGsjxrLZY-d-oDvjzuL-YO/view',
            icon: (
<svg className="w-10 h-10" viewBox="0 0 24 24">
        <rect x="2" y="2" width="9" height="9" fill="#F25022" />
        <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
        <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
        <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
    </svg>
            ),
            gradient: 'bg-black',
        },
        {
            title: 'Full Stack Web Development',
            issuer: 'Apna College',
            description: 'Comprehensive full-stack development training covering modern web technologies, frontend frameworks, backend development, and database management.',
            skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'RESTful APIs', 'Authentication', 'Responsive Design', 'HTML5', 'CSS3', 'JavaScript ES6+'],
            link: 'https://drive.google.com/file/d/1rZjPLKGoTumT74bNhXpXXiB-nrHpX7a3/view?usp=sharing',
            icon: (
                <img
        src={ApnaCollegeLogo}
        alt="Apna College"
        className="w-full h-full object-contain"
    />
            ),
            gradient: 'bg-white',
        },
        {
            title: 'TCS iON Career Edge - Young Professional',
            issuer: 'Tata Consultancy Services',
            description: 'Industry-recognized certification focusing on professional skills, workplace readiness, and career development for young professionals in the technology sector.',
            skills: ['Professional Communication', 'Problem Solving', 'Critical Thinking', 'Workplace Ethics', 'Team Collaboration'],
            link: 'https://drive.google.com/file/d/13jjwYLM3ZCOMcOdjKdvkHqmYWfvMT6gx/view?usp=sharing',
            icon: (
                <img
        src={Tcsionlogo}
        alt="TCS iON"
        className="w-full h-full object-contain"
    />
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
                <img
        src={ciscologo}
        alt="Cisco"
        className="w-full h-full object-contain"
    />
            ),
            gradient: 'bg-white',
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
