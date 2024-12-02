import React, { useState, useEffect } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Authentication.css"; // Assuming this file contains your component-specific styles

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [nId, setNId] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Add styles to the body element
    document.body.style.backgroundColor = "#c9d6ff";
    document.body.style.backgroundImage = "linear-gradient(to right, #e2e2e2, #c9d6ff)";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.flexDirection = "column";
    document.body.style.height = "100vh";
  /*   document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
    document.body.style.fontFamily = "'Montserrat', sans-serif"; */


    return () => {
      document.body.style.backgroundColor = null;
      document.body.style.backgroundImage = null;
      document.body.style.display = null;
      document.body.style.alignItems = null;
      document.body.style.justifyContent = null;
      document.body.style.flexDirection = null;
      document.body.style.height = null;
      
    };
  }, []); 

const handleSignUp = async (e) => {
  e.preventDefault();
  if (password === confirmPassword) {
    try {
      const response = await axios.post("https://lost-seven.vercel.app/auth/signup", {
        name,
        nId,
        email,
        password,
        confirmPassword
      });

      const result = response.data;
      if (result.success) {
        window.alert(result.message);
      } else {
        window.alert("Validation Error. Please check that Email must be a valid email and Password length must be at least 8 characters long.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      window.alert("Error signing up. Please try again."); 
    }
  } else {
    window.alert("Passwords do not match");
    setPasswordsMatch(false);
  }
};


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://lost-seven.vercel.app/auth/login", {
        email,
        password
      });

      const result = response.data;
      localStorage.setItem("user-info", JSON.stringify(result));
      if (result.userRole === "admin") {
        navigate("/HomeAdmin");
      } else if (result.userRole === "police") {
        navigate("/Police");
      } else if (result.userRole === "dar") {
        navigate("/DarHome");
      } else {
        navigate("/home");
      }
    }catch (error) {
      console.error("Error logging in:", error);
      if (error.response && error.response.data.message === "Invalid Password") {
        alert("The password that you've entered is incorrect.");
      } else {
        window.alert("Error logging in. Please try again.");
      }
    }
  };

  return (
    <div className={`container1 ${signUp ? "active" : ""}`} id="container">
      <div className="form-container1 sign-up">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <div className="social-icons1">
            <a href="https://accounts.google.com/Login" className="icon-google1">
              <BsGoogle />
            </a>
            <a href="https://www.facebook.com/" className="icon-facebook1">
              <BsFacebook />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="tel" placeholder="National ID" value={nId} onChange={(e) => setNId(e.target.value)} required />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password (confirm)"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {!passwordsMatch && (
            <h8 className="passwordError">Passwords do not match</h8>
          )}
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="form-container1 sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <div className="social-icons1">
            <a href="https://accounts.google.com/Login" className="icon-google1">
              <BsGoogle />
            </a>
            <a href="https://www.facebook.com/" className="icon-facebook1">
              <BsFacebook />
            </a>
          </div>
          <span>or use your email password</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btnForget" onClick={() => navigate("/EmailForm")}>Forget Your Password?</button>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="toggle-container1">
        <div className="toggle1">
          <div className="toggle-panel1 toggle-left1">
            <h1>Welcome Back</h1>
            <p>Enter your personal details to use all of the site features</p>
            <button
              onClick={() => {
                setSignUp(false);
              }}
              className="hidden1"
              id="login"
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel1 toggle-right1">
            <h1>Hello</h1>
            <p>Register with your personal details to use all of the site features</p>
            <button
              onClick={() => {
                setSignUp(true);
              }}
              className="hidden1"
              id="register"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginform;
