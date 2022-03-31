import React from 'react';

import ThoughtContainer from '../components/thought_comps/ThoughtContainer';

import '../styles/pages/Dashboard.css'

function Dashboard(props){
    return (
        <main className='dashboard'>
            <h1 className='dashboard-title'>Shower Thoughts Dashboard</h1>            
            <ThoughtContainer />
        </main>
    )
}

export default Dashboard;