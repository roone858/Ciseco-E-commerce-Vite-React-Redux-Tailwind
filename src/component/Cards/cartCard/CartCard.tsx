import ProductPrice from "../../Badges/productPrice/ProductPrice";
import image from "../../../assets/ball.webp";

const CartCard = () => {
  return (
    <div className="flex py-5 last:pb-0">
      <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
        <img
          alt="Rey Nylon Backpack"
          className="h-full w-full object-contain object-center"
          sizes="100vw"
          src={image}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
        />
        <a className="absolute inset-0" href="/product-detail"></a>
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between ">
            <div>
              <h3 className="text-base font-medium ">
                <a href="/product-detail">Rey Nylon Backpack</a>
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                <span>Natural</span>
                <span className="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                <span>XL</span>
              </p>
            </div>
            <div className="mt-0.5">
              <ProductPrice price={45}/>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500 dark:text-slate-400">Qty 1</p>
          <div className="flex">
            <button
              type="button"
              className="font-medium text-sky-600 dark:text-primary-500 "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
