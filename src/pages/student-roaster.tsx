import { SyntheticEvent, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast, ToastContainer } from "react-toastify";

import {
  StudentPostDataObjVal,
  StudentPutDataObjVal,
  StudentResObj,
} from "@/features/api";
import { MenuBar, Navbar } from "@/features/home";
import { StudentForm, studentinfo, StudentTable } from "@/features/student";
import { ActiveStatus } from "@/features/ui";

import "react-toastify/dist/ReactToastify.css";

function StudentRoaster() {
  const [backgroundBlurAddStudent, setBackGroundBlurAddStudent] =
    useState(false);
  const [backgroundBlurEditStudent, setBackGroundBlurEditStudent] =
    useState(false);
  const [backgroundBlurDeleteStudent, setBackGroundBlurDeleteStudent] =
    useState(false);

    const [backgroundBlurViewStudent, setBackGroundBlurViewStudent] =
    useState(false);
  const [individualStudentData, setIndividualStudentData] = useState({});
  const [studentDataId, setStudentDataId] = useState("");
  const [mutateParams, setMutateParams] = useState({
    mutateFunc: StudentResObj.student_info_list,
    action: "create_user",
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation(mutateParams.mutateFunc, {
    onSuccess: () => {
      if (mutateParams.action === "create_user")
        setBackGroundBlurAddStudent(!backgroundBlurAddStudent);
      else if (mutateParams.action === "edit_user") {
        setBackGroundBlurEditStudent(!backgroundBlurEditStudent);
      } else if (mutateParams.action === "delete_user") {
        setBackGroundBlurDeleteStudent(!backgroundBlurDeleteStudent);
      }

      setTimeout(() => {
        queryClient.invalidateQueries("student-list");
      }, 1000);
    },
    onError: () => {
      toast.error("This Email Already Exist", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });
  const { data } = useQuery(["student-list"], () =>
    StudentResObj.student_info_list(),
  );

  const handleAddBackBlur = () => {
    setBackGroundBlurAddStudent(
      !backgroundBlurAddStudent,
    );
  };

  const handleEditBackBlur = (id: string) => {
    setBackGroundBlurEditStudent(
      !backgroundBlurEditStudent,
    );

    setStudentDataId(id);
  };

  const handleDeleteBackBlur = (id: string) => {
    setBackGroundBlurDeleteStudent(
      !backgroundBlurDeleteStudent,
    );



    setStudentDataId(id);
  };


  const handleViewBackBlur=(individual_student_info:object)=>{
    setBackGroundBlurViewStudent(!backgroundBlurViewStudent)
    setIndividualStudentData(individual_student_info)
  }

  const handleAddSubmit = (postData: StudentPostDataObjVal) => {
    setMutateParams({
      mutateFunc: StudentResObj.student_info_add,
      action: "create_user",
    });

    setTimeout(() => {
      mutate(postData);
    }, 1000);
  };

  const handleEditSubmit = (putData: StudentPutDataObjVal) => {
    setMutateParams({
      mutateFunc: StudentResObj.student_info_edit,
      action: "edit_user",
    });

    const putDataObj = {
      data: putData,
      id: studentDataId,
    };

    setTimeout(() => {
      mutate(putDataObj);
    }, 1000);
  };

  const deleteStatus = (e: SyntheticEvent, flag: number) => {
    if (flag === 1)
      setBackGroundBlurDeleteStudent(
        (backgroundBlurDeleteStudent) => !backgroundBlurDeleteStudent,
      );
  };

  const handleDeleteSubmit = (confirmStatus: boolean) => {
    if (confirmStatus) {
      setMutateParams({
        mutateFunc: StudentResObj.student_info_delete,
        action: "delete_user",
      });
      setTimeout(() => {
        mutate(studentDataId);
      }, 1000);
    } else {
      setBackGroundBlurDeleteStudent(!backgroundBlurDeleteStudent);
    }
  };

  return (
    <>
      <div
        className={
          !backgroundBlurAddStudent &&
          !backgroundBlurEditStudent &&
          !backgroundBlurDeleteStudent &&
          !backgroundBlurViewStudent
            ? `bg-white`
            : `opacity-[0.2]`
        }
      >
        <Navbar />
        <div className="z-0 flex items-center">
          <MenuBar />
          <StudentTable
            handleAddBackBlur={handleAddBackBlur}
            handleDeleteBackBlur={handleDeleteBackBlur}
            handleEditBackBlur={handleEditBackBlur}
            handleViewBackBlur={handleViewBackBlur}
            name="Essai Student Roster"
            studentData={data}
          />
        </div>
      </div>
      {backgroundBlurAddStudent ? (
        <StudentForm
          handleBackBlur={handleAddBackBlur}
          handleForm={handleAddSubmit}
          title="Add a student to the roster"
        />
      ) : null}

      {backgroundBlurEditStudent ? (
        <StudentForm
          handleBackBlur={handleEditBackBlur}
          handleForm={handleEditSubmit}
          title="Update a student to the roster"
        />
      ) : null}

      {backgroundBlurViewStudent ? (
        <StudentForm
          handleBackBlur={handleViewBackBlur}
           individualStudentData={individualStudentData}
          title="View a student to the roster"
        />
      ) : null}

      {backgroundBlurDeleteStudent ? (
        <ActiveStatus
          confirm={deleteStatus}
          handleDeleteSubmit={handleDeleteSubmit}
          header="Are you sure you want to delete this Student?"
        />
      ) : null}
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default StudentRoaster;
StudentRoaster.isPublicRoute = true;
