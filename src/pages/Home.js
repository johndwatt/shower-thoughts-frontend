import React, { useState, useEffect } from 'react';
import { API_URL } from "../api/api_connection"
import axios from 'axios';

import Thought from '../components/thought_comps/Thought';
import Loading from '../components/thought_comps/Loading';
import ShowerImg from '../images/shower-head.jpg'

import '../styles/pages/Home.css'

const url = API_URL + '/home'

function Home(props) {
    const [randThought, setRandThought] = useState(null);
    const [latestThought, setLatestThought] = useState(null);
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
            <div className='image-container'>
                <img src={ShowerImg} alt="Shower Dropplets" className='image'/>
            </div>
            <h1>Welcome to Shower Thought Central</h1>
            <h3 className='subheading'>A place to share your shower thoughts.</h3>
            <h3 className='section-heading'>About Shower Thought Central:</h3>
            <p className='about-text'> <strong>Shower Thought: A type of thought you might have while carrying out a routine task like showering, driving, or daydreaming.</strong> 
            <br /> 
            <br /> 
            Shower Thought Central is a dedicated space for you to share your shower thoughts publicly. Next time insight strikes, remember to come over to Shower Thought Central and share your thoughts with the world. </p>
            <div>
                <h3 className='section-heading'>Random Shower Thought</h3>
                { loadingRand ? (
                    <Loading />
                ) : (
                    <div className='home-thought-display'>
                        { randThought !== null ? (
                            <Thought key={randThought._id} thought={randThought} />
                        ) : (
                            <div className='no-thoughts'>
                                <h3>No thoughts found!</h3>
                                <p>Click "Add Thought" to create a shower thought.</p>
                            </div>
                        )}
                        <button className="button home-thought-btn" onClick={handleRefreshRand}>Randomize!</button>
                    </div>
                )}
            </div>
            <div>
                <h3 className='section-heading'>Latest Shower Thought</h3>
                { loadingLate ? (
                    <Loading />
                ) : (
                    <div className='home-thought-display'>
                        { latestThought !== null ? (
                            <Thought key={latestThought._id} thought={latestThought} />
                        ) : (
                            <div className='no-thoughts'>
                                <h3>No thoughts found!</h3>
                                <p>Click "Add Thought" to create a shower thought.</p>
                            </div>
                        )}
                        <button className="button home-thought-btn" onClick={handleRefreshLatest}>Get Latest Thought!</button>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Home;