import React from "react";
import Image from "next/image";

const LogIn = () => {
  return (
    <section className=" body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Image src="/sign1.png" alt="Hero" width={805} height={706} />
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-primary flex flex-col md:ml-auto w-full  md:py-8 mt-12 md:mt-0">
          <h2 className="text-gray-900 text-[36px] leading-[30px] 4% mb-2 font-medium font-inter w-[345px] h-[30px]">
          Log in to Exclusive
          </h2>
          <p className="leading-relaxed mb-5 text-Text2">
            Enter your details below
          </p>
          
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
             
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" Email or Phone Number"
              className="w-full bg-white  border-b-2 border-Text2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
             
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Password"
              className="w-full bg-white  border-b-2 border-Text2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
           <div className="flex flex-row justify-between">
          <button className="text-primary  bg-Button2 py-3 px-6  rounded text-lg">
            Log In
          </button>
          <p className="text-[16px] leading-[24px] font-[400px]  text-secondary2 mt-3">
          Forget Password?
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
