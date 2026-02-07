import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterestP,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const styles = {
    footer: {
      width: "100%",
      backgroundColor: "#726e71",
      color: "#F6F5F2",
      padding: "70px 0 50px"
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px"
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "40px",
      fontSize: "14px"
    },

    columnTitle: {
      fontWeight: "600",
      marginBottom: "14px",
      textTransform: "uppercase",
      fontSize: "13px"
    },

    link: {
      display: "block",
      color: "#DDE8D5",
      marginBottom: "10px",
      cursor: "pointer"
    },

    text: {
      color: "#DDE8D5",
      lineHeight: "1.6"
    },

    contactRow: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "14px"
    },

    iconCircle: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      backgroundColor: "#1F3F36",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    },

    socialRow: {
      display: "flex",
      gap: "14px",
      marginTop: "16px"
    },

    subscribe: {
      marginTop: "60px"
    },

    input: {
      width: "260px",
      padding: "12px",
      border: "none",
      marginBottom: "12px"
    },

    button: {
      backgroundColor: "#1F3F36",
      color: "#fff",
      border: "none",
      padding: "12px 30px",
      cursor: "pointer"
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div>
            <div style={styles.columnTitle}>Shop</div>
            {["About", "Gift Card", "FAQ", "Contact", "Book Online"].map(i => (
              <span key={i} style={styles.link}>{i}</span>
            ))}
          </div>
          <div>
            <div style={styles.columnTitle}>Address</div>
            <div style={styles.text}>
              500 Terry Francine St.<br />
              San Francisco, CA 94158
            </div>

            <br />
            <div style={styles.columnTitle}>Opening Hours</div>
            <div style={styles.text}>
              Mon – Fri : 7am – 10pm<br />
              Saturday : 8am – 10pm
            </div>
          </div>
          <div>
            <div style={styles.columnTitle}>Contact</div>

            <div style={styles.contactRow}>
              <div style={styles.iconCircle}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <span>+91 98745 3210</span>
            </div>

            <div style={styles.contactRow}>
              <div style={styles.iconCircle}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <span>WhatsApp Us</span>
            </div>
          </div>
          <div>
            <div style={styles.columnTitle}>Policy</div>
            {["FAQ", "Shipping & Returns", "Store Policy"].map(i => (
              <span key={i} style={styles.link}>{i}</span>
            ))}

            <div style={styles.socialRow}>
              <div style={styles.iconCircle}>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div style={styles.iconCircle}>
                <FontAwesomeIcon icon={faPinterestP} />
              </div>
              <div style={styles.iconCircle}>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
        </div>
        <div style={styles.subscribe}>
          <div>Subscribe to our mailing list</div>
          <input placeholder="Email" style={styles.input} />
          <br />
          <button style={styles.button}>SUBMIT</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

