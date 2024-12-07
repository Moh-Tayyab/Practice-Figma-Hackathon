import React from "react";
import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  return (
    <section className="text-gray-600 body-font">
      {/* Container for the whole section */}
      <div className="container px-5 py-24 mx-auto">
        <div className="text-start mb-5 flex gap-5 justify-start items-start">
          <h2 className="text-lg bg-secondary2 tracking-widest font-semibold w-[20px] h-[40px] rounded-md  sm:text-2xl">
            
          </h2>
          <h2 className="text-[16px] text-secondary2 tracking-widest font-semibold font-poppins sm:text-2xl">
            Our Products
          </h2>
        </div>
        {/* Heading and Left Right Arrow */}  
        <div className="text-start mb-12">
          <h1 className="sm:text-4xl text-[36px] font-inter 4% font-semibold title-font text-Text2">
            Explore Our Collection
          </h1>
          {/* left right arrow */}
          <div className="flex flex-row items-end justify-end gap-2 mx-auto">
            <Image
            alt="arrow-right"
              src="/icons/Right.png"
              width={46}  
              height={46}
              className="cursor-pointer hover:scale-110"
            />
            <Image
              alt="arrow-left"
              src="/icons/Left .png"
              width={46}
              height={46}
              className="cursor-pointer hover:scale-110"
            />
          </div>
        </div>
        <div className="flex flex-wrap -m-4 relative justify-center items-center text-center">
          {/* Product Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px] hover:scale-110 cursor-pointer">
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                {/* Heart Icon */}
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                {/* Eye Icon */}
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
                  alt="ecommerce"
                  className="object-contain"
                  src="/products/p1.png"
                  width={115}
                  height={180}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
                Breed Dry Dog Food
              </h2>
              <div className="flex items-center gap-4">
                {/* Product Price */}
                <p className="mt-1 text-secondary2 font-medium">$100</p>
                {/* Ratings */}
                <span className="flex items-center">
                  <Image
                    alt="star-icon"
                    src="/icons/Star1.png"
                    width={100}
                    height={20}
                  />
                  <span className="text-gray-600 ml-3 font-semibold">(35)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Duplicate the product card to add more products */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            {/* Add your next product card here by duplicating the structure above */}
            {/* For example, change the product image and details */}
            <Link
              href="#"
              className="block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px] hover:scale-110 cursor-pointer">
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
              <div className="flex items-center justify-center h-full">
                <Image
                  alt="ecommerce"
                  className="object-contain"
                  src="/products/p2.png"
                  width={115}
                  height={180}
                />
              </div>
            </Link>
            <div className="mt-4">
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
                CANON EOS DSLR Camera
              </h2>
              <div className="flex items-center gap-4">
                <p className="mt-1 text-secondary2 font-medium">$360</p>
                <span className="flex items-center">
                  <Image
                    alt="star-icon"
                    src="/icons/Star2.png"
                    width={100}
                    height={20}
                  />
                  <span className="text-gray-600 ml-3 font-semibold">(95)</span>
                </span>
              </div>
            </div>
          </div>
          {/* card 3  */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px] hover:scale-110 cursor-pointer">
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                {/* Heart Icon */}
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                {/* Eye Icon */}
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
                  alt="ecommerce"
                  className="object-contain"
                  src="/products/p3.png"
                  width={172}
                  height={180}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
                ASUS FHD Gaming Laptop
              </h2>
              <div className="flex items-center gap-4">
                {/* Product Price */}
                <p className="mt-1 text-secondary2 font-medium">$700</p>
                {/* Ratings */}
                <span className="flex items-center">
                  <Image
                    alt="star-icon"
                    src="/icons/Star5.png"
                    width={100}
                    height={20}
                  />
                  <span className="text-gray-600 ml-3 font-semibold">
                    (325)
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px] hover:scale-110 cursor-pointer">
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                {/* Heart Icon */}
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                {/* Eye Icon */}
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
                  alt="ecommerce"
                  className="object-contain"
                  src="/products/p4.png"
                  width={172}
                  height={159}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
                Curology Product Set
              </h2>
              <div className="flex items-center gap-4">
                {/* Product Price */}
                <p className="mt-1 text-secondary2 font-medium">$500</p>
                {/* Ratings */}
                <span className="flex items-center">
                  <Image
                    alt="star-icon"
                    src="/icons/Star4.png"
                    width={100}
                    height={20}
                  />
                  <span className="text-gray-600 ml-3  font-semibold">
                    (145)
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px] hover:scale-110 cursor-pointer">
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
                <p className="px-2 py-1 bg-Button1 text-primary rounded-md">
                  NEW
                </p>
              </div>
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                {/* Heart Icon */}
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                {/* Eye Icon */}
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
                  alt="ecommerce"
                  className="object-contain"
                  src="/products/p5.png"
                  width={172}
                  height={159}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
                Kids Electric Car
              </h2>
              <div className="flex items-center gap-4">
                {/* Product Price */}
                <p className="mt-1 text-secondary2 font-medium">$960</p>
                {/* Ratings */}
                <span className="flex items-center">
                  <Image
                    alt="star-icon"
                    src="/icons/Star5.png"
                    width={100}
                    height={20}
                  />
                  <span className="text-gray-600 ml-3  font-semibold">
                    (65)
                  </span>
                </span>
              </div>
              <div className="flex gap-2 ">
                <h2 className="rounded-full ring-black ring-[5px] bg-[#FB1314]  w-[12px] h-[12px] mt-1"></h2>
                <h2 className="rounded-full bg-secondary2 w-[20px] h-[20px]"></h2>
              </div>
            </div>
          </div>
          {/* card 6 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px] hover:scale-110 cursor-pointer">
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                {/* Heart Icon */}
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                {/* Eye Icon */}
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
                  alt="ecommerce"
                  className="object-contain"
                  src="/products/p6.png"
                  width={186}
                  height={164}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
              Jr. Zoom Soccer Cleats
              </h2>
              <div className="flex items-center gap-4">
                {/* Product Price */}
                <p className="mt-1 text-secondary2 font-medium">$1160</p>
                {/* Ratings */}
                <span className="flex items-center">
                  <Image
                    alt="star-icon"
                    src="/icons/Star5.png"
                    width={100}
                    height={20}
                  />
                  <span className="text-gray-600 ml-3  font-semibold">
                    (35)
                  </span>
                </span>
              </div>
              <div className="flex gap-2 ">
                <h2 className="rounded-full ring-black ring-[5px] bg-[#EEFF61]  w-[12px] h-[12px] mt-1"></h2>
                <h2 className="rounded-full bg-secondary2 w-[20px] h-[20px]"></h2>
              </div>
            </div>
          </div>
          {/* card 7 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px] hover:scale-110 cursor-pointer">
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
                <p className="px-2 py-1 bg-Button1 text-primary rounded-md">
                  NEW
                </p>
              </div>
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                {/* Heart Icon */}
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                {/* Eye Icon */}
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
                  alt="ecommerce"
                  className="object-contain"
                  src="/products/p7.png"
                  width={172}
                  height={159}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
              GP11 Shooter USB Gamepad
              </h2>
              <div className="flex items-center gap-4">
                {/* Product Price */}
                <p className="mt-1 text-secondary2 font-medium">$660</p>
                {/* Ratings */}
                <span className="flex items-center">
                  <Image
                    alt="star-icon"
                    src="/icons/Star6.png"
                    width={100}
                    height={20}
                  />
                  <span className="text-gray-600 ml-3  font-semibold">
                    (55)
                  </span>
                </span>
              </div>
              <div className="flex gap-2 ">
                <h2 className="rounded-full ring-black ring-[5px] bg-gray-600  w-[12px] h-[12px] mt-1"></h2>
                <h2 className="rounded-full bg-secondary2 w-[20px] h-[20px]"></h2>
              </div>
            </div>
          </div>
          {/* card 8 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px] hover:scale-110 cursor-pointer">
              {/* Icons (Heart and Eye) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                {/* Heart Icon */}
                <Image
                  alt="heart-icon"
                  src="/icons/Heart.png"
                  width={34}
                  height={34}
                />
                {/* Eye Icon */}
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
                  alt="ecommerce"
                  className="object-contain"
                  src="/products/p8.png"
                  width={186}
                  height={164}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
              Quilted Satin Jacket
              </h2>
              <div className="flex items-center gap-4">
                {/* Product Price */}
                <p className="mt-1 text-secondary2 font-medium">$660</p>
                {/* Ratings */}
                <span className="flex items-center">
                  <Image
                    alt="star-icon"
                    src="/icons/Star6.png"
                    width={100}
                    height={20}
                  />
                  <span className="text-gray-600 ml-3  font-semibold">
                    (55)
                  </span>
                </span>
              </div>
              <div className="flex gap-2 ">
                <h2 className="rounded-full ring-black ring-[5px] bg-[#184A48]  w-[12px] h-[12px] mt-1"></h2>
                <h2 className="rounded-full bg-secondary2 w-[20px] h-[20px]"></h2>
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

export default Explore;
