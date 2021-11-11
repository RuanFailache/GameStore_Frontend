import './assets/styles/reset.css';
import './assets/styles/style.css';
import HomePage from "./components/pages/home/HomePage";
import { Routes, Route } from "react-router-dom";

export default function App(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    );
}