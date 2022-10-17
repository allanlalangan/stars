import { MdSpaceDashboard } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import { GiCandleLight, GiOpenBook } from 'react-icons/gi';
import { HiUsers, HiMail, HiBell } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='fixed bottom-0 flex w-screen flex-col items-center justify-between bg-slate-200 md:static md:h-full md:w-1/5 md:max-w-screen-sm'>
      <ul className='flex md:flex-col'>
        <Link to='/dashboard'>
          <li className='mt-1 flex cursor-pointer items-center text-lg tracking-wide'>
            <BsStars className='mx-1' />
            Feed
          </li>
        </Link>
        <Link to='/dashboard'>
          <li className='mt-1 flex cursor-pointer items-center text-lg tracking-wide'>
            <MdSpaceDashboard className='mx-1' />
            Dashboard
          </li>
        </Link>
        <Link to='/altar'>
          <li className='mt-1 flex cursor-pointer items-center text-lg tracking-wide'>
            <GiCandleLight className='mx-1' />
            Altar
          </li>
        </Link>
        <Link to='/'>
          <li className='mt-1 flex cursor-pointer items-center text-lg tracking-wide'>
            <GiOpenBook className='mx-1' />
            Reference
          </li>
        </Link>
        <Link to='/'>
          <li className='mt-1 flex cursor-pointer items-center text-lg tracking-wide'>
            <FaBookmark className='mx-1' />
            Archive
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
