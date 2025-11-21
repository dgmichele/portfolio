import React from 'react';
import { projectsData } from '../../data/projectsData';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.job} id="job">
      <div className={styles.jobContainer}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.jobGrid}>
            <div className={styles.jobGridImage}>
              <img src={project.image} className={styles.jobImg} alt={project.alt} />
            </div>
            <div className={styles.jobGridDescription}>
              <span className={styles.jobType}>{project.type}</span>
              <h3>{project.title}</h3>
              <p className={`text ${styles.jobDescription}`}>{project.description}</p>
              <a className={`my-btn type-2 ${styles.jobButton}`} href={project.url} rel="noopener" target="_blank">
                Scopri di più <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
