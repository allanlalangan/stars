import { MdSpaceDashboard } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import { GiCandleLight, GiOpenBook } from 'react-icons/gi';
import { HiUsers, HiMail, HiBell } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='fixed bottom-0 flex w-screen flex-col items-center justify-between bg-slate-200 md:static md:h-full md:w-1/4'>
      <ul className='flex w-full justify-evenly p-4 md:flex-col md:justify-start'>
        <Link to='/'>
          <li className='mt-1 flex w-full cursor-pointer content-between items-center text-lg tracking-wide'>
            <span className='flex w-full items-center'>
              <BsStars className='mx-1' />
              Feed
            </span>
            <span className='flex h-6 w-6 items-center justify-center rounded-[50%] bg-secondary-200 text-sm font-bold shadow-sm'>
              1
            </span>
          </li>
        </Link>
        <Link to='/dashboard'>
          <li className='mt-1 flex w-full cursor-pointer content-between items-center text-lg tracking-wide'>
            <span className='flex w-full items-center'>
              <MdSpaceDashboard className='mx-1' />
              Dashboard
            </span>
            <span className='flex h-6 w-6 items-center justify-center rounded-[50%] bg-secondary-200 text-sm font-bold shadow-sm'>
              3
            </span>
          </li>
        </Link>
        <Link to='/altar'>
          <li className='mt-1 flex w-full cursor-pointer content-between items-center text-lg tracking-wide'>
            <span className='flex w-full items-center'>
              <GiCandleLight className='mx-1' />
              Altar
            </span>
            <span className='flex h-6 w-6 items-center justify-center rounded-[50%] bg-secondary-200 text-sm font-bold shadow-sm'>
              1
            </span>
          </li>
        </Link>
        <Link to='/'>
          <li className='mt-1 flex w-full cursor-pointer content-between items-center text-lg tracking-wide'>
            <span className='flex w-full items-center'>
              <GiOpenBook className='mx-1' />
              Reference
            </span>
            <span className='flex h-6 w-6 items-center justify-center rounded-[50%] bg-secondary-200 text-sm font-bold shadow-sm'>
              2
            </span>
          </li>
        </Link>
        <Link to='/'>
          <li className='mt-1 flex w-full cursor-pointer content-between items-center text-lg tracking-wide'>
            <span className='flex w-full items-center'>
              <FaBookmark className='mx-1' />
              Archive
            </span>
          </li>
        </Link>
      </ul>
      <ul className='flex w-full items-center justify-center bg-slate-300'>
        <li className='flex cursor-pointer items-center text-lg tracking-wide'>
          Friends
          <HiUsers className='mx-1' />
        </li>
        <li className='flex cursor-pointer items-center text-lg tracking-wide'>
          <span>5</span>
          <HiBell />
        </li>
        <li className='flex cursor-pointer items-center text-lg tracking-wide'>
          <span>8</span>
          <HiMail />
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;
