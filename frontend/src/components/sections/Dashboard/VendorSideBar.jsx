import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Add Firm", href: "/vendor/dashboard/firm/new", default: true },
  { name: "View Firms", href: "/vendor/dashboard/firm/view" },
  { name: "Add Product", href: "/vendor/dashboard/products/new" },
  { name: "View Products", href: "/vendor/dashboard/products/view" },
  { name: "Logout", href: "/logout" },
];

const VendorSideBar = () => {
  return (
    <nav className="bg-[#dde9d6] shadow-md h-screen p-3 rounded-md">
      <ul className="text-justify text-lg ">
        {navItems.map((nav, index) => {
          return (
            <li key={index} className="p-3 hover:underline underline-offset-4">
              <Link href={nav.href}>{nav.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default VendorSideBar;
