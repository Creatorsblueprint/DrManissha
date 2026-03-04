import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, slideInRight } from '../animations';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section id="home" className={styles.heroSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.textContent}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <span className={styles.kicker}>INTEGRATIVE & FUNCTIONAL MEDICINE</span>
                    <h1 className={styles.title}>
                        Decode Your Hormones to<br />Reclaim Your Hair, Energy<br />& Feminine Power.
                    </h1>
                    <p className={styles.subtitle}>
                        Helping women in their 30s and 40s restore hair, balance progesterone, and move through perimenopause with clarity and confidence.
                    </p>
                    <div className={styles.btnGroup}>
                        <Link to="/ebook" className={styles.primaryBtn}>Explore the Ebook</Link>
                        <button className={styles.secondaryBtn}>Shop House of M</button>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.imageContent}
                    initial="hidden"
                    animate="visible"
                    variants={slideInRight}
                >
                    <div className={styles.imageWrapper}>
                        <img src="/Images/home-img.png" alt="Dr. Manissha Pandit" className={styles.heroImage} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
