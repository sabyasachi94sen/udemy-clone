import { useState } from "react";
import { useQuery } from "react-query"

import {
  AEPTable,
  statusinfo,
  StatusTableForm,
} from "@/features/aep_tracker";
import { AepTrackerObj } from "@/features/api";
import { MenuBar, Navbar } from "@/features/home";


function AEPTracker() {

  interface StudentAssignedActivityVal{
    student_assigned_activity: {}[]
  }
  const [isStatusTable, setIsStatusTable] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentAssignedActivity,setStudentAssignedActivity]=useState([])

  const openStatusTable = (student_name:string,student_assigned_activity: StudentAssignedActivityVal) => {
    setIsStatusTable(!isStatusTable);
    setStudentName(student_name);
    setStudentAssignedActivity(student_assigned_activity)
  };

  const { data }=useQuery(["aep-tracker-list"],()=> AepTrackerObj.aep_tracker_list())

  console.log(data)

  return (
    <>
      <div className={!isStatusTable ? `bg-white` : `opacity-[0.4]`}>
        <Navbar />
        <div className="z-0 flex items-center">
          <MenuBar />

          <AEPTable aepData={data} openStatusTable={openStatusTable} />
        </div>
      </div>

      {isStatusTable ? (
        <div className="relative z-10 -mt-[155vh] flex h-[170vh] w-full justify-center">
          <StatusTableForm
            name={studentName}
            
            openStatusTable={openStatusTable}
            assigned_activity={studentAssignedActivity}
          />
        </div>
      ) : null}
    </>
  );
}

export default AEPTracker;
AEPTracker.isPublicRoute = false;
