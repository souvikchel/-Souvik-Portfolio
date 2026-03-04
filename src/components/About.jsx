import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '../assets/profile.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from('.about-title', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.about-image', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                x: 80,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

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
            icon: '🧩',
            title: 'Architecting Solutions',
            description: 'Transforming complex ideas into scalable, real-world applications with clean architecture and structured thinking.'
        },
        {
            icon: '⚡',
            title: 'Performance-Driven Code',
            description: 'Blending strong Data Structures & Algorithms with modern development practices to build fast, optimized systems.'
        },
        {
            icon: '🌐',
            title: 'Full-Stack Expertise',
            description: 'Engineering seamless end-to-end web experiences.'
        },
        {
            icon: '🚀',
            title: 'Continuous Growth',
            description: 'Committed to learning emerging technologies and industry best practices.'
        }
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{ padding: '100px 0' }}
        >
            <div style={{ width: '90%', margin: 'auto', maxWidth: '1200px' }}>

                <h2
                    className="about-title"
                    style={{
                        textAlign: 'center',
                        fontSize: '2.5rem',
                        marginBottom: '60px'
                    }}
                >
                    About Me
                </h2>

                {/* Main Content */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '60px',
                        flexWrap: 'wrap'
                    }}
                >

                    {/* LEFT SIDE */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3 style={{
                            fontSize: '1.8rem',
                            marginBottom: '15px',
                            background: 'linear-gradient(90deg,#6366f1,#14b8a6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Full-Stack Developer | B.Tech IT (2023–2027)
                        </h3>

                        <div style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg,#6366f1,#14b8a6)',
                            color: '#fff',
                            fontSize: '0.85rem',
                            marginBottom: '20px'
                        }}>
                            🎓 Institute of Engineering & Management (IEM), Kolkata
                        </div>

                        <p style={{ lineHeight: '1.7', marginBottom: '15px' }}>
                            I am currently pursuing B.Tech in Information Technology at IEM Kolkata.
                            Passionate about software development, I specialize in building scalable,
                            efficient, and user-centric applications.
                        </p>

                        <p style={{ lineHeight: '1.7' }}>
                            With a strong foundation in Data Structures and Algorithms,
                            I focus on writing optimized and maintainable code while
                            designing impactful digital solutions.
                        </p>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div
                        className="about-image"
                        style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            minWidth: '300px'
                        }}
                    >
                        <img
                            src={profileImage}
                            alt="Souvik Chel"
                            style={{
                                width: '340px',
                                height: '340px',
                                objectFit: 'cover',
                                borderRadius: '20px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                transition: '0.4s'
                            }}
                        />
                    </div>

                </div>

                {/* Highlights */}
                <div
                    style={{
                        marginTop: '80px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px'
                    }}
                >
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            style={{
                                padding: '25px',
                                borderRadius: '15px',
                                backdropFilter: 'blur(10px)',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                transition: '0.3s'
                            }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                                {highlight.icon}
                            </div>
                            <h4 style={{ marginBottom: '10px' }}>
                                {highlight.title}
                            </h4>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                                {highlight.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;