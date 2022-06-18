import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { HomePage, LoginPage } from './pages';

function App() {
  return (
    <Box p={5}>
      <Routes>
        <Route path='auth' element={<LoginPage />} />
        <Route path='home' element={<HomePage />} />
      </Routes>
    </Box>
  );
}

export default App;
