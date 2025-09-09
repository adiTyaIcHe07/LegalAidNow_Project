import React, { useState, useEffect } from 'react';
import styles from './BrowseLawyers.module.css';
import { getLawyers, deleteLawyer } from '../services/apiService';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const BrowseLawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [expertiseFilter, setExpertiseFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const fetchLawyers = async () => {
    const data = await getLawyers();
    setLawyers(data);
  };

  useEffect(() => {
    fetchLawyers();
  }, []);

  const handleDeleteLawyer = (id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this lawyer profile?',
      buttons: [
        {
          label: 'Yes, Delete',
          // THIS IS THE CORRECTED PART.
          onClick: async () => {
            try {
              await deleteLawyer(id);
              toast.success('Lawyer profile deleted.');
              fetchLawyers(); // Re-fetch the list
            } catch (error) {
              toast.error('Failed to delete lawyer.');
            }
          }
        },
        {
          label: 'No'
        }
      ]
    });
  };

  const filteredLawyers = lawyers.filter(lawyer => {
    const expertiseMatch = expertiseFilter ? lawyer.expertise === expertiseFilter : true;
    const locationMatch = locationFilter ? lawyer.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
    return expertiseMatch && locationMatch;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Browse Verified Lawyers</h1>
      <div className={styles.filters}>
        <select value={expertiseFilter} onChange={(e) => setExpertiseFilter(e.target.value)}>
          <option value="">Filter by Expertise (All)</option>
          <option>Property Law</option>
          <option>Family Law</option>
          <option>Corporate Law</option>
          <option>Criminal Law</option>
        </select>
        <input type="text" placeholder="Filter by Location (e.g., Mumbai)" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} />
      </div>
      <div className={styles.grid}>
        {filteredLawyers.length > 0 ? (
          lawyers.map((lawyer) => (
            <div key={lawyer.id} className={styles.card}>
              <p className={styles.expertise}>{lawyer.expertise}</p>
              <h2>{lawyer.name}</h2>
              <div className={styles.infoSection}>
                <p><strong>Email:</strong> {lawyer.email || 'N/A'}</p>
                <p><strong>Contact:</strong> {lawyer.phone || 'N/A'}</p>
                <p><strong>Location:</strong> {lawyer.location || 'N/A'}</p>
              </div>
              <div className={styles.actions}>
                <button className={styles.contactButton}>Contact</button>
                <button className={styles.deleteButton} onClick={() => handleDeleteLawyer(lawyer.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No lawyers have registered yet.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseLawyers;