import Navbar from "@/components/shared/Navbar/Navbar";
import Banner from "./Banner";
import NoticeSection from "./NoticeSection";
import Services from "./Services";
import NewsSection from "./NewsSection";
import FeatureSection from "./FeatureSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <NoticeSection/>
      <Services/>
      <NewsSection/>
      <FeatureSection/>
    </div>
  );
};

export default Home;
