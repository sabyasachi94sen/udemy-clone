import {aepinfo,AEPTable,StatusTableForm,statusinfo} from "@/features/aep_tracker";
import {Navbar,MenuBar} from "@/features/home";
import { useState } from "react";

    function AEPTracker(){
    
        const [isStatusTable,setIsStatusTable]=useState(false);
        const [studentName,setStudentName]=useState("")

        const openStatusTable=(name)=>{
           setIsStatusTable(isStatusTable=>!isStatusTable)
           setStudentName(name)
        }

    return (
        <>
        <div className={!isStatusTable?`bg-white`: `opacity-[0.4]`}>
        
        <Navbar />
        <div className="flex items-center z-0">
          <MenuBar />
        
         <AEPTable aepData={aepinfo} onClick={openStatusTable}/>
        </div>
       
      </div>

      {isStatusTable? 

<div className="w-full h-[170vh] -mt-[155vh] flex justify-center relative z-10">
<StatusTableForm statusData={statusinfo} onClick={openStatusTable} name={studentName}/>
</div>
: null}
    
        
        </>
    )
}


export default AEPTracker;
AEPTracker.isPublicRoute=true;