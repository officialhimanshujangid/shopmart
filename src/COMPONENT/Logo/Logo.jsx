/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import { FaShopify } from "react-icons/fa";
function Logo({ size, padding }) {
  return (
    <Link to="/dashboard">
      <div style={{ fontSize: size, padding: padding }} className={styles.logo}>
        <span>{<FaShopify />}</span>
        <span>ShopMart</span>
      </div>
    </Link>
  );
}

export default Logo;
