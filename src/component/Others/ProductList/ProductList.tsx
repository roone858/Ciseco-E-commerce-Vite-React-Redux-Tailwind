import { Product } from "../../../types";
import ProductCard from "../../Cards/productCard/ProductCard";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
};

export default ProductList;
