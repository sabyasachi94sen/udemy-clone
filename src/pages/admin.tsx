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
  const queryClient = useQueryClient();
  const { mutate } = useMutation(AdminResObj.admin_info_submit, {
    onSuccess: () => {
      queryClient.invalidateQueries("admin-list");
      setBackGroundBlurAddAdmin(!backgroundBlurAddAdmin);
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


  

  const [backgroundBlurAddAdmin, setBackGroundBlurAddAdmin] = useState(false);
  const [backgroundBlurEditAdmin, setBackGroundBlurEditAdmin] = useState(false);
  const [backgroundBlurDeleteAdmin, setBackGroundBlurDeleteAdmin] =
    useState(false);
  const [isTable, setIsTable] = useState(false);
  const [adminData, setAdminData] = useState(admininfo);
  const [adminId,setAdminId]=useState(null)

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

   
  };

  const handleAddSubmit = (postData: object) => {
 
    mutate(postData);
  };

  const handleEditSubmit = (putData: object) => {
    setBackGroundBlurEditAdmin(!backgroundBlurEditAdmin);
     AdminResObj.admininfo_edit(adminId,putData)

  };

  const handleDeleteSubmit = () => {
    setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
  };

  const handleOnChange = (val) => {};

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
          handleOnChange={handleOnChange}
          title="Create an Admin Role"
        />
      ) : null}

      {backgroundBlurEditAdmin ? (
        <EditAdminForm
          handleEditBlur={handleEditBlur}
          handleEditSubmit={handleEditSubmit}
          handleOnChange={handleOnChange}
          header="Are you sure you want to make this admin inactive?"
          title="Edit an Admin role"
          adminId={adminId}
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

export default Admin;
Admin.isPublicRoute = true;
