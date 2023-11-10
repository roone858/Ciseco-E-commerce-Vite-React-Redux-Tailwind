import departmentImage from "../../../assets/department1.webp"
const DepartmentCard = () => {
  return (
    <a className="departmentCard " href="/collection">
      <div className="flex-1 relative w-full h-80 rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1 bg-indigo-100">
        <div className="pt-14">
          <div className="w-full h-full flex justify-center">
            <img
              alt=""
              loading="lazy"
              width="398"
              height="434"
   
              className="object-cover rounded-2xl"
              sizes="400px"
              src={departmentImage}
            />
          </div>
        </div>
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity rounded-2xl"></span>
      </div>
      <div className="mt-5 flex-1 text-center">
        <h2 className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
          Travel Kits
        </h2>
        <span className="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
          20+ categories
        </span>
      </div>
    </a>
  );
};

export default DepartmentCard;
