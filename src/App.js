import './assets/styles/reset.css';
import './assets/styles/style.css';
import HomePage from "./components/pages/home/HomePage";
import PaymentPage from './components/pages/payment/PaymentPage';
import ProductPage from './components/pages/product/ProductPage'
import SignInPage from './components/pages/login/SignInPage';
import SignUpPage from './components/pages/login/SignUpPage';
import { Routes, Route } from "react-router-dom";
import CartContext from './components/contexts/CartContext';
import { useState } from 'react';
import UserContext from './components/contexts/UserContext';

export default function App(){

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [productsInCart, setProductsInCart] = useState([]);

    
    return(
      <UserContext.Provider value={{user, setUser}}>
        <CartContext.Provider value={{productsInCart, setProductsInCart}}>
            <Routes>
                <Route path="/payment" element={<PaymentPage/>}/>
                <Route path="/" element={<HomePage />} />
                <Route path="products/:id" element={<ProductPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
        </CartContext.Provider>
      </UserContext.Provider>
    );
}