import Navbar from "@/components/shared/Navbar/Navbar";
import Banner from "./Banner";
import NoticeSection from "./NoticeSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <NoticeSection/>
    </div>
  );
};

export default Home;
