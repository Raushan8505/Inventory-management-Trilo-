// SignUpForm.js
import React, { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpForm() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  // const navigate = useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://coderipple-backend.onrender.com/users/register`, {
        name,
        email,
        pass,
      });
      console.log(response);
      if (response.data.msg === "Registration successful") {
        alert("Wow");
      }
      if (response.data.msg == "Already Registered") {
        // setShowModal(true);
        alert("Already Registrered. Please Login");
      } else {
        // setShowModal(true);
        alert("Registration successful");
      }
    } catch (error) {
      console.log(error);
      // setShowModal(true);
      if (error.response && error.response.status === 400) {
        alert("Email already exists. Please try with another email.");
      } else {
        alert("Registration failed. Please try again later.");
      }
    }
  };

 
  return (
    <form className="for sign-up-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" value={name} onChange={handleUsername}/>
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" value={email} onChange={handleEmail}/>
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" value={pass} onChange={handlePassword}/>
      </div>
      <input type="submit" className="btns" value="Sign up" />
      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
}

export default SignUpForm;
