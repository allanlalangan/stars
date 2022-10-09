import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <section className='h-full w-full overflow-scroll p-4'>
      <h2 className='mb-4'>Hello, Allan!</h2>
      <ul className='grid grid-cols-12 gap-4'>
        <li className='col-span-6 row-span-2 flex min-h-[20rem] flex-col border-2 border-gray-900 p-4'>
          <h3 className='bg-slate-700 p-2 text-yellow-200'>
            The Planets Today
          </h3>
        </li>
        <li className='col-span-6 flex min-h-[20rem] flex-col border-2 border-gray-900 p-4'>
          <h3 className='h-fit bg-slate-700 p-2 text-yellow-200'>Transits</h3>
          <section className='flex h-full'></section>
        </li>
        <li className='col-span-6 flex min-h-[20rem] flex-col border-2 border-gray-900 p-4'>
          <h3 className='h-fit bg-slate-700 p-2 text-yellow-200'>The Moon</h3>
          <section className='flex h-full'>
            <article className='flex h-full w-1/2 flex-col'>
              <h4 className='text-[1rem]'>Current Cycle</h4>
              <div className='mx-2 h-full border-2 border-gray-900 p-2'></div>
            </article>
            <article className='flex h-full w-1/2 flex-col'>
              <h4 className='text-[1rem]'>Next New Moon</h4>
              <div className='mx-2 h-full border-2 border-gray-900 p-2'></div>
              <h4 className='text-[1rem]'>Next Full Moon</h4>
              <div className='mx-2 h-full border-2 border-gray-900 p-2'></div>
            </article>
          </section>
        </li>
        <li className='col-span-4 min-h-[20rem] border-2 border-gray-900 p-4'>
          <h3 className='bg-slate-700 p-2 text-yellow-200'>Upcoming Events</h3>
        </li>
        <li className='col-span-8 flex min-h-[20rem] flex-col border-2 border-gray-900 p-4'>
          <h3 className='h-fit bg-slate-700 p-2 text-yellow-200'>
            Manifestations
          </h3>
          <section className='flex h-full'>
            <article className='flex h-full w-1/2 flex-col'>
              <h4 className='text-[1rem]'>In Progress</h4>
              <div className='mx-2 h-full border-2 border-gray-900 p-2'></div>
            </article>
            <article className='flex h-full w-1/2 flex-col'>
              <h4 className='text-[1rem]'>Recent Milestones</h4>
              <div className='mx-2 h-full border-2 border-gray-900 p-2'></div>
            </article>
          </section>
        </li>
      </ul>
    </section>
  );
};
export default DashboardPage;
