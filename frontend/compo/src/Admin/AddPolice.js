import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddPolice.css';
import FollowPageBack from './white-texture-background.jpg';

function AddPolice() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfoString = localStorage.getItem('user-info');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo.results;

      
      try {
        const response = await axios.post('https://lost-seven.vercel.app/admin/addpolice', formData, {
          headers: {
            token: `task__${token}`
          }
        });
      
        if (response.status === 200 && response.data.success) {
          console.log('Police account added successfully:', response.data);
          setSuccessMessage('Police account added successfully');
        }
      } catch (error) {
        handleErrorResponse(error);
      }
    }
  };

  const handleErrorResponse = (error) => {
    console.error('Error sending report:', error);
    setErrorMessage('An error occurred while adding police account. Please try again later.');
    
    if (error.response) {
      if (error.response.data.message === "TokenExpiredError: jwt expired") {
        alert("Your session has expired. Please login again.");
        handleRedirectToLogin();
      } else if (error.response.data.message === "you are not authorized") {
        alert("You are not authorized. Redirecting to login page...");
        handleRedirectToLogin();
      }
    }
  };

  const handleRedirectToLogin = () => {
    window.location.replace('/login');
  };
  

  const handleCloseError = () => {
    setErrorMessage('');
  };

  const handleCloseSuccess = () => {
    setSuccessMessage('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <img src={FollowPageBack} alt='FollowPageBack' className='FollowPageBack' />
      <h3 className='H3police'>Add Police Account</h3>
      <div className="form-groupPolice">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </div>
      {errorMessage && (
        <div className="errorPolice">
          <div className="error__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
          </div>
          <div className="error__title">{errorMessage}</div>
          <div className="error__close" onClick={handleCloseError}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20"><path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path></svg>
          </div>
        </div>
      )}
      {successMessage && (
        <div className="successPolice">
          <div className="success__icon">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" fill="#393a37" fill-rule="evenodd"></path></svg>
          </div>
          <div className="success__title">{successMessage}</div>
          <div className="success__close" onClick={handleCloseSuccess}>
            <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg>
          </div>
        </div>
      )}
    </form>
  );
}

export default AddPolice;
