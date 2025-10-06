import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "Skills", url: "#skills" },
    { name: "Experience", url: "#experience" },
    { name: "Projects", url: "#projects" },
    { name: "Education", url: "#education" },
    { name: "Certifications", url: "#certifications" },
  ];

  const contacts = [
    {
      icon: "fas fa-envelope",
      content: "chinnikrishna2004krishnak@gmail.com",
      url: "mailto:chinnikrishna2004krishnak@gmail.com",
    },
    {
      icon: "fas fa-phone",
      content: "+91 7075669476",
      url: "tel:+917075669476",
    },
    {
      icon: "fab fa-github",
      content: "GitHub",
      url: "https://github.com/21691A3708/",
    },
    {
      icon: "fab fa-linkedin",
      content: "LinkedIn",
      url: "https://www.linkedin.com/in/chinnikrishna3708/",
    },
  ];

  return (
    <footer
      className="py-3"
      style={{ backgroundColor: "#0D47A1", color: "white" }}>
      <div className="container text-center">
        {/* Brand */}
        <h6 className="fw-bold mb-2" style={{ color: "#FFD700" }}>
          Kundharupu Chinni Krishna
        </h6>

        {/* Quick Links */}
        <div className="mb-2">
          {quickLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="text-white text-decoration-none mx-2"
              style={{ fontSize: "0.9rem", transition: "color 0.3s ease" }}
              onMouseOver={(e) => (e.target.style.color = "#FFD700")}
              onMouseOut={(e) => (e.target.style.color = "white")}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Icons */}
        <div className="mb-2">
          {contacts.map((c, idx) => (
            <a
              key={idx}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
              style={{ fontSize: "1rem", transition: "color 0.3s ease" }}
              onMouseOver={(e) => (e.target.style.color = "#FFD700")}
              onMouseOut={(e) => (e.target.style.color = "white")}>
              <i className={c.icon}></i>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "0.8rem", color: "#E3F2FD", margin: 0 }}>
          © 2025 | Built by{" "}
          <span style={{ color: "#FFD700", fontWeight: 600 }}>
            Kundharupu Chinni Krishna
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
// import React from "react";

// const Footer = () => {
//   return (
//     <footer
//       className="py-3"
//       style={{ backgroundColor: "#0D47A1", color: "white" }}
//     >
//       <div className="container text-center">
//         <h6 className="fw-bold mb-2" style={{ color: "#FFD700" }}>
//           Kundharupu Chinni Krishna
//         </h6>
//         <p style={{ fontSize: "0.8rem", color: "#E3F2FD", margin: 0 }}>
//           © 2025 | Built with ❤️ by{" "}
//           <span style={{ color: "#FFD700", fontWeight: 600 }}>
//             Kundharupu Chinni Krishna
//           </span>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
