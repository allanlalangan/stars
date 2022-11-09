import { MdSpaceDashboard } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { GiCandleLight, GiOpenBook, GiNotebook } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='fixed bottom-0 flex h-[10%] w-screen flex-col items-center justify-center bg-slate-700 text-slate-50 md:static md:h-full md:w-1/4 md:justify-between'>
      <ul className='flex h-full w-full items-center justify-evenly md:flex-col md:items-start md:justify-start md:p-4'>
        <NavLink
          to='/feed'
          className={({ isActive }) =>
            `${
              !isActive ? 'border-transparent' : 'border-secondary-400 shadow'
            } rounded border p-2 transition md:mb-2 md:w-full`
          }
        >
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold'>
            <span className='flex w-full items-center transition'>
              <BsStars className='mx-2 text-secondary-200' size='1.25rem' />
              <p className='hidden md:block'>Feed</p>
            </span>
          </button>
        </NavLink>
        <NavLink
          to='/dashboard'
          className={({ isActive }) =>
            `${
              !isActive ? 'border-transparent' : 'border-secondary-400'
            } rounded border p-2 transition md:mb-2 md:w-full`
          }
        >
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold'>
            <span className='flex w-full items-center transition'>
              <MdSpaceDashboard
                className='mx-2 text-secondary-200'
                size='1.25rem'
              />
              <p className='hidden md:block'>Dashboard</p>
            </span>
          </button>
        </NavLink>

        <NavLink
          to='/altar'
          className={({ isActive }) =>
            `${
              !isActive ? 'border-transparent' : 'border-secondary-400'
            } rounded border p-2 transition md:mb-2 md:w-full`
          }
        >
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold'>
            <span className='flex w-full items-center transition'>
              <GiCandleLight
                className='mx-2 text-secondary-200'
                size='1.25rem'
              />
              <p className='hidden md:block'>Altar</p>
            </span>
          </button>
        </NavLink>
        <NavLink
          to='/journal'
          className={({ isActive }) =>
            `${
              !isActive ? 'border-transparent' : 'border-secondary-400'
            } rounded border p-2 transition md:mb-2 md:w-full`
          }
        >
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold'>
            <span className='flex w-full items-center transition'>
              <GiNotebook className='mx-2 text-secondary-200' size='1.25rem' />
              <p className='hidden md:block'>Journal</p>
            </span>
          </button>
        </NavLink>
        <NavLink
          to='/reference'
          className={({ isActive }) =>
            `${
              !isActive ? 'border-transparent' : 'border-secondary-400'
            } rounded border p-2 transition md:mb-2 md:w-full`
          }
        >
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold'>
            <span className='flex w-full items-center transition'>
              <GiOpenBook className='mx-2 text-secondary-200' size='1.25rem' />
              <p className='hidden md:block'>Reference</p>
            </span>
          </button>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Sidebar;
