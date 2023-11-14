import ProductPrice from "../../component/Badges/productPrice/ProductPrice";
import CollapsePlus from "../../component/Buttons/collapsePlus/CollapsePlus";
import {
  BagIcon,
  HartIcon,
  MinusIcon,
  NewIcon,
  PlusIcon,
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
                className="w-full rounded-2xl object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div className="absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center text-slate-900 dark:text-slate-300">
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
                  <ProductPrice price={112} />
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
                <div className="flex mt-3">
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
                </div>
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
                  <div
                    className="pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6"
                    id="headlessui-disclosure-panel-:rr:"
                    data-headlessui-state="open"
                  >
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
                  <div
                    className="pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6"
                    id="headlessui-disclosure-panel-:rr:"
                    data-headlessui-state="open"
                  >
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M2 8H8"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M2 11H6"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M2 14H4"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M13.7 4.44995L17.6799 6.74994L21.6199 4.45996"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M17.6799 10.82V6.73999"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M16.74 2.21L14.34 3.53996C13.8 3.83996 13.35 4.59995 13.35 5.21995V7.75999C13.35 8.37999 13.79 9.13998 14.34 9.43998L16.74 10.77C17.25 11.06 18.09 11.06 18.61 10.77L21.01 9.43998C21.55 9.13998 22 8.37999 22 7.75999V5.21995C22 4.59995 21.56 3.83996 21.01 3.53996L18.61 2.21C18.1 1.93 17.26 1.93 16.74 2.21Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M2.34998 15.45L6.31998 17.7499L10.27 15.46"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M6.31995 21.82V17.74"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15 3C16.95 8.84 16.95 15.16 15 21"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M12 7.5V16.5"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M17 3V7H21"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M22 2L17 7"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
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
