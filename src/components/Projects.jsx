import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const projectsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.projects .section-title', {
                scrollTrigger: {
                    trigger: '.projects',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            projectsRef.current.forEach((project, index) => {
                gsap.from(project, {
                    scrollTrigger: {
                        trigger: project,
                        start: 'top 85%',
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: 'power3.out'
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !projectsRef.current.includes(el)) {
            projectsRef.current.push(el);
        }
    };

const projects = [

    {
        title: 'Solar EV Smart Charging Station (V2V Enabled)',
        description: 'A renewable-energy based EV charging ecosystem integrating solar power generation with Vehicle-to-Vehicle (V2V) charging technology.',
        tags: [
            'Solar Energy',
            'EV Charging',
            'V2V Charging',
            'Wireless Power Transfer',
            'IoT Systems'
        ],
        color: '#22c55e',
        repo: 'https://github.com/souvikchel/Multipurpose_EV'
    },

    {
        title: 'MindEase – AI Emotional Companion',
        description: 'An AI-powered emotional support platform designed to provide a safe, judgment-free space for users.',
        tags: ['React', 'Node.js', 'Express', 'AI/NLP', 'MongoDB'],
        color: 'var(--color-primary)',
        repo: 'https://github.com/souvikchel/MindEase-Your-AI-Friend'
    },

    {
        title: 'Media Discovery Platform',
        description: 'A Netflix-inspired responsive web platform for exploring trending and popular media.',
        tags: ['HTML', 'CSS', 'Responsive Design', 'UI/UX'],
        color: 'var(--color-secondary)',
        repo: 'https://github.com/souvikchel/Media-Discovery-Platform'
    },

    {
        title: 'Quiz App (React + Vite)',
        description: 'A high-performance quiz application with timed challenges and leaderboard.',
        tags: ['React', 'Vite', 'JavaScript', 'State Management'],
        color: 'var(--color-accent)',
        repo: 'https://github.com/souvikchel/quiz-app'
    },

    {
        title: 'Sudoku Master',
        description: 'An interactive web-based Sudoku game with puzzle generation and validation.',
        tags: ['JavaScript', 'HTML', 'CSS', 'Game Logic'],
        color: 'var(--color-accent-2)',
        repo: 'https://github.com/souvikchel/Sudoku'
    }

];

    return (
        <section id="projects" className="projects section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <p className="section-description">
                    A showcase of my recent work, combining creativity with technical excellence.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            ref={addToRefs}
                            style={{ '--accent-color': project.color }}
                        >
                            <div className="project-card-inner">

                                <div className="project-number">
                                    0{index + 1}
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>

                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="project-tag"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* GITHUB LINK BUTTON */}

                                <div className="project-link">
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-icon"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
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

export default Projects;