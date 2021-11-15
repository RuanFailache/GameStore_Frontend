import React from 'react';
import { Routes, Route } from 'react-router-dom'

import SignInPage from './components/pages/login/SignInPage';
import SignUpPage from './components/pages/login/SignUpPage';

import './assets/styles/reset.css'
import './assets/styles/style.css'

export default function App() {
    return (
        <Routes>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
    );
}