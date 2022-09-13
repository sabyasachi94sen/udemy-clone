interface AEPTableProps{
    aepData: {}[];
    onClick: ()=>void
}


export function AEPTable({aepData,onClick}: AEPTableProps){


    return (
        <>
        
        <div className="w-[90%] h-screen rounded-md bg-white -mt-44">
       
       <div>
        <h1 className="text-black font-bold text-4xl font-sans ml-[3%] relative z-0">AEP Status Tracker</h1>
        <div className="w-[90%] h-[6vh] flex mt-6 z-0 ml-[3%]">
          <div className="w-[76%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
            <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
           
            <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
           
          </div>
          
        </div>

      

        
        <div  className={`${aepData.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-8`}>
          <table className="border-solid w-[95%] text-center mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
          <tbody className="overflow">
          <tr className="text-center w-full font-bold  xl:text-[0.7rem]  2xl:text-[0.85rem] mx-auto h-[7vh]  bg-blue-200 opacity-[1] sticky top-0">
               
               <td className="rounded-bl-lg rounded-tl-lg">Student name</td>
               <td className="">Activity name</td>
               <td className="">Type</td>
               <td className="">Subject</td>
               <td className="">Task</td>
               <td className="">Target date</td>
               <td className="">Status</td>
               <td className="">Complete</td>
               <td className="rounded-br-lg rounded-tr-lg">Remarks</td>
             
           </tr>
           <tr className="bg-white h-[4vh] sticky top-[7vh]">
               <td ></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
           
              {aepData.map((val,index)=><tr className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50">
              <td className="h-[7vh] cursor-pointer hover:underline" onClick={()=>onClick(val.name)}>{val.name}</td>
                <td className="h-[7vh]">{val.activity}</td>
                <td className="h-[7vh]">{val.type}</td>
                 <td className="h-[7vh]">{val.subject}</td>
                <td className="h-[7vh]">{val.task}</td>
                <td className="h-[7vh]">{val.date}</td>
                <td><div className="w-[15px] h-[15px] rounded-[50%] bg-[#BD4E4E] mx-auto"></div></td>
                <td className="">
                <label className="block text-gray-500 font-bold text w-[100%] mt-2" >
             <input className="leading-tight h-[5vh] w-[50%] relative top-[2px] relative" id="complete-task" name="complete" type="checkbox" />
  
           </label></td>
           <td><input type="text" name="remarks" className="w-[50%] h-[5vh] rounded-lg bg-blue-300"></input></td>

              </tr>)}
            </tbody>
          
            
          
        
          </table>
          </div>
        
        </div>
        </div>
        </>
    )
}