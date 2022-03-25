import React, { useState, useEffect } from 'react';
import { API_URL } from "../../api/api_connection"
import axios from 'axios';
import Thought from './Thought';

import "../../styles/ThoughtContainer.css"

const url = API_URL + '/thoughts'

function ThoughtContainer(props) {
    const [thoughts, setThoughts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setThoughts(response.data.thoughts);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    const handleSearchInput = (e) => {
        setSearch(e.target.value)
    }

    const handleClearSearch = (e) => {
        e.preventDefault();

        setSearch("")

        axios.get(url)
            .then(response => {
                setThoughts(response.data.thoughts);
            }).catch(error => {
                console.log(error);
            });
    }
        
    const handleSearch = async (e) => {
        e.preventDefault();

        axios.get(url + "?search=" + search)
        .then(response => {
            setThoughts(response.data.thoughts);
        }).catch(error => {
            console.log(error);
        });
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
                    <button 
                        type="submit" 
                        onClick={handleSearch}>
                        Search
                    </button>
                    <button 
                        onClick={handleClearSearch}>
                        Clear
                    </button>
                </form>
            </div>
            <div className='thought-container-display'>
                {thoughts.length > 0 ? (
                    thoughts.map(thought => ( 
                        <Thought key={thought._id} thought={thought} />
                    ))
                ) : (
                    <h3>No thoughts found. Click "Add Thought" to create a shower thought!</h3>
                    // ISSUE: What to do about loading?
                )}
            </div>
        </div>

    );
}

export default ThoughtContainer;