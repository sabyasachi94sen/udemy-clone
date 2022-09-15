import Link from "next/link";

export function MenuBar() {
  const MenuItems = [
    {
      name: "Home",
      image: "/images/home.png",
      imageType: "home-icon",
      url: "/home",
      id: 1,
    },
    {
      name: "Super Admin List",
      image: "/images/person.png",
      imageType: "person-icon",
      url: "/super-admin",
      id: 2,
    },
    {
      name: "Admin List",
      image: "/images/person.png",
      imageType: "person-icon",
      url: "/admin",
      id: 3,
    },
    {
      name: "Account Manager Roster",
      image: "/images/group.png",
      imageType: "grorup-icon",
      url: "/account-manager",
      id: 4,
    },
    {
      name: "Student Roster",
      image: "/images/hat.png",
      imageType: "hat-icon",
      url: "/student-roaster",
      id: 5,
    },

    {
      name: "Activity Database",
      image: "/images/furniture.png",
      imageType: "furniture-icon",
      url: "/activity-database",
      id: 6,
    },
    {
      name: "Academic Enrichment Plans (AEPs)",
      image: "/images/list.png",
      imageType: "list-icon",
      url: "/academic-list",
      id: 7,
    },
    // {
    //     name: "Plans (AEPs)",
    //     image:"/images/pen.png",
    //     imageType: "pen-icon",
    //     url: "/plans-aep",
    //     id: 8,
    // },
    {
      name: "AEP Status Tracker",
      image: "/images/bars.png",
      imageType: "bars-icon",
      url: "/aep-tracker",
      id: 8,
    },
    {
      name: "Analytics",
      image: "/images/analysisGraph.png",
      imageType: "analysisGraph-icon",
      url: "/analytics",
      id: 9,
    },

    {
      name: "Settings",
      image: "/images/setting.png",
      imageType: "settings-icon",
      url: "/setting",
      id: 10,
    },
  ];

  return (
    <div className="relative h-[140vh] w-[25%] bg-gray-100">
      {MenuItems.map((item) => (
        <Link href={item.url}>
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
