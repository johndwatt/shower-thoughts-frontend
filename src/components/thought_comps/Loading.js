import React from 'react';

import "../../styles/components/Thought.css"

function Loading(props) {
    return (
        <div className='loading-container'>
            <div className="thought">
                <p className="thought-content loading">Loading...</p>
                <div className='thought-flex'>
                    <p className="thought-thinker loading">Loading...</p>
                    <div className='dropdown-container'>
                        <button className='dropdown-trigger loading'>
                            Loading
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;