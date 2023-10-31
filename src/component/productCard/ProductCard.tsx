import greenShirt from "../../assets/green-shirt.webp";
import test from "../../assets/clothing-color.jpg";
const ProductCard = () => {
  return (
    <div className="nc-ProductCard relative flex flex-col bg-transparent   ">
      <a className="absolute inset-0" href="/product-detail"></a>
      <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group">
        <a className="block" href="/product-detail">
          <div className="flex aspect-w-11 aspect-h-12 h-72 relative ">
            <img
              alt="product"
              loading="lazy"
              className="object-cover w-full h-full drop-shadow-xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
              src={greenShirt}
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
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 nc-shadow-lg absolute top-3 right-3 z-10">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
              stroke="#ef4444"
              fill="#ef4444"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <div className="absolute bottom-0 inset-x-1 space-x-1.5 flex justify-center opacity-0 invisible group-hover:bottom-4 group-hover:opacity-100 group-hover:visible transition-all">
          <div className="nc-shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
            XS
          </div>
          <div className="nc-shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
            S
          </div>
          <div className="nc-shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
            M
          </div>
          <div className="nc-shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
            L
          </div>
          <div className="nc-shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
            XL
          </div>
        </div>
      </div>
      <div className="space-y-4 px-2.5 pt-[1.5rem] pb-2.5">
        <div className="flex ">
          <div
            className="relative w-11 h-6  rounded-full overflow-hidden z-10 border cursor-pointer border-black dark:border-slate-300"
            title="Black"
          >
            <img className="absolute overflow-hidden z-0 " src={test} />
          </div>
          <div
            className="relative w-11 h-6  rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
            title="White"
          >
            <img
              className="absolute overflow-hidden z-0 "
             src={test}
            />
          </div>
          <div
            className="relative w-11 h-6  rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
            title="Orange"
          >
            <img className="absolute overflow-hidden z-0 " src={test} />
          </div>
          <div
            className="relative w-11 h-6  rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
            title="Sky Blue"
          >
            <img className="absolute overflow-hidden z-0 " src={test} />
          </div>
          <div
            className="relative w-11 h-6  rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
            title="Natural"
          >
            <img className="absolute overflow-hidden z-0 " src={test} />
          </div>
        </div>
        <div>
          <h2 className="nc-ProductCard__title text-base font-semibold transition-colors">
            Leather Gloves
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 ">
            Perfect mint green
          </p>
        </div>
        <div className="flex justify-between items-end ">
          <div className="">
            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
              <span className="text-green-500 !leading-none">$42</span>
            </div>
          </div>
          <div className="flex items-center mb-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 pb-[1px] text-amber-400"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-sm ml-1 text-slate-500 dark:text-slate-400">
              4.9 (98 reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
