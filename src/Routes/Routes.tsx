import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/HomePage';
import CookiesPolicy from '../Pages/CookiesPolicy/CookiesPolicy';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cookies-policy" element={<CookiesPolicy />} /> {/* Adicione a rota para CookiesPolicy */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;