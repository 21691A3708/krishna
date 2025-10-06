import React, { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import Cybersecurity from "../assets/Cybersecurity_Essentials_certificate_chinnikrishna2004krishnak-gmail-com_0c7b5170-24e5-419b-801b-f886e7941fea_page-0001.jpg";
import Privacy from "../assets/Privacy and Security in Online Social Media_pages-to-jpg-0001.jpg";
import Business from "../assets/Business Analytics & Text Mining Modeling using Python_page-0001.jpg";
import Mern from "../assets/VcreatecIntenship.jpg";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "MERN Stack Development | Internship Completed",
      issuer: "VCreatech PVT LTD | MMRFIC",
      year: "2025",
      icon: "fas fa-laptop-code",
      color: "#0D47A1", // Deep Blue
      bgColor: "#E3F2FD", // Light Blue
      certificateImage: Mern,
      details:
        "Completed internship in MERN stack development, building full stack web applications with MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "CISCO",
      year: "2024",
      icon: "fas fa-shield-alt",
      color: "#D32F2F", // Deep Red
      bgColor: "#FFEBEE", // Light Red
      certificateImage: Cybersecurity,
      details:
        "Completed Cisco Cybersecurity Essentials covering fundamental cybersecurity concepts, network security, and threat protection methodologies.",
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      year: "2024",
      icon: "fas fa-lock",
      color: "#00796B", // Teal Green
      bgColor: "#E0F2F1", // Light Teal
      certificateImage: Privacy,
      details:
        "Completed advanced course on online privacy, security measures, and data protection strategies in social media platforms.",
    },
    {
      title: "Business Analytics & Text Mining Modelling using Python",
      issuer: "NPTEL",
      year: "2024",
      icon: "fas fa-chart-line",
      color: "#5D4037", // Brown
      bgColor: "#EFEBE9", // Light Brown
      certificateImage: Business,
      details:
        "Mastered Business Analytics & Text Mining Modelling using Python with practical projects and data analysis techniques.",
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Calculate cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1200) {
        setCardsPerView(4); // XL screens
      } else if (window.innerWidth >= 992) {
        setCardsPerView(3); // LG screens
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // MD screens
      } else {
        setCardsPerView(1); // SM screens
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handleClickOutside = (e) => {
    if (e.target.id === "modalOverlay") setSelectedCert(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= certifications.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - cardsPerView : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate visible certifications
  const visibleCerts = certifications.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  // Calculate total slides
  const totalSlides = Math.ceil(certifications.length / cardsPerView);
  const currentSlide = Math.floor(currentIndex / cardsPerView);

  return (
    <section
      id="certifications"
      className="py-5"
      style={{
        backgroundColor: "#F8FAFC",
        background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
      }}>
      <div className="container">
        <SectionTitle title="Awards & Certifications" />

        {/* Carousel Container */}
        <div className="position-relative">
          {/* Navigation Arrows */}
          {certifications.length > cardsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="btn position-absolute start-0 top-50 translate-middle-y d-none d-md-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "white",
                  border: "2px solid #E2E8F0",
                  color: "#0D47A1",
                  fontSize: "1.2rem",
                  zIndex: 10,
                  left: "-25px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#0D47A1";
                  e.target.style.color = "white";
                  e.target.style.borderColor = "#0D47A1";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.color = "#0D47A1";
                  e.target.style.borderColor = "#E2E8F0";
                  e.target.style.transform = "scale(1)";
                }}>
                ‹
              </button>

              <button
                onClick={nextSlide}
                className="btn position-absolute end-0 top-50 translate-middle-y d-none d-md-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "white",
                  border: "2px solid #E2E8F0",
                  color: "#0D47A1",
                  fontSize: "1.2rem",
                  zIndex: 10,
                  right: "-25px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#0D47A1";
                  e.target.style.color = "white";
                  e.target.style.borderColor = "#0D47A1";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.color = "#0D47A1";
                  e.target.style.borderColor = "#E2E8F0";
                  e.target.style.transform = "scale(1)";
                }}>
                ›
              </button>
            </>
          )}

          {/* Certifications Grid */}
          <div className="row justify-content-center g-4">
            {visibleCerts.map((cert, idx) => (
              <div
                key={idx}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                style={{ minHeight: "280px" }}>
                <CertificationCard
                  certification={cert}
                  onClick={() => setSelectedCert(cert)}
                />
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          {totalSlides > 1 && (
            <div className="d-flex justify-content-center align-items-center mt-4 gap-2">
              {/* Mobile Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="btn d-md-none d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "white",
                  border: "2px solid #E2E8F0",
                  color: "#0D47A1",
                  fontSize: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#0D47A1";
                  e.target.style.color = "white";
                  e.target.style.borderColor = "#0D47A1";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.color = "#0D47A1";
                  e.target.style.borderColor = "#E2E8F0";
                }}>
                ‹
              </button>

              {/* Dots */}
              <div className="d-flex gap-2 mx-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index * cardsPerView)}
                    className="btn p-0 border-0"
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor:
                        currentSlide === index ? "#0D47A1" : "#CBD5E1",
                      transition: "all 0.3s ease",
                      transform:
                        currentSlide === index ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                ))}
              </div>

              {/* Mobile Navigation Buttons */}
              <button
                onClick={nextSlide}
                className="btn d-md-none d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "white",
                  border: "2px solid #E2E8F0",
                  color: "#0D47A1",
                  fontSize: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#0D47A1";
                  e.target.style.color = "white";
                  e.target.style.borderColor = "#0D47A1";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.color = "#0D47A1";
                  e.target.style.borderColor = "#E2E8F0";
                }}>
                ›
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          id="modalOverlay"
          onClick={handleClickOutside}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 1050,
            animation: "fadeIn 0.3s ease-in-out",
            padding: "1rem",
          }}>
          <div
            className="bg-white position-relative"
            style={{
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              animation: "slideUp 0.3s ease-out",
            }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="btn position-absolute"
              style={{
                top: "15px",
                right: "15px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.9)",
                border: "none",
                fontSize: "1.5rem",
                color: "#334155",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#0D47A1";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.9)";
                e.target.style.color = "#334155";
              }}>
              &times;
            </button>

            {/* Certificate Image */}
            <div
              className="d-flex justify-content-center align-items-center p-4"
              style={{
                background: selectedCert.bgColor,
                minHeight: "300px",
                transition: "all 0.3s ease",
              }}>
              <img
                src={selectedCert.certificateImage}
                alt={selectedCert.title}
                style={{
                  maxHeight: "250px",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "10px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                }}
              />
            </div>

            {/* Certificate Details */}
            <div className="p-4">
              <h4
                style={{
                  color: selectedCert.color,
                  textAlign: "center",
                  marginBottom: "0.5rem",
                  fontWeight: "700",
                }}>
                {selectedCert.title}
              </h4>
              <p
                style={{
                  textAlign: "center",
                  color: "#64748B",
                  marginBottom: "0.25rem",
                  fontWeight: "600",
                }}>
                {selectedCert.issuer}
              </p>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                }}>
                <span
                  className="badge fw-semibold"
                  style={{
                    background: selectedCert.color,
                    color: "white",
                    fontSize: "0.8rem",
                    padding: "0.4rem 0.8rem",
                  }}>
                  {selectedCert.year}
                </span>
              </div>
              <p
                style={{
                  textAlign: "center",
                  color: "#475569",
                  lineHeight: "1.6",
                  margin: 0,
                }}>
                {selectedCert.details}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

const CertificationCard = ({ certification, onClick }) => (
  <div
    onClick={onClick}
    className="card h-100 shadow-sm border-0 position-relative"
    style={{
      borderRadius: "16px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      overflow: "hidden",
      background: "linear-gradient(135deg, #FFFFFF, #F8FAFC)",
      height: "280px",
      border: `1px solid ${certification.bgColor}`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
      e.currentTarget.style.background = certification.bgColor;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
      e.currentTarget.style.background =
        "linear-gradient(135deg, #FFFFFF, #F8FAFC)";
    }}>
    {/* Color Accent */}
    <div
      style={{
        height: "4px",
        background: `linear-gradient(90deg, ${certification.color}, ${certification.color}99)`,
        width: "100%",
      }}
    />

    <div className="card-body d-flex flex-column justify-content-between p-3">
      {/* Icon */}
      <div className="text-center mb-2">
        <i
          className={`${certification.icon} fa-2x`}
          style={{
            color: certification.color,
            transition: "all 0.3s ease",
          }}></i>
      </div>

      {/* Content */}
      <div className="text-center flex-grow-1 d-flex flex-column justify-content-center">
        <h6
          className="fw-bold mb-2"
          style={{
            color: "#1E293B",
            lineHeight: "1.3",
            fontSize: "0.9rem",
            minHeight: "2.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}>
          {certification.title}
        </h6>
        <p
          className="mb-2 small"
          style={{
            color: "#64748B",
            fontSize: "0.8rem",
            lineHeight: "1.2",
            transition: "all 0.3s ease",
          }}>
          {certification.issuer}
        </p>
      </div>

      {/* Year Badge */}
      <div className="text-center mt-2">
        <span
          className="badge fw-semibold"
          style={{
            background: certification.color,
            color: "white",
            fontSize: "0.7rem",
            padding: "0.25rem 0.6rem",
            transition: "all 0.3s ease",
          }}>
          {certification.year}
        </span>
      </div>
    </div>
  </div>
);

export default CertificationsSection;
