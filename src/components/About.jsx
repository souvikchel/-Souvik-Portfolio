import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section title
            gsap.from('.about .section-title', {
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            // Animate cards
            cardsRef.current.forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    },
                    y: 80,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: 'power3.out'
                });
            });

            // Animate stats
            gsap.from('.stat-item', {
                scrollTrigger: {
                    trigger: '.stats-grid',
                    start: 'top 85%',
                },
                scale: 0,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.7)'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    const highlights = [
        {
            icon: '🎨',
            title: 'Creative Design',
            description: 'Crafting visually stunning interfaces that captivate and engage users with modern aesthetics.'
        },
        {
            icon: '⚡',
            title: 'Performance First',
            description: 'Building lightning-fast applications optimized for the best user experience across all devices.'
        },
        {
            icon: '🚀',
            title: 'Modern Tech',
            description: 'Leveraging cutting-edge technologies like Three.js, React, and WebGL for immersive experiences.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'Constantly exploring new techniques and pushing boundaries in web development.'
        }
    ];

    const stats = [
        { value: '50+', label: 'Projects Completed' },
        { value: '5+', label: 'Years Experience' },
        { value: '30+', label: 'Happy Clients' },
        { value: '100%', label: 'Client Satisfaction' }
    ];

    return (
        <section id="about" className="about section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <h3 className="gradient-text-secondary">
                            Passionate Full-Stack Developer & 3D Enthusiast
                        </h3>
                        <p>
                            I'm a creative developer who loves bringing ideas to life through code.
                            With expertise in modern web technologies and a keen eye for design,
                            I create immersive digital experiences that leave lasting impressions.
                        </p>
                        <p>
                            My journey in web development has led me to specialize in Three.js and
                            React, combining stunning 3D graphics with powerful interactive applications.
                            I'm constantly learning and adapting to new technologies to deliver
                            cutting-edge solutions.
                        </p>
                    </div>

                    <div className="highlights-grid">
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="highlight-card glass-card"
                                ref={addToRefs}
                            >
                                <div className="highlight-icon">{highlight.icon}</div>
                                <h4>{highlight.title}</h4>
                                <p>{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-value gradient-text">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
