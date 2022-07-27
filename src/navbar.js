import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>TSWELOPELE TECH BLOG</h1>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/create" >create</Link>
            </div>
        </nav>

    );
}
 
export default Navbar;