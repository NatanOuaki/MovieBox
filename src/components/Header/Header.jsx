import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import logo from "../../assets/img/logoRed.png";
import userImg from "../../assets/img/user.svg";
import './header.css';

function Header() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); 
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {               
        signOut(auth).then(() => {
            navigate("/");
            console.log("Signed out successfully");
        }).catch((error) => {
            console.error("Sign-out error:", error);
        });
    };

    return (
        <header>
            <div className="logoAndNavLinks">
                <NavLink to="/" className="link">
                    <img className="logo" src={logo} alt="Logo MovieBox" />
                </NavLink>
                <nav className="navLinks">
                    <h3>
                        <NavLink 
                            to="/" 
                            style={({ isActive }) => ({ color: isActive ? "#EB473D" : "white" })}
                        >
                            Home
                        </NavLink>
                    </h3>
                    <h3>
                        <NavLink 
                            to="/popular" 
                            style={({ isActive }) => ({ color: isActive ? "#EB473D" : "white" })}
                        >
                            Popular
                        </NavLink>
                    </h3>
                    <h3>
                        <NavLink 
                            to="/categories" 
                            style={({ isActive }) => ({ color: isActive ? "#EB473D" : "white" })}
                        >
                            Categories
                        </NavLink>
                    </h3>
                    <h3>
                        <NavLink 
                            to="/favorites" 
                            style={({ isActive }) => ({ color: isActive ? "#EB473D" : "white" })}
                        >
                            Favorites
                        </NavLink>
                    </h3>
                </nav>
            </div>
            <div className='navLinks rightDiv'>
                {user ? (
                    <div className="rightDiv" onClick={handleLogout}>
                        <img className="userImg" src={userImg} alt="User Icon" />
                        <h3>Logout</h3>
                    </div>
                ) : (
                    <NavLink to="/login" className="rightDiv">
                        <img className="userImg" src={userImg} alt="User Icon" />
                        <h3>Login</h3>
                    </NavLink>
                )}
            </div>
        </header>
    );
}

export default Header;
