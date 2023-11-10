import DropdownButton from "../../Buttons/DropdownButton/DropdownButton";
import {
  
  CurrentColorIcon,
  DollarIcon,
  NoteIcon,
  SizingIcon,
  SortIcon,
} from "../../icons/Icons";

const FilterDropMenu = () => {
  return (
    <>
      <div className="w-full border-b border-neutral-200 dark:border-neutral-700 my-8"></div>
      <div className="flex lg:space-x-4">
        <div className="hidden lg:flex flex-1 space-x-4">
          <DropdownButton
            icon={<DollarIcon/> }
            title={"1$ - 500$"}
            list={["item 1", "item 2", "item 3"]}
          />
          <DropdownButton
            icon={<CurrentColorIcon />}
            title={"Colors"}
            list={["item 1", "item 2", "item 3"]}
          />
          <DropdownButton
            icon={<NoteIcon />}
            title={"Categories"}
            list={["item 1", "item 2", "item 3"]}
          />
          <DropdownButton
            icon={<SizingIcon />}
            title={"Sizes"}
            list={["item 1", "item 2", "item 3"]}
          />
        </div>
        <DropdownButton
            icon={<SortIcon />}
            title={"sort order"}
            list={["item 1", "item 2", "item 3"]}
          />
      </div>
    </>
  );
};

export default FilterDropMenu;
