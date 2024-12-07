import Image from "next/image";
import Link from "next/link";
import { FiEye } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
const Foryou = () => {
  return (
    <section className="text-gray-600 body-font">
      {/* Container for the whole section */}
      <div className="container px-5 py-24 mx-auto">
        {/* Section Title */}

        {/* Heading and View All Button */}
        <div className="text-start mb-12 flex justify-between items-center">
        <h1 className="sm:text-4xl text-3xl font-poppins title-font text-Text2">
        Just For You
        </h1>
        <button className="text-Text2 bg-primary px-8 hover:scale-110 py-2 rounded-md border text-[16px] font-medium">
        View All 
        </button>
      </div>
        {/* Products Grid */}
        <div className="flex flex-wrap -m-4 relative justify-center items-center text-center">
          {/* Product Card 1*/}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="#"
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]">
                 <div className="absolute top-2 left-3 flex flex-col items-start space-y-2">
                <p className="px-2 py-1 bg-secondary2 text-primary rounded-md">
                  -35%
                </p>
              </div>
              {/* Icon (Delete) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                
                <FiEye className="w-8 h-8 bg-primary rounded-full px-1 py-1" />
              </div>
              {/* Product Image */}
              <div className="flex items-center justify-center h-full flex-col">
                <Image
                  alt=""
                  className="object-contain pb-9"
                  src="/products/p3.png"
                  width={162}
                  height={120}
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
              ASUS FHD Gaming Laptop
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
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]">
              {/* Icon (Delete) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                <FiEye className="w-8 h-8 bg-primary rounded-full px-1 py-1" />
              </div>
              {/* Product Image */}
              <div className="flex items-center justify-center h-full flex-col mt-4">
                <Image
                  alt=""
                  className="object-contain pb-11"
                  src="/products/fp3.png"
                  width={170}
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
              IPS LCD Gaming Monitor
              </h2>
              {/* Price and Discount */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-secondary2 text-[16px] font-medium">$1160</p>
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
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]">
               <div className="absolute top-3 left-2 flex flex-col items-start space-y-2">
                <p className="px-2 py-1 bg-Button1 text-primary rounded-md">
                  New
                </p>
              </div>
              {/* Icon (Delete) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                <FiEye className="w-8 h-8 bg-primary rounded-full px-1 py-1" />
              </div>
              {/* Product Image */}
              <div className="flex items-center justify-center h-full flex-col mt-6">
                <Image
                  alt=""
                  className="object-contain pb-2"
                  src="/products/fp1.png"
                  width={170}
                  height={152}
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
              HAVIT HV-G92 Gamepad
              </h2>
              {/* Price and Discount */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-secondary2 text-[16px] font-medium">$560</p>
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
              className="object-contain hover:scale-110 cursor-pointer block relative bg-gray-100 rounded overflow-hidden w-[270px] h-[250px]">
              {/* Icon (Delete) */}
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                <FiEye className="w-8 h-8 bg-primary rounded-full px-1 py-1" />
              </div>
              {/* Product Image */}
              <div className="flex items-center justify-center h-full flex-col mt-8">
                <Image
                  alt=""
                  className="object-contain pb-10"
                  src="/products/fp2.png"
                  width={190}
                  height={180}
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
                <p className="text-secondary2 text-[16px] font-medium">$200</p>
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

export default Foryou;
