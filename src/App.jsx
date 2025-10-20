import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/login.jsx';
import Dashboard from './components/pages/Dashboard.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </Router>
  );
}

export default App;
