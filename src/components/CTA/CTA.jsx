import React, { useState } from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const maxClicks = 3;
  const email = 'dgmichele96@gmail.com';

  const handleClick = (e) => {
    e.preventDefault();
    if (clickCount < maxClicks - 1) {
      setClickCount(prev => prev + 1);
    } else {
      setShowEmail(true);
    }
  };

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const remainingClicks = maxClicks - clickCount;

  return (
    <section className={styles.cta} id="cta">
      <div className={styles.ctaContainer}>
        <h2 className="title-section">Teniamoci in contatto</h2>
        <p className={`text ${styles.ctaText}`}>Se vuoi avere qualche info in più oltre a quelle in questa pagina, contattami ora.</p>
        
        {!showEmail ? (
          <a className="my-btn type-1" onClick={handleClick} style={{cursor: 'pointer'}}>
            {clickCount === 0 ? 'Contattami' : `Clicca ancora ${remainingClicks} ${remainingClicks === 1 ? 'volta' : 'volte'}`}
          </a>
        ) : (
          <a className="my-btn type-1" style={{cursor: 'default'}}>
            <span style={{marginRight: '10px'}}>{email}</span>
            <i 
              className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} 
              style={{cursor: 'pointer', color: copied ? '#28a745' : ''}}
              onClick={handleCopy}
            ></i>
          </a>
        )}
      </div>
    </section>
  );
};

export default CTA;
