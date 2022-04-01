import React from 'react';

import "../../styles/components/Thought.css"

function Loading(props) {
    return (
        <div className="thought">
            <p className="thought-content loading">Loading...</p>
            <div className='thought-flex'>
                <p className="thought-thinker loading">Loading...</p>
            </div>
        </div>
    );
}

export default Loading;