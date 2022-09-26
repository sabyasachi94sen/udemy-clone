import { SyntheticEvent, useState } from "react";

import {
  ActionMapForm,
  ActivityDataBaseForm,
  ActivityDataBasePersonalTable,
  activityinfo
} from "@/features/activitydb";
import { MenuBar, Navbar } from "@/features/home";
import { ActiveStatus } from "@/features/ui";

function Activity() {
  const [isTable, setIsTable] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const [addBackBlur, setAddBackBlur] = useState(false);
  const [editBackBlur, setEditBackBlur] = useState(false);
  const [viewBackBlur,setViewBackBlur]=useState(false)
  const [deleteBackBlur, setDeleteBackBlur] = useState(false);

  const isActivityTable = () => {
    setIsTable(!isTable);
  };

  const handleBackgroundBlurOnMap = () => {
    setIsMap(!isMap);
  };

  const handleBackgroundBlurOnAdd = () => {
    setAddBackBlur(!addBackBlur);
  };

  const handleBackgroundBlurOnEdit = () => {
    setEditBackBlur(!editBackBlur);
  };


  const handleBackgroundBlurOnView=()=>{
    setViewBackBlur(!viewBackBlur)
  }

  const handleBackgroundBlurOnDelete = () => {
    setDeleteBackBlur(!deleteBackBlur);
  };

  const deleteStatus=(e: SyntheticEvent,flag:number)=>{
    if(flag===1)
    setDeleteBackBlur(!deleteBackBlur);
  }

  return (
    <>
      <div
        className={
          !addBackBlur && !editBackBlur && !viewBackBlur && !isMap && !deleteBackBlur
            ? `bg-white`
            : `opacity-[0.2]`
        }
      >
        <Navbar />
        <div className="z-0 flex items-center">
          <MenuBar />
         
          <ActivityDataBasePersonalTable
            activityData={activityinfo}
            handleBackgroundBlurOnAdd={handleBackgroundBlurOnAdd}
            handleBackgroundBlurOnEdit={handleBackgroundBlurOnEdit}
            handleBackgroundBlurOnMap={handleBackgroundBlurOnMap}
            handleBackgroundBlurOnView={handleBackgroundBlurOnView}
            handleBackgroundBlurOnDelete={handleBackgroundBlurOnDelete}
            isActivityTable={isActivityTable}
            />
          
        </div>
      </div>

      {addBackBlur ? (
        <ActivityDataBaseForm
          name="Add an activity to the database"
          handleBackgroundBlur={handleBackgroundBlurOnAdd}
        />
      ) : null}

      {editBackBlur ? (
        <ActivityDataBaseForm
          name="Edit an activity to the database"
          handleBackgroundBlur={handleBackgroundBlurOnEdit}
        />
      ) : null}

      {viewBackBlur ? (
        <ActivityDataBaseForm
          name="View an activity to the database"
          handleBackgroundBlur={handleBackgroundBlurOnView}
        />
      ) : null}




      {isMap ? <ActionMapForm handleBackgroundBlurOnMap={handleBackgroundBlurOnMap} /> : null}

      {deleteBackBlur ? (
        <ActiveStatus
          confirm={deleteStatus}
          handleDeleteSubmit={handleBackgroundBlurOnDelete}
          header="Are you sure you want to delete this Activity?"
        />
      ) : null}
    </>
  );
}

export default Activity;
Activity.isPublicRoute = true;

