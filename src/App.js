import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './css/base.module.scss';

import MainLayout from './components/Layouts/MainLayout/MainLayout';

import Home from './components/pages/Home/Home';
import Livingrooms from './components/pages/Livingrooms/Livingrooms';
import Kitchen from './components/pages/Kitchen/Kitchen';
import Bedrooms from './components/pages/Bedrooms/Bedrooms';


function App() {
  return (
    <Router basename='/'>
      <MainLayout>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/livingrooms' element={<Livingrooms />} />
          <Route path='/kitchen' element={<Kitchen />} />
          <Route path='/bedrooms' element={<Bedrooms />} />
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
