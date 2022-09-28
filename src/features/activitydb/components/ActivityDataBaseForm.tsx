import { Slider } from "@material-ui/core";
import { SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";


interface ActivityDataBaseFormProps {
  handleBackgroundBlur: () => void;
  individualActivityInfo: object;
  addActivityData: ()=>void;
  name: string;
}

interface FormValues {
  activity_name:           string;
  activity_type:           string;
  subject:                 string;
  location_type:           string;
  country_activity:        string;
  country_residence:       string;
  country_citizenship:     string;
  grade_range:             number[];
  age_range:               number[];
  application_requirement: string;
  registration_open:       string;
  application_deadline:    string;
  activity_start_date:     string;
  activity_end_date:       string;
  remarks:                 string;
}

export function ActivityDataBaseForm({
  handleBackgroundBlur,
  individualActivityInfo,
  addActivityData,
  name,
}: ActivityDataBaseFormProps) {


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
  };

  const handleAgeVal = (e: SyntheticEvent, data: number[]) => {
    setAgeVal(data);
  };

 
   
  const { handleSubmit,register }=useForm<FormValues>()

  console.log(individualActivityInfo)

  return (
    <div className="relative z-10 mx-auto -mt-[150vh] h-[100vh] w-[80%] overflow-y-scroll rounded-lg border-2 bg-[#FDFEFF]">
      <div className="ml-7 flex h-[10vh] w-[60%] items-center justify-around">
        <div
          className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
          onClick={handleBackgroundBlur}
        >
          <img alt="back-icon" src="/images/backArrow.png" />
        </div>
        <h1 className="ml-3 text-4xl font-bold text-[#3AB0FB]">{name}</h1>
      </div>
      <div className="mx-auto flex h-auto w-[90%] justify-around">
        <div className="h-auto w-[40%]">
          <h1 className="mb-6 text-[1.4rem] font-bold text-[#6F6F6F]">
            Activity Information
          </h1>
          <div className="mt-2 flex items-center">
            <span className="text-md font-bold">Name</span>
            <input
              className="relative ml-10 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
              {...register("activity_name")}
              type="text"
              defaultValue={name!="Add an activity to the database"?individualActivityInfo?.activity_name: null}
              disabled={name=="View an activity to the database"}
            />
            <br />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">Type</span>
            <select
              className="relative ml-12 h-[5vh] w-[85%] rounded-md bg-[#EEEE] outline-none"
              {...register("activity_type")}
              
              disabled={name=="View an activity to the database"}
            >
              <option>Select Type</option>
              {activityTypeOptions.map((item,index)=>{
                return <option key={index} selected={name!="Add an activity to the database" && individualActivityInfo?.activity_type==item.option?true: false}>{item.option}</option>
              })}
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">Subject</span>
            <select
              className="relative ml-7 h-[5vh] w-[100%] rounded-md bg-[#EEEE] outline-none"
              {...register("subject")}
              disabled={name=="View an activity to the database"}
            >
              <option>Select Subject</option>
              {subjectOptions.map((item,index)=>{
                return <option key={index} selected={name!="Add an activity to the database" && individualActivityInfo?.subject==item.option?true:false}>{item.option}</option>
              })}
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">Application requirement</span>
            <select
              className="relative h-[5vh] w-[82%] rounded-md bg-[#EEEE] outline-none"
              {...register("application_requirement")}
              disabled={name=="View an activity to the database"}
            >
              {applicationOptions.map((item,index)=>{
                return <option key={index} selected={name!="Add an activity to the database" && individualActivityInfo?.application_requirement==item.option?true:false}>{item.option}</option>
              })}
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">Location Type</span>
            <select
              className="relative ml-14 h-[5vh] w-[71%] rounded-md bg-[#EEEE] outline-none"
              {...register("location_type")}
            >
              <option>Location Type</option>
              {locationTypeOptions.map((item,index)=>{
                return <option key={index} selected={name!="Add an activity to the database" && individualActivityInfo?.location_type==item.option?true:false}>{item.option}</option>
              })}
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">Country of Activity</span>
            <select
              className="relative ml-6 h-[5vh] w-[76%] rounded-md bg-[#EEEE] outline-none"
             {...register("country_residence")}
            >
              <option>Select Country</option>
              <option>India</option>
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">City of Activity</span>
            <input
              className="relative ml-12 h-[5vh] w-[71%] rounded-md bg-[#EEEE]"
              {...register("country_citizenship")}
              type="text"
            />
            <br />
          </div>

          <div className="mt-6 flex items-center">
            <span className="text-md font-bold">URL</span>
            <input
              className="relative ml-14 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
              {...register("url")}
              type="text"
            />
            <br />
          </div>

          <h1 className="mt-4 text-lg font-bold text-[#6F6F6F]">Key Dates</h1>
          <div className="mt-2 flex items-center">
            <span className="text-md font-bold">Registration open</span>
            <input
              className="relative ml-10 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
              {...register("registration_open")}
              type="date"
            />
            <br />
          </div>

          <div className="mt-4 mb-5 flex items-center">
            <span className="text-md font-bold">Application Date</span>
            <input
              className="relative ml-10 h-[5vh] w-[83%] rounded-md bg-[#EEEE]"
              {...register("application_deadline")}
              type="date"
            />
            <br />
          </div>

          <div className="mb-6 flex items-center">
            <span className="text-md font-bold">Activity Start</span>
            <input
              className="relative ml-10 h-[5vh] w-[66%] rounded-md bg-[#EEEE]"
              {...register("activity_start_date")}
              type="date"
            />
            <br />
          </div>

          <div className="mb-6 flex items-center">
            <span className="text-md font-bold">Activity End</span>
            <input
              className="relative ml-12 h-[5vh] w-[66%] rounded-md bg-[#EEEE]"
              {...register("activity_end_date")}
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
            <input {...register("grade_low")} type="text" className="w-[8%] h-[3vh] relative left-[4%]" value={gradeVal[0]} />
            <div className="w-[50%]">
              <Slider value={gradeVal} onChange={handleGradeVal} className="mt-2"  />
            </div>

            <input {...register("grade_high")} type="text" className="w-[8%] h-[3vh]" value={gradeVal[1]} />
          </div>

          <div className="mt-4 flex w-[100%] items-center justify-between">
            <span className="text-md font-bold">Age Range</span>
            {/* <div className="flex justify-around items-center w-[40%] ml-[4.6vw]">
                <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative" name="name" type="text"/><br />
                <hr className="h-[0.8vh] w-[2vw] bg-black ml-2"/>
                <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative ml-3" name="name" type="text"/><br />

              </div> */}

            <input type="text" className="w-[8%] relative left-[6%]" {...register("age_low")} value={ageVal[0]} />

            <div className="w-[50%]">
              <Slider value={ageVal} onChange={handleAgeVal} className="mt-2 relative left-[2%]" />
            </div>

            <input {...register("age_high")} type="text" className="w-[8%] relative" value={ageVal[1]} />
          </div>
          <div className="text-md mt-5 flex w-[60%] flex-col">
            <p className="text-md font-bold font-bold ">
              Only open to residence of these countries
            </p>
            <select
              className="text-small font-small relative mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3"
              {...register("only open to residence of these countries")}
            >
              <option>Select country</option>
              <option>India</option>
            </select>
          </div>
          <div className="text-md mt-5 flex w-[60%] flex-col">
            <p className="text-md font-bold font-bold ">
              Only open to citizens of these countries
            </p>
            <select
              className="text-small font-small relative mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3"
              {...register("Only open to citizens of these countries")}
            >
              <option>Select country</option>
              <option>India</option>
            </select>
          </div>
          <div className="mt-14">
            <h1 className="text-lg font-bold text-[#6F6F6F]">Remarks</h1>
            <textarea className="mt-5 h-[15vh] w-[70%] bg-[#EEEE]" {...register("remarks")} />
          </div>

          <div className="mt-10 mb-10 flex items-center">
            <span className="text-md font-bold">Last Update Date</span>
            <input
              className="relative ml-10 h-[5vh] w-[83%] rounded-md bg-[#EEEE]"
              {...register("last_update_date")}
              type="date"
            />
            <br />
          </div>
        </div>
      </div>
      {name !== "View an activity to the database" ? (
        <button onClick={handleSubmit(addActivityData)} className="mx-auto mt-10 mb-10 flex h-[5vh] w-[15%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600" type="button">
          Save
        </button>
      ) : null}
    </div>
  );
}
