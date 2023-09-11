import React from "react";
import { NavLink } from 'react-router-dom'
// import Navigation from "../Navigation/Navigation"
import "./Header.css";

// function Header(props) {
//     const { currentTab, setCurentTab } = props;

//     return (
//         <header>
//             <div>
//                 <h2>React Portfolio</h2>
//             </div>
//             <div>
//                 <Navigation
//                     currentTab={currentTab}
//                     setCurentTab={setCurentTab}
//                     ></Navigation>
//             </div>
//         </header>
//     );
// }

function Header() {
    return (
        <nav className="nav-bar"> 
            <ul>
                <li><NavLink to='/'>Homepage</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Projects</NavLink></li>

            </ul>
        </nav>
    );
}


export default Header; 