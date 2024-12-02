import React, { useState } from 'react';
import './Resetpasswordconfirm.css';
import axios from 'axios';
import { useLocation, useNavigate} from 'react-router-dom'; // Import useLocation hook

function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Extract email and OTP from URL parameters using useLocation hook
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');
  const otp = searchParams.get('otp');
  const navigate = useNavigate(); 
  // Handle submission of new password
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for password length and containing at least one number
    if (password.length < 5 || !/\d/.test(password)) {
      setError('The password must be at least 5 characters long and contain at least one number.');
      return;
    }

    if (password !== confirmPassword) {
      setError('The new password and confirmation password do not match.');
      return;
    }

    try {
      // Make a POST request to reset the password
      const response = await axios.put('https://lost-seven.vercel.app/auth/resetPassword', {
        email,
        forgetCode: otp,
        password,
        confirmPassword,
      });

      if (response.data.success) {
        // Ensure that the message matches the expected success message
        if (response.data.message === "Password Changed ! Try to login ") {
          // Password reset successful
          alert('Password reset successfully!');
          setPassword('');
          setConfirmPassword('');
          // Navigate to the login page
          navigate("/login");
        } else {
          alert('Unexpected success response. Please try again or contact support.');
        }
      } else {
        // Handle other cases where success is false
        alert('Error resetting password. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Error resetting password. Please try again.');
    }
  }
  return (
    <div className="container-password">
      <h1>Enter New Password</h1>
      <div className="password-form">
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            id="New-Password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(''); // Clear error message when user starts typing
            }}
            required
          />
          <input
            type="password"
            id="New-Password-confirm"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError(''); // Clear error message when user starts typing
            }}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewPassword;
