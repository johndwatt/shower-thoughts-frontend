import React from 'react';

import "../../styles/Thought.css"

function Thought(props) {
    return (
        <div className="thought">
            <p className="thought-content">{props.thought.content}</p>
            <div className='thought-flex'>
                <p className="thought-thinker">{props.thought.thinker}</p>
            </div>
        </div>
    );
}

export default Thought;