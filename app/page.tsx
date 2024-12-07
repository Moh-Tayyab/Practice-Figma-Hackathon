// import BestSelling from "./component/BestSelling";
// import Catgory from "./component/Category";
// import Explore from "./component/Explore";
// import Benefit from "./component/Services";
// import Footer from "./component/Footer";
// import NewArrival from "./component/NewArrival";
// import CT from "./component/CT";
// import HeroSection from "./component/HeroSection";
// import ProductDetail from "./component/ProductDetail";
// import FlashSale from "./component/FlashSale";

import FullServices from "./component/FullServices";
import SmallCard from "./component/SmallCard";
import Story from "./component/Story";





//import Foryou from "./component/Foryou";
//import Whish from "./component/Whish";

export default function Home() {
  return (
   <main>
   <Story />
   <SmallCard />
   <FullServices />
   {/* <HeroSection />
    <FlashSale />
    <Catgory />
    <BestSelling />
    <CT />
    <Explore />
    <NewArrival />
   <Benefit />
   <Footer />
   <ProductDetail /> 
  {/* <Whish />
   <Foryou /> */}
   </main>
  );
}
