import { Button } from "../ui/button";
import { Briefcase, Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Cart from "./Cart";
import { SignOutButton, SignInButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const location = useLocation();
  const isBuyCouponsPage = location.pathname === "/buy-coupons";
  const { cartItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">PerkPass</h1>

        <div className="space-x-4 flex items-center">
          <Button variant="outline" className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4" />
            Register Coupons
          </Button>

          {/* Conditional rendering based on the current route */}
          {isBuyCouponsPage ? (
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
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

              {/* Profile and Sign-out */}
              {isSignedIn ? (
                <>
                  <Button variant="ghost" className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Profile
                  </Button>
                  <SignOutButton>
                    <Button variant="ghost" className="flex items-center">
                      Logout
                    </Button>
                  </SignOutButton>
                </>
              ) : null}
            </div>
          ) : (
            <Link to="/buy-coupons">
              <Button variant="default" className="flex items-center">
                <Search className="mr-2 h-4 w-4" />
                Buy Coupons
              </Button>
            </Link>
          )}

          {/* Show login/signup if not signed in */}
          {!isSignedIn && (
            <>
              <SignInButton mode="modal">
                <Button variant="default" className="flex items-center">
                  Login
                </Button>
              </SignInButton>
            </>
          )}
        </div>
      </div>

      {/* Cart */}
      <Cart isOpen={cartOpen} onClose={toggleCart} />
    </nav>
  );
}
