import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { BookOpen, CircleArrowRight, Earth, Lightbulb, MessageCircleQuestion, MoveRight, ShieldQuestion, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-3xl font-medium text-center my-8 mb-10">সেবাসমূহ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to={'/'} className="flex justify-between items-center gap-4 p-4 rounded shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:shadow-[0px_7px_30px_0px_rgba(100,100,111,0.2)] transition bg-green-50">
            <div className="p-3 bg-primary text-white rounded-md">
              <BookOpen size={40}/>
            </div>
            <h3 className="text-xl">নীতিমালা ও প্রকাশনা</h3>
            <CircleArrowRight size={28} className="mr-2 text-primary"/>
          </Link>
          <Link to={'/'} className="flex justify-between items-center gap-4 p-4 rounded shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:shadow-[0px_7px_30px_0px_rgba(100,100,111,0.2)] transition bg-green-50">
            <div className="p-3 bg-primary text-white rounded-md">
              <Earth size={40}/>
            </div>
            <h3 className="text-xl">নাগরিক ই-সেবাসমূহ</h3>
            <CircleArrowRight size={28} className="mr-2 text-primary"/>
          </Link>
          <Link to={'/'} className="flex justify-between items-center gap-4 p-4 rounded shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:shadow-[0px_7px_30px_0px_rgba(100,100,111,0.2)] transition bg-green-50">
            <div className="p-3 bg-primary text-white rounded-md">
              <Users size={40}/>
            </div>
            <h3 className="text-xl">সিটিজেন চার্টার</h3>
            <CircleArrowRight size={28} className="mr-2 text-primary"/>
          </Link>
          <Link to={'/'} className="flex justify-between items-center gap-4 p-4 rounded shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:shadow-[0px_7px_30px_0px_rgba(100,100,111,0.2)] transition bg-green-50">
            <div className="p-3 bg-primary text-white rounded-md">
              <MessageCircleQuestion size={40}/>
            </div>
            <h3 className="text-xl">অভিযোগ প্রতিকার ব্যবস্থাপনা</h3>
            <CircleArrowRight size={28} className="mr-2 text-primary"/>
          </Link>
          <Link to={'/'} className="flex justify-between items-center gap-4 p-4 rounded shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:shadow-[0px_7px_30px_0px_rgba(100,100,111,0.2)] transition bg-green-50">
            <div className="p-3 bg-primary text-white rounded-md">
              <ShieldQuestion size={40}/>
            </div>
            <h3 className="text-xl">তথ্য অধিকার</h3>
            <CircleArrowRight size={28} className="mr-2 text-primary"/>
          </Link>
          <Link to={'/'} className="flex justify-between items-center gap-4 p-4 rounded shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:shadow-[0px_7px_30px_0px_rgba(100,100,111,0.2)] transition bg-green-50">
            <div className="p-3 bg-primary text-white rounded-md">
              <Lightbulb size={40}/>
            </div>
            <h3 className="text-xl">উদ্ভাবনী কার্যক্রম</h3>
            <CircleArrowRight size={28} className="mr-2 text-primary"/>
          </Link>
        </div>
        <div className="flex justify-center mt-10">
          <Button variant={"outline"} className="border-primary text-primary flex gap-2 text-base">সকল সেবা <MoveRight/></Button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
