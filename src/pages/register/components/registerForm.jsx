import React, { useState } from 'react';
import './css/registerForm.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AuthDetails from '../../../components/auth/AuthDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegisterForm = () => {

    //Page Navigate react router
const routepage = useNavigate();

const [email, setEmail] = useState ("")
const [pass, setPass] = useState ("")


//Toastify error messages
const notifyError = () => {
    toast.error("Invalid Details or Email already in use", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-invalidlogin'
    });
}
const notifySuccess = () => {
    toast.success("Account Created!", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-validlogin'
    });
}

const [btnLoading, setBtnLoading] = useState(false)


//Sign Up with button loader and routing to next page + error handling for Toastify
const signUp = (e) => {
    e.preventDefault();
    setBtnLoading(!btnLoading)

    console.log("submitted")

    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
        notifySuccess();
        routepage('../login')
        setBtnLoading(btnLoading)
    }).catch((error) => {
        notifyError();
        setBtnLoading(btnLoading)
    })
}


        <AuthDetails/>

  return (
    <form className='formParent' onSubmit={signUp}>
        <div className='formLeft'>
        <div className='nameDiv'>
            <h1 className='tName'>Create a new Account</h1>
            <div className='tLogin'>
                <p className='tLogin2'>Already a member? </p>
                <NavLink to='/login'><p className='tLogin3'>Log In</p></NavLink>
            </div>
        </div>
            <div className='formTop'>
                <div className='inputForm'>
                    <p>First Name</p>
                    <input className='inputBox'
                    type='text'
                    placeholder='John'></input>
                </div>
                <div className='inputForm'>
                    <p>Last Name</p>
                    <input className='inputBox'
                    type='text'
                    placeholder='Doe'></input>
                </div>
            </div>
            <div className='formMiddle'>
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
                    placeholder='*******'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}></input>
                </div>
                <div className='btnDiv'>
                {btnLoading ? 
                    <button className='btnSignup' disabled><i class="fa fa-spin fa-spinner" aria-hidden="true"></i></button>
                :
                    <button className='btnSignup'>Create Account</button>
                }
                    
                </div>
            </div>
        </div>
        <div className='formRight'>

        </div>
    </form>
  )
}

export default RegisterForm