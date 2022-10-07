import { Account } from "@/api";
import { BaseModal, Form, Button } from "@/shared/components";
import {
  useActionMapList,
  useDeleteActionMapStep,
} from "@/shared/services/activity.service";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import {
  CreateActionMapStepModal,
  UpdateActionMapStepModal,
} from "@/features/activitydb";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStoreData } from "@/shared/stores/modal.store";

export function ActionMapModal({ isOpen }: { isOpen: boolean }) {
  const [actionMap, setActionMap] = useState(null);
  const [actionMapPhase,setActionMapPhase]=useState("")
  const [stepData, setStepData] = useState({});
  const [stepId, setStepId] = useState(null);

  const { isModalOpen, onModalClose, currModalKey, onModalOpen, selectedData } =
    useModal();
  const router = useRouter();

  const { setStoredData } = useStoreData();


  useEffect(() => {
    if (selectedData != null) setStoredData({ activity_id: selectedData?.id,activity_name: selectedData?.activity_name });
  }, [selectedData]);

  const actionMapLisQuery = useActionMapList(selectedData?.id);
  const deleteActionMapStepMutation = useDeleteActionMapStep();
  const data = actionMapLisQuery?.data;

  return (
    <>
      <CreateActionMapStepModal
        isOpen={currModalKey === "createActionStep"}
        action_map={actionMap}
        action_map_phase={actionMapPhase}
      />
      <UpdateActionMapStepModal
        isOpen={currModalKey === "updateActionStep"}
        action_step_id={stepId}
        action_step_data={stepData}
        action_map_phase={actionMapPhase}
      />

      <BaseModal
        hasHeader
        showHeaderCloseButton
        isOpen={isModalOpen && isOpen}
        modalWidth="max-w-[60%]"
        title="Add Action Map"
        onRequestClose={() => {
          onModalClose();
        }}
      >
        <Form<Account>>
          {({ register }) => (
            <div className="h-[80vh] overflow-y-scroll pb-6">
              <h1 className="mt-4 text-center text-2xl font-bold text-[#6F6F6F]">
                Activity Name: {selectedData?.activity_name}
              </h1>
              <div className="mx-auto mt-10 h-auto  w-[90%] rounded-lg bg-[#F2F0F0] ">
                <div className="flex h-[10vh] w-[100%] items-center justify-between pl-10 pr-10">
                  <h1 className="text-center text-2xl font-bold text-[#6F6F6F]">
                    Before registration open
                  </h1>
                  <button
                    className="flex h-[6vh] w-[20%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600"
                    type="button"
                    onClick={() => {
                      onModalOpen("createActionStep");
                      setActionMap(1);
                      setActionMapPhase("Before registration open")
                    }}
                  >
                    Add step&nbsp;{" "}
                    <img alt="plus-icon" src="/images/plus.png" />{" "}
                  </button>
                </div>

                {data &&
                  data[0]?.before_registration_open &&
                  data[0].before_registration_open.map((item, index) => (
                    <div key={index} className="mt-2 flex h-[8vh]  w-full">
                      <div className="flex h-[7vh] w-[69%] items-center justify-around text-xl">
                        <p>
                          Action:{" "}
                          <span className="font-bold">
                            {item && item?.action}
                          </span>
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
                          onClick={() => {
                            onModalOpen("updateActionStep");
                            setStepId(item && item?.id);
                            setStepData(item);
                            setActionMapPhase("Before registration open")
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                          type="button"
                          onClick={() =>
                            deleteActionMapStepMutation.mutate({
                              id: item && item?.id,
                            })
                          }
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
                    onClick={() => {
                      onModalOpen("createActionStep");
                      setActionMap(2);
                      setActionMapPhase("After registration open")
                    }}
                  >
                    Add step&nbsp;{" "}
                    <img alt="plus-icon" src="/images/plus.png" />{" "}
                  </button>
                </div>

                {data &&
                  data[1]?.after_registration_open &&
                  data[1].after_registration_open.map((item, index) => (
                    <div key={index} className="mt-2 flex h-[8vh]  w-full">
                      <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                        <p>
                          Action:{" "}
                          <span className="font-bold">
                            {item && item?.action}
                          </span>
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
                          onClick={() => {
                            onModalOpen("updateActionStep");
                            setStepId(item && item?.id);
                            setStepData(item);
                            setActionMapPhase("After registration open")
                          }}
                        >
                          Edit{" "}
                        </button>
                        <button
                          className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                          type="button"
                          onClick={() =>
                            deleteActionMapStepMutation.mutate({
                              id: item && item?.id,
                            })
                          }
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
                    onClick={() => {
                      onModalOpen("createActionStep");
                      setActionMap(3);
                      setActionMapPhase("Before application deadline")
                    }}
                  >
                    Add step&nbsp;{" "}
                    <img alt="plus-icon" src="/images/plus.png" />{" "}
                  </button>
                </div>
                {data &&
                  data[2]?.before_application_deadline &&
                  data[2].before_application_deadline.map((item, index) => (
                    <div key={index} className="mt-2 flex h-[8vh] w-full">
                      <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                        <p>
                          Action:{" "}
                          <span className="font-bold">
                            {item && item?.action}
                          </span>
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
                          onClick={() => {
                            onModalOpen("updateActionStep");
                            setStepId(item && item?.id);
                            setStepData(item);
                            setActionMapPhase("Before application deadline")
                          }}
                        >
                          Edit{" "}
                        </button>
                        <button
                          className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                          type="button"
                          onClick={() =>
                            deleteActionMapStepMutation.mutate({
                              id: item && item?.id,
                            })
                          }
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
                    onClick={() => {
                      onModalOpen("createActionStep");
                      setActionMap(4);
                      setActionMapPhase("After application deadline")
                    }}
                  >
                    Add step&nbsp;{" "}
                    <img alt="plus-icon" src="/images/plus.png" />{" "}
                  </button>
                </div>
                {data &&
                  data[3]?.after_application_deadline &&
                  data[3].after_application_deadline.map((item, index) => (
                    <div key={index} className="mt-2 flex h-[8vh] w-full">
                      <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                        <p>
                          Action:{" "}
                          <span className="font-bold">
                            {item && item?.action}
                          </span>
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
                          onClick={() => {
                            onModalOpen("updateActionStep");
                            setStepId(item && item?.id);
                            setStepData(item);
                            setActionMapPhase("After application deadline")
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                          type="button"
                          onClick={() =>
                            deleteActionMapStepMutation.mutate({
                              id: item && item?.id,
                            })
                          }
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
                    onClick={() => {
                      onModalOpen("createActionStep");
                      setActionMap(5);
                      setActionMapPhase("Before activity start date")
                    }}
                  >
                    Add step&nbsp;{" "}
                    <img alt="plus-icon" src="/images/plus.png" />{" "}
                  </button>
                </div>
                {data &&
                  data[4]?.before_activity_start_date &&
                  data[4].before_activity_start_date.map((item, index) => (
                    <div key={index} className="mt-2 flex h-[8vh]  w-full">
                      <div className="flex h-[7vh] w-[69%] items-center justify-between justify-around text-xl">
                        <p>
                          Action:{" "}
                          <span className="font-bold">
                            {item && item?.action}
                          </span>
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
                          onClick={() => {
                            onModalOpen("updateActionStep");
                            setStepId(item && item?.id);
                            setStepData(item);
                            setActionMapPhase("Before activity start date")
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="flex h-[5vh] w-[40%] items-center justify-center rounded-md bg-[#6F6F6F] text-center text-[18px] text-white hover:bg-blue-600"
                          type="button"
                          onClick={() =>
                            deleteActionMapStepMutation.mutate({
                              id: item && item?.id,
                            })
                          }
                        >
                          Delete{" "}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </Form>
      </BaseModal>
    </>
  );
}
