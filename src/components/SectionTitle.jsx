// components/SectionTitle.jsx
import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2
      className="text-center mb-5 fw-bold display-5"
      style={{ color: "#0D47A1" }}>
      {title}
    </h2>
  );
};

export default SectionTitle;
