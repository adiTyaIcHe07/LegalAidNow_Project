import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLawyerMenuOpen, setIsLawyerMenuOpen] = useState(false);

  const closeMenus = () => {
    setIsUserMenuOpen(false);
    setIsLawyerMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* ---- LEFT SIDE: LOGO ---- */}
        <Link to="/" className={styles.logo} onClick={closeMenus}>
            LegalAid<span>Now</span>
        </Link>
        
        {/* ---- RIGHT SIDE: ALL LINKS ---- */}
        {/* All navigation links are now inside this single div */}
        <div className={styles.navLinks}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''} onClick={closeMenus}>Home</NavLink>
          
          <div className={styles.dropdown}>
            <button onClick={() => { setIsUserMenuOpen(!isUserMenuOpen); setIsLawyerMenuOpen(false); }}>
              For Users ▼
            </button>
            {isUserMenuOpen && (
              <div className={styles.dropdownMenu}>
                <Link to="/user-dashboard" onClick={closeMenus}>My Dashboard</Link>
                <Link to="/post-request" onClick={closeMenus}>Post a Request</Link>
                <Link to="/browse-lawyers" onClick={closeMenus}>Browse Lawyers</Link>
              </div>
            )}
          </div>

          <div className={styles.dropdown}>
            <button onClick={() => { setIsLawyerMenuOpen(!isLawyerMenuOpen); setIsUserMenuOpen(false); }}>
              For Lawyers ▼
            </button>
            {isLawyerMenuOpen && (
              <div className={styles.dropdownMenu}>
                <Link to="/lawyer-register" onClick={closeMenus}>Join as a Lawyer</Link>
                <Link to="/browse-requests" onClick={closeMenus}>Browse Requests</Link>
              </div>
            )}
          </div>

          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''} onClick={closeMenus}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''} onClick={closeMenus}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;