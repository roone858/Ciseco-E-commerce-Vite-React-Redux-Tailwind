import ProductCard from "../productCard/ProductCard";
import greenShirt from "../../assets/green-shirt.webp";
import sportOne from "../../assets/sport-1.webp";
import short from "../../assets/short.webp";
import sportTow from "../../assets/sport-2.webp";
import bag from "../../assets/bag.webp";
import SwiperWithHeader from "../swiperWithHeader/SwiperWithHeader";
const products = [
  {
    image: greenShirt,
    title: "Leather Gloves ",
    category: "Perfect mint green",
    price: 42,
    type: "clothing",
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: sportOne,
    title: "Manhattan Toy WRT ",
    category: "New design 2023",
    price: 30,
    type: "sport",
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: short,
    title: "Ella Leather Tote",
    category: "Cream pink",
    price: 145,
    type: "clothing",
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: sportTow,
    title: "Jump Rope Kids",
    category: "Classic green",
    type: "sport",
    price: 68,
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
  {
    image: bag,
    title: "Wool Cashmere Jacket",
    category: "Matte black",
    price: 12,
    type: "clothing",
    description: "lorem lorem lorem ",
    rating: { rate: 4.9, count: 98 },
  },
];

const ArrivalsSection = () => {
  return (
    <div className="overflow-hidden" >
      <SwiperWithHeader
        cards={products.map((product) => (
          <ProductCard product={product} />
        ))}
        title="New Arrivals."
        subTitle=" REY backpacks & bags"
        slidesPerView={4}
      />
    </div>
  );
};

export default ArrivalsSection;
