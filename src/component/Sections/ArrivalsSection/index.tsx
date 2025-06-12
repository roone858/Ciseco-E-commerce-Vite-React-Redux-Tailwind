import { useSelector } from "react-redux";

import SwiperWithHeader from "../../Sliders/SwiperWithHeader";
import { State } from "../../../interfaces";
import ProductCard from "../../Cards/ProductCard";

const ArrivalsSection = () => {
  const products = useSelector((state: State) => state.products.data);
  return (
    <div className="overflow-hidden">
      <SwiperWithHeader
        cards={products.map((product) => (
          <ProductCard productId={product._id} />
        ))}
        title="New Arrivals."
        subTitle=" REY backpacks & bags"
        slidesPerView={4}
      />
    </div>
  );
};

export default ArrivalsSection;
