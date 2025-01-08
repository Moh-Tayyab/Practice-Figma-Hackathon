import Image from "next/image";
import Link from "next/link";

const FlashSale = () => {
  return (
    <section className="text-Text2 body-font">
      {/* Container for the whole section */}
      <div className="container px-5 py-24 mx-auto">
        <div className="text-start mb-5 flex gap-5 justify-start items-start ">
          <h2 className="text-lg bg-secondary2 tracking-widest font-semibold w-[20px] h-[40px] rounded-md  sm:text-2xl"></h2>
          <h2 className="text-[16px] text-secondary2 tracking-widest font-semibold font-poppins sm:text-2xl">
            Today’s
          </h2>
        </div>
        {/* Heading and Left Right Arrow */}
        <div className="text-start mb-12 flex flex-row justify-between items-center sm:flex-row flex-col">
          {/* Title */}
          <h1 className="sm:text-4xl lg:text-[36px] font-semibold font-inter text-Text2 mb-4 sm:mb-0 4%">
            Flash Sales
          </h1>

          {/* Time Duration */}
          <div className="flex justify-center items-center gap-4 mb-4 sm:mb-0">
            {/* Days */}
            <div className="p-2 text-center">
              <p className="leading-relaxed">Days</p>
              <h2 className="title-font font-medium text-3xl text-Text2">
                03<span className="text-secondary2">:</span>
              </h2>
            </div>

            {/* Hours */}
            <div className="p-2 text-center">
              <p className="leading-relaxed">Hours</p>
              <h2 className="title-font font-medium text-3xl text-Text2">
                23<span className="text-secondary2">:</span>
              </h2>
            </div>

            {/* Minutes */}
            <div className="p-2 text-center">
              <p className="leading-relaxed">Minutes</p>
              <h2 className="title-font font-medium text-3xl text-Text2">
                19<span className="text-secondary2">:</span>
              </h2>
            </div>

            {/* Seconds */}
            <div className="p-2 text-center">
              <p className="leading-relaxed">Seconds</p>
              <h2 className="title-font font-medium text-3xl text-Text2">26</h2>
            </div>
          </div>

          {/* Arrows */}
          <div className="lg:flex flex-row items-center gap-4 sm:block hidden">
            <Image
              alt="arrow-left"
              src="/icons/Left .png"
              width={46}
              height={46}
              className="cursor-pointer hover:scale-110"
            />
            <Image
              alt="arrow-right"
              src="/icons/Right.png"
              width={46}
              height={46}
              className="cursor-pointer hover:scale-110"
            />
          </div>
        </div>

        <div className="flex flex-wrap -m-4 relative justify-center items-center text-center">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]">
              <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
                <p className="px-2 py-1 bg-secondary2 text-primary rounded-md">
                  -40%
                </p>
              </div>
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                <Image
                  alt="eye-icon"
                  src="/icons/Eye.png"
                  width={34}
                  height={34}
                />
              </div>
              {/* Product Image */}
              <div className="flex items-center justify-center h-full">
                <Image
                  alt=""
                  className="object-contain"
                  src="/products/fp1.png"
                  width={172}
                  height={152}
                />
              </div>
            </Link>
            {/* Product Details  */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
                HAVIT HV-G92 Gamepad
              </h2>
              {/* Price and Discount */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-secondary2 text-[16px] font-medium">$120</p>
                <p className="font-medium text-gray-600 line-through">$160</p>
              </div>
              {/* Ratings */}
              <div className="mt-2 flex items-center gap-2">
                <Image
                  alt="star-icon"
                  src="/icons/Star6.png"
                  width={100}
                  height={20}
                />
                <span className="text-gray-600 font-semibold">(88)</span>
              </div>
            </div>
          </div>

          {/* card 2  */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]">
              <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
                <p className="px-2 py-1 bg-secondary2 text-primary rounded-md">
                  -40%
                </p>
              </div>
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                <Image
                  alt="eye-icon"
                  src="/icons/Eye.png"
                  width={34}
                  height={34}
                />
              </div>
              {/* Product Image */}
              <div className="flex items-center justify-center h-full">
                <Image
                  alt=""
                  className="object-contain"
                  src="/products/fp2.png"
                  width={191}
                  height={101}
                />
              </div>
            </Link>
            {/* Product Details  */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
                AK-900 Wired Keyboard
              </h2>
              {/* Price and Discount */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-secondary2 text-[16px] font-medium">$960</p>
                <p className="font-medium text-gray-600 line-through">$1160</p>
              </div>
              {/* Ratings */}
              <div className="mt-2 flex items-center gap-2">
                <Image
                  alt="star-icon"
                  src="/icons/Star6.png"
                  width={100}
                  height={20}
                />
                <span className="text-gray-600 font-semibold">(75)</span>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]">
              <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
                <p className="px-2 py-1 bg-secondary2 text-primary rounded-md">
                  -40%
                </p>
              </div>
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                <Image
                  alt="eye-icon"
                  src="/icons/Eye.png"
                  width={34}
                  height={34}
                />
              </div>
              {/* Product Image */}
              <div className="flex items-center justify-center h-full">
                <Image
                  alt=""
                  className="object-contain"
                  src="/products/fp3.png"
                  width={170}
                  height={129}
                />
              </div>
            </Link>
            {/* Product Details  */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
                IPS LCD Gaming Monitor
              </h2>
              {/* Price and Discount */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-secondary2 text-[16px] font-medium">$370</p>
                <p className="font-medium text-gray-600 line-through">$400</p>
              </div>
              {/* Ratings */}
              <div className="mt-2 flex items-center gap-2">
                <Image
                  alt="star-icon"
                  src="/icons/Star6.png"
                  width={100}
                  height={20}
                />
                <span className="text-gray-600 font-semibold">(99)</span>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]">
              <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
                <p className="px-2 py-1 bg-secondary2 text-primary rounded-md">
                  -40%
                </p>
              </div>
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                <Image
                  alt="eye-icon"
                  src="/icons/Eye.png"
                  width={34}
                  height={34}
                />
              </div>
              {/* Product Image */}
              <div className="flex items-center justify-center h-full">
                <Image
                  alt=""
                  className="object-contain"
                  src="/products/fp4.png"
                  width={107}
                  height={180}
                />
              </div>
            </Link>
            {/* Product Details  */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
                IPS LCD Gaming Monitor
              </h2>
              {/* Price and Discount */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-secondary2 text-[16px] font-medium">$375</p>
                <p className="font-medium text-gray-600 line-through">$400</p>
              </div>
              {/* Ratings */}
              <div className="mt-2 flex items-center gap-2">
                <Image
                  alt="star-icon"
                  src="/icons/Star6.png"
                  width={100}
                  height={20}
                />
                <span className="text-gray-600 font-semibold">(99)</span>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="bg-Button2 text-white rounded-md w-[234px] h-[56px] font-medium">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
