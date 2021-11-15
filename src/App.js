import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

import './assets/styles/reset.css';
import './assets/styles/style.css';
import UserContext from './components/shared/contexts/UserContext';
import CartContext from "./components/shared/contexts/CartContext";
import OrderContext from './components/shared/contexts/OrderContext';
import CartPage from "./components/pages/cart/CartPage";

export default function App(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [productsInCart, setProductsInCart] = useState([2, 3, 4]);
    const [orderList, setOrderList] = useState([]);

    return(
        <UserContext.Provider value={{ user, setUser }}>
        <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
        <OrderContext.Provider value ={{ orderList, setOrderList }}>
            <Routes>
                <Route path="/cart" exact element={<CartPage />} />
            </Routes>
        </OrderContext.Provider>
        </CartContext.Provider>
        </UserContext.Provider>
    );
}