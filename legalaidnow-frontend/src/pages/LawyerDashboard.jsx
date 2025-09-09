import React from 'react';
import styles from './Dashboard.module.css';

const LawyerDashboard = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Lawyer Dashboard</h1>
          <button style={{backgroundColor: 'var(--secondary-color)'}}>Edit Profile</button>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Open Requests</div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <p>Rent Agreement for 2BHK</p>
              <button style={{backgroundColor: 'var(--primary-color)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px'}}>View & Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LawyerDashboard;