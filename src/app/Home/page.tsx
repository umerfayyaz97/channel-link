import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* First Section with Background Image */}
      <section className="relative h-[500px] w-full flex items-center px-4 md:px-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/h1-2.png"
            alt="Channel Link"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Left Section: Heading and Paragraph */}
        <div className="relative z-20 w-full md:w-1/2 -mt-8  text-white space-y-6 flex flex-col items-start justify-center px-4 md:px-12 ml-0 md:ml-20  md:mt-0">
          {/* Heading */}
          <h1 className="text-3xl sm:text-3xl md:text-5xl">
            Connect your brand with customers that convert.
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-sm md:text-xl sm:w-[90%] md:w-[460px]">
            Our role goes beyond logistics - we serve as a strategic extension
            of your business, guiding your products to their most effective
            market destinations.
          </p>
        </div>
      </section>

      {/* Second Section with Grey Background */}
      <section className="bg-[#3b3b3b] py-20 px-4 md:px-12 max-h-[470px]">
        {/* Heading, Description, and Button Container */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left Section: Heading and Description */}
          <div className="text-white space-y-6 lg:-mt-24 md:w-1/2 flex flex-col items-start justify-center px-4 md:px-12 ml-0 md:ml-20">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl">What we do</h1>

            {/* Paragraph */}
            <p className="text-base sm:text-sm md:text-xl sm:w-[90%] md:w-[460px]">
              Channel Link is a trusted global trade solutions partner, helping
              companies navigate the complexities of modern commerce. We
              specialize in connecting products with the right channels through
              a deep understanding of marketplace dynamics, strategic
              partnerships, and ecommerce operations.
            </p>

            {/* Button */}
            <div className="mt-4 sm:mb-4 sm:mt-0 md:mt-0">
              <button className="px-4 py-2 bg-[#2c90ba] text-white rounded-full text-lg hover:bg-blue-500 focus:outline-none">
                Read More
              </button>
            </div>
          </div>

          {/* Right Section: Images */}
          <div className="flex flex-wrap gap-2 md:w-1/2 justify-start">
            {/* Left Column: Image 1 and Image 2 */}
            <div className="flex flex-col gap-4 w-full -mr-20 -mt-24 sm:w-[80%] md:w-[45%] mb-4 sm:mb-0 hidden lg:flex">
              {/* Image 1 */}
              <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-2 sm:mt-0 relative">
                <Image
                  src="/h2.1.png"
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Image 2 */}
              <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-2 sm:mt-0 relative">
                <Image
                  src="/h2.3.png"
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Right Column: Image 3 and Image 4 */}
            <div className="flex flex-col w-full gap-4 sm:w-[80%] md:w-[45%] sm:mb-0 hidden lg:flex">
              {/* Image 3 */}
              <div className="overflow-hidden w-[150px] h-[200px] rounded-lg shadow-lg mt-10 sm:mt-0 relative">
                <Image
                  src="/h2.2.png"
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Image 4 */}
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

      {/* section 3 */}
      <section className="py-20 px-4 md:px-12">
        {/* Heading and Paragraph */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2c90ba]">
            What we offer
          </h1>
          <p className="text-base lg:w-[500px] lg:ml-80 sm:text-sm md:text-xl text-black">
            Our role goes beyond logistics - we serve as a strategic extension
            of your business, guiding your products to their most effective
            market destinations.
          </p>
        </div>

        {/* 4 Boxes with Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {/* Box 1 */}
          <div className="w-full sm:w-[48%] md:w-[22%] bg-none rounded-lg shadow-lg flex flex-col items-center relative">
            {/* Button */}
            <button className="absolute bottom-4 w-[80%] px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg backdrop-blur-md hover:bg-sky-500/25 focus:outline-none z-10 text-center break-words">
              Internet 3P Retailing
            </button>

            {/* Image 1 */}
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/h3.1.png" // Ensure the image path is correct relative to the "public" directory
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full sm:w-[48%] md:w-[22%] bg-none rounded-lg shadow-lg flex flex-col items-center relative">
            {/* Button */}
            <button className="absolute bottom-4 w-[80%] px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg backdrop-blur-md hover:bg-sky-500/25 focus:outline-none z-10 text-center break-words">
              Bulk Buys
            </button>

            {/* Image 2 */}
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/h3.2.png" // Ensure the image path is correct
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full sm:w-[48%] md:w-[22%] bg-none rounded-lg shadow-lg flex flex-col items-center relative">
            {/* Button */}
            <button className="absolute bottom-4 w-[80%] px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg backdrop-blur-md hover:bg-sky-500/25 focus:outline-none z-10 text-center break-words">
              Private Label
            </button>

            {/* Image 3 */}
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/h3.3.png" // Ensure the image path is correct
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Box 4 */}
          <div className="w-full sm:w-[48%] md:w-[22%] bg-none rounded-lg shadow-lg flex flex-col items-center relative">
            {/* Button */}
            <button className="absolute bottom-4 xl:h-[50px] w-[80%]  px-6  bg-transparent text-white border-2 border-white rounded-lg backdrop-blur-md hover:bg-sky-500/25 focus:outline-none z-10 text-center break-words">
              Marketplace Representation
            </button>

            {/* Image 4 */}
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/h3.4.png" // Ensure the image path is correct
                alt="Image 4"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}

      <section className="py-6 px-4 -mb-14 md:px-12 bg-black">
        {/* Heading and Paragraph */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
            Brand’s we’ve worked with
          </h1>
          <p className="text-base lg:w-[500px] lg:ml-80 sm:text-sm md:text-xl text-white">
            We partner with some of the most influential brands in the world to
            offer consumers affordable products and services tailored to their
            needs.
          </p>
        </div>

        {/* Image Row */}
        <div className="flex justify-center -mb-6 mt-6 sm:gap-6 lg:gap-10">
          {/* Box 1 */}
          <div className="relative w-[130px] h-[150px] bg-none overflow-hidden">
            <Image
              src="/xbox1.png"
              alt="Brand 1"
              width={150}
              height={150}
              objectFit="cover"
            />
            {/* Blue overlay */}
            {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}
          </div>

          {/* Box 2 */}
          <div className="relative w-[120px] h-[150px] bg-none overflow-hidden">
            <Image
              src="/htc.png"
              alt="Brand 2"
              width={150}
              height={150}
              objectFit="cover"
            />
            {/* Blue overlay */}
            {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}
          </div>

          {/* Box 3 */}
          <div className="relative w-[150px] h-[150px] bg-none overflow-hidden">
            <Image
              src="/polaroid.png"
              alt="Brand 3"
              width={150}
              height={150}
              objectFit="cover"
            />
            {/* Blue overlay */}
            {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}
          </div>

          {/* Box 4 */}
          <div className="relative w-[150px] h-[150px] bg-none overflow-hidden">
            <Image
              src="/ps.png"
              alt="Brand 4"
              width={150}
              height={150}
              objectFit="cover"
            />
            {/* Blue overlay */}
            {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}
          </div>

          {/* Box 5 */}
          <div className="relative w-[150px] h-[150px] bg-none overflow-hidden">
            <Image
              src="/linksys.png"
              alt="Brand 5"
              width={150}
              height={150}
              objectFit="cover"
            />
            {/* Blue overlay */}
            {/* <div className="absolute inset-0 bg-blue-500 opacity-50"></div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
