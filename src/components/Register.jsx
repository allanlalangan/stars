import { Link } from 'react-router-dom';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='m-auto mt-4 flex max-w-screen-sm flex-col border border-indigo-200 p-4'
    >
      <fieldset className='flex items-center'>
        <label htmlFor='username' className='w-1/3'>
          Username
        </label>
        <input
          type='text'
          name='username'
          className='my-2 w-2/3 p-2'
          placeholder='Username'
        ></input>
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='email' className='w-1/3'>
          Email
        </label>
        <input
          type='email'
          name='email'
          className='my-2 w-2/3 p-2'
          placeholder='Email'
        ></input>
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='password' className='w-1/3'>
          Password
        </label>
        <input
          type='password'
          name='password'
          className='my-2 w-2/3 p-2'
          placeholder='Password'
        ></input>
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='confirm' className='w-1/3'>
          Confirm Password
        </label>
        <input
          type='password'
          name='confirm'
          className='my-2 w-2/3 p-2'
          placeholder='Confirm Password'
        ></input>
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='profilePic' className='w-1/3'>
          Avatar
        </label>
        <input
          type='text'
          name='profilePic'
          className='my-2 w-2/3 p-2'
          placeholder='Upload Profile Picture'
        ></input>
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='birthdate' className='w-1/3'>
          Date of Birth
        </label>
        <input type='date' name='birthdate' className='my-2 w-1/3 p-2'></input>
        <input type='time' name='birthtime' className='my-2 w-1/3 p-2'></input>
      </fieldset>
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
