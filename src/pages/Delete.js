import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_URL } from "../api/api_connection"
import axios from 'axios';

import "../styles/components/Form.css"
import "../styles/components/Thought.css"

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

    /**
     * Handles form submission for deletion of selected shower thought. Sends Axios delete request. 
     * @param {Object} e Event object.
     */
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
            <form onSubmit={handleSubmit} className="form-alt-flex">
                <input
                    type='submit'
                    className='button form-cancel'
                    value='Delete Thought'/>
                <Link to="/dashboard" className='button form-cancel'>Cancel</Link>
            </form>
            
        </div>

    );
}

export default Delete;