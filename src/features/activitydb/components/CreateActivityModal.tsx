import { Account } from "@/api";
import { BaseModal, Button, Form, Input } from "@/shared/components";
import { useCreateActivity } from "@/shared/services/activity.service";
import { useModal } from "@/shared/stores/modal.store";
import { useState } from "react";
import { Slider } from "@material-ui/core";

export function CreateActivityModal({ isOpen }: { isOpen: boolean }) {
  const activityTypeOptions=[{
    option: "Exam"
  },{
    option: "Competition"
  },{
    option: "STEP programs"
  },{
    option: "Online Course"
  },{
    option: "Summer Schools : selective speciality"
  },{
    option: "Summer Schools : credit bearing"
  },{
    option: "Other"
  }]


  const subjectOptions=[{
    option: "Maths"
  },{
    option: "Computer"
  },{
    option: "Physics"
  },{
    option: "Chemistry"
  },{
    option: "Physics"
  },{
    option: "Chemistry"
  },{
    option: "Biology"
  },{
    option: "Environmental Science"
  },{
    option: "General Science"
  },{
    option:"Economics/Business/Finance"
  },{
    option: "General Science"
  },{
    option:"Economics/Business/Finance"
  },{
    option: "English"
  },{
    option: "Political Science"
  },{
    option: "Psychology"
  },{
    option: "Other"
  }]




const applicationOptions=[{
  
    option: "Fee"
  
},{
  option: "Form"
},{
  option: "Essay"
},{
  option:"Multiple Essays"
},{
  option: "LOR"
},{
  option: "Multiple LORs"
},{
  option: "Other"
}]



const locationTypeOptions=[{
  option: "Country / City"
},{
  option: "Virtual"
},{
  option: "Country / City & Virtual"
}]

const [gradeVal, setGradeVal] = useState([0, 100]);
const [ageVal, setAgeVal] = useState([0, 100]);

const handleGradeVal = (e: SyntheticEvent, data: number[]) => {
  setGradeVal(data);
  window.localStorage.setItem("gradeVal",JSON.stringify(data))
};

const handleAgeVal = (e: SyntheticEvent, data: number[]) => {
  setAgeVal(data);
  window.localStorage.setItem("ageVal",JSON.stringify(data))
};

  const { isModalOpen, onModalClose } = useModal();
  const createActivityMutation = useCreateActivity(() => {
    onModalClose();
  });

  

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      title="Create Activity"
      modalWidth="max-w-[90%]"
      onRequestClose={() => {
        onModalClose();
      }}
    >
   
        <Form<Account>
          onSubmit={(formData) =>
            createActivityMutation.mutate({ data: {...formData,age_range:ageVal,grade_range:gradeVal} })
          }
        >
          {({ register }) => (
            <div>
           
            <div className="mx-auto flex h-[70vh] w-full justify-around overflow-y-scroll">
              <div className="h-auto w-[40%]">
                <h1 className="mb-6 text-[1.4rem] font-bold text-[#6F6F6F]">
                  Activity Information
                </h1>
                <div className="mt-2 flex items-center">
                  <span className="text-md font-bold">Name</span>
                  <input
                    className="relative ml-10 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
                    {...register("activity_name")}
                    // defaultValue={name!=="Add an activity to the database"?individualActivityInfo?.activity_name: null}
                    // disabled={name==="View an activity to the database"}
                    type="text"
                  />
                  <br />
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">Type</span>
                  <select
                    className="relative ml-12 h-[5vh] w-[85%] rounded-md bg-[#EEEE] outline-none"
                    {...register("activity_type")}
                    
                    // disabled={name==="View an activity to the database"}
                  >
                    <option>Select Type</option>
                    {activityTypeOptions.map((item,index)=><option key={index} 
                    // selected={!!(name!=="Add an activity to the database" && individualActivityInfo?.activity_type==item.option)}
                    >
                      {item.option}
                      </option>)}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">Subject</span>
                  <select
                    className="relative ml-7 h-[5vh] w-[100%] rounded-md bg-[#EEEE] outline-none"
                    {...register("subject")}
                    // disabled={name==="View an activity to the database"}
                  >
                    <option>Select Subject</option>
                    {subjectOptions.map((item,index)=><option key={index} 
                    // selected={!!(name!=="Add an activity to the database" && individualActivityInfo?.subject==item.option)}
                    >{item.option}</option>)}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">Application requirement</span>
                  <select
                    className="relative h-[5vh] w-[82%] rounded-md bg-[#EEEE] outline-none"
                    {...register("application_requirement")}
                    // disabled={name==="View an activity to the database"}
                  
                  >
                    {applicationOptions.map((item,index)=><option key={index} 
                    // selected={!!(name!=="Add an activity to the database" && individualActivityInfo?.application_requirement==item.option)}
                    >{item.option}</option>)}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">Location Type</span>
                  <select
                    className="relative ml-14 h-[5vh] w-[71%] rounded-md bg-[#EEEE] outline-none"
                    {...register("location_type")}
                    // disabled={name==="View an activity to the database"}
                  >
                    <option>Location Type</option>
                    {locationTypeOptions.map((item,index)=><option key={index} 
                    // selected={!!(name!=="Add an activity to the database" && individualActivityInfo?.location_type==item.option)}
                    >{item.option}</option>)}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">Country of Activity</span>
                  <select
                    className="relative ml-6 h-[5vh] w-[76%] rounded-md bg-[#EEEE] outline-none"
                    {...register("country_residence")}
                    // disabled={name==="View an activity to the database"}
                  >
                    <option>Select Country</option>
                    <option selected={name!=="Add an activity to the database"}>India</option>
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">City of Activity</span>
                  <input
                    className="relative ml-12 h-[5vh] w-[71%] rounded-md bg-[#EEEE]"
                    {...register("country_citizenship")}
                    // defaultValue={individualActivityInfo?.country_residence}
                    // disabled={name==="View an activity to the database"}
                    type="text"
                  />
                  <br />
                </div>
      
                <div className="mt-6 flex items-center">
                  <span className="text-md font-bold">URL</span>
                  <input
                    className="relative ml-14 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
                    {...register("url")}
                    // defaultValue={individualActivityInfo?.url}
                    // disabled={name==="View an activity to the database"}
                    type="text"
                  />
                  <br />
                </div>
      
                <h1 className="mt-6 mb-4 text-lg text-[1.45rem] font-bold text-[#6F6F6F]">Key Dates</h1>
                <div className="mt-2 flex items-center">
                  <span className="text-md font-bold">Registration open</span>
                  <input
                    className="relative ml-10 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
                    {...register("registration_open")}
                    // defaultValue={individualActivityInfo?.registration_open}
                    // disabled={name==="View an activity to the database"}
                    type="date"
                  />
                  <br />
                </div>
      
                <div className="mt-4 mb-5 flex items-center">
                  <span className="text-md font-bold">Application Date</span>
                  <input
                    className="relative ml-10 h-[5vh] w-[83%] rounded-md bg-[#EEEE]"
                    {...register("application_deadline")}
                    // defaultValue={moment(individualActivityInfo?.created_at).format("YYYY-MM-DD")}
                    // disabled={name==="View an activity to the database"}
                    type="date"
                  />
                  <br />
                </div>
      
                <div className="mb-6 flex items-center">
                  <span className="text-md font-bold">Activity Start</span>
                  <input
                    className="relative ml-10 h-[5vh] w-[66%] rounded-md bg-[#EEEE]"
                    {...register("activity_start_date")}
                    // defaultValue={individualActivityInfo?.activity_start_date}
                    // disabled={name==="View an activity to the database"}
                    type="date"
                  />
                  <br />
                </div>
      
                <div className="mb-6 flex items-center">
                  <span className="text-md font-bold">Activity End</span>
                  <input
                    className="relative ml-12 h-[5vh] w-[66%] rounded-md bg-[#EEEE]"
                    {...register("activity_end_date")}
                    // defaultValue={individualActivityInfo?.activity_end_date}
                    // disabled={name==="View an activity to the database"}
                    type="date"
                  />
                  <br />
                </div>
              </div>
              <div className="h-auto w-[45%] border-l-2 border-l-cyan-400 pl-12">
                <h1 className="mb-6 text-[1.4rem] font-bold text-[#6F6F6F]">
                  Eligibility Restrictions
                </h1>
                <div className="mt-2 flex items-center">
                  <span className="text-md font-bold">Range Type</span>
                  <select
                    className="relative left-16 h-[5vh] w-[40%] rounded-md bg-[#EEEE] outline-none"
                    {...register("range_type")}
                  >
                    <option>Select range type</option>
                    <option>Grade range</option>
                    <option>Age range </option>
                  </select>
                </div>
      
                <div className="mt-4 flex w-[100%] items-center justify-between">
                  <span className="text-md font-bold">Grade Range</span>
                  {/* <div className="flex justify-around items-center w-[40%] ml-14">
                     <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative" name="name" type="text"/><br />
                       <hr className="h-[0.8vh] w-[2vw] bg-black ml-2"/>
                       <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative ml-3" name="name" type="text"/><br />
                     </div> */}
                  <input {...register("grade_low")} className="w-[8%] h-[3vh] relative left-[4%]" type="text" value={gradeVal[0]} />
                  <div className="w-[50%]">
                    <Slider className="mt-2" value={gradeVal} onChange={handleGradeVal}  />
                  </div>
      
                  <input {...register("grade_high")} className="w-[8%] h-[3vh]" type="text" value={gradeVal[1]} />
                </div>
      
                <div className="mt-4 flex w-[100%] items-center justify-between">
                  <span className="text-md font-bold">Age Range</span>
                  {/* <div className="flex justify-around items-center w-[40%] ml-[4.6vw]">
                      <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative" name="name" type="text"/><br />
                      <hr className="h-[0.8vh] w-[2vw] bg-black ml-2"/>
                      <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative ml-3" name="name" type="text"/><br />
                    </div> */}
      
                  <input className="w-[8%] relative left-[6%]" type="text" {...register("age_low")} value={ageVal[0]} />
      
                  <div className="w-[50%]">
                    <Slider className="mt-2 relative left-[2%]" value={ageVal} onChange={handleAgeVal} />
                  </div>
      
                  <input {...register("age_high")} className="w-[8%] relative" type="text" value={ageVal[1]} />
                </div>
                <div className="text-md mt-5 flex w-[60%] flex-col">
                  <p className="text-md font-bold font-bold ">
                    Only open to residence of these countries
                  </p>
                  <select
                    className="text-small font-small relative mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3"
                    {...register("only open to residence of these countries")}
                    // selected={name!=="Add an activity to the database"}
                  >
                    <option>Select country</option>
                    <option 
                    // selected={name!=="Add an activity to the database"}
                    >India</option>
                  </select>
                </div>
                <div className="text-md mt-5 flex w-[60%] flex-col">
                  <p className="text-md font-bold font-bold ">
                    Only open to citizens of these countries
                  </p>
                  <select
                    className="text-small font-small relative mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3"
                    {...register("Only open to citizens of these countries")}
                    // disabled={name==="View an activity to the database"}
                  >
                    <option>Select country</option>
                    <option 
                    // selected={name!=="Add an activity to the database"}
                    >India</option>
                  </select>
                </div>
                <div className="mt-14">
                  <h1 className="text-lg text-[1.45rem] font-bold text-[#6F6F6F]">Remarks</h1>
                  <textarea className="mt-5 h-[15vh] w-[70%] bg-[#EEEE]" {...register("remarks")} 
                  // defaultValue={individualActivityInfo?.remarks} disabled={name==="View an activity to the database"}
                  />
                </div>
      
              </div>
              
            </div>
            <div className="mx-auto mt-6 mb-6 flex justify-center">
                <Button
                  isLoading={createActivityMutation.isLoading}
                  type="submit"
                  width="w-[15%]"
                >
                  Submit
                </Button>
              </div>
          </div>
          )}
        </Form>
 
    </BaseModal>
  );
}
