import React, { useState, useEffect } from 'react';
import styles from './BrowseRequests.module.css';
import { getRequests } from '../services/apiService'; // Import API function

const BrowseRequests = () => {
  const [requests, setRequests] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      const data = await getRequests();
      setRequests(data);
    };
    fetchRequests();
  }, []);

  const filteredRequests = requests.filter(req => {
    const categoryMatch = categoryFilter ? req.category === categoryFilter : true;
    const locationMatch = locationFilter ? req.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
    return categoryMatch && locationMatch;
  });

  return (
    <div className={styles.container}>
      {/* The rest of the component remains the same */}
      <h1 className={styles.title}>Browse Open Legal Requests</h1>
      <div className={styles.filters}><select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}><option value="">Filter by Category (All)</option><option>Rent Agreement</option><option>Home Sale Agreement</option><option>Property Transfer</option><option>Affidavit</option><option>Other</option></select><input type="text" placeholder="Filter by Location (e.g., Mumbai)" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} /></div>
      <div className={styles.grid}>{filteredRequests.length > 0 ? (filteredRequests.map((req) => (<div key={req.id} className={styles.card}><p className={styles.category}>{req.category}</p><h2>{req.description || "No description provided."}</h2><div className={styles.infoSection}><p><strong>Location:</strong> {req.location || 'N/A'}</p><p><strong>Contact:</strong> {req.phone || 'N/A'}</p></div><div className={styles.actions}><span className={`${styles.status} ${req.status === 'Solved' ? styles.statusSolved : styles.statusPending}`}>{req.status}</span></div></div>))) : (<p>No open requests found.</p>)}</div>
    </div>
  );
};

export default BrowseRequests;