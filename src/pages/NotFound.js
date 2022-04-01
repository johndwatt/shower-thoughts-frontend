import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props){
    return (
        <main className='not-found'>
            <h1>404 - Page Not Found</h1>
            <p className='not-found-text'>Uh oh! Looks like the page you are looking for doesn't exist. Please click the link below to return to the home page.</p>
            <Link to="/" className='button not-found-button'>Home</Link>
        </main>
    )
}

export default NotFound;