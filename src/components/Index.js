import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection"; // ✅ includes Header inside
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import CertificationsSection from "./CertificationsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
const fullText = "Kundharupu Chinni Krishna";

function Index() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const typeEffect = () => {
      if (charIndex < fullText.length) {
        setDisplayText(fullText.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeEffect, 80);
      }
    };
    const timer = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ✅ No need for <Header /> anymore */}
      <HeroSection displayText={displayText} />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />

      {/* Font Awesome for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </>
  );
}

export default Index;
