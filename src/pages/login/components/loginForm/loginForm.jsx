import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../../../../firebase/firebase';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/loginForm.scss'
import Register from '../../../register/register'
import gSignin from '../loginForm/img/google.png'


const LoginForm = () => {

//Page Navigate react router
const routepage = useNavigate();

const [email, setEmail] = useState ("")
const [pass, setPass] = useState ("")

//Toastify error messages
const notifyError = () => {
    toast.error("Invalid Login Details!", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-invalidlogin'
    });
}
const notifySuccess = () => {
    toast.success("Login Successful!", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-validlogin'
    });
}

const [btnLoading, setBtnLoading] = useState(false)


//Sign In with button loader and routing to next page + error handling for Toastify
const signIn = (e) => {
    e.preventDefault();
    setBtnLoading(!btnLoading)

    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
        routepage('/organisation')
        setBtnLoading(btnLoading)
        notifySuccess();
    }).catch((error) => {
        notifyError();
        setBtnLoading(btnLoading)
    })
}

  return (
    <form className='formParent' onSubmit={signIn}>
        <div className='formLeft'>
        <div className='nameDiv'>
            <h1 className='tName'>Login</h1>
            <div className='tLogin'>
                <p className='tLogin2'>Not a member yet? </p>
                <NavLink to='/Register'><p className='tLogin3'>Sign up</p></NavLink>
            </div>
        </div>

            <div className='formMiddleLogin'>
                <div className='inputForm2'>
                    <p>Email</p>
                    <input className='inputBox'
                     type='email'
                     placeholder='Enter your Email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='inputForm2'>
                    <p>Password</p>
                    <input className='inputBox' 
                    type='password'
                    placeholder='*********'
                    value={[pass]}
                    onChange={(e) => setPass(e.target.value)}></input>
                </div>

                <div className='btnDiv'>
                    {btnLoading ? 
                    <button className='btnLogin' disabled><i class="fa fa-spin fa-spinner" aria-hidden="true"></i></button>
                    :
                    <button className='btnLogin'><img src=''/>Login</button>
                     }
                </div>

                <button className='gLogin'>
                    <img src={gSignin} alt=''/>
                    <p>Login With Google</p>
                </button>
            </div>
        </div>

        <div className='formRight'>

        </div>
    </form>
  )
}

export default LoginForm