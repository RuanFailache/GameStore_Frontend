import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import ProductPage from "./components/pages/product/ProductPage";

import CartContext from "./components/contexts/CartContext";

import './assets/styles/reset.css'
import './assets/styles/style.css'

export default function App() {
    const [productsInCart, setProductsInCart] = useState([])
    return (
        <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
            <Routes>
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </CartContext.Provider>
    );
}