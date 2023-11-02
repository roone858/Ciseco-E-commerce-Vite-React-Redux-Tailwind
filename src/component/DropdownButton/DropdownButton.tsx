import { useState } from "react";
import { BelowArrowIcon } from "../icons/Icons";

const DropdownButton = ({
  icon,
  title,
 
}: {
  icon: JSX.Element;
  title: string;
  list: string[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="dropdown duration-300 ">
        <button
          // onClick={() => setOpen(!open)}
          onClick={() => setOpen(!open)}
          tabIndex={0}
          className="flex items-center  focus:border-sky-400 focus:ring-0 justify-center px-4 py-2 text-sm rounded-full border focus:outline-none select-none  !border-primary-500 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
          style={{ borderColor: !open ? "rgb(212 212 212)" : "rgb(56 189 248)" }}
        >
          {icon}
          <span className="ml-2">{title}</span>
          <BelowArrowIcon />
        </button>

        <div
          style={{ display: open ? "block" : "none" }}
          className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md opacity-100 translate-y-0"
          id="headlessui-popover-panel-:r1g:"
          data-headlessui-state="open"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
            <div className="relative flex flex-col px-5 py-6 space-y-5">
              <div className="flex text-sm sm:text-base ">
                <input
                  id="All Categories"
                  className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                  type="checkbox"
                  name="All Categories"
                />
                <label
                  htmlFor="All Categories"
                  className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                >
                  <span className="text-slate-900 dark:text-slate-100  ">
                    All Categories
                  </span>
                </label>
              </div>
              <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="New Arrivals"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                    type="checkbox"
                    name="New Arrivals"
                  />
                  <label
                    htmlFor="New Arrivals"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900 dark:text-slate-100  ">
                      New Arrivals
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Sale"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                    type="checkbox"
                    name="Sale"
                  />
                  <label
                    htmlFor="Sale"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900 dark:text-slate-100  ">
                      Sale
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Backpacks"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                    type="checkbox"
                    name="Backpacks"
                  />
                  <label
                    htmlFor="Backpacks"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900 dark:text-slate-100  ">
                      Backpacks
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Travel Bags"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                    type="checkbox"
                    name="Travel Bags"
                  />
                  <label
                    htmlFor="Travel Bags"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900 dark:text-slate-100  ">
                      Travel Bags
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Laptop Sleeves"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                    type="checkbox"
                    name="Laptop Sleeves"
                  />
                  <label
                    htmlFor="Laptop Sleeves"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900 dark:text-slate-100  ">
                      Laptop Sleeves
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Organization"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                    type="checkbox"
                    name="Organization"
                  />
                  <label
                    htmlFor="Organization"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900 dark:text-slate-100  ">
                      Organization
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Accessories"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                    type="checkbox"
                    name="Accessories"
                  />
                  <label
                    htmlFor="Accessories"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900 dark:text-slate-100  ">
                      Accessories
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonThird text-neutral-700 border border-neutral-200 dark:text-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                Clear
              </button>
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;
