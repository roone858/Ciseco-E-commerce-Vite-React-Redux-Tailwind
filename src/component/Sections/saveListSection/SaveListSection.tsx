import { Product } from "../../../types";
import ProductCard from "../../Cards/productCard/ProductCard";

const SaveListSection = ({ products }: { products: Product[] }) => {
  return (
      <div className="space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          List of saved products
        </h2>
        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {products?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
  );
};

export default SaveListSection;
