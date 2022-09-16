import { useState } from "react";

interface ActivityDataBaseFormProps {
  onClick1: () => void;
  name: string;
}

export function ActivityDataBaseForm({
  onClick1,
  name,
}: ActivityDataBaseFormProps) {
  const [gradeVal, setGradeVal] = useState(0);
  const [ageVal, setAgeVal] = useState(0);

  const handleGradeVal = (e) => {
    const val = e.target.value;

    setGradeVal(val);
  };

  const handleAgeVal = (e) => {
    const val = e.target.value;

    setAgeVal(val);
  };

  return (
    <div className="relative z-10 mx-auto -mt-[150vh] h-[100vh] w-[80%] overflow-y-scroll rounded-lg border-2 bg-[#FDFEFF]">
      <div className="ml-7 flex h-[10vh] w-[60%] items-center justify-around">
        <div
          className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
          onClick={onClick1}
        >
          <img alt="back-icon" src="/images/backArrow.png" />
        </div>
        <h1 className="ml-3 text-4xl font-bold text-[#3AB0FB]">{name}</h1>
      </div>
      <div className="mx-auto flex h-auto w-[90%] justify-around">
        <div className="h-auto w-[40%]">
          <h1 className="mb-6 text-lg font-bold text-[#6F6F6F]">
            Activity Information
          </h1>
          <div className="mt-2 flex items-center">
            <span className="text-md font-bold">Name</span>
            <input
              className="relative ml-10 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
              name="name"
              type="text"
            />
            <br />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">Type</span>
            <select
              className="relative ml-12 h-[5vh] w-[85%] rounded-md bg-[#EEEE] outline-none"
              name="status"
            >
              <option> Select Type</option>
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">Subject</span>
            <select
              className="relative ml-7 h-[5vh] w-[100%] rounded-md bg-[#EEEE] outline-none"
              name="status"
            >
              <option> Select Subject</option>
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">Application requirement</span>
            <select
              className="relative h-[5vh] w-[82%] rounded-md bg-[#EEEE] outline-none"
              name="status"
            >
              <option>Application requirement</option>
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">Location Type</span>
            <select
              className="relative ml-14 h-[5vh] w-[71%] rounded-md bg-[#EEEE] outline-none"
              name="status"
            >
              <option>Select Location</option>
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">Country of Activity</span>
            <select
              className="relative ml-6 h-[5vh] w-[76%] rounded-md bg-[#EEEE] outline-none"
              name="status"
            >
              <option>Select Country</option>
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-md font-bold">City of Activity</span>
            <input
              className="relative ml-12 h-[5vh] w-[71%] rounded-md bg-[#EEEE]"
              name="name"
              type="text"
            />
            <br />
          </div>

          <div className="mt-6 flex items-center">
            <span className="text-md font-bold">URL</span>
            <input
              className="relative ml-14 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
              name="name"
              type="text"
            />
            <br />
          </div>

          <h1 className="mt-4 text-lg font-bold text-[#6F6F6F]">Key Dates</h1>
          <div className="mt-2 flex items-center">
            <span className="text-md font-bold">Registration open</span>
            <input
              className="relative ml-10 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
              name="name"
              type="date"
            />
            <br />
          </div>

          <div className="mt-4 mb-10 flex items-center">
            <span className="text-md font-bold">Application Date</span>
            <input
              className="relative ml-10 h-[5vh] w-[83%] rounded-md bg-[#EEEE]"
              name="name"
              type="date"
            />
            <br />
          </div>
        </div>
        <div className="h-auto w-[45%] border-l-2 border-l-cyan-400 pl-12">
          <h1 className="mb-6 text-lg font-bold text-[#6F6F6F]">
            Eligibility Restrictions
          </h1>
          <div className="mt-2 flex items-center">
            <span className="text-md font-bold">Range Type</span>
            <select
              className="relative left-16 h-[5vh] w-[40%] rounded-md bg-[#EEEE] outline-none"
              name="status"
            >
              <option>Select range type</option>
            </select>
          </div>

          <div className="mt-4 flex w-full items-center justify-between">
            <span className="text-md font-bold">Grade Range</span>
            {/* <div className="flex justify-around items-center w-[40%] ml-14">
               <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative" name="name" type="text"/><br />
                 <hr className="h-[0.8vh] w-[2vw] bg-black ml-2"/>
                 <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative ml-3" name="name" type="text"/><br />

               </div> */}
            <div className="w-[60%]">
              <input
                className="h-2 w-full appearance-none bg-blue-100"
                defaultValue={0}
                max={100}
                min={0}
                name="range"
                type="range"
                onChange={handleGradeVal}
              />
            </div>
            <span className="w-[2px]">{gradeVal}</span>
          </div>

          <div className="mt-4 flex w-full items-center justify-between">
            <span className="text-md font-bold">Age Range</span>
            {/* <div className="flex justify-around items-center w-[40%] ml-[4.6vw]">
                <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative" name="name" type="text"/><br />
                <hr className="h-[0.8vh] w-[2vw] bg-black ml-2"/>
                <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative ml-3" name="name" type="text"/><br />

              </div> */}
            <div className="ml-[4%] w-[60%]">
              <input
                className="h-2 w-full appearance-none bg-blue-100"
                defaultValue={0}
                max={100}
                min={0}
                name="range"
                type="range"
                onChange={handleAgeVal}
              />
            </div>
            <span className="w-[2px]">{ageVal}</span>
          </div>
          <div className="text-md mt-5 flex w-[60%] flex-col">
            <p className="text-md font-bold font-bold ">
              Only open to residence of these countries
            </p>
            <select
              className="text-small font-small relative mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3"
              name="country"
            >
              <option>Select country</option>
            </select>
          </div>
          <div className="text-md mt-5 flex w-[60%] flex-col">
            <p className="text-md font-bold font-bold ">
              Only open to citizens of these countries
            </p>
            <select
              className="text-small font-small relative mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3"
              name="country"
            >
              <option>Select country</option>
            </select>
          </div>
          <div className="mt-14">
            <h1 className="text-lg font-bold text-[#6F6F6F]">Remarks</h1>
            <textarea className="mt-5 h-[15vh] w-[70%] bg-[#EEEE]" />
          </div>
        </div>
      </div>
      <button className="mx-auto mt-10 mb-10 flex h-[5vh] w-[15%] items-center justify-center rounded-md bg-cyan-500 text-center text-[18px] text-white hover:bg-blue-600">
        Save{" "}
      </button>
    </div>
  );
}
