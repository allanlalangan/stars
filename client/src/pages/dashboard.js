import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPlanets } from '../features/todaySlice';
import { getFullSignName } from '../util/utils';
import { Link } from 'react-router-dom';
import Planets from '../components/Planets';

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.today);

  return (
    <section className='overflow-scroll p-4 md:w-3/4'>
      <h2 className='mb-4 font-display'>
        Hello {user?.firstName || user.username}
      </h2>
      <article className='grid grid-cols-12 grid-rows-3 gap-4'>
        {user ? (
          <Planets />
        ) : (
          <section className='col-span-12 row-span-6 flex flex-col border-2 border-primary-800 p-4 lg:col-span-6'>
            <span>Please Login</span>
          </section>
        )}

        <section className='col-span-6 flex flex-col border-2 border-primary-800 lg:row-span-2'>
          <h3 className='bg-slate-800 p-2 font-display text-secondary-200'>
            Your Chart
          </h3>
          <section className='flex h-full'>
            <article className='flex h-full w-full flex-col'>
              <section className='flex h-full flex-col items-center justify-center p-2'>
                <span className='text-center'>
                  It appears you haven't generated your birth chart
                </span>
                <Link to='/altar/charts'>
                  <button className='mr-2 mt-1 flex cursor-pointer items-center border border-slate-700 p-2 text-sm tracking-wide'>
                    Generate Natal Chart
                  </button>
                </Link>
              </section>
            </article>
          </section>
        </section>
        <section className='col-span-6 flex flex-col border-2 border-primary-800 lg:row-span-1'>
          <h3 className='bg-slate-800 p-2 font-display text-secondary-200'>
            The Moon
          </h3>
          <article className='flex h-full w-full flex-col justify-center'>
            <section className='h-fullp-2 m-4'>
              <div>
                <h4 className='border-b border-slate-300 text-base'>
                  Current Lunar Phase
                </h4>
                <figure className='my-4 text-5xl'>
                  {data?.lunar_phase?.moon_emoji}
                </figure>
              </div>
              <div>
                <h4 className='text-base'>
                  {data?.lunar_phase?.degrees_between_s_m} Degrees between
                  luminaries
                </h4>
              </div>
            </section>
          </article>
        </section>
      </article>
    </section>
  );
};
export default DashboardPage;
