import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import BuyCoupons from "./Pages/BuyCoupons/BuyCoupons";
import Checkout from "./Pages/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function App() {
  return (
      <Router>
        <CartProvider>
          <Routes>
            {/* Landing page route */}
            <Route path="/" element={<LandingPage />} />

            {/* Buy Coupons route */}
            <Route path="/buy-coupons" element={<BuyCoupons />} />

            {/* Protected Checkout route */}
            <Route
              path="/checkout"
              element={
                <SignedIn>
                  <Checkout />
                </SignedIn>
              }
            />

            {/* If not signed in, redirect to sign-in */}
            <Route
              path="/checkout"
              element={
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              }
            />
          </Routes>
        </CartProvider>
      </Router>
  );
}

export default App;
