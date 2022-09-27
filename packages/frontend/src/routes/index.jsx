import { Route, Routes } from 'react-router-dom';
import ActiveServices from '../pages/ActiveServices';
import SoldServices from '../pages/SoldServices';
import HistoryServices from '../pages/HistoryServices';

export default function DeclaredRoutes() {
  return (
      <Routes>
        <Route exact path="/" element={<SoldServices />} />
        <Route exact path="/active" element={<ActiveServices />} />
        <Route exact path="/history" element={<HistoryServices />} />
      </Routes>
  )
}