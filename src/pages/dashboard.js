import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <>
      <section className='flex h-full'>
        <Sidebar />
        <article className='w-full overflow-scroll p-4'>
          <h2 className='m-auto'>Dashboard</h2>
          <ul className='grid grid-cols-12 gap-4'>
            <li className='col-span-6 row-span-2 min-h-[20rem] border-2 border-gray-900 p-4'>
              <h3>Weekly Forecast</h3>
            </li>
            <li className='col-span-6 min-h-[20rem] border-2 border-gray-900 p-4'>
              <h3>The Stars Today</h3>
            </li>
            <li className='col-span-6 min-h-[20rem] border-2 border-gray-900 p-4'>
              <h3>Moon</h3>
            </li>
            <li className='col-span-6 min-h-[20rem] border-2 border-gray-900 p-4'>
              <h3>Upcoming Events</h3>
            </li>
            <li className='col-span-6 min-h-[20rem] border-2 border-gray-900 p-4'>
              <h3>Visualize and Manifest</h3>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};
export default DashboardPage;
