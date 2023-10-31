import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function SwiperGlide({
  handleSwiper,
  cards,
  slidesPerView
}: {
  handleSwiper: (swiper: any) => void;
  cards: JSX.Element[];
  slidesPerView:number
}) {
  return (
    <>
      <Swiper
        onSwiper={handleSwiper}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {cards.map((card: any) => (
          <SwiperSlide> {card}</SwiperSlide>
        ))}

        <SwiperSlide> </SwiperSlide>
        <SwiperSlide> </SwiperSlide>
      </Swiper>
    </>
  );
}

export const NavigationButton = ({
  swiperRef,
  title,
}: {
  swiperRef: any;
  title: "next" | "prev";
}) => {
  return (
    <div>
      <button
        className="w-10 h-10  border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center border-2"
        onClick={() =>
          title == "next"
            ? swiperRef.current.slideNext()
            : swiperRef.current.slidePrev()
        }
      >
        <i
          className={
            title == "next"
              ? "fa-solid fa-arrow-right"
              : "fa-solid fa-arrow-left"
          }
        ></i>
      </button>
    </div>
  );
};
