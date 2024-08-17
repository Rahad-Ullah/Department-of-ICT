import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const Banner = () => {
  return (
    <div>
      <div
        className={`p-2 py-8 md:py-24 bg-[url('/src/assets/images/Banner.jpg')] bg-no-repeat bg-cover bg-center bg-black bg-blend-overlay bg-opacity-20`}
      >
        <div className="">
          <h3 className="md:text-xl text-center text-white mb-6 md:mb-8">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
          </h3>
          <h1 className="text-2xl md:text-4xl text-center font-bold text-white mb-6 md:mb-8">
            তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
          </h1>
          {/* Search space */}
          <div className="flex justify-center items-center">
            <div
              tabIndex={0}
              className="flex flex-col md:flex-row gap-2 w-full max-w-xl items-center p-1 rounded-lg"
            >
              <Input
                type="search"
                placeholder="এখানে সার্চ করুন"
                className="max-w-xs md:max-w-md border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-white text-base"
              />

              <Button type="submit">
                <Search />
              </Button>

              {/* select category */}
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-[120px] border-none border border-l-2 focus:outline-none focus:ring-0 focus:ring-white text-white bg-gradient-to-r from-[#1abc55] to-[#159d47]">
                    <SelectValue placeholder="অফিসের ধরন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="মন্ত্রনালয়">মন্ত্রনালয়</SelectItem>
                      <SelectItem value="অধিদপ্তর">অধিদপ্তর</SelectItem>
                      <SelectItem value="বাতায়ন">বাতায়ন</SelectItem>
                      <SelectItem value="বিভাগীয় বাতায়ন">
                        বিভাগীয় বাতায়ন
                      </SelectItem>
                      <SelectItem value="জেলা বাতায়ন">জেলা বাতায়ন</SelectItem>
                      <SelectItem value="উপজেলা বাতায়ন">
                        উপজেলা বাতায়ন
                      </SelectItem>
                      <SelectItem value="ইউনিয়ন বাতায়ন">
                        ইউনিয়ন বাতায়ন
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
