import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import ProductPage from "./components/pages/product/ProductPage";

import CartContext from "./components/contexts/CartContext";

import './assets/styles/reset.css'
import './assets/styles/style.css'

export default function App() {
    const [productsInCart, setProductsInCart] = useState([2, 3]);

    return (
        <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
            <Routes>
                <Route path="/products/:id" element={<ProductPage />} />
            </Routes>
        </CartContext.Provider>
    );
}