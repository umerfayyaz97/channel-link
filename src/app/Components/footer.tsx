// export default Footer;

"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscribe functionality here
    console.log("Subscribed with email:", email);
  };

  return (
    <footer className="bg-white lg:px-35 xl:px-50 text-gray-700 py-8 px-4 md:px-12">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* First Column: Company Name & Description */}
        <div className="w-full md:w-auto text-center md:text-left md:max-w-md">
          <h2 className="text-3xl font-display font-avenir-family font-black text-[#0092be] italic">
            CHANNEL LINK
          </h2>
          <p className="mt-2 text-sm font-avenir-family text-gray-500">
            We partner with some of the most influential brands in the world to
            offer consumers affordable products and services tailored to their
            needs.
          </p>
        </div>

        {/* Third Column: Email Subscription */}
        <div className="mt-8 md:mt-0 w-full md:w-auto text-center md:text-right">
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row justify-center md:justify-end items-center space-y-4 md:space-y-0"
          >
            <input
              type="email"
              className="p-2 border font-avenir-family border-gray-300 rounded-full w-64 md:w-80"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#0092be] font-avenir-family text-white px-6 py-2 rounded-full  hover:bg-blue-700 transition duration-300 -ml-10 lg:ml-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section: Social Media & Navigation Links */}
      <div className="mt-8 md:mt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Social Media Icons */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <a
            href="#"
            className="bg-[#0092be] text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="bg-[#0092be] text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="bg-[#0092be] text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="#"
            className="bg-[#0092be] text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaYoutube size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4 md:space-x-12 md:flex md:space-y-0">
          <ul className="space-y-4 md:space-y-0 md:flex md:space-x-8 text-sm md:text-base">
            <li>
              <Link
                href="/"
                className="text-gray-500 font-avenir-family hover:text-[#0092be]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Company/about-us"
                className="text-gray-500 font-avenir-family hover:text-[#0092be]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/Services"
                className="text-gray-500 font-avenir-family hover:text-[#0092be]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/Brands"
                className="text-gray-500 font-avenir-family hover:text-[#0092be]"
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                href="/Contact-us"
                className="text-gray-500 font-avenir-family hover:text-[#0092be]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
