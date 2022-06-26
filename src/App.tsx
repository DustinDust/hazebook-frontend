import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { HomePage, LoginPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path='auth' element={<LoginPage />} />
      <Route path='home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
