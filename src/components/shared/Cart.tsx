// src/components/Cart.tsx
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
// import { useCart } from "../../context/CartContext";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  const handleCheckout = () => {
    if (isSignedIn && cartItems.length > 0) {
      navigate("/checkout");
    } else {
      navigate("/login");  // Redirect to login if not signed in or empty cart
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <Button
        className="bg-gray-100"
         variant="ghost" onClick={onClose}>
          Close
        </Button>
      </div>

      {cartItems.length === 0 ? (
        <div className="p-4">Your cart is empty</div>
      ) : (
        <ul className="p-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <p>{item.company}</p>
                <p className="text-sm text-gray-500">₹{item.price}</p>
              </div>
              <Button
                variant="destructive"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
      <div className="p-4 border-t">
        <p className="text-sm text-gray-500">
          Total: ₹
          {cartItems.reduce((acc, item) => acc + item.price, 0)}
        </p>
      </div>
      {cartItems.length > 0 && (
        <div className="p-4 border-t">
          <Link to={"/checkout"}>
          <Button 
          onClick={handleCheckout} disabled={cartItems.length === 0}
          className="w-full">Checkout</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
