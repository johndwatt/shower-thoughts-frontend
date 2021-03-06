import React from 'react';
import { Link } from 'react-router-dom';

import "../../styles/components/Navbar.css"

function Navbar(props) {
    return (
        <nav className="navbar">
            <Link to='/' className='navbar-home'>STCentral</Link>        
            <ul className='navbar-items'>
                <Link to='/dashboard' className='navbar-item'>Dashboard</Link>
                <Link to='/dashboard/add' className='navbar-item'>Add</Link>
            </ul>          
        </nav>
    );
}

export default Navbar;