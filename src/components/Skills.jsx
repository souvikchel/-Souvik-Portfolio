import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);
    const skillsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.skills .section-title', {
                scrollTrigger: {
                    trigger: '.skills',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            skillsRef.current.forEach((skill, index) => {
                gsap.from(skill, {
                    scrollTrigger: {
                        trigger: skill,
                        start: 'top 85%',
                    },
                    scale: 0,
                    opacity: 0,
                    rotation: 180,
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: 'back.out(1.7)'
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !skillsRef.current.includes(el)) {
            skillsRef.current.push(el);
        }
    };

    const skillCategories = [
        {
            name: '3D & Graphics',
            skills: [
                { name: 'Three.js', level: 95, icon: '🎮' },
                { name: 'WebGL', level: 90, icon: '✨' },
                { name: 'GSAP', level: 95, icon: '⚡' },
                { name: 'Blender', level: 80, icon: '🎨' }
            ]
        },
        {
            name: 'Frontend',
            skills: [
                { name: 'React', level: 95, icon: '⚛️' },
                { name: 'JavaScript', level: 95, icon: '📜' },
                { name: 'TypeScript', level: 90, icon: '📘' },
                { name: 'CSS/SASS', level: 95, icon: '🎨' }
            ]
        },
        {
            name: 'Backend',
            skills: [
                { name: 'Node.js', level: 90, icon: '🟢' },
                { name: 'Express', level: 90, icon: '🚂' },
                { name: 'MongoDB', level: 85, icon: '🍃' },
                { name: 'PostgreSQL', level: 80, icon: '🐘' }
            ]
        },
        {
            name: 'Tools & Others',
            skills: [
                { name: 'Git', level: 95, icon: '🔧' },
                { name: 'Docker', level: 80, icon: '🐳' },
                { name: 'Figma', level: 90, icon: '🎯' },
                { name: 'AWS', level: 75, icon: '☁️' }
            ]
        }
    ];

    return (
        <section id="skills" className="skills section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                <p className="section-description">
                    A comprehensive toolkit for building modern, performant, and visually stunning web applications.
                </p>

                <div className="skills-container">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex} className="skill-category">
                            <h3 className="category-title gradient-text-secondary">
                                {category.name}
                            </h3>

                            <div className="skills-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="skill-card glass-card"
                                        ref={addToRefs}
                                    >
                                        <div className="skill-icon">{skill.icon}</div>
                                        <div className="skill-info">
                                            <h4 className="skill-name">{skill.name}</h4>
                                            <div className="skill-bar">
                                                <div
                                                    className="skill-progress"
                                                    style={{ '--skill-level': `${skill.level}%` }}
                                                >
                                                    <span className="skill-level">{skill.level}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
