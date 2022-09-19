import { useState } from "react";
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
  const [adminData,setAdminData]=useState(admininfo)
  const [adminDataId, setAdminDataId] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation(SuperAdminResObj.super_admin_info_submit, {
    onSuccess: () => {
      queryClient.invalidateQueries("super-admin-list");
      setBackGroundBlurAddAdmin(
        (!backgroundBlurAddAdmin)
      );
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

    setAdminDataId(id);
  };

  const handleDeleteBlur = (id) => {
    setBackGroundBlurDeleteAdmin(
      (!backgroundBlurDeleteAdmin)
    );

    setAdminDataId(id);
  };

  const handleAddSubmit = (postData: object) => {
    
     mutate(postData)
  };

  const isTableCheck = () => {
    setIsTable((!isTable));
  };

  const handleEditSubmit = () => {
    setBackGroundBlurEditAdmin(
      (!backgroundBlurEditAdmin)
    );
   
  };

  const handleDeleteSubmit = () => {
    setBackGroundBlurDeleteAdmin(
      (!backgroundBlurDeleteAdmin)
    );

  };

  const handleOnChange = (e) => {
    
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
            adminData={data && data?.data}
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
          handleOnChange={handleOnChange}
          title="Create Super Admin role"
        />
      ) : null}

      {backgroundBlurEditAdmin ? (
        <EditSuperAdminForm
          handleEditBlur={handleEditBlur}
          handleEditSubmit={handleEditSubmit}
          handleOnChange={handleOnChange}
          header="Are you sure you want to make this Super admin inactive?"
          title="Edit an Super Admin role"
        />
      ) : null}

      {backgroundBlurDeleteAdmin ? (
        <ActiveStatus
          header="Are you sure you want to delete activity"
          onClick1={handleDeleteSubmit}
        />
      ) : null}
       <ToastContainer autoClose={2000} />
    </>
  );
}

export default SuperAdmin;
SuperAdmin.isPublicRoute = true;
