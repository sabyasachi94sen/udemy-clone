import { SyntheticEvent, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AccountManagerTable } from "@/features/account_manger";
import {
  CreateSuperAdminForm,
  EditAdminForm,
} from "@/features/admin";
import { AccountManagerResObj,ManagerPostDataObjVal,ManagerPutDataObjVal } from "@/features/api";
import { MenuBar, Navbar } from "@/features/home";
import { ActiveStatus, personaldata, PersonalTable } from "@/features/ui";

function AccountManager() {
  const [backgroundBlurAddManager, setBackGroundBlurAddManager] =
    useState(false);
  const [backgroundBlurEditManager, setBackGroundBlurEditManager] =
    useState(false);
  const [isTable, setIsTable] = useState(false);
  const [backgroundBlurDeleteManager, setBackGroundBlurDeleteManager] =
    useState(false);
  const [managerSpecificData, setManagerSpecificData] = useState({ username: "",emai:"" });
  const [managerActivity, setManagerActivity] = useState([]);
  const [individualManagerActivity,setIndividualActivity]=useState([])
  const [managerDataId, setManagerDataId] = useState("");
  const [mutateParams, setMutateParams] = useState({
    mutateFunc: AccountManagerResObj.account_manager_info_add,
    action: "create_user",
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation(mutateParams.mutateFunc, {
    onSuccess: () => {
     
      if (mutateParams.action === "create_user")
        setBackGroundBlurAddManager(!backgroundBlurAddManager);
      else if (mutateParams.action === "edit_user") {
        setBackGroundBlurEditManager(!backgroundBlurEditManager);
      } else if (mutateParams.action === "delete_user") {
        setBackGroundBlurDeleteManager(!backgroundBlurDeleteManager);
      }

      setTimeout(() => {
        queryClient.invalidateQueries("account-manager-list");
      }, 1000);
    },
    onError: () => {
      toast.error("This Email Already Exist", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });

  const { data } = useQuery(["account-manager-list"], () =>
    AccountManagerResObj.account_manager_list(),
  );

  const handleAddBlur = () => {
    setBackGroundBlurAddManager(!backgroundBlurAddManager);
  };

  const handleEditBlur = (id:string,individual_manager_data:object) => {
    setBackGroundBlurEditManager(!backgroundBlurEditManager);
    setIndividualActivity(individual_manager_data)
    setManagerDataId(id);
  };

  const handleDeleteBlur = (id: string) => {
    setBackGroundBlurDeleteManager(!backgroundBlurDeleteManager);

    setManagerDataId(id);
  };

  const handleAddSubmit = (postData: ManagerPostDataObjVal) => {
    setMutateParams({
      mutateFunc: AccountManagerResObj.account_manager_info_add,
      action: "create_user",
    });

    setTimeout(() => {
      mutate(postData);
    }, 1000);
  };

  const handleEditSubmit = (putData: ManagerPutDataObjVal) => {
    const putDataObj = {
      data: putData,
      id: managerDataId,
    };

    setMutateParams({
      mutateFunc: AccountManagerResObj.account_manager_info_edit,
      action: "edit_user",
    });

    setTimeout(() => {
      mutate(putDataObj);
    }, 1000);
  };

  const handleDeleteSubmit = (confirmStatus: string) => {
    if (confirmStatus) {
      setMutateParams({
        mutateFunc: AccountManagerResObj.account_manager_info_delete,
        action: "delete_user",
      });
      setTimeout(() => {
        mutate(managerDataId);
      }, 1000);
    } else {
      setBackGroundBlurDeleteManager(!backgroundBlurDeleteManager);
    }
  };

  const isTableCheck = (id: any) => {
    setIsTable(!isTable);

    setManagerActivity([]);
  };


  const deleteStatus=(e:SyntheticEvent,flag: number)=>{
    if(flag===1)
    setBackGroundBlurDeleteManager(!backgroundBlurDeleteManager);
  }


  return (
    <>
      <div
        className={
          !backgroundBlurAddManager &&
          !backgroundBlurEditManager &&
          !backgroundBlurDeleteManager
            ? `bg-white`
            : `opacity-[0.2]`
        }
      >
        <Navbar />
        <div className="z-0 flex items-center">
          <MenuBar />
          {!isTable ? (
            <AccountManagerTable
              handleAddBlur={handleAddBlur}
              handleDeleteBlur={handleDeleteBlur}
              handleEditBlur={handleEditBlur}
              managerData={data}
              name="Essai Account Manager Roaster"
              tableCheck={isTableCheck}
            />
          ) : (
            <PersonalTable
              activityData={managerActivity}
              adminData={personaldata}
              tableCheck={isTableCheck}
              title1="Essai Account Manager Details"
              title2="Account Manager"
            />
          )}
        </div>
      </div>
      {backgroundBlurAddManager ? (
        <CreateSuperAdminForm
          handleAddBlur={handleAddBlur}
          handleAddSubmit={handleAddSubmit}
          title="Create an Account Manager Role"
        />
      ) : null}

      {backgroundBlurEditManager ? (
        <EditAdminForm
          handleEditBlur={handleEditBlur}
          handleEditSubmit={handleEditSubmit}
          header="Are you sure you want to make this account manager  inactive?"
          specificData={individualManagerActivity}
          title="Edit an Account Manager role"
        />
      ) : null}

      {backgroundBlurDeleteManager ? (
        <ActiveStatus
          confirm={deleteStatus}
          handleDeleteSubmit={handleDeleteSubmit}
          header="Are you sure you want to delete this Account Manager?"
        />
      ) : null}

      <ToastContainer autoClose={2000} />
    </>
  );
}

export default AccountManager;
AccountManager.isPublicRoute = false;
