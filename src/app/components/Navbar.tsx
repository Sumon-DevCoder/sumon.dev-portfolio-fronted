"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setCurrentHash(window.location.hash);
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const Links = (
    <>
      <Link
        href="#"
        className={`p-2 rounded-lg  hover:text-green-600  ${
          currentHash === "#home" ? "text-orange-400 border-orange-600" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="#about"
        className={`p-2 rounded-lg  hover:text-green-600  ${
          currentHash === "#about" ? "text-orange-400 border-orange-600" : ""
        }`}
      >
        About
      </Link>
      <Link
        href="#skills"
        className={`p-2 rounded-lg  hover:text-green-600  ${
          currentHash === "#skills" ? "text-orange-400 border-orange-600" : ""
        }`}
      >
        Skills
      </Link>
      <Link
        href="#project"
        className={`p-2 rounded-lg  hover:text-green-600 ${
          currentHash === "#project" ? "text-orange-400 border-orange-600" : ""
        }`}
      >
        Projects
      </Link>
      <Link
        href="#blogs"
        className={`p-2 rounded-lg  hover:text-green-600 ${
          currentHash === "#blogs" ? "text-orange-400 border-orange-600" : ""
        }`}
      >
        Blogs
      </Link>
      <Link
        href="#contact"
        className={`p-2 rounded-md  hover:text-green-600 border-b-2 ${
          currentHash === "#contact" ? "text-orange-400 border-orange-600" : ""
        }`}
      >
        Contact
      </Link>
    </>
  );

  return (
    <div className="sticky href p-0 z-50 top-0 bg-slate-950">
      <div className="navbar bg-dark shadow-lg px-5 text-white flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleToggleMenu}
            >
              {isMenuOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  bg-gray-600  rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1"
              >
                {Links}
              </ul>
            )}
          </div>
          <Link
            href={`/`}
            className="btn btn-ghost text-lg md:text-xl bg-gradient-href-r from-slate-100 font-semibold"
          >
            <span className="text-4xl mt-1">
              <span className="text-green-500">Sumon</span>DevCoder
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3  text-lg font-normal rounded-b-2xl border-2 border-gray-400">
            {Links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
