import { GiCandleLight, GiCrystalBall } from 'react-icons/gi';
import { HiUsers, HiMail, HiBell } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <nav className='flex h-full w-1/5 max-w-screen-sm flex-col items-center justify-between bg-slate-200'>
      <ul>
        <li className='mt-1 cursor-pointer text-lg tracking-wide'>Forecasts</li>
        <li className='mt-1 cursor-pointer text-lg tracking-wide'>Calendar</li>
        <li className='mt-1 cursor-pointer text-lg tracking-wide'>The Moon</li>
        <li className='mt-1 cursor-pointer text-lg tracking-wide'>Goals</li>
        <li className='mt-1 cursor-pointer text-lg tracking-wide'>Read</li>
        <li className='mt-1 cursor-pointer text-lg tracking-wide'>Write</li>
        <li className='mt-1 flex cursor-pointer items-center bg-slate-700 text-lg tracking-wide text-slate-50'>
          <GiCrystalBall className='mx-1' />
          Altar
          <GiCandleLight className='mx-1' />
        </li>
        <li className='mt-1 cursor-pointer text-lg tracking-wide'>Archive</li>
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
