import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const heroRef = useRef(null);
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const socialRef = useRef(null);
  const canvasRef = useRef(null);

  /* ================= REFINED ENTRANCE ANIMATION ================= */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.set([iconRef.current, titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 30,
      })
      .set(socialRef.current.children, { opacity: 0, scale: 0.5 })
      .to([iconRef.current, titleRef.current, subtitleRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
      .to(socialRef.current.children, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }, "-=0.4");

      gsap.to(iconRef.current, {
        y: 12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  /* ================= NEURAL NETWORK BACKGROUND ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrame;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          this.x -= dx / 50;
          this.y -= dy / 50;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.4)"; // Indigo tint
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const count = (canvas.width * canvas.height) / 15000; // Density
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - dist / 120 - 0.7})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const iconStyle = {
    color: "#ffffff",
    fontSize: "30px",
    cursor: "pointer",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
        background: "#030014" // Deep space midnight
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      {/* Decorative Blur Blobs for depth */}
      <div style={{
        position: "absolute",
        width: "40vw",
        height: "40vw",
        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        top: "-10%",
        left: "-10%",
        filter: "blur(80px)",
        pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", padding: "0 20px" }}>
        
        <img
          ref={iconRef}
          src="/icon.png"
          alt="Souvik Chel"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            marginBottom: "25px",
            border: "2px solid rgba(99, 102, 241, 0.3)",
            padding: "5px"
          }}
        />

        <h1 ref={titleRef} style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", marginBottom: "15px" }}>
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#6366f1,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Souvik Chel
          </span>
          <br />
          <span style={{ fontSize: "0.6em", opacity: 0.9 }}>Full-Stack Developer</span>
        </h1>

        <p
          ref={subtitleRef}
          style={{
            fontSize: "1.1rem",
            color: "#94a3b8",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            maxWidth: "700px",
            marginInline: "auto",
            lineHeight: "1.6"
          }}
        >
          <FaCode style={{ color: "#6366f1", flexShrink: 0 }} />
          Crafting scalable digital solutions and architectural web experiences 
          through clean, efficient code.
        </p>

        <div
          ref={socialRef}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px"
          }}
        >
          {[
            { Icon: FaGithub, link: "https://github.com/souvikchel" },
            { Icon: FaLinkedin, link: "https://www.linkedin.com/in/souvikchel83" },
            { Icon: SiLeetcode, link: "https://leetcode.com/u/souvikchel/" },
            { Icon: FaEnvelope, link: "mailto:souvikchel@gmail.com" }
          ].map(({ Icon, link }, idx) => (
            <a 
              key={idx} 
              href={link} 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              style={{ transition: "0.3s" }}
            >
              <Icon style={iconStyle} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;