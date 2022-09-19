import Link from "next/link";
import { useEffect, useState } from "react";

import { GetUserType } from "@/features/helpers";
import {
  MenuInfoAccountManager,
  MenuInfoAdmin,
  MenuInfoSuperAdmin,
} from "@/features/home";

interface MenuInfoVal {
  name: string;
  image: string;
  imageType: string;
  url: string;
  id: number;
}

export function MenuBar() {
  const [menuItems, setMenuItems] = useState<MenuInfoVal[]>([]);

  useEffect(() => {
    const type = GetUserType();

    if (type === "super_admin") setMenuItems(MenuInfoSuperAdmin);
    else if (type === "admin") setMenuItems(MenuInfoAdmin);
    else {
      setMenuItems(MenuInfoAccountManager);
    }
  }, []);

  return (
    <div className="relative h-[140vh] w-[25%] bg-gray-100">
      {menuItems.map((item) => (
        <Link key={item.id} href={item.url}>
          <div
            key={item.id}
            className="hover:bg-gray flex h-16 w-full cursor-pointer items-center pl-5 text-gray-400 hover:border-r-2 hover:border-r-cyan-400 hover:text-black"
          >
            <img alt={item.imageType} className="h-6 w-6" src={item.image} />
            <div className="ml-4 text-lg font-medium">
              <p>{item.name}</p>
            </div>
          </div>
        </Link>
      ))}

      <Link href="/">
        <div className="absolute left-0 bottom-9 flex h-16 w-full cursor-pointer items-center pl-5 text-gray-400 hover:border-r-2 hover:border-r-cyan-400 hover:bg-gray-50 hover:text-black">
          <img alt="logout-icon" className="h-6 w-6" src="/images/logout.png" />
          <div className="ml-4 text-xl font-medium">
            <p>Logout</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
//new comment
