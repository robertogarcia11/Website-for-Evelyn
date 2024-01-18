import React, {useState} from "react";
import "../styles/NavBar.css";
import flower from '../images/flower.png'


function NavBar() {

    const [active, setActive] = useState("navbar-menu");

    const navToggle = () => {
        active === 'navbar-menu' 
            ? setActive('navbar-menu nav-active') 
            : setActive('navbar-menu');
    }

    return (
        <nav className="nav">
            
            <a href="#" className="nav-logo">
                <img src={flower} alt="flower" width="150" heigh="150"/>

            </a>

            <ul className={active}>
                <li className='navbar-item'><a href='/'>Home</a></li>
                <li className='navbar-item'><a href='/policies'>Policies</a></li>
                <li className='navbar-item'><a href='/requests'>Requests</a></li>
                <li className='navbar-item'><a href='/socials'>Socials</a></li>
            </ul>

            <div onClick={navToggle} className="nav-toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              
            </div>
        
        </nav>
    )
 }

export default NavBar;
