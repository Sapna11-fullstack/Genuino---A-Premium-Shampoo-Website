import Footer from "../components/Footer";

function About() {
  const styles = {
    page: {
      paddingTop: "140px",
      minHeight: "100vh",
      position: "relative",
      backgroundImage: "url('/images/about-us.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "#1F2F2A"
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(134, 150, 132, 0.9)",
      zIndex: 1
    },

    content: {
      position: "relative",
      zIndex: 2
    },

    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "80px 24px"
    },

    heroTitle: {
      fontSize: "42px",
      fontWeight: "600",
      marginBottom: "20px",
      textAlign: "center",
      marginTop: "-100px"
    },

    heroSubtitle: {
      fontSize: "18px",
      maxWidth: "700px",
      margin: "0 auto 60px",
      textAlign: "center",
      lineHeight: "1.6",
      color: "#4A5C55",
      fontFamily: "'Lucida Console', 'Courier New', monospace" ,
      fontWeight: 1000
    },

    section: {
      marginBottom: "60px"
    },

    sectionTitle: {
      fontSize: "26px",
      marginBottom: "12px",
      color: "#2F5D50",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },

    text: {
      fontSize: "16px",
      lineHeight: "1.8",
      color: "#333",
      fontFamily: "'Lucida Console', 'Courier New', monospace" ,
      fontWeight: 1000
    },

    highlightGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "32px",
      marginTop: "80px"
    },

    highlightCard: {
      background: "#cea6a6",
      padding: "40px 30px",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      textAlign: "center"
    },

    highlightImage: {
      width: "120px",
      height: "120px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "20px",
      backgroundColor: "#355235"
    },

    highlightTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#2F5D50"
    },

    highlightText: {
      fontSize: "14px",
      lineHeight: "1.6",
      color: "#555",
      fontFamily: "cursive" ,
      fontWeight: 1000
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>
            Rooted in Nature. Backed by Research.
          </h1>

          <p style={styles.heroSubtitle}>
            Genuino was created to redefine everyday hair care — honest formulas,
            thoughtful science, and deep respect for nature.
          </p>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🌱 Our Beginning</h2>
            <p style={styles.text}>
              Genuino was born from a simple belief — hair care should be safe,
              transparent, and rooted in nature.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🧪 Our Formulation Philosophy</h2>
            <p style={styles.text}>
              Every Genuino formula is crafted with carefully selected natural
              ingredients, backed by research.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>♻️ Sustainability at Heart</h2>
            <p style={styles.text}>
              Sustainability guides every decision we make — from sourcing to
              packaging.
            </p>
          </div>

          <div style={styles.highlightGrid}>
            <div style={styles.highlightCard}>
              <img
                src="/images/ingredients.jpg"
                alt="Clean Ingredients"
                style={styles.highlightImage}
              />
              <div style={styles.highlightTitle}>Clean Ingredients</div>
              <p style={styles.highlightText}>
                Thoughtfully chosen ingredients that work in harmony with your
                hair and scalp.
              </p>
            </div>

            <div style={styles.highlightCard}>
              <img
                src="/images/science.jpg"
                alt="Science Backed"
                style={styles.highlightImage}
              />
              <div style={styles.highlightTitle}>Science-Backed</div>
              <p style={styles.highlightText}>
                Developed through research, not trends.
              </p>
            </div>

            <div style={styles.highlightCard}>
              <img
                src="/images/plant.jpg"
                alt="Planet Conscious"
                style={styles.highlightImage}
              />
              <div style={styles.highlightTitle}>Planet Conscious</div>
              <p style={styles.highlightText}>
                Designed with sustainability and responsibility at the core.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default About;
