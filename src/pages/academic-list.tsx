import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import {
  AcademicPersonalTable,
  AcademicTable,
  AddActivityForm,
} from "@/features/academic_plan";
import { AepResObj } from "@/features/api";
import { MenuBar, Navbar } from "@/features/home";
import { useModal } from "@/shared/stores/modal.store";

export default function AcademicPlan() {
  const [isTable, setIsTable] = useState(false);
  const [addActivity, setAddActivity] = useState(false);

  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [storeActivityData, setStoreActivityData] = useState([]);
  const [count, setCount] = useState(0);
  const { currModalKey, onModalOpen } = useModal();

  const { data } = useQuery(["aep-list"], () => AepResObj.aep_list());
  const queryClient = useQueryClient();

  const setTable = (student_id: string, student_name: string) => {
    setIsTable(!isTable);
    setStudentId(student_id);
    setStudentName(student_name);
  };

  const isAddActive = () => {
    setAddActivity(!addActivity);
  };

  return (
    <>
      <div className={!addActivity ? `bg-white` : `opacity-[0.3]`}>
        <Navbar />
        <div className="z-0 flex items-center">
          <MenuBar />
          {!isTable ? (
            <AcademicTable academicData={data} setTable={setTable} />
          ) : (
            <AcademicPersonalTable
              activityData={storeActivityData}
              isAddActive={isAddActive}
              setTable={setTable}
              studentId={studentId}
              studentName={studentName}
            />
          )}
        </div>
      </div>
      {/* <Button onClick={() => onModalOpen("addActivity")}>OPEN MODAL</Button> */}

      {addActivity ? (
        <div className="relative z-10 -mt-[155vh] flex h-[170vh] w-full justify-center">
          <AddActivityForm isAddActive={isAddActive} studentId={studentId} />
        </div>
      ) : null}
    </>
  );
}
