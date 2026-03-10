import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, staggerContainer } from '../animations';
import styles from './About.module.css';

const About = () => {
    return (
        <>
            <section id="about" className={styles.aboutSection}>
                <div className={styles.container}>
                    {/* Top: Biography Area */}
                    <div className={styles.bioArea}>
                        <motion.div
                            className={styles.imageContent}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInLeft}
                        >
                            <img src="/Images/about-img.png" alt="Dr. Manissha Pandit" className={styles.aboutImage} />
                        </motion.div>

                        <motion.div
                            className={styles.textContent}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn}
                        >
                            <h2 className={styles.title}>Meet Dr. Manissha Pandit</h2>
                            <p className={styles.description}>
                                Dr Manissha Pandit is an Integrative & Functional Medicine Health Coach (IIN, New York) and former dentist who integrates functional medicine, endocrine biology, and Ayurvedic nervous system therapy to recalibrate hormonal transitions at their root, specializing in women’s hormonal health and hair restoration.
                            </p>
                            <p className={styles.description}>
                                She supports women in their 30s and 40s navigating progesterone decline, nervous system dysregulation, and early perimenopause — helping them decode what their symptoms are truly signaling.
                            </p>
                            <p className={styles.description}>
                                Her approach blends functional nutrition and biological data with Ayurvedic marma point therapy, sound healing, and NLP-based subconscious reprogramming to address the root cause — not just the symptom.
                            </p>

                            <div className={styles.iconBoxes}>
                                <div className={styles.iconBox}>
                                    <h4 className={styles.boxTitle}>THE SCIENCE</h4>
                                    <p className={styles.boxText}>Functional lab analysis, biological hormone mapping, and root-cause decoding of midlife hormonal shifts.</p>
                                </div>
                                <div className={styles.iconBox}>
                                    <h4 className={styles.boxTitle}>THE SOUL</h4>
                                    <p className={styles.boxText}>Ayurvedic rituals, marma therapy, nervous system recalibration, and subconscious healing for deep feminine restoration.</p>
                                </div>
                            </div>

                            <button className={styles.actionBtn} onClick={() => window.open("https://calendly.com/hairhormonecoach/kim", "_blank", "noopener,noreferrer")}>Book a Consultation</button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bottom: Accreditations */}
            <section className={styles.accreditationsArea}>
                <div className={styles.container}>
                    <motion.h3
                        className={styles.accTitle}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={fadeIn}
                    >
                        Accreditations & Expertise
                    </motion.h3>
                    <motion.div
                        className={styles.cardsGrid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div className={styles.card} variants={fadeIn}>
                            <img src="/Icons/acc-3.svg" alt="Doctor of Dental Surgery" className={styles.cardIcon} />
                            <h4 className={styles.cardTitle}>Doctor of Dental Surgery</h4>
                        </motion.div>
                        <motion.div className={styles.card} variants={fadeIn}>
                            <img src="/Icons/acc-1.svg" alt="Certified Integrative Health Coach" className={styles.cardIcon} />
                            <h4 className={styles.cardTitle}>Certified Integrative Health Coach (IIN, New York)</h4>
                        </motion.div>
                        <motion.div className={styles.card} variants={fadeIn}>
                            <img src="/Icons/acc-2.svg" alt="Functional Medicine Practitioner" className={styles.cardIcon} />
                            <h4 className={styles.cardTitle}>Functional Medicine Practitioner</h4>
                        </motion.div>
                        <motion.div className={styles.card} variants={fadeIn}>
                            <img src="/Icons/acc-1.svg" alt="Certified NLP Practitioner" className={styles.cardIcon} />
                            <h4 className={styles.cardTitle}>Certified NLP Practitioner</h4>
                        </motion.div>
                        <motion.div className={styles.card} variants={fadeIn}>
                            <img src="/Icons/acc-2.svg" alt="Sound Healing Practitioner" className={styles.cardIcon} />
                            <h4 className={styles.cardTitle}>Sound Healing Practitioner</h4>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;
