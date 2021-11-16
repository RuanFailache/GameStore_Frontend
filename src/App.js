import './assets/styles/reset.css';
import './assets/styles/style.css';
import HomePage from "./components/pages/home/HomePage";
import ProductPage from './components/pages/product/ProductPage'
import SignInPage from './components/pages/login/SignInPage';
import SignUpPage from './components/pages/login/SignUpPage';
import CartPage from "./components/pages/cart/CartPage";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import UserContext from './components/shared/contexts/UserContext';
import OrderContext from './components/shared/contexts/OrderContext';
import CartContext from './components/shared/contexts/CartContext';

export default function App(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [productsInCart, setProductsInCart] = useState([]);
    const [order, setOrder] = useState([]);

    return(
        <UserContext.Provider value={{ user, setUser }}>
            <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
                <OrderContext.Provider value={{ order, setOrder }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="products/:id" element={<ProductPage />} />
                        <Route path="/sign-in" element={<SignInPage />} />
                        <Route path="/sign-up" element={<SignUpPage />} />
                        <Route path="/cart" exact element={<CartPage />} />
                    </Routes>
                </OrderContext.Provider>
            </CartContext.Provider>
        </UserContext.Provider>
    );
}