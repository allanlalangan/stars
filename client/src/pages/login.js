import Login from '../components/Login';

const LoginPage = ({ user }) => {
  return (
    <section className={`${!user ? 'w-full' : 'lg:w-3/4'} h-full p-4`}>
      <h2 className='mb-4 text-center font-display'>Login</h2>
      <Login />
    </section>
  );
};
export default LoginPage;
