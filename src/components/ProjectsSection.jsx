import React from "react";
import SectionTitle from "./SectionTitle";
import Erp from "../assets/Erp 2.webp";
import ReserveSpot from "../assets/image.png";
import { FaDatabase, FaServer, FaReact, FaNodeJs } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enterprise Resource Planning (2025) [R & D]",
      description:
        "Developed a full stack ERP system with Assembly, Rework Assembly, QC Reports, Sticky Pads. Designed RESTful APIs with Node.js/Express.js, optimized MongoDB using indexing & validation, and built a responsive React.js front-end for seamless user experience.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: Erp,
    },
    {
      title: "ReserveSpot (2025)",
      description:
        "Developed a comprehensive booking platform where users can list and publish their properties like resorts, hotels, and vacation rentals. Implemented user authentication, property management, and booking system. Created an admin panel with dynamic content management capabilities for real-time updates, user management, and booking oversight. Features include secure payment integration, availability calendar, and responsive design for optimal user experience.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: ReserveSpot,
    },
  ];

  // Tech stack colors and icons mapping
  const techConfig = {
    MongoDB: {
      icon: <FaDatabase />,
      color: "#47A248",
      bgColor: "#E8F5E8",
    },
    "Express.js": {
      icon: <FaServer />,
      color: "#000000",
      bgColor: "#F0F0F0",
    },
    "React.js": {
      icon: <FaReact />,
      color: "#61DAFB",
      bgColor: "#EBF8FE",
    },
    "Node.js": {
      icon: <FaNodeJs />,
      color: "#339933",
      bgColor: "#E8F5E8",
    },
  };

  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: "#eef2f6" }}>
      <div className="container">
        <SectionTitle title="Project Work" />

        <div className="row g-4 mt-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <ProjectCard project={project} techConfig={techConfig} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, techConfig }) => {
  return (
    <div
      className="card border-0 shadow-lg overflow-hidden h-100"
      style={{
        borderRadius: "20px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        minHeight: "450px",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.transform = "translateY(-5px)")
      }
      onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
      {/* Optional Image - Fixed Height */}
      {project.image && (
        <div style={{ height: "200px", overflow: "hidden" }}>
          <img
            src={project.image}
            alt={project.title}
            className="card-img-top w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* Card Body - Flexible but consistent */}
      <div
        className="card-body d-flex flex-column"
        style={{
          flex: "1 1 auto",
          minHeight: "250px",
        }}>
        {/* Title - Fixed height */}
        <h5
          style={{
            color: "#0D47A1",
            fontWeight: 700,
            marginBottom: "0.5rem",
            minHeight: "3rem",
            display: "flex",
            alignItems: "center",
          }}>
          {project.title}
        </h5>

        {/* Description - Flexible but with max height and scroll */}
        <div
          style={{
            flex: "1 1 auto",
            marginBottom: "1rem",
            minHeight: "120px",
            maxHeight: "120px",
            overflowY: "auto",
          }}>
          <p
            style={{
              color: "#1e293b",
              fontSize: "0.95rem",
              margin: 0,
            }}>
            {project.description}
          </p>
        </div>

        {/* Tech Stack Badges - Fixed height */}
        <div
          className="d-flex flex-wrap gap-2"
          style={{
            minHeight: "2.5rem",
            alignItems: "flex-start",
          }}>
          {project.techStack.map((tech, idx) => (
            <TechBadge key={idx} tech={tech} config={techConfig[tech]} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TechBadge = ({ tech, config }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? config.color : config.bgColor,
        color: isHovered ? "#FFFFFF" : config.color,
        padding: "0.4rem 0.8rem",
        borderRadius: "20px",
        fontSize: "0.85rem",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        flexShrink: 0,
        border: `1px solid ${config.color}20`,
        transition: "all 0.3s ease",
        cursor: "default",
      }}>
      <span
        style={{
          fontSize: "0.9rem",
          transition: "all 0.3s ease",
          color: isHovered ? "#FFFFFF" : config.color,
        }}>
        {config.icon}
      </span>
      {tech}
    </span>
  );
};

export default ProjectsSection;
