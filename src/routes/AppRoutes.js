import React from 'react';
import { Routes, Route } from "react-router-dom";

import ThoughtContainer from '../components/thought_comps/ThoughtContainer';


function AppRoutes(props) {
    return (
        <Routes>            
            <Route exact path='/'  element={<ThoughtContainer />} /> 
        </Routes>            
    );
}

export default AppRoutes;