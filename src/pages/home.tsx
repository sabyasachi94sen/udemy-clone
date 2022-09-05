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
      activityname: "Super Admin List",
      activitystatus: "View and update list of Super Admins",
      image: superAdmin,
      id:1,
    },
    {
      activityname:"Activity Database",
      activitystatus: "View and update activities and action maps",
      image: activityDB,
      id:2,

    },
    {
      activityname: "Admin List",
      activitystatus: "View and update list of Admins",
      image: admin,
      id:3,
    },
    {
      activityname: "Academic Enrichment Plans (AEPs)",
      activitystatus: "View and update student AEPs",
      image:aep,
      id:4,
    },
    {
      activityname: "Student Roster",
      activitystatus: "View and update roster of students",
      image:roaster,
      id:5,
    },
    {
      activityname: "AEP Status Tracker",
      activitystatus: "View and update AEP status",
      image:statusTracker,
      id:6,
    },
    {
      activityname: "Account Manager Roster",
      activitystatus: "View and update roster of Account Managers",
      image: manager,
      id:7,
    },
    {
      activityname: "Analytics",
      activitystatus: "View analytics for students and staff",
      image: analytics,
      id:8,
    }
  ] 

     return (
     
       <div>
         <Navbar />
         <div className="flex items-center">
           <MenuBar />
           <div className="w-[90%] h-screen rounded-md bg-white flex flex-wrap items-center justify-center">
             {activity.map((item)=><HomeItems key={item.id} {...item} />)}
           </div>
         </div>
      
       </div>
     )
}


export default HomePage;
HomePage.isPublicRoute = true;
