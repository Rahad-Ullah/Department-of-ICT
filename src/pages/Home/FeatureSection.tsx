import Container from "@/components/layout/Container";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <div className="py-20 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-6 flex-col md:flex-row bg-white p-8 border rounded-lg shadow">
            <div className="bg-white p-4 rounded-md">
              <img
                src="https://cdn-icons-png.freepik.com/512/5875/5875271.png"
                alt=""
                className="w-48 h-48 object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl pb-1 mb-4 border-b-2 font-medium">
                বিজ্ঞপ্তি/আদেশ/পরিপত্র
              </h1>
              <ul className="space-y-2">
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />{" "}
                  প্রজ্ঞাপন/পরিপত্র
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  অফিস আদেশ/বিদেশ ভ্রমণের জিও/পাসপোর্ট অনাপত্তিপত্র
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  সংবাদ বিজ্ঞপ্তি
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  দরপত্র/নিয়োগ বিজ্ঞপ্তি
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex gap-6 flex-col md:flex-row bg-white p-8 border rounded-lg shadow">
            <div className="bg-white p-4 rounded-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKwIFxFs5pOQ7apuvzw0EC_UfTk4BgvTsUXQ&s"
                alt=""
                className="max-w-44"
              />
            </div>
            <div>
              <h1 className="text-xl pb-1 mb-4 border-b-2 font-medium">
                বার্ষিক কর্মসম্পাদন চুক্তি
              </h1>
              <ul className="space-y-2">
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />{" "}
                  নির্দেশিকা/পরিপত্র/এপিএ টিম/ফোকাল পয়েন্ট
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  বার্ষিক কর্মসম্পাদন চুক্তি ও ফলাফল
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  এপিএএমএস সফটওয়্যার লিংক
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex gap-6 flex-col md:flex-row bg-white p-8 border rounded-lg shadow">
            <div className="bg-white p-4 rounded-md">
              <img
                src="https://www.ru.ac.bd/wp-content/uploads/2022/10/nsi_logo.png"
                alt=""
                className="max-w-44"
              />
            </div>
            <div>
              <h1 className="text-xl pb-1 mb-4 border-b-2 font-medium">
                জাতীয় শুদ্ধাচার কৌশল
              </h1>
              <ul className="space-y-2">
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" /> উত্তম চর্চা
                  কর্মপরিকল্পনা সফটওয়্যার লিংক
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  নৈতিকতা কমিটি ও ফোকাল পয়েন্ট
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  আইন/বিধি/ নীতিমালা/নির্দেশিকা/পরিপত্র/প্রজ্ঞাপন/কর্মপরিকল্পনা
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex gap-6 flex-col md:flex-row bg-white p-8 border rounded-lg shadow">
            <div className="bg-white p-4 rounded-md">
              <img
                src="https://teachers.gov.bd/shared/contents/2023/September/13/photo/image_65065_1694570546.png"
                alt=""
                className="max-w-44"
              />
            </div>
            <div>
              <h1 className="text-xl pb-1 mb-4 border-b-2 font-medium">
                সেবা সহজিকরণ
              </h1>
              <ul className="space-y-2">
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />{" "}
                  প্রজ্ঞাপন/পরিপত্র/নীতিমালা/প্রকাশনা
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  বাস্তবায়িত ডিজিটাল সেবার তথ্য
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  সেবা সহজিকরণের দৃষ্টান্ত
                </Link>
                <Link
                  to={""}
                  className="hover:text-primary flex items-center gap-1"
                >
                  <ChevronRight size={16} className="min-w-4" />
                  সহজিকৃত সেবার তালিকা
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeatureSection;
