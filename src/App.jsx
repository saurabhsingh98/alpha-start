import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login.jsx';
import Dashboard from './components/pages/Dashboard.jsx';
import Connections from './components/pages/Connections.jsx';
import Jobs from './components/pages/Jobs.jsx';
import Messages from './components/pages/Messages.jsx';
import Conversation from './components/pages/Conversation.jsx';
import Notifications from './components/pages/Notifications.jsx';
import ProfilePage from './components/pages/Profile.jsx';
import Header from './components/common/Header.jsx';
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <Router>
      <Toaster position="top-right" />
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/conversation/:targetUserId" element={<Conversation />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
    </Router>
  );
}

export default App;
