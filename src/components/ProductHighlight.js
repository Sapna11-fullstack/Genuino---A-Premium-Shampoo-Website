import React from "react";
import { useNavigate } from "react-router-dom";

function ProductHighlight() {
  const navigate = useNavigate(); 

  const styles = {
    section: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "85vh",
      backgroundColor: "#F6F5F2",
      marginTop: "70px",
      marginBottom: "70px"
    },

    left: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px"
    },

    image: {
      width: "80%",
      maxWidth: "420px",
      objectFit: "contain"
    },

    right: {
      backgroundColor: "#C9D6C2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px"
    },

    card: {
      backgroundColor: "#FFFFFF",
      padding: "90px 80px",
      maxWidth: "520px",
      textAlign: "center",
      boxShadow: "0 30px 60px rgba(0,0,0,0.08)"
    },

    logo: {
      fontSize: "24px",
      color: "#2F5D50",
      fontWeight: "600",
      marginBottom: "20px",
      fontStyle: "italic"
    },

    divider: {
      width: "50px",
      height: "2px",
      backgroundColor: "#2F5D50",
      margin: "0 auto 30px"
    },

    title: {
      fontSize: "28px",
      lineHeight: "1.4",
      color: "#161649",
      marginBottom: "40px",
      fontWeight: "500"
    },

    button: {
      backgroundColor: "#2F5D50",
      color: "#FFFFFF",
      border: "none",
      padding: "14px 36px",
      fontSize: "13px",
      cursor: "pointer",
      letterSpacing: "1px"
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <img src="/images/image4.jpg" alt="Product" style={styles.image} />
      </div>

      <div style={styles.right}>
        <div style={styles.card}>
          <div style={styles.logo}>Genuino</div>
          <div style={styles.divider}></div>

          <h2 style={styles.title}>
            The shampoo that truly cares
            <br />
            No artificial additives,
            <br />
            just natural ingredients
          </h2>

          <button
            style={styles.button}
            onClick={() => navigate("/shop")}
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
