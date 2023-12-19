import { Product } from "../../../interfaces";
import ProductCard from "../../Cards/productCard/ProductCard";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.map((product, key: number) => (
        <ProductCard key={key} productId={product._id} />
      ))}
    </>
  );
};

export default ProductList;
