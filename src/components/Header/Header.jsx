import { NavLink } from 'react-router-dom';
import logo from "../../assets/img/logoRed.png"
import userImg from "../../assets/img/user.svg"
import search from "../../assets/img/search.svg"
import './header.css';

function Header() {
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
                    style={({ isActive }) => ({color: isActive ? "#EB473D" : "white"
                    })}
                    >
                    Home
                    </NavLink>
                </h3>
                <h3>
                    <NavLink 
                    to="/popular" 
                    style={({ isActive }) => ({color: isActive ? "#EB473D" : "white"
                    })}
                    >
                    Popular
                    </NavLink>
                </h3>
                <h3>
                    <NavLink 
                    to="/categories" 
                    style={({ isActive }) => ({color: isActive ? "#EB473D" : "white"
                    })}
                    >
                    Categories
                    </NavLink>
                </h3>
                <h3>
                    <NavLink 
                    to="/favorites" 
                    style={({ isActive }) => ({color: isActive ? "#EB473D" : "white"
                    })}
                    >
                    Favorites
                    </NavLink>
                </h3>
                </nav>
            </div>
            <div className='rightDiv'>
                <NavLink to="/" className="link">
                    <img className="userImg" src={search} alt="Search Icon" />
                </NavLink>
                <NavLink to="/" className="link">
                    <img className="userImg" src={userImg} alt="User Icon" />
                </NavLink>
            </div>

        </header>
    );
}

export default Header;
