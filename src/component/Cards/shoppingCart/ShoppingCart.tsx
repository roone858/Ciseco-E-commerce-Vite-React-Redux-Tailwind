import CartCard from "../cartCard/CartCard";


const ShoppingCart = () => {
  return (
    <div className="overflow-hidden   duration-500 rounded-2xl shadow-lg  ring-1 ring-black/5 dark:ring-white/10">
      <div className="  relative bg-white dark:bg-neutral-800">
        <div className="max-h-[60vh] p-5 overflow-y-auto  no-scrollbar">
          <h3 className="text-xl font-semibold">Shopping cart</h3>
          <div className="divide-y  divide-slate-100 dark:divide-slate-700">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </div>
        <div className="bg-neutral-50 dark:bg-slate-900 p-5">
          <p className="flex justify-between font-semibold text-slate-900 dark:text-slate-100">
            <span>
              <span>Subtotal</span>
              <span className="block text-sm text-slate-500 dark:text-slate-400 font-normal">
                Shipping and taxes calculated at checkout.
              </span>
            </span>
            <span className="">$299.00</span>
          </p>
          <div className="flex space-x-2 mt-5">
            <a
              className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 flex-1 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
              href="/cart"
            >
              View cart
            </a>
            <a
              className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
              href="/checkout"
            >
              Check out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
