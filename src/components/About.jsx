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

                <div className="card-strong max-w-4xl mx-auto">
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

                        <div className="pt-6 border-t border-dark-700">
                            <p className="text-primary-400 font-semibold text-xl">
                                Let's build something amazing together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
