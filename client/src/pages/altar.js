import { Link, Outlet } from 'react-router-dom';

const AltarPage = () => {
  return (
    <section className='flex h-full flex-col p-4 md:w-3/4'>
      <h2>Altar</h2>
      <nav className='flex w-1/2'>
        <button className='mr-2 mt-1 flex cursor-pointer items-center bg-slate-700 p-2 text-lg tracking-wide text-slate-50'>
          Divination & Ritual
        </button>
        <Link to='charts'>
          <button className='mr-2 mt-1 flex cursor-pointer items-center bg-slate-700 p-2 text-lg tracking-wide text-slate-50'>
            Charts
          </button>
        </Link>
      </nav>
      <Outlet />
    </section>
  );
};
export default AltarPage;
