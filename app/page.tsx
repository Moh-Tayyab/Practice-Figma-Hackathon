import BestSelling from "./component/BestSelling";
import Catgory from "./component/Catgory";
import Explore from "./component/Explore";
import Footer from "./component/Footer";
import TopHeader, { Header } from "./component/Header";
import Benefit from "./component/Services";

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
