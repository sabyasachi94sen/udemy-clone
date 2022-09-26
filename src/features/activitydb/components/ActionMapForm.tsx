import { useState } from "react";

import { ActionMapStepForm } from "@/features/activitydb";

interface ActionMapFormProps {
  handleBackgroundBlurOnMap: () => void;
}

export function ActionMapForm({
  handleBackgroundBlurOnMap,
}: ActionMapFormProps) {
  const [backBlurAddStep, setBackBlurOnAddStep] = useState(false);
  const [backBlurEditStep, setBackBlurOnEditStep] = useState(false);
  const [storeStepData, setStoreStepData] = useState({ action: "", days: "" });
  const [count, setCount] = useState(0);
  const [stepDataId, setStepDataId] = useState("");
  const [activityName, setActivityName] = useState("");
  const [storeMapData, setMapData] = useState({
    before_register: [],
    after_register: [],
    before_deadline: [],
    after_deadline: [],
    before_activity: [],
  });

  const backgroundBlurOnAddStep = (activity_name: string) => {
    setBackBlurOnAddStep(!backBlurAddStep);
    setActivityName(activity_name);
  };

  const backgroundBlurOnEditStep = (id: string, activity_name: string) => {
    setBackBlurOnEditStep(!backBlurEditStep);
    setActivityName(activity_name);
    setStepDataId(id);
  };

  const submitStepData = (activity_name: string) => {
    setBackBlurOnAddStep(!backBlurAddStep);
    if (activity_name === "before_register") {
      const tempObj = storeMapData;

      tempObj.before_register.push(storeStepData);
      setMapData(tempObj);
    } else if (activityName === "after_register") {
      const tempObj = storeMapData;

      tempObj.after_register.push(storeStepData);
      setMapData(tempObj);
    } else if (activity_name === "before_deadline") {
      const tempObj = storeMapData;

      tempObj.before_deadline.push(storeStepData);
      setMapData(tempObj);
    } else if (activity_name === "after_deadline") {
      const tempObj = storeMapData;

      tempObj.after_deadline.push(storeStepData);
      setMapData(tempObj);
    } else if (activity_name === "before_activity") {
      const tempObj = storeMapData;

      tempObj.before_activity.push(storeStepData);
      setMapData(tempObj);
    }
  };

  const editStepData = (activity_name: string) => {
    setBackBlurOnEditStep(!backBlurAddStep);
    if (activity_name === "before_register") {
      const tempObj = storeMapData;

      tempObj.before_register[stepDataId] = storeStepData;
      setMapData(tempObj);
    } else if (activityName === "after_register") {
      const tempObj = storeMapData;

      tempObj.after_register[stepDataId] = storeStepData;
      setMapData(tempObj);
    } else if (activity_name === "before_deadline") {
      const tempObj = storeMapData;

      tempObj.before_deadline[stepDataId] = storeStepData;
      setMapData(tempObj);
    } else if (activity_name === "after_deadline") {
      const tempObj = storeMapData;

      tempObj.after_deadline[stepDataId] = storeStepData;
      setMapData(tempObj);
    } else if (activity_name === "before_activity") {
      const tempObj = storeMapData;

      tempObj.before_activity[stepDataId] = storeStepData;
      setMapData(tempObj);
    }
  };

  const deleteStepData = (index: string, activity_name: string) => {
    if (activity_name === "before_register") {
      const tempObj = storeMapData;

      tempObj.before_register.splice(index, 1);
      setMapData(tempObj);
      setCount(count + 1);
    } else if (activity_name === "after_register") {
      const tempObj = storeMapData;

      tempObj.after_register.splice(index, 1);
      setMapData(tempObj);
      setCount(count + 1);
    } else if (activity_name === "before_deadline") {
      const tempObj = storeMapData;

      tempObj.before_deadline.splice(index, 1);
      setMapData(tempObj);
      setCount(count + 1);
    } else if (activity_name === "after_deadline") {
      const tempObj = storeMapData;

      tempObj.after_deadline.splice(index, 1);
      setMapData(tempObj);
      setCount(count + 1);
    } else if (activity_name === "before_activity") {
      const tempObj = storeMapData;

      tempObj.before_activity.splice(index, 1);
      setMapData(tempObj);
      setCount(count + 1);
    }
  };

  const stepDataOnChange = (e) => {
    setStoreStepData({ ...storeStepData, [e.target.name]: e.target.value });
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
            <button className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
              type="button"
              onClick={() => backgroundBlurOnAddStep("before_register")}
            >
              Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
            </button>
          </div>

          {storeMapData.before_register.map((item, index) => (
            <div key={index} className="mt-2 flex h-[8vh]  w-full">
              <div className="flex h-[7vh] w-[69%] items-center justify-around text-xl">
                <p>
                  Action: <span className="font-bold">{item.action}</span>
                </p>
                <p>
                  Number of days: <span className="font-bold">{item.days}</span>
                </p>
              </div>
              <div className="flex h-[7vh] w-[30%] items-center justify-around">
                <button className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
                  type="button"
                  onClick={() =>
                    backgroundBlurOnEditStep(index, "before_register")
                  }
                >
                  Edit
                </button>
                <button className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                  type="button"
                  onClick={() => deleteStepData(index, "before_register")}
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
            <button className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
              type="button"
              onClick={() => backgroundBlurOnAddStep("after_register")}
            >
              Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
            </button>
          </div>

          {storeMapData.after_register.map((item, index) => (
            <div key={index} className="mt-2 flex h-[8vh]  w-full">
              <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                <p>
                  Action: <span className="font-bold">{item.action}</span>
                </p>
                <p>
                  Number of days: <span className="font-bold">{item.days}</span>
                </p>
              </div>
              <div className="flex h-[7vh] w-[30%] items-center justify-around">
                <button className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
                  type="button"
                  onClick={() =>
                    backgroundBlurOnEditStep(index, "after_register")
                  }
                >
                  Edit{" "}
                </button>
                <button className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                  type="button"
                  onClick={() => deleteStepData(index, "after_register")}
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
            <button className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
              type="button"
              onClick={() => backgroundBlurOnAddStep("before_deadline")}
            >
              Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
            </button>
          </div>
          {storeMapData.before_deadline.map((item, index) => (
            <div key={index} className="mt-2 flex h-[8vh] w-full">
              <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                <p>
                  Action: <span className="font-bold">{item.action}</span>
                </p>
                <p>
                  Number of days: <span className="font-bold">{item.days}</span>
                </p>
              </div>
              <div className="flex h-[7vh] w-[30%] items-center justify-around">
                <button className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
                  type="button"
                  onClick={() =>
                    backgroundBlurOnEditStep(index, "before_deadline")
                  }
                >
                  Edit{" "}
                </button>
                <button className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                  type="button"
                  onClick={() => deleteStepData(index, "before_deadline")}
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
            <button className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
              type="button"
              onClick={() => backgroundBlurOnAddStep("after_deadline")}
            >
              Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
            </button>
          </div>
          {storeMapData.after_deadline.map((item, index) => (
            <div key={index} className="mt-2 flex h-[8vh] w-full">
              <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                <p>
                  Action: <span className="font-bold">{item.action}</span>
                </p>
                <p>
                  Number of days: <span className="font-bold">{item.days}</span>
                </p>
              </div>
              <div className="flex h-[7vh] w-[30%] items-center justify-around">
                <button  className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600" type="button" type="button"
                 
                  onClick={() =>
                    backgroundBlurOnEditStep(index, "after_deadline")
                  }
                >
                  Edit
                </button>
                <button className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                  type="button"
                  onClick={() => deleteStepData(index, "after_deadline")}
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
            <button className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
              type="button"
              onClick={() => backgroundBlurOnAddStep("before_activity")}
            >
              Add step&nbsp; <img alt="plus-icon" src="/images/plus.png" />{" "}
            </button>
          </div>
          {storeMapData.before_activity.map((item, index) => (
            <div key={index} className="mt-2 flex h-[8vh]  w-full">
              <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                <p>
                  Action: <span className="font-bold">{item.action}</span>
                </p>
                <p>
                  Number of days: <span className="font-bold">{item.days}</span>
                </p>
              </div>
              <div className="flex h-[7vh] w-[30%] items-center justify-around">
                <button className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
                  type="button"
                  onClick={() =>
                    backgroundBlurOnEditStep(index, "before_activity")
                  }
                >
                  Edit
                </button>
                <button className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                  type="button"
                  onClick={() => deleteStepData(index, "before_activity")}
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
            activity={activityName}
            header={
              backBlurAddStep ? "Add Action Map Step" : "Edit Action Map Step"
            }
            onChange={stepDataOnChange}
            onClick1={
              backBlurAddStep
                ? backgroundBlurOnAddStep
                : backgroundBlurOnEditStep
            }
            onClick2={backBlurAddStep ? submitStepData : editStepData}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
