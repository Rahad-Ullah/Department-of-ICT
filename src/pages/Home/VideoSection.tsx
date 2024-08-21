import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const VideoSection = () => {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-3xl font-medium text-center my-8 mb-10">
          ভিডিওসমূহ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
          <iframe
            height={315}
            className="w-full"
            src="https://www.youtube.com/embed/MYinmQ1G24U?si=SsZ1FSAmXdi3AnAs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            height={315}
            className="w-full"
            src="https://www.youtube.com/embed/76Y2SeDRf2Y?si=-S-eYHFHbp9LLBsV"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/MYinmQ1G24U?si=hhWsjrPADX8pIgRc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-center items-center my-8">
          <Button className="flex items-center gap-2 md:text-base">
            সকল <MoveRight />{" "}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default VideoSection;
