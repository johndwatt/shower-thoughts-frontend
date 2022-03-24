import React, { useState, useEffect } from 'react';
import { API_URL } from "../api/api_connection"
import axios from 'axios';

import Thought from '../components/thought_comps/Thought';

const url = API_URL + '/home'

function Home(props) {
    const [randThought, setRandThought] = useState({});
    const [latestThought, setLatestThought] = useState({});

    const randUrl = url + "/random"
    const latestUrl = url + "/latest"

    useEffect(() => {
        axios.get(randUrl)
            .then(response => {
                setRandThought(response.data.randomThought[0]);
            }).catch(error => {
                console.log(error);
            });

        axios.get(latestUrl)
            .then(response => {
                setLatestThought(response.data.recentThought[0]);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    const handleRandRefresh = async (e) => {
        e.preventDefault();

        setRandThought(null);

        await axios.get(randUrl)
            .then(response => {
                setRandThought(response.data.randomThought[0]);
            }).catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='home-container'>
            <h1>Welcome to Shower Thought Central</h1>
            <h3>A place to share your shower thoughts.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt perferendis nobis iste, provident molestiae eius aut rerum iusto iure excepturi repellendus voluptates ut minus quis architecto ratione consequuntur vel eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio debitis fuga esse iure consequatur cum quis, rem saepe corporis ipsa expedita maiores sint voluptatum tenetur officia molestias dignissimos nostrum animi.</p>
            <div className='random-thought'>
                <h3>Random Shower Thought</h3>
                {randThought !== null ? (
                    <Thought key={randThought._id} thought={randThought} />
                ) : (
                    <h3 className='loading'>Loading...</h3>
                )}
                <button onClick={handleRandRefresh}>Randomize!</button>
            </div>
            <div className='latest-thought'>
                <h3>Latest Shower Thought</h3>
                <Thought key={latestThought._id} thought={latestThought} />
            </div>
        </div>

    );
}

export default Home;