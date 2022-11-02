import { Link } from 'react-router-dom';
import { inputs } from '../util/inputs';
import FormInput from './FormInput';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../features/authSlice';
import axios from 'axios';

const Login = () => {
  const dispatch = useDispatch();
  const loginInputs = inputs.slice(1, 3);
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: ({ code }) => {
      dispatch(googleLogin(code));
    },
    onError: (error) => console.log(error),
    redirect_uri: 'http://localhost:3000',
    flow: 'auth-code',
    scope: 'email profile',
    // scope:
    //   'email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='m-auto mt-4 flex flex-col border border-indigo-200 p-4 md:w-1/2'
    >
      <button
        type='button'
        onClick={handleGoogleLogin}
        className='flex items-center justify-center bg-indigo-50 py-4 transition hover:bg-indigo-200'
      >
        <FcGoogle className='mx-2 text-2xl' />

        <span className=''>Login with Google</span>
      </button>
      <span className='relative m-auto flex w-full flex-col content-center items-center py-2 text-center'>
        <span className='z-10 bg-slate-50 px-4'>or</span>
        <div className='absolute top-1/2 h-[1px] w-full bg-indigo-100'></div>
      </span>
      {loginInputs?.map(({ name, type, placeholder, required, label }, i) => (
        <FormInput
          key={i}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          label={label}
        />
      ))}
      <button
        type='submit'
        className='bg-indigo-50 py-4 transition hover:bg-indigo-200'
      >
        Login
      </button>
      <span>
        Not a member?{' '}
        <Link
          className='underline-offset-4 hover:underline'
          to='/create-account'
        >
          <strong>Create an account</strong>
        </Link>{' '}
        to map the stars!
      </span>
    </form>
  );
};
export default Login;
