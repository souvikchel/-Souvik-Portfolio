import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Navbar.css';

const Navbar = () => {
    const navbarRef = useRef(null);
    const linksRef = useRef([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                navbarRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );

            gsap.fromTo(
                linksRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.3 }
            );

        }, navbarRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

   const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' }, // ✅ Added
  { id: 'contact', label: 'Contact' }
];

    return (
        <nav
            ref={navbarRef}
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            style={{ zIndex: 9999 }}
        >
            <div className="container nav-container">

                <div className="logo">
                    <span className="gradient-text">Souvik Chel</span>
                </div>

                <ul className="nav-links desktop-nav">
                    {navLinks.map((link, index) => (
                        <li key={link.id}>
                            <a
                                ref={(el) => linksRef.current[index] = el}
                                href={`#${link.id}`}
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.id);
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="btn btn-primary nav-cta"
                    onClick={() => scrollToSection('contact')}
                >
                    Let's Talk
                </button>

                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className="nav-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.id);
                                    }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;