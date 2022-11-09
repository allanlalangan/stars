import { Link, NavLink, Outlet } from 'react-router-dom';

const AltarPage = () => {
  return (
    <section className='relative flex h-full w-full flex-col p-4'>
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
