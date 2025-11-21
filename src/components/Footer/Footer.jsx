import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerIconContainer}>
          <a className={`my-btn type-2 ${styles.footerIcon}`} href="https://github.com/dgmichele" rel="noopener" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className={`my-btn type-2 ${styles.footerIcon}`} href="https://www.linkedin.com/in/micheledelgiudice96" rel="noopener" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className={`text ${styles.footerText}`}>Copyright © 2025 Michele del Giudice. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
