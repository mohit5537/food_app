"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const navItems = [
  {
    name: "Vendor",
    options: [
      { item: "Vendor Login", href: "/vendor/login" },
      { item: "Vendor Register", href: "/vendor/register" },
    ],
  },
  {
    name: "Firm",
    options: [
      { item: "Firm Login", href: "/firm/login" },
      { item: "Firm Register", href: "/firm/register" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
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
        <ul className="flex space-x-4">
          {navItems.map((navItem, index) => {
            const hasOptions = navItem.options && navItem.options.length > 0;
            return (
              <>
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(index)}
                >
                  {hasOptions ? (
                    <>
                      <button
                        key={index}
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        {navItem.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4 inline" />
                      </button>
                      {openDropdown === index ? (
                        <ul className="absolute mt-4 min-w-40   bg-white shadow-lg rounded-md border-0.5 border-gray-200">
                          {navItem.options.map((option, idn) => (
                            <li key={idn}>
                              <a
                                href={option.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {option.item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  ) : (
                    <a href={navItem.href} className="flex items-center">
                      {navItem.name}
                    </a>
                  )}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
