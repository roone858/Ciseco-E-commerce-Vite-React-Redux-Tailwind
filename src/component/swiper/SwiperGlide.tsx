
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DiscoverCard from "../discoverCard/DiscoverCard";
import shirt from "../../assets/yellow-shirt.webp";
import ball from "../../assets/ball.webp";
import dog from "../../assets/dog.webp";
import oil from "../../assets/oil.webp";

export default function SwiperGlide({
  handleSwiper,
}: {
  handleSwiper: (swiper:any) => void;
}) {
  return (
    <>
      <Swiper
        onSwiper={handleSwiper}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <DiscoverCard color={"rgb(254 252 232)"} image={shirt} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <DiscoverCard color={" rgb(254 242 242)"} image={ball} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <DiscoverCard color={"rgb(239 246 255)"} image={dog} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <DiscoverCard color={"rgb(240 253 244)"} image={oil} />
        </SwiperSlide>

        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
      </Swiper>
    </>
  );
}

export const NextNavigationButton = ({ swiperRef }: {swiperRef:any}) => {
  return (
    <div>
      <button
        className="btn border-dark border-1 bg-transparent rounded-circle"
        onClick={() => swiperRef.current.slideNext()}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
export const PrevNavigationButton = ({ swiperRef }:{swiperRef:any}) => {
  return (
    <div>
      <button
        className="btn border-dark border-1 bg-transparent rounded-circle"
        onClick={() => swiperRef.current.slidePrev()}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    </div>
  );
};
