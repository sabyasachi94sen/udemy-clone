import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import { GetUserType } from "@/features/helpers";
import {
  homeInfoAccountManager,
  homeInfoAdmin,
  homeInfoSuperAdmin,
  HomeItems,
  MenuBar,
  Navbar,
} from "@/features/home";

interface HomeItemsVal {
  activityname: string;
  activitystatus: string;
  image: StaticImageData;
  url: string;
  id: number;
}

function HomePage() {
  const [homeItems, setHomeItems] = useState<HomeItemsVal[]>([]);

  useEffect(() => {
    const userType = GetUserType();

    if (userType === "admin") setHomeItems(homeInfoAdmin);
    else if (userType === "super_admin") setHomeItems(homeInfoSuperAdmin);
    else setHomeItems(homeInfoAccountManager)
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex items-center">
        <MenuBar />
        <div className="-mt-48 flex h-screen w-[90%] flex-wrap items-center justify-center rounded-md bg-white">
          {homeItems.map((item) => (
            <HomeItems key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
HomePage.isPublicRoute = true;

// update comment
