import React from "react";
import styles from "../../styles/components/Footer.module.scss";
import {
  FaLock,
  FaTruck,
  FaSync,
  FaInstagram,
  FaPinterest,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import PaymentIcons from "../../assets/payment-icons.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.feature}>
          <FaLock size={18} />
          <span>Secure Payment</span>
        </div>
        <div className={styles.feature}>
          <FaTruck size={18} />
          <span>Express Shipping</span>
        </div>
        <div className={styles.feature}>
          <FaSync size={18} />
          <span>Free Return</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        {/* Company Info */}
        <div className={styles.column}>
          <h3>BORCELLE</h3>
          <p>
            Praesent eget tortor sit risus egestas nulla pharetra ornare quis
            bibendum est bibendum sapien proin nascetur.
          </p>
          <div className={styles.socialIcons}>
            <FaInstagram />
            <FaPinterest />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>

        {/* Shop */}
        <div className={styles.column}>
          <h3>Shop</h3>
          <ul>
            <li>Shop Men</li>
            <li>Shop Women</li>
            <li>Lookbook</li>
            <li>Gift Card</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* About */}
        <div className={styles.column}>
          <h3>About</h3>
          <ul>
            <li>Our Story</li>
            <li>Our Materials</li>
            <li>Our Value</li>
            <li>Sustainability</li>
            <li>Manufacture</li>
          </ul>
        </div>

        {/* Need Help */}
        <div className={styles.column}>
          <h3>Need Help?</h3>
          <ul>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Shoe Care</li>
            <li>Size Chart</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerPay}>
        <div className={styles.left}>
          <p>© 2025 Recycled Shoe Store. Powered by Recycled Shoe Store.</p>
        </div>
        <div className={styles.right}>
          <img src={PaymentIcons} alt="Stripe" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
