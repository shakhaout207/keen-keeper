import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FriendDetailsPage from './pages/FriendDetailsPage';
import TimelinePage from './pages/TimelinePage';
import StatsPage from './pages/StatsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/friends/:friendId" element={<FriendDetailsPage />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}