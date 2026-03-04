import '../styles/Footer.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (

        <footer className="footer">

            <div className="container">

                <div className="footer-content">

                    {/* BRAND */}

                    <div className="footer-brand">
                        <h3 className="gradient-text">Souvik Chel</h3>
                        <p>Passionate about building impactful software and intelligent technologies.</p>
                    </div>

                    <div className="footer-links">

                        {/* NAVIGATION */}

                        <div className="footer-column">
                            <h4>Navigation</h4>

                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#achievements">Achievements</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>


                        {/* CONNECT */}

                        <div className="footer-column">
                            <h4>Connect</h4>

                            <ul>

                                <li>
                                    <a
                                        href="https://github.com/souvikchel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/souvikchel83"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://twitter.com/souvikchel2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Twitter / X
                                    </a>
                                </li>

                            </ul>
                        </div>


                        {/* CONTACT */}

                        <div className="footer-column">

                            <h4>Contact</h4>

                            <ul>

                                <li>
                                    <a href="mailto:souvikchel@gmail.com">
                                        souvikchel@gmail.com
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        Sonamukhi, Bankura, West Bengal
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        Resume
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>


                {/* FOOTER BOTTOM */}

                <div className="footer-bottom">

                    <p>
                        © {currentYear} Souvik Chel. All rights reserved.
                    </p>

                    <button
                        className="back-to-top"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="12" y1="19" x2="12" y2="5"></line>
                            <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>

                    </button>

                </div>

            </div>

        </footer>

    );

};

export default Footer;