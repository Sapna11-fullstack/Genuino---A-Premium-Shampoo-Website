import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate(); 

  const services = [
    {
      title: "Volumizing Shampoo",
      image: "/images/volume.jpg",
      price: "Rs.1500"
    },
    {
      title: "Anti-frizz Shampoo",
      image: "/images/anti-frizz.jpg",
      price: "Rs.2800"
    },
    {
      title: "Hydrating Shampoo",
      image: "/images/detox.jpg",
      price: "Rs.1950"
    }
  ];

  const styles = {
    section: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "40px",
      padding: "80px",
      backgroundColor: "#CEC DDB".replace(" ", "")
    },

    card: {
      backgroundColor: "#FFFFFF",
      textAlign: "center",
      paddingBottom: "30px",
      cursor: "pointer"
    },

    image: {
      width: "100%",
      height: "220px",
      objectFit: "cover"
    },

    title: {
      fontSize: "18px",
      marginTop: "24px",
      marginBottom: "10px"
    },

    text: {
      margin: "6px 0",
      color: "#444"
    },

    button: {
      marginTop: "20px",
      backgroundColor: "#d81f3c",
      color: "#fff",
      border: "none",
      padding: "10px 22px",
      cursor: "pointer"
    }
  };

  return (
    <section style={styles.section}>
      {services.map((service) => (
        <div style={styles.card} key={service.title}>
          <img
            src={service.image}
            alt={service.title}
            style={styles.image}
          />

          <h3 style={styles.title}>{service.title}</h3>
          <p style={styles.text}>{service.price}</p>

          <button
            style={styles.button}
            onClick={() => navigate("/shop")}
          >
            Buy Now
          </button>
        </div>
      ))}
    </section>
  );
}

export default Services;