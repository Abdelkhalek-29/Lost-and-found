import React from 'react';
 import logo from './logo3.png';
 import './ResetEmailForm.css';

const ResetPasswordEmail= () => {
  return (
    
    <div className="container-mail">
  <img  className="logo"src={logo} alt="logo"/> 
    
        <h1>You have requested to reset your password</h1>
        <p>We cannot simply send you your old password. A unique link to reset your password has been generated for you. To reset your password, click the following link and follow the instructions.</p>
         <button type="">Reset Password</button>
        </div>
    );
};

export default ResetPasswordEmail;