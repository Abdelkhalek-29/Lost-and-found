import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleClick = () => {
    window.location.href = `mailto:graduation184@gmail.com?subject=Contact&body=${encodeURIComponent(email)}`;
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#" className="navbar-brand">
            <span style={{ textTransform: 'uppercase', fontWeight: 700, marginLeft: '40px', color: 'black', fontSize: '30px' }}>
              Find<span style={{ color: 'orange' }}>ME</span>
            </span>
          </a>
        </div>

        <div className="footer-links">
          <div className="link-pair">
            <a href="#home">Find passion</a>
            <a href="#about" className="about-link">Categories</a>
          </div>
          <div className="link-pair">
            <a href="#services">Skills</a>
            <a href="#contact" className="customer-link">Customer</a>
          </div>
        </div>

        <div className="footer-contact">
          <div className="contact-container">
            <p>Join our community:</p>
            <div className="contact-form">
              <input 
                type="text" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleClick}>GO</button>
            </div>
          </div>
        </div>
      </div>
      <div className='FooterBreak'></div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Team 9 El-Shorouk Academy</p>
      </div>
      <div className='EndFooter'></div>
    </footer>
  );
}

export default Footer;
