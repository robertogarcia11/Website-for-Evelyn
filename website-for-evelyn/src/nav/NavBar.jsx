import React from "react";

function NavBar() {
    return (
        <nav className="navbar">
            <div className='navbar-logo'>
                <img src='src/images/flower.png' alt="logo" />
            </div>

            <ul className='navbar-menu'>
                <li className='navbar-item'><a href='/'>Home</a></li>
                <li className='navbar-item'><a href='/policies'>Policies</a></li>
                <li className='navbar-item'><a href='/requests'>Requests</a></li>
                <li className='navbar-item'><a href='/socials'>Socials</a></li>
            </ul>

            <div className="nav-toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              
            </div>
        
        </nav>
    )
 }

export default NavBar;
