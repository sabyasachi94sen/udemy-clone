import { AiFillDatabase } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { FaClipboardList, FaUserGraduate } from "react-icons/fa";
import { HiCog, HiHome } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { MdAnalytics } from "react-icons/md";

export const MenuInfoAdmin = [
  {
    name: "Home",
    icon: HiHome,
    imageType: "home-icon",
    url: "/home",
    id: 1,
  },

  {
    name: "Account Manager Roster",
    icon: IoIosPeople,
    imageType: "grorup-icon",
    url: "/account-manager",
    id: 2,
  },
  {
    name: "Student Roster",
    icon: FaUserGraduate,
    imageType: "hat-icon",
    url: "/student-roster",
    id: 3,
  },

  {
    name: "Activity Database",
    icon: AiFillDatabase,
    imageType: "furniture-icon",
    url: "/activity-database",
    id: 4,
  },
  {
    name: "Academic Enrichment Plans (AEPs)",
    icon: FaClipboardList,
    imageType: "list-icon",
    url: "/academic-list",
    id: 5,
  },

  {
    name: "AEP Status Tracker",
    icon: BiStats,
    imageType: "bars-icon",
    url: "/aep-tracker",
    id: 6,
  },
  {
    name: "Analytics",
    icon: MdAnalytics,
    imageType: "analysisGraph-icon",
    url: "/analytics",
    id: 7,
  },

  {
    name: "Settings",
    icon: HiCog,
    imageType: "settings-icon",
    url: "/setting",
    id: 8,
  },
];
