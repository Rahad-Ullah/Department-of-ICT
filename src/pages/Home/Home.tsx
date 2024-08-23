import Navbar from "@/components/shared/Navbar/Navbar";
import Banner from "./Banner";
import NoticeSection from "./NoticeSection";
import Services from "./Services";
import NewsSection from "./NewsSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import VideoSection from "./VideoSection";
import TelephoneNumbers from "./TelephoneNumbers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <NoticeSection/>
      <Services/>
      <NewsSection/>
      <FeatureSection/>
      <TelephoneNumbers/>
      <VideoSection/>
      <Footer/>
    </div>
  );
};

export default Home;
