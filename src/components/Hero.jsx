import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Scene3D from './Scene3D';
import '../styles/Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: 0.5
            })
                .from(subtitleRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8
                }, '-=0.5')
                .from(ctaRef.current.children, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.2
                }, '-=0.4');

            // Floating animation for scroll indicator
            gsap.to('.scroll-indicator', {
                y: 10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero" ref={heroRef}>
            <Scene3D />

            <div className="hero-content container">
                <div className="hero-text">
                    <h1 ref={titleRef} className="hero-title">
                        Hi, I'm <span className="gradient-text">Your Name</span>
                        <br />
                        Creative Developer
                    </h1>

                    <p ref={subtitleRef} className="hero-subtitle">
                        Crafting immersive digital experiences with cutting-edge 3D web technologies.
                        Specialized in Three.js, React, and GSAP animations.
                    </p>

                    <div ref={ctaRef} className="hero-cta">
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('projects')}
                        >
                            View My Work
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => scrollToSection('contact')}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll Down</p>
            </div>

            {/* Decorative gradient blobs */}
            <div className="gradient-blob blob-1"></div>
            <div className="gradient-blob blob-2"></div>
            <div className="gradient-blob blob-3"></div>
        </section>
    );
};

export default Hero;
