import Navbar from "@/components/shared/Navbar/Navbar";
import Banner from "./Banner";
import NoticeSection from "./NoticeSection";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <NoticeSection/>
      <Services/>
    </div>
  );
};

export default Home;
