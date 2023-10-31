import { useRef } from "react";
import SwiperGlide from "../swiper/SwiperGlide";

import SectionHeaderComponent from "../sectionHeaderComponent/SectionHeaderComponent";
import ProductCard from "../productCard/ProductCard";

const cards = [
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
];
const ArrivalsSection = () => {
  const swiperRef = useRef(null);
  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
  };
  return (
    <div className=" ps-5 overflow-hidden " style={{ margin: "8rem 0rem" }}>
      <SectionHeaderComponent
        title="New Arrivals."
        subTitle=" REY backpacks & bags"
        swiperRef={swiperRef}
      />

      <div >
        <SwiperGlide
          slidesPerView={4}
          cards={cards}
          handleSwiper={handleSwiper}
        />
      </div>
    </div>
  );
};

export default ArrivalsSection;
