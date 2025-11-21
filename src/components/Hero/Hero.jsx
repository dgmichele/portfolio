import React from 'react';
import styles from './Hero.module.css'; 
import fold_image from '../../assets/images/fold-image.webp';

const Hero = () => {
  return (
    <section className={styles.aboveTheFold}>
      <div className={styles.foldContainer}>
        <div className={styles.foldGrid}>
          <h1>Ciao, sono Michele</h1>
          <p>Sono un marketer che unisce la creatività e la tecnologia per creare strategie e prodotti digitali.</p>
          <div className={styles.doubleBotton}>
            <a className="my-btn type-1" href="#cta">Contattami</a>
            <a className="my-btn type-2" href="#job">Scopri di più <i className="fa-solid fa-arrow-down"></i></a>
          </div>
        </div>
        <div className={styles.foldImage}>
          <img src={fold_image} alt="foto-profilo" className={styles.fotoProfilo} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
