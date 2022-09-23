import { useState } from "react";

import {
  ActionMapForm,
  ActivityDataBaseForm,
  ActivityDataBasePersonalTable,
  ActivityDataBaseTable,
  activityinfo,
  activitypersonalinfo,
} from "@/features/activitydb";
import { MenuBar, Navbar } from "@/features/home";
import { ActiveStatus } from "@/features/ui";

function Activity() {
  const [isTable, setIsTable] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const [addBackBlur, setAddBackBlur] = useState(false);
  const [editBackBlur, setEditBackBlur] = useState(false);
  const [deleteBackBlur, setDeleteBackBlur] = useState(false);

  const isActivityTable = () => {
    setIsTable((isTable) => !isTable);
  };

  const setBackgroundBlurOnMap = () => {
    setIsMap((isMap) => !isMap);
  };

  const setBackgroundBlurOnAdd = () => {
    setAddBackBlur((addBackBlur) => !addBackBlur);
  };

  const setBackgroundBlurOnEdit = () => {
    setEditBackBlur((editBackBlur) => !editBackBlur);
  };

  const setBackgroundBlurOnDelete = () => {
    setDeleteBackBlur((deleteBackBlur) => !deleteBackBlur);
  };

  const deleteStatus=(e,flag)=>{
    if(flag==1)
    setDeleteBackBlur((deleteBackBlur) => !deleteBackBlur);
  }

  return (
    <>
      <div
        className={
          !addBackBlur && !editBackBlur && !isMap && !deleteBackBlur
            ? `bg-white`
            : `opacity-[0.2]`
        }
      >
        <Navbar />
        <div className="z-0 flex items-center">
          <MenuBar />
          {!isTable ? (
            <ActivityDataBaseTable
              activityData={activityinfo}
              onClick={isActivityTable}
            />
          ) : (
            <ActivityDataBasePersonalTable
              activityData={activitypersonalinfo}
              onClick1={setBackgroundBlurOnAdd}
              onClick2={setBackgroundBlurOnEdit}
              onClick3={setBackgroundBlurOnMap}
              onClick4={setBackgroundBlurOnDelete}
              onClick5={isActivityTable}
            />
          )}
        </div>
      </div>

      {addBackBlur ? (
        <ActivityDataBaseForm
          name="Add an activity to the database"
          onClick1={setBackgroundBlurOnAdd}
        />
      ) : null}

      {editBackBlur ? (
        <ActivityDataBaseForm
          name="Edit an activity to the database"
          onClick1={setBackgroundBlurOnEdit}
        />
      ) : null}

      {isMap ? <ActionMapForm onClick1={setBackgroundBlurOnMap} /> : null}

      {deleteBackBlur ? (
        <ActiveStatus
          header="Are you sure you want to delete this Activity?"
          handleDeleteSubmit={setBackgroundBlurOnDelete}
          confirm={deleteStatus}
        />
      ) : null}
    </>
  );
}

export default Activity;
Activity.isPublicRoute = true;

