import { Link } from 'react-router-dom';
import { GiStarSattelites } from 'react-icons/gi';
import { HiMenuAlt2, HiCog } from 'react-icons/hi';

const Header = () => {
  const handleLogout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };
  return (
    <header className='flex h-header w-full items-center justify-between bg-gray-900 pr-4 text-slate-300'>
      <Link className='w-1/5' to='/'>
        <span className='flex cursor-pointer items-center justify-center py-2 font-display text-3xl uppercase tracking-wider transition hover:text-yellow-100'>
          Stars
          <GiStarSattelites />
        </span>
      </Link>
      <nav className='flex w-full items-center justify-end'>
        <Link to='/login'>
          <figure className='mx-2 flex w-6 justify-center rounded-[50%] border border-yellow-100 transition hover:text-slate-100'>
            <span>A</span>
          </figure>
        </Link>
        <Link to='/login'>
          <button className='mx-2 transition hover:text-slate-100'>
            Login
          </button>
        </Link>
        <button
          onClick={handleLogout}
          className='mx-2 transition hover:text-slate-100'
        >
          Logout
        </button>
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
