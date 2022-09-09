interface ActivityDataBaseFormProps{
    onClick1: ()=>void;
    name: string
}




   export function ActivityDataBaseForm({onClick1,name}: ActivityDataBaseFormProps){
    return(

        <>
        <div className="w-[80%] h-[100vh] -mt-[150vh] mx-auto bg-[#FDFEFF] border-2 rounded-lg z-10 relative overflow-y-scroll">
        <div className="w-[60%] h-[10vh] ml-7 flex justify-around items-center">
          <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer" onClick={onClick1}>
            <img alt="back-icon" src="/images/backArrow.png" />
          </div>
          <h1 className="text-4xl text-[#3AB0FB] font-bold ml-3">{name}</h1>
        </div>
    <div className="w-[90%] h-auto flex justify-around mx-auto">
        <div className="h-auto w-[40%]">
            <h1 className="text-[#6F6F6F] font-bold text-lg mb-6">Activity Information</h1>
               <div className="mt-2 flex">
                <span className="font-bold text-md">Name</span>
               <input className="bg-[#EEEE] rounded-md w-[85%] h-[5vh] relative ml-10" name="name" type="text"/><br />
              </div>
           <div className="mt-4 flex">
              <span className="font-bold text-md">Type</span>
                  <select className="bg-[#EEEE] rounded-md w-[85%] h-[5vh] relative ml-12 outline-none" name="status">
                      <option> Select Type</option>
                  </select>
             </div>
             <div className="mt-4 flex">
              <span className="font-bold text-md">Subject</span>
                  <select className="bg-[#EEEE] rounded-md w-[100%] h-[5vh] relative ml-7 outline-none" name="status">
                      <option> Select Subject</option>
                  </select>
             </div>
             <div className="mt-4 flex">
              <span className="font-bold text-md">Application requirement</span>
                  <select className="bg-[#EEEE] rounded-md w-[82%] h-[5vh] relative outline-none" name="status">
                      <option>Application requirement</option>
                  </select>
             </div>
             <div className="mt-4 flex">
              <span className="font-bold text-md">Location Type</span>
                  <select className="bg-[#EEEE] rounded-md w-[71%] h-[5vh] relative ml-14 outline-none" name="status">
                      <option>Select Location</option>
                  </select>
             </div>
             <div className="mt-4 flex">
              <span className="font-bold text-md">Country of Activity</span>
                  <select className="bg-[#EEEE] rounded-md w-[76%] h-[5vh] relative ml-6 outline-none" name="status">
                      <option>Select Country</option>
                  </select>
             </div>
             <div className="mt-4 flex">
                <span className="font-bold text-md">City of Activity</span>
               <input className="bg-[#EEEE] rounded-md w-[71%] h-[5vh] relative ml-12" name="name" type="text"/><br />
              </div>

              <div className="mt-6 flex">
                <span className="font-bold text-md" >URL</span>
               <input className="bg-[#EEEE] rounded-md w-[85%] h-[5vh] relative ml-14" name="name" type="text"/><br />
              </div>

              <h1 className="text-lg text-[#6F6F6F] font-bold mt-4">Key Dates</h1>
              <div className="mt-2 flex">
                <span className="font-bold text-md">Registration open</span>
               <input className="bg-[#EEEE] rounded-md w-[85%] h-[5vh] relative ml-10" name="name" type="date"/><br />
              </div>

              <div className="mt-4 flex mb-10">
                <span className="font-bold text-md">Application Date</span>
               <input className="bg-[#EEEE] rounded-md w-[83%] h-[5vh] relative ml-10" name="name" type="date"/><br />
              </div>
        </div>
        <div className="h-auto border-l-2 border-l-cyan-400 w-[45%] pl-12">
            <h1 className="text-[#6F6F6F] font-bold text-lg mb-6">Eligibility Restrictions</h1>
            <div className="mt-2 flex">
              <span className="font-bold text-md">Range Type</span>
                  <select className="bg-[#EEEE] rounded-md w-[40%] h-[5vh] relative left-16 outline-none" name="status">
                      <option>Select range type</option>
                  </select>
             </div>
            
             <div className="mt-4 flex">
                <span className="font-bold text-md">Grade Range</span>
                <div className="flex justify-around items-center w-[40%] ml-14">
               <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative" name="name" type="text"/><br />
                 <hr className="h-[0.8vh] w-[2vw] bg-black ml-2"/>
                 <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative ml-3" name="name" type="text"/><br />

               </div>
              </div>
              
              <div className="mt-4 flex">
                <span className="font-bold text-md">Age Range</span>
                <div className="flex justify-around items-center w-[40%] ml-[4.6vw]">
               <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative" name="name" type="text"/><br />
                 <hr className="h-[0.8vh] w-[2vw] bg-black ml-2"/>
                 <input className="bg-[#EEEE] rounded-md w-[35%] h-[5vh] relative ml-3" name="name" type="text"/><br />

               </div>
              </div>
              <div className="w-[60%] flex flex-col text-md mt-5">
                        <p className="font-bold text-md font-bold ">Only open to residence of these countries</p>
                        <select name="country" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative text-small font-small pl-3">
                            <option>Select country</option>
                        </select>
                    </div>
                    <div className="w-[60%] flex flex-col text-md mt-5">
                        <p className="font-bold text-md font-bold ">Only open to citizens of these countries</p>
                        <select name="country" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative text-small font-small pl-3">
                            <option>Select country</option>
                        </select>
                    </div>
                    <div className="mt-14">
                        <h1 className="text-[#6F6F6F] font-bold text-lg">Remarks</h1>
                        <textarea className="w-[70%] h-[15vh] bg-[#EEEE] mt-5"></textarea>
                    </div>
             
             </div>
 
             </div>
             <button className="bg-cyan-500 rounded-md w-[15%] mx-auto mt-10 mb-10 h-[5vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600">Save </button>

    </div>
    </>
    )
}