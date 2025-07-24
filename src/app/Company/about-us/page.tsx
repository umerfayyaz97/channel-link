// import Image from "next/image";

// export default function AboutUs() {
//   return (
//     <div>
//       {/* First Section: Background Image with Overlay */}
//       <div className="relative w-full h-[314px]">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             src="/a1o.png" // Ensure this path is correct and image is in the public folder
//             alt="About Us Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//           />
//         </div>

//         {/* Color Overlay */}
//         <div className="absolute inset-0 bg-[#174153] opacity-70 z-10"></div>

//         {/* Content */}
//         <div className="relative z-20 flex flex-col justify-center items-center w-full h-full text-center text-white space-y-6">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl">
//             We are a prime eCommerce retailer
//           </h1>
//           <p className="text-lg sm:text-sm md:text-xl max-w-3xl px-4">
//             Our role goes beyond logistics - we serve as a strategic extension
//             of your business, guiding your products to their most effective
//             market destinations.
//           </p>
//         </div>
//       </div>

//       {/* Second Section: Two Paragraphs on White Background */}
//       <div className="py-16 px-4 bg-white text-black">
//         <div className="text-center space-y-6">
//           <p className="text-lg sm:text-sm md:text-xl max-w-3xl mx-auto">
//             At CHANNEL LINK, we are committed to building lasting partnerships
//             with our clients. Our team works tirelessly to ensure the success of
//             our business relationships by providing tailored solutions that
//             address each client’s unique needs.
//           </p>
//           <p className="text-lg sm:text-sm md:text-xl max-w-3xl mx-auto">
//             With our extensive experience and expertise, we ensure that your
//             products are distributed to the most effective channels, allowing
//             you to reach your target customers seamlessly and efficiently.
//           </p>
//         </div>
//       </div>

//       {/* Third Section: Business Verticals */}
//       <div className="py-16 px-4 bg-white text-black">
//         <div className="text-center space-y-6">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-500">
//             Business Verticals
//           </h2>
//         </div>

//         {/* Boxes */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//           {/* Box 1 */}
//           <div className="bg-sky-500 text-black rounded-lg p-6 flex flex-col items-center">
//             <div className="w-16 h-16  flex justify-center items-center mb-4">
//               {/* SVG image (replace with actual path) */}
//               <img src="/a2.1.svg" alt="Vertical 1" />
//             </div>
//             <p className="text-center mb-4">
//               This is a description of the vertical, explaining the services or
//               products offered in this category.
//             </p>
//             <h3 className="text-lg font-bold">Internet 3P Retailing</h3>
//           </div>

//           {/* Box 2 */}
//           <div className="bg-sky-500 text-black rounded-lg p-6 flex flex-col items-center">
//             <div className="w-16 h-16  flex justify-center items-center mb-4">
//               <img src="/a2.2.svg" alt="Vertical 2" />
//             </div>
//             <p className="text-center mb-4">
//               This is a description of the vertical, explaining the services or
//               products offered in this category.
//             </p>
//             <h3 className="text-lg font-bold">Bulk Buys</h3>
//           </div>

//           {/* Box 3 */}
//           <div className="bg-sky-500 text-black rounded-lg p-6 flex flex-col items-center">
//             <div className="w-16 h-16  flex justify-center items-center mb-4">
//               <img src="/a2.3.svg" alt="Vertical 3" />
//             </div>
//             <p className="text-center mb-4">
//               This is a description of the vertical, explaining the services or
//               products offered in this category.
//             </p>
//             <h3 className="text-lg font-bold">Private Label</h3>
//           </div>

//           {/* Box 4 */}
//           <div className="bg-sky-500 text-black rounded-lg p-6 flex flex-col items-center">
//             <div className="w-16 h-16  flex justify-center items-center mb-4">
//               <img src="/a2.4.svg" alt="Vertical 4" />
//             </div>
//             <p className="text-center mb-4">
//               This is a description of the vertical, explaining the services or
//               products offered in this category.
//             </p>
//             <h3 className="text-lg font-bold">Marketplace Representation</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// app/about/page.tsx
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      {/* First Section: Background Image with Overlay */}
      <div className="relative w-full h-[314px]">
        <div className="absolute inset-0">
          <Image
            src="/a1o.png"
            alt="About Us Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        <div className="absolute inset-0 bg-[#174153] opacity-70 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center items-center w-full h-full text-center text-white space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">
            We are a prime eCommerce retailer
          </h1>
          <p className="text-lg sm:text-sm md:text-xl max-w-3xl px-4">
            Our role goes beyond logistics - we serve as a strategic extension
            of your business, guiding your products to their most effective
            market destinations.
          </p>
        </div>
      </div>

      {/* Second Section: Two Paragraphs on White Background */}
      <div className="py-16 px-4 bg-white text-black">
        <div className="text-center space-y-6">
          <p className="text-lg sm:text-sm md:text-xl max-w-3xl mx-auto">
            At CHANNEL LINK, we are committed to building lasting partnerships
            with our clients. Our team works tirelessly to ensure the success of
            our business relationships by providing tailored solutions that
            address each client’s unique needs.
          </p>
          <p className="text-lg sm:text-sm md:text-xl max-w-3xl mx-auto">
            With our extensive experience and expertise, we ensure that your
            products are distributed to the most effective channels, allowing
            you to reach your target customers seamlessly and efficiently.
          </p>
        </div>
      </div>

      {/* Third Section: Business Verticals */}
      <div className="py-16 px-4 bg-white text-black">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-500">
            Business Verticals
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Box 1 */}
          <div className="bg-sky-500 text-black rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center mb-4">
              <img src="/a2.1.svg" alt="Vertical 1" />
            </div>
            <p className="text-center mb-4">
              This is a description of the vertical, explaining the services or
              products offered in this category.
            </p>
            <h3 className="text-lg font-bold">Internet 3P Retailing</h3>
          </div>

          {/* Box 2 */}
          <div className="bg-sky-500 text-black rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center mb-4">
              <img src="/a2.2.svg" alt="Vertical 2" />
            </div>
            <p className="text-center mb-4">
              This is a description of the vertical, explaining the services or
              products offered in this category.
            </p>
            <h3 className="text-lg font-bold">Bulk Buys</h3>
          </div>

          {/* Box 3 */}
          <div className="bg-sky-500 text-black rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center mb-4">
              <img src="/a2.3.svg" alt="Vertical 3" />
            </div>
            <p className="text-center mb-4">
              This is a description of the vertical, explaining the services or
              products offered in this category.
            </p>
            <h3 className="text-lg font-bold">Private Label</h3>
          </div>

          {/* Box 4 */}
          <div className="bg-sky-500 text-black rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center mb-4">
              <img src="/a2.4.svg" alt="Vertical 4" />
            </div>
            <p className="text-center mb-4">
              This is a description of the vertical, explaining the services or
              products offered in this category.
            </p>
            <h3 className="text-base   font-bold">
              Marketplace Representation
            </h3>
          </div>
        </div>
      </div>

      {/* Fourth Section: Marketplace We Specialize In with Light Grey Background */}
      <div className="py-16 px-4 bg-gray-100 text-black">
        <div className="text-center space-y-6">
          <h2 className="text-2xlxl sm:text-4xl md:text-5xl text-blue-500">
            Marketplace We Specialize In
          </h2>
        </div>

        {/* Logos Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Logo 1 */}
          <div className=" flex justify-center items-center p-4">
            <img
              src="/a3.1.png" // Update to PNG file path
              alt="Company 1 Logo"
              className="w-32 h-auto"
            />
          </div>

          {/* Logo 2 */}
          <div className=" flex justify-center items-center p-4">
            <img
              src="/a3.2.png" // Update to PNG file path
              alt="Company 2 Logo"
              className="w-32 h-auto"
            />
          </div>

          {/* Logo 3 */}
          <div className=" flex justify-center items-center p-4">
            <img
              src="/a3.3.png" // Update to PNG file path
              alt="Company 3 Logo"
              className="w-32 h-auto"
            />
          </div>

          {/* Logo 4 */}
          <div className=" flex justify-center items-center p-4">
            <img
              src="/a3.4.png" // Update to PNG file path
              alt="Company 4 Logo"
              className="w-32 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
