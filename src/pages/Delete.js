import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_URL } from "../api/api_connection"
import axios from 'axios';

import "../styles/Form.css"
import "../styles/Thought.css"

const url = API_URL + "/thoughts"

function Delete(props) {
    const { id } = useParams();

    const idUrl = url + "/" + id;

    const [thought, setThought] = useState({});

    useEffect(() => {
        axios.get(idUrl)
            .then(response => {
                setThought(response.data.thought);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.delete(idUrl)
            .then(response => {
                console.log(response.data);
                window.location = "/dashboard";
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='delete-container'>
            <h2>Are you sure you want to delete this shower thought?</h2>
            <div className="thought">
                <p className="thought-content">{thought.content}</p>
                <div className='thought-flex'>
                    <p className="thought-thinker">{thought.thinker}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type='submit'
                    className='delete-submit'
                    value='Delete Thought'/>
                <Link to="/dashboard" className='delete-cancel'>Cancel</Link>
            </form>
            
        </div>

    );
}

export default Delete;