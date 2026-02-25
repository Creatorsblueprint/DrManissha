import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandCol}>
                    <h2 className={styles.logoTitle}>DR. MANISSHA PANDIT</h2>
                    <p className={styles.tagline}>
                        Integrating science and soul to empower women through their most transformative hormonal shifts.
                    </p>
                </div>

                <div className={styles.linksCol}>
                    <h3 className={styles.linksHeading}>QUICK LINKS</h3>
                    <ul className={styles.linksList}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/ebook">The Ebook</Link></li>
                        <li><Link to="/products">House of M</Link></li>
                    </ul>
                </div>

                <div className={styles.linksCol}>
                    <h3 className={styles.linksHeading}>INQUIRIES</h3>
                    <p className={styles.tagline} style={{ marginBottom: "15px" }}>Interested in coaching or wholesale? Contact us directly.</p>
                    <a href="mailto:hello@drmanisshapandit.com" className={styles.emailLink}>hello@drmanisshapandit.com</a>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>&copy; 2026 DR. MANISSHA PANDIT. ALL RIGHTS RESERVED.</p>
                <p>DEVELOPED BY CREATORS BLUEPRINT</p>
            </div>
        </footer>
    );
};

export default Footer;
