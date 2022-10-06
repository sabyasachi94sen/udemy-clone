import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SyntheticEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { ActiveStatus } from "@/features/ui";

import "react-toastify/dist/ReactToastify.css";

import {
  ActionMapForm,
  ActivityDataBaseForm,
  ActivityDataBasePersonalTable,
} from "@/features/activitydb";
import { ActivityResObj } from "@/features/api";
import { MenuBar, Navbar } from "@/features/home";

function Activity() {
  const [isTable, setIsTable] = useState(false);
  const [activityId, setActivityId] = useState("");
  const [isMap, setIsMap] = useState(false);
  const [addBackBlur, setAddBackBlur] = useState(false);
  const [editBackBlur, setEditBackBlur] = useState(false);
  const [viewBackBlur, setViewBackBlur] = useState(false);
  const [deleteBackBlur, setDeleteBackBlur] = useState(false);
  const [individualActivityInfo, setIndividualActivityInfo] = useState({});
  const [mutateParams, setMutateParams] = useState({
    mutateFunc: ActivityResObj.activity_add,
    action: "add",
  });

  const isActivityTable = () => {
    setIsTable(!isTable);
  };

  const handleBackgroundBlurOnMap = (activity_id: string) => {
    setIsMap(!isMap);
    setActivityId(activity_id);
  };

  const handleBackgroundBlurOnAdd = () => {
    setAddBackBlur(!addBackBlur);
  };

  const handleBackgroundBlurOnEdit = (
    individual_activity_info: object,
    activity_id: string,
  ) => {
    setEditBackBlur(!editBackBlur);
    setActivityId(activity_id);
    setIndividualActivityInfo(individual_activity_info);
  };

  const handleBackgroundBlurOnView = (individual_activity_info: object) => {
    setViewBackBlur(!viewBackBlur);
    setIndividualActivityInfo(individual_activity_info);
  };

  const handleBackgroundBlurOnDelete = (activity_id: string) => {
    setDeleteBackBlur(!deleteBackBlur);

    setActivityId(activity_id);
  };

  const { data } = useQuery(["activity-list"], () =>
    ActivityResObj.activity_list(),
  );
  const queryClient = useQueryClient();
  const { mutate } = useMutation(mutateParams.mutateFunc, {
    onSuccess: () => {
      if (mutateParams.action === "add") setAddBackBlur(!addBackBlur);
      else if (mutateParams.action === "edit") setEditBackBlur(!editBackBlur);
      else if (mutateParams.action === "delete")
        setDeleteBackBlur(!deleteBackBlur);

      setTimeout(() => {
        queryClient.invalidateQueries();
      }, 1000);
    },
    onError: (err) => {
      toast.error(err.data.errorType, {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });

  const addActivityData = (formVal: FormValues) => {
    const mutateObj = {
      ...formVal,
      grade_range: [formVal.grade_low, formVal.grade_high],
      age_range: [formVal.age_low, formVal.age_high],
    };

    setMutateParams({ mutateFunc: ActivityResObj.activity_add, action: "add" });

    setTimeout(() => {
      mutate(mutateObj);
    }, 1000);
  };

  const editActivityData = (formVal: FormValues) => {
    const mutateObj = {
      data: {
        ...formVal,
        grade_range: [formVal.grade_low, formVal.grade_high],
        age_range: [formVal.age_low, formVal.age_high],
      },
      activity_id: activityId,
    };

    setMutateParams({
      mutateFunc: ActivityResObj.activity_edit,
      action: "edit",
    });

    setTimeout(() => {
      mutate(mutateObj);
    }, 1000);
  };

  const deleteStatus = (e: SyntheticEvent, flag: number) => {
    if (flag === 1) {
      setDeleteBackBlur(!deleteBackBlur);
    }
  };

  const handleDelete = (confirmStatus: boolean) => {
    if (confirmStatus) {
      setMutateParams({
        mutateFunc: ActivityResObj.activity_delete,
        action: "delete",
      });
      setTimeout(() => {
        mutate(activityId);
      }, 1000);
    } else {
      setDeleteBackBlur(!deleteBackBlur);
    }
  };

  return (
    <>
      <div
        className={
          !addBackBlur &&
          !editBackBlur &&
          !viewBackBlur &&
          !isMap &&
          !deleteBackBlur
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
        <ToastContainer autoClose={2000} />
      </div>

      {addBackBlur ? (
        <ActivityDataBaseForm
          handleBackgroundBlur={handleBackgroundBlurOnAdd}
          handleCrud={addActivityData}
          name="Add an activity to the database"
        />
      ) : null}

      {editBackBlur ? (
        <ActivityDataBaseForm
          handleBackgroundBlur={handleBackgroundBlurOnEdit}
          handleCrud={editActivityData}
          individualActivityInfo={individualActivityInfo}
          name="Edit an activity to the database"
        />
      ) : null}

      {viewBackBlur ? (
        <ActivityDataBaseForm
          handleBackgroundBlur={handleBackgroundBlurOnView}
          individualActivityInfo={individualActivityInfo}
          name="View an activity to the database"
        />
      ) : null}

      {deleteBackBlur ? (
        <ActiveStatus
          confirm={deleteStatus}
          handleDeleteSubmit={handleDelete}
          header="Are you sure you want to delete this Activity?"
        />
      ) : null}

      {isMap ? (
        <ActionMapForm
          activityId={activityId}
          handleBackgroundBlurOnMap={handleBackgroundBlurOnMap}
        />
      ) : null}
    </>
  );
}

export default Activity;
Activity.isPublicRoute = true;
