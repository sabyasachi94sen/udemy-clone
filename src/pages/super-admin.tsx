import { SyntheticEvent, useEffect , useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast, ToastContainer } from "react-toastify";

import {
  AdminTable,
  CreateSuperAdminForm,
  EditSuperAdminForm,
} from "@/features/admin";
import { SuperAdminPostDataObjVal ,SuperAdminPutDataObjVal,SuperAdminResObj } from "@/features/api";
import { MenuBar, Navbar } from "@/features/home";
import { ActiveStatus } from "@/features/ui";


import "react-toastify/dist/ReactToastify.css";

function SuperAdmin() {

interface SuperAdminDataValues{
  username: string;
  email: string
}
  const [backgroundBlurAddAdmin, setBackGroundBlurAddAdmin] = useState(false);
  const [backgroundBlurEditAdmin, setBackGroundBlurEditAdmin] = useState(false);
  const [backgroundBlurDeleteAdmin, setBackGroundBlurDeleteAdmin] =
    useState(false);

  const [isTable, setIsTable] = useState(false);
  const [superAdminData, setSuperAdminData] = useState([]);
  const [specificSuperAdminData, setSpecificSuperAdminData] = useState({});
  const [superAdminId, setSuperAdminId] = useState("");
  const [mutateParams, setMutateParams] = useState({
    mutateFunc: SuperAdminResObj.super_admin_info_submit,
    action: "create_user",
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation(mutateParams.mutateFunc, {
    onSuccess: () => {
      if (mutateParams.action === "create_user")
        setBackGroundBlurAddAdmin(!backgroundBlurAddAdmin);
      else if (mutateParams.action === "edit_user") {
        setBackGroundBlurEditAdmin(!backgroundBlurEditAdmin);
      } else if (mutateParams.action === "delete_user") {
        setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
      }

      setTimeout(() => {
        queryClient.invalidateQueries("super-admin-list");
      }, 1000);
    },
    onError: () => {
      toast.error("This Email Already Exist", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });

  const { data, isSuccess } = useQuery(["super-admin-list"], () =>
    SuperAdminResObj.super_admin_info_list(),
  );




  const handleAddBlur = () => {
    setBackGroundBlurAddAdmin(!backgroundBlurAddAdmin);
  };

  const handleEditBlur = (id: string, dataVal: SuperAdminDataValues) => {
    setBackGroundBlurEditAdmin(!backgroundBlurEditAdmin);

    setSuperAdminId(id);
    setSpecificSuperAdminData(dataVal);
  };

  const handleDeleteBlur = (id: string) => {
    setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);

    setSuperAdminId(id);
  };

  const handleAddSubmit = (postData: SuperAdminPostDataObjVal) => {
    setMutateParams({
      mutateFunc: SuperAdminResObj.super_admin_info_submit,
      action: "create_user",
    });
    setTimeout(() => {
      mutate(postData);
    }, 1000);
  };

  const isTableCheck = () => {
    setIsTable(!isTable);
  };

  const handleEditSubmit = (putData: SuperAdminPutDataObjVal) => {
    const putDataObj = {
      data: putData,
      id: superAdminId,
    };

    setMutateParams({
      mutateFunc: SuperAdminResObj.super_admin_info_edit,
      action: "edit_user",
    });

    setTimeout(() => {
      mutate(putDataObj);
    }, 1000);
  };

  const handleDeleteSubmit = (confirmStatus: string) => {
    if (confirmStatus) {
      setMutateParams({
        mutateFunc: SuperAdminResObj.super_admin_info_delete,
        action: "delete_user",
      });
      setTimeout(() => {
        mutate(superAdminId);
      }, 1000);
    } else {
      setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
    }
  };

  const deleteStatus = (e: SyntheticEvent, flag: number) => {
    if (flag === 1) setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
  };

  useEffect(() => {
    if (isSuccess) setSuperAdminData(data && data?.results);
  });

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
            adminData={superAdminData}
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
          header="Are you sure you want to make this Super Admin inactive?"
          specificData={specificSuperAdminData}
          title="Edit a Super Admin role"
        />
      ) : null}

      {backgroundBlurDeleteAdmin ? (
        <ActiveStatus
          confirm={deleteStatus}
          handleDeleteSubmit={handleDeleteSubmit}
          header="Are you sure you want to delete this Super Admin?"
        />
      ) : null}
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default SuperAdmin;
SuperAdmin.isPublicRoute = true;
