import Image from "next/image";
import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";

// Define types for Card props
interface CardProps {
  name: string;
  position: string;
  imageSrc: string;
  twitter?: boolean;
  instagram?: boolean;
  linkedin?: boolean;
}

// Reusable Card Component
const Card: React.FC<CardProps> = ({ name, position, imageSrc, twitter, instagram, linkedin }) => (
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    {/* Card Link */}
    <Link
      href="#"
      className="block relative bg-gray-100 rounded overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      {/* Image */}
      <div className="flex items-center justify-center h-[430px]">
        <Image
          alt={`${name}'s photo`}
          className="object-contain"
          src={imageSrc}
          width={236}
          height={391}
        />
      </div>
    </Link>

    {/* Card Details */}
    <div className="mt-4 text-center">
      {/* Name */}
      <h2 className="text-Text2 title-font text-lg font-medium">{name}</h2>
      {/* Position */}
      <p className="text-Text2 text-[16px] font-medium mt-1">{position}</p>
      {/* Social Icons */}
      <div className="mt-2 flex justify-center gap-4 text-Button">
        {twitter && <FiTwitter className="w-6 h-6 cursor-pointer hover:scale-110" />}
        {instagram && <BsInstagram className="w-6 h-6 cursor-pointer hover:scale-110" />}
        {linkedin && <RiLinkedinLine className="w-6 h-6 cursor-pointer hover:scale-110" />}
      </div>
    </div>
  </div>
);

const FullServices = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center items-center">
          {/* Card 1 */}
          <Card
            name="Tom Cruise"
            position="Founder & Chairman"
            imageSrc="/image 46.png"
            twitter={true}
            instagram={true}
            linkedin={true}
          />
          {/* Card 2 */}
          <Card
            name="Emily Blunt"
            position="Managing Director"
            imageSrc="/image 46.png"
            twitter={true}
            instagram={true}
            linkedin={true}
          />
          {/* Card 3 */}
          <Card
            name="John Doe"
            position="Chief Operating Officer"
            imageSrc="/image 46.png"
            twitter={true}
            instagram={true}
            linkedin={true}
          />
        </div>
      </div>
    </section>
  );
};

export default FullServices;
