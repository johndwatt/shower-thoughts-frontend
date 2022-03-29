import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from "../api/api_connection"
import axios from 'axios';

import "../styles/Form.css"

const url = API_URL + "/thoughts"

function Edit(props) {
    const { id } = useParams();

    const idUrl = url + "/" + id;

    const [content, setContent] = useState("");
    const [thinker, setThinker] = useState("");
    const [nsfw, setNsfw] = useState(false);

    useEffect(() => {
        axios.get(idUrl)
            .then(response => {
                setContent(response.data.thought.content);
                setThinker(response.data.thought.thinker);
                setNsfw(response.data.thought.nsfw);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    /**
     * Updates shower thought Content state on change.
     * @param {Object} e Event object.
     */
    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }

    /**
     * Updates shower thought Thinker state on change.
     * @param {Object} e Event object.
     */
    const handleChangeThinker = (e) => {
        setThinker(e.target.value);
    }

    /**
     * Updates shower thought NSFW state on change.
     * @param {Object} e Event object.
     */
    const handleChangeNsfw = (e) => {
        const value = e.target.name === 'nsfw' ? e.target.checked : e.target.value
        setNsfw(value);
    }

    /**
     * Handles form submission for updating selected shower thought. Sends Axios request with updated shower thought object. 
     * @param {Object} e Event object.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const thought = {
            content: content,
            thinker: thinker,
            nsfw: nsfw,
        }

        axios.put(idUrl, thought)
            .then(response => {
                console.log(response.data);
                window.location = "/dashboard";
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='form-container'>
            <h2>Edit Shower Thought</h2>
            <form onSubmit={handleSubmit} className='form' >
                <div className='input-container'>
                    <label>Thought: </label>
                    <textarea  
                        type='text'
                        required
                        name='content'
                        placeholder='The thought...'
                        className='form-content'
                        value={content}
                        onChange={handleChangeContent}>
                    </textarea>
                </div>
                <div className='input-container'>
                    <label>Thinker: </label>
                    <input  
                        type='text'
                        name='thought'
                        placeholder='Who thought this thought...'
                        className='form-thinker'
                        value={thinker}
                        onChange={handleChangeThinker} />
                </div>
                <div className='input-container'>
                    <label>NSFW: </label>
                    <input  
                        type='checkbox'
                        name='nsfw'
                        className='form-nsfw'
                        checked={nsfw}
                        onChange={handleChangeNsfw} />
                </div>
                <input
                    type='submit'
                    className='form-submit'
                    value='Edit Thought'/>
            </form>
        </div>

    );
}

export default Edit;