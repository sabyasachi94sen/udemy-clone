import { useState } from "react";

import { AcademicPersonalTable, AcademicTable } from "@/features/academic_plan";
import { studentinfo } from "@/features/student";

function AcademicPlan() {
  const [isTable, setIsTable] = useState(false);
  const [addActivity, setAddActivity] = useState(false);
  const [storeActivityData, setStoreActivityData] = useState([]);
  const [count, setCount] = useState(0);

  const addDataInTable = (data, index) => {
    setAddActivity((addActivity) => !addActivity);
    const tempArr = storeActivityData;

    tempArr.push(data[index]);
    setStoreActivityData(storeActivityData);
  };

  const deleteDataInTable = (data, index) => {
    data.splice(index, 1);
    setStoreActivityData(data);
    setCount(count + 1);
  };

  const setTable = () => {
    setIsTable((isTable) => !isTable);
  };

  const isAddActive = () => {
    setAddActivity((addActivity) => !addActivity);
  };

  return (
    <>
      <div className="py-6">
        <div>
          {!isTable ? (
            <AcademicTable academicData={studentinfo} onClick1={setTable} />
          ) : (
            <AcademicPersonalTable
              activityData={storeActivityData}
              onClick1={isAddActive}
              onClick2={deleteDataInTable}
            />
          )}
        </div>
      </div>
      {/* <div className={!addActivity ? `bg-white` : `opacity-[0.3]`}>

      </div>

      {addActivity ? (
        <div className="relative z-10 -mt-[155vh] flex h-[170vh] w-full justify-center">
          <AddActivityForm
            activeData={storeActivityData}
            onClick1={addDataInTable}
            onClick2={isAddActive}
          />
        </div>
      ) : (
        ""
      )} */}
    </>
  );
}

export default AcademicPlan;
AcademicPlan.isPublicRoute = true;
