import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getFullSignName } from '../util/utils';

const DashboardPage = () => {
  const { data, planets, houses } = useSelector((state) => state.today);
  return (
    <section className='h-full w-full overflow-scroll p-4'>
      <h2 className='mb-4'>Hello, Allan!</h2>
      <article className='grid h-full grid-cols-12 gap-4'>
        <section className='col-span-6 row-span-3 flex flex-col border-2 border-gray-900 p-4'>
          <h3 className='bg-slate-700 p-2 text-yellow-200'>
            The Planets Today
          </h3>
          <article>
            <ul>
              {planets?.map((planet, i) => (
                <li key={i}>
                  {planet.name} at {planet.position.toFixed(2)}º{' '}
                  {getFullSignName(planet.sign)}
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section className='col-span-6 row-span-1 flex flex-col border-2 border-gray-900 p-4'>
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
        </section>
        <section className='col-span-6 row-span-2 flex flex-col border-2 border-gray-900 p-4'>
          <h3 className='bg-slate-700 p-2 text-yellow-200'>Upcoming Events</h3>
          <article className='flex w-1/2 flex-col'>
            <h4 className='text-[1rem]'>Transits</h4>
            <div className='mx-2 border-2 border-gray-900 p-2'></div>
          </article>
        </section>
      </article>
    </section>
  );
};
export default DashboardPage;