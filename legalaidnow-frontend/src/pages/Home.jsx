// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import lawyerImage from '../assets/images/front-view-blurry-lawyer-working.jpg'; // Import the image

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.designShowcase}>
        <div className={styles.textContainer}>
          <p className={styles.experienceText}>17 YEARS OF EXPERIENCE</p>
          <h1 className={styles.mainHeading}>
            Empowering Justice <span className={styles.highlight}>- One Step at a Time</span>
          </h1>
          <p className={styles.descriptionText}>
            Far beyond barriers and bureaucracy, our Legal Aid project stands as a beacon for those seeking justice but lacking means. We provide accessible, reliable, and compassionate legal support to individuals and communities in need. Whether it’s navigating civil rights, family disputes, labor issues, or consumer protection, we’re here to ensure that every voice is heard, and every right is upheld.
          </p>
          {/* Updated Button Group */}
          <div className={styles.buttonGroup}>
            {/* CORRECTED LINK: Changed to="/post-request" to match App.jsx route */}
            <Link to="/post-request" className={styles.primaryButton}>Post a Problem</Link>
            <Link to="/browse-lawyers" className={styles.secondaryButton}>Browse Lawyers</Link>
          </div>

          <div className={styles.footerNav}>
            <div className={styles.socialLinks}>
              <Link to="#" className={styles.socialLink}>FACEBOOK</Link>
              <span className={styles.separator}>-</span>
              <Link to="#" className={styles.socialLink}>INSTAGRAM</Link>
              <span className={styles.separator}>-</span>
              <Link to="#" className={styles.socialLink}>YOUTUBE</Link>
              <span className={styles.separator}>-</span>
              <Link to="#" className={styles.socialLink}>TWITTER</Link>
            </div>
            {/* Pagination removed as per request */}
          </div>
        </div>

        {/* Set background image dynamically using style prop */}
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${lawyerImage})` }}
        >
          {/* The image is set as a background-image dynamically */}
        </div>
      </div>
    </div>
  );
};

export default Home;