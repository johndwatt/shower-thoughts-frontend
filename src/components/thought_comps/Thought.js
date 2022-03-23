import React from 'react';

import "../../styles/Thought.css"

function Thought(props) {
    return (
        <div className="thought">
            <p className="thought-content">test thought</p>
            <div className='thought-flex'>
                <p className="thought-thinker">test thinker</p>
            </div>
        </div>
    );
}

export default Thought;