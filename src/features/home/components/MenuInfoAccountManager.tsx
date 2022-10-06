import { BiStats } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { HiCog, HiHome } from "react-icons/hi";

export const MenuInfoAccountManager = [
  {
    name: "Home",
    icon: HiHome,
    imageType: "home-icon",
    url: "/home",
    id: 1,
  },

  {
    name: "Academic Enrichment Plans (AEPs)",
    icon: FaClipboardList,
    imageType: "list-icon",
    url: "/academic-list",
    id: 2,
  },

  {
    name: "AEP Status Tracker",
    icon: BiStats,
    imageType: "bars-icon",
    url: "/aep-tracker",
    id: 3,
  },

  {
    name: "Settings",
    icon: HiCog,
    imageType: "settings-icon",
    url: "/setting",
    id: 4,
  },
];
