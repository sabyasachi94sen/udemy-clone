import { useState,useEffect } from "react";
import axios from "axios";
import {
  admininfo,
  AdminTable,
  CreateSuperAdminForm,
  EditSuperAdminForm,
} from "@/features/admin";
import { MenuBar, Navbar } from "@/features/home";
import { ActiveStatus } from "@/features/ui";
import { useMutation, useQuery, useQueryClient } from "react-query";
import  {SuperAdminResObj} from "@/features/api"
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function SuperAdmin() {
  const [backgroundBlurAddAdmin, setBackGroundBlurAddAdmin] = useState(false);
  const [backgroundBlurEditAdmin, setBackGroundBlurEditAdmin] = useState(false);
  const [backgroundBlurDeleteAdmin, setBackGroundBlurDeleteAdmin] =
    useState(false);

  const [isTable, setIsTable] = useState(false);
  const [superAdminData,setSuperAdminData]=useState(admininfo)
  const [superAdminId, setSuperAdminId] = useState(null);
  const [mutateParams,setMutateParams]=useState({mutateFunc: SuperAdminResObj.super_admin_info_submit,action: "create_user" })

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
        queryClient.invalidateQueries("super-admin-list");
      },1000)

      
    },
    onError: ()=>{
      toast.error("This Email Already Exist", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  });

  const { data } = useQuery(["super-admin-list"], () =>
    SuperAdminResObj.super_admin_info_list(),
  );



  const handleAddBlur = () => {
    setBackGroundBlurAddAdmin(
      (!backgroundBlurAddAdmin)
    );
  };

  const handleEditBlur = (id) => {
    setBackGroundBlurEditAdmin(
      (!backgroundBlurEditAdmin)
    );

    setSuperAdminId(id);
  };

  const handleDeleteBlur = (id) => {
    setBackGroundBlurDeleteAdmin(
      (!backgroundBlurDeleteAdmin)
    );

    setSuperAdminId(id);
  };

  const handleAddSubmit = (postData: object) => {
    setMutateParams({mutateFunc: SuperAdminResObj.super_admin_info_submit,action: "create_user"})
    setTimeout(()=>{
      mutate(postData)
    },1000)
     
  };

  const isTableCheck = () => {
    setIsTable((!isTable));
  };

  const handleEditSubmit = (putData: object) => {
  
    const putDataObj={
      data: putData,
      id: superAdminId
    }
    setMutateParams({mutateFunc: SuperAdminResObj.super_admin_info_edit,action: "edit_user"})

    setTimeout(()=>{
      mutate(putDataObj)
    },1000)
    
  
   
  };

  const handleDeleteSubmit = (confirmStatus) => {
  
    if(confirmStatus){
    setMutateParams({mutateFunc: SuperAdminResObj.super_admin_info_delete,action: "delete_user"})
    setTimeout(()=>{
     mutate(superAdminId)
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

          <AdminTable
            adminData={data && data?.data && data.data?.results}
            handleAddBlur={handleAddBlur}
            handleDeleteBlur={handleDeleteBlur}
            handleEditBlur={handleEditBlur}
            name="Essai Super Admin Roster"
            tableCheck={isTableCheck}
          />
        </div>
      </div>
      {backgroundBlurAddAdmin ? (
        <CreateSuperAdminForm
          handleAddBlur={handleAddBlur}
          handleAddSubmit={handleAddSubmit}
        
          title="Create Super Admin role"
        />
      ) : null}

      {backgroundBlurEditAdmin ? (
        <EditSuperAdminForm
          handleEditBlur={handleEditBlur}
          handleEditSubmit={handleEditSubmit}
          
          header="Are you sure you want to make this Super admin inactive?"
          title="Edit an Super Admin role"
        />
      ) : null}

      {backgroundBlurDeleteAdmin ? (
        <ActiveStatus
          header="Are you sure you want to delete activity"
          handleDeleteSubmit={handleDeleteSubmit}
        />
      ) : null}
       <ToastContainer autoClose={2000} />
    </>
  );
}

export default SuperAdmin;
SuperAdmin.isPublicRoute = true;
