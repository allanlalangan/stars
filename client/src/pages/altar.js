import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { getCharts, reset } from '../features/chartSlice';

const AltarPage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharts());

    //Cleanup function, will reset on charts component unmount
    return () => {
      dispatch(reset());
    };
  }, [dispatch, user]);

  return (
    <section className='relative flex h-full w-full flex-col overflow-y-scroll p-4'>
      <Link to=''>
        <h2 className='mb-2 font-display'>Altar</h2>
      </Link>
      <nav className='mb-2 flex w-1/2'>
        <button className='mr-2 flex cursor-pointer items-center border-b-2 border-slate-200 font-heading text-lg font-semibold tracking-wide transition hover:border-primary-700 hover:text-primary-700'>
          Meditations
        </button>
        <NavLink
          to='charts'
          className={({ isActive }) =>
            `mr-2 flex cursor-pointer items-center border-b-2 font-heading text-lg font-semibold tracking-wide transition hover:border-primary-700 hover:text-primary-700 ${
              isActive ? 'border-slate-700' : 'border-slate-200'
            }`
          }
        >
          Charts
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
};
export default AltarPage;
