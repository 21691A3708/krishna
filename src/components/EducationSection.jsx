import React from "react";
import SectionTitle from "./SectionTitle";
import MitsLogo from "../assets/Mits log.png";
import Krishna from "../assets/krishna.avif";
import Vijaya from "../assets/Vijaya Bharathi.jpg";

const EducationSection = () => {
  const educationList = [
    {
      degree: "B.Tech in Computer Science and Engineering (Cyber Security)",
      institution:
        "Madanapalle Institute of Technology and Sciences,Madanapalle, Andhra Pradesh",
      period: "Nov 2021 - May 2025",
      result: "CGPA: 8.29 / 10",
      icon: MitsLogo,
      color: "#0D47A1",
    },
    {
      degree: "Intermediate (MPC)",
      institution:
        "Sri Krishna Reddy Siddartha Junior College, Madanapalle, Andhara Pradesh ",
      period: "June 2019  - March  2021",
      result: "Percentage: 61%",
      icon: Krishna,
      color: "#FF6F00",
    },
    {
      degree: "High School (SSC)",
      institution:
        "Vijaya Bharathi English Medium High School, Madanapalle, Andhara Pradesh",
      period: "June 2018 - March 2019",
      result: "GPA: 9.3 / 10",
      icon: Vijaya,
      color: "#2E7D32",
    },
  ];

  return (
    <section
      id="education"
      className="py-5"
      style={{ backgroundColor: "#f9fafc" }}>
      <div className="container">
        <SectionTitle title="Education" />

        <div className="row justify-content-center mt-4 position-relative">
          {/* Timeline line */}
          <div
            className="position-absolute top-0 start-50 translate-middle-x"
            style={{
              width: "4px",
              height: "100%",
              background: "linear-gradient(180deg,#0D47A1,#FFD700)",
              borderRadius: "4px",
              opacity: 0.5,
            }}></div>

          {educationList.map((edu, index) => (
            <div
              key={index}
              className="col-12 col-md-10 col-lg-8 mb-4 d-flex justify-content-center">
              <EducationCard
                education={edu}
                align={index % 2 === 0 ? "start" : "end"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ education, align }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-4 p-4 d-flex flex-column flex-md-row align-items-start justify-content-between position-relative"
      style={{
        borderLeft: align === "start" ? `6px solid ${education.color}` : "none",
        borderRight: align === "end" ? `6px solid ${education.color}` : "none",
        maxWidth: "850px",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.15)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
      }}>
      {/* Left Section - Degree & Institution */}
      <div className="flex-grow-1 pe-md-4">
        <div className="d-flex align-items-center mb-2">
          <div
            className="d-flex align-items-center justify-content-center me-3"
            style={{
              width: "55px",
              height: "55px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              overflow: "hidden",
            }}>
            <img
              src={education.icon}
              alt={education.institution}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <h5
            style={{
              color: education.color,
              fontWeight: 700,
              marginBottom: 0,
            }}>
            {education.degree}
          </h5>
        </div>
        <h6 style={{ color: "#374151", fontWeight: 500, fontSize: "0.95rem" }}>
          {education.institution}
        </h6>
      </div>

      {/* Right Section - Period & Result */}
      <div className="text-md-end mt-3 mt-md-0">
        <p
          style={{
            color: education.color,
            fontWeight: 600,
            fontSize: "0.9rem",
            marginBottom: "0.8rem",
          }}>
          {education.period}
        </p>
        <span
          className="badge fs-6"
          style={{
            background: education.color,
            color: "#fff",
            padding: "0.6rem 1.2rem",
            borderRadius: "30px",
            fontWeight: "600",
            boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
          }}>
          🎯 {education.result}
        </span>
      </div>
    </div>
  );
};

export default EducationSection;
