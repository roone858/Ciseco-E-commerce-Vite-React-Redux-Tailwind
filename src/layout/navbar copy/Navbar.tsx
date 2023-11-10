// import { useState } from "react";
import { CartIcon, SearchIcon, UserIcon } from "../../component/icons/Icons";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import ShoppingCart from "../../component/Cards/shoppingCart/ShoppingCart";
import { useState } from "react";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full z-40 ">
      <div className="relative z-10 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700">
        <div className=" px-6 md:px-8  lg:px-12">
          <div className="h-20 flex justify-between">
            {/* toggle button */}
            <div className="flex items-center lg:hidden flex-1">
              <button className="p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/*end toggle button */}
            {/*logo image */}
            <div className="lg:flex-1 flex items-center">
              <a
                className=" ttnc-logo inline-block text-slate-600 flex-shrink-0"
                href="/"
              >
                <img
                  alt="Logo"
                  width="162"
                  height="46"
                  decoding="async"
                  data-nimg="1"
                  className="block h-8 sm:h-10 w-auto dark:hidden"
                  style={{ color: "transparent" }}
                  src={logo}
                />
              </a>
            </div>
            {/*end logo image */}
            <div className="flex-[2] hidden lg:flex justify-center mx-4">
              <ul className="nc-Navigation flex items-center">
                <li className="menu-item flex-shrink-0">
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <a
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/collection"
                    >
                      Men
                    </a>
                  </div>
                </li>
                <li className="menu-item flex-shrink-0">
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <a
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/collection-2"
                    >
                      Women
                    </a>
                  </div>
                </li>
                <li className="menu-item flex-shrink-0">
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <a
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/collection"
                    >
                      Beauty
                    </a>
                  </div>
                </li>
                <li className="menu-item flex-shrink-0">
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <a
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/collection-2"
                    >
                      Sport
                    </a>
                  </div>
                </li>
                <li className="menu-item flex-shrink-0 menu-megamenu menu-megamenu--large">
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <a
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/collection"
                    >
                      Templates
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-1 -mr-1 h-4 w-4 text-slate-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="invisible sub-menu absolute top-full inset-x-0 transform z-50">
                    <div className="bg-white dark:bg-neutral-900 shadow-lg"></div>
                  </div>
                </li>
                <li
                  className="menu-item menu-dropdown relative"
              
                >
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <a
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/search"
                    >
                      Explore
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-1 -mr-1 h-4 w-4 text-slate-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
              <button className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center">
                <SearchIcon />
              </button>
              <div className="AvatarDropdown ">
                <div className="relative" >
                  <button
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center"
                    type="button"
                    aria-expanded="false"
                  >
                    <UserIcon />
                  </button>
                </div>
              </div>

              <div tabIndex={0} className="relative  group ">
                <button
                  className=" text-opacity-90   w-10 h-10 sm:w-12 sm:h-12 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative"
                  type="button"
                  onClick={() => setOpen(!open)}
                  onBlur={() => setOpen(false)}
                >
                  <CartIcon />
                  <div className=" cart w-3.5  h-3.5 absolute inline-flex items-center justify-center bg-sky-500  top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">
                    <span className="mt-[1px]">3</span>
                  </div>
                </button>

                <div
                  style={{ opacity: open ? "1" : "0" }}
                  className="duration-600 transition-all  absolute z-10 w-screen max-w-xs sm:max-w-md px-4 mt-3.5 -right-28 sm:right-0 sm:px-0  translate-y-0"
                >
                  <div
                    className="  duration-600 transition-all "
                    style={{ display: open ? "block" : "none" }}
                  >
                    <ShoppingCart />
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

export default NavbarComponent;
