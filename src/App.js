
import './assets/styles/reset.css';
import './assets/styles/style.css';
import PaymentPage from './components/pages/payment/PaymentPage';
import { Routes, Route } from "react-router-dom";


export default function App(){

    return(

            <Routes>
                <Route path="/payment" element={<PaymentPage/>}/>
            </Routes>
    );
}