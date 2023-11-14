import { useSelector } from "react-redux";
import ProductCard from "../../component/Cards/productCard/ProductCard";
import FilterNav from "../../component/ChoicesList/filterNav/FilterNav";
import FilterDropMenu from "../../component/DropdownMenus/filterDropMenu/FilterDropMenu";
import ShowMoreSpanner from "../../component/Spanners/ShowMoreSpanner";
import { RightArrowIcon, SearchIcon } from "../../component/icons/Icons";
import { Product, State } from "../../types";
import { useState } from "react";
import CollectionsSections from "../../component/Sections/collectionsSection/CollectionsSections";
import PromoOne from "../../component/Promos/promoOne/PromoOne";

const SearchPage = () => {
  const products = useSelector((state: State) => state.products.data);
  const [filterDropdownToggle, setFilterDropdownToggle] = useState(true);
  return (
    <div className="relative bg-white">
      <div className="HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-sky-50 dark:bg-neutral-800/20 "></div>
      <div className="container">
        <header className="max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7">
          <form className="relative w-full " method="post">
            <label
              htmlFor="search-input"
              className="text-neutral-500 dark:text-neutral-300"
            >
              <span className="sr-only">Search all icons</span>
              <input
                className="block w-full border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm font-normal pl-14 py-5 pr-5 md:pl-16 shadow-lg border-0 dark:border"
                id="search-input"
                placeholder="Type your keywords"
                type="search"
              />
              <button
                className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 
        text-slate-50 absolute right-2.5 top-1/2 transform -translate-y-1/2  w-11 h-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 dark:focus:ring-offset-0"
                type="submit"
              >
                <RightArrowIcon />
              </button>
              <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
                <SearchIcon />
              </span>
            </label>
          </form>
        </header>
      </div>
      <div className="p-10">
        <div className="relative py-12">
          <div className="flex flex-col relative mb-12">
            <FilterNav
              toggle={filterDropdownToggle}
              setToggle={() => setFilterDropdownToggle(!filterDropdownToggle)}
            />

            <div
              className={
                !filterDropdownToggle
                  ? "transition-all duration-500 relative -top-4   opacity-0"
                  : "opacity-100 top-0 transition-all duration-500 "
              }
            >
              <div className={!filterDropdownToggle ? "hidden" : "block "}>
                <FilterDropMenu />
              </div>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {products.slice(0, 8).map((product: Product, key: number) => (
              <ProductCard key={key} product={product} />
            ))}
          </div>
          <ShowMoreSpanner />
        </div>
        <hr className="border-slate-200 dark:border-slate-700" />

        <CollectionsSections />
        <hr className="border-slate-200 dark:border-slate-700" />
        <PromoOne />
      </div>
    </div>
  );
};

export default SearchPage;
