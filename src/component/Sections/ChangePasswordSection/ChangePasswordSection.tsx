
const UpdatePasswordForm = () => {
  return (
 
      <div className="space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">Update your password</h2>
        <div className="max-w-xl space-y-6">
          <div>
            <label className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200" data-nc-id="Label">
              Current password
            </label>
            <input
              className="block w-full border border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
              type="password"
            />
          </div>
          <div>
            <label className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200" data-nc-id="Label">
              New password
            </label>
            <input
              className="block w-full border border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
              type="password"
            />
          </div>
          <div>
            <label className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200" data-nc-id="Label">
              Confirm password
            </label>
            <input
              className="block w-full border border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
              type="password"
            />
          </div>
          <div className="pt-2">
            <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-Buttonsky disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 dark:focus:ring-offset-0">
              Update password
            </button>
          </div>
        </div>
      </div>
  );
};

export default UpdatePasswordForm;
