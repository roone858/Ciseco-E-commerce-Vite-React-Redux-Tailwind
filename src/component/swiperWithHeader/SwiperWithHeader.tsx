import { useRef } from "react";
import SectionHeaderComponent from "../sectionHeaderComponent/SectionHeaderComponent";
import SwiperGlide from "../swiper/SwiperGlide";


const SwiperWithHeader = ({
  title,
  subTitle,
  slidesPerView,
  cards,
}: any) => {
  const swiperRef = useRef(null);
  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
  };
  return (
    <div className="mb-32">
      <SectionHeaderComponent
        title={title}
        subTitle={subTitle}
        swiperRef={swiperRef}
      />
      <SwiperGlide
        handleSwiper={handleSwiper}
        slidesPerView={slidesPerView}
        cards={cards}
      />
    </div>
  );
};

export default SwiperWithHeader;
