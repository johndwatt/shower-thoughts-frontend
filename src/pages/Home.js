import React from 'react';
import { API_URL } from "../api/api_connection"
import axios from 'axios';

import "../styles/ThoughtContainer.css"

const url = API_URL + '/home'

function Home(props) {


    return (
        <div className='home-container'>
            <h1>Welcome to Shower Thought Central</h1>
            <h3>A place to share your shower thoughts.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt perferendis nobis iste, provident molestiae eius aut rerum iusto iure excepturi repellendus voluptates ut minus quis architecto ratione consequuntur vel eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio debitis fuga esse iure consequatur cum quis, rem saepe corporis ipsa expedita maiores sint voluptatum tenetur officia molestias dignissimos nostrum animi.</p>
            <div className='random-thought'>
                <p>Random thought stuff goes here</p>
            </div>
            <div className='latest-thought'>
                <p>Latest thought stuff goes here</p>
            </div>
        </div>

    );
}

export default Home;