import React from 'react';
import { Routes, Route } from 'react-router-dom'

import LoginPage from './components/pages/login/LoginPage';

export default function App() {
    return (
        <Routes>
            <Route path="/sign-up" element={<LoginPage />} />
        </Routes>
    );
}