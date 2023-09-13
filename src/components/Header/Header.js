import React from "react";
import { NavLink } from 'react-router-dom'
import "./Header.css";


function Header() {
    return (
        <header>
            <nav className="nav-bar"> 
                <ul>
                    <li><NavLink to='/'>Homepage</NavLink></li>
                    <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                    <li><NavLink to='/contact'>Contact Me</NavLink></li>
                    <li><NavLink to='/Resume'>Resume</NavLink></li>

                </ul>
            </nav>
        </header>
    );
}


export default Header; 