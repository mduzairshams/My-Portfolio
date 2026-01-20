import { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'FinPlot',
            subtitle: 'Stock Trading Application',
            description: 'A modern, responsive stock trading web app delivering a realistic trading experience through a clean dashboard.',
            fullDescription: 'Built a modern, responsive stock trading web app that delivers a realistic trading experience through a clean, single-page dashboard featuring bar and doughnut chart representation of user holdings. Designed a user-friendly interface in React.js (CRA) with Bootstrap and Material UI, ensuring seamless use across desktop, tablet, and mobile. Developed comprehensive Jest tests to verify backend API responses, frontend rendering, and overall feature reliability.',
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Bootstrap', 'Material UI', 'Jest', 'Axios'],
            liveLink: 'https://finplot.vercel.app/',
            githubLink: 'https://github.com/mduzairshams/FinPlot',
            features: [
                'Real-time stock data visualization with interactive charts',
                'Responsive design optimized for all devices',
                'Comprehensive testing with Jest',
                'Clean, intuitive single-page dashboard',
                'User portfolio management with visual analytics'
            ],
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            title: 'HomeQuest',
            subtitle: 'Rental Listing Platform',
            description: 'A full-stack rental platform for browsing, posting, and managing property listings with secure authentication.',
            fullDescription: 'Built a full-stack rental platform to browse, post, review, and manage property listings with a responsive UI. Designed modular Express.js architecture with clean routing. Integrated secure login/signup using Passport.js, sessions, flash messages, and used MongoDB Atlas with Mongoose for schema modeling and cloud data storage. Implemented GST-based pricing logic and user-specific content visibility with role checks, added method-override, input validation, and centralized error handling via custom Express Error.',
            technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Bootstrap', 'Passport.js', 'Mongoose', 'EJS'],
            liveLink: 'https://airbnb-ovpu.onrender.com/',
            githubLink: 'https://github.com/mduzairshams/HomeQuest',
            features: [
                'Secure user authentication with Passport.js',
                'Full CRUD operations for property listings',
                'GST-based pricing calculations',
                'Role-based access control',
                'Review and rating system',
                'Responsive UI with Bootstrap'
            ],
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 3,
            title: 'ManyData',
            subtitle: 'User Database Management System',
            description: 'A full-stack user management system with complete CRUD functionality and secure password verification.',
            fullDescription: 'Built a full-stack user management system using Node.js, Express.js, MySQL, and EJS with full CRUD functionality and dynamic SQL queries. Implemented password verification before allowing edits, ensuring secure user updates. Features include user creation, reading, updating, and deletion with a clean, intuitive interface.',
            technologies: ['Node.js', 'Express.js', 'MySQL', 'EJS', 'HTML5', 'CSS3'],
            liveLink: null,
            githubLink: 'https://github.com/mduzairshams/User-Database-Management-System-Full-Stack-Web-App',
            features: [
                'Complete CRUD operations for user management',
                'Secure password verification system',
                'Dynamic SQL query execution',
                'Clean and intuitive user interface',
                'Real-time data validation'
            ],
            gradient: 'from-green-500 to-teal-500',
        },
        {
            id: 4,
            title: 'AutoFixX',
            subtitle: 'AI-Powered Debugging Platform',
            description: 'An Agentic AI platform that autonomously detects, analyzes, and resolves application errors.',
            fullDescription: 'Built an Agentic AI–powered debugging platform that autonomously detects, analyzes, and resolves application errors by reasoning over logs, stack traces, and code context. Shortlisted at GDG\'s Agentathon (world\'s largest AI hackathon). Designed a multi-agent architecture where specialized LLM agents collaborate for error classification, root-cause analysis, fix generation, and validation, improving developer productivity and reducing manual debugging effort. Implemented secure backend orchestration to manage agent execution, API interactions, and error-handling pipelines with scalability in mind.',
            technologies: ['React.js', 'Node.js', 'Express.js', 'Agentic AI (LLMs)', 'REST APIs', 'MongoDB', 'Vercel'],
            liveLink: null,
            githubLink: 'https://github.com/mduzairshams/autofixr',
            features: [
                'Autonomous error detection and analysis',
                'Multi-agent AI architecture for debugging',
                'Root-cause analysis with LLM reasoning',
                'Automated fix generation and validation',
                'Scalable backend orchestration',
                'Shortlisted at world\'s largest AI hackathon'
            ],
            gradient: 'from-orange-500 to-red-500',
            badge: 'Team Project',
        },
    ];

    return (
        <>
            <section id="projects" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"></div>
                        <p className="text-dark-300 mt-6 text-lg max-w-2xl mx-auto">
                            Real-world applications showcasing full-stack development expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="project-card card group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Badge */}
                                {project.badge && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                                            {project.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Gradient Header */}
                                <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-t-xl absolute top-0 left-0 right-0`}></div>

                                <div className="pt-4">
                                    <h3 className="text-2xl font-bold text-dark-50 mb-2 group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-primary-400 font-medium mb-4">{project.subtitle}</p>
                                    <p className="text-dark-300 mb-6 leading-relaxed">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-dark-800 text-dark-300 rounded-md text-sm border border-dark-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="px-3 py-1 bg-dark-800 text-primary-400 rounded-md text-sm border border-dark-700">
                                                +{project.technologies.length - 4} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex-1 btn-primary text-center"
                                            >
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    Live Demo
                                                </span>
                                            </a>
                                        )}
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className={`${project.liveLink ? 'flex-1' : 'flex-1'} btn-secondary text-center`}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                                GitHub
                                            </span>
                                        </a>
                                    </div>

                                    {/* View Details Link */}
                                    <button className="mt-4 text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                        View Details
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
};

export default Projects;
