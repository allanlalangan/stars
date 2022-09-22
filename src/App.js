import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import GenerateChartPage from './pages/generate-chart';

// import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1 className='font-medium text-red-400'>Stars</h1>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/generate-chart' element={<GenerateChartPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      {/* <NatalForm /> */}
    </div>
  );
};
export default App;
