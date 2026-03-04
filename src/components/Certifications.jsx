import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Certifications = () => {

  const [index, setIndex] = useState(0);
  const imgRef = useRef(null);

  const certificates = [
    "/certificates/cert1.jpg",
    "/certificates/cert2.jpg",
    "/certificates/cert3.jpg",
    "/certificates/cert4.jpg",
    "/certificates/cert5.jpg",
    "/certificates/cert6.jpg",
    "/certificates/cert7.jpg",
    "/certificates/cert8.jpg",
    "/certificates/cert9.jpg",
    "/certificates/cert10.jpg"
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  /* Smooth animation when slide changes */
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [index]);

  /* Auto slide every 4 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="certifications"
      style={{
        background: "#000",
        padding: "100px 20px",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <h2
        style={{
          fontSize: "2.2rem",
          marginBottom: "60px",
          background: "linear-gradient(90deg,#6366f1,#ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        Certifications
      </h2>

      {/* Slider container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "25px"
        }}
      >

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            cursor: "pointer",
            backdropFilter: "blur(10px)"
          }}
        >
          ❮
        </button>

        {/* Certificate with glow */}
        <div
          style={{
            padding: "10px",
            borderRadius: "14px",
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(236,72,153,0.4))",
            boxShadow:
              "0 0 40px rgba(99,102,241,0.4), 0 0 60px rgba(236,72,153,0.2)"
          }}
        >
          <img
            ref={imgRef}
            src={certificates[index]}
            alt="certificate"
            style={{
              width: "520px",
              maxWidth: "90vw",
              borderRadius: "10px"
            }}
          />
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            cursor: "pointer",
            backdropFilter: "blur(10px)"
          }}
        >
          ❯
        </button>

      </div>
    </section>
  );
};

export default Certifications;