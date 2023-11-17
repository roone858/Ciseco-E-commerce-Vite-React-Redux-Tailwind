import { useSelector } from "react-redux";
import FilterDropMenu from "../../component/DropdownMenus/filterDropMenu/FilterDropMenu";
import { State } from "../../types";
import ProductCard from "../../component/Cards/productCard/ProductCard";
import { useLocation } from "react-router-dom";
import CollectionsSections from "../../component/Sections/collectionsSection/CollectionsSections";
import PromoOne from "../../component/Promos/promoOne/PromoOne";

const CollectionPage = () => {
  const products = useSelector((state: State) => state.products.data);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  // const subCategory = searchParams.get("subcategory");

  return (
    <div className="my-28 px-12">
      <div className="max-w-screen-sm">
        <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {category ? (
            <>
              <span className="capitalize">{category}</span> collection
            </>
          ) : (
            "All collection"
          )}
        </h2>
        <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </span>
      </div>
      <FilterDropMenu />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-12">
        {category
          ? products.map(
              (product, key: number) =>
                product.category == category && (
                  <ProductCard key={key} product={product} />
                )
            )
          : products.map((product, key: number) => (
              <ProductCard key={key} product={product} />
            ))}
      </div>
      <hr className="border-slate-200 dark:border-slate-700"></hr>
      <CollectionsSections />
      <hr className="border-slate-200 dark:border-slate-700"></hr>
      <PromoOne />
    </div>
  );
};

export default CollectionPage;
