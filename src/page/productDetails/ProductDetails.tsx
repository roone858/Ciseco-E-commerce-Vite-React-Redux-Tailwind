import CollapsePlus from "../../component/Buttons/collapsePlus/CollapsePlus";
import {
  BagIcon,
  HartIcon,
  MinusIcon,
  NationwideIcon,
  NewIcon,
  PlusIcon,
  RefundIcon,
  ReturnIcon,
  ShippingIcon,
  StarIcon,
} from "../../component/icons/Icons";

const ProductDetails = () => {
  return (
    <div>
      <div className="lg:flex">
        <div className="w-full lg:w-[55%] ">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-16 relative">
              <img
                alt="product detail 1"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="w-full rounded-2xl object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdetail1.38019683.jpg&amp;w=3840&amp;q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div className="absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center  text-slate-900 dark:text-slate-300">
              <NewIcon />
              <span className="ml-1 leading-none">New in</span>
            </div>
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 nc-shadow-lg absolute right-3 top-3 ">
       <HartIcon isFav={true} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3 sm:gap-6 sm:mt-6 xl:gap-8 xl:mt-8">
            <div className="aspect-w-11 xl:aspect-w-10 2xl:aspect-w-11 aspect-h-16 relative">
              <img
                alt="product detail 1"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="w-full rounded-2xl object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: " 100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div className="aspect-w-11 xl:aspect-w-10 2xl:aspect-w-11 aspect-h-16 relative">
              <img
                alt="product detail 1"
                loading="lazy"
                className="w-full rounded-2xl object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdetail3.e0a5aca4.jpg&amp;w=3840&amp;q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
          <div className="space-y-7 2xl:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Heavy Weight Shoes
              </h2>
              <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
                <div className="">
                  <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold">
                    <span className="text-green-500 !leading-none">$112</span>
                  </div>
                </div>
                <div className="h-7 border-l border-slate-300 dark:border-slate-700"></div>
                <div className="flex items-center">
                  <a
                    href="#reviews"
                    className="flex items-center text-sm font-medium"
                  >
                    <StarIcon />
                    <div className="ml-1.5 flex">
                      <span>4.9</span>
                      <span className="block mx-2">·</span>
                      <span className="text-slate-600 dark:text-slate-400 underline">
                        142 reviews
                      </span>
                    </div>
                  </a>
                  <span className="hidden sm:block mx-2.5">·</span>
                  <div className="hidden sm:flex items-center text-sm">
                    <NewIcon />
                    <span className="ml-1 leading-none">New in</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div>
                <label htmlFor="">
                  <span className="text-sm font-medium">
                    Color:<span className="ml-1 font-semibold">Orange</span>
                  </span>
                </label>
                {/* pattern s*/}
                {/* <div className="flex mt-3">
                  <div className="relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer border-transparent">
                    <div
                      className="absolute inset-0.5 rounded-full overflow-hidden z-0 object-cover bg-cover"
                      style={{
                        backgroundImage:
                          "url(&quot;/_next/static/media/v6.8375417b.jpg&quot;);",
                      }}
                    ></div>
                  </div>
                  <div className="relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer border-transparent">
                    <div className="absolute inset-0.5 rounded-full overflow-hidden z-0 object-cover bg-cover"></div>
                  </div>
                  <div className="relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer border-primary-6000 dark:border-primary-500">
                    <div className="absolute inset-0.5 rounded-full overflow-hidden z-0 object-cover bg-cover"></div>
                  </div>
                  <div className="relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer border-transparent">
                    <div className="absolute inset-0.5 rounded-full overflow-hidden z-0 object-cover bg-cover"></div>
                  </div>
                  <div className="relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer border-transparent">
                    <div className="absolute inset-0.5 rounded-full overflow-hidden z-0 object-cover bg-cover"></div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="">
              <div>
                <div className="flex justify-between font-medium text-sm">
                  <label htmlFor="">
                    <span className="">
                      Size:<span className="ml-1 font-semibold">XS</span>
                    </span>
                  </label>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="##"
                    className="text-primary-6000 hover:text-primary-500"
                  >
                    See sizing chart
                  </a>
                </div>
                <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-3">
                  <div
                    className="relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 cursor-pointer bg-primary-6000 border-primary-6000 text-white hover:bg-primary-6000"
                  >
                    XS
                  </div>
                  <div
                    className="relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 cursor-pointer border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  >
                    S
                  </div>
                  <div
                    className="relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 cursor-pointer border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  >
                    M
                  </div>
                  <div
                    className="relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 cursor-pointer border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  >
                    L
                  </div>
                  <div
                    className="relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 cursor-pointer border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  >
                    XL
                  </div>
                  <div
                    className="relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 text-opacity-20 dark:text-opacity-20 cursor-not-allowed border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  >
                    2XL
                  </div>
                  <div
                    className="relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 text-opacity-20 dark:text-opacity-20 cursor-not-allowed border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  >
                    3XL
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-3.5">
              <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
                <div className="nc-NcInputNumber flex items-center justify-between space-x-5 w-full">
                  <div className="nc-NcInputNumber__content flex items-center justify-between w-[104px] sm:w-28">
                    <button
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
                      type="button"
                    >
                      <MinusIcon />
                    </button>
                    <span className="select-none block flex-1 text-center leading-none">
                      1
                    </span>
                    <button
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
                      type="button"
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl flex-1 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                <BagIcon />
                <span className="ml-3">Add to cart</span>
              </button>
            </div>
            <hr className=" 2xl:!my-10 border-slate-200 dark:border-slate-700" />
            <div className="w-full rounded-2xl space-y-2.5">
              <CollapsePlus
                title="Description"
                Content={
                  <div className="pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6">
                    Fashion is a form of self-expression and autonomy at a
                    particular period and place and in a specific context, of
                    clothing, footwear, lifestyle, accessories, makeup,
                    hairstyle, and body posture.
                  </div>
                }
              />
              <CollapsePlus
                title="Fabric + Care"
                Content={
                  <div className="p-4 pt-3 pl-0  last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6">
                    <ul className="list-disc list-inside leading-7">
                      <li>Made from a sheer Belgian power micromesh.</li>
                      <li>74% Polyamide (Nylon) 26% Elastane (Spandex)</li>
                      <li>Adjustable hook &amp; eye closure and straps</li>
                      <li>Hand wash in cold water, dry flat</li>
                    </ul>
                  </div>
                }
              />
              <CollapsePlus
                title="How it Fits"
                Content={
                  <div className="pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6">
                    Use this as a guide. Preference is a huge factor — if you're
                    near the top of a size range and/or prefer more coverage,
                    you may want to size up.
                  </div>
                }
              />
              <CollapsePlus
                title="FAQ"
                Content={
                  <div className="p-4 pt-3 pl-0 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6">
                    <ul className="list-disc list-inside leading-7">
                      <li>
                        All full-priced, unworn items, with tags attached and in
                        their original packaging are eligible for return or
                        exchange within 30 days of placing your order.
                      </li>
                      <li>
                        Please note, packs must be returned in full. We do not
                        accept partial returns of packs.
                      </li>
                      <li>
                        Want to know our full returns policies? Here you go.
                      </li>
                      <li>
                        Want more info about shipping, materials or care
                        instructions? Here!
                      </li>
                    </ul>
                  </div>
                }
              />
            </div>
            <div className="hidden xl:block">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                <div className="flex flex-col p-5 rounded-2xl bg-red-50 dark:bg-opacity-90">
                  <div>
                    <ShippingIcon />
                  </div>
                  <div className="mt-2.5">
                    <p className="font-semibold text-slate-900">
                      Free shipping
                    </p>
                    <p className="text-slate-500 mt-0.5 text-sm">
                      On orders over $50.00
                    </p>
                  </div>
                </div>
                <div className="flex flex-col p-5 rounded-2xl bg-sky-50 dark:bg-opacity-90">
                  <div>
                    <ReturnIcon />
                  </div>
                  <div className="mt-2.5">
                    <p className="font-semibold text-slate-900">
                      Very easy to return
                    </p>
                    <p className="text-slate-500 mt-0.5 text-sm">
                      Just phone number.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col p-5 rounded-2xl bg-green-50 dark:bg-opacity-90">
                  <div>
                    <NationwideIcon />
                  </div>
                  <div className="mt-2.5">
                    <p className="font-semibold text-slate-900">
                      Nationwide Delivery
                    </p>
                    <p className="text-slate-500 mt-0.5 text-sm">
                      Fast delivery nationwide.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col p-5 rounded-2xl bg-amber-50 dark:bg-opacity-90">
                  <div>
                    <RefundIcon />
                  </div>
                  <div className="mt-2.5">
                    <p className="font-semibold text-slate-900">
                      Refunds policy
                    </p>
                    <p className="text-slate-500 mt-0.5 text-sm">
                      60 days return for any reason
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
