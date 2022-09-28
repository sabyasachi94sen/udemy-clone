import { handleMutation, handleQuery } from "@/shared/services/api-client";


interface ActionMapAddStepDataVal{
  action_map : string,
  activity :string,
  action : string,
  deadline_days : string
}


interface ActionMapEditStepDataVal{
  stepId: string,
  data: {action : string,
  deadline_days : string
  }
}

const ActivityList = () => handleQuery({ resourceUrl: "activity_api" });

const ActivityAdd = (postData) =>
  handleMutation({
    resourceUrl: "activity_api",
    method: "POST",
    reqBody: postData,
  });

const AcitivityEdit = (putData) => {
  const jsonObj = {
    ...putData.data,
  };
  const activityId = putData.activity_id;

  handleMutation({
    resourceUrl: `activity_api/${activityId}`,
    method: "PUT",
    reqBody: jsonObj,
  });
};

const ActivityDelete = (activityId: string) =>
  handleMutation({
    resourceUrl: `activity_api/${activityId}`,
    method: "DELETE",
  });

const ActivityActionMapList = (activity_id: string) =>
  handleQuery({ resourceUrl: `action_map_api/?activity_id=${activity_id}` });


  const ActionMapStepAdd=(actionMapAddStepData: ActionMapAddStepDataVal)=>handleMutation({ resourceUrl: "action_map_api",method:"POST",reqBody: actionMapAddStepData })


  const ActionMapStepEdit=(actionMapEditStepData: ActionMapEditStepDataVal)=>{

    const { stepId } = actionMapEditStepData;
    const jsonObj={
      ...actionMapEditStepData.data
    }

    return handleMutation({ resourceUrl: `action_map_api/${stepId}`,method:"PUT" ,reqBody: jsonObj })
  }

  const ActionMapStepDelete=(delete_step_id:string)=>handleMutation({ resourceUrl: `action_map_api/${delete_step_id}` ,method: "DELETE" }) 




export const ActivityResObj = {
  activity_list: ActivityList,
  activity_add: ActivityAdd,
  activity_edit: AcitivityEdit,
  activity_delete: ActivityDelete,
  activity_actionmap_list: ActivityActionMapList,
  action_map_step_add:ActionMapStepAdd,
  action_map_step_edit:ActionMapStepEdit,
  action_map_step_delete: ActionMapStepDelete,
};
