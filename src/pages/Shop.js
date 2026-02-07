import { useState, useEffect } from "react";
import Footer from "../components/Footer";

function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8084/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) =>
        console.error("Error fetching products:", err)
      );
  }, []);

  const styles = {
    page: {
      paddingTop: "140px",
      minHeight: "100vh",
      backgroundImage: "url('/images/image3.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#6fa386",
      backgroundBlendMode: "soft-light"
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 24px"
    },

    title: {
      fontSize: "42px",
      textAlign: "center",
      color: "#123624",
      marginBottom: "10px"
    },

    subtitle: {
      textAlign: "center",
      fontSize: "18px",
      color: "#5d2f5b",
      marginBottom: "40px"
    },

    searchBar: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      border: "1px solid #ddd",
      borderRadius: "30px",
      padding: "12px 18px",
      maxWidth: "420px",
      margin: "0 auto 50px",
      background: "#fff"
    },

    searchInput: {
      border: "none",
      outline: "none",
      width: "100%",
      fontSize: "14px"
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "32px"
    },

    card: {
      background: "#fafafa",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },

    imageWrapper: {
      overflow: "hidden",
      borderRadius: "8px",
      backgroundColor: "#f5f5f5"
    },

    image: {
      width: "100%",
      height: "240px",
      objectFit: "contain",
      padding: "10px",
      transition: "transform 0.4s ease"
    },

    imageHover: {
      transform: "scale(1.08)"
    },

    button: {
      marginTop: "14px",
      background: "#726570",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "6px",
      cursor: "pointer"
    },

    modalOverlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2000
    },

    modal: {
      background: "#fff",
      width: "820px",
      maxWidth: "95%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      padding: "40px",
      borderRadius: "12px",
      position: "relative"
    },

    modalImageWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f5",
      borderRadius: "10px",
      padding: "20px"
    },

    close: {
      position: "absolute",
      top: "14px",
      right: "14px",
      cursor: "pointer",
      fontSize: "20px"
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Shampoo</h1>
        <p style={styles.subtitle}>
          Cleanse away <strong>impurities</strong>, restore{" "}
          <strong>shine</strong>, and deeply{" "}
          <strong>moisturise</strong> your hair.
        </p>

        <div style={styles.searchBar}>
          🔍
          <input
            style={styles.searchInput}
            placeholder="Search your shininess"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        <div style={styles.grid}>
          {products
            .filter((p) =>
              p.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map((p) => (
              <div
                key={p.id}
                style={styles.card}
                onClick={() =>
                  setSelectedProduct(p)
                }
              >
                <div
                  style={styles.imageWrapper}
                  onMouseEnter={() =>
                    setHoveredId(p.id)
                  }
                  onMouseLeave={() =>
                    setHoveredId(null)
                  }
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    style={{
                      ...styles.image,
                      ...(hoveredId === p.id
                        ? styles.imageHover
                        : {})
                    }}
                  />
                </div>

                <div>{p.name}</div>

                <div
                  style={{
                    marginTop: "6px",
                    fontWeight: "600",
                    color: "#2F5D50",
                    fontSize: "15px"
                  }}
                >
                  ₹{p.price}
                </div>

                <button style={styles.button}>
                  Buy Now
                </button>
              </div>
            ))}
        </div>
      </div>

      {selectedProduct && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <span
              style={styles.close}
              onClick={() =>
                setSelectedProduct(null)
              }
            >
              ✕
            </span>

            <div style={styles.modalImageWrapper}>
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                style={{
                  width: "100%",
                  maxWidth: "360px",
                  objectFit: "contain"
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "14px",
                paddingRight: "20px"
              }}
            >
              <h2 style={{ margin: 0 }}>
                {selectedProduct.name}
              </h2>

              <p
                style={{
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#2F5D50",
                  margin: "4px 0"
                }}
              >
                ₹{selectedProduct.price}
              </p>

              <p
                style={{
                  lineHeight: "1.6",
                  color: "#444"
                }}
              >
                {selectedProduct.description}
              </p>

              <button
                style={{
                  marginTop: "16px",
                  background: "#2F5D50",
                  color: "#fff",
                  border: "none",
                  padding: "12px 28px",
                  cursor: "pointer",
                  width: "fit-content"
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Shop;
