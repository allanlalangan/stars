import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/home';
import GenerateChartPage from './pages/generate-chart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header className='flex w-full justify-between bg-gray-900 px-4 text-slate-300'>
          <Link to='/'>
            <h1 className='cursor-pointer py-2 transition hover:text-slate-100'>
              Stars✨
            </h1>
          </Link>
          <nav className='flex items-center justify-evenly'>
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
        <main className='px-4'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/generate-chart' element={<GenerateChartPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
export default App;
