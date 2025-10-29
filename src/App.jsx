import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login.jsx';
import Dashboard from './components/pages/Dashboard.jsx';
import Connections from './components/pages/Connections.jsx';
import Jobs from './components/pages/Jobs.jsx';
import Messages from './components/pages/Messages.jsx';
import Notifications from './components/pages/Notifications.jsx';
import Profile from './components/pages/Profile.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </Router>
  );
}

export default App;
