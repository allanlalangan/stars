import Register from '../components/Register';

const CreateAccountPage = ({ user }) => {
  return (
    <section
      className={`${!user ? 'md:w-full' : 'md:w-3/4'} overflow-y-scroll p-4`}
    >
      <Register />
    </section>
  );
};
export default CreateAccountPage;
