import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/HomePage';
import CookiesPolicy from '../Pages/CookiesPolicy/CookiesPolicy';
import ProductInspectPage from '../Pages/ProductInspectPage/ProductInpectPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cookies-policy" element={<CookiesPolicy />} />
                <Route path="/product/:id" element={<ProductInspectPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;