import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, MoveRight } from "lucide-react";

const NewsSection = () => {
  return (
    <div className="py-20 bg-slate-50">
      <Container>
        <div className="flex justify-center">
          <h1 className="text-3xl font-medium text-center my-8 mb-10 max-w-md">
            ডিজিটাল বাংলাদেশ বিনির্মানে তথ্য ও যোগাযোগ প্রযুক্তি
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <img
                src="https://i2.wp.com/www.idreameducation.org/blog/wp-content/uploads/2022/09/ict-lab-idream-education.jpg?fit=1024%2C576&ssl=1"
                alt=""
                className="h-40 object-cover rounded"
              />
              <p className="flex items-center gap-2 py-2"><Clock size={16}/> ০৬-০৫-২০২৪</p>
              <CardTitle>শিক্ষাক্ষেত্রে আইসিটি</CardTitle>
            </CardHeader>
            <CardContent>
              <p>শিক্ষাক্ষেত্রে তথ্য ও যোগাযোগ প্রযুক্তির ব্যবহার দিনদিন বেড়েই চলেছে। কিছুদিন আগেও সনাতনী শিক্ষা পদ্ধতি ছাড়া অন্য কোন শিক্ষা পদ্ধতির কথা চিন্তা করাও যেত না। </p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="flex items-center gap-2 w-full text-base">বিস্তারিত <MoveRight/></Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img
                src="https://www.scenerise.com/wp-content/uploads/2020/06/information-communication-technology-training.jpg"
                alt=""
                className="h-40 object-cover rounded"
              />
              <p className="flex items-center gap-2 py-2"><Clock size={16}/> ১২-০৬-২০২৪</p>
              <CardTitle>ব্যবসাতে আইসিটি</CardTitle>
            </CardHeader>
            <CardContent>
              <p>দিন বদলের সাথে সাথে ব্যবসা পরিচালনা এখন হয়ে উঠেছে আরও আধুনিক। ব্যবসার অধিকাংশ কাজ এখন প্রযুক্তি নির্ভর। আবার প্রযুক্তি পন্যের ব্যবসা...</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="flex items-center gap-2 w-full text-base">বিস্তারিত <MoveRight/></Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img
                src="https://teguar.com/wp-content/uploads/2020/07/medical-computer-for-surgery.jpg"
                alt=""
                className="h-40 object-cover rounded"
              />
              <p className="flex items-center gap-2 py-2"><Clock size={16}/> ০৬-০৫-২০২৪</p>
              <CardTitle>চিকিৎসাতে আইসিটি</CardTitle>
            </CardHeader>
            <CardContent>
              <p>ছোটবেলা থেকে আমরা দেখে এসেছি ডাক্তার চেম্বারে রোগী দেখছেন আর চেম্বারে রোগীদের বিশাল লাইন। কিন্তু সময়ের সাথে সাথে বদলে গেছে চিকিৎসা পদ্ধতি। এখন আর...</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="flex items-center gap-2 w-full text-base">বিস্তারিত <MoveRight/></Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img
                src="https://media.licdn.com/dms/image/C5612AQHca_foZHYj_Q/article-cover_image-shrink_720_1280/0/1597391855554?e=2147483647&v=beta&t=4GnEdChXfPYSJN-QAk4b90Yv9RjJzBNuI0FR6_BTTDg"
                alt=""
                className="h-40 object-cover rounded"
              />
              <p className="flex items-center gap-2 py-2"><Clock size={16}/> ০৬-০৫-২০২৪</p>
              <CardTitle>কৃষিক্ষেত্রে আইসিটি</CardTitle>
            </CardHeader>
            <CardContent>
              <p>কৃষকরা রোদে পুড়ে আর বৃষ্টিতে ভিজে আমাদের জন্য ফসল ফলান। কিন্তু এখনের আধুনিক প্রযুক্তি কমিয়ে দিয়েছে কৃষকের কায়িক শ্রম। সহজ করে দিয়েছে আমাদের ফসল...</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="flex items-center gap-2 w-full text-base">বিস্তারিত <MoveRight/></Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default NewsSection;
