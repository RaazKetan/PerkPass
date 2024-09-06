
import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"
import CouponsMain from "./CouponsMain"



export default function BuyCoupons() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <CouponsMain/>

    {/* Footer */}
     <Footer/>
    </div>
  )
}