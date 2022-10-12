import { GiCandleLight, GiCrystalBall } from 'react-icons/gi';
import { HiUsers, HiMail, HiBell } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='fixed bottom-0 flex w-screen flex-col items-center justify-between bg-slate-200 md:static md:h-full md:w-1/5 md:max-w-screen-sm'>
      <ul className='flex md:flex-col'>
        <Link to='/dashboard'>
          <li className='mt-1 cursor-pointer text-lg tracking-wide'>
            Dashboard
          </li>
        </Link>
        <Link to='/altar'>
          <li className='mt-1 flex cursor-pointer items-center bg-slate-700 text-lg tracking-wide text-slate-50'>
            <GiCrystalBall className='mx-1' />
            Altar
            <GiCandleLight className='mx-1' />
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
