import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".contact .section-title", {
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 85%"
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
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

  // EMAILJS SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(() => {

      alert("Message sent successfully 🚀");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    })
    .catch((error) => {

      console.log(error);
      alert("Failed to send message ❌");

    });

  };

  const contactMethods = [

    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "souvikchel@gmail.com"
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Sonamukhi, Bankura, West Bengal"
    }

  ];

  return (

    <section id="contact" className="contact section" ref={sectionRef}>

      <div className="container">

        <h2 className="section-title">
          Let's Work Together
        </h2>

        <p className="section-description">
          Interested in discussing a project or collaboration opportunity? Feel free to reach out.
        </p>

        <div className="contact-container">

          {/* CONTACT FORM */}

          <div className="contact-form glass-card">

            <h3 className="gradient-text-secondary">
              Send a Message
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              autoComplete="off"
            >

              <div className="form-group">

                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  placeholder="Your Name"
                />

              </div>

              <div className="form-group">

                <label>Your Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  placeholder="your@email.com"
                />

              </div>

              <div className="form-group">

                <label>Your Message</label>

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  placeholder="Write your message here..."
                />

              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* CONTACT INFO */}

          <div className="contact-info">

            <h3 className="gradient-text-secondary">
              Get In Touch
            </h3>

            <div className="contact-methods">

              {contactMethods.map((method, index) => (

                <div
                  key={index}
                  className="contact-method glass-card"
                >

                  <div className="method-icon">
                    {method.icon}
                  </div>

                  <div className="method-details">
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                  </div>

                </div>

              ))}

            </div>

            {/* FOLLOW ME */}

            <div className="social-section">

              <h4>Follow Me</h4>

              <div className="social-links">

                <a
                  href="mailto:souvikchel@gmail.com"
                  className="social-link email"
                  title="Email"
                >
                  <FaEnvelope />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Contact;