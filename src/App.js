import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Login from './pages/Login';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
