import { useState } from "react";

import { AccountManagerTable } from "@/features/account_manger";
import {
  admininfo,
  CreateSuperAdminForm,
  EditAdminForm,
} from "@/features/admin";
import { MenuBar, Navbar } from "@/features/home";
import { ActiveStatus, personaldata, PersonalTable } from "@/features/ui";

function AccountManager() {
  const [backgroundBlurAddAdmin, setBackGroundBlurAddAdmin] = useState(false);
  const [backgroundBlurEditAdmin, setBackGroundBlurEditAdmin] = useState(false);
  const [isTable, setIsTable] = useState(false);
  const [backgroundBlurDeleteAdmin, setBackGroundBlurDeleteAdmin] =
    useState(false);
  const [adminData, setAdminData] = useState(admininfo);
  const [adminDataId, setAdminDataId] = useState("");
  const [adminDataOnChange, setAdminDataOnChange] = useState({
    name: "",
    email: "",
    update: "02/11/2022",
    status: "Inactive",
    student: 90,
    performance: "Metrics",
  });

  const handleAddBlur = () => {
    setBackGroundBlurAddAdmin(
      (!backgroundBlurAddAdmin),
    );
  };

  const handleEditBlur = (id) => {
    setBackGroundBlurEditAdmin(
      (!backgroundBlurEditAdmin),
    );

    setAdminDataId(id);
  };

  const handleDeleteBlur = (id) => {
    setBackGroundBlurDeleteAdmin(
      (!backgroundBlurDeleteAdmin)
    );

    setAdminDataId(id);
  };

  const handleAddSubmit = () => {
    setBackGroundBlurAddAdmin(
      (!backgroundBlurAddAdmin)
    );
    const tempArr = adminData;

    tempArr.push(adminDataOnChange);
    setAdminData(tempArr);
  };

  const handleEditSubmit = () => {
    setBackGroundBlurEditAdmin(
      (!backgroundBlurEditAdmin)
    );
    const tempArr = adminData;

    tempArr[adminDataId] = adminDataOnChange;
  };

  const handleDeleteSubmit = () => {
    setBackGroundBlurDeleteAdmin(
      (!backgroundBlurDeleteAdmin)
    );
    const tempArr = adminData;

    tempArr.splice(adminDataId, 1);
    setAdminData(tempArr);
  };

  const handleOnChange = (e) => {
    if (backgroundBlurAddAdmin)
      setAdminDataOnChange({
        ...adminDataOnChange,
        status: "Inactive",
        id: adminData[adminData.length - 1].id + 1,
        [e.target.name]: e.target.value,
      });
    else if (backgroundBlurEditAdmin)
      setAdminDataOnChange({
        ...adminDataOnChange,
        id: adminDataId,
        [e.target.name]: e.target.value,
      });
  };
  const isTableCheck = () => {
    setIsTable((!isTable));
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
            <AccountManagerTable
              adminData={adminData}
              name="Essai Account Manager Roaster"
              handleAddBlur={handleAddBlur}
              handleEditBlur={handleEditBlur}
              handleDeleteBlur={handleDeleteBlur}
              tableCheck={isTableCheck}
            />
          ) : (
            <PersonalTable
              adminData={personaldata}
              title1="Essai Account Manager Details"
              title2="Account Manager"
              tableCheck={isTableCheck}
            />
          )}
        </div>
      </div>
      {backgroundBlurAddAdmin ? (
        <CreateSuperAdminForm
          title="Create an Account Manager Role"
          handleAddBlur={handleAddBlur}
          handleAddSubmit={handleAddSubmit}
          handleOnChange={handleOnChange}
        />
      ) : null}

      {backgroundBlurEditAdmin ? (
        <EditAdminForm
          header="Are you sure you want to make this account manager  inactive?"
          title="Edit an Account Manager role"
          handleEditBlur={handleEditBlur}
          handleEditSubmit={handleEditSubmit}
          handleOnChange={handleOnChange}
        />
      ) : null}

      {backgroundBlurDeleteAdmin ? (
        <ActiveStatus
          header="Are you sure you want to delete activity"
          onClick1={handleDeleteSubmit}
        />
      ) : null}
    </>
  );
}

export default AccountManager;
AccountManager.isPublicRoute = true;
