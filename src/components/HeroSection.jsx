import React, { useState, useEffect } from "react";
import MyPhoto from "../assets/image_20142.jpg";
import MyResume from "../assets/Chinni_Krishna_Resume.pdf";

// ==================== TYPEWRITER ====================
const TypewriterText = ({ texts, speed = 120, delay = 1500 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) setIndex(0);

    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? speed / 2 : speed
    );

    setDisplayText(texts[index].substring(0, subIndex));
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, delay]);

  return (
    <span style={{ color: "#F59E0B" }}>
      {displayText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

// ==================== HERO SECTION WITH ABOUT ME ====================
const HeroSection = ({ displayText }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);

      let currentSection = "home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop - 100 <= scrollPosition) {
          currentSection = item.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const roles = [
    "MERN Full Stack Developer",
    "Problem Solver",
    "Tech Explorer",
    "Research & Development",
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* COMPACT NAVBAR */}
      <header
        className="fixed-top"
        style={{
          height: isScrolled ? "60px" : "70px",
          background: isScrolled
            ? "rgba(255, 255, 255, 0.98)"
            : "rgba(255, 255, 255, 0.97)",
          backdropFilter: "blur(20px)",
          boxShadow: isScrolled ? "0 2px 15px rgba(0,0,0,0.08)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.04)" : "none",
          zIndex: 1000,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: "0 0.5rem",
        }}>
        <div className="container-fluid h-100 px-2 px-sm-3 px-md-4">
          <div className="d-flex justify-content-between align-items-center h-100">
            {/* Compact Brand Logo */}
            <div
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection("home")}>
              <h1
                className="m-0"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: isScrolled ? "1.3rem" : "1.5rem",
                  letterSpacing: "0.3px",
                  transition: "all 0.3s ease",
                  padding: "4px 0",
                }}>
                {isScrolled ? "Portfolio" : "Portfolio"}
              </h1>
            </div>

            {/* Compact Desktop Navigation */}
            <nav className="d-none d-lg-flex align-items-center gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="btn p-0 border-0 bg-transparent position-relative"
                  style={{
                    color: activeSection === item.id ? "#F59E0B" : "#64748B",
                    fontSize: "0.9rem",
                    fontWeight: activeSection === item.id ? "600" : "500",
                    transition: "all 0.2s ease",
                    padding: "6px 8px",
                    borderRadius: "6px",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.color = "#334155";
                      e.target.style.background = "rgba(245, 158, 11, 0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.color = "#64748B";
                      e.target.style.background = "transparent";
                    }
                  }}>
                  {item.label}
                  {activeSection === item.id && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "8px",
                        right: "8px",
                        height: "2px",
                        background: "linear-gradient(90deg, #F59E0B, #FBBF24)",
                        borderRadius: "1px",
                      }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Compact Mobile Menu Button */}
            <div className="d-lg-none">
              <button
                className="btn p-2 rounded-2"
                style={{
                  fontSize: "1.3rem",
                  color: "#334155",
                  background: "rgba(245, 158, 11, 0.05)",
                  border: "1px solid rgba(245, 158, 11, 0.1)",
                  transition: "all 0.2s ease",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen(!menuOpen);
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(245, 158, 11, 0.1)";
                  e.target.style.borderColor = "rgba(245, 158, 11, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(245, 158, 11, 0.05)";
                  e.target.style.borderColor = "rgba(245, 158, 11, 0.1)";
                }}>
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FIXED: COMPACT MOBILE MENU - No Right Gap */}
      <div
        className={`position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center d-lg-none ${
          menuOpen ? "menu-open" : "menu-closed"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.99) 0%, rgba(249,250,251,0.99) 100%)",
          backdropFilter: "blur(25px)",
          zIndex: 999,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          padding: "0", // REMOVED padding that was causing the gap
          left: 0,
          right: 0,
          margin: 0,
          width: "100vw", // Use viewport width
          maxWidth: "100vw", // Ensure no max width restriction
          overflow: "hidden",
        }}>
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="btn p-3 border-0 bg-transparent w-100 text-center rounded-0 my-1" // Changed rounded-3 to rounded-0
              style={{
                fontSize: "1.3rem",
                fontWeight: activeSection === item.id ? "700" : "500",
                color: activeSection === item.id ? "#F59E0B" : "#334155",
                background:
                  activeSection === item.id
                    ? "rgba(245, 158, 11, 0.1)"
                    : "transparent",
                transition: "all 0.3s ease",
                transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                transitionDelay: menuOpen ? `${index * 0.08}s` : "0s",
                border: "none",
                borderBottom: "1px solid rgba(245, 158, 11, 0.1)", // Added bottom border instead
                maxWidth: "100%",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.background = "rgba(245, 158, 11, 0.05)";
                  e.target.style.color = "#F59E0B";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#334155";
                }
              }}>
              {item.label}
            </button>
          ))}

          {/* Close hint for mobile */}
          <div
            className="mt-4 text-center position-absolute"
            style={{
              color: "#94A3B8",
              fontSize: "0.9rem",
              bottom: "2rem",
              left: 0,
              right: 0,
            }}>
            Tap anywhere to close
          </div>
        </div>
      </div>

      {/* HERO CONTENT */}
      <section
        id="home"
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)",
          paddingTop: "70px",
          position: "relative",
          overflow: "hidden",
        }}>
        {/* Background Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "300px",
            height: "300px",
            background:
              "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%)",
            borderRadius: "50%",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "200px",
            height: "200px",
            background:
              "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(251, 191, 36, 0.03) 100%)",
            borderRadius: "50%",
            filter: "blur(30px)",
            zIndex: 0,
          }}
        />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center justify-content-center">
            {/* Profile Image */}
            <div className="col-12 col-lg-5 d-flex justify-content-center mb-5 mb-lg-0">
              <div
                style={{
                  width: "min(280px, 70vw)",
                  height: "min(280px, 70vw)",
                  background: "linear-gradient(145deg, #FFF9ED, #FFEDC2)",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: `
                    0 20px 60px rgba(245, 158, 11, 0.15),
                    0 0 0 1px rgba(245, 158, 11, 0.05),
                    inset 0 2px 8px rgba(255, 255, 255, 0.8)
                  `,
                  position: "relative",
                  transition: "all 0.4s ease",
                }}
                className="hover-lift">
                <img
                  src={MyPhoto}
                  alt="Chinni Krishna - Full Stack Developer"
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.4s ease",
                  }}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <div className="px-2 px-md-3">
                {" "}
                {/* Reduced padding */}
                {/* Greeting */}
                <h4
                  style={{
                    color: "#F59E0B",
                    fontSize: "clamp(1rem, 4vw, 1.25rem)",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}>
                  Hello, I'm
                </h4>
                {/* Name */}
                <h1
                  style={{
                    fontSize: "clamp(2rem, 8vw, 3.5rem)",
                    color: "#1E293B",
                    fontWeight: "800",
                    lineHeight: "1.1",
                    marginBottom: "1rem",
                    background:
                      "linear-gradient(135deg, #1E293B 0%, #334155 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}>
                  {displayText}
                </h1>
                {/* Typewriter Roles */}
                <h2
                  style={{
                    fontSize: "clamp(1rem, 4vw, 1.4rem)",
                    color: "#475569",
                    fontWeight: "500",
                    lineHeight: "1.4",
                    minHeight: "4rem",
                    marginBottom: "2rem",
                  }}>
                  <TypewriterText texts={roles} speed={100} delay={2000} />
                </h2>
                {/* Action Buttons */}
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start align-items-center">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="btn fw-semibold px-4 py-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
                      color: "#FFFFFF",
                      borderRadius: "50px",
                      border: "none",
                      fontSize: "1rem",
                      minWidth: "160px",
                      boxShadow: "0 8px 25px rgba(245, 158, 11, 0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 12px 35px rgba(245, 158, 11, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 8px 25px rgba(245, 158, 11, 0.3)";
                    }}>
                    View My Work
                  </button>

                  <a
                    href={MyResume}
                    download="Chinni_Krishna_Resume.pdf"
                    className="btn fw-semibold px-4 py-3"
                    style={{
                      background: "transparent",
                      color: "#334155",
                      borderRadius: "50px",
                      border: "2px solid #E2E8F0",
                      fontSize: "1rem",
                      minWidth: "160px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#334155";
                      e.target.style.color = "#FFFFFF";
                      e.target.style.borderColor = "#334155";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#334155";
                      e.target.style.borderColor = "#E2E8F0";
                      e.target.style.transform = "translateY(0)";
                    }}>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        className="container-fluid py-5"
        style={{
          background:
            "linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 50%, #F1F5F9 100%)",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
        }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              {/* Section Header */}
              <div className="text-center mb-5">
                <h2
                  style={{
                    fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                    fontWeight: "700",
                    color: "#1E293B",
                    marginBottom: "1rem",
                  }}>
                  About <span style={{ color: "#F59E0B" }}>Me</span>
                </h2>
                <div
                  style={{
                    width: "80px",
                    height: "4px",
                    background: "linear-gradient(90deg, #F59E0B, #FBBF24)",
                    borderRadius: "2px",
                    margin: "0 auto",
                  }}
                />
              </div>

              {/* About Content */}
              <div className="row align-items-center">
                <div className="col-12 col-md-8">
                  <div className="pe-md-4">
                    <p
                      style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.7",
                        color: "#475569",
                        marginBottom: "1.5rem",
                        textAlign: "justify",
                      }}>
                      I'm a passionate <strong>Full Stack Developer</strong>{" "}
                      with expertise in the MERN stack, dedicated to creating
                      efficient, scalable, and user-friendly web applications.
                      With a strong foundation in both front-end and back-end
                      technologies, I thrive on turning complex problems into
                      elegant solutions.
                    </p>

                    <p
                      style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.7",
                        color: "#475569",
                        marginBottom: "1.5rem",
                        textAlign: "justify",
                      }}>
                      My journey in web development started with a curiosity
                      about how things work, which evolved into a passion for
                      building digital experiences that make a difference. I
                      enjoy working on challenging projects that push my
                      boundaries and allow me to continuously learn and grow as
                      a developer.
                    </p>

                    {/* Key Points */}
                    <div className="row mt-4">
                      <div className="col-12 col-sm-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              background: "#F59E0B",
                              borderRadius: "50%",
                              marginRight: "12px",
                            }}
                          />
                          <span style={{ color: "#334155", fontWeight: "500" }}>
                            Problem Solving
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              background: "#F59E0B",
                              borderRadius: "50%",
                              marginRight: "12px",
                            }}
                          />
                          <span style={{ color: "#334155", fontWeight: "500" }}>
                            Clean Code
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              background: "#F59E0B",
                              borderRadius: "50%",
                              marginRight: "12px",
                            }}
                          />
                          <span style={{ color: "#334155", fontWeight: "500" }}>
                            User Experience
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              background: "#F59E0B",
                              borderRadius: "50%",
                              marginRight: "12px",
                            }}
                          />
                          <span style={{ color: "#334155", fontWeight: "500" }}>
                            Continuous Learning
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats/Highlights */}
                <div className="col-12 col-md-4 mt-4 mt-md-0">
                  <div
                    style={{
                      background: "linear-gradient(135deg, #FFF9ED, #FFFBEB)",
                      borderRadius: "20px",
                      padding: "2rem",
                      boxShadow: "0 10px 40px rgba(245, 158, 11, 0.1)",
                      border: "1px solid rgba(245, 158, 11, 0.1)",
                    }}>
                    <div className="text-center">
                      <h3
                        style={{
                          color: "#F59E0B",
                          fontWeight: "700",
                          marginBottom: "1.5rem",
                        }}>
                        Quick Facts
                      </h3>

                      <div className="mb-3">
                        <div
                          style={{
                            fontSize: "2rem",
                            fontWeight: "700",
                            color: "#1E293B",
                          }}>
                          0.6+
                        </div>
                        <div style={{ color: "#64748B", fontSize: "0.9rem" }}>
                          Years Experience
                        </div>
                      </div>

                      <div className="mb-3">
                        <div
                          style={{
                            fontSize: "2rem",
                            fontWeight: "700",
                            color: "#1E293B",
                          }}>
                          2+
                        </div>
                        <div style={{ color: "#64748B", fontSize: "0.9rem" }}>
                          Projects Completed
                        </div>
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: "2rem",
                            fontWeight: "700",
                            color: "#1E293B",
                          }}>
                          MERN
                        </div>
                        <div style={{ color: "#64748B", fontSize: "0.9rem" }}>
                          Tech Stack
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s infinite;
          color: #f59e0b;
          font-weight: 400;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .menu-closed {
          transform: translateX(-100%);
        }

        .menu-open {
          transform: translateX(0);
        }

        /* Ensure no horizontal scroll and full width */
        body,
        html {
          overflow-x: hidden;
          width: 100%;
          max-width: 100%;
        }

        /* Mobile menu specific fixes */
        @media (max-width: 991.98px) {
          .container-fluid {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
