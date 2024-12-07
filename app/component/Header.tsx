'use client'
import React from 'react'
import Link from 'next/link'
//import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";


// Define the top  Header component

const TopHeader = () => {
  return (
    <div className="w-full bg-Button h-auto text-primary flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 py-3">
      {/* Text Section */}
      <div className="w-full sm:w-2/3 lg:w-auto text-center sm:text-left">
        <p className="font-poppins text-sm sm:text-base font-normal lg:pl-56">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="font-poppins underline font-semibold text-sm sm:text-base ml-2 hover:cursor-pointer">
            ShopNow
          </span>
        </p>
      </div>

      {/* Select Dropdown */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-3 sm:mt-0 lg:pr-14">
        <select
          name="select"
          id="select"
          className="bg-Button text-primary rounded px-3 py-1 sm:py-2 hover:cursor-pointer"
        >
          <option value="English">English</option>
        </select>
      </div>
    </div>
  );
};

export default TopHeader;




export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4 lg:px-[110px]">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-inter font-bold text-Text2 cursor-pointer lg:pr-12">
            Exclusive
          </h1>
        </Link>

        {/* Toggle Button for Small Screens */}
        <button
          className="lg:hidden text-2xl text-Text2 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } lg:ml-4 absolute top-16 left-0 w-full flex-col items-center gap-6 bg-white py-4 shadow-md lg:relative lg:flex lg:flex-row lg:gap-8 lg:top-0 lg:shadow-none`}
        >
          <Link
            href="/"
            className="text-Text2 hover:underline font-normal font-poppins text-[16px]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-Text2 hover:underline font-normal font-poppins text-[16px]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-Text2 hover:underline font-normal font-poppins text-[16px]"
          >
            Contact
          </Link>
          <Link
            href="/signup"
            className="text-Text2 hover:underline font-normal font-poppins text-[16px]"
          >
            Sign Up
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="hidden lg:flex gap-8 items-center hover:scale-100">
          <Link href={'/'}>
          <button className="flex items-center w-[243px] h-[38px] gap-[10px] px-5 rounded bg-secondary">
            <input
              type="text"
              className="w-[211px] h-[24px] opacity-[50%] text-Text2 font-normal font-poppins text-sm bg-secondary"
              placeholder="What are you looking for?"
            />
            
            
            <IoSearch className="h-[32px] w-[32px] text-center hover:scale-110" />
          </button>
          </Link>
          <Link href={'/whishList'}>
            <FaRegHeart className="h-[32px] w-[32px] hover:scale-110 hover:text-Button2 " />
          </Link>
          <Link href={'/cart'}>
            <MdOutlineShoppingCart className="h-[32px] w-[32px] hover:scale-110 hover:text-Button2" />
          </Link>
          <Link href={'/login'}>
            <FiUser className="h-[32px] w-[32px] hover:scale-110 hover:text-Button1" />
          </Link>
        </div>
      </div>
    </header>
  );
};



