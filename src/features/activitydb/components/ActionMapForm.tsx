import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { ActionMapStepForm } from "@/features/activitydb";
import { ActivityResObj } from "@/features/api";


interface ActionMapFormProps {
  handleBackgroundBlurOnMap: () => void;
  activityId: string;
}

interface StepFormValues {
  action: string;
  deadline_days: string;
}





export function ActionMapForm({
  handleBackgroundBlurOnMap,
  activityId,
}: ActionMapFormProps) {
  const [backBlurAddStep, setBackBlurOnAddStep] = useState(false);
  const [backBlurEditStep, setBackBlurOnEditStep] = useState(false);
  const [stepData,setStepData]=useState({})
  const [mutateParams, setMutateParams] = useState({
    mutateFunc: ActivityResObj.action_map_step_add,
    action: "add",
  });

  const [stepId, setStepId] = useState("");

  const [activityName, setActivityName] = useState("");

  const { data } = useQuery(["action-map-list"], () =>
    ActivityResObj.activity_actionmap_list(activityId),
  );
  const queryClient = useQueryClient();

  const { mutate } = useMutation(mutateParams.mutateFunc, {
    onSuccess: () => {
      if (mutateParams.action === "add") setBackBlurOnAddStep(!backBlurAddStep);
      else if(mutateParams.action==="edit") setBackBlurOnEditStep(!backBlurEditStep)

      setTimeout(() => {
        queryClient.invalidateQueries("action-map-list");
      }, 1000);
    },
    onError: () => {},
  });

  const backgroundBlurOnAddStep = (add_step_id: string) => {
    setBackBlurOnAddStep(!backBlurAddStep);
    setStepId(add_step_id);
  };

  const backgroundBlurOnEditStep = (edit_step_id: string,stepFormVal: StepFormValues) => {
    setBackBlurOnEditStep(!backBlurEditStep);
    setStepId(edit_step_id);
    setStepData(stepFormVal)
  };

  const submitStepData = (addStepFormValues: StepFormValues) => {
    const mutateObj = {
      ...addStepFormValues,
      activity: activityId,
      action_map: stepId,
    };

    setMutateParams({
      mutateFunc: ActivityResObj.action_map_step_add,
      action: "add",
    });

    setTimeout(() => {
      mutate(mutateObj);
    }, 1000);
  };

  const editStepData = (editStepFormValues: StepFormValues) => {
    const mutateObj={
      stepId,
      data: { ...editStepFormValues }
    }


    setMutateParams({ mutateFunc:ActivityResObj.action_map_step_edit,action:"edit" })
    setTimeout(()=>{
      mutate(mutateObj)
    },1000)
  };

  const deleteStepData = (delete_step_id:string) => {
    setMutateParams({mutateFunc: ActivityResObj.action_map_step_delete,action: "DELETE"})

    setTimeout(()=>{
       mutate(delete_step_id)
    },1000)
  };

  return (
    <>
      <div
        className={`relative z-10 mx-auto -mt-[150vh] h-[90vh] w-[50%] overflow-y-scroll rounded-lg border-2 bg-white ${
          !backBlurAddStep && !backBlurEditStep ? `` : `opacity-[0.7]`
        } `}
      >
        <div className="mx-auto flex h-[10vh] w-[90%] items-center justify-around">
          <div
            className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
            onClick={handleBackgroundBlurOnMap}
          >
            <img alt="back-icon" src="/images/backArrow.png" />
          </div>
          <h1 className="relative right-11 ml-3 text-3xl font-bold text-[#3AB0FB]">
            View or update Action Map
          </h1>
        </div>
        <h1 className="text-center text-2xl font-bold text-[#6F6F6F]">
          Activity Name: Math Exam
        </h1>
        <div className="mx-auto mt-10 h-auto  w-[90%] rounded-lg bg-[#F2F0F0]">
          <div className="flex h-[10vh] w-[100%] items-center justify-between pl-10 pr-10">
            <h1 className="text-center text-2xl font-bold text-[#6F6F6F]">
              Before registration open
            </h1>
            <button
              className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
              type="button"
              onClick={() => backgroundBlurOnAddStep("1")}
            >
              Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
            </button>
          </div>

          {data &&
            data[0]?.before_registration_open &&
            data[0].before_registration_open.map((item, index) => (
              <div key={index} className="mt-2 flex h-[8vh]  w-full">
                <div className="flex h-[7vh] w-[69%] items-center justify-around text-xl">
                  <p>
                    Action:{" "}
                    <span className="font-bold">{item && item?.action}</span>
                  </p>
                  <p>
                    Number of days:{" "}
                    <span className="font-bold">
                      {item && item?.deadline_days}
                    </span>
                  </p>
                </div>
                <div className="flex h-[7vh] w-[30%] items-center justify-around">
                  <button
                    className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    onClick={() => backgroundBlurOnEditStep(item && item?.id,item)}
                  >
                    Edit
                  </button>
                  <button
                    className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    onClick={() => deleteStepData(item && item?.id)}
                  >
                    Delete{" "}
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="mx-auto mt-10 h-auto  w-[90%] rounded-lg bg-[#F2F0F0]">
          <div className="flex h-[10vh] w-[100%] items-center justify-between pl-10 pr-10">
            <h1 className="text-center text-2xl font-bold text-[#6F6F6F]">
              {" "}
              After registration open
            </h1>
            <button
              className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
              type="button"
              onClick={() => backgroundBlurOnAddStep("2")}
            >
              Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
            </button>
          </div>

          {data &&
            data[1]?.after_registration_open &&
            data[1].after_registration_open.map((item, index) => (
              <div key={index} className="mt-2 flex h-[8vh]  w-full">
                <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                  <p>
                    Action:{" "}
                    <span className="font-bold">{item && item?.action}</span>
                  </p>
                  <p>
                    Number of days:{" "}
                    <span className="font-bold">
                      {item && item?.deadline_days}
                    </span>
                  </p>
                </div>
                <div className="flex h-[7vh] w-[30%] items-center justify-around">
                  <button
                    className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    onClick={() => backgroundBlurOnEditStep(item && item?.id,item)}
                  >
                    Edit{" "}
                  </button>
                  <button
                    className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    onClick={() => deleteStepData(item && item?.id)}
                  >
                    Delete{" "}
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="mx-auto mt-10 h-auto  w-[90%] rounded-lg bg-[#F2F0F0]">
          <div className="mx-auto flex h-[10vh] w-[100%] items-center justify-between pl-10 pr-10 ">
            <h1 className="text-center text-2xl font-bold text-[#6F6F6F]">
              Before application deadline
            </h1>
            <button
              className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
              type="button"
              onClick={() => backgroundBlurOnAddStep("3")}
            >
              Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
            </button>
          </div>
          {data &&
            data[2]?.before_application_deadline &&
            data[2].before_application_deadline.map((item, index) => (
              <div key={index} className="mt-2 flex h-[8vh] w-full">
                <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                  <p>
                    Action:{" "}
                    <span className="font-bold">{item && item?.action}</span>
                  </p>
                  <p>
                    Number of days:{" "}
                    <span className="font-bold">
                      {item && item?.deadline_days}
                    </span>
                  </p>
                </div>
                <div className="flex h-[7vh] w-[30%] items-center justify-around">
                  <button
                    className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    onClick={() => backgroundBlurOnEditStep(item && item?.id,item)}
                  >
                    Edit{" "}
                  </button>
                  <button
                    className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    onClick={() => deleteStepData(item && item?.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="mx-auto mt-10 h-auto w-[90%] rounded-lg bg-[#F2F0F0] pl-10 pr-10">
          <div className="mx-auto flex h-[10vh] w-[100%] items-center justify-between ">
            <h1 className="text-center text-2xl font-bold text-[#6F6F6F]">
              After application deadline{" "}
            </h1>
            <button
              className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
              type="button"
              onClick={() => backgroundBlurOnAddStep("4")}
            >
              Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
            </button>
          </div>
          {data &&
            data[3]?.after_application_deadline &&
            data[3].after_application_deadline.map((item, index) => (
              <div key={index} className="mt-2 flex h-[8vh] w-full">
                <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                  <p>
                    Action:{" "}
                    <span className="font-bold">{item && item?.action}</span>
                  </p>
                  <p>
                    Number of days:{" "}
                    <span className="font-bold">
                      {item && item?.deadline_days}
                    </span>
                  </p>
                </div>
                <div className="flex h-[7vh] w-[30%] items-center justify-around">
                  <button
                    className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    type="button"
                    onClick={() => backgroundBlurOnEditStep(item && item?.id,item)}
                  >
                    Edit
                  </button>
                  <button
                    className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    onClick={() => deleteStepData(item && item?.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="mx-auto mt-10 h-auto  w-[90%] rounded-lg bg-[#F2F0F0]">
          <div className="mx-auto flex h-[10vh] w-[100%] items-center justify-between pl-10 pr-10">
            <h1 className="text-center text-2xl font-bold text-[#6F6F6F]">
              Before activity start date{" "}
            </h1>
            <button
              className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
              type="button"
              onClick={() => backgroundBlurOnAddStep("5")}
            >
              Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
            </button>
          </div>
          {data &&
            data[4]?.before_activity_start_date &&
            data[4].before_activity_start_date.map((item, index) => (
              <div key={index} className="mt-2 flex h-[8vh]  w-full">
                <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                  <p>
                    Action:{" "}
                    <span className="font-bold">{item && item?.action}</span>
                  </p>
                  <p>
                    Number of days:{" "}
                    <span className="font-bold">
                      {item && item?.deadline_days}
                    </span>
                  </p>
                </div>
                <div className="flex h-[7vh] w-[30%] items-center justify-around">
                  <button
                    className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    onClick={() => backgroundBlurOnEditStep(item && item?.id,item)}
                  >
                    Edit
                  </button>
                  <button
                    className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    onClick={() => deleteStepData(item && item?.id)}
                  >
                    Delete{" "}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {backBlurAddStep || backBlurEditStep ? (
        <div className="relative z-20 -mt-[100vh] flex h-[160vh] w-full justify-center pt-32 ">
          <ActionMapStepForm
           
            handleActionMapStepCrud={
              backBlurAddStep ? submitStepData : editStepData
            }
            handleBackgroundBlur={
              backBlurAddStep
                ? backgroundBlurOnAddStep
                : backgroundBlurOnEditStep
            }
            header={
              backBlurAddStep ? "Add Action Map Step" : "Edit Action Map Step"
            }
            stepData={stepData}
          />
        </div>
      ) : null}
    </>
  );
}
