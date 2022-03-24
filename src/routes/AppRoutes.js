import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Create from '../pages/Create';
import Edit from '../pages/Edit';
import Delete from '../pages/Delete';

function AppRoutes(props) {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} /> 
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/dashboard/add' element={<Create />} />
            <Route path='/dashboard/:id/edit' element={<Edit />} />
            <Route path='/dashboard/:id/delete' element={<Delete />} />
        </Routes>
    );
}

export default AppRoutes;