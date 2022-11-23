import { Link } from 'react-router-dom';
import { inputs } from '../util/inputs';
import FormInput from './FormInput';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { googleLogin, login } from '../features/authSlice';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(values));
  };

  const loginInputs = inputs.slice(1, 3);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleGoogleLogin = () => {
    console.log('handle google login');
  };
  // const handleGoogleLogin = useGoogleLogin({
  //   onSuccess: ({ code }) => {
  //     dispatch(googleLogin(code));
  //   },
  //   onError: (error) => console.log(error),
  //   redirect_uri: 'http://localhost:3000',
  //   flow: 'auth-code',
  //   scope: 'email profile',
  //   // scope:
  //   //   'email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
  // });

  return (
    <form
      onSubmit={handleSubmit}
      className='m-auto mt-4 flex flex-col rounded border border-primary-200 p-4 md:w-1/2'
    >
      {/* <button
        disabled
        type='button'
        onClick={handleGoogleLogin}
        className='flex items-center justify-center rounded bg-primary-50 py-4 transition hover:bg-primary-200'
      >
        <FcGoogle className='mx-2 text-2xl' />

        <span className=''>Login with Google</span>
      </button> */}
      <section className='mb-4 rounded border border-primary-200 p-4'>
        <h3 className='text-lg font-bold'>Try it out!</h3>
        <p className='mb-2'>
          Login with the following credentials or{' '}
          <Link className='underline underline-offset-4' to='/create-account'>
            Create an account
          </Link>{' '}
        </p>
        <figure>
          <article className='flex items-center'>
            <h5 className='w-1/4 font-body text-lg font-semibold'>email:</h5>{' '}
            <p className='w-3/4'>demo@demo</p>
          </article>
          <article className='flex items-center'>
            <h5 className='w-1/4 font-body text-lg font-semibold'>password:</h5>{' '}
            <p className='w-3/4'>Demo1234!</p>
          </article>
        </figure>
      </section>
      {loginInputs?.map(({ name, type, placeholder, required, label }, i) => (
        <FormInput
          onChange={onChange}
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
        className='rounded bg-primary-50 py-4 transition hover:bg-primary-200'
      >
        Login
      </button>
    </form>
  );
};
export default Login;
