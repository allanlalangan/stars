import { MdSpaceDashboard } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import { GiCandleLight, GiOpenBook, GiNotebook } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='fixed bottom-0 flex h-[10%] w-screen flex-col items-center justify-center bg-slate-700 text-slate-50 md:static md:h-full md:w-1/4 md:justify-between'>
      <ul className='flex w-full justify-evenly md:flex-col md:justify-start md:p-4'>
        <Link to='/feed'>
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold md:mt-2 md:p-2'>
            <span className='flex w-full items-center transition'>
              <BsStars className='mx-2 text-secondary-200' size='1.25rem' />
              <p className='hidden md:block'>Feed</p>
            </span>
          </button>
        </Link>
        <Link to='/dashboard'>
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold md:mt-2 md:p-2'>
            <span className='flex w-full items-center transition'>
              <MdSpaceDashboard
                className='mx-2 text-secondary-200'
                size='1.25rem'
              />
              <p className='hidden md:block'>Dashboard</p>
            </span>
          </button>
        </Link>
        <Link to='/altar'>
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold md:mt-2 md:p-2'>
            <span className='flex w-full items-center transition'>
              <GiCandleLight
                className='mx-2 text-secondary-200'
                size='1.25rem'
              />
              <p className='hidden md:block'>Altar</p>
            </span>
          </button>
        </Link>
        <Link to='/journal'>
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold md:mt-2 md:p-2'>
            <span className='flex w-full items-center transition'>
              <GiNotebook className='mx-2 text-secondary-200' size='1.25rem' />
              <p className='hidden md:block'>Journal</p>
            </span>
          </button>
        </Link>
        <Link to='/reference'>
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold md:mt-2 md:p-2'>
            <span className='flex w-full items-center transition'>
              <GiOpenBook className='mx-2 text-secondary-200' size='1.25rem' />
              <p className='hidden md:block'>Reference</p>
            </span>
          </button>
        </Link>
        <Link to='/'>
          <button className='flex w-full cursor-pointer content-between items-center font-heading text-sm font-semibold md:mt-2 md:p-2'>
            <span className='flex w-full items-center transition'>
              <FaBookmark className='mx-2 text-secondary-200' size='1.25rem' />
              <p className='hidden md:block'>Archive</p>
            </span>
          </button>
        </Link>
      </ul>
    </nav>
  );
};
export default Sidebar;
