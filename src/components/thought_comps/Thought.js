import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import "../../styles/components/Thought.css"

function Thought(props) {

    const menuRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        /**
         * Closes dropdown menu and hides edit and delete buttons.
         * @param {Object} e Event object.
         */
        const closeMenu = (e) => {
            if (menuRef.current !== null && !menuRef.current.contains(e.target)) {
                setShowMenu(!showMenu);
            }
        };
        if (showMenu) {
          window.addEventListener('click', closeMenu);
        }
        return () => {
          window.removeEventListener('click', closeMenu);
        }
    }, [showMenu]);

    /**
     * Opens dropdown menu exposing edit and delete buttons.
     * @param {Object} e Event object.
     */
    const handleMenuShow = () => setShowMenu(!showMenu);

    return (
        <div className="thought">
            <p className="thought-content">{props.thought.content}</p>
            <div className='thought-flex'>
                <p className="thought-thinker">{props.thought.thinker}</p>
                <div className='dropdown-container'>
                    <button className='dropdown-trigger' onClick={handleMenuShow}>
                        Menu
                    </button>
                    <div ref={menuRef} className={`dropdown ${!showMenu && 'hidden'}`}>
                        <Link 
                            to={{pathname: `/dashboard/${props.thought._id}/edit`}} 
                            className="thought-btn">
                            Edit</Link>
                        <Link 
                            to={{pathname: `/dashboard/${props.thought._id}/delete`}} 
                            className="thought-btn">
                            Delete</Link> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thought;