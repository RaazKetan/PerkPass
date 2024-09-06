import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import BuyCoupons from "./Pages/BuyCoupons/BuyCoupons"; // Import the BuyCoupons component
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
        <Route
          path="/buy-coupons"
          element={
            <CartProvider>
              <BuyCoupons />
            </CartProvider>
          }
        />{" "}
        {/* Buy Coupons route */}
      </Routes>
    </Router>
  );
}

export default App;
