import Container from "@/components/layout/Container";
import Marquee from "react-fast-marquee";

const TelephoneNumbers = () => {
  return (
    <div className="py-20">
      <Container>
        <div>
          <Marquee>
            <div className="flex items-center gap-6">
              <img
                src="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2021/05/20/1572681802.jpg"
                alt=""
                className="w-64 h-36 object-cover"
              />
              <img
                src="https://www.businessinsiderbd.com/media/imgAll/2023October/149964_13-2408131009.jpg"
                alt=""
                className="w-64 h-36 object-cover"
              />
              <img
                src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019April/dudok1-20190404181717.jpg"
                alt=""
                className="w-64 h-36 object-cover"
              />
              <img
                src="https://daily-destiny.com/wp-content/uploads/2024/05/logo-all-10.png"
                alt=""
                className="w-64 h-36 object-cover"
              />
              <img
                src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/1090.png"
                alt=""
                className="w-64 h-36 object-cover"
              />
            </div>
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default TelephoneNumbers;
