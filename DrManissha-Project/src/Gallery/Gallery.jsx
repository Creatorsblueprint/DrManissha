import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';
import styles from './Gallery.module.css';

const Gallery = () => {
    const images = Array.from({ length: 6 });

    return (
        <section id="gallery" className={styles.gallerySection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <h2 className={styles.title}>A Glimpse Into My Work</h2>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {images.map((_, index) => (
                        <motion.div
                            key={index}
                            className={styles.imageCard}
                            variants={fadeIn}
                        >
                            <img src={`/Images/gallery-${index + 1}.png`} alt={`Gallery image ${index + 1}`} className={styles.galleryImage} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
