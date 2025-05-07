"use client";

import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link (mobile)
  const handleLinkClick = (href: SetStateAction<string>) => {
    setActiveSection(href);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  useEffect(() => {
    // Set active section based on hash
    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setActiveSection(hash);
    };

    // Check if page is scrolled for navbar styling
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Initial values
    handleHashChange();
    handleScroll();

    // Event listeners
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg py-3"
          : "bg-slate-950 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold transition-colors duration-300 hover:opacity-90"
          >
            <span className="text-green-500">Sumon</span>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              DevCoder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1 uppercase font-bold">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-300 relative
                      ${
                        activeSection === link.href
                          ? "text-green-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {link.label}
                    {activeSection === link.href && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
              ))}
              {/* CTA Button */}
              <li>
                <Link
                  href="#contact"
                  onClick={() => handleLinkClick("#contact")}
                  className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md text-sm lg:text-base font-medium hover:bg-green-700 transition-colors duration-300"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <nav className="bg-slate-800 rounded-lg p-4 shadow-lg">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300
                      ${
                        activeSection === link.href
                          ? "bg-slate-700 text-green-400"
                          : "text-gray-300 hover:bg-slate-700 hover:text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => handleLinkClick("#contact")}
                  className="block px-3 py-2 bg-green-600 text-white rounded-md text-base font-medium hover:bg-green-700 transition-colors duration-300"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
