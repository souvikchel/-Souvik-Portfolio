import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaAws,
  FaLinux,
  FaJava,
  FaDatabase,
  FaNetworkWired,
  FaProjectDiagram,
  FaCogs,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiCplusplus,
  SiKotlin,
  SiSupabase,
  SiOracle
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import "../styles/Skills.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".skills .section-title", {
        scrollTrigger: {
          trigger: ".skills",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8
      });

      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  const skillCategories = [

    {
      name: "Frontend",
      skills: [
        { name: "HTML", level: 95, icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS", level: 90, icon: <FaCss3Alt color="#1572B6" /> },
        { name: "React", level: 90, icon: <FaReact color="#61DBFB" /> },
        { name: "JavaScript", level: 92, icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", level: 85, icon: <SiTypescript color="#3178C6" /> },
        { name: "Redux", level: 80, icon: <SiRedux color="#764ABC" /> },
        { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss color="#38BDF8" /> }
      ],
    },

    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 88, icon: <FaNodeJs color="#68A063" /> },
        { name: "Express.js", level: 85, icon: <SiExpress color="#ffffff" /> },
        { name: "MongoDB", level: 85, icon: <SiMongodb color="#4DB33D" /> },
        { name: "PostgreSQL", level: 75, icon: <SiPostgresql color="#336791" /> },
        { name: "MySQL", level: 80, icon: <SiMysql color="#00758F" /> }
      ],
    },

    {
      name: "Programming Languages",
      skills: [
        { name: "C", level: 80, icon: <SiCplusplus color="#A8B9CC" /> },
        { name: "C++", level: 82, icon: <SiCplusplus color="#00599C" /> },
        { name: "Python", level: 85, icon: <FaPython color="#3776AB" /> },
        { name: "Java", level: 80, icon: <FaJava color="#f89820" /> }
        
      ],
    },

    {
      name: "Core CS Fundamentals",
      skills: [
        { name: "Data Structures & Algorithms", level: 88, icon: <FaProjectDiagram color="#3B82F6" /> },
        { name: "Object-Oriented Programming", level: 90, icon: <FaCogs color="#F59E0B" /> },
        { name: "Database Management Systems", level: 85, icon: <FaDatabase color="#EF4444" /> },
        { name: "Operating Systems", level: 82, icon: <FaLinux color="#FCC624" /> },
        { name: "Computer Networks", level: 80, icon: <FaNetworkWired color="#22C55E" /> }
      ],
    },

    {
      name: "Database",
      skills: [
        { name: "SQL", level: 88, icon: <FaDatabase color="#2563EB" /> },
        { name: "MySQL", level: 85, icon: <SiMysql color="#00758F" /> },
        { name: "Oracle", level: 80, icon: <SiOracle color="#F80000" /> },
        { name: "Supabase", level: 80, icon: <SiSupabase color="#3ECF8E" /> }
      ],
    },

    {
      name: "Tools & Platforms",
      skills: [
        { name: "Git & Github", level: 92, icon: <FaGitAlt color="#F1502F" /> },
        { name: "VS Code", level: 95, icon: <VscVscode color="#007ACC" /> },
        { name: "Android Studio", level: 85, icon: <SiKotlin color="#A97BFF" /> },
        { name: "Linux / Unix", level: 80, icon: <FaLinux color="#FCC624" /> },
        { name: "Docker", level: 75, icon: <FaDocker color="#0db7ed" /> },
        { name: "AWS", level: 70, icon: <FaAws color="#FF9900" /> }
      ],
    }

  ];

  return (

    <section id="skills" className="skills section" ref={sectionRef}>

      <div className="container">

        <h2 className="section-title">
          Skills & Expertise
        </h2>

        <p className="section-description">
          Full-Stack Developer with strong CS fundamentals and modern development tools.
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
                  >

                    <div className="skill-icon" style={{ fontSize: "32px" }}>
                      {skill.icon}
                    </div>

                    <div className="skill-info">

                      <h4 className="skill-name">
                        {skill.name}
                      </h4>

                      <div className="skill-bar">

                        <div
                          className="skill-progress"
                          style={{ "--skill-level": `${skill.level}%` }}
                        >

                          <span className="skill-level">
                            {skill.level}%
                          </span>

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