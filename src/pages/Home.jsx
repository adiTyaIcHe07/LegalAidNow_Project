import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Get Legal Help from Verified Experts</h1>
          <p>Post your legal question or browse our directory of professional lawyers ready to assist you.</p>
          <div className={styles.buttonGroup}>
            <Link to="/post-request" className={styles.primaryButton}>Get Started</Link>
            <Link to="/browse-lawyers" className={styles.secondaryButton}>Browse Lawyers</Link>
          </div>
        </div>
      </div>
      <div className={styles.howItWorksSection}>
        <div className={styles.container}>
          <h2>How It Works</h2>
          <p>A simple, 3-step process to get you the help you need.</p>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Post Your Problem</h3>
              <p>Describe your legal issue in a few simple steps. It's free and confidential.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Get Matched</h3>
              <p>Our system notifies relevant lawyers, or you can contact them directly.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Resolve Your Issue</h3>
              <p>Connect with an expert, get advice, and mark your problem as solved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;