import { BiStats } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { HiCog, HiHome } from "react-icons/hi";

export const MenuInfoSuperAdmin = [
  {
    name: "Home",
    icon: HiHome,
    imageType: "home-icon",
    url: "/home",
    id: 1,
  },
  {
    name: "Super Admin Roster",
    icon: BiStats,
    imageType: "person-icon",
    url: "/super-admin",
    id: 2,
  },
  {
    name: "Admin Roster",
    icon: BiStats,
    imageType: "person-icon",
    url: "/admin",
    id: 3,
  },
  {
    name: "Account Manager Roster",
    icon: BiStats,
    imageType: "grorup-icon",
    url: "/account-manager",
    id: 4,
  },
  {
    name: "Student Roster",
    icon: BiStats,
    imageType: "hat-icon",
    url: "/student-roaster",
    id: 5,
  },

  {
    name: "Activity Database",
    icon: BiStats,
    imageType: "furniture-icon",
    url: "/activity-database",
    id: 6,
  },
  {
    name: "Academic Enrichment Plans (AEPs)",
    icon: FaClipboardList,
    imageType: "list-icon",
    url: "/academic-list",
    id: 7,
  },

  {
    name: "AEP Status Tracker",
    icon: BiStats,
    imageType: "bars-icon",
    url: "/aep-tracker",
    id: 8,
  },
  {
    name: "Analytics",
    icon: BiStats,
    imageType: "analysisGraph-icon",
    url: "/analytics",
    id: 9,
  },

  {
    name: "Settings",
    icon: HiCog,
    imageType: "settings-icon",
    url: "/setting",
    id: 10,
  },
];
