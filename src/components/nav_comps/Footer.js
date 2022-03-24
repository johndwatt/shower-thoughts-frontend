import React from 'react';

import "../../styles/Footer.css"

function Footer(props) {
    return (
        <footer className="footer">
            <h4 className='footer-content'>
                &copy; <a href="https://johndwatt.com/" target="_blank" rel="noreferrer" className='footer-link'>John D. Watt</a>
            </h4>
        </footer>
    );
}

export default Footer;