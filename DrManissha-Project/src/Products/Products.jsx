import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';
import styles from './Products.module.css';

const Products = () => {
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
                            <img src="/Images/product1.png" alt="Signature Ayurvedic Blend" className={styles.productImage} />
                        </div>
                        <div className={styles.productInfo}>
                            <h3 className={styles.prodTitle}>Signature Ayurvedic Blend</h3>
                            <span className={styles.category}>HAIR RESTORATION OIL</span>
                            <p className={styles.prodDesc}>
                                Infused with hand-selected herbs and pure essential oils to activate marma points and stimulate follicles.
                            </p>
                            <a href="#product1" className={styles.learnMore}>Learn More</a>
                        </div>
                    </motion.div>

                    {/* Product 2 */}
                    <motion.div className={styles.productCard} variants={fadeIn}>
                        <div className={styles.imageWrapper}>
                            <img src="/Images/product2.png" alt="Nervous System Soothe" className={styles.productImage} />
                        </div>
                        <div className={styles.productInfo}>
                            <h3 className={styles.prodTitle}>Nervous System Soothe</h3>
                            <span className={styles.category}>RITUAL OIL</span>
                            <p className={styles.prodDesc}>
                                A botanical formulation designed to ground the spirit and balance cortisol during perimenopause.
                            </p>
                            <a href="#product2" className={styles.learnMore}>Learn More</a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
