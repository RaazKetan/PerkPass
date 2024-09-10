import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import CouponsMain from "./CouponsMain";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export default function BuyCoupons() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <SignedIn>
        <CouponsMain />
      </SignedIn>

      <SignedOut>
        <div className="text-center py-16">
          <h2>Please sign in to view and buy coupons.</h2>
        </div>
      </SignedOut>

      {/* Footer */}
      <Footer />
    </div>
  );
}
