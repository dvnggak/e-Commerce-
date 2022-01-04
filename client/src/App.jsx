import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pay from './components/Pay';
import Success from './components/Success';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/pay" element={<Pay/>}/>
                <Route exact path="/success" element={<Success/>}/>
            </Routes>
        </BrowserRouter>
    )
}
