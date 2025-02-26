import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [nav, setNav] = useState(false);

  return (
    <header>
      <nav className="bg-green-200 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          {/* Logo and Title */}
          <a href="#" className="flex items-center">
            <img src="/logo_ISL.png" alt="Logo" className="nav-logo" />
            <span className="ml-2 text-xl font-semibold whitespace-nowrap dark:text-white">
              INDIAN Sign Language Converter
            </span>
          </a>

          {/* Navbar Links */}
          <div
            className={`flex-col md:flex md:flex-row items-center w-full md:w-auto md:order-2 transition-all duration-300 ${
              nav
                ? "absolute top-14 left-0 w-full bg-white shadow-md p-4 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                : "hidden md:flex gap-6"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8 gap-0">
              {["Home", "How It Works", "Features", "Demo", "About Us", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="nav-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button className="sign-up-btn">
              Sign Up Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center lg:order-1">
            <button
              type="button"
              className="mobile-menu-btn"
              aria-controls="mobile-menu"
              aria-expanded={nav}
              onClick={() => setNav(!nav)}
            >
              <span className="sr-only">Open main menu</span>
              {nav ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
