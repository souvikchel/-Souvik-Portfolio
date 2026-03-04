import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTrophy, FaAward, FaMedal, FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(sectionRef.current.querySelector("h2"), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 1
      });

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%"
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out"
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

  const achievements = [
    {
      icon: <FaTrophy />,
      title: "IEEE Smart Village Winner 2024",
      desc: "Won $2,217 International Funding for innovative EV Project."
    },
    {
      icon: <FaAward />,
      title: "₹3 Lakh Institutional Funding",
      desc: "Secured funding for EV project development."
    },
    {
      icon: <FaMedal />,
      title: "Rank 13 – National Writing Contest",
      desc: "Published in anthology 'Creative Quills' (2024–25)."
    },
    {
      icon: <FaStar />,
      title: "Top 10 – The Trailblazers 2025",
      desc: "Certificate of Distinction for youth impact article."
    },
    {
      icon: <FaStar />,
      title: "TechBreaker Startup Validation",
      desc: "Global Jury Validation & RV Certificate received."
    },
    {
      icon: <FaStar />,
      title: "IIT KGP – Kshitij 2026 Workshop",
      desc: "Completed Web Development Workshop (May–June 2025)."
    }
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      style={{
        padding: "100px 20px",
        background: "#000",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            background: "linear-gradient(90deg,#6366f1,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Awards & Accomplishments
        </h2>

        <p style={{ marginBottom: "50px", opacity: 0.8 }}>
          Recognitions, funding achievements, national rankings and global validations.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}
        >
          {achievements.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              style={{
                padding: "30px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "0.3s ease"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div style={{ fontSize: "40px", marginBottom: "20px", color: "#6366f1" }}>
                {item.icon}
              </div>

              <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ opacity: 0.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;