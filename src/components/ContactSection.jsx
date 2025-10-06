import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [activeCard, setActiveCard] = useState("info");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // New color palette
  const colors = {
    primary: "#6366F1", // Indigo
    primaryLight: "#818CF8",
    primaryDark: "#4F46E5",
    secondary: "#8B5CF6", // Purple
    gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
    gradientLight: "linear-gradient(135deg, #818CF8 0%, #A78BFA 100%)",
    background:
      "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)",
    textDark: "#1E293B",
    textMedium: "#475569",
    textLight: "#64748B",
    border: "#E2E8F0",
    success: "#10B981",
    error: "#EF4444",
  };

  const contacts = [
    {
      icon: <FaEnvelope color="#FFFFFF" size={20} />,
      label: "Email",
      value: "chinnikrishna2004krishnak@gmail.com",
      url: "mailto:chinnikrishna2004krishnak@gmail.com",
    },
    {
      icon: <FaPhone color="#FFFFFF" size={20} />,
      label: "Phone",
      value: "+91 7075669476",
      url: "tel:+917075669476",
    },
    {
      icon: <FaGithub color="#FFFFFF" size={20} />,
      label: "GitHub",
      value: "github.com/21691A3708",
      url: "https://github.com/21691A3708/",
    },
    {
      icon: <FaLinkedin color="#FFFFFF" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/chinnikrishna3708",
      url: "https://www.linkedin.com/in/chinnikrishna3708/",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    setErrorMessage("");

    try {
      console.log("Sending emails...");

      // Send message to you (the owner)
      const ownerEmail = await emailjs.send(
        "service_j19ryc9",
        "template_f0thuno",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Chinni Krishna",
          reply_to: formData.email,
          time: new Date().toLocaleString(),
        },
        "vz9DObpwGR8eGBbyS"
      );
      console.log("Owner email sent:", ownerEmail);

      // Send auto-reply to the user
      const userEmail = await emailjs.send(
        "service_j19ryc9",
        "template_535if3v",
        {
          to_name: formData.name,
          from_name: "Chinni Krishna",
          user_email: formData.email,
          time: new Date().toLocaleString(),
        },
        "vz9DObpwGR8eGBbyS"
      );
      console.log("User email sent:", userEmail);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error details:", error);
      setSubmitStatus("error");

      // More specific error messages
      if (error.text) {
        setErrorMessage(error.text);
      } else if (error.status) {
        setErrorMessage(
          `Error ${error.status}: ${error.text || "Failed to send email"}`
        );
      } else {
        setErrorMessage(
          "Network error. Please check your connection and try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{
        background: colors.background,
      }}>
      <div className="container">
        <SectionTitle title="Contact Me" />

        {/* Toggle Buttons */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="d-flex justify-content-center gap-3">
              <button
                onClick={() => setActiveCard("info")}
                className={`btn px-4 py-2 fw-semibold ${
                  activeCard === "info"
                    ? "active-contact-btn"
                    : "inactive-contact-btn"
                }`}
                style={{
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                }}>
                Contact Info
              </button>
              <button
                onClick={() => setActiveCard("form")}
                className={`btn px-4 py-2 fw-semibold ${
                  activeCard === "form"
                    ? "active-contact-btn"
                    : "inactive-contact-btn"
                }`}
                style={{
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                }}>
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Contact Info Card */}
          <div
            className={`col-12 col-md-8 col-lg-6 ${
              activeCard !== "info" ? "d-none" : ""
            }`}>
            <div
              className="bg-white shadow-lg rounded-4 p-4 h-100"
              style={{
                minHeight: "400px",
                border: `1px solid ${colors.border}`,
                boxShadow: "0 10px 40px rgba(99, 102, 241, 0.1) !important",
              }}>
              <div className="text-center mb-4">
                <h4 style={{ color: colors.textDark, fontWeight: "700" }}>
                  Get In Touch
                </h4>
                <p style={{ color: colors.textLight }}>
                  Feel free to reach out through any of these platforms
                </p>
              </div>

              <div className="d-flex flex-column gap-3">
                {contacts.map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none d-flex align-items-center p-3 rounded-3"
                    style={{
                      color: colors.textDark,
                      background: "rgba(99, 102, 241, 0.03)",
                      border: `1px solid rgba(99, 102, 241, 0.1)`,
                      transition: "all 0.3s ease",
                      gap: "1rem",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "rgba(99, 102, 241, 0.08)";
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 8px 25px rgba(99, 102, 241, 0.15)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "rgba(99, 102, 241, 0.03)";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}>
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: colors.gradient,
                        flexShrink: 0,
                        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                      }}>
                      {contact.icon}
                    </div>
                    <div className="flex-grow-1">
                      <div
                        style={{
                          fontSize: "0.9rem",
                          color: colors.textLight,
                          fontWeight: "500",
                        }}>
                        {contact.label}
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          color: colors.textDark,
                          fontWeight: "600",
                        }}>
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div
            className={`col-12 col-md-8 col-lg-6 ${
              activeCard !== "form" ? "d-none" : ""
            }`}>
            <div
              className="bg-white shadow-lg rounded-4 p-4 h-100"
              style={{
                minHeight: "400px",
                border: `1px solid ${colors.border}`,
                boxShadow: "0 10px 40px rgba(99, 102, 241, 0.1) !important",
              }}>
              <div className="text-center mb-4">
                <h4 style={{ color: colors.textDark, fontWeight: "700" }}>
                  Send Me a Message
                </h4>
                <p style={{ color: colors.textLight }}>
                  I'll get back to you as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control p-3"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{
                      borderRadius: "12px",
                      border: `1px solid ${colors.border}`,
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      color: colors.textDark,
                    }}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control p-3"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{
                      borderRadius: "12px",
                      border: `1px solid ${colors.border}`,
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      color: colors.textDark,
                    }}
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    className="form-control p-3"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{
                      borderRadius: "12px",
                      border: `1px solid ${colors.border}`,
                      fontSize: "1rem",
                      resize: "vertical",
                      minHeight: "120px",
                      transition: "all 0.3s ease",
                      color: colors.textDark,
                    }}
                  />
                </div>

                {/* Submit Status Messages */}
                {submitStatus === "success" && (
                  <div
                    className="alert alert-success mb-3 text-center"
                    style={{
                      borderRadius: "12px",
                      border: "none",
                      background: "rgba(16, 185, 129, 0.1)",
                      color: colors.success,
                      fontWeight: "500",
                    }}>
                    ✅ Message sent successfully! Check your email for
                    confirmation.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="alert alert-danger mb-3 text-center"
                    style={{
                      borderRadius: "12px",
                      border: "none",
                      background: "rgba(239, 68, 68, 0.1)",
                      color: colors.error,
                      fontWeight: "500",
                    }}>
                    ❌{" "}
                    {errorMessage ||
                      "Failed to send message. Please try again or contact me directly via email."}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn w-100 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  style={{
                    background: isSubmitting
                      ? "linear-gradient(135deg, #94A3B8 0%, #CBD5E1 100%)"
                      : colors.gradient,
                    color: "#FFFFFF",
                    borderRadius: "50px",
                    border: "none",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    minHeight: "54px",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    boxShadow: isSubmitting
                      ? "none"
                      : "0 4px 15px rgba(99, 102, 241, 0.4)",
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) {
                      e.target.style.background = colors.gradientLight;
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 6px 20px rgba(99, 102, 241, 0.5)";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isSubmitting) {
                      e.target.style.background = colors.gradient;
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(99, 102, 241, 0.4)";
                    }
                  }}>
                  {isSubmitting ? (
                    <>
                      <div
                        className="spinner-border spinner-border-sm"
                        role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .active-contact-btn {
          background: ${colors.gradient};
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .inactive-contact-btn {
          background: transparent;
          color: ${colors.textLight};
          border: 2px solid ${colors.border};
        }

        .inactive-contact-btn:hover {
          border-color: ${colors.primary};
          color: ${colors.primary};
          background: rgba(99, 102, 241, 0.05);
        }

        .form-control:focus {
          border-color: ${colors.primary} !important;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1) !important;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
