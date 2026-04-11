import React from "react";
import styles from "./Floating.module.css";

const Floating = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tooltip}>Chat on WhatsApp</div>

      <div className={styles.chatBubble}>
        Hi there! Need help with hair or hormones?
      </div>

      <a
        href="https://wa.me/971589771786"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        <i className="ri-whatsapp-fill"></i>
      </a>
    </div>
  );
};

export default Floating;
