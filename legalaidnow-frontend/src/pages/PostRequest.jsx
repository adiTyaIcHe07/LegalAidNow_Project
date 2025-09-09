import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import { createRequest } from '../services/apiService';
import toast from 'react-hot-toast';

const PostRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ category: 'Rent Agreement', description: '', phone: '', location: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRequest(formData);
      toast.success('Your request has been posted successfully!');
      navigate('/user-dashboard');
    } catch (error) {
      toast.error('Failed to post request. Please try again.');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h1 className={styles.formTitle}>Post a Legal Problem</h1>
        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange}>
            <option>Rent Agreement</option>
            <option>Home Sale Agreement</option>
            <option>Property Transfer</option>
            <option>Affidavit</option>
            <option>Other</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="4" placeholder="Briefly explain your issue..." value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="location">Location (Optional)</label>
          <input type="text" id="location" name="location" placeholder="e.g., Mumbai, Maharashtra" value={formData.location} onChange={handleChange} />
        </div>
        <button type="submit" className={styles.submitButton}>Submit Request</button>
      </form>
    </div>
  );
};

export default PostRequest;