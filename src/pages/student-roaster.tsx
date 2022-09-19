import { useState } from "react";

import { MenuBar, Navbar } from "@/features/home";
import { StudentForm, studentinfo, StudentTable } from "@/features/student";
import { ActiveStatus } from "@/features/ui";

function StudentRoaster() {
  const [backgroundBlurAddStudent, setBackGroundBlurAddStudent] =
    useState(false);
  const [backgroundBlurEditStudent, setBackGroundBlurEditStudent] =
    useState(false);
  const [backgroundBlurDeleteStudent, setBackGroundBlurDeleteStudent] =
    useState(false);
  const [studentData, setStudentData] = useState(studentinfo);
  const [studentDataId, setStudentDataId] = useState("");
  const [studentDataOnChange, setStudentDataOnChange] = useState({
    name: "",
    email: "",
    update: "02/11/2022",
    status: "Inactive",
    student: 90,
    performance: "Metrics",
  });

  const addStudentBackBlur = () => {
    setBackGroundBlurAddStudent(
      (backgroundBlurAddStudent) => !backgroundBlurAddStudent,
    );
  };

  const editStudentBackBlur = (id) => {
    setBackGroundBlurEditStudent(
      (backgroundBlurEditStudent) => !backgroundBlurEditStudent,
    );

    setStudentDataId(id);
  };

  const deleteStudentBackBlur = (id) => {
    setBackGroundBlurDeleteStudent(
      (backgroundBlurDeleteStudent) => !backgroundBlurDeleteStudent,
    );

    setStudentDataId(id);
  };

  const submitStudentData = () => {
    setBackGroundBlurAddStudent(
      (backgroundBlurAddStudent) => !backgroundBlurAddStudent,
    );
    const tempArr = studentData;

    tempArr.push(studentDataOnChange);
    setStudentData(tempArr);
  };

  const submitEditData = () => {
    setBackGroundBlurEditStudent(
      (backgroundBlurEditStudent) => !backgroundBlurEditStudent,
    );
    const tempArr = studentData;

    tempArr[studentDataId] = studentDataOnChange;
  };

  const submitDeleteData = () => {
    setBackGroundBlurDeleteStudent(
      (backgroundBlurDeleteStudent) => !backgroundBlurDeleteStudent,
    );
    const tempArr = studentData;

    tempArr.splice(studentDataId, 1);
    setStudentData(tempArr);
  };

  const setDataOnChange = (e) => {
    if (backgroundBlurAddStudent)
      setStudentOnChange({
        ...studentDataOnChange,
        status: "Inactive",
        id: studentData[studentData.length - 1].id + 1,
        [e.target.name]: e.target.value,
      });
    else if (backgroundBlurEditStudent)
      setStudentDataOnChange({
        ...studentDataOnChange,
        id: studentDataId,
        [e.target.name]: e.target.value,
      });
  };

  return (
    <>
      <div
        className={
          !backgroundBlurAddStudent &&
          !backgroundBlurEditStudent &&
          !backgroundBlurDeleteStudent
            ? `bg-white`
            : `opacity-[0.2]`
        }
      >
        <Navbar />
        <div className="z-0 flex items-center">
          <MenuBar />
          <StudentTable
            name="Essai Student Roster"
            studentData={studentData}
            onClick1={addStudentBackBlur}
            onClick2={editStudentBackBlur}
            onClick3={deleteStudentBackBlur}
          />
        </div>
      </div>
      {backgroundBlurAddStudent ? (
        <StudentForm
          title="Add a student to the roster"
          onClick1={addStudentBackBlur}
        />
      ) : null}

      {backgroundBlurEditStudent ? (
        <StudentForm
          title="Update a student to the roster"
          onClick1={editStudentBackBlur}
        />
      ) : null}

      {backgroundBlurDeleteStudent ? (
        //  <DeleteSuperAdminForm onClick1={deleteStudentBackBlur} onClick2={submitDeleteData}  title1="Delete Student" title2="This will permanently delete the student from the" />: ""}

        <ActiveStatus
          header="Are you sure you want to delete activity"
          onClick1={deleteStudentBackBlur}
        />
      ) : null}
    </>
  );
}

export default StudentRoaster;
StudentRoaster.isPublicRoute = true;
