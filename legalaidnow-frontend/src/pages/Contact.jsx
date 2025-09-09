import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contactBox}>
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.subtitle}>
          We'd love to hear from you! Here's how you can reach our team.
        </p>
        
        <div className={styles.detailsGrid}>

          <div className={styles.detailItem}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.558Z"/></svg>
            </div>
            <div>
              <h3>Email Us</h3>
              <a href="mailto:support@legalaidnow.com">support@legalaidnow.com</a>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.28 1.465l-2.13 2.13a1.09 1.09 0 0 0-.106.331c.092.22.283.44.583.743.299.303.52.492.74.585.093.02.19.006.27.006.136 0 .27-.055.375-.16l2.13-2.13a1.1 1.1 0 0 1 1.465.28l2.308 2.308a1.745 1.745 0 0 1 .163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03.002-2.137.702-2.877L1.885.511Z"/></svg>
            </div>
            <div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* NEW: YouTube Link */}
          <div className={styles.detailItem}>
            <div className={styles.icon}>
              {/* YouTube SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.073 2.656v.071c0 .886-.008 1.743-.074 2.656l-.007.104-.022.26-.01.104c-.048.519-.119 1.023-.22 1.402a2.01 2.01 0 0 1-1.415 1.42c-1.123.307-5.302.335-6.11.335h-.088c-.823.003-4.988-.03-6.11-.335a2.01 2.01 0 0 1-1.415-1.42c-.1-.38-.172-.884-.22-1.402l-.01-.104-.022-.26-.008-.104c-.065-.913-.073-1.77-.073-2.656v-.071c0-.886.008-1.743.074-2.656l.007-.104.022-.26.01-.104c.048-.519.119-1.022.22-1.402a2.01 2.01 0 0 1 1.415-1.42c1.123-.307 5.302-.335 6.11-.335ZM8 12.713v-8.426L13.7 8 8 12.713Z"/>
              </svg>
            </div>
            <div>
              <h3>Watch Us</h3>
              <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">Our YouTube Channel</a>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10Zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
            </div>
            <div>
              <h3>Our Office</h3>
              <p>123 Legal Lane, Suite 100<br/>Justice City, JC 54321</p>
            </div>
          </div>
          
        </div>

        {/* Social Media Section */}
        <div className={styles.socialSection}>
            <h3>Follow Us</h3>
            <div className={styles.socialIcons}>
                <a href="#" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
                </a>
                <a href="#" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.593 0 8.049 0 12.015 2.825 15.223 6.375 16v-5.562H4.618V8.05H6.375V6.264c0-1.728 1.023-2.68 2.616-2.68.76 0 1.41.056 1.6.08v2.09h-1.24c-.836 0-1 .398-1 .98v1.27h2.328l-.3 2.388H8.35v5.562C13.175 15.223 16 12.015 16 8.049z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;