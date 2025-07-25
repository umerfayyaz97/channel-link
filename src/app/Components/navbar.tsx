"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for the dropdown containers on desktop and mobile
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  // Effect to close menus automatically on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside both the desktop and mobile dropdown containers
      const isOutsideDesktop =
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node);

      const isOutsideMobile =
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node);

      if (isOutsideDesktop && isOutsideMobile) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCompanyClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    // Set a high z-index and relative positioning on the nav to fix visibility issues
    <nav className="relative bg-black text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        <div className="text-2xl font-bold italic text-white">
          <Link href="/">CHANNEL LINK</Link>
        </div>

        {/* Desktop version */}
        <div className="space-x-14 hidden md:flex items-center">
          <Link
            href="/"
            className="hover:text-blue-500 transition duration-300"
          >
            Home
          </Link>

          {/* Company Dropdown (Desktop) */}
          <div ref={desktopDropdownRef} className="relative">
            <button
              className="hover:text-blue-500 transition duration-300"
              onClick={handleCompanyClick}
            >
              Company
            </button>
            {dropdownOpen && (
              <div className="absolute -left-10 bg-white text-gray-800 shadow-lg mt-5 w-40">
                <Link
                  href="/Company/about-us"
                  className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                >
                  About Us
                </Link>
                <Link
                  href="/Company/leadership"
                  className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                >
                  Leadership
                </Link>
                <Link
                  href="/Company/our-brands"
                  className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                >
                  Our Brands
                </Link>
                <Link
                  href="/Company/careers"
                  className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                >
                  Careers
                </Link>
                <Link
                  href="/Company/news-events"
                  className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                >
                  News & Events
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/Services"
            className="hover:text-blue-500 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/Brands"
            className="hover:text-blue-500 transition duration-300"
          >
            Brands
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-blue-500 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile version */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl"
            onClick={handleMobileMenuToggle}
          >
            &#9776;
          </button>
          {mobileMenuOpen && (
            <div className="absolute bg-black text-white p-4 mt-4 right-0 w-48 shadow-lg">
              <Link
                href="/"
                className="block px-4 py-2 hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>

              {/* Company dropdown on mobile */}
              <div ref={mobileDropdownRef} className="relative">
                <button
                  className="block w-full px-4 py-2 text-left hover:text-blue-500 transition duration-300"
                  onClick={handleCompanyClick}
                >
                  Company
                </button>
                {dropdownOpen && (
                  // Use pl-4 for indentation instead of a separate absolute div
                  <div className="pl-4">
                    <Link
                      href="/Company/about-us"
                      className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/Company/leadership"
                      className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/Company/our-brands"
                      className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                    >
                      Our Brands
                    </Link>
                    <Link
                      href="/Company/careers"
                      className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/Company/news-events"
                      className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                    >
                      News & Events
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/Services"
                className="block px-4 py-2 hover:text-blue-500 transition duration-300"
              >
                Services
              </Link>
              <Link
                href="/Brands"
                className="block px-4 py-2 hover:text-blue-500 transition duration-300"
              >
                Brands
              </Link>
              <Link
                href="/contact-us"
                className="block px-4 py-2 hover:text-blue-500 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
