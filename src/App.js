import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import CreateAccountPage from './pages/create-account';
import GenerateChartPage from './pages/generate-chart';
import DashboardPage from './pages/dashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='h-main'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/create-account' element={<CreateAccountPage />} />
            <Route path='/generate-chart' element={<GenerateChartPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
export default App;
