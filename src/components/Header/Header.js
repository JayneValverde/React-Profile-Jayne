import React from "react";
import { NavLink } from 'react-router-dom'
// import Navigation from "../Navigation/Navigation"
import "./Header.css";


function Header() {
    return (
        <header>
            <nav className="nav-bar"> 
                <ul>
                    <li><NavLink to='/'>Homepage</NavLink></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                    <li><NavLink to='/contact'>Projects</NavLink></li>

                </ul>
            </nav>
        </header>
    );
}


export default Header; 