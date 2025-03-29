import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/HomePage';
import CookiesPolicy from '../Pages/CookiesPolicy/CookiesPolicy';

function AppRoutes() {
    return (
        <Router basename="/campanha-basil-cacau"> {/* Adiciona o basename aqui */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cookies-policy" element={<CookiesPolicy />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;