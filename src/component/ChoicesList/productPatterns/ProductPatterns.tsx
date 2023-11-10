import pattern from "../../../assets/pattern-1.jpg";
import pattern2 from "../../../assets/pattern-2.jpg";
import pattern3 from "../../../assets/pattern-3.jpg";
import pattern4 from "../../../assets/pattern-4.jpg";
import pattern5 from "../../../assets/pattern-5.jpg";
const ProductPatterns = () => {
  return (
    <div className="flex ">
      <div className="p-[4px] border  rounded-full">
        <div
          className="relative w-11 h-5  rounded-full overflow-hidden z-10 border cursor-pointer dark:border-slate-300"
          title="Black"
        >
          <img className="absolute overflow-hidden z-0 " src={pattern} />
        </div>
      </div>
      <div className="p-[4px]">
        <div
          className="relative w-11 h-5  rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
          title="White"
        >
          <img className="absolute overflow-hidden z-0 " src={pattern2} />
        </div>
      </div>
      <div className="p-[4px]">
        <div
          className="relative w-11 h-5  rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
          title="Orange"
        >
          <img className="absolute overflow-hidden z-0 " src={pattern3} />
        </div>
      </div>
      <div className="p-[4px]">
        <div
          className="relative w-11 h-5  rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
          title="Sky Blue"
        >
          <img className="absolute overflow-hidden z-0 " src={pattern4} />
        </div>
      </div>
      <div className="p-[4px]">
        <div
          className="relative w-11 h-5  rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
          title="Natural"
        >
          <img className="absolute overflow-hidden z-0 " src={pattern5} />
        </div>
      </div>
    </div>
  );
};

export default ProductPatterns;
