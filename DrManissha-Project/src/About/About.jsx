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
                                Dr. Manissha Pandit is an Integrative & Functional Medicine Health Coach (IIN New York) and former dentist specializing in women's hormonal health and hair restoration. She helps women in their 30s and 40s decode progesterone decline, nervous system shifts, and early perimenopause.
                            </p>
                            <p className={styles.description}>
                                Her unique approach blends clinical precision with ancestral wisdom, utilizing <strong>functional nutrition, marma activation, sound healing, and subconscious reprogramming</strong> to address the root causes of imbalance.
                            </p>

                            <div className={styles.iconBoxes}>
                                <div className={styles.iconBox}>
                                    <h4 className={styles.boxTitle}>The Science</h4>
                                    <p className={styles.boxText}>Functional data and biological decoding of hormone decline.</p>
                                </div>
                                <div className={styles.iconBox}>
                                    <h4 className={styles.boxTitle}>The Soul</h4>
                                    <p className={styles.boxText}>Ayurvedic rituals and subconscious shifts for deep healing.</p>
                                </div>
                            </div>

                            <button className={styles.actionBtn}>Book a Consultation</button>
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
                            <img src="/Icons/acc-1.svg" alt="IIN New York" className={styles.cardIcon} />
                            <h4 className={styles.cardTitle}>IIN New York</h4>
                            <p className={styles.cardText}>CERTIFIED HEALTH COACH</p>
                        </motion.div>
                        <motion.div className={styles.card} variants={fadeIn}>
                            <img src="/Icons/acc-2.svg" alt="Functional Medicine" className={styles.cardIcon} />
                            <h4 className={styles.cardTitle}>Functional Medicine</h4>
                            <p className={styles.cardText}>INTEGRATIVE SPECIALIST</p>
                        </motion.div>
                        <motion.div className={styles.card} variants={fadeIn}>
                            <img src="/Icons/acc-3.svg" alt="Doctor of Dentistry" className={styles.cardIcon} />
                            <h4 className={styles.cardTitle}>Doctor of Dentistry</h4>
                            <p className={styles.cardText}>CLINICAL BACKGROUND</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;
