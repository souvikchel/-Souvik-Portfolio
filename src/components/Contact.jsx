import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact .section-title', {
                scrollTrigger: {
                    trigger: '.contact',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.contact-form', {
                scrollTrigger: {
                    trigger: '.contact-form',
                    start: 'top 85%',
                },
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.contact-info', {
                scrollTrigger: {
                    trigger: '.contact-info',
                    start: 'top 85%',
                },
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.social-links a', {
                scrollTrigger: {
                    trigger: '.social-links',
                    start: 'top 85%',
                },
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'back.out(1.7)'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactMethods = [
        {
            icon: '📧',
            title: 'Email',
            value: 'hello@yourportfolio.com',
            link: 'mailto:hello@yourportfolio.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'San Francisco, CA',
            link: '#'
        }
    ];

    const socialLinks = [
        { name: 'GitHub', icon: '💻', url: 'https://github.com' },
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
        { name: 'Dribbble', icon: '🎨', url: 'https://dribbble.com' }
    ];

    return (
        <section id="contact" className="contact section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Let's Work Together</h2>

                <p className="section-description">
                    Have a project in mind? Let's discuss how we can bring your ideas to life.
                </p>

                <div className="contact-container">
                    {/* Contact Form */}
                    <div className="contact-form glass-card">
                        <h3 className="gradient-text-secondary">Send a Message</h3>

                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3 className="gradient-text-secondary">Get In Touch</h3>

                        <div className="contact-methods">
                            {contactMethods.map((method, index) => (
                                <a
                                    key={index}
                                    href={method.link}
                                    className="contact-method glass-card"
                                >
                                    <div className="method-icon">{method.icon}</div>
                                    <div className="method-details">
                                        <h4>{method.title}</h4>
                                        <p>{method.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="social-section">
                            <h4>Follow Me</h4>
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        title={social.name}
                                    >
                                        <span>{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
