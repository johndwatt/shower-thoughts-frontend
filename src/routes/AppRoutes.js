import React from 'react';
import { Routes, Route } from "react-router-dom";

import Dashboard from '../pages/Dashboard';

function AppRoutes(props) {
    return (
        <Routes>            
            <Route exact path='/dashboard'  element={<Dashboard />} /> 
        </Routes>            
    );
}

export default AppRoutes;