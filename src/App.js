import './assets/styles/reset.css';
import './assets/styles/style.css';
import HomePage from "./components/pages/home/HomePage";
import ProductPage from './components/pages/product/ProductPage'
import { Routes, Route } from "react-router-dom";
import CartContext from './components/contexts/CartContext';
import { useState } from 'react';

export default function App() {
    const [productsInCart, setProductsInCart] = useState([]);
    return (
        <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="products/:id" element={<ProductPage />} />
            </Routes>
        </CartContext.Provider>
    );
}