import LoginNav from '../../components/loginNav/loginNav';
import './register.scss';
import RegisterForm from './components/registerForm';

function Register() {
  return (
    <div className='bg'>
        <div className='frameLogin'>
          <div className='frameNav'>
            <LoginNav/>
          </div>
          <div className='formParent'>
            <RegisterForm/>
          </div>
          
        </div>
    </div>
  );
}

export default Register;