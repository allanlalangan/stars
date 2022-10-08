import { Link } from 'react-router-dom';
import { GiStarSattelites } from 'react-icons/gi';
import { HiMenuAlt2, HiCog } from 'react-icons/hi';

const Header = () => {
  return (
    <header className='flex h-header w-full items-center justify-between bg-gray-900 pr-4 text-slate-300'>
      <Link className='w-1/5' to='/'>
        <span className='flex cursor-pointer items-center justify-center py-2 font-display text-3xl uppercase tracking-wider transition hover:text-yellow-100'>
          Stars
          <GiStarSattelites />
        </span>
      </Link>
      <nav className='flex w-full items-center justify-end'>
        <Link to='/dashboard'>
          <button className='mx-2 transition hover:text-slate-100'>
            Dashboard
          </button>
        </Link>
        <Link to='/generate-chart'>
          <button className='mx-2 transition hover:text-slate-100'>
            Generate Natal Chart
          </button>
        </Link>
        <Link to='/login'>
          <button className='mx-2 transition hover:text-slate-100'>
            Login
          </button>
        </Link>
        <Link to='/'>
          <button className='mx-2 transition hover:text-slate-100'>
            <HiMenuAlt2 />
          </button>
        </Link>
        <Link to='/'>
          <button className='mx-2 transition hover:text-slate-100'>
            <HiCog />
          </button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
