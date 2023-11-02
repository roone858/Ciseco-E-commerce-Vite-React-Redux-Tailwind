import { useState } from "react";
import FilterDropMenu from "../filterDropMenu/FilterDropMenu";
import FilterNav from "../filterNav/FilterNav";

import ProductCard from "../productCard/ProductCard";
import greenShirt from "../../assets/green-shirt.webp";
import sportOne from "../../assets/sport-1.webp";
import short from "../../assets/short.webp";
import sportTow from "../../assets/sport-2.webp";
import bag from "../../assets/bag.webp";
import ShowMoreSpanner from "../spanners/ShowMoreSpanner";
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
const TrendingSection = () => {
  const [filterDropdownToggle, setFilterDropdownToggle] = useState(true);
  return (
    <div className="relative py-32">
      <div className="flex flex-col relative mb-12">
        <div className="Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">
              What's trending now
            </h2>
            <span className="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
              Discover the most trending products in Ciseco.
            </span>
          </div>
        </div>
        <FilterNav
          toggle={filterDropdownToggle}
          setToggle={() => setFilterDropdownToggle(!filterDropdownToggle)}
        />

        <div
          className={
            !filterDropdownToggle
              ? "transition-all duration-500 relative -top-4   opacity-0"
              : "opacity-100 top-0 transition-all duration-500 "
          }
        >
          <div className={!filterDropdownToggle ? "hidden" : "block "}>
            <FilterDropMenu />
          </div>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <ShowMoreSpanner />
    </div>
  );
};

export default TrendingSection;
