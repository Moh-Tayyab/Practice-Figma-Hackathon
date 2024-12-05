import BestSelling from "./component/BestSelling";
import Catgory from "./component/Catgory";
import Explore from "./component/Explore";
import TopHeader, { Header } from "./component/Header";
import Benefit from "./component/Services";

import Footer from "./component/Footer";

export default function Home() {
  return (
   <main>
    <TopHeader />
    <Header />
    <Explore />
    <Catgory />
    <BestSelling />
   <Benefit />
   <Footer />
   </main>
  );
}
