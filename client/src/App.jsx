import React from 'react'
import { Router, Routes, Route } from "react-router-dom";
import Pay from './components/Pay';
import Success from './components/Success';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/pay">
                    <Pay />
                </Route>
                <Route path="/success">
                    <Success />
                </Route>
            </Routes>
        </Router>
    )
}
