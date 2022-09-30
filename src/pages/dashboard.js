import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <>
      <section className='flex h-full'>
        <Sidebar />
        <h2 className='m-auto'>Dashboard</h2>
      </section>
    </>
  );
};
export default DashboardPage;
