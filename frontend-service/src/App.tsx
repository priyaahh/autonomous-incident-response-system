import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from '@/pages/dashboard/DashboardPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
