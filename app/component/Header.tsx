
import React from 'react'
import Link from 'next/link'
//import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";

// Define the top  Header component

const TopHeader = () => {
  return (
    <div className='w-[1343px] bg-Button h-[48px] text-primary flex pt-3 pl-[220px] flex-row sm:flex-row '>
      <div className=' w-[750px] h-6'>
      <p className='font-poppins text-sm w-[594px] h-[18px] font-normal ml-32'>
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className='font-poppins underline w-[68px] h-6 font-semibold text-sm text-center px-8 hover:cursor-pointer'>
        ShopNow
        </span>
      </p>
      </div>
      <select name='select' id='select' className='bg-Button text-primary text-center justify-center items-center pb-3 pl-[160px] hover:cursor-pointer'>
        <option value='English'>
        English
        </option>
      </select>
    </div>
  )
  }
  export default TopHeader;


export const Header = () => {
  return (
    <header className="">
      <div className=" flex items-center  h-[38px] w-[900px] pt-[80px] pl-[110px] gap-[80px] ">
        {/* Logo and Navigation Links */}
        <div className="flex items-center h-[24px] w-[675px] gap-[185px]  ">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-3xl font-inter font-[700] 3% text-Text2 cursor-pointer w-[118px] h-[24px]">Exclusive</h1>
          </Link>

          {/* Navigation Links */}
          <nav className=" md:flex px-20 w-[367px] h-[24px] gap-[32px] flex-row justify-center items-center pt-2">
            <Link href="/" className="text-Text2 hover:underline font-normal font-poppins text-[16px] text-center w-[48px] h-[24px]">
              Home
            </Link>
            <Link href="/About" className="text-Text2 hover:underline font-normal font-poppins text-[16px] text-center w-[66px] h-[24px]">
              About
            </Link>
            <Link href="/Contact" className="text-Text2 hover:underline font-normal font-poppins text-[16px] text-center w-[48px] h-[24px]">
              Contact
            </Link>
            <Link href="/Services" className="text-Text2 hover:underline font-normal font-poppins text-[16px] text-center w-[61px] h-[24px]">
              Sign Up
            </Link>
          </nav>
        </div>
        <div className='flex  gap-[34px] h-[38px] w-[395px]'>
          <button className='flex w-[243px] h-[38px] gap-[10px] pt-[7px] pr-[5px] pb-[7px] pl-[20px] rounded-[4px] bg-secondary'>
            <input type="text"
             className='w-[211px] h-[24px] opacity-[50%] text-Text2 font-normal font-poppins text-sm bg-secondary'
            placeholder="What are you looking for?"
             /><IoSearch className='h-[32px] w-[32px] items-center justify-center text-center'/>
          </button>
          <div className='flex gap-8'>
          <FaRegHeart  className='h-[32px] w-[32px]'/>
          <MdOutlineShoppingCart className='h-[32px] w-[32px]'/>  
          <FiUser className='h-[32px] w-[32px]'/>
          </div>
        </div>
      </div>
    </header>
  );
};


