import { useState } from "react";
import "./productCard.css";
import ProductSizes from "../../ChoicesList/productSizes/ProductSizes";
// import ProductPatterns from "../../ChoicesList/productPatterns/ProductPatterns";
// import ProductColors from "../../ChoicesList/productColors/ProductColors";
import ProductActions from "../../ChoicesList/productActions/ProductActions";
import ProductPrice from "../../Badges/productPrice/ProductPrice";
import { Product } from "../../../types";
import { HartIcon, StarIcon } from "../../icons/Icons";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className=" nc-ProductCard relative flex flex-col bg-transparent   ">
      <Link
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        className="absolute inset-0"
        to={"/collection/" + product.id}
      ></Link>
      <div className=" relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group">
        <Link  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className="block" to={"/collection/" + product.id}>
          <div className="flex aspect-w-11 aspect-h-12 h-72 relative ">
            <img
              alt="product"
              loading="lazy"
              className="object-cover w-full h-full drop-shadow-xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
              src={product.image}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
        </Link>
        <button
          onClick={() => setIsFav(!isFav)}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 nc-shadow-lg absolute top-3 right-3 z-10"
        >
          <HartIcon isFav={isFav} />
        </button>
        <div className="assets absolute bottom-0 inset-x-1 space-x-1.5 flex justify-center opacity-0 invisible group-hover:bottom-4 group-hover:opacity-100 group-hover:visible transition-all">
          {product.category == "clothing" ? (
            <ProductSizes />
          ) : (
            <ProductActions productId={product.id} />
          )}
        </div>
      </div>
      <div className="space-y-4 px-2.5 pt-[1.5rem] pb-2.5">
        {/* {product.category == "sport" ? <ProductColors /> : <ProductPatterns />} */}
        <div className="h-16">
          <h2 className="nc-ProductCard__title text-base font-semibold transition-colors">
            {product.title.length > 50
              ? product.title.substring(0, 50) + "..."
              : product.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 ">
            {product.description.slice(0, 30) + "..."}
          </p>
        </div>
        <div className="flex justify-between items-end ">
          <ProductPrice price={product.price} />
          <div className="flex items-center mb-0.5">
            <StarIcon />
            <span className="text-sm ml-1 text-slate-500 dark:text-slate-400">
              {4.9} (98 reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
