import { Link } from 'react-router-dom';
import { GiStarSattelites } from 'react-icons/gi';
import { HiMenuAlt2, HiCog, HiSearch } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };
  return (
    <header className='flex h-header w-full items-center justify-between bg-slate-800 px-4 text-slate-300'>
      <Link className='w-1/5' to='/'>
        <span className='flex cursor-pointer items-center justify-center py-2 font-display text-3xl uppercase tracking-wider transition hover:text-secondary-100'>
          Stars
          <GiStarSattelites />
        </span>
      </Link>
      <nav className='flex items-center justify-end'>
        <fieldset className='relative flex'>
          <input
            className='mx-4 w-full py-1 px-4 text-sm tracking-wide'
            type='text'
            name='search'
            id='search'
            placeholder='Search Stars'
          />
          <HiSearch className='absolute right-6 h-full w-4' />
        </fieldset>
        {!user && (
          <Link to='/login'>
            <button className='mx-2 transition hover:text-slate-100'>
              Login
            </button>
          </Link>
        )}
        {user && (
          <>
            <button className='mx-2 flex h-full w-8 justify-center rounded-[50%] border-2 border-secondary-100 transition hover:text-slate-100'>
              <span className='flex'>
                {user.image ? (
                  <img
                    className='h-full w-full rounded-[50%]'
                    src={user.image}
                    alt='user'
                  />
                ) : (
                  'AL'
                )}
              </span>
            </button>
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
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
