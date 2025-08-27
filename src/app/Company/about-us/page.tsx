"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper core and required modules
import type { Swiper as SwiperInstance } from "swiper"; // ✅ FIX: Import Swiper instance type
import { Autoplay, Controller } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const logos = [
  "/brand1.png",
  "/brand2.png",
  "/brand3.1.png",
  "/brand4.png",
  "/brand5.1.png",
  "/brand6.1.png",
  "/brand7.1.png",
  "/brand8.1.png",
  "/brand9.jpeg",
  "/brand10.1.png",
  "/brand11.1.png",
  "/brand12.1.png",
  "/brand13.png",
  "/brand14.png",
];

export default function AboutUs() {
  const [firstSwiper, setFirstSwiper] = useState<SwiperInstance | null>(null);
  const [thirdSwiper, setThirdSwiper] = useState<SwiperInstance | null>(null);
  return (
    <div>
      {/* First Section: Background Image with Overlay */}
      <div className="relative w-full h-[495px]">
        <div className="absolute inset-0">
          <Image
            src="/a1-new.png"
            alt="About Us Background"
            layout="fill"
            objectFit="cover"
            className="z-0 "
          />
        </div>
        <div className="relative z-20 flex flex-col justify-center items-center w-full h-full text-center text-white space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-left lg:-ml-66">
            <span className="block">One Company,</span>
            <span className="block text-[#0092be]">Endless</span>
            <span className="block">Solutions.</span>
          </h1>

          <p className="text-lg sm:text-sm md:text-xl font-avenir-family max-w-3xl px-4">
            Our role goes beyond logistics - we serve as a strategic extension
            of your business, guiding your products to their most effective
            market destinations.
          </p>
        </div>
      </div>

      {/* Second Section: Two Columns */}
      <section className="relative bg-[#09a8d2] text-white">
        {/* On mobile, optionally show the image behind the text with low opacity */}
        <div className="absolute inset-0 sm:hidden pointer-events-none">
          <Image
            src="/a2-new-nobg.png"
            alt="Background graphic"
            fill
            className="object-cover opacity-20"
            priority={false}
          />
        </div>

        <div className="relative max-w-7xl   mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
            {/* Left column: heading, paragraph, button */}
            <div className="space-y-5 flex flex-col justify-between">
              <h2 className="text-2xl sm:text-3xl md:text-4xl  ">
                How we do it.
              </h2>
              <p className="text-base sm:text-sm md:text-lg font-avenir-family max-w-prose">
                Channel Link is a trusted global trade solutions partner,
                helping companies navigate complexities of modern commerce. We
                specialize in connecting products with the right channels
                through a deep understanding of marketplace dynamics, strategic
                partnerships, and eCommerce operations.
              </p>
              <div className="mt-4">
                <a
                  // href="#read-more"
                  className=" items-center rounded-full bg-[#08647e] hover:bg-blue-700 text-white font-semibold px-6 py-3 shadow-sm transition"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Right column: image (hidden on mobile) */}
            <div className="relative hidden md:-mb-16 sm:block">
              {/* Replace src with your final asset; using fill keeps it responsive */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/a2-new-nobg.png"
                  alt="About our services visual"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: What We Offer and Business Verticals */}
      <div className="py-16 lg:px-20 md:mb-10 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* New Heading and Paragraph */}
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2c90ba]">
              What we offer
            </h2>
            <p className="text-lg sm:text-sm md:text-xl font-avenir-family max-w-3xl mx-auto">
              Our role goes beyond logistics – we serve as a strategic extension
              of your business, guiding your products to their most effective
              market destinations.
            </p>
          </div>

          {/* Business Verticals Boxes */}
          <div className="grid xl:px-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Box 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 flex justify-center items-center mb-4 self-center">
                <img
                  src="/a2.1-new.png"
                  alt="Vertical 1"
                  className="fill-[#0092be]"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0092be] ">
                Internet 3P Retailing
              </h3>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 flex justify-center items-center mb-4 self-center">
                <img
                  src="/a2.2-new.png"
                  alt="Vertical 2"
                  className="fill-[#0092be]"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0092be] ">Bulk Buys</h3>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 flex justify-center items-center mb-4 self-center">
                <img
                  src="/a2.3-new.png"
                  alt="Vertical 3"
                  className="fill-[#0092be]"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0092be] ">
                Private Label
              </h3>
            </div>

            {/* Box 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 flex justify-center items-center mb-4 self-center">
                <img
                  src="/a2.4-new.png"
                  alt="Vertical 4"
                  className="fill-[#0092be]"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0092be] ">
                Marketplace Representation
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section: Marketplace We Specialize In with Light Grey Background */}
      <section className="py-6 px-4 md:px-12 bg-[#e6e6e6]">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mt-12  text-[#0092be]">
            Brand’s we’ve work with
          </h1>
          <p className="text-base xl:ml-160 font-avenir-family lg:w-[500px] lg:ml-80 sm:text-sm md:text-xl text-black">
            We partner with some of the most influential brands in the world to
            offer consumers affordable products and services tailored to their
            needs.
          </p>
        </div>

        {/* Carousel 1: Controller */}
        <Swiper
          modules={[Autoplay, Controller]}
          // ✅ FIX: Wrap the setter in a function to match the expected type
          onSwiper={(swiper) => setFirstSwiper(swiper)}
          controller={{ control: thirdSwiper }}
          spaceBetween={40}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="swiper-container mt-6"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-32">
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  width={150}
                  height={150}
                  objectFit="contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carousel 2: Moves Independently */}
        <Swiper
          dir="rtl"
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="swiper-container mt-6"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-32">
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  width={150}
                  height={150}
                  objectFit="contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carousel 3: Controlled by the first carousel */}
        <Swiper
          modules={[Controller]}
          // ✅ FIX: Wrap the setter in a function to match the expected type
          onSwiper={(swiper) => setThirdSwiper(swiper)}
          controller={{ control: firstSwiper }}
          spaceBetween={40}
          slidesPerView={6}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="swiper-container mt-6 mb-14"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-32">
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  width={150}
                  height={150}
                  objectFit="contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
