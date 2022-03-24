import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Create from '../pages/Create';
import Edit from '../pages/Edit';

function AppRoutes(props) {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} /> 
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/dashboard/add' element={<Create />} />
            <Route exact path='/dashboard/:id/edit' element={<Edit />} />
        </Routes>
    );
}

export default AppRoutes;