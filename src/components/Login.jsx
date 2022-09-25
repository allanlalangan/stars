import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='m-auto mt-4 flex w-3/4 flex-col border border-indigo-200 p-4'
    >
      <button className='bg-indigo-50 py-4 transition hover:bg-indigo-200'>
        Login with Gmail
      </button>
      <span className='relative m-auto flex w-full flex-col content-center items-center py-2 text-center'>
        <span className='z-10 bg-slate-50 px-4'>or</span>
        <div className='absolute top-1/2 h-[1px] w-full bg-indigo-100'></div>
      </span>
      <fieldset className='flex items-center'>
        <label htmlFor='email' className='w-1/3'>
          Email
        </label>
        <input
          type='text'
          className='my-2 w-2/3 p-2'
          placeholder='Email'
        ></input>
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='password' className='w-1/3'>
          Password
        </label>
        <input
          type='text'
          className='my-2 w-2/3 p-2'
          placeholder='Password'
        ></input>
      </fieldset>
      <span>
        Not a member?{' '}
        <Link className='underline-offset-4 hover:underline' to='/'>
          <strong>Create an account</strong>
        </Link>{' '}
        to map the stars!
      </span>
    </form>
  );
};
export default Login;
