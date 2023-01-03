import cx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { useSelector } from "react-redux";

import { Input } from "@/shared/components";

import { MenuToggleIcon } from "./MenuToggleIcon";

export function Navbar() {
  const [deviceWidth, setDeviceWidth] = useState(null);
  const { productList } = useSelector((state) => state.productList);
  const router = useRouter();


  const searchBarSize = () => {
    if (deviceWidth > 800 && deviceWidth <= 900) return "w-5/12";
    if (deviceWidth > 900 && deviceWidth <= 1200) return "w-2/6";
    if (deviceWidth > 1200 && deviceWidth <= 1400) return "w-2/5";

    return "w-2/5";
  };

  useEffect(() => {
    window.onresize = function () {
      const screenWidth = window.screen.width;

      setDeviceWidth(screenWidth);
    };
  });

  return (
    <div className="sticky top-0 z-10 flex w-full items-center justify-around bg-white py-2">
      <MenuToggleIcon />

      <img
        alt="udemy-logo"
        className="cursor-pointer xsm:w-[20vw] md:h-[5vh] md:w-[14vw] lg:h-[10vh] lg:w-[8vw] lg:w-[12vw] 3xl:h-[8vh] 3xl:w-[6vw]"
        src="data:image/png;base64,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"
        onClick={() => router.push("/")}
      />
      <HiSearch className="text-[1.3rem] xsm:text-[2rem] sm:text-[2rem] md:hidden  3xl:hidden" />
      <a
        className="hover:text-cyan-500 xsm:hidden md:inline md:text-[1.1rem] lg:text-[0.9rem] 3xl:inline 3xl:text-sm"
        href=""
      >
        Categories
      </a>
      <div className={cx(searchBarSize(), "xsm:hidden md:inline 3xl:inline")}>
        <Input
          rounded
          leftAddOn={<HiSearch className="text-[1.3rem] text-gray-500" />}
          placeholder="Search for anything"
          width="w-full"
        />
      </div>
      {deviceWidth != 1024 && (
        <a
          className="text-sm hover:text-cyan-500 xsm:hidden 3xl:inline"
          href=""
        >
          Udemy Business
        </a>
      )}
      <a
        className="hover:text-cyan-500 xsm:hidden lg:inline lg:text-[0.9rem] 3xl:inline 3xl:text-sm"
        href=""
      >
        Teach on Udemy
      </a>
      <a
        className="hover:text-cyan-500 xsm:hidden md:inline  md:text-[1.1rem] lg:inline lg:text-[0.9rem]  3xl:inline 3xl:text-sm"
        href=""
      >
        My learning
      </a>

      <BsHeart className="cursor-pointer xsm:hidden lg:inline lg:text-[1.7rem] 3xl:inline 3xl:text-[1.3rem]" />
      <div>
        {productList?.length > 0 && (
          <span className="fixed z-10 h-[20px] w-[20px] rounded-[50%] bg-purple-500 text-center text-white  xsm:top-[0.8vw] xsm:right-[6vw] sm:top-[3.5vw] sm:right-[7.5vw] md:top-[1.7vw] md:right-[10vw] 3xl:top-[0.9vw]  3xl:right-[9vw]">
            {productList?.length}
          </span>
        )}
        <AiOutlineShoppingCart
          className="cursor-pointer xsm:text-[2rem] sm:text-[2rem] lg:inline 3xl:inline 3xl:text-[1.5rem]"
          onClick={() => router.push("/buyProducts")}
        />
      </div>

      <AiOutlineBell className="cursor-pointer xsm:hidden lg:inline lg:text-[1.9rem] 3xl:inline 3xl:text-[1.5rem]" />
      <div className="flex items-center justify-center rounded-[50%] bg-black  xsm:hidden md:flex  md:h-[5vw] md:w-[5vw] lg:h-[3vw] lg:w-[3vw]  3xl:flex 3xl:h-[2vw] 3xl:w-[2vw]">
        <span className="cursor-pointer text-white">SS</span>
      </div>
    </div>
  );
}

Navbar.isPublicRoute = true;
