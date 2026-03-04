import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

  const cardsRef = useRef([]);

  useEffect(() => {

    cardsRef.current.forEach((card) => {

      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );

    });

  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (

    <section
      id="experience"
      style={{
        padding: "110px 20px",
        background: "#050505",
        color: "#fff"
      }}
    >

      <div style={{ maxWidth: "1000px", margin: "auto" }}>

        {/* TITLE */}

        <h2
          style={{
            textAlign: "center",
            fontSize: "2.6rem",
            marginBottom: "80px",
            background: "linear-gradient(90deg,#6366f1,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Experience & Achievements
        </h2>


        {/* TIMELINE */}

        <div
          style={{
            position: "relative",
            borderLeft: "2px solid rgba(255,255,255,0.1)",
            paddingLeft: "40px"
          }}
        >

          {/* EXPERIENCE 1 */}

          <div
            ref={addToRefs}
            style={{
              marginBottom: "60px",
              position: "relative"
            }}
          >

            {/* DOT */}

            <div
              style={{
                position: "absolute",
                left: "-49px",
                top: "5px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "linear-gradient(90deg,#6366f1,#ec4899)"
              }}
            />

            <h3 style={{ fontSize: "1.4rem", marginBottom: "6px" }}>
              AI, IoT & ML Intern
            </h3>

            <p style={{ opacity: 0.7 }}>
              SMART Society USA × National University of Singapore
            </p>

            <p style={{ opacity: 0.6, marginBottom: "12px" }}>
              Jun 2024 · Singapore
            </p>

            <p style={{ opacity: 0.9, lineHeight: "1.6" }}>
              Completed an international internship focused on Artificial
              Intelligence, IoT systems, Machine Learning and Data Analytics.
              Worked on developing intelligent solutions using modern AI
              technologies.
            </p>

          </div>



          {/* EXPERIENCE 2 */}

          <div
            ref={addToRefs}
            style={{
              marginBottom: "60px",
              position: "relative"
            }}
          >

            {/* DOT */}

            <div
              style={{
                position: "absolute",
                left: "-49px",
                top: "5px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "linear-gradient(90deg,#6366f1,#ec4899)"
              }}
            />

            <h3 style={{ fontSize: "1.4rem", marginBottom: "6px" }}>
              Junior Researcher
            </h3>

            <p style={{ opacity: 0.7 }}>
              IIFR Lab · Kolkata
            </p>

            <p style={{ opacity: 0.6, marginBottom: "12px" }}>
              Feb 2024 – Present
            </p>

            <p style={{ opacity: 0.9, lineHeight: "1.6" }}>
              Contributing to software and hardware research projects,
              focusing on system design, development, and implementation
              of innovative technology solutions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;