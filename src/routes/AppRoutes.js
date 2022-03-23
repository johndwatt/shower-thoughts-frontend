import React from 'react';
import { Routes, Route } from "react-router-dom";

import Thought from '../components/thought_comps/Thought';


function AppRoutes(props) {
    return (
        <Routes>            
            <Route exact path='/'  element={<Thought />} /> 
        </Routes>            
    );
}

export default AppRoutes;