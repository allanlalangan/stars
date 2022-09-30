import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex h-header w-full items-center justify-between bg-gray-900 px-4 text-slate-300'>
      <Link to='/'>
        <span className='cursor-pointer py-2 font-display text-4xl transition hover:text-slate-100'>
          Stars✨
        </span>
      </Link>
      <nav className='flex items-center justify-evenly'>
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
      </nav>
    </header>
  );
};
export default Header;
