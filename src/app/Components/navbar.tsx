// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const companyRef = useRef<HTMLDivElement>(null);
//   const menuRef = useRef<HTMLDivElement>(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         companyRef.current &&
//         !companyRef.current.contains(event.target as Node) &&
//         menuRef.current &&
//         !menuRef.current.contains(event.target as Node)
//       ) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const handleCompanyClick = () => {
//     // Toggle the dropdown menu
//     setDropdownOpen((prev) => !prev);
//   };

//   const handleMobileMenuToggle = () => {
//     // Toggle the mobile menu visibility
//     setMobileMenuOpen((prev) => !prev);
//   };

//   const handleMenuItemClick = () => {
//     // Close the menu after selecting a menu item
//     setMobileMenuOpen(false);
//     setDropdownOpen(false);
//   };

//   return (
//     <nav className="bg-black text-white p-4 shadow-lg">
//       <div className="max-w-7xl mx-auto flex justify-around items-center">
//         <div className="text-2xl font-bold italic text-white">
//           <Link href="/">CHANNEL LINK</Link>
//         </div>
//         {/* Desktop version */}
//         <div className="space-x-14 hidden md:flex relative">
//           <Link
//             href="/"
//             className="hover:text-blue-500 transition duration-300"
//           >
//             Home
//           </Link>
//           {/* Company Dropdown (Desktop) */}
//           <div ref={companyRef} className="relative">
//             <button
//               className="hover:text-blue-500 transition duration-300"
//               onClick={handleCompanyClick}
//             >
//               Company
//             </button>
//             {dropdownOpen && (
//               <div
//                 ref={menuRef}
//                 className="absolute -left-10 bg-white text-gray-800 shadow-lg mt-5 w-40 z-10"
//               >
//                 <Link
//                   href="/Company/about-us"
//                   className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
//                   onClick={handleMenuItemClick}
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   href="/Company/leadership"
//                   className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
//                   onClick={handleMenuItemClick}
//                 >
//                   Leadership
//                 </Link>
//                 <Link
//                   href="/Company/our-brands"
//                   className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
//                   onClick={handleMenuItemClick}
//                 >
//                   Our Brands
//                 </Link>
//                 <Link
//                   href="/Company/careers"
//                   className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
//                   onClick={handleMenuItemClick}
//                 >
//                   Careers
//                 </Link>
//                 <Link
//                   href="/Company/news-events"
//                   className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
//                   onClick={handleMenuItemClick}
//                 >
//                   News & Events
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link
//             href="/services"
//             className="hover:text-blue-500 transition duration-300"
//           >
//             Services
//           </Link>
//           <Link
//             href="/brands"
//             className="hover:text-blue-500 transition duration-300"
//           >
//             Brands
//           </Link>
//           <Link
//             href="/contact-us"
//             className="hover:text-blue-500 transition duration-300"
//           >
//             Contact Us
//           </Link>
//         </div>

//         {/* Mobile version */}
//         <div className="md:hidden">
//           <button className="text-white" onClick={handleMobileMenuToggle}>
//             &#9776;
//           </button>
//           {mobileMenuOpen && (
//             <div className="absolute bg-black text-white p-4 mt-2 right-0 w-48">
//               <Link
//                 href="/"
//                 className="block px-4 py-2 hover:text-blue-500 transition duration-300"
//                 onClick={handleMenuItemClick}
//               >
//                 Home
//               </Link>
//               {/* Company dropdown on mobile */}
//               <div ref={companyRef} className="relative">
//                 <button
//                   className="block w-full px-4 py-2 text-left hover:text-blue-500 transition duration-300"
//                   onClick={handleCompanyClick}
//                 >
//                   Company
//                 </button>
//                 {dropdownOpen && (
//                   <div
//                     ref={menuRef}
//                     className="absolute left-0 bg-black text-white shadow-lg mt-2 w-48 z-10"
//                   >
//                     <Link
//                       href="/Company/about-us"
//                       className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
//                       onClick={handleMenuItemClick}
//                     >
//                       About Us
//                     </Link>
//                     <Link
//                       href="/Company/leadership"
//                       className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
//                       onClick={handleMenuItemClick}
//                     >
//                       Leadership
//                     </Link>
//                     <Link
//                       href="/Company/our-brands"
//                       className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
//                       onClick={handleMenuItemClick}
//                     >
//                       Our Brands
//                     </Link>
//                     <Link
//                       href="/Company/careers"
//                       className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
//                       onClick={handleMenuItemClick}
//                     >
//                       Careers
//                     </Link>
//                     <Link
//                       href="/Company/news-events"
//                       className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
//                       onClick={handleMenuItemClick}
//                     >
//                       News & Events
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <Link
//                 href="/services"
//                 className="block px-4 py-2 hover:text-blue-500 transition duration-300"
//                 onClick={handleMenuItemClick}
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/brands"
//                 className="block px-4 py-2 hover:text-blue-500 transition duration-300"
//                 onClick={handleMenuItemClick}
//               >
//                 Brands
//               </Link>
//               <Link
//                 href="/contact-us"
//                 className="block px-4 py-2 hover:text-blue-500 transition duration-300"
//                 onClick={handleMenuItemClick}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

"use client"; // Ensure this component is rendered client-side

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        companyRef.current &&
        !companyRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCompanyClick = () => {
    // Toggle the dropdown menu
    setDropdownOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    // Close the menu and reset dropdown state after selecting a menu item
    setMobileMenuOpen(false);
    setDropdownOpen(false); // Reset dropdown state after selecting a menu item
  };

  const handleMobileMenuToggle = () => {
    // Toggle the mobile menu visibility
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-black text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        <div className="text-2xl font-bold italic text-white">
          <Link href="/">CHANNEL LINK</Link>
        </div>

        {/* Desktop version */}
        <div className="space-x-14 hidden md:flex relative">
          <Link
            href="/"
            className="hover:text-blue-500 transition duration-300"
          >
            Home
          </Link>
          {/* Company Dropdown (Desktop) */}
          <div ref={companyRef} className="relative z-20">
            <button
              className="hover:text-blue-500 transition duration-300"
              onClick={handleCompanyClick}
            >
              Company
            </button>
            {dropdownOpen && (
              <div
                ref={menuRef}
                className="absolute left-0 bg-white text-gray-800 shadow-lg mt-5 w-40 z-30"
                style={{ pointerEvents: "auto" }} // Ensure dropdown can capture events
              >
                <Link
                  href="/Company/about-us"
                  className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                  onClick={handleMenuItemClick} // Reset state when clicked
                >
                  About Us
                </Link>
                <Link
                  href="/Company/leadership"
                  className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                  onClick={handleMenuItemClick} // Reset state when clicked
                >
                  Leadership
                </Link>
                <Link
                  href="/Company/our-brands"
                  className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                  onClick={handleMenuItemClick} // Reset state when clicked
                >
                  Our Brands
                </Link>
                <Link
                  href="/Company/careers"
                  className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                  onClick={handleMenuItemClick} // Reset state when clicked
                >
                  Careers
                </Link>
                <Link
                  href="/Company/news-events"
                  className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                  onClick={handleMenuItemClick} // Reset state when clicked
                >
                  News & Events
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/services"
            className="hover:text-blue-500 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/brands"
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
          <button className="text-white" onClick={handleMobileMenuToggle}>
            &#9776;
          </button>
          {mobileMenuOpen && (
            <div className="absolute bg-black text-white p-4 mt-2 right-0 w-48">
              <Link
                href="/"
                className="block px-4 py-2 hover:text-blue-500 transition duration-300"
                onClick={handleMenuItemClick} // Reset state when clicked
              >
                Home
              </Link>
              {/* Company dropdown on mobile */}
              <div ref={companyRef} className="relative z-20">
                <button
                  className="block w-full px-4 py-2 text-left hover:text-blue-500 transition duration-300"
                  onClick={handleCompanyClick}
                >
                  Company
                </button>
                {dropdownOpen && (
                  <div
                    ref={menuRef}
                    className="absolute left-0 bg-black text-white shadow-lg mt-2 w-48 z-30"
                    style={{ pointerEvents: "auto" }} // Ensure dropdown can capture events
                  >
                    <Link
                      href="/Company/about-us"
                      className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                      onClick={handleMenuItemClick} // Reset state when clicked
                    >
                      About Us
                    </Link>
                    <Link
                      href="/Company/leadership"
                      className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                      onClick={handleMenuItemClick} // Reset state when clicked
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/Company/our-brands"
                      className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                      onClick={handleMenuItemClick} // Reset state when clicked
                    >
                      Our Brands
                    </Link>
                    <Link
                      href="/Company/careers"
                      className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                      onClick={handleMenuItemClick} // Reset state when clicked
                    >
                      Careers
                    </Link>
                    <Link
                      href="/Company/news-events"
                      className="block px-4 py-2 bg-sky-500 text-white hover:bg-black"
                      onClick={handleMenuItemClick} // Reset state when clicked
                    >
                      News & Events
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/services"
                className="block px-4 py-2 hover:text-blue-500 transition duration-300"
                onClick={handleMenuItemClick} // Reset state when clicked
              >
                Services
              </Link>
              <Link
                href="/brands"
                className="block px-4 py-2 hover:text-blue-500 transition duration-300"
                onClick={handleMenuItemClick} // Reset state when clicked
              >
                Brands
              </Link>
              <Link
                href="/contact-us"
                className="block px-4 py-2 hover:text-blue-500 transition duration-300"
                onClick={handleMenuItemClick} // Reset state when clicked
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
