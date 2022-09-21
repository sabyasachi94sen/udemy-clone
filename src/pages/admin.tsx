import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  admininfo,
  AdminTable,
  CreateSuperAdminForm,
  EditAdminForm,
} from "@/features/admin";
import { AdminResObj } from "@/features/api";
import { MenuBar, Navbar } from "@/features/home";
import { ActiveStatus, personaldata, PersonalTable } from "@/features/ui";

function Admin() {
  const [backgroundBlurAddAdmin, setBackGroundBlurAddAdmin] = useState(false);
  const [backgroundBlurEditAdmin, setBackGroundBlurEditAdmin] = useState(false);
  const [backgroundBlurDeleteAdmin, setBackGroundBlurDeleteAdmin] =
    useState(false);
  const [isTable, setIsTable] = useState(false);
  const [adminData, setAdminData] = useState(admininfo);
  const [adminId,setAdminId]=useState(null)
  const [mutateParams,setMutateParams]=useState({mutateFunc:AdminResObj.admin_info_submit,action: "create_user" })





  const queryClient = useQueryClient();
  const { mutate } = useMutation(mutateParams.mutateFunc, {
    onSuccess: () => {
        
      if(mutateParams.action==="create_user")
      setBackGroundBlurAddAdmin(
        (!backgroundBlurAddAdmin)
      );
      else if(mutateParams.action==="edit_user"){
        setBackGroundBlurEditAdmin(
          (!backgroundBlurEditAdmin)
        )
    

      }
      else if(mutateParams.action==="delete_user"){
        setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin)
      }

      setTimeout(()=>{
        queryClient.invalidateQueries("admin-list");
      },1000)
    },
    onError: ()=>{
      toast.error("This Email Already Exist", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  });
  const { data } = useQuery(["admin-list"], () =>
    AdminResObj.admin_info_list(),
  );


  



  const handleAddBlur = () => {
    setBackGroundBlurAddAdmin(!backgroundBlurAddAdmin);
  };

  const handleEditBlur = (id) => {
    setBackGroundBlurEditAdmin(!backgroundBlurEditAdmin);
  
    setAdminId(id)

  };
  const isTableCheck = () => {
    setIsTable(!isTable);
  };

  const handleDeleteBlur = (id) => {
    setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
    setAdminId(id)

   
  };

  const handleAddSubmit = (postData: object) => {
    setMutateParams({mutateFunc: AdminResObj.admin_info_submit,action: "create_user"})
    setTimeout(()=>{
      mutate(postData);
    },1000)
 

  };

  const handleEditSubmit = (putData: object) => {
    const putDataObj={
      data: putData,
      id: adminId
    }
    setMutateParams({mutateFunc: AdminResObj.admin_info_edit,action: "edit_user"})

    setTimeout(()=>{
      mutate(putDataObj)
    },1000)

  };

  const handleDeleteSubmit = (confirmStatus) => {
    if(confirmStatus){
      console.log(adminId)
      setMutateParams({mutateFunc: AdminResObj.admin_info_delete,action: "delete_user"})
      setTimeout(()=>{
       mutate(adminId)
      },1000)
    }
    else{
      setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin)
    }
  };

  

  return (
    <>
      <div
        className={
          !backgroundBlurAddAdmin &&
          !backgroundBlurEditAdmin &&
          !backgroundBlurDeleteAdmin
            ? `bg-white`
            : `opacity-[0.2]`
        }
      >
        <Navbar />
        <div className="z-0 flex items-center">
          <MenuBar />
          {!isTable ? (
            <AdminTable
              adminData={data && data?.data && data.data?.results}
              handleAddBlur={handleAddBlur}
              handleDeleteBlur={handleDeleteBlur}
              handleEditBlur={handleEditBlur}
              name="Essai Admin Roaster"
              tableCheck={isTableCheck}
            />
          ) : (
            <PersonalTable
              adminData={personaldata}
              tableCheck={isTableCheck}
              title1="Essai Admin Details"
              title2="Admin"
            />
          )}
        </div>
      </div>
      {backgroundBlurAddAdmin ? (
        <CreateSuperAdminForm
          handleAddBlur={handleAddBlur}
          handleAddSubmit={handleAddSubmit}
         
          title="Create an Admin Role"
        />
      ) : null}

      {backgroundBlurEditAdmin ? (
        <EditAdminForm
          handleEditBlur={handleEditBlur}
          handleEditSubmit={handleEditSubmit}
         
          header="Are you sure you want to make this admin inactive?"
          title="Edit an Admin role"
          adminId={adminId}
        />
      ) : null}

      {backgroundBlurDeleteAdmin ? (
        <ActiveStatus
          header="Are you sure you want to delete this Admin?"
          handleDeleteSubmit={handleDeleteSubmit}
        />
      ) : null}
              <ToastContainer autoClose={2000} />
    </>
  );
}

export default Admin;
Admin.isPublicRoute = true;
