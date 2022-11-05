import Login from '../components/Login';

const LoginPage = ({ user }) => {
  return (
    <section className={`${!user ? 'md:w-full' : 'md:w-3/4'} p-4`}>
      <h2 className='mb-4 text-center font-display'>Login</h2>
      <Login />
    </section>
  );
};
export default LoginPage;
