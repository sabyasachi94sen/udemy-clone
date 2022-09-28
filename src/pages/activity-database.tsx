import { SyntheticEvent, useState } from "react";
import { useMutation, useQuery } from "react-query";

import {
  ActionMapForm,
  ActivityDataBaseForm,
  ActivityDataBasePersonalTable
} from "@/features/activitydb";
import { ActivityResObj } from "@/features/api"
import { MenuBar, Navbar } from "@/features/home";
import { ActiveStatus } from "@/features/ui";

function Activity() {
  const [isTable, setIsTable] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const [addBackBlur, setAddBackBlur] = useState(false);
  const [editBackBlur, setEditBackBlur] = useState(false);
  const [viewBackBlur,setViewBackBlur]=useState(false)
  const [deleteBackBlur, setDeleteBackBlur] = useState(false);
  const [individualActivityInfo,setIndividualActivityInfo]=useState({})


  const { data }=useQuery(["activity-list"],()=>ActivityResObj.activity_list())
  const {mutate}=useMutation(ActivityResObj.activity_add,{

  })

  const isActivityTable = () => {
    setIsTable(!isTable);
  };

  const handleBackgroundBlurOnMap = () => {
    setIsMap(!isMap);
  };

  const handleBackgroundBlurOnAdd = () => {
    setAddBackBlur(!addBackBlur);
  };

  const handleBackgroundBlurOnEdit = (individual_activity_info:object) => {
    setEditBackBlur(!editBackBlur);
    setIndividualActivityInfo(individual_activity_info)
  };


  const handleBackgroundBlurOnView=(individual_activity_info:object)=>{
    console.log(individual_activity_info)
    setViewBackBlur(!viewBackBlur)
    setIndividualActivityInfo(individual_activity_info)
  }

  const handleBackgroundBlurOnDelete = () => {
    setDeleteBackBlur(!deleteBackBlur);
  };

  const deleteStatus=(e: SyntheticEvent,flag:number)=>{
    if(flag===1)
    setDeleteBackBlur(!deleteBackBlur);
  }

  const addActivityData=(formVal: FormValues)=>{
    const mutateObj={
      ...formVal,
      grade_range:[formVal.grade_low,formVal.grade_high],
      age_range: [formVal.age_low,formVal.age_high],
    }

    mutate(mutateObj)
    
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
            activityData={data && data?.results}
            handleBackgroundBlurOnAdd={handleBackgroundBlurOnAdd}
            handleBackgroundBlurOnDelete={handleBackgroundBlurOnDelete}
            handleBackgroundBlurOnEdit={handleBackgroundBlurOnEdit}
            handleBackgroundBlurOnMap={handleBackgroundBlurOnMap}
            handleBackgroundBlurOnView={handleBackgroundBlurOnView}
            isActivityTable={isActivityTable}
            
            />
          
        </div>
      </div>

      {addBackBlur ? (
        <ActivityDataBaseForm
          handleBackgroundBlur={handleBackgroundBlurOnAdd}
          name="Add an activity to the database"
          addActivityData={addActivityData}
        />
      ) : null}

      {editBackBlur ? (
        <ActivityDataBaseForm
          handleBackgroundBlur={handleBackgroundBlurOnEdit}
          name="Edit an activity to the database"
          individualActivityInfo={individualActivityInfo}
        />
      ) : null}

      {viewBackBlur ? (
        <ActivityDataBaseForm
          handleBackgroundBlur={handleBackgroundBlurOnView}
          name="View an activity to the database"
          individualActivityInfo={individualActivityInfo}
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

