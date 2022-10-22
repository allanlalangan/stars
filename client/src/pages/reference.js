import { Link, Outlet } from 'react-router-dom';

const ReferencePage = () => {
  return (
    <section className='flex h-full flex-col p-4 md:w-3/4'>
      <h2>Reference</h2>
      <nav className='flex w-1/2'>
        <Link to='tarot'>
          <button className='mr-2 mt-1 flex cursor-pointer items-center bg-slate-700 p-2 text-lg tracking-wide text-slate-50'>
            Tarot
          </button>
        </Link>
        <Link to='astrology'>
          <button className='mr-2 mt-1 flex cursor-pointer items-center bg-slate-700 p-2 text-lg tracking-wide text-slate-50'>
            Astrology
          </button>
        </Link>
      </nav>
      <Outlet />
    </section>
  );
};
export default ReferencePage;
