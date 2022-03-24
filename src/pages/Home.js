import React, { useState, useEffect } from 'react';
import { API_URL } from "../api/api_connection"
import axios from 'axios';

import Thought from '../components/thought_comps/Thought';

const url = API_URL + '/home'

function Home(props) {
    const [randThought, setRandThought] = useState({});

    const randUrl = url + "/random"

    useEffect(() => {
        axios.get(randUrl)
            .then(response => {
                setRandThought(response.data.randomThought[0]);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='home-container'>
            <h1>Welcome to Shower Thought Central</h1>
            <h3>A place to share your shower thoughts.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt perferendis nobis iste, provident molestiae eius aut rerum iusto iure excepturi repellendus voluptates ut minus quis architecto ratione consequuntur vel eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio debitis fuga esse iure consequatur cum quis, rem saepe corporis ipsa expedita maiores sint voluptatum tenetur officia molestias dignissimos nostrum animi.</p>
            <div className='random-thought'>
                <h3>Random Shower Thought</h3>
                <Thought key={randThought._id} thought={randThought} />
            </div>
            <div className='latest-thought'>
                <p>Latest thought goes here</p>
            </div>
        </div>

    );
}

export default Home;