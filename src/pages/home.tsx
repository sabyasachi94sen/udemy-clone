import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { getLocalStorage } from "@/features/helpers";
import { useRouter } from "next/router";

import { GetUserType } from "@/features/helpers";
import {
  homeInfoAccountManager,
  homeInfoAdmin,
  homeInfoSuperAdmin,
  HomeItems,
} from "@/features/home";

interface HomeItemsVal {
  activityname: string;
  activitystatus: string;
  image: StaticImageData;
  url: string;
  id: number;
}

export default function HomePage() {
  const [homeItems, setHomeItems] = useState<HomeItemsVal[]>([]);
  const router=useRouter()

  useEffect(() => {
    if(getLocalStorage("token")==null)
    router.push("/login")

    const userType = GetUserType();

    if (userType === "admin") setHomeItems(homeInfoAdmin);
    else if (userType === "super_admin") setHomeItems(homeInfoSuperAdmin);
    else setHomeItems(homeInfoAccountManager);
  }, []);

  return (
    <div className="py-6">
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div> */}
      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-12 gap-6 rounded-md bg-white ">
          {homeItems.map((item) => (
            <HomeItems key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
    // <div>
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    //     <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
    //   </div>
    //   {/* <Navbar /> */}
    //   <div className="flex items-center">
    //     {/* <MenuBar /> */}
    //     <div className="flex h-screen w-[90%] flex-wrap justify-center rounded-md bg-white">
    //       {homeItems.map((item) => (
    //         <HomeItems key={item.id} {...item} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
