import Image from "next/image"

const CT = () => {
  return (
    <section className="text-gray-400 bg-Button body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className=" sm:text-xl text-[16px] font-semibold mb-12 font-poppins text-Button1 ">
      Categories
        </h1>
        <h1 className="text-[58px] mb-12 font-semibold font-inter text-primary ">
        Enhance Your 
          <br className="hidden lg:inline-block" />
          Music Experience
        </h1>
       
        {/* Time Duration */}
        <div className="flex justify-center items-center gap-4 mb-4 sm:mb-0">
            {/* Days */}
            <div className="p-2 text-center rounded-full bg-primary w-[86px] h-[84px]">
            <h2 className="title-font font-medium text-3xl text-Text2 ">05</h2>
            <p className="text-Text2">Days</p>
            </div>

            {/* Hours */}
            <div className="p-2 text-center rounded-full bg-primary w-[86px] h-[84px]">
            <h2 className="title-font font-medium text-3xl text-Text2 ">23</h2>
            <p className="text-Text2">Hours</p>
            </div>

            {/* Minutes */}
            <div className="p-2 text-center rounded-full bg-primary w-[86px] h-[84px]">
            <h2 className="title-font font-medium text-3xl text-Text2 ">59</h2>
            <p className="text-Text2">Minutes</p>
            </div>

            {/* Seconds */}
            <div className="p-2 text-center rounded-full bg-primary w-[86px] h-[84px]">
              <h2 className="title-font font-medium text-3xl text-Text2 ">35</h2>
              <p className="text-Text2">Seconds</p>
            </div>
          </div>
        <div className="flex justify-center mt-10">
          <button className="inline-flex text-primary bg-Button1 border-0 py-2 px-8 focus:outline-none hover:scale-110 rounded text-lg">
          Buy Now!
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src="/products/hero2.png"
          width={720}
          height={600}
        />
      </div>
    </div>
  </section>
  
  )
}

export default CT
