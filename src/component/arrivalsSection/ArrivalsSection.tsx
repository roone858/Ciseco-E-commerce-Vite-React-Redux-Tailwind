import { useRef } from "react";
import SwiperGlide from "../swiper/SwiperGlide";
import SectionHeaderComponent from "../sectionHeaderComponent/SectionHeaderComponent";
import ProductCard from "../productCard/ProductCard";
import greenShirt from "../../assets/green-shirt.webp";
import sportOne from "../../assets/sport-1.webp";
import short from "../../assets/short.webp";
import sportTow from "../../assets/sport-2.webp";
import bag from "../../assets/bag.webp";
const products = [
  {
    image: greenShirt,
    title: "Leather Gloves ",
    category: "Perfect mint green",
    price: 42,
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: sportOne,
    title: "Manhattan Toy WRT ",
    category: "New design 2023",
    price: 30,
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: short,
    title: "Ella Leather Tote",
    category: "Cream pink",
    price: 145,
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: sportTow,
    title: "Jump Rope Kids",
    category: "Classic green",
    price: 68,
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: bag,
    title: "Wool Cashmere Jacket",
    category: "Matte black",
    price: 12,
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
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

      <div>
        <SwiperGlide
          slidesPerView={4}
          cards={products.map((product) => (
            <ProductCard product={product} />
          ))}
          handleSwiper={handleSwiper}
        />
      </div>
    </div>
  );
};

export default ArrivalsSection;
