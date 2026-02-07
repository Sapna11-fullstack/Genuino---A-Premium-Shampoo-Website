import React, { useState } from "react";
import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8084/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      alert("Thank you! Your message has been sent.");
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const styles = {
    section: {
      paddingTop: "140px",
      paddingBottom: "120px",
      minHeight: "100vh",
      position: "relative",
      backgroundImage: "url('/images/contact-us.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.45)",
      zIndex: 1
    },

    content: {
      position: "relative",
      zIndex: 2
    },

    container: {
      maxWidth: "700px",
      margin: "0 auto",
      padding: "0 24px",
      textAlign: "center"
    },

    title: {
      fontSize: "36px",
      color: "#ffffff",
      marginBottom: "10px"
    },

    subtitle: {
      color: "#f1f1f1",
      marginBottom: "50px",
      fontSize: "16px"
    },

    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    },

    input: {
      padding: "14px 16px",
      fontSize: "14px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      outline: "none"
    },

    textarea: {
      padding: "14px 16px",
      fontSize: "14px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      outline: "none",
      minHeight: "140px",
      resize: "vertical"
    },

    button: {
      marginTop: "10px",
      background: "#2F5D50",
      color: "#fff",
      border: "none",
      padding: "14px",
      fontSize: "14px",
      letterSpacing: "1px",
      cursor: "pointer",
      borderRadius: "6px"
    }
  };

  return (
    <>
      <section style={styles.section}>
        <div style={styles.overlay}></div>

        <div style={styles.content}>
          <div style={styles.container}>
            <h1 style={styles.title}>Contact Us</h1>
            <p style={styles.subtitle}>
              Have a question, feedback, or business enquiry?  
              We'd love to hear from you.
            </p>

            <form style={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                style={styles.input}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                style={styles.input}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                style={styles.textarea}
              />

              <button type="submit" style={styles.button}>
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
