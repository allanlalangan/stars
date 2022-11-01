import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPlanets } from '../features/todaySlice';
import { getFullSignName } from '../util/utils';

const DashboardPage = () => {
  const { data, planets, houses } = useSelector((state) => state.today);
  const { user } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (user && planets?.length === 0) {
  //     dispatch(getCurrentPlanets());
  //   }
  // }, [user, dispatch]);
  return (
    <section className='h-full overflow-scroll p-4 md:w-3/4'>
      <h2 className='mb-4 font-display'>Hello</h2>
      <article className='grid h-full grid-cols-12 gap-4'>
        <section className='col-span-6 row-span-3 flex flex-col border-2 border-primary-800 p-4'>
          <h3 className='bg-slate-800 p-2 font-display text-secondary-200'>
            The Planets Today
          </h3>
          <ul className='grid h-full grid-cols-12 gap-2'>
            {/* <ul>
              {planets?.map((planet, i) => (
                <li key={i}>
                  {planet.name} at {planet.position.toFixed(2)}º{' '}
                  {getFullSignName(planet.sign)}
                </li>
              ))}
            </ul> */}
            <li className='col-span-12 border'>Sun</li>
            <li className='col-span-12 border'>Moon</li>
            <li className='col-span-4 border'>Mercury</li>
            <li className='col-span-4 border'>Venus</li>
            <li className='col-span-4 border'>Mars</li>
            <li className='col-span-6 border'>Jupiter</li>
            <li className='col-span-6 border'>Saturn</li>
            <li className='col-span-4 border'>Uranus</li>
            <li className='col-span-4 border'>Neptune</li>
            <li className='col-span-4 border'>Pluto</li>
            <li className='col-span-12 border'>North Node</li>
          </ul>
        </section>
        <section className='col-span-6 row-span-1 flex flex-col border-2 border-primary-800 p-4'>
          <h3 className='bg-slate-800 p-2 font-display text-secondary-200'>
            The Moon
          </h3>
          <section className='flex h-full'>
            <article className='flex h-full w-1/2 flex-col'>
              <h4 className='text-[1rem]'>Current Cycle</h4>
              <div className='mx-2 h-full border-2 border-primary-800 p-2'></div>
            </article>
            <article className='flex h-full w-1/2 flex-col'>
              <h4 className='text-[1rem]'>Next New Moon</h4>
              <div className='mx-2 h-full border-2 border-primary-800 p-2'></div>
              <h4 className='text-[1rem]'>Next Full Moon</h4>
              <div className='mx-2 h-full border-2 border-primary-800 p-2'></div>
            </article>
          </section>
        </section>
        <section className='col-span-6 row-span-2 flex flex-col border-2 border-primary-800 p-4'>
          <h3 className='bg-slate-800 p-2 font-display text-secondary-200'>
            For You
          </h3>
          <article className='flex w-1/2 flex-col'>
            <h4 className='text-[1rem]'>Recent Entries</h4>
            <div className='mx-2 border-2 border-primary-800 p-2'></div>
          </article>
        </section>
      </article>
    </section>
  );
};
export default DashboardPage;
