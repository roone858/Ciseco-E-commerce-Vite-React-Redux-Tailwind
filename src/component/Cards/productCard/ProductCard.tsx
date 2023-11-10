import { useState } from "react";
import "./productCard.css";

import ProductSizes from "../../ChoicesList/productSizes/ProductSizes";
import ProductPatterns from "../../ChoicesList/productPatterns/ProductPatterns";
import ProductColors from "../../ChoicesList/productColors/ProductColors";
import ProductActions from "../../ChoicesList/productActions/ProductActions";
import ProductPrice from "../../Badges/productPrice/ProductPrice";
import { Product } from "../../../types";
import { HartIcon } from "../../icons/Icons";

const ProductCard = ({ product }: { product: Product }) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className=" nc-ProductCard relative flex flex-col bg-transparent   ">
      <a className="absolute inset-0" href="/product-detail"></a>
      <div className=" relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group">
        <a className="block" href="/product-detail">
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
        </a>
        <button
          onClick={() => setIsFav(!isFav)}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 nc-shadow-lg absolute top-3 right-3 z-10"
        >
       <HartIcon isFav={isFav}/>
        </button>
        <div className="assets absolute bottom-0 inset-x-1 space-x-1.5 flex justify-center opacity-0 invisible group-hover:bottom-4 group-hover:opacity-100 group-hover:visible transition-all">
          {product.category == "clothing" ? (
            <ProductSizes />
          ) : (
            <ProductActions />
          )}
        </div>
      </div>
      <div className="space-y-4 px-2.5 pt-[1.5rem] pb-2.5">
        {product.category == "sport" ? <ProductColors /> : <ProductPatterns />}
        <div>
          <h2 className="nc-ProductCard__title text-base font-semibold transition-colors">
            {product.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 ">
            {product.description}
          </p>
        </div>
        <div className="flex justify-between items-end ">
          <ProductPrice price={product.price} />
          <div className="flex items-center mb-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 pb-[1px] text-amber-400"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
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
