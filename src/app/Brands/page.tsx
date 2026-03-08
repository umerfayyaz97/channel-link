import Image from "next/image";
import Link from "next/link";

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
        <div className="relative xl:px-70 lg:ml-28 z-20 flex flex-col justify-center items-start w-full h-full text-white space-y-6 px-8">
          <h1 className="text-3xl sm:text-4xl lg:w-[400px] md:text-5xl font-bold">
            Channel Link Properties
          </h1>
          <p className="lg:text-[14px] font-avenir-family sm:text-sm md:text-xl lg:w-[350px] max-w-3xl">
            {/* Through our portfolio of brands, we empower people to find, buy, and
            use products and services that improve their everyday lives. */}
          </p>
        </div>
      </div>

      {/* --- Second Section: Grey Background with Boxes (Corrected) --- */}
      <section className="bg-[#eeeeee] py-16">
        {/* Paragraph in the center */}
        <div className=" mb-12 px-4">
          <p className="text-base lg:w-[650px] font-avenir-family mx-auto text-gray-700">
            We have a diverse portfolio of brands and stores we developed that
            fit our mission of providing great products to people. We
            continually are looking for creative ways to bring value to our
            brand partners and to our customers.
          </p>
        </div>

        {/* Grid of 6 boxes */}
        <div className="grid  xl:px-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-16 px-8 max-w-7xl mx-auto">
          {/* Reusable Card Structure applied to all boxes */}

          {/* Box 1 */}
          <div className="flex xl:h-[250px]  flex-col bg-white border border-black rounded-lg p-6">
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
            <p className=" text-sm text-gray-600 flex-grow">
              {/* A short description of the brand and what it offers. */}
              Electronic Distributor & Trade-Ins
            </p>
            <Link
              href="https://www.gameinstock.com/"
              className="self-start "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="self-start font-avenir-family xl:mb-6 mt-4 px-6 py-2 rounded-full text-white bg-[#595959] hover:bg-gray-600 transition duration-300">
                Visit Gameinstock
              </button>
            </Link>
          </div>

          {/* Box 2 */}

          {/* Box 3 */}

          {/* Box 4 */}

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
            <p className=" text-sm text-gray-600 flex-grow">
              {/* A short description of the brand and what it offers. */}
              Visit GeekTheory
            </p>
            <Link
              href="https://geektheory.com"
              className="self-start "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="self-start font-avenir-family mt-4 xl:mb-6 px-6 py-2 rounded-full text-white bg-[#595959] hover:bg-gray-600 transition duration-300">
                Visit Geek Theory
              </button>
            </Link>
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
            <p className="text-sm text-gray-600 flex-grow">Visit SliqGaming</p>
            <Link
              href="https://www.amazon.com/s?k=sliq+gaming&crid=27R1WJSRBMB1D&sprefix=sliq+gaming%2Caps%2C187&ref=nb_sb_noss_1"
              className="self-start "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="self-start font-avenir-family xl:mb-6 mt-4 px-6 py-2 rounded-full text-white bg-[#595959] hover:bg-gray-600 transition duration-300">
                Visit Sliq Gaming
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
