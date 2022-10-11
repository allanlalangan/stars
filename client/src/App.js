import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import CreateAccountPage from './pages/create-account';
import GenerateChartPage from './pages/generate-chart';
import DashboardPage from './pages/dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getCurrentPlanets } from './features/todaySlice';
import { useSelector } from 'react-redux';

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
        <main className='flex h-main'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/dashboard'
              element={user ? <DashboardPage /> : <LoginPage />}
            />
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
