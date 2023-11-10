import { useSelector } from "react-redux";
import ProductCard from "../../Cards/productCard/ProductCard";

import SwiperWithHeader from "../../swiperWithHeader/SwiperWithHeader";
import { State } from "../../../types";

const ArrivalsSection = () => {
  const products = useSelector((state: State) => state.products.data);
  return (
    <div className="overflow-hidden">
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
