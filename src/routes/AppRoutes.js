import React from 'react';
import { Routes, Route } from "react-router-dom";

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

function AppRoutes(props) {
    return (
        <Routes>            
            <Route exact path='/'  element={<Home />} /> 
            <Route exact path='/dashboard'  element={<Dashboard />} />
        </Routes>            
    );
}

export default AppRoutes;