/* import React, { useState } from 'react';
import './AddReport.css';
import axios from 'axios'; 

function AddReport() {
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async () => {
    if (!selectedOption || !description) {
      setErrorMessage('Please select an option and enter a description.');
      return;
    }

    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDJlMzJlNGM2Yzc5MGQ4ZDY2NDM4YSIsImVtYWlsIjoiYWFhYmRlbGtoYWxlazNAZ21haWwuY29tIiwiaWF0IjoxNzExNTExNjcxLCJleHAiOjE3MTE3NzA4NzF9.1Le4AmBK7YQvsZClvCI9GyWmb0j4hEohX06ULt4ANHA';

      const data = {
        reason: selectedOption,
        description: description
      };

      const response = await axios.post('https://lost-seven.vercel.app/post/sendreport/6603a3ea1fd4d2b95e531e89', data, {
        headers: {
          token: `task__${token}`
        }
      });

      console.log('Report sent successfully:', response.data);
      setDescription('');
      setSelectedOption('');
      if (response.data.success) {
        alert("Report sent successfully");
      }
    } catch (error) {
      console.error('Error sending report:', error);
    }
  };

  return (
    <div className="AddReportContainer">
      <div className="AddReportContent">
        <p>Report Form</p>
        <select value={selectedOption} onChange={handleOptionChange} required>
          <option value="" disabled>Select an option...</option>
          <option value="harassment">Harassment</option>
          <option value="spam">Spam</option>
          <option value="inappropriate content">Inappropriate Content</option>
        </select>
        <textarea
          placeholder="Enter your description..."
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        {errorMessage && <p className="error-messageReport">{errorMessage}</p>}
        <button className='SubmitReportbtn' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AddReport;
 */
import React, { useState, useEffect } from 'react';
import './AddReport.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTheme } from '../Theme/ThemeContext';

function AddReport() {
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState('');
  const { postId } = useParams();
  const { darkMode } = useTheme();

  useEffect(() => {
    const userInfoString = localStorage.getItem('user-info');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      const userToken = userInfo.results;
      setToken(userToken);
    }
  }, []);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async () => {
    if (!selectedOption || !description) {
      setErrorMessage('Please select an option and enter a description.');
      return;
    }

    try {
      const data = {
        reason: selectedOption,
        description: description
      };

      const response = await axios.post(`https://lost-seven.vercel.app/post/sendreport/${postId}`, data, {
        headers: {
          token: `task__${token}`
        }
      });

      console.log('Report sent successfully:', response.data);
      setDescription('');
      setSelectedOption('');
      if (response.data.success) {
        alert('Report sent successfully');
      }
    } catch (error) {
      console.error('Error sending report:', error);
    }
  };

  return (
    <div className={`AddReportContainer ${darkMode ? 'dark' : ''}`}>
      <div className="AddReportContent">
        <p>Report Form</p>
        <select value={selectedOption} onChange={handleOptionChange} required>
          <option value="" disabled>Select an option...</option>
          <option value="harassment">Harassment</option>
          <option value="spam">Spam</option>
          <option value="inappropriate content">Inappropriate Content</option>
        </select>
        <textarea
          placeholder="Enter your description..."
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        {errorMessage && <p className="error-messageReport">{errorMessage}</p>}
        <button className='SubmitReportbtn' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AddReport;
