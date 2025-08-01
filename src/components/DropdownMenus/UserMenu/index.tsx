import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../interfaces";
import { LogoutIcon, SpannerIcon } from "../../Icons";
import Avatar from "../../../assets/user-avatar.png";
import { Link } from "react-router-dom";
import authService from "../../../services/auth.service";

const UserDropdown = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user.data);
  const isLoading = useSelector((state: State) => state.user.isLoading);
  const logout = () => authService.logout(dispatch);

  if (isLoading || !user) {
    return (
      <div className="absolute z-10 w-screen max-w-[260px] px-4 -right-10 sm:right-0 sm:px-0 opacity-100 translate-y-0">
        <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative grid grid-cols-1 gap-6 bg-white dark:bg-neutral-800 py-7 px-6">
            <div className="flex items-center space-x-3">
              <SpannerIcon />{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="absolute z-10 w-screen max-w-[260px] px-4 -right-10 sm:right-0 sm:px-0 opacity-100 translate-y-0">
      <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="relative grid grid-cols-1 gap-6 bg-white dark:bg-neutral-800 py-7 px-6">
          <div className="flex items-center space-x-3">
            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-12 h-12 ring-1 ring-white dark:ring-neutral-900">
              <img
                alt="John Doe"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
                sizes="100px"
                src={
                  user?.image
                    ? "http://localhost:3000/users/profile-picture/" +
                      user?.image
                    : Avatar
                }
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
              <span className="wil-avatar__name">J</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-semibold">{user.name}</h4>
              <p className="text-xs mt-0.5">
                {/* {user?.address[0]?.city}, {user?.address[0]?.street} */}
              </p>
            </div>
          </div>
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <Link
            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            to="/account"
          >
            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium ">My Account</p>
            </div>
          </Link>
          <Link
            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            to="/checkout"
          >
            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 12.2H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8 16.2H12.38"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium ">My Order</p>
            </div>
          </Link>
          <Link
            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            to="/account/savelist"
          >
            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium ">Wishlist</p>
            </div>
          </Link>
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <Link
            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            to="/"
          >
            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.89999 4.92993L8.43999 8.45993"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.89999 19.07L8.43999 15.54"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19.05 19.07L15.51 15.54"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19.05 4.92993L15.51 8.45993"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium ">Help</p>
            </div>
          </Link>
          <a
            href="/"
            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            onClick={logout}
          >
            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
              <LogoutIcon />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium ">Log out</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
