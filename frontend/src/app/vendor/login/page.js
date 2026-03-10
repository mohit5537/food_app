import { VendorLogin as Login } from "@/components/sections/Forms";
import Navbar from "@/components/sections/Navbar";

export default function page({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Login />
    </div>
  );
}
