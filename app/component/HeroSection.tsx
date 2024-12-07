import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";

const HeroSection = () => {
  return (
    <section className="text-Text2 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-row">
        {/* Text Side Section with Vertical Line */}
        <div className="flex flex-row items-start lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 hover:cursor-pointer">
          {/* Text Section */}
          <div>
            <div className="flex relative pb-2">
              <div className="flex-grow pl-4 flex flex-row text-center">
                <h2 className="font-medium title-font text-sm text-Text2 mb-1 tracking-wider hover:scale-100">
                  Woman’s Fashion
                </h2>
                <RiArrowDropRightLine className="w-6 h-6 ml-8" />
              </div>
            </div>

            <div className="flex-grow pl-4 flex flex-row text-center pb-2">
              <h2 className="font-medium title-font text-sm text-Text2 mb-1 tracking-wider">
                Men’s Fashion
              </h2>
              <RiArrowDropRightLine className="w-6 h-6 ml-10" />
            </div>

            <div className="flex-grow pl-4 pb-2">
              <h2 className="font-medium title-font text-sm text-Text2 mb-1 tracking-wider">
                Electronics
              </h2>
            </div>

            <div className="flex-grow pl-4 pb-2">
              <h2 className="font-medium title-font text-sm text-Text2 mb-1 tracking-wider">
                Home & Lifestyle
              </h2>
            </div>

            <div className="flex-grow pl-4 pb-2">
              <h2 className="font-medium title-font text-sm text-Text2 mb-1 tracking-wider">
                Medicine
              </h2>
            </div>

            <div className="flex-grow pl-4 pb-2">
              <h2 className="font-medium title-font text-sm text-Text2 mb-1 tracking-wider">
                Sports & Outdoor
              </h2>
            </div>

            <div className="flex-grow pl-4 pb-2">
              <h2 className="font-medium title-font text-sm text-Text2 mb-1 tracking-wider">
                Baby’s & Toys
              </h2>
            </div>

            <div className="flex-grow pl-4 pb-2">
              <h2 className="font-medium title-font text-sm text-Text2 mb-1 tracking-wider">
                Groceries & Pets
              </h2>
            </div>

            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-Text2 mb-1 tracking-wider">
                Health & Beauty
              </h2>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="w-[1px] h-full bg-gray-400 ml-6"></div>
        </div>

        {/* Image Side Section */}
        <Image
          className="lg:w-3/5 md:w-1/2 object-center rounded-lg md:mt-0 mt-12"
          src="/products/Frame 560.png"
          alt="step"
          width={892}
          height={334}
        />
      </div>
    </section>
  );
};

export default HeroSection;
