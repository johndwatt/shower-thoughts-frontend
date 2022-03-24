import React, { useState, useEffect } from 'react';
import { API_URL } from "../../api/api_connection"
import axios from 'axios';
import Thought from './Thought';

import "../../styles/ThoughtContainer.css"

const url = API_URL + '/thoughts'

function ThoughtContainer(props) {
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setThoughts(response.data.thoughts);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='thought-container'>
            {thoughts.length > 1 ? (
                thoughts.map(thought => ( 
                    <Thought key={thought._id} thought={thought} />
                ))
            ) : (
                <h3 className='loading'>Loading...</h3>
            )}
        </div>

    );
}

export default ThoughtContainer;