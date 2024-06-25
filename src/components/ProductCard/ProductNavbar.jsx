import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './ProductNavbar.css';
import { Button } from 'react-bootstrap';

function ProductNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") !== null);
    const navigate = useNavigate();
    const username = localStorage.getItem("name");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <nav id='ProductNavbar_A' style={{display:'flex', flexDirection:'row'}}>
            <img className="logo" src='https://assets-global.website-files.com/5f32b7eea3b2c90751809aca/62bd60e5f7647998b2d3709d_Trilo%20Logo.svg' alt="logo" />
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
                >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                {isLoggedIn ? (
                    <>
                        <li>
                            <NavLink to="/"><strong>Home</strong></NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/product"><strong>Products</strong></NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/billing"><strong>Billing</strong></NavLink>
                        </li>
                        <li >
                            <Button style={{width: 'auto',marginRight: '10px', backgroundColor:'red'}} onClick={handleLogout}>Logout</Button>
                        </li>
                        <li style={{ paddingTop: "8px", marginRight: "15px" }}>
                            <strong>Welcome! {username}</strong>
                        </li>
                    </>
                ) : (
                    <li>
                        <button style={{ backgroundColor: "green", height: "40px", width: "125px", borderRadius: "7px", color: "white" }} className="signout" onClick={() => navigate('/sign')}>
                            <strong>Login/SignUp</strong>
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default ProductNavbar;
