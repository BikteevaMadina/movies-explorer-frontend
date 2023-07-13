import AuthForm from '../AuthForm/AuthForm.js';
import { loginFormSetting } from '../../utils/constants.js';

function Login() {
  return (
    <div className='page'>
      <AuthForm
        setting={loginFormSetting}/>
    </div>
  )
}

export default Login;