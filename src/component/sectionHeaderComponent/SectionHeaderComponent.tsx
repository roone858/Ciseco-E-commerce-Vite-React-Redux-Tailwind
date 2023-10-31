import { NavigationButton } from "../swiper/SwiperGlide";
const SectionHeaderComponent = ({ title, subTitle, swiperRef }: any) => {
  return (
    <div className="header flex justify-between items-center pr-5 mb-5  ">
      <h2 style={{ color: "#111827", fontSize: "36px", fontWeight: 600 }}>
        {title}
        <span style={{ color: "#6b7280" }}>
          {subTitle}
        </span>
      </h2>
      <div className="navigation-buttons flex gap-4 ">
        <NavigationButton title="prev" swiperRef={swiperRef} />
        <NavigationButton title="next" swiperRef={swiperRef} />
      </div>
    </div>
  );
};

export default SectionHeaderComponent;
