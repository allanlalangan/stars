import FormInputText from './FormInputText';
import { Link } from 'react-router-dom';
import { inputs as registerInputs } from '../util/inputs';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    profilePic: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='m-auto mt-4 flex flex-col border border-indigo-200 p-4 md:w-1/2'
    >
      <button className='flex items-center justify-center bg-indigo-50 py-4 transition hover:bg-indigo-200'>
        <FcGoogle className='mx-2 text-2xl' />

        <span className=''>Continue with Google</span>
      </button>
      <span className='relative m-auto flex w-full flex-col content-center items-center py-2 text-center'>
        <span className='z-10 bg-slate-50 px-4'>or</span>
        <div className='absolute top-1/2 h-[1px] w-full bg-indigo-100'></div>
      </span>
      {registerInputs?.map((input, i) => (
        <>
          <FormInputText
            key={i}
            onChange={onChange}
            {...input}
            pattern={
              input.name === 'confirm'
                ? values.password
                : input.pattern || undefined
            }
            value={values[input.name]}
          />
        </>
      ))}
      <button
        type='submit'
        className='bg-indigo-50 py-4 transition hover:bg-indigo-200'
      >
        Create My Account
      </button>
      <span>
        Already have an account?{' '}
        <Link className='underline-offset-4 hover:underline' to='/login'>
          <strong>Login</strong>
        </Link>{' '}
        to map the stars!
      </span>
    </form>
  );
};
export default Register;
