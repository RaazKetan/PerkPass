import { Button } from "../ui/button";
import { ArrowLeft, Briefcase, Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Cart from "./Cart";
import { SignOutButton, SignInButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const location = useLocation();
  const isBuyCouponsPage = location.pathname === "/buy-coupons";
  const isCheckoutPage = location.pathname === "/checkout";
  const { cartItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">PerkPass</h1>

        <div className="space-x-4 flex items-center">
          {/* Show different buttons based on the page */}
          {isCheckoutPage ? (
            // Checkout page buttons
            <div className="flex items-center space-x-4">
              <Link to="/buy-coupons">
                <Button variant="ghost" className="flex items-center bg-transparent">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Cart
                </Button>
              </Link>
              <Button variant="outline" className="flex items-center">
                <Briefcase className="mr-2 h-4 w-4" />
                Register Coupons
              </Button>
              <Button variant="ghost" className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Profile
              </Button>
            </div>
          ) : isBuyCouponsPage ? (
            // Buy coupons page buttons
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="flex items-center relative"
                onClick={toggleCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute top-2 right-2 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex justify-center items-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
              {isSignedIn && (
                <Button variant="ghost" className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Profile
                </Button>
              )}
            </div>
          ) : (
            // Default buttons for other pages
            <>
              <Link to="/buy-coupons">
                <Button variant="default" className="flex items-center">
                  <Search className="mr-2 h-4 w-4" />
                  Buy Coupons
                </Button>
              </Link>
              {isSignedIn && (
                <Button variant="ghost" className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Profile
                </Button>
              )}
            </>
          )}

          {/* Show login/signup if not signed in, logout if signed in */}
          {isSignedIn ? (
            <SignOutButton>
              <Button variant="ghost" className="flex items-center">
                Logout
              </Button>
            </SignOutButton>
          ) : !isCheckoutPage && (
            <SignInButton mode="modal">
              <Button variant="default" className="flex items-center">
                Login
              </Button>
            </SignInButton>
          )}
        </div>
      </div>

      {/* Cart */}
      {!isCheckoutPage && <Cart isOpen={cartOpen} onClose={toggleCart} />}
    </nav>
  );
}