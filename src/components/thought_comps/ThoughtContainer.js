import React, { useState, useEffect } from 'react';
import { API_URL } from "../../api/api_connection"
import axios from 'axios';
import Thought from './Thought';

import "../../styles/components/ThoughtContainer.css"

const url = API_URL + '/thoughts'

function ThoughtContainer(props) {
    const [thoughts, setThoughts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true);

        await axios.get(url)
            .then(response => {
                setThoughts(response.data.thoughts);
            }).catch(error => {
                console.log(error);
            });
        
        setLoading(false);
    }, []);

    /**
     * Sets search query to value of search input on dashboard page.
     * @param {Object} e Event Object.
     */
    const handleSearchInput = (e) => {
        setSearch(e.target.value)
    }

    /**
     * Clears search state/input and sends Axios request to reload shower thoughts on dashboard page.
     * @param {Object} e Event Object.
     */
    const handleClearSearch = async (e) => {
        e.preventDefault();

        setSearch("")
        setLoading(true);

        await axios.get(url)
            .then(response => {
                setThoughts(response.data.thoughts);
            }).catch(error => {
                console.log(error);
            });

        setLoading(false);
    }
    
    /**
     * Sends Axios request with search query and loads returned shower thoughts on dashbaord page.
     * @param {Object} e Event object.
     */
    const handleSearch = async (e) => {
        e.preventDefault();

        setLoading(true);

        await axios.get(url + "?search=" + search)
        .then(response => {
            setThoughts(response.data.thoughts);
        }).catch(error => {
            console.log(error);
        });
        
        setLoading(false);
    }


    return (
        <div className='thought-container'>
            <div className='thought-container-search'>
                <form>
                    <input 
                        name="search" 
                        type="search"
                        value={search}
                        onChange={handleSearchInput}
                        placeholder="Search" />
                    <div className='thought-container-search-btns'>
                        <button 
                            type="submit" 
                            className='thought-container-search-button'
                            onClick={handleSearch}>
                            Search
                        </button>
                        <button
                            className='thought-container-clear-button'
                            onClick={handleClearSearch}>
                            Clear
                        </button>
                    </div>

                </form>
            </div>
            <div className='thought-container-load'>
                { loading ? (
                    <h3 className='loading'>Loading...</h3>
                ) : (
                    <div className='thought-container-display'>
                        { thoughts.length > 0 ? (
                            thoughts.map(thought => ( 
                                <Thought key={thought._id} thought={thought} />
                            ))
                        ) : (
                            <h3>No thoughts found. Click "Add Thought" to create a shower thought!</h3>
                        )}
                    </div>
                )}    
            </div>
        </div>

    );
}

export default ThoughtContainer;