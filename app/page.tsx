 import BestSelling from "./component/BestSelling";
import Catgory from "./component/Category";
import Explore from "./component/Explore";
import Benefit from "./component/Services";
import NewArrival from "./component/NewArrival";
import CT from "./component/CT";
import HeroSection from "./component/HeroSection";
import FlashSale from "./component/FlashSale";


export default function Home() {
  return (
   <main>
   
    <HeroSection />
    <FlashSale />
    <Catgory />
    <BestSelling />
    <CT />
    <Explore />
    <NewArrival />
   <Benefit />
  
   </main>
  );
}
