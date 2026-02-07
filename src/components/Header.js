import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const styles = {
    header: {
      position: "fixed",
      top: 0,
      width: "100%",
      height: "110px",
      background: "#EDE5DA",
      borderBottom: "1px solid #ddd",
      zIndex: 1000,
      padding: "0 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxSizing: "border-box"
    },

    nav: {
      display: "flex",
      gap: "22px",
      fontSize: "14px",
      color: "#2B2B2B",
      whiteSpace: "nowrap"
    },

    navItem: {
      cursor: "pointer"
    },

    center: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      textAlign: "center",
      cursor: "pointer"
    },

    logo: {
      fontSize: "28px",
      color: "#2F5D50",
      fontWeight: "600"
    },

    tagline: {
      fontSize: "11px",
      letterSpacing: "4px",
      marginTop: "4px",
      color: "#555"
    },

    right: {
      display: "flex",
      alignItems: "center",
      gap: "22px",
      color: "#2B2B2B",
      whiteSpace: "nowrap"
    },

    iconBtn: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer"
    },

    icon: {
      fontSize: "18px" 
    },

    loginText: {
      fontSize: "14px" 
    }
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <span style={styles.navItem} onClick={() => navigate("/")}>Home</span>
        <span style={styles.navItem} onClick={() => navigate("/shop")}>Shop</span>
        <span style={styles.navItem} onClick={() => navigate("/about")}>About</span>
        <span style={styles.navItem} onClick={() => navigate("/contact")}>Contact</span>
      </nav>

      <div style={styles.center} onClick={() => navigate("/")}>
        <div style={styles.logo}>Genuino</div>
        <div style={styles.tagline}>SHINE ON WITH EVERY WASH</div>
      </div>

      <div style={styles.right}>
        {/* 🔹 Login */}
        <div style={styles.iconBtn} onClick={() => navigate("/login")}>
          <span style={styles.icon}>👤</span>
          <span style={styles.loginText}>Log In</span>
        </div>

        {/* 🔹 Real cart icon */}
        <div style={styles.iconBtn} onClick={() => navigate("/cart")}>
          <span style={styles.icon}>🛒</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
