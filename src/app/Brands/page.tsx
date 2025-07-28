import Image from "next/image";

export default function BrandsPage() {
  return (
    <div>
      {/* First Section: Image with Heading and Paragraph (Unchanged) */}
      <div className="relative w-full h-[314px]">
        <div className="absolute inset-0">
          <Image
            src="/b1.png"
            alt="About Us Background"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
          />
        </div>
        <div className="relative lg:ml-28 z-20 flex flex-col justify-center items-start w-full h-full text-white space-y-6 px-8">
          <h1 className="text-3xl sm:text-4xl lg:w-[400px] md:text-5xl font-bold">
            Channel Link Properties
          </h1>
          <p className="lg:text-[14px] sm:text-sm md:text-xl lg:w-[350px] max-w-3xl">
            Through our portfolio of brands, we empower people to find, buy, and
            use products and services that improve their everyday lives.
          </p>
        </div>
      </div>

      {/* --- Second Section: Grey Background with Boxes (Corrected) --- */}
      <section className="bg-[#eeeeee] py-16">
        {/* Paragraph in the center */}
        <div className=" mb-12 px-4">
          <p className="text-base lg:w-[650px] mx-auto text-gray-700">
            We have a diverse portfolio of brands, and we acquire existing
            brands that fit our mission to empower people to make better
            decisions. Our brands focus on helping people navigate the
            complexities of moving, choosing home services, improving financial
            well-being, and running successful small businesses.
          </p>
        </div>

        {/* Grid of 6 boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-16 px-8 max-w-7xl mx-auto">
          {/* Reusable Card Structure applied to all boxes */}

          {/* Box 1 */}
          <div className="flex flex-col bg-white border border-black rounded-lg p-6">
            {/* Standardized container for logo/heading */}
            <div className="flex items-center justify-center h-16 mb-6">
              <Image
                src="/b2.1.png"
                alt="Logo 1"
                width={200}
                height={42}
                style={{ objectFit: "contain", height: "42px", width: "auto" }}
              />
            </div>
            <p className="text-center text-sm text-gray-600 flex-grow">
              A short description of the brand and what it offers.
            </p>
            <button className="self-start mt-4 px-6 py-2 rounded-full text-white bg-[#595959] hover:bg-gray-600 transition duration-300">
              Visit Game in stock
            </button>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col bg-white border border-black rounded-lg p-6">
            {/* Standardized container for logo/heading */}
            <div className="flex items-center justify-center h-16 mb-6">
              <h2 className="text-2xl font-bold text-center italic">
                RARE SPAWN
              </h2>
            </div>
            <p className="text-center text-sm text-gray-600 flex-grow">
              A short description of the brand and what it offers.
            </p>
            <button className="self-start mt-4 px-6 py-2 rounded-full text-white bg-[#595959] hover:bg-gray-600 transition duration-300">
              Visit Rare Spawn
            </button>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col bg-white border border-black rounded-lg p-6">
            {/* Standardized container for logo/heading */}
            <div className="flex items-center justify-center h-16 mb-6">
              <Image
                src="/b2.3n.png"
                alt="Logo 3"
                width={200}
                height={42}
                style={{ objectFit: "contain", height: "42px", width: "auto" }}
              />
            </div>
            <p className="text-center text-sm text-gray-600 flex-grow">
              A short description of the brand and what it offers.
            </p>
            <button className="self-start mt-4 px-6 py-2 rounded-full text-white bg-[#595959] hover:bg-gray-600 transition duration-300">
              Visit Hatch Labs
            </button>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col bg-white border border-black rounded-lg p-6">
            {/* Standardized container for logo/heading */}
            <div className="flex items-center justify-center h-16 mb-6">
              <h2 className="text-2xl font-bold text-center italic">
                RESPAWNDIRECT
              </h2>
            </div>
            <p className="text-center text-sm text-gray-600 flex-grow">
              A short description of the brand and what it offers.
            </p>
            <button className="self-start mt-4 px-6 py-2 rounded-full text-white bg-[#595959] hover:bg-gray-600 transition duration-300">
              Visit Respawn Direct
            </button>
          </div>

          {/* Box 5 */}
          <div className="flex flex-col bg-white border border-black rounded-lg p-6">
            {/* Standardized container for logo/heading */}
            <div className="flex items-center justify-center h-16 mb-6">
              <Image
                src="/b2.5.png"
                alt="Logo 5"
                width={200}
                height={42}
                style={{ objectFit: "contain", height: "42px", width: "auto" }}
              />
            </div>
            <p className="text-center text-sm text-gray-600 flex-grow">
              A short description of the brand and what it offers.
            </p>
            <button className="self-start mt-4 px-6 py-2 rounded-full text-white bg-[#595959] hover:bg-gray-600 transition duration-300">
              Visit Geek Theory
            </button>
          </div>

          {/* Box 6 */}
          <div className="flex flex-col bg-white border border-black rounded-lg p-6">
            {/* Standardized container for logo/heading */}
            <div className="flex items-center justify-center h-16 mb-6">
              <Image
                src="/b2.6.png"
                alt="Logo 6"
                width={200}
                height={42}
                style={{ objectFit: "contain", height: "42px", width: "auto" }}
              />
            </div>
            <p className="text-center text-sm text-gray-600 flex-grow">
              A short description of the brand and what it offers.
            </p>
            <button className="self-start mt-4 px-6 py-2 rounded-full text-white bg-[#595959] hover:bg-gray-600 transition duration-300">
              Visit Sliq Gaming
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
