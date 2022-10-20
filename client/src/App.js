import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, reset } from './features/authSlice';

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

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(user);
  }, [user]);
  useEffect(() => {
    dispatch(getUser());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <main className='flex flex-col-reverse md:h-main md:flex-row'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/feed'
              element={user ? <FeedPage /> : <Navigate to='/login' />}
            />
            <Route
              path='/dashboard'
              element={user ? <DashboardPage /> : <Navigate to='/login' />}
            />
            <Route
              path='/login'
              element={!user ? <LoginPage /> : <Navigate to='/' />}
            />
            <Route path='/create-account' element={<CreateAccountPage />} />
            <Route path='/generate-chart' element={<GenerateChartPage />} />
            <Route
              path='/altar'
              element={user ? <AltarPage /> : <Navigate to='/login' />}
            >
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
