import { BelowArrowIcon } from "../icons/Icons";

const DropdownButton = ({
  icon,
  title,
  list,
}: {
  icon: JSX.Element;
  title: string;
  list: string[];
}) => {
  return (
    <div className="relative">
      <details className="dropdown duration-300 ">
        <summary
          tabIndex={0}
          className="flex items-center duration-300 justify-center px-4 py-2 text-sm rounded-full border focus:outline-none select-none  !border-primary-500 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
        >
          {icon}
          <span className="ml-2">{title}</span>
          <BelowArrowIcon />
        </summary>

        <ul
          tabIndex={0}
          className="absolute z-40 duration-300 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md opacity-100 translate-y-0"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
            <div className="relative flex flex-col px-5 py-6 space-y-5">
              {list.map((ele: any) => (
                <li>
                  <a>{ele}</a>
                </li>
              ))}
            </div>
          </div>
        </ul>
      </details>
    </div>
  );
};

export default DropdownButton;
