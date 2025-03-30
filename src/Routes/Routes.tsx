import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/HomePage';
import CookiesPolicy from '../Pages/CookiesPolicy/CookiesPolicy';
import ProductInspectPage from '../Pages/ProductInspectPage/ProductInpectPage'; // Importe a página

function AppRoutes() {
    return (
        <Router basename="/campanha-basil-cacau">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cookies-policy" element={<CookiesPolicy />} />
                <Route path="/product/:id" element={<ProductInspectPage />} /> {/* Adicione a rota */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;