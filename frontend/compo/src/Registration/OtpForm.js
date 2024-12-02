/* import React, { useState } from 'react';
import './OtpForm.css';
import { useNavigate } from 'react-router-dom';

function OtpForm() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!otp || !/^\d{4}$/.test(otp)) {
      setError('Otp is invalid. Please enter the four numbers that were sent via email..');
      return;
    }
  
    // OTP is valid, you can proceed with further logic such as sending it to the server for verification
    console.log('Submitted OTP:', otp);
    // Clear any previous error message
    setError('');
    // Navigate to the ResetPassword route
    navigate("/ResetPassword");
  };

  return (
    <div className="container-Otp">
      <h1>Enter OTP Code</h1>
      <p>Check Email</p>
      <div className="Otp-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="New-Otp"
            placeholder="OTP"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              setError(''); // Clear error message when user starts typing
            }}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default OtpForm;
 */

/* import React, { useState } from 'react';
import './OtpForm.css';
import { useNavigate } from 'react-router-dom';

function OtpForm() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const formatOtp = (value) => {
    // Remove any non-numeric characters from the input value
    const sanitizedValue = value.replace(/\D/g, '');
    // Insert a dash "-" after each digit except for the last one
    return sanitizedValue.slice(0, 4).split('').join('-');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Remove dashes from the OTP value before validation
    const sanitizedOtp = otp.replace(/-/g, '');

    if (!sanitizedOtp || sanitizedOtp.length !== 4 || !/^\d{4}$/.test(sanitizedOtp)) {
      setError('Otp is invalid. Please enter the four numbers that were sent via email.');
      return;
    }
  
    // OTP is valid, you can proceed with further logic such as sending it to the server for verification
    console.log('Submitted OTP:', sanitizedOtp);
    // Clear any previous error message
    setError('');
    // Navigate to the ResetPassword route
    navigate("/ResetPassword");
  };

  return (
    <div className="container-Otp">
      <h1>Enter OTP Code</h1>
      <p>Check Email</p>
      <div className="Otp-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="New-Otp"
            placeholder="OTP"
            value={formatOtp(otp)}
            onChange={(e) => {
              setOtp(e.target.value);
              setError(''); 
            }}
            maxLength={7} 
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default OtpForm;
 */
// OtpForm.js

// OtpForm.js
import React, { useState } from 'react';
import './OtpForm.css';
import { useNavigate, useLocation } from 'react-router-dom';

function OtpForm() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the OTP
    if (!otp || otp.length !== 5 || !/^\d{5}$/.test(otp)) {
      setError('OTP is invalid. Please enter exactly 5 numbers that were sent via email.');
      return;
    }
  
    // Clear any previous error message
    setError('');
    // Navigate to the NewPassword route with email and OTP as query parameters
    navigate(`/NewPassword?email=${encodeURIComponent(email)}&otp=${otp}`);
  };

  return (
    <div className="container-Otp">
      <h1>Enter OTP Code</h1>
      <p>Check Email</p>
      <div className="Otp-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="New-Otp"
            placeholder="OTP"
            value={otp}
            onChange={(e) => {
              // Ensure OTP contains only numbers and limit it to 5 characters
              const formattedOtp = e.target.value.replace(/\D/g, '').slice(0, 5);
              setOtp(formattedOtp);
              setError(''); 
            }}
            maxLength={5} // Set the maxLength to 5
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default OtpForm;

