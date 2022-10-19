import { Account } from "@/api";
import { BaseModal, Button, Form, Input } from "@/shared/components";
import { useCreateActivity } from "@/shared/services/activity.service";
import { useModal } from "@/shared/stores/modal.store";
import { useState,useEffect } from "react";
import { Slider } from "@material-ui/core";
import Select from "react-select";

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
      option: "Computer",
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

  const countries=[
    {
      label: "OPEN",
      value: "open"
    },
    
    
    {

    label: "India",
    value: "india"
   },{
    label: "Japan",
    value: "japan"
   },
   {
    label: "China",
    value: "china"
   },{
   label: "Indonesia",
    value: "indonesia"
   },
   {
    label: "Malaysia",
    value: "malaysia"
   },{
    label: "Thailand",
    value: "thailand"
   },
   {
    label: "Singapore",
    value: "singapore"
   },{
    label: "North Korea",
    value: "north korea"
   },
   {
    label: "Taiwan",
    value: "taiwan"
   },{
    label: "Vietnam",
    value: "vietnam"
   },
   {
    label: "Mongolia",
    value: "mongolia"
   },{
    label: "Myanmar",
    value: "myanmar"
   },
   {
    label: "Bangladesh",
    value: "bangladesh"
   },{
    label: "Sri lanka",
    value: "sri lanka"
   },
   {
    label: "Pakistan",
    value: "pakistan"
   },{
    label: "Oman",
    value: "oman"
   },
   {
    label: "Maldieves",
    value: "maldieves"
   },{
    label: "Uzbekistan",
    value: "uzbekistan"
   },
   {
    label: "Kuwait",
    value: "kuwait"
   },{
    label: "Saudi Arabia",
    value: "saudi arabia"
   }]
  

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
          createActivityMutation.mutate({
            data: {
              ...formData,
              url: formData.url.includes("https")?formData.url: "https://"+formData.url,
              application_requirement: storeOptions,
              age_range: ageVal,
              grade_range: gradeVal,
              only_open_to_citizens_of_these_countries: storeCitizen,
              only_open_to_residence_of_these_countries: storeResidence,
            },
          })
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
                  <span className="text-md font-bold">Name<span className="text-red-500 ml-1">*</span></span>
                  <input
                    className="relative ml-[19.5%] h-[5vh] w-[73%] rounded-md bg-[#EEEE]"
                    {...register("activity_name")}
                    type="text"
                  />
                  <br />
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">Type<span className="text-red-500 ml-1">*</span></span>
                  <select
                    className="relative ml-[20.5%] h-[5vh] w-[73%] rounded-md bg-[#EEEE] outline-none"
                    {...register("activity_type")}
                  >
                    <option>Select Type</option>
                    {activityTypeOptions.map((item, index) => (
                      <option key={index}>{item.option}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">Subject<span className="text-red-500 ml-1">*</span></span>
                  <select
                    className="relative ml-[17%] h-[5vh] w-[73%] rounded-md bg-[#EEEE] outline-none"
                    {...register("subject")}
                  >
                    <option>Select Subject</option>
                    {subjectOptions.map((item, index) => (
                      <option key={index}>{item.option}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">
                    Application requirement
                  </span>

                  <Select
                    className="relative h-[5vh] w-[78%] rounded-md outline-none"
                    isMulti
                    options={applicationOptions}
                    label="application_requirement"
                    onChange={handleMultiOption}
                    label="application_requirement"
                  />
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">Location Type</span>
                  <select
                    className="relative ml-[11%] h-[5vh] w-[71%] rounded-md bg-[#EEEE] outline-none"
                    {...register("location_type")}
                  >
                    <option>Location Type</option>
                    {locationTypeOptions.map((item, index) => (
                      <option key={index}>{item.option}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">Country of Activity<span className="text-red-500 ml-1">*</span></span>
                  <select
                    className="relative ml-6 h-[5vh] w-[76%] rounded-md bg-[#EEEE] outline-none"
                    {...register("country_residence")}
                  >
                    <option>Select Country</option>
                  
                    {countries.map((item,index)=>
                      <option key={index}>{item.label}</option>
                    )}
                  </select>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-md font-bold">City of Activity</span>
                  <input
                    className="relative ml-16 h-[5vh] w-[73%] rounded-md bg-[#EEEE]"
                    {...register("country_citizenship")}
                    type="text"
                  />
                  <br />
                </div>

                <div className="mt-6 flex items-center">
                  <span className="text-md font-bold">URL<span className="text-red-500 ml-1">*</span></span>
                  <input
                    className="relative ml-[22%] h-[5vh] w-[73%] rounded-md bg-[#EEEE]"
                    {...register("url")}
                    type="text"
                  />
                  <br />
                </div>

                <h1 className="mt-6 mb-4 text-lg text-[1.45rem] font-bold text-[#6F6F6F]">
                  Key Dates
                </h1>
                <div className="mt-2 flex items-center">
                  <span className="text-md font-bold">Registration Open</span>
                  <input
                    className="relative ml-12 h-[5vh] w-[78%] rounded-md bg-[#EEEE]"
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
               
                <div className="mt-4 mb-5 flex items-center">
                  <div className="w-[21%] break-words">
                  <span className="text-md font-bold">R/A/S deadline<span className="text-red-500 ml-1">*</span></span>
                  <p className="text-sm text-gray-700">R/A/S deadline means registration/application/submission deadline, as applicable</p>
                  </div>
                  <input
                    className="relative ml-12 h-[5vh] w-[71%] rounded-md bg-[#EEEE]"
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

                <div className="mb-6 flex items-center">
                  <span className="text-md font-bold">Activity Start<span className="text-red-500 ml-1">*</span></span>
                  <input
                    className="relative ml-[10%] h-[5vh] w-[73%] rounded-md bg-[#EEEE]"
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

                <div className="mb-6 flex items-center">
                  <span className="text-md font-bold">Activity End<span className="text-red-500 ml-1">*</span></span>
                  <input
                    className="relative ml-[11.5%] h-[5vh] w-[74%] rounded-md bg-[#EEEE]"
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
                    className="relative left-16 h-[5vh] w-[40%] rounded-md bg-[#EEEE] outline-none"
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
                    className="relative left-[4%] h-[3vh] w-[8%]"
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
                    className="h-[3vh] w-[8%]"
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
                    Only open to residence of these countries
                  </p>
                 
                  <Select 
                  
                  className="text-small font-small block mt-4 h-auto w-[100%] rounded-md"
                  isMulti 
                  options={countries} 
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
                  
                  className="text-small font-small block mt-4 h-auto w-[100%] rounded-md"
                  isMulti 
                  options={countries} 
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
                    className="mt-5 h-[15vh] w-[70%] bg-[#EEEE]"
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
