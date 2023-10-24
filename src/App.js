import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.scss';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './pages/chat/chat';
import AuthDetails from './components/auth/AuthDetails';

function App() {
  return (
    <div className="App">
    <AuthDetails/>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path='auth' element={<AuthDetails/>}/>
          <Route path='chat' element={<Chat/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
