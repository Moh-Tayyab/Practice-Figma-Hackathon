import Image from "next/image"
//import Link from "next/link"

const NewArrival = () => {
  return (
    <section className="text-Text2 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
  <div className="flex w-full  flex-col">
  <div className="text-start mb-5 flex gap-5 justify-start items-start ">
          <h2 className="text-lg bg-secondary2 tracking-widest font-semibold w-[20px] h-[40px] rounded-md  sm:text-2xl"></h2>
          <h2 className="text-[16px] font-poppins text-secondary2 tracking-widest font-semibold sm:text-2xl">
          Featured
          </h2>
        </div>
      <h1 className="sm:text-3xl text-[36px] font-semibold font-inter 4% title-font text-Text2 lg:w-1/3 lg:mb-0 mb-12 ">
      New Arrival
      </h1>
     
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 pt-16">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/products/Frame 684.png"
            width={570}
            height={600}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/products/Frame 685.png"
            width={601}
            height={361}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/products/Frame 686.png"
            width={503}
            height={302}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/products/Frame 687.png"
            width={503}
            height={303}
          />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default NewArrival
