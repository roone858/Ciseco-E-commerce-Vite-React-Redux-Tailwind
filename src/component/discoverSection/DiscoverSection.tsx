import DiscoverCard from "../discoverCard/DiscoverCard";
import shirt from "../../assets/yellow-shirt.webp";
import ball from "../../assets/ball.webp";
import dog from "../../assets/dog.webp";
import oil from "../../assets/oil.webp";
import SwiperWithHeader from "../swiperWithHeader/SwiperWithHeader";

const cards = [
  <DiscoverCard color={"rgb(254 252 232)"} image={shirt} />,
  <DiscoverCard color={"rgb(254 242 242)"} image={ball} />,
  <DiscoverCard color={"rgb(239 246 255)"} image={dog} />,
  <DiscoverCard color={"rgb(240 253 244)"} image={oil} />,
];
const DiscoverSection = () => {
  return (
    <div className=" overflow-hidden ">
      <SwiperWithHeader
        cards={cards}
        title="Discover more."
        subTitle=" Good things are waiting for you"
        slidesPerView={3}
      />
    </div>
  );
};

export default DiscoverSection;
