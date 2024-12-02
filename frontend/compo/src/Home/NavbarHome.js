import React from 'react';
import './NavbarHome.css';

function NavbarHome() {
  return (
    <nav className="navcontainer">
{/*       <a href="#" className="navbar-brand">Skillex.</a>
 */}     <a href="#" className="navbar-brand">            <span style={{ textTransform: 'uppercase', fontWeight: 700, marginLeft: '2px', color: 'black' }}>Find<span style={{ color: 'orange' }}>ME</span></span>
.</a>
        <ul className="navbar-nav ">
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
      </ul>
      <div className="button-group">
        <button className="btn-login">Login</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default NavbarHome;
