import React from "react";
import Image from "next/image";
import Link from "next/link";

const BestSelling = () => {
  return (
    <section className="text-gray-600 body-font">
      {/* Container for the whole section */}
      <div className="container px-5 py-24 mx-auto">
        {/* Section Title */}
        <div className="text-start mb-5 flex gap-5 justify-start items-start">
          <h2 className="text-lg bg-secondary2 tracking-widest font-semibold w-[20px] h-[40px] rounded-md sm:text-2xl"></h2>
          <h2 className="text-lg text-secondary2 tracking-widest font-semibold sm:text-2xl">
            This Month
          </h2>
        </div>
        {/* Heading and View All Button */}
        <div className="text-start mb-12 flex justify-between items-center">
          <h1 className="sm:text-4xl text-3xl font-semibold title-font text-Text2">
            Best Selling Products
          </h1>
          <button className="text-primary bg-Button2 px-8 hover:bg-primary py-2 rounded-md text-[16px] font-medium">
            View All
          </button>
        </div>
        {/* Products Grid */}
        <div className="flex flex-wrap -m-4 relative justify-center items-center text-center">
          {/* Product Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]"
            >
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
                  src="/products/bp1.png"
                  width={140}
                  height={146}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
                The north coat
              </h2>
              {/* Price and Discount */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-secondary2 text-[16px] font-medium">$260</p>
                <p className="font-medium text-gray-600 line-through">$360</p>
              </div>
              {/* Ratings */}
              <div className="mt-2 flex items-center gap-2">
                <Image
                  alt="star-icon"
                  src="/icons/Star5.png"
                  width={100}
                  height={20}
                />
                <span className="text-gray-600 font-semibold">(65)</span>
              </div>
            </div>
          </div>
          {/* Product Card */}  
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]"
            >
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
                  src="/products/bp2.png"
                  width={140}
                  height={146}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
              Gucci duffle bag
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
                <span className="text-gray-600 font-semibold">(65)</span>
              </div>
            </div>
          </div>
          {/* Product Card */}  
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]"
            >
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
                  src="/products/bp3.png"
                  width={140}
                  height={146}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
              RGB liquid CPU Cooler
              </h2>
              {/* Price and Discount */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-secondary2 text-[16px] font-medium">$160</p>
                <p className="font-medium text-gray-600 line-through">$170</p>
              </div>
              {/* Ratings */}
              <div className="mt-2 flex items-center gap-2">
                <Image
                  alt="star-icon"
                  src="/icons/Star6.png"
                  width={100}
                  height={20}
                />
                <span className="text-gray-600 font-semibold">(65)</span>
              </div>
            </div>
          </div>
          {/* Product Card */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]"
            >
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
                  src="/products/bp4.png"
                  width={140}
                  height={146}
                />
              </div>
            </Link>
            {/* Product Details */}
            <div className="mt-4">
              {/* Product Title */}
              <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
              Small BookSelf
              </h2>
              {/* Price and Discount */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-secondary2 text-[16px] font-medium">$360</p>
                <p className="font-medium text-gray-600 line-through">$470</p>
              </div>
              {/* Ratings */}
              <div className="mt-2 flex items-center gap-2">
                <Image
                  alt="star-icon"
                  src="/icons/Star5.png"
                  width={100}
                  height={20}
                />
                <span className="text-gray-600 font-semibold">(65)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
