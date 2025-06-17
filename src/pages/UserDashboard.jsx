import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { getRequests, updateRequestStatus, deleteRequest } from '../services/apiService';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const UserDashboard = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    const data = await getRequests();
    setRequests(data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Pending' ? 'Solved' : 'Pending';
    try {
      await updateRequestStatus(id, newStatus);
      toast.success(`Request marked as ${newStatus}`);
      fetchRequests();
    } catch (error) {
      toast.error('Failed to update status.');
    }
  };

  const handleDeleteRequest = (id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this request? This action cannot be undone.',
      buttons: [
        {
          label: 'Yes, Delete it',
          // THIS IS THE CORRECTED PART. It now correctly calls the async function.
          onClick: async () => {
            try {
              await deleteRequest(id);
              toast.success('Request deleted successfully!');
              fetchRequests(); // Refresh the list
            } catch (error) {
              toast.error('Failed to delete request.');
            }
          }
        },
        {
          label: 'No, Keep it'
        }
      ]
    });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>My Dashboard</h1>
          <Link to="/post-request">Post New Request</Link>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>My Requests</div>
          <ul className={styles.list}>
            {requests.length > 0 ? (
              requests.map((req) => (
                <li key={req.id} className={styles.listItem}>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>{req.category}</p>
                    <p>{req.description}</p>
                    <span className={`${styles.status} ${req.status === 'Pending' ? styles.statusPending : styles.statusSolved}`}>
                      {req.status}
                    </span>
                  </div>
                  <div className={styles.actions}>
                    <button onClick={() => handleToggleStatus(req.id, req.status)}>
                      Mark as {req.status === 'Pending' ? 'Solved' : 'Pending'}
                    </button>
                    <button className={styles.deleteButton} onClick={() => handleDeleteRequest(req.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p style={{ padding: '1.5rem' }}>You have not posted any requests yet.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;