import { AiOutlineShop } from "react-icons/ai";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaSackDollar } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";

const SmallCard = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
           
            <AiOutlineShop className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              2.7K
            </h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <HiOutlineCurrencyDollar className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              1.3K
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <IoBagHandleOutline className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
            <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
            <p className="leading-relaxed">Files</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <FaSackDollar className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
            <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
            <p className="leading-relaxed">Places</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default SmallCard
