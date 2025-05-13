import React from "react";
import styles from "@/styles/components/Footer.module.scss";
import {
  FaLock,
  FaTruck,
  FaSync,
  FaInstagram,
  FaPinterest,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import PaymentIcons from "@/assets/payment-icons.png";
import logoStore from "@/assets/logo-store.png";
import { dataFooter } from "@/db/dtFooter";
import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();

  const isHideTopSection =
    location.pathname === "/checkout" || location.pathname === "/look-book";
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSpace}>
        {/* Top Section */}
        {isHideTopSection ? null : (
          <div className={styles.topSection}>
            <div className={styles.logoStore}>
              <img src={logoStore} alt="Borcelle shoes store" />
            </div>
            <div className={styles.features}>
              <div className={styles.feature}>
                <FaSync size={18} />
                <span>Free Return</span>
              </div>
              <div className={styles.feature}>
                <FaLock size={18} />
                <span>Secure Payment</span>
              </div>
              <div className={styles.feature}>
                <FaTruck size={18} />
                <span>Express Shipping</span>
              </div>
            </div>
          </div>
        )}
        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          {/* Company Info */}
          <div className={styles.column}>
            <h3>Contact</h3>
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

          {dataFooter.map((item) => {
            return (
              <div className={styles.column} key={item.key}>
                <h3>{item.name}</h3>
                <ul>
                  {item.children.map((child, idx) => {
                    return <li key={`child-${idx}`}>{child}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.footerPay}>
        <div>
          <div className={styles.left}>
            <p>© 2025 Borcelle Shoe Store. Powered by An Pham.</p>
          </div>
          <div className={styles.right}>
            <img src={PaymentIcons} alt="Stripe" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
