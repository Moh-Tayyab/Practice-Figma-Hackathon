import Image from "next/image";
import React from "react";
import { CiCamera } from "react-icons/ci";

// Define the Category component
const Category = () => {
  return (
    // Section to define the whole category container
    <section className="text-Text2 body-font">
      {/* Container for the entire section with padding and width */}
      <div className="container px-5 py-24 mx-auto">
      <div className="text-start mb-5 flex gap-5 justify-start items-start">
          <h2 className="text-lg bg-secondary2 tracking-widest font-semibold w-[20px] h-[40px] rounded-md  sm:text-2xl">
            
          </h2>
          <h2 className="text-[16px] text-secondary2 tracking-widest font-semibold font-poppins sm:text-2xl">
          Categories
          </h2>
        </div>
        {/* Section header */}
        <div className="flex flex-col text-start w-full mb-20">
          <h1 className="sm:text-3xl text-[36px] font-semibold font-inter 4% title-font mb-4 text-Text2">
            Browse By Category
          </h1>
        </div>

        {/* Flex container for category cards */}
        <div className="flex flex-wrap -m-4 text-center">
          {/* Category Card: Phones */}
          <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
            <div className="border-2 border-gray-300 px-4 py-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-secondary2 hover:text-white">
              <Image
                src="/icons/CellPhone.png" // Image source for the icon
                alt="cellphone-icon" // Alt text for accessibility
                width={56} // Image width
                height={56} // Image height
                className="mb-4" // Add spacing below the image
              />
              <p className="leading-relaxed text-Text2 text-[16px] hover:text-primary">Phones</p>
            </div>
          </div>

          {/* Add more categories here by duplicating the block above */}
          {/* Example: Laptops */}
          <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
            <div className="border-2 border-gray-300 px-4 py-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-secondary2">
              <Image
                src="/icons/Computer.png" // Image source for the computer icon
                alt="laptop-icon" // Alt text for accessibility
                width={56} // Image width
                height={56} // Image height
                className="mb-4 hover:text-primary" // Add spacing below the image
              />
              <p className="leading-relaxed text-Text2 hover:text-primary text-[16px]">Computers</p>
            </div>
          </div>

          {/* Example: Watches */}
          <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
            <div className="border-2 border-gray-300 px-4 py-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-secondary2">
              <Image
                src="/icons/SmartWatch.png" // Image source for the watch icon
                alt="watch-icon" // Alt text for accessibility
                width={56} // Image width
                height={56} // Image height
                className="mb-4" // Add spacing below the image
              />
              <p className="leading-relaxed text-Text2 text-[16px] hover:text-primary">SmartWatch</p>
            </div>
          </div>

          {/* Camera */}
          <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
            <div className="border-2 border-gray-300 px-4 py-6 rounded-lg flex flex-col items-center justify-center text-center  hover:bg-secondary2">
              <CiCamera className="text-Text2 w-12 h-12 inline-block hover:text-white mb-6 " />
              <p className="leading-relaxed text-Text2 text-[16px] hover:text-primary">
                Camera
              </p>
            </div>
          </div>
          {/* Headphone */}
          <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
            <div className="border-2 border-gray-300 px-4 py-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-secondary2">
              <Image
                src="/icons/Headphone.png" // Image source for the headphone icon
                alt="headphone-icon" // Alt text for accessibility
                width={56} // Image width
                height={56} // Image height
                className="mb-4 hover:text-white" // Add spacing below the image
              />
              <p className="leading-relaxed text-Text2 text-[16px] hover:text-primary">
                Headphones
              </p>
            </div>
          </div>
          {/* Gaming */}
          <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
            <div className="border-2 border-gray-300 px-4 py-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-secondary2">
              <Image
                src="/icons/Gaming.png" // Image source for the gaming icon
                alt="headphone-icon" // Alt text for accessibility
                width={56} // Image width
                height={56} // Image height
                className="mb-4" // Add spacing below the image
              />
              <p className="leading-relaxed text-Text2 text-[16px] hover:text-primary">
                Gaming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
