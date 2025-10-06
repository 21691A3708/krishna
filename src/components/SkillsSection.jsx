import React from "react";
import SectionTitle from "./SectionTitle";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      items: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
      color: "#FF6B6B",
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
      color: "#00B4D8",
    },
    {
      title: "Tools & Concepts",
      items: [
        { name: "REST APIs", icon: <FaDatabase /> },
        { name: "OOP", icon: <FaGitAlt /> },
        { name: "DSA", icon: <FaGitAlt /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Git", icon: <FaGitAlt /> },
      ],
      color: "#7209B7",
    },
  ];

  return (
    <section
      id="skills"
      className="py-5"
      style={{
        background: "linear-gradient(120deg, #f8fafc 0%, #e6f0fa 100%)",
      }}>
      <div className="container">
        <SectionTitle title="Skills & Technologies" />
        <div className="row g-4 mt-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ category }) => {
  return (
    <div className="col-md-4">
      <div
        className="card h-100 border-0 shadow-sm"
        style={{
          borderRadius: "18px",
          overflow: "hidden",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
        }}>
        <div
          className="card-header text-white text-center py-3"
          style={{
            background: category.color,
            fontWeight: "600",
            letterSpacing: "0.5px",
            fontSize: "1.1rem",
          }}>
          {category.title}
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {category.items.map((item, idx) => (
              <li
                key={idx}
                className="list-group-item d-flex align-items-center py-2 border-0"
                style={{
                  backgroundColor: "transparent",
                  fontSize: "1.05rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateX(5px)";
                  e.target.style.color = category.color;
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateX(0)";
                  e.target.style.color = "#1e293b";
                }}>
                <span className="me-2" style={{ fontSize: "1.4rem" }}>
                  {item.icon}
                </span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
