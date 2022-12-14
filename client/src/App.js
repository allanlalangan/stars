import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import CreateAccountPage from './pages/create-account';
import DashboardPage from './pages/dashboard';
import AltarPage from './pages/altar';
import TarotPage from './pages/tarot';
import TarotDeckPage from './pages/tarot-deck';
import ChartsPage from './pages/charts';
import GenerateChartPage from './pages/generate-chart';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FeedPage from './pages/feed';
import ReferencePage from './pages/reference';
import AstrologyPage from './pages/astrology';
import JournalPage from './pages/journal';
import { useLoadScript } from '@react-google-maps/api';
import FullChartPage from './pages/full-chart';

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const { charts } = useSelector((state) => state.chart);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: ['places'],
  });
  return (
    <div className='app relative'>
      <BrowserRouter>
        <Header />
        {user && <Sidebar />}
        <main
          className={`${
            !user ? 'h-main w-full' : 'h-[80%] md:left-[25vw] md:w-3/4'
          } absolute top-[10%] z-0 flex w-full flex-col md:h-main md:flex-row`}
        >
          <Routes>
            <Route
              path='/'
              element={user ? <Navigate to='/dashboard' /> : <HomePage />}
            />
            <Route
              path='/feed'
              element={user ? <FeedPage /> : <Navigate to='/login' />}
            />
            <Route
              path='/dashboard'
              element={!user ? <Navigate to='/login' /> : <DashboardPage />}
            />
            <Route
              path='/journal'
              element={user ? <JournalPage /> : <Navigate to='/login' />}
            />
            <Route path='/reference' element={<ReferencePage />}>
              <Route path='astrology' element={<AstrologyPage />} />
              <Route path='tarot' element={<TarotPage />}>
                <Route path='deck/:id' element={<TarotDeckPage />} />
              </Route>
            </Route>
            <Route
              path='/login'
              element={
                !user ? <LoginPage user={user} /> : <Navigate to='/dashboard' />
              }
            />
            <Route
              path='/create-account'
              element={
                user ? <DashboardPage /> : <CreateAccountPage user={user} />
              }
            />
            <Route
              path='/generate-chart'
              element={<GenerateChartPage user={user} isLoaded={isLoaded} />}
            />
            <Route
              path='/altar'
              element={user ? <AltarPage /> : <Navigate to='/login' />}
            >
              <Route
                path='charts'
                element={<ChartsPage isLoaded={isLoaded} />}
              />
              <Route
                path='charts/:id'
                element={<FullChartPage charts={charts} />}
              />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
export default App;
