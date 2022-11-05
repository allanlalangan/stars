import Register from '../components/Register';

const CreateAccountPage = ({ user }) => {
  return (
    <section
      className={`${!user ? 'md:w-full' : 'md:w-3/4'} overflow-y-scroll p-4`}
    >
      <h2 className='mb-4 text-center font-display'>Create Account</h2>
      <Register />
    </section>
  );
};
export default CreateAccountPage;
