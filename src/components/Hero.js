import React from "react";

function Hero() {
  const styles = {
    section: {
      height: "100vh",          
      width: "100%",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#000" ,
      marginBottom: "0" 
    },

    videoWrapper: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "140%",           
      height: "140%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none"
    },

    iframe: {
      width: "100%",
      height: "100%",
      border: "none"
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.55)" 
    },

    content: {
      position: "relative",
      zIndex: 2,
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      textAlign: "center",
      padding: "0 20px"
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.videoWrapper}>
        <iframe
          style={styles.iframe}
          src="https://www.youtube.com/embed/XJrq7Os_2ZA?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=XJrq7Os_2ZA"
          allow="autoplay; fullscreen"
          title="Hero Background Video"
        />
      </div>

      <div style={styles.overlay}></div>

      <div style={styles.content}></div>
    </section>
  );
}

export default Hero;
