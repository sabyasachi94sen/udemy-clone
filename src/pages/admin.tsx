import { SyntheticEvent, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  AdminTable,
  CreateSuperAdminForm,
  EditAdminForm,
} from "@/features/admin";
import { AdminPostDataObjVal ,AdminPutDataObjVal,AdminResObj } from "@/features/api";
import { MenuBar, Navbar } from "@/features/home";
import { ActiveStatus, personaldata, PersonalTable } from "@/features/ui";



interface StudentDetailsVal {
  id:                    number;
  activity_count:        number;
  last_update:           Date;
  username:              string;
  email:                 string;
  date_joined:           Date;
  last_login:            Date;
  last_seen:             Date;
  profile_image:         null;
  is_email_verified:     boolean;
  is_admin:              boolean;
  is_super_admin:        boolean;
  is_active:             boolean;
  is_staff:              boolean;
  is_superuser:          boolean;
  acc_showTour:          boolean;
  is_student:            boolean;
  is_account_manager:    boolean;
  password_verification: boolean;
}








function Admin() {
  const [backgroundBlurAddAdmin, setBackGroundBlurAddAdmin] = useState(false);
  const [backgroundBlurEditAdmin, setBackGroundBlurEditAdmin] = useState(false);
  const [backgroundBlurDeleteAdmin, setBackGroundBlurDeleteAdmin] =
    useState(false);
  const [isTable, setIsTable] = useState(false);
  const [specificAdminData, setSpecificAdminData] = useState({});
  const [adminActivity, setAdminActivity] = useState<StudentDetailsVal[]>([]);
  const [adminId, setAdminId] = useState("");
  const [mutateParams, setMutateParams] = useState({
    mutateFunc: AdminResObj.admin_info_submit,
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
        queryClient.invalidateQueries("admin-list");
      }, 1000);
    },
    onError: () => {
      toast.error("This Email Already Exist", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });
  const { data, isSuccess } = useQuery(["admin-list"], () =>
    AdminResObj.admin_info_list(),
  );

  const handleAddBlur = () => {
    setBackGroundBlurAddAdmin(!backgroundBlurAddAdmin);
  };

  const handleEditBlur = (id: string, specific_admin_data: object) => {
    setBackGroundBlurEditAdmin(!backgroundBlurEditAdmin);

    setAdminId(id);
    setSpecificAdminData(specific_admin_data);
  };
  const isTableCheck = (id: string) => {
    setIsTable(!isTable);

    if (id != null) {
      const response = AdminResObj.admin_activity(id);

      response
        .then((res) => {
          setAdminActivity([res]);
        })
        .catch((err) => {
          setAdminActivity([]);
        });
    }
  };

  const handleDeleteBlur = (id: string) => {
    setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
    setAdminId(id);
  };

  const deleteStatus = (e: SyntheticEvent, flag:number) => {
    if (flag === 1) setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
  };

  const handleAddSubmit = (postData: AdminPostDataObjVal) => {
    setMutateParams({
      mutateFunc: AdminResObj.admin_info_submit,
      action: "create_user",
    });
    setTimeout(() => {
      mutate(postData);
    }, 1000);
  };

  const handleEditSubmit = (putData: AdminPutDataObjVal) => {
    const putDataObj = {
      data: putData,
      id: adminId,
    };

    setMutateParams({
      mutateFunc: AdminResObj.admin_info_edit,
      action: "edit_user",
    });

    setTimeout(() => {
      mutate(putDataObj);
    }, 1000);
  };

  const handleDeleteSubmit = (confirmStatus: boolean) => {
    if (confirmStatus) {
      setMutateParams({
        mutateFunc: AdminResObj.admin_info_delete,
        action: "delete_user",
      });
      setTimeout(() => {
        mutate(adminId);
      }, 1000);
    } else {
      setBackGroundBlurDeleteAdmin(!backgroundBlurDeleteAdmin);
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
              adminData={data && data?.results}
              handleAddBlur={handleAddBlur}
              handleDeleteBlur={handleDeleteBlur}
              handleEditBlur={handleEditBlur}
              name="Essai Admin Roaster"
              tableCheck={isTableCheck}
            />
          ) : (
            <PersonalTable
              activityData={adminActivity}
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
          adminId={adminId}
          handleEditBlur={handleEditBlur}
          handleEditSubmit={handleEditSubmit}
          header="Are you sure you want to make this Admin inactive?"
          specificData={specificAdminData}
          title="Edit an Admin role"
        />
      ) : null}

      {backgroundBlurDeleteAdmin ? (
        <ActiveStatus
          confirm={deleteStatus}
          handleDeleteSubmit={handleDeleteSubmit}
          header="Are you sure you want to delete this Admin?"
        />
      ) : null}
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default Admin;
Admin.isPublicRoute = true;

// new comment
