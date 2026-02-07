import React from "react";

function StorySection() {
  const styles = {
    section: {
      position: "relative",
      width: "100%",
      minHeight: "70vh",
      backgroundImage: "url('/images/image3.jpg')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      overflow: "hidden"
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(155, 147, 156, 0.75)" 
    },

    content: {
      position: "relative",
      zIndex: 2,
      color: "#FFFFFF",
      padding: "40px",
      maxWidth: "900px"
    },

    title: {
      fontSize: "42px",
      fontWeight: "500",
      marginBottom: "24px",
      lineHeight: "1.3"
    },

    text: {
      fontSize: "16px",
      lineHeight: "1.7",
      opacity: 0.95
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <h2 style={styles.title}>
          All Natural & <br /> Non Toxic Shampoo
        </h2>

        <p style={styles.text}>
        Choosing the right shampoo tailored to your hair type and concerns can elevate 
        your hair care routine, promoting healthier, stronger, and more beautiful hair. 
        From anti-dandruff to sulfate-free and hair fall-control shampoos, the right 
        product can make all the difference. Explore Pilgrim's shampoo range to find a 
        formula that brings out the best in your hair.
        </p>
      </div>
    </section>
  );
}

export default StorySection;
