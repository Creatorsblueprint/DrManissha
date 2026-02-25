import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, fadeIn } from '../animations';
import styles from './Ebook.module.css';

const Ebook = () => {
    const [email, setEmail] = useState('');

    const isValidEmail = (email) => {
        // Basic email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
                        <img src="/Images/ebook-cover.png" alt="The Hair Repair Blueprint" className={styles.bookImage} />
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
                        <span className={styles.titleWhite}>The Hormonal Hairline:</span><br />
                        <span className={styles.titleGold}>What Your Body Is Trying<br />to Tell You</span>
                    </h2>
                    <p className={styles.description}>
                        A perimenopause coaching guide to decoding progesterone, nervous system shifts, and early midlife changes before the chaos hits.
                    </p>
                    <p className={styles.price}>150 AED</p>

                    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            className={styles.inputField}
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={!isValidEmail(email)}
                        >
                            Get Instant Access
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Ebook;
