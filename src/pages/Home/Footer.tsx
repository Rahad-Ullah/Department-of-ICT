import Container from "@/components/layout/Container";
import { Facebook, Youtube } from "lucide-react";

import logo from "/logo.png";
import ict_logo from "/ict_logo.svg";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="py-8 pt-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          <div className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Shaheed_Minar.svg"
              alt=""
              className="w-48"
            />
            <p>পরিকল্পনা ও বাস্তবায়নেঃ মন্ত্রীপরিষদ বিভাগ, এটুআই, বিসিসি</p>
            <p className="mt-2">সামাজিক যোগাযোগঃ</p>
            <div className="flex items-center gap-2 mt-2">
              <p className="p-2 bg-primary text-white inline-flex rounded-full">
                <Facebook className="" />
              </p>
              <p className="p-2 bg-primary text-white inline-flex rounded-full">
                <Youtube className="" />
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-6">
              <img src={ict_logo} className="w-20" />
              <img src={logo} className="w-12" />
            </div>
            <h3 className="md:text-xl text-center mb-6 md:mb-8">
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
            </h3>
            <h1 className="text-xl md:text-2xl text-center font-medium mb-6 md:mb-8">
              তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
            </h1>
            <ul className="flex flex-col items-center">
              <Button variant={"link"}>প্রথমপাতা</Button>
              <Button variant={"link"}>অধিনস্ত দপ্তর</Button>
              <Button variant={"link"}>ই-সেবা</Button>
              <Button variant={"link"}>গ্যালারী</Button>
              <Button variant={"link"}>যোগাযোগ/মতামত</Button>
            </ul>
          </div>
          <div className="">
            <p className="text-center mb-8">কারিগরী সহায়তাঃ</p>
            <div className="flex flex-col items-center gap-6 pb-4 justify-center">
              <img
                src="https://www.bssnews.net/assets/news_photos/2023/01/02/image-103092-1672672396.jpg"
                alt=""
                className="h-12"
              />
              <img
                src="https://seeklogo.com/images/C/cabinet-division-logo-56541AEA7E-seeklogo.com.png"
                alt=""
                className="h-12"
              />
              <img src={ict_logo} alt="" className="h-12" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
