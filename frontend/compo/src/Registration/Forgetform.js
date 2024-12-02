import React, { useState } from "react";
import './Forgetform.css';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

function ResetPasswordForm() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Use navigate hook here

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your code to send email
    try {
      const response = await axios.post('https://lost-seven.vercel.app/auth/sendForgetCode', { email });
      console.log(response.data); // Log the response
      alert('Check Email');
      // Navigate to the Newpassword component and pass email as a query parameter
      navigate(`/OtpForm?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.'); 
    }
  }

  return (
    <div className="containerforget1">
      <h1>Reset your Password</h1>
      <p>Enter your email and we'll send you an instruction on how to reset your password</p>
      <div className="email-form1">
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
}

export default ResetPasswordForm;

