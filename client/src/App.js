import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import CreateAccountPage from './pages/create-account';
import GenerateChartPage from './pages/generate-chart';
import ChartsPage from './pages/charts';
import TarotPage from './pages/tarot';
import DashboardPage from './pages/dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getCurrentPlanets } from './features/todaySlice';
import { useSelector } from 'react-redux';
import AltarPage from './pages/altar';
import TarotDeckPage from './pages/tarot-deck';

const App = () => {
  const { user } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCurrentPlanets());
  //   console.log('getting now');
  // }, []);
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <main className='flex flex-col-reverse md:h-main md:flex-row'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/create-account' element={<CreateAccountPage />} />
            <Route path='/generate-chart' element={<GenerateChartPage />} />
            <Route path='/altar' element={<AltarPage />}>
              <Route path='tarot' element={<TarotPage />}>
                <Route path='deck/:id' element={<TarotDeckPage />} />
              </Route>
              <Route path='charts' element={<ChartsPage />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
export default App;
