import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <section className="text-Text2 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-start w-full mb-20">
          <h1 className=" font-medium title-font mb-2 text-gray-300 leading-tight">
            Home / <span className="text-Text2 leading-tight">Cart</span>
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead className="">
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-Text2 text-lg rounded-tl rounded-bl w-[1170px] h-[11px] gap-10 bg-gray-100 pt-5 pb-5">
                  Product
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-Text2 text-lg w-[1170px] h-[11px] gap-4 bg-gray-100">
                  Price
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-Text2 text-lg w-[1170px] h-[11px] gap-4 bg-gray-100">
                  Quantity
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-Text2 text-lg w-[1170px] h-[11px] gap-4 bg-gray-100">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 flex items-center gap-4 bg-primary">
                  <Image
                    alt="ecommerce item"
                    src="/products/fp3.png"
                    width={50}
                    height={29}
                  />
                  <span>LCD Monitor</span>
                </td>

                <td className="px-4 py-3 bg-primary">$650</td>

                <td className="px-3 py-2 border border-Button inline-flex items-center gap-3 rounded-[4px] bg-primary">
                  <span className="text-center">01</span>
                  <div className="flex flex-col items-center">
                    <button className="text-sm leading-none">
                      ^ {/* Up arrow */}
                    </button>
                    <button className="text-sm leading-none">
                      v {/* Down arrow */}
                    </button>
                  </div>
                </td>

                <td className="px-4 py-3 text-center text-lg text-gray-900 bg-primary">
                  $650
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 flex items-center gap-2 bg-primary">
                  <Image
                    alt="ecommerce item"
                    src="/products/fp1.png"
                    width={50}
                    height={29}
                  />
                  <span>H1 Gamepad</span>
                </td>
                <td className="px-4 py-3 text-lg text-gray-900 bg-primary">
                  $550
                </td>

                <td className="px-3 py-2 border border-Button inline-flex items-center gap-3 rounded-[4px] bg-primary">
                  <span className="text-center">02</span>
                  <div className="flex flex-col items-center">
                    <button className="text-sm leading-none">
                      ^ {/* Up arrow */}
                    </button>
                    <button className="text-sm leading-none">
                      v {/* Down arrow */}
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 text-center text-lg text-gray-900 bg-primary">
                  $1100
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
            <button className="flex ml-auto text-Text2 bg-primary border py-2 px-6 focus:outline-none border-Button hover:scale-110 rounded">
              Return To Shop
            </button>
          </a>
          <button className="flex ml-auto text-Text2 bg-primary border border-Button py-2 px-6 focus:outline-none  hover:scale-110 rounded">
            Update Cart
          </button>
        </div>
      </div>
 {/* Section 2 */}
 <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
  <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 space-x-4 mt-4 pl-10 pb-16"> 
  <h1 className="title-font font-medium text-3xl text-Text2 pl-4">
        Coupon
      </h1>
    {/* Coupon Button */}
    <label
      htmlFor="coupon-code"
      className="text-start items-start pr-20 text-sm text-gray-600 mb-4 border border-Text2 py-3 px-12 rounded-[4px]">
      Coupon Code
    </label>
    <button className="text-white bg-Button2 border-0 py-2 px-8 focus:outline-none hover:scale-100 rounded text-lg mt-4">
      Apply Coupon
    </button>
  </div>

  <div className="lg:w-2/6 md:w-1/2 border border-Button rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
      Cart Total
    </h2>
    {/* Subtotal */}
    <div className="relative mb-4 flex justify-between items-center text-Text2 w-full border-b-2 border-Text2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      <label htmlFor="full-name" className="text-Text2 mr-2">
        Subtotal:
      </label>
      <span className="text-end text-Text2">$1750</span>
    </div>
    {/* Shipping */}
    <div className="relative mb-4 flex justify-between items-center text-Text2 w-full border-b-2 border-Text2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      <label htmlFor="full-name" className="text-Text2 mr-2">
        Shipping:
      </label>
      <span className="text-end text-Text2">Free</span>
    </div>
    {/* Total */}
    <div className="relative mb-4 flex justify-between items-center text-Text2 w-full border-b-2 border-Text2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      <label htmlFor="full-name" className="text-Text2 mr-2">
        Total:
      </label>
      <span className="text-end text-Text2">$1750</span>
    </div>
    <button className="text-white bg-Button2 border-0 py-2 px-8 focus:outline-none hover:scale-100 rounded text-lg">
      Proceed to Checkout
    </button>
  </div>
</div>

    </section>
  );
};

export default Cart;
