import styles from "./Footer.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.section} py-1`}>
          <h3>Contact Us</h3>
          <p>Email: officialhimanshujangid@gmail.com</p>
          <p>Phone: 7073083470</p>
        </div>
        <div className={`${styles.section} py-1`}>
          <h3>Quick Links :</h3>
          <ul className={styles.ull}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Follow Us :</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://twitter.com/code_with_him"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://twitter.com/code_with_him"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>&copy; 2024 SHOPMART All rights reserved.</p>
        <p>
          Disclaimer: This is a fictional e-commerce website for demonstration
          purposes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
