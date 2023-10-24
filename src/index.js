import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.scss';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './pages/chat/chat';
import AuthDetails from './components/auth/AuthDetails';
import App from './App.js';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <ToastContainer/>
  </React.StrictMode>
);