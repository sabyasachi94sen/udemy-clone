import { Dialog, Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { HiBell, HiMenuAlt2, HiSearch, HiX } from "react-icons/hi";
import { useUserDetails } from "@/shared/services/settings.service";





import { useAuth } from "@/shared/stores/auth.context";


import { removeToken } from "@/features/helpers";
import {
  MenuInfoAccountManager,
  MenuInfoAdmin,
  MenuInfoSuperAdmin,
} from "@/features/home";
import { useCurrentPath } from "@/shared/hooks/use-current-path";
import { getToken } from "@/shared/utils";

const userNavigation = [
  
  { name: "Settings", href: "/setting" },
  { name: "Sign out", href: "#" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { page, perPage } = router.query;
  const userDetailsQuery=useUserDetails({ page })
 const [sidebarOpen, setSidebarOpen] = useState(false);
 const [bgColor,setBgColor]=useState("")

 const date=new Date()
 const year=date.getFullYear();
 const month=date.getMonth()+1;
 const day=date.getDate();
 const currentDate=year+"/"+month+"/"+day;
 const userDetails=useUserDetails()

 const { refetchAuthUser } = useAuth();




  

  const { isMatchCurrentPath } = useCurrentPath();

  const [menuItems, setMenuItems] = useState<
    | typeof MenuInfoSuperAdmin
    | typeof MenuInfoAdmin
    | typeof MenuInfoAccountManager
  >();

  useEffect(() => {
    const userType = getToken("userType");

    if (userType === "super_admin") setMenuItems(MenuInfoSuperAdmin);
    else if (userType === "admin") setMenuItems(MenuInfoAdmin);
    else {
      setMenuItems(MenuInfoAccountManager);
    }
  }, []);

  const handleMenuOperations=(menuName: string)=>{
    
    if(menuName==="Sign out"){
   
    removeToken()
    refetchAuthUser()
    router.push("/login")
    
    }
  }

 

  return (
    <div>
      <Transition.Root as={Fragment} show={sidebarOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <HiX aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <h1 className="text-2xl font-bold tracking-wide text-white">
                  PIPPAMS
                </h1>
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="space-y-1 px-2">
                  {menuItems?.map((item) => (
                    <Link key={item.name} href={{ pathname: item.url }}>
                      <div
                        className={clsx(
                          isMatchCurrentPath(item.url)
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "group flex cursor-pointer items-center rounded-md px-2 py-2 text-base font-medium",
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={clsx(
                            isMatchCurrentPath(item.url)
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-4 h-6 w-6 flex-shrink-0",
                          )}
                        />
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div aria-hidden="true" className="w-14 flex-shrink-0">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
          <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
            <h1 className="text-2xl font-bold tracking-wide text-white">
              PIPPAMS
            </h1>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              {menuItems?.map((item) => (
                <Link key={item.name} href={{ pathname: item.url }}>
                  <div
                    className={clsx(
                      isMatchCurrentPath(item.url)
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex cursor-pointer items-center rounded-md  px-2 py-2 text-sm font-medium text-white",
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={clsx(
                        isMatchCurrentPath(item.url)
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 h-6 w-6 flex-shrink-0",
                      )}
                    />
                    {item.name}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            type="button"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <HiMenuAlt2 aria-hidden="true" className="h-6 w-6" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              {/* <form action="#" className="flex w-full md:ml-0" method="GET">
                <label className="sr-only" htmlFor="search-field">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <HiSearch aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <input
                    className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                    id="search-field"
                    name="search"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form> */}
            </div>
            <div className="w-[30%] mt-3 h-[5vh] flex items-center font-bold text-gray-500 flex items-center justify-around">
              <div className="w-[auto] h-[5vh] flex items-center text-black">Hello, {userDetails?.data?.username}</div>
             
              </div>

            <div className="ml-4 w-[19%] justify-evenly flex items-center md:ml-6">
            <div className="font-bold text-gray-500">{currentDate}</div>
              <button
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                type="button"
              >
                <span className="sr-only">View notifications</span>
                <HiBell aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Profile dropdown */}

              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="focus:ring-primary-500 flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <div
                      
                      className={`h-10 w-10 rounded-full flex items-center text-[1.4rem] text-white justify-center ${userDetails?.data?.avatar_color==="#fffff"?`text-black`:`text-white`}`}
                      style={{backgroundColor: userDetails?.data?.avatar_color}}
                   
                    >
                      {userDetailsQuery?.data?.username[0]}
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <div onClick={()=>handleMenuOperations(item.name)}>
                            <a
                              className={clsx(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700",
                            )}
                              href={item.href}
                            
                          >
                              {item.name}
                            </a>
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
