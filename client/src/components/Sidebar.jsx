import { MdSpaceDashboard } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import { GiCandleLight, GiOpenBook } from 'react-icons/gi';
import { HiUsers, HiMail, HiBell } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='fixed bottom-0 flex w-screen flex-col items-center justify-between bg-slate-700 text-slate-50 md:static md:h-full md:w-1/4'>
      <ul className='flex w-full justify-evenly p-4 md:flex-col md:justify-start'>
        <Link to='/feed'>
          <li className='mt-1 flex w-full cursor-pointer content-between items-center p-2 font-heading text-sm font-semibold'>
            <span className='flex w-full items-center'>
              <BsStars className='mx-2' size='1.25rem' />
              Feed
            </span>
            <span className='flex h-6 w-6 items-center justify-center rounded-[50%] bg-rose-300 font-body text-sm font-bold text-slate-900 shadow-sm'>
              8
            </span>
          </li>
        </Link>
        <Link to='/dashboard'>
          <li className='mt-1 flex w-full cursor-pointer content-between items-center p-2 font-heading text-sm font-semibold'>
            <span className='flex w-full items-center'>
              <MdSpaceDashboard className='mx-2' size='1.25rem' />
              Dashboard
            </span>
            <span className='flex h-6 w-6 items-center justify-center rounded-[50%] bg-rose-300 font-body text-sm font-bold text-slate-900 shadow-sm'>
              2
            </span>
          </li>
        </Link>
        <Link to='/altar'>
          <li className='mt-1 flex w-full cursor-pointer content-between items-center p-2 font-heading text-sm font-semibold'>
            <span className='flex w-full items-center'>
              <GiCandleLight className='mx-2' size='1.25rem' />
              Altar
            </span>
            <span className='flex h-6 w-6 items-center justify-center rounded-[50%] bg-rose-300 font-body text-sm font-bold text-slate-900 shadow-sm'>
              4
            </span>
          </li>
        </Link>
        <Link to='/reference'>
          <li className='mt-1 flex w-full cursor-pointer content-between items-center p-2 font-heading text-sm font-semibold'>
            <span className='flex w-full items-center'>
              <GiOpenBook className='mx-2' size='1.25rem' />
              Reference
            </span>
          </li>
        </Link>
        <Link to='/'>
          <li className='mt-1 flex w-full cursor-pointer content-between items-center p-2 font-heading text-sm font-semibold'>
            <span className='flex w-full items-center'>
              <FaBookmark className='mx-2' size='1.25rem' />
              Archive
            </span>
          </li>
        </Link>
      </ul>
      {/* <ul className='flex w-full items-center justify-center bg-slate-300'>
        <li className='flex cursor-pointer items-center text-lg'>
          Friends
          <HiUsers className='mx-2' size='1.25rem' />
        </li>
        <li className='flex cursor-pointer items-center text-lg'>
          <span>5</span>
          <HiBell />
        </li>
        <li className='flex cursor-pointer items-center text-lg'>
          <span>8</span>
          <HiMail />
        </li>
      </ul> */}
    </nav>
  );
};
export default Sidebar;
