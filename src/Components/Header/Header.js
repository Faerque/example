import React, { useContext } from 'react';
import './Header.css';
import menu from './menu.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { handleSignOut, isLoggedIn, loggedInInfo } from '../Login/LoginManager';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // is logged in
    const isLogged = isLoggedIn();

    // Handle sign out button
    const signOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    };

    const loggedUser = loggedInInfo()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
                        <Link style={{ textDecoration: 'none' }} to="/home"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Home </p>
                        </li></Link>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#carousel">Our Portfolio</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#service">Our Service</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#review">Review</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#footer">Contact Us</a>
                        </li>
                     
                    </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;