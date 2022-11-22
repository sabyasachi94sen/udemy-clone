import activityDB from "public/images/activities.png";

import aep from "public/images/aeps.png";
import analytics from "public/images/analytics.png";
import manager from "public/images/account-manager.png";
import roaster from "public/images/students.png";
import statusTracker from "public/images/action-tracker.png";




export const homeInfoAdmin = [
 
    {
      activityname: "Account Manager Roster",
      activitystatus: "View and update roster of account managers",
      image: manager,
      url: "/account-manager",
      id: 1,
    },
    {
      activityname: "Student Roster",
      activitystatus: "View and update roster of students",
      image: roaster,
      url: "/student-roster",
      id: 2,
    },
    {
      activityname: "Activity Database",
      activitystatus: "View and update activities and action maps",
      image: activityDB,
      url: "/activity-database",
      id: 3,
    },

    {
      activityname: "Academic Enrichment Plans (AEPs)",
      activitystatus: "View and update student AEPs",
      image: aep,
      url: "/academic-list",
      id: 4,
    },

    {
      activityname: "Action Tracker",
      activitystatus: "View and update student progress",
      url: "/aep-tracker",
      image: statusTracker,

      id: 5,
    },

    {
      activityname: "Analytics",
      activitystatus: "View analytics for students and staff",
      image: analytics,
      url: "/analytics",
      id: 6,
    },
  ];