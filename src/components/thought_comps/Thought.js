import React from 'react';
import { Link } from 'react-router-dom';

import "../../styles/Thought.css"

function Thought(props) {
    return (
        <div className="thought">
            <p className="thought-content">{props.thought.content}</p>
            <div className='thought-flex'>
                <p className="thought-thinker">{props.thought.thinker}</p>
                <div className="thought-buttons">
                    <Link to={{pathname: `/dashboard/${props.thought._id}/edit`}}>Edit</Link>
                    <Link to={{pathname: `/dashboard/${props.thought._id}/delete`}}>Delete</Link> 
                </div>
            </div>
        </div>
    );
}

export default Thought;