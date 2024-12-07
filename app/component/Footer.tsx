import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-Text bg-Text2 body-font">
      <div className="container px-12 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Brand Section */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left lg:w-1/4 md:w-1/2 px-4 items-center sm:text-center justify-center">
          <Link href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-[24px] font-inter font-bold">Exclusive</span>
          </Link>
          <p className="ml-3 font-poppins font-medium text-lg pt-4 pb-4">Subscribe</p>
          <p className="pt-4 text-[16px] font-[400] font-poppins ml-3">Get 10% off your first order</p>
          <div className="pt-10 ml-3">
            <button className="rounded-[4px] border border-primary p-1 flex">
              <input
                type="text"
                className="w-full p-2 text-sm text-gray-600 placeholder-gray-400 bg-Button focus:outline-none focus:underline transition duration-200 ease-in-out"
                placeholder="Enter your email . . ."
              />
              <MdDoubleArrow className="w-9 h-9" />
            </button>
          </div>
        </div>

        {/* Sections */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* Support Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font font-medium text-white tracking-widest text-[20px] mb-3">Support</h2>
            <nav className="list-none mb-10">
              <li><p>111 Bijoy sarani, Dhaka, <br/>
                DH 1515, Bangladesh.</p></li>
              <li><p className="mt-4 mb-4">exclusive@gmail.com</p></li>
              <li><p>+88015-88888-9999</p></li>
            </nav>
          </div>

          {/* Account Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font font-medium text-white tracking-widest text-[20px] mb-3">Account</h2>
            <nav className="list-none mb-10">
              <li><p className="mb-3">My Account</p></li>
              <li><p className="mb-3">Login / Register</p></li>
              <li><p className="mb-3">Cart</p></li>
              <li><p className="mb-3">Wishlist</p></li>
              <li><p>Shop</p></li>
            </nav>
          </div>

          {/* Quick Links Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font font-medium text-white tracking-widest text-[20px] mb-3">Quick Links</h2>
            <nav className="list-none mb-10">
              <li><p className="py-2">Privacy Policy</p></li>
              <li><p className="py-2">Terms of Use</p></li>
              <li><p className="py-2">FAQ</p></li>
              <li><p className="py-2">Contact</p></li>
            </nav>
          </div>

          {/* Download App Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Download App</h2>
            <p className="text-[13px] py-2">Save $3 with App New User Only</p>
            <div className="flex flex-row items-center gap-3">
              {/* QR Code */}
              <Image src="/Qrcode1.png" alt="QR Code" width={100} height={100} />

              {/* App Buttons */}
              <div className="flex flex-col gap-3">
                <button className="bg-Text2 w-[134px] h-[56px] flex items-center justify-center text-white rounded-lg border border-Text hover:bg-gray-700 focus:outline-none">
                  <span className="flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                    <span>Google Play</span>
                  </span>
                </button>
                <button className="bg-Text2 w-[134px] h-[56px] flex items-center justify-center text-white rounded-lg border border-Text hover:bg-gray-700 focus:outline-none">
                  <span className="flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">Download on the</span>
                    <span>App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-Text2 bg-opacity-75 border-t border-Text">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
          <p className="text-[16px] text-center sm:text-left">© 2024 Exclusive - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
