import { Account } from "@/api";
import { BaseModal, Button, Form, Input } from "@/shared/components";
import { useCreateActivity } from "@/shared/services/activity.service";
import { useModal } from "@/shared/stores/modal.store";
import { useState,useEffect } from "react";
import { Slider } from "@material-ui/core";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { CountryListObj } from "@/features/api";
import { activityValid } from "@/features/helpers/validations";
import { toast } from "react-hot-toast";

export function CreateActivityModal({ isOpen }: { isOpen: boolean }) {
  const [storeOptions,setStoreOptions]=useState(null)
  const [storeResidence,setStoreResidence]=useState(null)
  const [storeCitizen,setStoreCitizen]=useState(null)
  const [rangeType,setRangeType]=useState(null)

  const [keyDates,setKeyDates]=useState({
     registration_open:{
        is_active: false,
        date: null,
     },
    ra_deadline: {
      is_active: false,
      date: null
    },
    activity_start: {
      is_active: false,
      date: null,
    },
    activity_end:{
      is_active: false,
      date: null
    }
  })

  const activityTypeOptions = [
    {
      option: "Exam",
    },
    {
      option: "Competition",
    },
    {
      option: "STEP programs",
    },
    {
      option: "Online Course",
    },
    {
      option: "Summer Schools : selective speciality",
    },
    {
      option: "Summer Schools : credit bearing",
    },
    {
      option: "Other",
    },
  ];

  const subjectOptions = [
    {
      option: "Maths",
    },
    {
      option: "Computer Science",
    },
    {
      option: "Physics",
    },
    {
      option: "Chemistry",
    },
   
 
    {
      option: "Biology",
    },
    {
      option: "Environmental Science",
    },
    {
      option: "General Science",
    },
    {
      option: "Economics/Business/Finance",
    },
    
   
    {
      option: "English",
    },
    {
      option: "Political Science",
    },
    {
      option: "Psychology",
    },
    {
      option: "Other",
    },
  ];

  
  

const handleMultiOption = (value: { value: {}[] }) => {
    const select_options = value.map((item) => item.label);
    setStoreOptions(select_options);
  };

  const applicationOptions = [
    {
      label: "Fee",
      value: "fee",
    },
    {
      label: "Form",
      value: "form",
    },
    {
      label: "Essay",
      value: "essay",
    },
    {
      label: "Multiple Essays",
      value: "multiple_essay",
    },
    {
      label: "LOR",
      value: "lor",
    },
    {
      label: "Multiple LORs",
      value: "multiple_lors",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  const locationTypeOptions = [
    {
      option: "Country / City",
    },
    {
      option: "Virtual",
    },
    {
      option: "Country / City & Virtual",
    },
  ];

  const [gradeVal, setGradeVal] = useState([0, 16]);
  const [ageVal, setAgeVal] = useState([0, 25]);

  const handleGradeVal = (e: SyntheticEvent, data: number[]) => {
    setGradeVal(data);
    window.localStorage.setItem("gradeVal", JSON.stringify(data));
  };

  const handleAgeVal = (e: SyntheticEvent, data: number[]) => {
    setAgeVal(data);
    window.localStorage.setItem("ageVal", JSON.stringify(data));
  };

  const { isModalOpen, onModalClose } = useModal();
  const createActivityMutation = useCreateActivity(() => {
    onModalClose();
  });

  
 const handleResidence=(value: {value: {}[]})=>{
  const residence=value.map((item)=>item.label)
  setStoreResidence(residence)
   
    

 }

 const handleCitizen=(value: {value: {}[]})=>{
  const citizen=value.map((item)=>item.label)
  setStoreCitizen(citizen)
   
    

 }

 const {data}=useQuery(["country_list"],()=> CountryListObj.country_list())
 const countries=data?.data?.map((item)=>{
    
  
  
  return {
    label: item?.name?.common,
    value: item?.name?.common?.toLowerCase()
  
}

}).sort((a,b)=>{

  return a.label.localeCompare(b.label)
})

countries?.map((item,i,countries)=>{
  if(item?.label==="India")
  countries.splice(i,1)
})
countries?.unshift({label:"India" ,value: "india"})
countries?.unshift({label:"OPEN",value: "open"})









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
        onSubmit={(formData) =>{

          activityValid.validate({
            ...formData,
              activity_type:formData.activity_type==="Select Type"?"":formData.activity_type,
              subject:formData.subject==="Select Subject"?"":formData.subject,
              country_residence:formData.country_residence==="Select Country"?"":formData.country_residence,

          
          },{abortEarly:false}).then((res)=>{
            createActivityMutation.mutate({
              data: {
                ...formData,
                url: formData.url.includes("https")?formData.url: "https://"+formData.url,
                
                application_requirement: storeOptions,
                age_range: ageVal,
                grade_range: gradeVal,
                only_open_to_citizens_of_these_countries: storeCitizen?.length!=0?storeCitizen:["OPEN"],
                only_open_to_residence_of_these_countries: storeResidence?.length!=0?storeResidence:["OPEN"],
              },
            })
          }).catch((err)=>{
            err.inner.map((item)=>{
              toast.error(item.message)
            })
          })
     



        }
         
        }
      >
        {({ register }) => (
          <div>
            <div className="mx-auto flex h-[70vh] w-full justify-around overflow-y-scroll">
              <div className="h-auto w-[40%]">
                <h1 className="mb-6 text-[1.4rem] font-bold text-[#6F6F6F]">
                  Activity Information
                </h1>
                <div className="mt-2 flex items-center justify-around">
                  <span className="text-md w-[23%] block font-bold pl-2">Name<span className="text-red-500 ml-1">*</span></span>
                  <input
                    className="relative h-[5vh] w-[73%] rounded-md bg-[#EEEE] pl-2"
                    {...register("activity_name")}
                    type="text"
                  />
                  <br />
                </div>
                <div className="mt-4 flex items-center justify-around">
                  <span className="text-md font-bold block w-[20%]">Type<span className="text-red-500 ml-1">*</span></span>
                  <select
                    className="relative h-[5vh] w-[73%] rounded-md bg-[#EEEE] outline-none pl-1"
                    {...register("activity_type")}
                  >
                    <option>Select Type</option>
                    {activityTypeOptions.map((item, index) => (
                      <option key={index}>{item.option}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex items-center justify-around">
                  <span className="text-md font-bold block w-[20%]">Subject<span className="text-red-500 ml-1">*</span></span>
                  <select
                    className="relative h-[5vh] w-[73%] rounded-md bg-[#EEEE] outline-none pl-1"
                    {...register("subject")}
                  >
                    <option>Select Subject</option>
                    {subjectOptions.map((item, index) => (
                      <option key={index}>{item.option}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex items-center justify-around">
                  <span className="text-md font-bold w-[20%] block">
                    Application requirement
                  </span>

                  <Select
                    className="relative h-[5vh] w-[73%] rounded-md outline-none ml-1"
                    isMulti
                    options={applicationOptions}
                    label="application_requirement"
                    onChange={handleMultiOption}
                    label="application_requirement"
                  />
                </div>
                <div className="mt-4 flex items-center justify-around">
                  <span className="text-md font-bold w-[20%] block">Location Type</span>
                  <select
                    className="relative h-[5vh] w-[73%] rounded-md bg-[#EEEE] outline-none pl-1"
                    {...register("location_type")}
                  >
                    <option>Location Type</option>
                    {locationTypeOptions.map((item, index) => (
                      <option key={index}>{item.option}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex items-center justify-around">
                  <span className="text-md font-bold block w-[20%]">Country of Activity<span className="text-red-500 ml-1">*</span></span>
                  <select
                    className="relative h-[5vh] w-[73%] rounded-md bg-[#EEEE] outline-none pl-1"
                    {...register("country_residence")}
                  >
                    <option>Select Country</option>
                  
                    {countries?.map((item,index)=>
                      <option key={index}>{item?.label}</option>
                    )}
                  </select>
                </div>
                <div className="mt-4 flex items-center justify-around">
                  <span className="text-md font-bold block w-[23%] pl-1">City of Activity</span>
                  <input
                    className="relative h-[5vh] w-[73%] rounded-md bg-[#EEEE] outline-none pl-2"
                    {...register("country_citizenship")}
                    type="text"
                  />
                  <br />
                </div>

                <div className="mt-6 flex items-center justify-around">
                  <span className="text-md font-bold block w-[23%] pl-2">URL<span className="text-red-500 ml-1">*</span></span>
                  <input
                    className="relative  h-[5vh] w-[73%] rounded-md bg-[#EEEE] pl-2"
                    {...register("url")}
                    type="text"
                  />
                  <br />
                </div>

                <h1 className="mt-6 mb-4 text-lg text-[1.45rem] font-bold text-[#6F6F6F]">
                  Key Dates
                </h1>
                <div className="mt-2 flex items-center justify-around">
                  <span className="text-md font-bold w-[20%] block">Registration Open<span className="ml-1 text-red-500">*</span></span>
                  <input
                    className="relative ml-7 h-[5vh] w-[73%] rounded-md bg-[#EEEE] pl-2"
                    {...register("registration_open")}
                    type="date"
                    
                    max={keyDates.ra_deadline.date}
                    onChange={(e)=>{
                      setKeyDates({
                        registration_open:{
                           is_active: true,
                           date: e.target.value,
                        },
                       ra_deadline: {
                         is_active: false,
                         date: null
                       },
                       activity_start: {
                         is_active: false,
                         date: null,
                       },
                       activity_end:{
                         is_active: false,
                         date: null
                       }
                     })
                    }}
                
                  />
                  <br />
                </div>
               
                <div className="mt-4 mb-5 flex items-center justify-around">
                  <div className="w-[25%] break-words">
                  <span className="text-md font-bold block w-[100%]">R/A/S deadline<span className="text-red-500 ml-1">*</span></span>
                  <p className="text-[0.8rem] text-gray-700">R/A/S deadline means registration/application/submission deadline, as applicable</p>
                  </div>
                  <input
                    className="relative h-[5vh] w-[73%] rounded-md bg-[#EEEE] pl-2"
                    {...register("application_deadline")}
                    type="date"
                    min={keyDates.registration_open.date}
                    max={keyDates.activity_start.date}
                    disabled={!keyDates.registration_open.is_active?true:false}
                    onChange={
                       (e)=> {
                        setKeyDates({
                          registration_open:{
                             is_active: true,
                             date: keyDates.registration_open.date,
                          },
                         ra_deadline: {
                           is_active: true,
                           date: e.target.value
                         },
                         activity_start: {
                           is_active: false,
                           date: null,
                         },
                         activity_end:{
                           is_active: false,
                           date: null
                         }
                       })
                       }
                    }
                  />
                  <br />
                </div>

                <div className="mb-6 flex items-center justify-around">
                  <span className="text-md font-bold w-[25%] block">Activity Start<span className="text-red-500 ml-1">*</span></span>
                  <input
                    className="relative h-[5vh] w-[73%] rounded-md bg-[#EEEE] pl-2"
                    {...register("activity_start_date")}
                    type="date"
                    min={keyDates.ra_deadline.date}
                    max={keyDates.activity_end.date}
                    disabled={!keyDates.ra_deadline.is_active?true:false}
                    onChange={(e)=>{
                      setKeyDates({
                        registration_open:{
                           is_active: true,
                           date: keyDates.registration_open.date,
                        },
                       ra_deadline: {
                         is_active: true,
                         date: keyDates.ra_deadline.date
                       },
                       activity_start: {
                         is_active: true,
                         date: e.target.value,
                       },
                       activity_end:{
                         is_active: false,
                         date: null
                       }
                      })
                    }}
                  />
                  <br />
                </div>

                <div className="mb-6 flex items-center justify-around">
                  <span className="text-md font-bold block w-[25%]">Activity End<span className="text-red-500 ml-1">*</span></span>
                  <input
                    className="relative h-[5vh] w-[73%] rounded-md bg-[#EEEE] pl-2"
                    {...register("activity_end_date")}
                    type="date"
                    min={keyDates.activity_start.date}
                    disabled={!keyDates.activity_start.is_active?true:false}
                    onChange={(e)=>{
                       setKeyDates({
                        registration_open:{
                           is_active: true,
                           date: keyDates.registration_open.date,
                        },
                       ra_deadline: {
                         is_active: true,
                         date: keyDates.ra_deadline.date
                       },
                       activity_start: {
                         is_active: true,
                         date: keyDates.activity_start.date,
                       },
                       activity_end:{
                         is_active: true,
                         date: e.target.value
                       }
                      })
                    }}
                  />
                  <br />
                </div>
              </div>
              <div className="h-auto w-[45%] border-l-2 border-l-cyan-400 pl-12">
                <h1 className="mb-6 text-[1.4rem] font-bold text-[#6F6F6F]">
                  Eligibility Restrictions
                </h1>
                <p className="text-sm text-gray-700 -mt-6">In this section, please indicate whether this activity has eligibility based on student grade, age, residence, or citizenship. If there are no such restrictions, please enter nothing</p>
              
                <div className="mt-6 flex items-center">
                  <span className="text-md font-bold">Range Type</span>
                  <select
                    className="relative left-16 h-[5vh] w-[40%] rounded-md bg-[#EEEE] outline-none pl-2"
                    {...register("range_type")}
                    onChange={(e)=>setRangeType(e.target.value)}
                  >
                    <option>Select range type</option>
                    <option value="grade_range">Grade range</option>
                    <option value="age_range">Age range </option>
                    <option value="both">Both</option>
                  </select>
                </div>

             {rangeType==="grade_range" || rangeType==="both"?
                <div className="mt-4 flex w-[100%] items-center justify-between">
                  <span className="text-md font-bold">Grade Range</span>

                  <input
                    {...register("grade_low")}
                    className="relative left-[4%] h-[3vh] w-[8%] pl-2"
                    type="text"
                    value={gradeVal[0]}
                  />
                  <div className="w-[50%]">
                    <Slider
                      className="mt-2"
                      value={gradeVal}
                      min={0}
                      max={16}
                      onChange={handleGradeVal}
                    />
                  </div>

                  <input
                    {...register("grade_high")}
                    className="h-[3vh] w-[8%] pl-2"
                    type="text"
                    value={gradeVal[1]}
                 
                  />
                </div>: null}

                {rangeType==="age_range" || rangeType==="both"?

                <div className="mt-4 flex w-[100%] items-center justify-between">
                  <span className="text-md font-bold">Age Range</span>

                  <input
                    className="relative left-[6%] w-[8%]"
                    type="text"
                    {...register("age_low")}
                    value={ageVal[0]}
                  />

                  <div className="w-[50%]">
                    <Slider
                      className="relative left-[2%] mt-2"
                      value={ageVal}
                      onChange={handleAgeVal}
                      min={0}
                      max={25}
                    />
                  </div>

                  <input
                    {...register("age_high")}
                    className="relative w-[8%]"
                    type="text"
                    value={ageVal[1]}
                  />
                </div>
                :null}
                <div className="text-md mt-5 flex w-[60%] flex-col">
                  <p className="text-md font-bold font-bold ">
                    Only open to residents of these countries
                  </p>
                 
                  <Select 
                  
                  className="text-small font-small block mt-4 h-auto w-[100%] rounded-md"
                  isMulti 
                  options={countries} 
                  hideSelectedOptions
                  onChange={handleResidence}
                  label="only_open_to_residence_of_these_countries"
                  isSearchable={true}
                 
                 
                  
                  />
                
                 
                </div>
                <div className="text-md mt-5 flex w-[60%] flex-col">
                  <p className="text-md font-bold font-bold ">
                    Only open to citizens of these countries
                  </p>
                  <Select 
                  
                  className="text-small font-small block mt-4 h-auto w-[100%] rounded-md pl-2"
                  isMulti 
                  options={countries} 
                  hideSelectedOptions
                  onChange={handleCitizen}
                  label="only_open_to_citizens_of_these_countries"
                  isSearchable={true}
                 
                  />
                </div>
                <div className="mt-14">
                  <h1 className="text-lg text-[1.45rem] font-bold text-[#6F6F6F]">
                    Remarks
                  </h1>
                  <textarea
                    className="mt-5 h-[15vh] w-[70%] bg-[#EEEE] pl-2"
                    {...register("remarks")}
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
