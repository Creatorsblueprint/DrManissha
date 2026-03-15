import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInLeft, fadeIn } from "../animations";
import styles from "./Ebook.module.css";

const Ebook = () => {
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://drbackend-648711352735.me-west1.run.app/api/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 106.5, // Ebook price
            email: email,
            successUrl: window.location.origin + "?success=true",
            cancelUrl: window.location.origin + "?cancel=true",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Payment initialization failed");
      }

      const data = await response.json();

      // Extract redirect URL from Ziina backend response
      const checkoutUrl = data.redirect_url;

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        console.error("No checkout URL received from backend", data);
        alert("Could not initiate payment. Please try again.");
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ebook" className={styles.ebookSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.imageContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
        >
          <div className={styles.bookWrapper}>
            <img
              src="/Images/ebook-cover.png"
              alt="The Hair Repair Blueprint"
              className={styles.bookImage}
            />
            {/* Background design circle accent element seen in design */}
            <div className={styles.circleAccent}></div>
          </div>
        </motion.div>

        <motion.div
          className={styles.textContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className={styles.title}>
            <span className={styles.titleWhite}>The Hormonal Hairline:</span>
            <br />
            <span className={styles.titleGold}>
              What Your Body Is Trying
              <br />
              to Tell You
            </span>
          </h2>
          <p className={styles.description}>
            A perimenopause coaching guide to decoding progesterone, nervous
            system shifts, and early midlife changes before the chaos hits.
          </p>
          <p className={styles.price}>$ 29</p>

          <form className={styles.formContainer} onSubmit={handlePayment}>
            <input
              type="email"
              className={styles.inputField}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={!isValidEmail(email) || isLoading}
            >
              {isLoading ? "Processing..." : "Get Instant Access"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Ebook;
