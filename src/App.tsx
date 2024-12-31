import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import Layout from './pages/Layout/Layout';
import AuthPage from './pages/Auth/Auth';
import { lazy } from 'react';

const CompassPage = lazy(() => import('./pages/Compass/Compass'));
const ClientsPage = lazy(() => import('./pages/Clients/Clients'));
const CalendarPage = lazy(() => import('./pages/Calendar/Calendar'));
const CalculatorPage = lazy(() => import('./pages/Calculator/Calculator'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/compass" element={<CompassPage />} />
        <Route path="/clients" element={<ClientsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
