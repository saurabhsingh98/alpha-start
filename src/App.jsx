import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/login.jsx';

function App() {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>} />
        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </Router>
  );
}

export default App;
