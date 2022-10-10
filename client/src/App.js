import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import CreateAccountPage from './pages/create-account';
import GenerateChartPage from './pages/generate-chart';
import DashboardPage from './pages/dashboard';
import Sidebar from './components/Sidebar';
import { getMillisecondsUntilMidnight } from './util/utils';
import { useEffect, useMemo } from 'react';

const App = () => {
  const millisecondsUntilMidnight = useMemo(getMillisecondsUntilMidnight, []);
  useEffect(() => {
    let interval;
    if (millisecondsUntilMidnight) {
      interval = setInterval(() => {
        console.log(millisecondsUntilMidnight);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [millisecondsUntilMidnight]);
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <main className='flex h-main'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/create-account' element={<CreateAccountPage />} />
            <Route path='/generate-chart' element={<GenerateChartPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
export default App;
