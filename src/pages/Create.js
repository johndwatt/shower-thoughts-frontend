import React, { useState } from 'react';
import { API_URL } from "../api/api_connection"
import axios from 'axios';

import "../styles/Form.css"

const url = API_URL + "/thoughts"

function Create(props) {
    const [content, setContent] = useState("");
    const [thinker, setThinker] = useState("");
    const [nsfw, setNsfw] = useState(false);

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }
    const handleChangeThinker = (e) => {
        setThinker(e.target.value);
    }

    const handleChangeNsfw = (e) => {
        const value = e.target.name === 'nsfw' ? e.target.checked : e.target.value
        setNsfw(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const thought = {
            content: content,
            thinker: thinker,
            nsfw: nsfw,
        }

        axios.post(url, thought)
            .then(response => {
                console.log(response.data);
                window.location = "/dashboard";
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='form-container'>
            <h2>Create New Shower Thought</h2>
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
                    value='Add Thought'/>
            </form>
        </div>

    );
}

export default Create;