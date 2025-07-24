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
    <footer className="bg-white text-gray-700 py-8 px-4 md:px-12">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* First Column: Company Name & Description */}
        <div className="w-full md:w-1/3 text-center mr-14 ml-8 md:text-left">
          <h2 className="text-3xl font-bold text-blue-500">CHANNEL LINK</h2>
          <p className="mt-2 text-sm text-gray-500">
            We partner with some of the most influential brands in the world to
            offer consumers affordable products and services tailored to their
            needs.
          </p>
        </div>

        {/* Second Column: Sample Description */}
        <div className="mt-12 mr-4 md:mt-0 w-full md:w-1/3 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>

        {/* Third Column: Email Subscription */}
        <div className="mt-8 md:mt-0 w-full md:w-1/3 text-center md:text-right">
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row justify-center md:justify-end items-center space-y-4 md:space-y-0"
          >
            <input
              type="email"
              className="p-2 border border-gray-300 rounded-full w-64 md:w-80"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section: Social Media & Navigation Links */}
      <div className="mt-8 md:mt-4 md:ml-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Social Media Icons */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <a
            href="#"
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaYoutube size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4 md:space-x-12 md:flex md:space-y-0">
          <ul className="space-y-4 md:space-y-0 md:flex md:space-x-28 text-sm md:text-base">
            {/* Align the first link with the second column */}
            <li className="md:ml-8">
              <Link href="/" className="text-gray-500 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-gray-500 hover:text-blue-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-500 hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/brands"
                className="text-gray-500 hover:text-blue-500"
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-gray-500 hover:text-blue-500"
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
