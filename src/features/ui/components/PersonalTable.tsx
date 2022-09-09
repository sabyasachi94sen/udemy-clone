interface PersonalTable{
    onClick1:()=>void;
    title1: string;
    title2: string;
    adminData: {}[]
}


export function PersonalTable({onClick1,adminData,title1,title2}: PersonalTable){
return (
    <>
   <div className="w-[90%] h-screen rounded-md bg-white -mt-44">
       
       <div>
       <div className="w-[45%] h-[10vh] flex justify-around items-center ml-20">
          <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer" onClick={onClick1}>
            <img alt="back-icon" src="/images/backArrow.png"/>
          </div>
          <h1 className="text-3xl font-bold ml-3">{title1}</h1>
          </div>
        <div className="w-[100%] h-[6vh] flex items-center justify-around mt-6 z-0">
          <div className="w-[65%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
            <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
           
            <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
           
          </div>
          <button className="bg-cyan-500 rounded-md w-[7%] h-[6vh] text-[18px] text-center flex justify-center items-center text-white hover:bg-blue-600" onClick={onClick1}>Add&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </button>
        </div>

        <h1 className="text-[#5F5F5F] font-bold text-xl mt-8 ml-20 ">{title2} : Rajiv</h1>

        <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
          <p>Student name</p>
          <p>Activities in AEP</p>
          <p>Last update</p>
          <p>Completion status</p>
            
        </div>

        
        <div className={`${adminData.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-4`}>
          <table className="border-solid w-[88%] mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
      
            <tbody className="overflow">
              {adminData.map((val,index)=><tr className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50">
                <td className="w-[25%] h-[6vh] text-center">{val.name}</td>
                <td className="w-[25%] h-[6vh] text-center">{val.aep}</td>
                <td className="w-[25%] h-[6vh] text-center">{val.last_update}</td>
                <td className="w-[25%] h-[6vh] text-center">
                <div className="flex justify-center items-center text-[#3AB0FB]">
                <span>45%</span>
              <div className="w-[35%] h-[2vh] bg-gray-200 rounded-full dark:bg-gray-700 ml-3">
              <div className="bg-[#3AB0FB] text-xs h-[2vh] font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%]" ></div>
             </div>
             </div>
             </td>

              </tr>)}
            </tbody>
          
            
          
        
          </table>
          </div>
        
        </div>
        </div>
        </>
        
)

}