import { Link, NavLink, Outlet } from 'react-router-dom';

const ReferencePage = () => {
  return (
    <section className='flex h-full w-full flex-col p-4'>
      <h2 className='mb-2 font-display'>Reference</h2>
      <nav className='mb-4 flex w-1/2'>
        <NavLink
          to='tarot'
          className={({ isActive }) =>
            `mr-2 flex cursor-pointer items-center border-b-2 font-heading text-lg font-semibold tracking-wide transition hover:border-primary-700 hover:text-primary-700 ${
              isActive ? 'border-slate-700' : 'border-slate-200'
            }`
          }
        >
          Tarot
        </NavLink>
        <NavLink
          to='astrology'
          className={({ isActive }) =>
            `mr-2 flex cursor-pointer items-center border-b-2 font-heading text-lg font-semibold tracking-wide transition hover:border-primary-700 hover:text-primary-700 ${
              isActive ? 'border-slate-700' : 'border-slate-200'
            }`
          }
        >
          Astrology
        </NavLink>
        {/* <Link to='tarot'>
          <button className='mr-2 mt-1 flex cursor-pointer items-center bg-slate-700 p-2 text-lg tracking-wide text-slate-50'>
            Tarot
          </button>
        </Link>
        <Link to='astrology'>
          <button className='mr-2 mt-1 flex cursor-pointer items-center bg-slate-700 p-2 text-lg tracking-wide text-slate-50'>
            Astrology
          </button>
        </Link> */}
      </nav>
      <Outlet />
    </section>
  );
};
export default ReferencePage;
