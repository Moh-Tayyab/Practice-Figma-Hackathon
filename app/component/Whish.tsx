import Image from "next/image"
import Link from "next/link"
import { RiDeleteBin6Line } from "react-icons/ri"
import { MdOutlineShoppingCart } from "react-icons/md";
const Whish = () => {
  return (
    <section className="text-gray-600 body-font">
    {/* Container for the whole section */}
    <div className="container px-5 py-24 mx-auto">
      {/* Section Title */}
      
      {/* Heading and View All Button */}
      <div className="text-start mb-12 flex justify-between items-center">
        <h1 className="sm:text-4xl text-3xl font-poppins title-font text-Text2">
        Wishlist (4)
        </h1>
        <button className="text-Text2 bg-primary px-8 hover:scale-110 py-2 rounded-md border text-[16px] font-medium">
        View All Products
        </button>
      </div>
      {/* Products Grid */}
      <div className="flex flex-wrap -m-4 relative justify-center items-center text-center">
        {/* Product Card 1*/}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link
            href="#"
            className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]"
          >
            {/* Icon (Delete) */}
            <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
            <RiDeleteBin6Line className="w-8 h-8 bg-primary rounded-full px-1 py-1"/>
            </div>
            {/* Product Image */}
            <div className="flex items-center justify-center h-full flex-col mt-1">
              <Image
                alt=""
                className="object-contain pb-10"
                src="/products/bp2.png"
                width={178}
                height={129}
              />
              <button className="bg-Button text-primary py-2 px-14 text-center hover:scale-110 flex flex-row gap-4">
              <MdOutlineShoppingCart className="w-6 h-6" />
                Add To Cart
              </button>
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
        {/* Product Card 2*/}  
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link
            href="#"
            className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]"
          >
            {/* Icon (Delete) */}
            <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
            <RiDeleteBin6Line className="w-8 h-8 bg-primary rounded-full px-1 py-1"/>
            </div>
            {/* Product Image */}
            <div className="flex items-center justify-center h-full flex-col mt-5">
              <Image
                alt=""
                className="object-contain pb-10"
                src="/products/bp3.png"
                width={191}
                height={150}
              />
              <button className="bg-Button text-primary py-2 px-14 text-center hover:scale-110 flex flex-row gap-4">
              <MdOutlineShoppingCart className="w-6 h-6" />
                Add To Cart
              </button>
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
        {/* Product Card 3*/}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link
            href="#"
            className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]"
          >
            {/* Icon (Delete) */}
            <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
            <RiDeleteBin6Line className="w-8 h-8 bg-primary rounded-full px-1 py-1"/>
            </div>
            {/* Product Image */}
            <div className="flex items-center justify-center h-full flex-col">
              <Image
                alt=""
                className="object-contain pb-8"
                src="/products/p7.png"
                width={178}
                height={150}
              />
              <button className="bg-Button text-primary py-2 px-14 text-center hover:scale-110 flex flex-row gap-4">
              <MdOutlineShoppingCart className="w-6 h-6" />
                Add To Cart
              </button>
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
        {/*product cart 4 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link
            href="#"
            className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]"
          >
            {/* Icon (Delete) */}
            <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
            <RiDeleteBin6Line className="w-8 h-8 bg-primary rounded-full px-1 py-1"/>
            </div>
            {/* Product Image */}
            <div className="flex items-center justify-center h-full flex-col">
              <Image
                alt=""
                className="object-contain pb-5"
                src="/products/p8.png"
                width={165}
                height={150}
              />
              <button className="bg-Button text-primary py-2 px-14 text-center hover:scale-110 flex flex-row gap-4">
              <MdOutlineShoppingCart className="w-6 h-6" />
                Add To Cart
              </button>
            </div>
          </Link>
          {/* Product Details */}
          <div className="mt-4">
            {/* Product Title */}
            <h2 className="text-Text2 title-font text-lg font-medium flex items-center">
            AK-900 Wired Keyboard
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
      </div>
    </div>
  </section>
  )
}

export default Whish
