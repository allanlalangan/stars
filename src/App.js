import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import GenerateChartPage from './pages/generate-chart';
import DashboardPage from './pages/dashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
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
        <main className='h-main'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/generate-chart' element={<GenerateChartPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
export default App;
