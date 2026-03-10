import Image from "next/image";
import React from "react";

const VendorNavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between align-items-center">
        <div className="text-xl font-bold text-gray-800">
          <Image
            src="/food_app_logo.jpg"
            width={90}
            height={90}
            alt="food-app-logo"
            title="Welcome to Food App"
          />
        </div>
      </div>
    </nav>
  );
};

export default VendorNavBar;
