import React from 'react';

import ShowerImg from '../images/shower-head.jpg'
import ThoughtContainer from '../components/thought_comps/ThoughtContainer';

function Dashboard(props){
    return (
        <main className='dashboard'>
            <div className='image-container'>
                <img src={ShowerImg} alt="Shower Dropplets" className='image'/>
            </div>
            <h1 className='dashboard-title'>Shower Thoughts Dashboard</h1>            
            <ThoughtContainer />
        </main>
    )
}

export default Dashboard;