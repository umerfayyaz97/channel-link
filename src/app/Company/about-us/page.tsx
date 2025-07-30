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
            We are a Prime,
            <br className="hidden lg:block" />
            eCommerce retailer
          </h1>
          <p className="text-lg sm:text-sm md:text-xl font-avenir-family max-w-3xl px-4">
            Our role goes beyond logistics - we serve as a strategic extension
            of your business, guiding your products to their most effective
            market destinations.
          </p>
        </div>
      </div>

      {/* Second Section: Two Paragraphs on White Background */}
      <div className="py-16 px-4 bg-white text-black">
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <p className="text-lg sm:text-sm font-avenir-family md:text-xl">
            We are more than just an e-commerce company. We are a multi-service
            retail partner dedicated to helping brands and companies succeed
            across a dynamic digital marketplace. Through our specialized
            business verticals—including Internet 3P Retailing, Bulk Buys, Our
            In-House Brands, and Marketplace Representation—we provide our
            partners with tailored strategies that maximize reach, drive
            sell-through, and strengthen long-term brand value.
          </p>
          <p className="text-lg hidden sm:text-sm font-avenir-family md:text-xl">
            With our extensive experience and expertise, we ensure that your
            products are distributed to the most effective channels, allowing
            you to reach your target customers seamlessly and efficiently.
          </p>
        </div>
      </div>

      {/* Third Section: Business Verticals */}
      <div className="py-16 lg:px-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2c90ba]">
              Business Verticals
            </h2>
          </div>
          <div className="grid xl:px-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Box 1 */}
            <div className="bg-[#a6cad9] text-black rounded-lg p-6 flex flex-col items-start text-left">
              <div className="w-20 h-20 flex justify-center items-center mb-4 self-center">
                <img src="/a2.1.svg" alt="Vertical 1" />
              </div>
              <p className="mb-4 text-sm font-bold">
                We retail for our authorized vendors products through our
                various e-commerce properties
              </p>
              <h3 className="text-lg mt-auto font-black">
                Internet 3P Retailing
              </h3>
            </div>

            {/* Box 2 */}
            <div className="bg-[#a6cad9] text-black rounded-lg p-6 flex flex-col items-start text-left">
              <div className="w-20 h-20 flex justify-center items-center mb-4 self-center">
                <img src="/a2.2.svg" alt="Vertical 2" />
              </div>
              <p className="mb-4 font-bold text-sm">
                We work with wholesalers, liquidators, refurbishers and closeout
                vendors looking to sell their products in bulk
              </p>
              <h3 className="text-lg mt-auto font-black">Bulk Buys</h3>
            </div>

            {/* Box 3 */}
            <div className="bg-[#a6cad9] text-black rounded-lg p-6 flex flex-col items-start text-left">
              <div className="w-20 h-20 flex justify-center items-center mb-4 self-center">
                <img src="/a2.3.svg" alt="Vertical 3" />
              </div>
              <p className="mb-4 text-sm font-bold">
                We produce and carry various in-house brands. We work closely
                with our manufacturer partners to develop products to cater to
                our customer market and collaborations with our brand partners.
              </p>
              <h3 className="text-lg mt-auto font-black bottom">Our Brands</h3>
            </div>

            {/* Box 4 */}
            <div className="bg-[#a6cad9] text-black rounded-lg p-6 flex flex-col items-start text-left">
              <div className="w-20 h-20 flex justify-center items-center mb-4 self-center">
                <img src="/a2.4.svg" alt="Vertical 4" />
              </div>
              <p className="mb-4  font-bold text-sm">
                We are an extension of our partnered brands. We are a strategic
                partner that collaborates with our brand partners to help
                elevate their marketplace presence.
              </p>
              <h3 className="text-lg mt-auto  font-black">
                Marketplace Representation
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section: Marketplace We Specialize In with Light Grey Background */}
      <div className="py-16 px-4 bg-gray-100 text-black">
        <div className="text-center space-y-6">
          {/* Corrected typo from text-2xlxl to text-3xl for consistency */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2c90ba]">
            Marketplace We Specialize In
          </h2>
        </div>

        {/* Logos Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:px-70 xl:gap-0 gap-6 mt-18">
          {/* Logo 1 */}
          <div className=" flex justify-center items-center p-4">
            <img
              src="/a3.1.png"
              alt="Company 1 Logo"
              className="xl:w-[200px]  w-32 h-auto"
            />
          </div>

          {/* Logo 2 */}
          <div className=" flex justify-center items-center p-4">
            <img
              src="/a3.2.png"
              alt="Company 2 Logo"
              className="w-32 xl:w-[200px] h-auto"
            />
          </div>

          {/* Logo 3 */}
          <div className=" flex justify-center items-center p-4">
            <img
              src="/a3.3.png"
              alt="Company 3 Logo"
              className="w-32 xl:w-[200px] h-auto"
            />
          </div>

          {/* Logo 4 */}
          <div className=" flex justify-center items-center p-4">
            <img
              src="/a3.4.png"
              alt="Company 4 Logo"
              className="w-32 xl:w-[200px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
