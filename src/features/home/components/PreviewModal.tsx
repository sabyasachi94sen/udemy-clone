import router from "next/router";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { addToCartAction } from "@/action";

interface CourseListPropsType {
  wrapperClass: string;
  isCartAdded: boolean;
  courseList: {
    discounted_price: string;
    actual_price: string;
    discount: string;
    days_left: number;
  };
}

interface ReduxPropsType {
  productList?: [];
}

export function PreviewModal({
  courseList,
  wrapperClass,
  isCartAdded,
}: CourseListPropsType) {
  const dispatch = useDispatch();
  const { productList }  = useSelector(
    (state: ReduxPropsType) => state.productList,
  );

  

  return (
    <div className={wrapperClass} id="preview-modal">
      <img
        alt="python-course-img"
        className="w-full cursor-pointer"
        src="https://naijacrawl.com/blogpost/images/udemy-free-course-on-python-30-days-of-python-unlock-your-python-potential.jpg"
      />
      {!isCartAdded && (
        <AiFillPlayCircle className="absolute top-20 left-40 cursor-pointer text-[4rem]" />
      )}
      <div className="flex items-center justify-around px-5 pt-3 font-sans xsm:w-full sm:mx-auto sm:w-[60%] md:mx-auto md:w-[65%] lg:w-full 2xl:w-[80%]">
        <div>
          <span className="font-extrabold lg:text-[1rem] xl:text-[2rem]">
            ₹{courseList?.discounted_price}
          </span>
        </div>
        <div>
          <span className="font-bold text-gray-500 line-through md:text-[1.2rem] lg:text-[1rem] xl:text-[0.9rem]">
            ₹{courseList?.actual_price}
          </span>
        </div>
        <div>
          <span className="md:text-[1.2rem] lg:text-[1rem] xl:text-[1rem]">
            {courseList?.discount}% off
          </span>
        </div>
      </div>
      <div className="flex items-center justify-around px-5 text-sm xsm:mt-2 xsm:w-[90%] xsm:text-[1rem] sm:mx-auto sm:w-[45%] md:mx-auto md:w-[50%] md:text-[1.2rem] lg:w-full lg:text-[0.95rem] 2xl:w-[80%]">
        <BiAlarm className="text-[1.2rem] text-orange-800" />
        <p>
          <span className="font-bold text-orange-700">
            {courseList?.days_left} days
          </span>
          <span className="text-orange-600"> left at this price!</span>
        </p>
      </div>
      {!isCartAdded && (
        <div className="mt-4 flex justify-around px-5">
          <button
            className="h-[6vh] w-[75%] bg-[#a435f0] font-bold text-white hover:bg-[#6f2da8]"
            type="button"
            onClick={() => {
              productList?.length === 0
                ? dispatch(addToCartAction(courseList))
                : router.push("/buyProducts");
            }}
          >
            {productList?.length === 0 ? "Add to cart" : "Go to cart"}
          </button>
          <button
            className="flex h-[6vh] w-[15%] items-center justify-center border-[1px] border-black"
            type="button"
          >
            <BsHeart className="text-[1.5rem]" />
          </button>
        </div>
      )}
      <button
        className="mx-7 my-3 w-[85%] border-[1px] border-black bg-white py-3 font-bold text-black hover:bg-gray-200"
        type="button"
      >
        Buy now
      </button>
    </div>
  );
}
