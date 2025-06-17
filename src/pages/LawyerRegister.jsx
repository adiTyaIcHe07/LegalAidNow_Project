import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import { createLawyer } from '../services/apiService';
import toast from 'react-hot-toast';

const LawyerRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', expertise: 'Property Law', phone: '', location: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createLawyer(formData);
      toast.success('Thank you for registering!');
      navigate('/browse-lawyers');
    } catch (error) {
      toast.error('Failed to register. Please try again.');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h1 className={styles.formTitle}>Join as a Lawyer</h1>
        <div className={styles.formGroup}><label htmlFor="name">Full Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /></div>
        <div className={styles.formGroup}><label htmlFor="email">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /></div>
        <div className={styles.formGroup}><label htmlFor="expertise">Area of Expertise</label><select id="expertise" name="expertise" value={formData.expertise} onChange={handleChange}><option>Property Law</option><option>Family Law</option><option>Criminal Law</option><option>Corporate Law</option></select></div>
        <div className={styles.formGroup}><label htmlFor="phone">Phone Number</label><input type="tel" id="phone" name="phone" placeholder="Your contact number" value={formData.phone} onChange={handleChange} /></div>
        <div className={styles.formGroup}><label htmlFor="location">Location</label><input type="text" id="location" name="location" placeholder="e.g., Mumbai, Maharashtra" value={formData.location} onChange={handleChange} /></div>
        <button type="submit" className={styles.submitButton}>Submit Registration</button>
      </form>
    </div>
  );
};

export default LawyerRegister;