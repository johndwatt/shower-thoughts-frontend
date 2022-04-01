import React, { useState, useEffect } from 'react';
import { API_URL } from "../api/api_connection"
import axios from 'axios';

import Thought from '../components/thought_comps/Thought';

import '../styles/pages/Home.css'

const url = API_URL + '/home'

function Home(props) {
    const [randThought, setRandThought] = useState({});
    const [latestThought, setLatestThought] = useState({});
    const [loadingRand, setLoadingRand] = useState(false);
    const [loadingLate, setLoadingLate] = useState(false);

    const randUrl = url + "/random"
    const latestUrl = url + "/latest"

    useEffect(async () => {
        setLoadingRand(true);
        setLoadingLate(true);

        await axios.get(randUrl)
            .then(response => {
                setRandThought(response.data.randomThought[0]);
            }).catch(error => {
                console.log(error);
            });

        await axios.get(latestUrl)
            .then(response => {
                setLatestThought(response.data.recentThought[0]);
            }).catch(error => {
                console.log(error);
            });

        setLoadingRand(false);
        setLoadingLate(false);
    }, []);

    /**
     * Sends Axios request to retrieve a random thought from database and sets random thought state to returned thought. 
     * @param {Object} e Event object.
     */
    const handleRefreshRand = async (e) => {
        e.preventDefault();

        setRandThought(null);
        setLoadingRand(true);

        await axios.get(randUrl)
            .then(response => {
                setRandThought(response.data.randomThought[0]);
            }).catch(error => {
                console.log(error);
            });

        setLoadingRand(false);
    };

    /**
     * Sends Axios request to retrieve the latest thought from database and sets latest thought state to returned thought. 
     * @param {Object} e Event object.
     */
    const handleRefreshLatest = async (e) => {
        e.preventDefault();

        setLatestThought(null);
        setLoadingLate(true);

        await axios.get(latestUrl)
            .then(response => {
                setLatestThought(response.data.recentThought[0]);
            }).catch(error => {
                console.log(error);
            });

        setLoadingLate(false);
    };

    return (
        <div className='home-container'>
            <h1>Welcome to Shower Thought Central</h1>
            <h3 className='subheading'>A place to share your shower thoughts.</h3>
            <h3 className='section-heading'>About Shower Thought Central:</h3>
            <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt perferendis nobis iste, provident molestiae eius aut rerum iusto iure excepturi repellendus voluptates ut minus quis architecto ratione consequuntur vel eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio debitis fuga esse iure consequatur cum quis, rem saepe corporis ipsa expedita maiores sint voluptatum tenetur officia molestias dignissimos nostrum animi.</p>
            <div>
                <h3 className='section-heading'>Random Shower Thought</h3>
                { loadingRand ? (
                    <h3 className='loading'>Loading...</h3>
                ) : (
                    <div className='home-thought-display'>
                        { randThought !== null ? (
                            <Thought key={randThought._id} thought={randThought} />
                        ) : (
                            <h3>No thoughts found. Click "Add Thought" to create a shower thought!</h3>
                        )}
                        <button className="button home-thought-btn" onClick={handleRefreshRand}>Randomize!</button>
                    </div>
                )}
            </div>
            <div>
                <h3 className='section-heading'>Latest Shower Thought</h3>
                { loadingLate ? (
                    <h3 className='loading'>Loading...</h3>
                ) : (
                    <div className='home-thought-display'>
                        { latestThought !== null ? (
                            <Thought key={latestThought._id} thought={latestThought} />
                        ) : (
                            <h3>No thoughts found. Click "Add Thought" to create a shower thought!</h3>
                        )}
                        <button className="button home-thought-btn" onClick={handleRefreshLatest}>Get Latest Thought!</button>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Home;