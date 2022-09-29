import {
  aepinfo,
  AEPTable,
  StatusTableForm,
  statusinfo,
} from "@/features/aep_tracker";
import { Navbar, MenuBar } from "@/features/home";
import { useState } from "react";

function AEPTracker() {
  const [isStatusTable, setIsStatusTable] = useState(false);
  const [studentName, setStudentName] = useState("");

  const openStatusTable = (name) => {
    setIsStatusTable((isStatusTable) => !isStatusTable);
    setStudentName(name);
  };

  return (
    <>
      <div className={!isStatusTable ? `bg-white` : `opacity-[0.4]`}>
        <Navbar />
        <div className="z-0 flex items-center">
          <MenuBar />

          <AEPTable aepData={aepinfo} onClick={openStatusTable} />
        </div>
      </div>

      {isStatusTable ? (
        <div className="relative z-10 -mt-[155vh] flex h-[170vh] w-full justify-center">
          <StatusTableForm
            statusData={statusinfo}
            onClick={openStatusTable}
            name={studentName}
          />
        </div>
      ) : null}
    </>
  );
}

export default AEPTracker;
AEPTracker.isPublicRoute = false;
