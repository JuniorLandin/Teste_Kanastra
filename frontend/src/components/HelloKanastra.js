import styles from './styles.module.css';
import React, { useState } from 'react';
import toast from "react-hot-toast";

export function HelloKanastra() {

  const [formData, setFormData] = useState({
    name: '',
    governmentId: '',
    email: '',
    debtAmount: '',
    debtDueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/charges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      toast.success("Cobrança efetuada com sucesso.",{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
  
      console.log('Data submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting data:', error);

      toast.error("Dados errados.",{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      
    }
  };

  return(
    <div  className={styles.container}>
      <h1 className={styles.title}>Hello Kanastra</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input 
            className={styles.input}
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="governmentId">Government ID:</label>
          <input 
            className={styles.input}
            type="text" 
            id="governmentId" 
            name="governmentId" 
            value={formData.governmentId} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label className={styles.label}  htmlFor="email">Email:</label>
          <input 
            className={styles.input}
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="debtAmount">Debt Amount:</label>
          <input 
            className={styles.input}
            type="number" 
            id="debtAmount" 
            name="debtAmount" 
            value={formData.debtAmount} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label className={styles.label}  htmlFor="debtDueDate">Debt Due Date:</label>
          <input
            className={styles.input}
            type="date" 
            id="debtDueDate" 
            name="debtDueDate" 
            value={formData.debtDueDate} 
            onChange={handleChange} 
          />
        </div>
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </div>
  )
}