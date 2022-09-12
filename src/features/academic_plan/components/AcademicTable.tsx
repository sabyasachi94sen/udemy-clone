interface AcademicTableProps{
    academicData: {}[];
    onClick1: ()=>void
}


   export function AcademicTable({academicData,onClick1}:AcademicTableProps){

    return (
        <>
      <div className="w-[90%] h-screen rounded-md -mt-44">
       
       <div>
        <h1 className="text-black font-bold text-4xl font-sans ml-24 z-0 relative right-4">Essai Academic Enrichment Plan Summary</h1>
        <div className="w-[80%] h-[6vh] mt-6 z-0 ml-20">
          <div className="w-[90%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
            <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
           
            <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
           
          </div>
        </div>

        
{/*         
        <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
          <p>Name</p>
          <p>Date of Birth</p>
          <p>Country of Residence</p>
          <p>Account Manager</p>
          <p>Active Status</p>
          
        </div> */}

        
        <div className={`${academicData.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-8`}>
          <table className="border-solid w-[88%] mx-auto relative text-center left-2 font-sans font-bold text-[0.9rem] -mt-1   text-[#344054] break-all">
          <tbody className="overflow">
            <tr className="text-center w-full font-medium text-[1rem] mx-auto h-[7vh]  bg-blue-200 sticky top-0">
          <td className="rounded-bl-md rounded-tl-md">Name</td>
                   <td className="">Date of Birth</td>
                   <td className="">Country of residence</td>
                   <td className="">Account manager</td>
                   <td className="rounded-br-md rounded-tr-md">Active Status</td>
                  
                   
                 
               </tr>
               <tr className="bg-white h-[3vh] sticky top-[7vh]">
                   <td ></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   
                </tr>
            
            
            
            
            
            
            
            
              {academicData.map((val,index)=><tr className="border-b-[1.5px] bg-gray-50 border-b-[#EDEDED] border-gray-50">
                <td className="h-[7vh] text-center cursor-pointer" onClick={onClick1}>{val.name}</td>
                <td className="h-[7vh]">{val.dob}</td>
                <td className="h-[7vh]">{val.country}</td>
                <td className="h-[7vh] text-center">{val.manager}</td>
                
                {val.status=="Active"?<td className="h-[7vh]  text-[#20A464] text-center">{val.status}</td>:<td className="h-[7vh] text-center">{val.status}</td>}
            
               

              </tr>)}
            </tbody>
          
            
          
        
          </table>
          </div>
        
        </div>
        </div>
        
        </>
    )
}