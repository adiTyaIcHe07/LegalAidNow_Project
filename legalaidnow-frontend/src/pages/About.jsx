import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>About LegalAidNow</h2>
        <p>Our mission is to make legal assistance accessible and affordable for everyone.</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Why We Built This</h3>
          <p>Navigating the legal world can be intimidating. LegalAidNow was created to break down these barriers, providing a straightforward platform for citizens to connect with legal professionals.</p>
        </div>
        <div className={styles.card}>
          <h3>How Users Benefit</h3>
          <p>Get quick answers, find local experts for specific needs like property agreements or affidavits, and manage your legal matters with confidence. All in one place.</p>
        </div>
        <div className={`${styles.card} ${styles.fullWidthCard}`}>
          <h3>How Lawyers Benefit</h3>
          <p>For legal experts, LegalAidNow is a platform to find clients who genuinely need your skills. Expand your reach, manage client requests efficiently, and build your professional reputation.</p>
        </div>
      </div>
    </div>
  );
};

export default About;