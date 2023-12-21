import { useSelector } from "react-redux";
import { PlusIcon } from "../../icons/Icons";
import RatingInput from "../../Inputs/Rating";
import { State } from "../../../interfaces";
import { useRef, useState } from "react";
import axios from "../../../utils/axios";

const WriteReviewButton = ({ productId }: { productId: string }) => {
  // const dispatch = useDispatch();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [text, setText] = useState("");
  const [rate, setRate] = useState();
  const userId = useSelector((state: State) => state.user.data._id);
  const handleClickOpen = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleAdd = async () => {
    const newReview = {
      userId: userId,
      productId: productId,
      text: text,
      rate: rate,
    };
    if (rate && text)
      await axios.post("http://localhost:3000/reviews/", newReview);
  };
  return (
    <div>
      <button
        onClick={handleClickOpen}
        className=" relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6   disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-6000 "
      >
        {" "}
        <PlusIcon /> {"  "}Write a Review
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-5">
              <h2 className="inline font-semibold">Write Review</h2>

              <RatingInput setRate={setRate} />
            </div>

            <textarea
              className="block p-3 text-sm rounded-2xl border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white   mt-1.5"
              name="text"
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="Write your review here ..."
              // defaultValue={user?.bio}
            />
            {(!text || !rate) && (
              <span className="border rounded-2xl border-red-400 text-sm  bg-red-100 px-4 py-1 mt-3 text-red-700">
                {!text ? "This field is required" : "Rating is Required"}
              </span>
            )}
          </div>
          <div className="modal-action">
            <button onClick={handleAdd} className="btn">
              Add
            </button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default WriteReviewButton;
