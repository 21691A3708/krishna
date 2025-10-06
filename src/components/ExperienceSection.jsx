import React from "react";
import SectionTitle from "./SectionTitle";
import {
  FaCheckCircle,
  FaBuilding,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";
import Compony from "../assets/intenlogo.png";
const ExperienceSection = () => {
  const experiences = [
    {
      title: "MERN Full Stack Developer Intern",
      company: "VCreatech Labs Pvt Ltd | MMRFIC,",
      mapUrl: "https://maps.app.goo.gl/bnkmFbQs5EbBSjht5",
      location: " Bangalore",
      period: "March 2025 - Oct 2025",
      logo: Compony,
      achievements: [
        "Developed and Customized ERP modules, improving performance, scalability, and operational visibility by ~23%.",
        "Enhanced ERP workflows, increasing efficiency by ~20% and reducing manual processing time by ~30%.",
        "Optimized API handling and database queries, reducing API latency by ~25%.",
        "Implemented ACID-compliant operations, indexing, and schema validation in MongoDB, reducing query response time by ~22%.",
        "Collaborated in an agile team environment using Git and Postman for API testing.",
      ],
      techStack: ["React JS", "Node JS", "Express JS", "MongoDB"],
    },
  ];

  return (
    <section id="experience" className="py-5" style={{ background: "#f9fafc" }}>
      <div className="container">
        <SectionTitle title="Work Experience" />

        <div className="row g-5 mt-4 position-relative">
          {/* Timeline line */}
          <div
            className="position-absolute top-0 start-50 translate-middle-x"
            style={{
              width: "4px",
              height: "100%",
              background: "linear-gradient(180deg,#F59E0B,#FACC15)",
              borderRadius: "4px",
              opacity: 0.5,
            }}></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="col-md-12 d-flex justify-content-center">
              <ExperienceCard
                experience={exp}
                align={index % 2 === 0 ? "start" : "end"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const ExperienceCard = ({ experience, align }) => {
  return (
    <div
      className={`d-flex flex-column flex-md-row align-items-start bg-white shadow-lg rounded-4 p-4 position-relative w-100`}
      style={{
        maxWidth: "900px",
        transition: "all 0.4s ease",
        borderLeft: align === "start" ? "6px solid #F59E0B" : "none",
        borderRight: align === "end" ? "6px solid #F59E0B" : "none",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 35px rgba(245,158,11,0.25)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
      }}>
      {/* Company Logo */}
      <div className="me-md-4 mb-3 mb-md-0 text-center">
        <img
          src={experience.logo}
          alt={experience.company}
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "15px",
            border: "3px solid #FFD700",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-grow-1">
        {/* Title & Company */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
          <div>
            <h5
              style={{ color: "#0D47A1", fontWeight: 700, fontSize: "1.3rem" }}>
              <FaUserTie className="me-2 text-warning" />
              {experience.title}
            </h5>
            <h6
              style={{
                color: "#FF8F00",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}>
              {/* <FaBuilding className="me-2" />
              {experience.company} | <FaMapMarkerAlt className="me-1" /> */}
              <FaBuilding className="me-2" />
              {experience.company} |
              <a
                href={experience.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ color: "#FF8F00", fontWeight: 600 }}
                onMouseOver={(e) => (e.target.style.color = "#F59E0B")}
                onMouseOut={(e) => (e.target.style.color = "#FF8F00")}>
                <FaMapMarkerAlt className="me-1" />
                {experience.location}
              </a>
            </h6>
          </div>
          <span
            className="badge"
            style={{
              background: "linear-gradient(45deg,#F59E0B,#FACC15)",
              color: "#fff",
              padding: "0.45rem 0.9rem",
              borderRadius: "20px",
              fontWeight: 600,
              fontSize: "0.9rem",
              boxShadow: "0 3px 10px rgba(245,158,11,0.3)",
            }}>
            {experience.period}
          </span>
        </div>

        {/* Achievements */}
        <ul className="list-unstyled mt-3">
          {experience.achievements.map((item, idx) => (
            <li
              key={idx}
              className="d-flex align-items-start mb-2"
              style={{ gap: "0.5rem", color: "#374151", fontSize: "0.95rem" }}>
              <FaCheckCircle color="#4CAF50" size={18} className="mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="mt-3 d-flex flex-wrap gap-2">
          {experience.techStack.map((tech, idx) => (
            <span
              key={idx}
              style={{
                background: "linear-gradient(45deg,#FFE082,#FFD54F)",
                color: "#0D47A1",
                padding: "0.35rem 0.9rem",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: 600,
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExperienceSection;
