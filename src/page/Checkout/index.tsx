import { Link } from "react-router-dom";

import "./checkoutPage.css";

import ProductCard from "../../component/Cards/productCard/ProductCard";
import { useSelector } from "react-redux";
import { State } from "../../interfaces";

export default function CheckoutPage() {
  const products = useSelector((state: State) => state.products.data);
  return (
    <div className=" py-36 space-y-8 p-12 w-auto">
      <h1 className="text-black font-extrabold text-3xl  py-4 space-y-5">
        Shopping Cart
      </h1>
      <Link to={"/"} className="text-dark font-semibold ">
        {" "}
        Homepage{" "}
      </Link>
      <span>/</span>
      <Link to={"/collection"} className="text-dark font-semibold ">
        {" "}
        Clothing Categories{" "}
      </Link>
      <span>/</span>
      <span className="text-dark font-meduim  "> Shopping Cart</span>

      <hr />

      <div className=" home col-md-8  col-sm-12 flex space-x-20 space-y-12 border-r-black ">
        <div
          className="span-col-12 flex flex-col justify-center items-center  space-x-20 border-spacing-1  px-8 "
          id="pro"
        >
          {products.slice(10, 17).map((p, key: number) => (
            <div key={key}>
              <ProductCard productId={p._id} /> <hr />
            </div>
          ))}

          <hr />
        </div>
        <div className="inpu ">
          <h1 className="text-4xl py-1 font-bold">Contact Form</h1>

          <p className="font-semibold text-lg pl-3 py-2">First Name</p>
          <input
            className="block w-96 border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white 
                 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm 
                 font-normal  py-2  md:pl-4 shadow-lg border-0 dark:border"
            id="fristName"
            placeholder="first name"
            type="text"
          />
          <p className="font-semibold text-lg pl-3 py-2 space-x-4 px-4">
            Last Name
          </p>
          <input
            className="block w-96 border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white 
                        disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm 
                        font-normal  py-2 px-4  md:pl-4 shadow-lg border-0 dark:border"
            id="LastName"
            placeholder="Last name"
            type="text"
          />
          <p className="font-semibold text-lg pl-3 py-4"> address </p>
          <input
            className="block w-96 border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white 
                 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm 
                 font-normal  py-2  md:pl-4 shadow-lg border-0 dark:border"
            id="address"
            placeholder="EX - shehab ST. - Nasr City "
            type="text"
          />
          <p className="font-semibold text-lg pl-3 py-4"> City </p>
          <input
            className="block w-96 border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white 
                 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm 
                 font-normal  py-2  md:pl-4 shadow-lg border-0 dark:border"
            id="city"
            placeholder="EX - asyut / menya"
            type="text"
          />
          <form>
            <p className="font-semibold text-lg pl-3 py-4 ">Country</p>
            <select
              id="Country"
              name="Country"
              className="w-96 py-2 rounded-full pl-4 pr-4  dark:disabled:bg-neutral-800 disabled:bg-neutral-200"
            >
              <option value="Free palestine"> Free palestine </option>
              <option value="suadi arabia"> suadi arabia</option>
              <option value="egypt">Egypt</option>
              <option value="Sudan"> Sudan</option>
              <option value="iraq"> Iraq </option>
              <option value="Umman"> Umman </option>
              <option value="cairo"> Lebya </option>
              <option value="cairo"> kuwait </option>
              <option value="cairo"> Morroco</option>
            </select>
          </form>

          <p className="font-semibold text-lg pl-3 py-4"> Postal Code</p>
          <input
            className="block w-96 border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white 
                 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm 
                 font-normal  py-2  md:pl-4 shadow-lg border-0 dark:border"
            id="postalcode"
            placeholder="EX- 22222 "
            type="text"
          />
        </div>
      </div>

      <div className=" second span-col-12 space-y-12 px-24 pl-64 rounded-lg border border-slate-400  py-10 sticky border-l-slate-700 w-full">
        <h3
          className="font-extrabold from-neutral-950 pl-60 text-4xl"
          id="heed"
        >
          Order Summary
        </h3>
        <div className="front ">
          <div className="front-frist span-col-5 space-y-2 sticky">
            <h2 className="font-bold text-xl space-x-2 pl-4 ">
              {" "}
              Discound Code{" "}
            </h2>

            <div className="flex space-x-12">
              <input
                className="block w-1/2 border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white 
                 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm 
                 font-normal  py-4 pr-5 md:pl-8 shadow-lg border-0 dark:border"
                id="search-input"
                placeholder="add your discount code here"
                type="text"
              />
              <Link
                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-2 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-gray-300 text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
                to={""}
              >
                Apply
              </Link>
            </div>
            <div className="flex  " id="total">
              <div className=" py-2 pl-4">
                <h5 className="font-bold py-5">Subtotal</h5>
                <h5 className="font-bold py-5">Shpping estimate</h5>
                <h5 className="font-bold py-5">Tax estimate </h5>
                <h3 className="font-bold py-5">Order total</h3>
              </div>
              <hr />
              <div className="pl-96  py-2" id="lesrn">
                <p className="font-semibold  py-5">$ 249.00</p>
                <p className="font-semibold  py-5">$ 5.00</p>
                <p className="font-semibold  py-5">$ 24.90</p>
                <p className="font-bold py-5 ">$ 276.00</p>
              </div>
            </div>
          </div>
          <Link
            className="bbttn nc-Button relative h-auto inline-flex items-center
       justify-center rounded-full transition-colors text-sm
        sm:text-base font-medium py-6 sm:py-3.5 sm:px-6 decoration-0 w-3/4 pl-24
         ttnc-ButtonSecondary bg-black text-slate-100 dark:bg-slate-900 dark:text-slate-200 hover:bg-gray-700 dark:hover:bg-slate-800 flex-1 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 
      dark:focus:ring-offset-0  "
            to={"/"}
            id="bbtn"
          >
            Confirm Order
          </Link>
          <p>
            <i className="fa-solid fa-circle-exclamation"></i> Learn more{" "}
            <Link
              to={"/"}
              className="text-slate-950 text-lg font-bold space-x-2 py-2"
            >
              Taxes
            </Link>{" "}
            and{" "}
            <Link
              to={"/"}
              className="text-slate-950 text-lg font-bold space-x-4"
            >
              Shipping
            </Link>{" "}
            infomation
          </p>
        </div>
      </div>
    </div>
  );
}
