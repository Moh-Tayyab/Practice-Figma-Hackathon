import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section className="text-Text2 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-10"> 
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
         <Image
         src={'/services/Services.png'}
          alt="Services"
          width={50}
          height={50}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-Text2 text-lg title-font font-semibold mb-3">
          FREE AND FAST DELIVERY
          </h2>
          <p className="leading-[5px] text-Text2">
          Free delivery for all orders over $140
          </p> 
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
        <Image
         src={'/services/Services2.png'}
          alt="Services"
          width={50}
          height={50}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-Text2 text-lg  font-semibold mb-3">
          24/7 CUSTOMER SERVICE
          </h2>
          <p className="leading-[5px] text-Text2">
          Friendly 24/7 customer support
          </p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
        <Image
         src={'/services/Services3.png'}
          alt="Services"
          width={50}
          height={50}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-Text2 text-lg  font-semibold mb-3">
          MONEY BACK GUARANTEE
          </h2>
          <p className="leading-[5px] text-Text2">
          We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
    
  </div>
</section>

  )
}

export default Services
