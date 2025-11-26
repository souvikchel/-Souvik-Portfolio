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
            title: '3D Product Visualizer',
            description: 'An interactive 3D product showcase built with Three.js, allowing users to explore products in immersive detail with realistic lighting and materials.',
            tags: ['Three.js', 'React', 'WebGL', 'GSAP'],
            color: 'var(--color-primary)'
        },
        {
            title: 'Portfolio Platform',
            description: 'A modern portfolio platform featuring smooth animations, parallax effects, and an intuitive content management system for creative professionals.',
            tags: ['React', 'Node.js', 'MongoDB', 'GSAP'],
            color: 'var(--color-secondary)'
        },
        {
            title: 'E-Commerce Experience',
            description: 'A cutting-edge e-commerce platform with real-time inventory, advanced filtering, and seamless checkout experience powered by modern technologies.',
            tags: ['Next.js', 'Stripe', 'Redux', 'Tailwind'],
            color: 'var(--color-accent)'
        },
        {
            title: 'Virtual Showroom',
            description: 'An immersive virtual showroom experience with 3D navigation, interactive hotspots, and realistic product presentations in a WebGL environment.',
            tags: ['Three.js', 'React', 'Blender', 'WebXR'],
            color: 'var(--color-accent-2)'
        },
        {
            title: 'Analytics Dashboard',
            description: 'A comprehensive analytics dashboard with real-time data visualization, interactive charts, and customizable reporting features for business insights.',
            tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
            color: 'var(--color-primary-light)'
        },
        {
            title: 'AI Chat Interface',
            description: 'An intelligent chat interface powered by AI, featuring natural language processing, context awareness, and seamless user interactions.',
            tags: ['React', 'OpenAI', 'WebSocket', 'Express'],
            color: '#14b8a6'
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
                                <div className="project-number">0{index + 1}</div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-link">
                                    <button className="btn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </button>
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
