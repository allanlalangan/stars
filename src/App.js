import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/home';
import GenerateChartPage from './pages/generate-chart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header className='flex w-full justify-between bg-sky-50 px-4'>
          <Link to='/'>
            <h1 className='cursor-pointer font-medium text-red-400'>Stars</h1>
          </Link>
          <nav className='flex items-center'>
            <Link to='/generate-chart'>
              <button>Generate Natal Chart</button>
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
