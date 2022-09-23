import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { MenuBar, Navbar } from "@/features/home";
import { StudentForm, studentinfo, StudentTable } from "@/features/student";
import { ActiveStatus } from "@/features/ui";
import {StudentResObj} from "@/features/api"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StudentRoaster() {
  const [backgroundBlurAddStudent, setBackGroundBlurAddStudent] =
    useState(false);
  const [backgroundBlurEditStudent, setBackGroundBlurEditStudent] =
    useState(false);
  const [backgroundBlurDeleteStudent, setBackGroundBlurDeleteStudent] =
    useState(false);
  const [studentData, setStudentData] = useState(studentinfo);
  const [studentDataId, setStudentDataId] = useState("");
  const [mutateParams,setMutateParams]=useState({mutateFunc:StudentResObj.student_info_list,action: "create_user" })


  const queryClient = useQueryClient();
  const { mutate } = useMutation(mutateParams.mutateFunc, {
    onSuccess: () => {
        
      if(mutateParams.action==="create_user")
      setBackGroundBlurAddStudent(
        (!backgroundBlurAddStudent)
      );
      else if(mutateParams.action==="edit_user"){
        setBackGroundBlurEditStudent(
          (!backgroundBlurEditStudent)
        )
    

      }
      else if(mutateParams.action==="delete_user"){
        setBackGroundBlurDeleteStudent(!backgroundBlurDeleteStudent)
      }

      setTimeout(()=>{
        queryClient.invalidateQueries("student-list");
      },1000)
    },
    onError: ()=>{
      toast.error("This Email Already Exist", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  });
  const {data} = useQuery(["student-list"], () =>
    StudentResObj.student_info_list(),
  );









  const handleAddBackBlur = () => {
    setBackGroundBlurAddStudent(
      (backgroundBlurAddStudent) => !backgroundBlurAddStudent,
    );
  };

  const handleEditBackBlur = (id) => {
    setBackGroundBlurEditStudent(
      (backgroundBlurEditStudent) => !backgroundBlurEditStudent,
    );

    setStudentDataId(id);
  };

  const handleDeleteBackBlur = (id) => {
    setBackGroundBlurDeleteStudent(
      (backgroundBlurDeleteStudent) => !backgroundBlurDeleteStudent,
    );

    console.log(id)

    setStudentDataId(id);
  };

  const handleAddSubmit = (postData: object) => {
   
     
    setMutateParams({mutateFunc:StudentResObj.student_info_add,action:"create_user"})
    
  setTimeout(()=>{
   mutate(postData)
  },1000)
   
  };

  const handleEditSubmit = (putData:object) => {
    setMutateParams({mutateFunc:StudentResObj.student_info_edit,action:"edit_user"})

    const putDataObj={
      data: putData,
      id: studentDataId,
    }

    setTimeout(()=>{
         mutate(putDataObj)
    },1000)
      
  };


  const deleteStatus=(e,flag)=>{
   if(flag==1)
   setBackGroundBlurDeleteStudent(
    (backgroundBlurDeleteStudent) => !backgroundBlurDeleteStudent,
  );

  }


  const handleDeleteSubmit= (confirmStatus) => {

    if(confirmStatus){
    setMutateParams({mutateFunc:StudentResObj.student_info_delete,action:"delete_user"})
    setTimeout(()=>{
     mutate(studentDataId)
    },1000)
  }
  else{
    setBackGroundBlurDeleteStudent(!backgroundBlurDeleteStudent)
  }
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
            studentData={data && data?.data}
            handleAddBackBlur={handleAddBackBlur}
            handleEditBackBlur={handleEditBackBlur}
            handleDeleteBackBlur={handleDeleteBackBlur}
          />
        </div>
      </div>
      {backgroundBlurAddStudent ? (
        <StudentForm
          title="Add a student to the roster"
         handleBackBlur={handleAddBackBlur}
         handleForm={handleAddSubmit}
    
        />
      ) : null}

      {backgroundBlurEditStudent ? (
        <StudentForm
          title="Update a student to the roster"
           handleBackBlur={handleEditBackBlur}
           handleForm={handleEditSubmit}
        />
      ) : null}

      {backgroundBlurDeleteStudent ? (
     
        <ActiveStatus
          header="Are you sure you want to delete this Student?"
          handleDeleteSubmit={handleDeleteSubmit}
          confirm={deleteStatus}
        />
      ) : null}
       <ToastContainer autoClose={2000} />
    </>
  );
}

export default StudentRoaster;
StudentRoaster.isPublicRoute = true;
