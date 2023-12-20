import { useEffect, useState } from "react";
import { HartIcon } from "../../icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { State, WishlistItem } from "../../../interfaces";
import wishlistService from "../../../services/wishlist.service";

export const FavButton = ({ productID }: { productID: string }) => {
  const dispatch = useDispatch();
  const isInWish = useSelector(
    (state: State) =>
      !!state.wishlist.items.find(
        (item: WishlistItem) => item.productId === productID
      )
  );
  const [isFav, setIsFav] = useState(isInWish);
  const handleClick = async () => {
    // setIsFav(!isFav);
    if (isFav) wishlistService.removeFromWishlist(dispatch, productID);
    if (!isFav) wishlistService.addToWishlist(dispatch, productID);
    // setIsFav(!isFav);
  };
  useEffect(() => {
    setIsFav(isInWish);
  }, [isInWish]);
  return (
    <button
      onClick={handleClick}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 nc-shadow-lg absolute top-3 right-3 z-10"
    >
      <HartIcon isFav={isFav} />
    </button>
  );
};
