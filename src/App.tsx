import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import BuyCoupons from './BuyCoupons/BuyCoupons'; // Import the BuyCoupons component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />  {/* Landing page route */}
        <Route path="/buy-coupons" element={<BuyCoupons />} />  {/* Buy Coupons route */}
      </Routes>
    </Router>
  );
}

export default App;
