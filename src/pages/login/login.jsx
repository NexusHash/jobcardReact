import { useState } from 'react';
import LoginNav from '../../components/loginNav/loginNav';
import LoginForm from './components/loginForm/loginForm.jsx';
import './login.scss';

function Login() {
  return (
    <div className='bg'>
        <div className='frameLogin'>
          <div className='frameNav'>
            <LoginNav/>
          </div>
          <div className='formParent'>
            <LoginForm />
          </div>
        </div>
    </div>
  );
}

export default Login;