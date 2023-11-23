import { useSelector } from "react-redux";
import { AddressIcon, EmailIcon, NoteIcon, PhoneIcon } from "../../icons/Icons";
import { State } from "../../../types";

const AccountInformationForm = () => {
  const customer = useSelector((state: State) => state.login.user);
  return (
    <div className="nc-AccountPage">
      <div className="space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Account information
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 flex items-start">
            <div className="relative rounded-full overflow-hidden flex">
              <img
                alt="avatar"
                width="128"
                height="128"
                className="w-32 h-32 rounded-full object-cover z-0"
                src={
                  "http://127.0.0.1:5173/src/assets/customers/" +
                  customer?.image
                }
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="mt-1 text-xs">Change Image</span>
              </div>
              <input
                className="absolute inset-0 opacity-0 cursor-pointer"
                type="file"
              />
            </div>
          </div>
          <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Full name
              </label>
              <input
                className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                type="text"
                defaultValue={customer?.name}
              />
            </div>
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Email
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 border dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <EmailIcon />
                </span>
                <input
                  className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  placeholder="example@email.com"
                  defaultValue={customer?.email}
                  type="text"
                />
              </div>
            </div>
            <div className="max-w-lg">
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Date of birth
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 border dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <NoteIcon />
                </span>
                <input
                  className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  type="date"
                  value="1990-07-22"
                />
              </div>
            </div>
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Address
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 border dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <AddressIcon />
                </span>
                <input
                  className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  type="text"
                  defaultValue={
                    customer?.address.street + " " + customer?.address.city
                  }
                />
              </div>
            </div>
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Gender
              </label>
              <select className="px-3 h-11 mt-1.5 block w-full text-sm rounded-2xl border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Phone number
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 border dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <PhoneIcon />
                </span>
                <input
                  className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  type="text"
                  defaultValue={customer?.phone}
                />
              </div>
            </div>
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                About you
              </label>
              <textarea
                className="block w-full p-3 text-sm rounded-2xl border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1.5"
                rows={4}
              >
                ...
              </textarea>
            </div>
            <div className="pt-2">
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-Buttonsky disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 dark:focus:ring-offset-0">
                Update account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformationForm;
