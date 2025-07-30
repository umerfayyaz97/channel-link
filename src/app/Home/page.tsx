// import Image from "next/image";
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

// const brandLogos = [
//   { src: "/xbox1.png", alt: "Xbox" },
//   { src: "/htc.png", alt: "HTC" },
//   { src: "/polaroid.png", alt: "Polaroid" },
//   { src: "/ps.png", alt: "PlayStation" },
//   { src: "/linksys.png", alt: "Linksys" },
// ];

// const logos = [
//   "/brand1.png",
//   "/brand2.png",
//   "/brand3.png",
//   "/brand4.png",
//   "/brand5.png",
//   "/brand6.png",
//   "/brand7.png",
//   "/brand8.png",
//   "/brand9.png",
//   "/brand10.png",
//   "/brand11.png",
//   "/brand12.png",
//   "/brand13.png",
//   "/brand14.png",
//   ...Array(5).fill("/brand1.png"), // Example of duplicating for seamless loop
// ];

// export default function HomePage() {
//   return (
//     <div>
//       {/* First Section with Background Image */}
//       <section className="relative h-[500px] w-full flex items-center px-4 md:px-12">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             src="/h1-2.png"
//             alt="Channel Link"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>

//         {/* Left Section: Heading and Paragraph */}
//         <div className="relative z-20 xl:px-68 w-full md:w-1/2 -mt-8  text-white space-y-6 flex flex-col items-start justify-center px-4 md:px-12 ml-0 md:ml-20  md:mt-0">
//           {/* Heading */}
//           <h1 className="text-3xl sm:text-3xl font-display md:text-5xl">
//             Connect your brand with customers that convert.
//           </h1>

//           {/* Paragraph */}
//           <p className="text-base sm:text-sm font-avenir-family md:text-xl sm:w-[90%] md:w-[460px]">
//             Our role goes beyond logistics - we serve as a strategic extension
//             of your business, guiding your products to their most effective
//             market destinations.
//           </p>
//         </div>
//       </section>
//       {/* Second Section with Grey Background */}
//       <section className="bg-[#3b3b3b] py-20 px-4 md:px-12 max-h-[470px]">
//         {/* Heading, Description, and Button Container */}
//         <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
//           {/* Left Section: Heading and Description */}
//           <div className="text-white xl:px-68 space-y-6 lg:-mt-24 md:w-1/2 flex flex-col items-start justify-center px-4 md:px-12 ml-0 md:ml-20">
//             {/* Heading */}
//             <h1 className="text-2xl sm:text-3xl md:text-5xl">What we do</h1>

//             {/* Paragraph */}
//             <p className="text-base sm:text-sm font-avenir-family md:text-xl sm:w-[90%] md:w-[460px]">
//               Channel Link is a trusted global trade solutions partner, helping
//               companies navigate the complexities of modern commerce. We
//               specialize in connecting products with the right channels through
//               a deep understanding of marketplace dynamics, strategic
//               partnerships, and ecommerce operations.
//             </p>

//             {/* Button */}
//             <div className="mt-4 sm:mb-4 sm:mt-0 md:mt-0">
//               <button className="px-4 py-2 font-avenir-family bg-[#0092be]   text-white rounded-full text-lg hover:bg-blue-500 focus:outline-none">
//                 Read More
//               </button>
//             </div>
//           </div>

//           {/* Right Section: Images */}
//           <div className="flex flex-wrap gap-2 md:w-1/2 justify-start">
//             {/* Left Column: Image 1 and Image 2 */}
//             <div className="flex flex-col gap-4 w-full -mr-20 -mt-24 sm:w-[80%] md:w-[45%] mb-4 sm:mb-0 hidden lg:flex">
//               {/* Image 1 */}
//               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-2 sm:mt-0 relative">
//                 <Image
//                   src="/h2.1.png"
//                   alt="Image 1"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>

//               {/* Image 2 */}
//               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-2 sm:mt-0 relative">
//                 <Image
//                   src="/h2.3.png"
//                   alt="Image 2"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             </div>

//             {/* Right Column: Image 3 and Image 4 */}
//             <div className="flex flex-col w-full gap-4 sm:w-[80%] md:w-[45%] sm:mb-0 hidden lg:flex">
//               {/* Image 3 */}
//               <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-10 sm:mt-0 relative">
//                 <Image
//                   src="/h2.2.png"
//                   alt="Image 3"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>

//               {/* Image 4 */}
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
//       {/* section 3 */}
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
//         {/* FIX: Changed the container to CSS Grid for a perfect 4-column layout */}
//         <div className="mt-10 xl:px-58 xl:gap-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cardData.map((card) => (
//             <div
//               key={card.buttonText}
//               // FIX: Removed manual width classes like lg:w-1/4
//               className="w-full xl:w-[300px]  max-w-sm mx-auto h-[400px] bg-none rounded-lg shadow-lg relative transition-transform duration-300 ease-in-out hover:-translate-y-4"
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
//       {/* section 4 */}
//       <section className="py-6 px-4 -mb-14 md:px-12 bg-[#e6e6e6]">
//         {/* Heading and Paragraph */}
//         <div className="text-center space-y-4">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
//             Brand’s we’ve worked with
//           </h1>
//           <p className="text-base xl:ml-160 font-avenir-family lg:w-[500px] lg:ml-80 sm:text-sm md:text-xl text-white">
//             We partner with some of the most influential brands in the world to
//             offer consumers affordable products and services tailored to their
//             needs.
//           </p>
//         </div>

//         {/* Image Row */}
//         <div className="flex justify-center -mb-6 mt-6 sm:gap-6 lg:gap-10">
//           {/* Box 1 */}
//           <div className="relative w-[130px] h-[150px] bg-none overflow-hidden">
//             <Image
//               src="/xbox1.png"
//               alt="Brand 1"
//               width={150}
//               height={150}
//               objectFit="cover"
//             />
//             {/* Blue overlay */}
//             {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}
//           </div>

//           {/* Box 2 */}
//           <div className="relative w-[120px] h-[150px] bg-none overflow-hidden">
//             <Image
//               src="/htc.png"
//               alt="Brand 2"
//               width={150}
//               height={150}
//               objectFit="cover"
//             />
//             {/* Blue overlay */}
//             {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}
//           </div>

//           {/* Box 3 */}
//           <div className="relative w-[150px] h-[150px] bg-none overflow-hidden">
//             <Image
//               src="/polaroid.png"
//               alt="Brand 3"
//               width={150}
//               height={150}
//               objectFit="cover"
//             />
//             {/* Blue overlay */}
//             {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}
//           </div>

//           {/* Box 4 */}
//           <div className="relative w-[150px] h-[150px] bg-none overflow-hidden">
//             <Image
//               src="/ps.png"
//               alt="Brand 4"
//               width={150}
//               height={150}
//               objectFit="cover"
//             />
//             {/* Blue overlay */}
//             {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}
//           </div>

//           {/* Box 5 */}
//           <div className="relative w-[150px] h-[150px] bg-none overflow-hidden">
//             <Image
//               src="/linksys.png"
//               alt="Brand 5"
//               width={150}
//               height={150}
//               objectFit="cover"
//             />
//             {/* Blue overlay */}
//             {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

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

const cardData = [
  {
    imageSrc: "/h3.1.png",
    buttonText: "Internet 3P Retailing",
  },
  {
    imageSrc: "/h3.2.png",
    buttonText: "Bulk Buys",
  },
  {
    imageSrc: "/h3.3.png",
    buttonText: "Private Label",
  },
  {
    imageSrc: "/h3.4.png",
    buttonText: "Marketplace Representation",
  },
];

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

export default function HomePage() {
  // ✅ FIX: Explicitly type the state to be SwiperInstance or null
  const [firstSwiper, setFirstSwiper] = useState<SwiperInstance | null>(null);
  const [thirdSwiper, setThirdSwiper] = useState<SwiperInstance | null>(null);

  return (
    <div>
      {/* First Section with Background Image */}
      <section className="relative h-[500px] w-full flex items-center px-4 md:px-12">
        <div className="absolute inset-0">
          <Image
            src="/h1-2.png"
            alt="Channel Link"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-20 xl:px-68 w-full md:w-1/2 -mt-8 text-white space-y-6 flex flex-col items-start justify-center px-4 md:px-12 ml-0 md:ml-20 md:mt-0">
          <h1 className="text-3xl sm:text-3xl font-display md:text-5xl">
            Connect your brand with customers that convert.
          </h1>
          <p className="text-base sm:text-sm font-avenir-family md:text-xl sm:w-[90%] md:w-[460px]">
            Our role goes beyond logistics - we serve as a strategic extension
            of your business, guiding your products to their most effective
            market destinations.
          </p>
        </div>
      </section>

      {/* Second Section with Grey Background */}
      <section className="bg-[#3b3b3b] py-20 px-4 md:px-12 max-h-[470px]">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-white xl:px-68 space-y-6 lg:-mt-24 md:w-1/2 flex flex-col items-start justify-center px-4 md:px-12 ml-0 md:ml-20">
            <h1 className="text-2xl sm:text-3xl md:text-5xl">What we do</h1>
            <p className="text-base sm:text-sm font-avenir-family md:text-xl sm:w-[90%] md:w-[460px]">
              Channel Link is a trusted global trade solutions partner, helping
              companies navigate the complexities of modern commerce. We
              specialize in connecting products with the right channels through
              a deep understanding of marketplace dynamics, strategic
              partnerships, and ecommerce operations.
            </p>
            <div className="mt-4 sm:mb-4 sm:mt-0 md:mt-0">
              <button className="px-4 py-2 font-avenir-family bg-[#0092be] text-white rounded-full text-lg hover:bg-blue-500 focus:outline-none">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:w-1/2 justify-start">
            <div className="flex-col gap-4 w-full -mr-20 -mt-24 sm:w-[80%] md:w-[45%] mb-4 sm:mb-0 hidden lg:flex">
              <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-2 sm:mt-0 relative">
                <Image
                  src="/h2.1.png"
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-2 sm:mt-0 relative">
                <Image
                  src="/h2.3.png"
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex-col w-full gap-4 sm:w-[80%] md:w-[45%] sm:mb-0 hidden lg:flex">
              <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-10 sm:mt-0 relative">
                <Image
                  src="/h2.2.png"
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-10 sm:mt-0 relative">
                <Image
                  src="/h2.4.png"
                  alt="Image 4"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What we offer */}
      <section className="py-20 px-4 md:px-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0092be]">
            What we offer
          </h2>
          <p className="text-base md:text-xl font-avenir-family text-black max-w-2xl mx-auto">
            Our role goes beyond logistics - we serve as a strategic extension
            of your business, guiding your products to their most effective
            market destinations.
          </p>
        </div>
        <div className="mt-10 xl:px-58 xl:gap-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card) => (
            <div
              key={card.buttonText}
              className="w-full xl:w-[300px] max-w-sm mx-auto h-[400px] bg-none rounded-lg shadow-lg relative transition-transform duration-300 ease-in-out hover:-translate-y-4"
            >
              <Image
                src={card.imageSrc}
                alt={card.buttonText}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] px-4 py-3 bg-black/30 text-white border-2 border-white rounded-lg backdrop-blur-md hover:bg-sky-500/40 focus:outline-none z-10 text-center break-words">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Brands We've Worked With */}
      <section className="py-6 px-4 md:px-12 bg-[#e6e6e6]">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-[#0092be]">
            Brand’s We’ve Worked With
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
