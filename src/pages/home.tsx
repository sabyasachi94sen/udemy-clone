import { useState } from "react";

import { HomeItems, MenuBar ,Navbar } from "@/features/home"

import activityDB from "public/images/activity.png"
import admin from "public/images/admin.png"
import aep from "public/images/aep.png"
import analytics from "public/images/analytics.png"
import manager from "public/images/manager.png"
import roaster from "public/images/roaster.png"
import statusTracker from "public/images/statustracker.png"
import superAdmin from "public/images/superadmin.png"




function HomePage(){

  const [isHome,setIsHome]=useState(false)
  const [isSetting,setIsSetting]=useState(false)

  const activity=[
    {
      activityname: "Super Admin Roster",
      activitystatus: "View and update roster of super admin",
      image: superAdmin,
      url: "/super-admin",
      id:1,
    },
    {
      activityname: "Admin Roaster",
      activitystatus: "View and update roster of admins",
      url: "/admin",
      image: admin,
      
    },
    {
      activityname: "Account Manager Roster",
      activitystatus: "View and update roster of Account Managers",
      image: manager,
      url: "/account-manager",
      id:3,
    },
    {
      activityname: "Student Roster",
      activitystatus: "View and update roster of students",
      image:roaster,
      url: "/student-roaster",
      id:4,
    },
    {
      activityname:"Activity Database",
      activitystatus: "View and update activities and action maps",
      image: activityDB,
      url: "/activity-database",
      id:5,

    },
  
    {
      activityname: "Academic Enrichment Plans (AEPs)",
      activitystatus: "View and update student AEPs",
      image:aep,
      url: "/academic-list",
      id:6,
    },
  
    {
      activityname: "AEP Status Tracker",
      activitystatus: "View and update AEP status",
      url: "/home",
      image:statusTracker,
      
      id:7,
    },
   
    {
      activityname: "Analytics",
      activitystatus: "View analytics for students and staff",
      image: analytics,
      url: "/home",
      id:8,
    }
  ] 

     return (
     
       <div>
         <Navbar />
         <div className="flex items-center">
           <MenuBar />
           <div className="w-[90%] -mt-48 h-screen rounded-md bg-white flex flex-wrap items-center justify-center">
             {activity.map((item)=><HomeItems key={item.id} {...item} />)}
           </div>
         </div>
      
       </div>
     )
}


export default HomePage;
HomePage.isPublicRoute = true;


//update comment
