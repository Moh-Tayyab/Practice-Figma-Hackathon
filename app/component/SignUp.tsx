import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <section className=" body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Image src="/sign1.png" alt="Hero" width={805} height={706} />
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-[36px] mb-1 font-medium font-inter 4%">
            Create an account
          </h2>
          <p className="mb-5 text-Text2 font-poppins text-[16px] font-[400px] leading-[24px] w-[191px] h-[24px]">
            Enter your details below
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full bg-primary border-b-2 border-gray-400 focu focus:ring-2 fo text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email or Phone Number"
              className="w-full bg-primary  border-b-2 border-gray-400 focu focus:ring-2 fo text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full bg-white  border-b-2 border-gray-400 focu focus:ring-2 fo text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="flex flex-col gap-4 pt-8">
  {/* Create Account Button */}
  <button className="text-primary bg-Button2 border-0 py-2 px-6 focus:outline-none rounded text-lg">
    Create Account
  </button>

  {/* Sign up with Google Button */}
  <div className="flex flex-row items-center justify-center">
  <button className="text-Text2 flex gap-2 w-full justify-center border border-Button py-2 px-6 focus:outline-none  rounded text-lg text-center items-center">
          <FcGoogle className="w-6 h-6"/>
          Sign up with Google
          </button>
  </div>

  {/* Already Have Account */}
  <div className="flex items-center justify-center mt-5 gap-4">
    <p className="text-Text2 font-poppins text-[16px] leading-[24px] font-[400px] opacity-[70%] ">
      Already have an account?{"   "}
      <span className="border-b-2 border-Text2 cursor-pointer leading[24px] text-[16px] font-poppins font-medium opacity-[70px] w-[47px] h-[24px]">
        Log in
      </span>
    </p>
  </div>
</div>

          </div>
      </div>
    </section>
  );
};

export default SignUp;
