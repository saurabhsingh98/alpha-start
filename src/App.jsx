import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/login.jsx';
import Dashboard from './components/pages/Dashboard.jsx';
import Connections from './components/pages/Connections.jsx';
import Jobs from './components/pages/Jobs.jsx';
import Messages from './components/pages/Messages.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </Router>
  );
}

export default App;
