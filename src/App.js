import './assets/styles/reset.css';
import './assets/styles/style.css';
import HomePage from "./components/pages/home/HomePage";
import ProductPage from './components/pages/product/ProductPage'
import SignInPage from './components/pages/login/SignInPage';
import SignUpPage from './components/pages/login/SignUpPage';
import { Routes, Route } from "react-router-dom";
import CartContext from './components/contexts/CartContext';
import { useState } from 'react';
import Footer from './components/shared/Footer';

export default function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  return (
    <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <Footer/>
    </CartContext.Provider>
  );
}