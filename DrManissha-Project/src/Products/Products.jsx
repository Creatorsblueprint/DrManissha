import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import styles from "./Products.module.css";

const Products = () => {
  const [email, setEmail] = useState("");
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const basePrice = 189;
  const totalPrice = basePrice + Number(deliveryFee);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) return;
    if (deliveryFee === 0) {
      alert("Please select a delivery location");
      return;
    }

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
            amount: totalPrice,
            email: email,
            successUrl: window.location.origin + "?success=true",
            cancelUrl: window.location.origin + "?cancel=true",
            type: "product",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Payment initialization failed");
      }

      const data = await response.json();
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
    <section id="products" className={styles.productsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <span className={styles.kicker}>House of M</span>
          <h2 className={styles.title}>Ancestral wisdom, modern science.</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Product 1 */}
          <motion.div className={styles.productCard} variants={fadeIn}>
            <div className={styles.imageWrapper}>
              <img
                src="/Images/product1.png"
                alt="Signature Ayurvedic Blend"
                className={styles.productImage}
              />
            </div>

            <div className={styles.productInfo}>
              <h3 className={styles.prodTitle}>
                Manetraa - Hand Crafted Signature Ayurvedic Blend
              </h3>

              <span className={styles.category}>HAIR RESTORATION OIL</span>

              <p className={styles.price}>{basePrice} AED</p>

              <p className={styles.prodDesc}>
                Infused with hand-selected herbs and pure essential oils to
                activate marma points and stimulate follicles.
              </p>

              <div className={styles.ingredientsBox}>
                <h4 className={styles.ingTitle}>Ingredients</h4>
                <p className={styles.ingList}>
                  Cold pressed coconut oil, Olive oil, Almond oil, Castor oil,
                  Black onion seed oil, Fenugreek oil, Rosemary leaf extract,
                  Rosemary Essential Oil, Tea tree Essential Oil, Peppermint
                  Essential Oil, Brahmi leaf extract, Shikakai bark extract,
                  Tulsi leaf extract, Bhringraj leaf extract, Ashwagandha root
                  extract, Amla fruit extract, Pumpkin seed oil, Saw palmetto
                  fruit extract.
                </p>
              </div>

              <form className={styles.purchaseForm} onSubmit={handlePayment}>
                <h4 className={styles.formHeader}>Get Yours Today</h4>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.inputField}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />
                <select
                  className={styles.selectField}
                  value={deliveryFee}
                  onChange={(e) => setDeliveryFee(e.target.value)}
                  disabled={isLoading}
                  required
                >
                  <option value="0">Select Delivery Location</option>
                  <option value="30">UAE Delivery (+30 AED)</option>
                  <option value="180">Outside UAE (+180 AED)</option>
                </select>

                {deliveryFee > 0 && (
                  <p className={styles.totalPrice}>Total: {totalPrice} AED</p>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={
                    isLoading || !isValidEmail(email) || deliveryFee === "0"
                  }
                >
                  {isLoading ? "Processing..." : "Buy Now"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Product 2 */}
          {/* Product 2 */}
          {/* <motion.div className={styles.productCard} variants={fadeIn}>
            <div className={styles.imageWrapper}>
              <img
                src="/Images/product2.png"
                alt="Nervous System Soothe"
                className={styles.productImage}
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.prodTitle}>Nervous System Soothe</h3>
              <span className={styles.category}>RITUAL OIL</span>
              <p className={styles.prodDesc}>
                A botanical formulation designed to ground the spirit and
                balance cortisol during perimenopause.
              </p>
              <a href="#product2" className={styles.learnMore}>
                Learn More
              </a>
            </div>
          </motion.div> */}

          {/* Product 2 */}
          {/* <motion.div className={styles.productCard} variants={fadeIn}>
            <div className={styles.imageWrapper}>
              <img
                src="/Images/product2.png"
                alt="Nervous System Soothe"
                className={styles.productImage}
              />
            </div>

            <div className={styles.productInfo}>
              <h3 className={styles.prodTitle}>Nervous System Soothe</h3>

              <span className={styles.category}>RITUAL OIL</span>

              <p className={styles.prodDesc}>
                A botanical formulation designed to ground the spirit and
                balance cortisol during perimenopause.
              </p>

              <span className={styles.comingSoon}>Coming Soon</span>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
