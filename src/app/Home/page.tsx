// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper core and required modules
// import type { Swiper as SwiperInstance } from "swiper"; // ✅ FIX: Import Swiper instance type
// import { Autoplay, Controller } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/autoplay";

// import Link from "next/link";

// const cardData = [
//   {
//     imageSrc: "/h3.1.png",
//     buttonText: "Internet 3P Retailing",
//   },
//   {
//     imageSrc: "/h3.2.png",
//     buttonText: "Bulk Buys",
//   },
//   {
//     imageSrc: "/h3.3.png",
//     buttonText: "Private Label",
//   },
//   {
//     imageSrc: "/h3.4.png",
//     buttonText: "Marketplace Representation",
//   },
// ];

// const logos = [
//   "/brand1.png",
//   "/brand2.png",
//   "/brand3.1.png",
//   "/brand4.png",
//   "/brand5.1.png",
//   "/brand6.1.png",
//   "/brand7.1.png",
//   "/brand8.1.png",
//   "/brand9.jpeg",
//   "/brand10.1.png",
//   "/brand11.1.png",
//   "/brand12.1.png",
//   "/brand13.png",
//   "/brand14.png",
// ];

// export default function HomePage() {
//   // ✅ FIX: Explicitly type the state to be SwiperInstance or null
//   const [firstSwiper, setFirstSwiper] = useState<SwiperInstance | null>(null);
//   const [thirdSwiper, setThirdSwiper] = useState<SwiperInstance | null>(null);

//   return (
//     <div>
//       {/* First Section with Background Image */}
//       <section className="relative h-[500px] w-full flex items-center px-4 md:px-12">
//         <div className="absolute inset-0">
//           <Image
//             src="/h1-2.png"
//             alt="Channel Link"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         <div className="relative z-20 xl:px-68 w-full md:w-1/2 -mt-8 text-white space-y-6 flex flex-col items-start justify-center px-4 md:px-12 ml-0 md:ml-20 md:mt-0">
//           <h1 className="text-3xl sm:text-3xl font-display md:text-5xl">
//             Connect your brand with customers that convert.
//           </h1>
//           <p className="text-base sm:text-sm font-avenir-family md:text-xl sm:w-[90%] md:w-[460px]">
//             Our role goes beyond logistics - we serve as a strategic extension
//             of your business, guiding your products to their most effective
//             market destinations.
//           </p>
//         </div>
//       </section>

//       {/* Second Section with Grey Background */}
//       <section className="bg-[#3b3b3b] py-20 px-4 md:px-12 max-h-[470px]">
//         <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
//           <div className="text-white xl:px-68 space-y-6 lg:-mt-24 md:w-1/2 flex flex-col items-start justify-center px-4 md:px-12 ml-0 md:ml-20">
//             <h1 className="text-2xl sm:text-3xl md:text-5xl">What we do</h1>
//             <p className="text-base sm:text-sm font-avenir-family md:text-xl sm:w-[90%] md:w-[460px]">
//               Channel Link is a trusted global trade solutions partner, helping
//               companies navigate the complexities of modern commerce. We
//               specialize in connecting products with the right channels through
//               a deep understanding of marketplace dynamics, strategic
//               partnerships, and ecommerce operations.
//             </p>
//             <div className="mt-4 sm:mb-4 sm:mt-0 md:mt-0">
//               <Link
//                 href="/Company/about-us"
//                 className="px-4 py-2 font-avenir-family bg-[#0092be] text-white rounded-full text-lg hover:bg-blue-500 focus:outline-none"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>
//           <div className="flex flex-wrap gap-2 md:w-1/2 justify-start">
//             <div className="flex-col gap-4 w-full -mr-20 -mt-24 sm:w-[80%] md:w-[45%] mb-4 sm:mb-0 hidden lg:flex">
//               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-2 sm:mt-0 relative">
//                 <Image
//                   src="/h2.1.png"
//                   alt="Image 1"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-2 sm:mt-0 relative">
//                 <Image
//                   src="/h2.3.png"
//                   alt="Image 2"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             </div>
//             <div className="flex-col w-full gap-4 sm:w-[80%] md:w-[45%] sm:mb-0 hidden lg:flex">
//               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-10 sm:mt-0 relative">
//                 <Image
//                   src="/h2.2.png"
//                   alt="Image 3"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-10 sm:mt-0 relative">
//                 <Image
//                   src="/h2.4.png"
//                   alt="Image 4"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 3: What we offer */}
//       <section className="py-20 px-4 md:px-12">
//         <div className="text-center space-y-4">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0092be]">
//             What we offer
//           </h2>
//           <p className="text-base md:text-xl font-avenir-family text-black max-w-2xl mx-auto">
//             Our role goes beyond logistics - we serve as a strategic extension
//             of your business, guiding your products to their most effective
//             market destinations.
//           </p>
//         </div>
//         <div className="mt-10 xl:px-58 xl:gap-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cardData.map((card) => (
//             <div
//               key={card.buttonText}
//               className="w-full xl:w-[300px] max-w-sm mx-auto h-[400px] bg-none rounded-lg shadow-lg relative transition-transform duration-300 ease-in-out hover:-translate-y-4"
//             >
//               <Image
//                 src={card.imageSrc}
//                 alt={card.buttonText}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//               <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] px-4 py-3 bg-black/30 text-white border-2 border-white rounded-lg backdrop-blur-md hover:bg-sky-500/40 focus:outline-none z-10 text-center break-words">
//                 {card.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Section 4: Brands We've Worked With */}
//       <section className="py-6 px-4 md:px-12 bg-[#e6e6e6]">
//         <div className="text-center space-y-4">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl  text-[#0092be]">
//             Your Brand is Our Brand
//           </h1>
//           <p className="text-base xl:ml-160 font-avenir-family lg:w-[500px] lg:ml-80 sm:text-sm md:text-xl text-black">
//             We partner with some of the most influential brands in the world to
//             offer consumers affordable products and services tailored to their
//             needs.
//           </p>
//         </div>

//         {/* Carousel 1: Controller */}
//         <Swiper
//           modules={[Autoplay, Controller]}
//           // ✅ FIX: Wrap the setter in a function to match the expected type
//           onSwiper={(swiper) => setFirstSwiper(swiper)}
//           controller={{ control: thirdSwiper }}
//           spaceBetween={40}
//           slidesPerView={6}
//           loop={true}
//           autoplay={{
//             delay: 1500,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             320: { slidesPerView: 2 },
//             768: { slidesPerView: 4 },
//             1024: { slidesPerView: 6 },
//           }}
//           className="swiper-container mt-6"
//         >
//           {logos.map((logo, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex justify-center items-center h-32">
//                 <Image
//                   src={logo}
//                   alt={`Brand logo ${index + 1}`}
//                   width={150}
//                   height={150}
//                   objectFit="contain"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Carousel 2: Moves Independently */}
//         <Swiper
//           dir="rtl"
//           modules={[Autoplay]}
//           spaceBetween={40}
//           slidesPerView={6}
//           loop={true}
//           autoplay={{
//             delay: 1500,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             320: { slidesPerView: 2 },
//             768: { slidesPerView: 4 },
//             1024: { slidesPerView: 6 },
//           }}
//           className="swiper-container mt-6"
//         >
//           {logos.map((logo, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex justify-center items-center h-32">
//                 <Image
//                   src={logo}
//                   alt={`Brand logo ${index + 1}`}
//                   width={150}
//                   height={150}
//                   objectFit="contain"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Carousel 3: Controlled by the first carousel */}
//         <Swiper
//           modules={[Controller]}
//           // ✅ FIX: Wrap the setter in a function to match the expected type
//           onSwiper={(swiper) => setThirdSwiper(swiper)}
//           controller={{ control: firstSwiper }}
//           spaceBetween={40}
//           slidesPerView={6}
//           loop={true}
//           breakpoints={{
//             320: { slidesPerView: 2 },
//             768: { slidesPerView: 4 },
//             1024: { slidesPerView: 6 },
//           }}
//           className="swiper-container mt-6 mb-14"
//         >
//           {logos.map((logo, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex justify-center items-center h-32">
//                 <Image
//                   src={logo}
//                   alt={`Brand logo ${index + 1}`}
//                   width={150}
//                   height={150}
//                   objectFit="contain"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </div>
//   );
// }

// // "use client";
// // import Image from "next/image";
// // import React, { useState } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper core and required modules
// // import type { Swiper as SwiperInstance } from "swiper";
// // import { Autoplay, Controller } from "swiper/modules";

// // // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/autoplay";

// // const cardData = [
// //   {
// //     imageSrc: "/h3.1.png",
// //     buttonText: "Internet 3P Retailing",
// //   },
// //   {
// //     imageSrc: "/h3.2.png",
// //     buttonText: "Bulk Buys",
// //   },
// //   {
// //     imageSrc: "/h3.3.png",
// //     buttonText: "Private Label",
// //   },
// //   {
// //     imageSrc: "/h3.4.png",
// //     buttonText: "Marketplace Representation",
// //   },
// // ];

// // // Array of SVG file paths from the public folder
// // // Please ensure these paths match your actual file names.
// // const logos = [
// //   "/brand1.1.svg",
// //   "/brand2.2.svg",
// //   "/brand3.1.svg",
// //   "/brand4.1.svg",
// //   "/brand5.1.svg",
// //   "/brand6.1.svg",
// //   "/brand7.1.svg",
// //   "/brand8.1.svg",
// //   "/brand9.1.svg",
// //   "/brand10.1.svg",
// //   "/brand11.1.svg",
// //   "/brand12.1.svg",
// //   "/brand13.1.svg",
// //   "/brand14.1.svg",
// // ];

// // export default function HomePage() {
// //   const [firstSwiper, setFirstSwiper] = useState<SwiperInstance | null>(null);
// //   const [thirdSwiper, setThirdSwiper] = useState<SwiperInstance | null>(null);

// //   return (
// //     <div>
// //       {/* First Section with Background Image */}
// //       <section className="relative h-[500px] w-full flex items-center px-4 md:px-12">
// //         <div className="absolute inset-0">
// //           <Image
// //             src="/h1-2.png"
// //             alt="Channel Link"
// //             layout="fill"
// //             objectFit="cover"
// //             priority
// //           />
// //         </div>
// //         <div className="relative z-20 xl:px-68 w-full md:w-1/2 -mt-8 text-white space-y-6 flex flex-col items-start justify-center px-4 md:px-12 ml-0 md:ml-20 md:mt-0">
// //           <h1 className="text-3xl sm:text-3xl font-display md:text-5xl">
// //             Connect your brand with customers that convert.
// //           </h1>
// //           <p className="text-base sm:text-sm font-avenir-family md:text-xl sm:w-[90%] md:w-[460px]">
// //             Our role goes beyond logistics - we serve as a strategic extension
// //             of your business, guiding your products to their most effective
// //             market destinations.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Second Section with Grey Background */}
// //       <section className="bg-[#3b3b3b] py-20 px-4 md:px-12 max-h-[470px]">
// //         <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
// //           <div className="text-white xl:px-68 space-y-6 lg:-mt-24 md:w-1/2 flex flex-col items-start justify-center px-4 md:px-12 ml-0 md:ml-20">
// //             <h1 className="text-2xl sm:text-3xl md:text-5xl">What we do</h1>
// //             <p className="text-base sm:text-sm font-avenir-family md:text-xl sm:w-[90%] md:w-[460px]">
// //               Channel Link is a trusted global trade solutions partner, helping
// //               companies navigate the complexities of modern commerce. We
// //               specialize in connecting products with the right channels through
// //               a deep understanding of marketplace dynamics, strategic
// //               partnerships, and ecommerce operations.
// //             </p>
// //             <div className="mt-4 sm:mb-4 sm:mt-0 md:mt-0">
// //               <button className="px-4 py-2 font-avenir-family bg-[#0092be] text-white rounded-full text-lg hover:bg-blue-500 focus:outline-none">
// //                 Read More
// //               </button>
// //             </div>
// //           </div>
// //           <div className="flex flex-wrap gap-2 md:w-1/2 justify-start">
// //             <div className="flex-col gap-4 w-full -mr-20 -mt-24 sm:w-[80%] md:w-[45%] mb-4 sm:mb-0 hidden lg:flex">
// //               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-2 sm:mt-0 relative">
// //                 <Image
// //                   src="/h2.1.png"
// //                   alt="Image 1"
// //                   layout="fill"
// //                   objectFit="cover"
// //                 />
// //               </div>
// //               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-2 sm:mt-0 relative">
// //                 <Image
// //                   src="/h2.3.png"
// //                   alt="Image 2"
// //                   layout="fill"
// //                   objectFit="cover"
// //                 />
// //               </div>
// //             </div>
// //             <div className="flex-col w-full gap-4 sm:w-[80%] md:w-[45%] sm:mb-0 hidden lg:flex">
// //               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-10 sm:mt-0 relative">
// //                 <Image
// //                   src="/h2.2.png"
// //                   alt="Image 3"
// //                   layout="fill"
// //                   objectFit="cover"
// //                 />
// //               </div>
// //               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-10 sm:mt-0 relative">
// //                 <Image
// //                   src="/h2.4.png"
// //                   alt="Image 4"
// //                   layout="fill"
// //                   objectFit="cover"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Section 3: What we offer */}
// //       <section className="py-20 px-4 md:px-12">
// //         <div className="text-center space-y-4">
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0092be]">
// //             What we offer
// //           </h2>
// //           <p className="text-base md:text-xl font-avenir-family text-black max-w-2xl mx-auto">
// //             Our role goes beyond logistics - we serve as a strategic extension
// //             of your business, guiding your products to their most effective
// //             market destinations.
// //           </p>
// //         </div>
// //         <div className="mt-10 xl:px-58 xl:gap-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {cardData.map((card) => (
// //             <div
// //               key={card.buttonText}
// //               className="w-full xl:w-[300px] max-w-sm mx-auto h-[400px] bg-none rounded-lg shadow-lg relative transition-transform duration-300 ease-in-out hover:-translate-y-4"
// //             >
// //               <Image
// //                 src={card.imageSrc}
// //                 alt={card.buttonText}
// //                 layout="fill"
// //                 objectFit="cover"
// //                 className="rounded-lg"
// //               />
// //               <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] px-4 py-3 bg-black/30 text-white border-2 border-white rounded-lg backdrop-blur-md hover:bg-sky-500/40 focus:outline-none z-10 text-center break-words">
// //                 {card.buttonText}
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Section 4: Brands We've Worked With */}
// //       <section className="py-6 px-4 md:px-12 bg-[#e6e6e6]">
// //         <div className="text-center space-y-4">
// //           <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#0092be]">
// //             Brand’s We’ve Worked With
// //           </h1>
// //           <p className="text-base xl:ml-160 font-avenir-family lg:w-[500px] lg:ml-80 sm:text-sm md:text-xl text-black">
// //             We partner with some of the most influential brands in the world to
// //             offer consumers affordable products and services tailored to their
// //             needs.
// //           </p>
// //         </div>

// //         {/* Carousel 1: Controller */}
// //         <Swiper
// //           modules={[Autoplay, Controller]}
// //           onSwiper={setFirstSwiper}
// //           controller={{ control: thirdSwiper }}
// //           spaceBetween={40}
// //           slidesPerView={6}
// //           loop={true}
// //           autoplay={{
// //             delay: 2500,
// //             disableOnInteraction: false,
// //           }}
// //           breakpoints={{
// //             320: { slidesPerView: 2, spaceBetween: 20 },
// //             768: { slidesPerView: 4, spaceBetween: 30 },
// //             1024: { slidesPerView: 6, spaceBetween: 40 },
// //           }}
// //           className="swiper-container mt-6"
// //         >
// //           {logos.map((logoSrc, index) => (
// //             <SwiperSlide key={`first-${index}`}>
// //               <div className="flex justify-center items-center h-32 grayscale hover:grayscale-0 transition-all duration-300">
// //                 <Image
// //                   src={logoSrc}
// //                   alt={`Brand logo ${index + 1}`}
// //                   width={100}
// //                   height={64}
// //                   objectFit="contain"
// //                 />
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //         {/* Carousel 2: Moves Independently */}
// //         <Swiper
// //           dir="rtl"
// //           modules={[Autoplay]}
// //           spaceBetween={40}
// //           slidesPerView={6}
// //           loop={true}
// //           autoplay={{
// //             delay: 2500,
// //             disableOnInteraction: false,
// //           }}
// //           breakpoints={{
// //             320: { slidesPerView: 2, spaceBetween: 20 },
// //             768: { slidesPerView: 4, spaceBetween: 30 },
// //             1024: { slidesPerView: 6, spaceBetween: 40 },
// //           }}
// //           className="swiper-container mt-6"
// //         >
// //           {logos.map((logoSrc, index) => (
// //             <SwiperSlide key={`second-${index}`}>
// //               <div className="flex justify-center items-center h-32 grayscale hover:grayscale-0 transition-all duration-300">
// //                 <Image
// //                   src={logoSrc}
// //                   alt={`Brand logo ${index + 1}`}
// //                   width={100}
// //                   height={64}
// //                   objectFit="contain"
// //                 />
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //         {/* Carousel 3: Controlled by the first carousel */}
// //         <Swiper
// //           modules={[Controller]}
// //           onSwiper={setThirdSwiper}
// //           controller={{ control: firstSwiper }}
// //           spaceBetween={40}
// //           slidesPerView={6}
// //           loop={true}
// //           breakpoints={{
// //             320: { slidesPerView: 2, spaceBetween: 20 },
// //             768: { slidesPerView: 4, spaceBetween: 30 },
// //             1024: { slidesPerView: 6, spaceBetween: 40 },
// //           }}
// //           className="swiper-container mt-6 mb-14"
// //         >
// //           {logos.map((logoSrc, index) => (
// //             <SwiperSlide key={`third-${index}`}>
// //               <div className="flex justify-center items-center h-32 grayscale hover:grayscale-0 transition-all duration-300">
// //                 <Image
// //                   src={logoSrc}
// //                   alt={`Brand logo ${index + 1}`}
// //                   width={100}
// //                   height={64}
// //                   objectFit="contain"
// //                 />
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </section>
// //     </div>
// //   );
// // }

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
  "/brand (1).png",
  "/brand (2).png",
  "/brand (3).png",
  "/brand (4).png",
  "/brand (5).png",
  "/brand (6).png",
  "/brand (7).png",
  "/brand (8).png",
  "/brand (9).png",
  "/brand (10).png",
  "/brand (11).png",
  "/brand (12).png",
  "/brand (13).png",
  "/brand (14).png",
  "/brand (15).png",
  "/brand (16).png",
];

export default function AboutUs() {
  const [firstSwiper, setFirstSwiper] = useState<SwiperInstance | null>(null);
  const [thirdSwiper, setThirdSwiper] = useState<SwiperInstance | null>(null);

  const controlledLogos = logos.slice(0, 8); // First 8 logos
  const independentLogos = logos.slice(8); // Remaining 8 logos

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
            <span className="block text-[#0092be]">Infinite</span>
            <span className="block">Solutions.</span>
          </h1>

          <p className="text-lg sm:text-sm md:text-xl font-avenir-family max-w-3xl px-4">
            Our role goes beyond e-commerce, we serve as a strategic extension
            of your business, guiding your products to their most
            effective destinations.
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
                How We Do It.
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
                  href="/Company/about-us"
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
              What We Offer
            </h2>
            {/* <p className="text-lg sm:text-sm md:text-xl font-avenir-family max-w-3xl mx-auto">
              Our role goes beyond logistics – we serve as a strategic extension
              of your business, guiding your products to their most effective
              market destinations.
            </p> */}
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

      {/* Fourth Section: Brand we work with In with Light Grey Background */}
      <section className="py-6 px-4 md:px-12 bg-[#e6e6e6]">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mt-12  text-[#0092be]">
            Brand’s We Work With
          </h1>
          <p className="text-base xl:ml-160 font-avenir-family lg:w-[500px] lg:ml-80 sm:text-sm md:text-xl text-black">
            We partner with some of the most influential brands in the world to
            offer consumers affordable products and services tailored to their
            needs.
          </p>
        </div>

        {/* Carousel 1: Controller - Uses the first set of logos */}
        <Swiper
          modules={[Autoplay, Controller]}
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
          {controlledLogos.map((logo, index) => (
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

        {/* Carousel 2: Moves Independently - Uses the second set of logos */}
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
          {independentLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-32">
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 9}`}
                  width={150}
                  height={150}
                  objectFit="contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carousel 3: Controlled by the first carousel - Must use the same set as Carousel 1 */}
        <Swiper
          modules={[Controller]}
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
          {controlledLogos.map((logo, index) => (
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
