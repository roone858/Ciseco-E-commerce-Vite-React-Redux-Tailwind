import { useRef } from "react";
import SwiperGlide from "../swiper/SwiperGlide";
import DiscoverCard from "../discoverCard/DiscoverCard";
import shirt from "../../assets/yellow-shirt.webp";
import ball from "../../assets/ball.webp";
import dog from "../../assets/dog.webp";
import oil from "../../assets/oil.webp";
import SectionHeaderComponent from "../sectionHeaderComponent/SectionHeaderComponent";

const cards = [
  <DiscoverCard color={"rgb(254 252 232)"} image={shirt} />,
  <DiscoverCard color={"rgb(254 242 242)"} image={ball} />,
  <DiscoverCard color={"rgb(239 246 255)"} image={dog} />,
  <DiscoverCard color={"rgb(240 253 244)"} image={oil} />,
];
const DiscoverSection = () => {
  const swiperRef = useRef(null);
  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
  };
  return (
    <div className=" overflow-hidden " style={{ margin: "8rem 0rem" }}>
      <SectionHeaderComponent
        title="Discover more."
        subTitle=" Good things are waiting for you"
        swiperRef={swiperRef}
      />

      <div style={{ minWidth: "1400px" }}>
        <SwiperGlide slidesPerView={3} cards={cards} handleSwiper={handleSwiper} />
      </div>
    </div>
  );
};

export default DiscoverSection;
