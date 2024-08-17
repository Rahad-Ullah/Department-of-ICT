import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ChevronRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const NoticeSection = () => {
  return (
    <div className="bg-gray-100 py-24">
      <Container>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="p-6 bg-white rounded space-y-6">
            <img
              src="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//Honorable%20Adviser%20%281%29.jpg"
              alt=""
              className="md:max-w-[280px]"
            />
            <div className="space-y-2">
              <div className="flex justify-center items-center">
                <h2 className="text-lg p-1 px-8 border-2 border-primary text-center">
                  মাননীয় উপদেষ্টা
                </h2>
              </div>
              <h3 className="text-center font-medium">জনাব মোঃ নাহিদ ইসলাম</h3>
              <p className="text-center">- তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ</p>
              <div className="flex justify-center">
                <Button
                  variant={"ghost"}
                  className="flex justify-center items-center gap-2 text-primary"
                >
                  বিস্তারিত <MoveRight />
                </Button>
              </div>
            </div>
          </div>
          {/* notice board */}
          <div className="bg-white p-6 rounded flex-1">
            <h1 className="text-3xl font-medium text-center my-8">
              নোটিশ বোর্ড
            </h1>
            <div>
              <ul>
                <Link to={''} className="flex items-center gap-2 md:pl-2 border-b-2 py-3 hover:text-primary">
                  {" "}
                  <ChevronRight className="min-w-6"  />
                  প্রজ্ঞাপন (স্মারক-৬৮, চাকরি স্থায়ীকরণ, প্রোগ্রামার ও সহকারী
                  প্রোগ্রামার, তথ্য ও যোগাযোগ বিভাগ
                </Link>
                <Link to={''} className="flex items-center gap-2 md:pl-2 border-b-2 py-3 hover:text-primary">
                  {" "}
                  <ChevronRight className="min-w-6"  />
                  অফিস আদেশ (দায়িত্ব বণ্টন)
                </Link>
                <Link to={''} className="flex items-center gap-2 md:pl-2 border-b-2 py-3 hover:text-primary">
                  {" "}
                  <ChevronRight className="min-w-6"  />
                  ২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি
                </Link>
                <Link to={''} className="flex items-center gap-2 md:pl-2 border-b-2 py-3 hover:text-primary">
                  {" "}
                  <ChevronRight className="min-w-6"  />
                  e-Tender For “Procurement of Food and Refreshment for Aspire
                  to Innovate (a2i) Program”
                </Link>
                <Link to={''} className="flex items-center gap-2 md:pl-2 border-b-2 py-3 hover:text-primary">
                  {" "}
                  <ChevronRight className="min-w-6"  />
                  অফিস আদেশ (অবমুক্তি, জনাব মির্জা মুরাদ হাসান বেগ, উপ-পরিচালক)
                </Link>
                <Link to={''} className="flex items-center gap-2 md:pl-2 border-b-2 py-3 hover:text-primary">
                  {" "}
                  <ChevronRight className="min-w-6"  />
                  Re-Request for Expression of Interest (Re-REOI) July 2024 to
                  December 2024
                </Link>
                <Link to={''} className="flex items-center gap-2 md:pl-2 border-b-2 py-3 hover:text-primary">
                  {" "}
                  <ChevronRight className="min-w-6"  />
                  প্রজ্ঞাপন (বেসরকারি হাই-টেক পার্ক ঘোষণা, Benli Electronic
                  Enterprise Co. Ltd.)
                </Link>
              </ul>
              <div className="flex justify-center mt-6">
                <Button className="flex justify-center items-center gap-2 text-base">
                  সকল <MoveRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NoticeSection;
