import { BiAlarm } from "react-icons/bi";
import { useSelector } from "react-redux";

import { Navbar, Footer, PreviewModal } from "@/features/home";


function BuyProducts() {
  const { productList } = useSelector((state) => state.productList);

  return (
    <>
      <Navbar />
      <h2 className="my-10 mb-4 font-bold xsm:text-center xsm:text-[1.5rem] lg:mx-20 lg:text-left lg:text-[2rem] xl:mx-16 2xl:mx-40">
        Shopping cart
      </h2>
      <div className="flex w-full flex-wrap items-start">
        {productList?.map((item, i) => (
          <PreviewModal
            key={i}
            courseList={item}
            wrapperClass={
              "3xl:mx-40 3xl:my-10 lg:w-[25%] lg:mx-20 3xl:border-[10px] xsm:w-[80%] xsm:mx-auto flex flex-wrap  border-white bg-white shadow-lg 3xl:block"
            }
            isCartAdded={true}
          />
        ))}
      </div>
    </>
  );
}
export default BuyProducts;
BuyProducts.isPublicRoute = true;
