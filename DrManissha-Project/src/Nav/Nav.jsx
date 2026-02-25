import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Nav.module.css';

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Subtle logic to update active section on scroll
            const sections = ['home', 'about', 'ebook', 'products'];
            let current = 'home';
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && window.scrollY >= section.offsetTop - 150) {
                    current = sections[i];
                    break;
                }
            }
            setActiveSection(current);
            const targetPath = current === 'home' ? '/' : `/${current}`;
            if (window.location.pathname !== targetPath) {
                window.history.replaceState(null, '', targetPath);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const path = location.pathname.substring(1) || 'home';
        setActiveSection(path);
    }, [location.pathname]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <img src="/logo.svg" alt="Dr. Manissha Pandit" className={styles.logoImage} />
                </div>

                <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
                    <li><Link to="/" className={activeSection === 'home' ? styles.active : ''} onClick={() => setMenuOpen(false)}>HOME</Link></li>
                    <li><Link to="/about" className={activeSection === 'about' ? styles.active : ''} onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
                    <li><Link to="/ebook" className={activeSection === 'ebook' ? styles.active : ''} onClick={() => setMenuOpen(false)}>EBOOK</Link></li>
                    <li><Link to="/products" className={activeSection === 'products' ? styles.active : ''} onClick={() => setMenuOpen(false)}>HOUSE OF M</Link></li>
                </ul>

                <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
