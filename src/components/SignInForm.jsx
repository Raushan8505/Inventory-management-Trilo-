// SignInForm.js
import React, { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
function SignInForm() {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
 
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
   
    e.preventDefault()
    const payload = {
      email,
      pass
    }
   
     try {
      const res = await fetch(`https://coderipple-backend.onrender.com/users/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      console.log(data);
     
      if(data.msg == "Login Successful!") {
        localStorage.setItem('token', data.token);
        console.log(data.name)
        localStorage.setItem('name', data.name);
        // localStorage.setItem('email', data.email);
        // handleClick();
        setTimeout(() => {
          navigate('/product');
        }, 600);
      
      } else {
        // handleClick2();
        setEmail('');
        setPassword('');
        alert(data.msg);
      }

     } catch (error) {
      console.log(error);
      
     }
    
  }
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("name");

  console.log("Token:", token);
  console.log("name:", username);
  return (
    <form className="for sign-in-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" value={pass} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <input type="submit" value="Login" className="btns solid" />
      {/* <p className="social-text">Or Sign in with social platforms</p> */}
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

export default SignInForm;
