import AuthForm from '../AuthForm/AuthForm.js';
import { registerFormSetting } from '../../utils/constants.js';

function Register() {
  return (
    <div className='page'>
      <AuthForm
        setting={registerFormSetting}/>
    </div>
  )
}

export default Register;