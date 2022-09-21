import { Button } from "@/shared/components"

interface StudentTableProps{
    handleAddBackBlur: ()=>void;
    handleEditBackBlur: ()=>void;
    handleDeleteBackBlur: ()=>void;
    studentData: {}[];
    name: string
  }
  

export function StudentTable({handleAddBackBlur,handleEditBackBlur,handleDeleteBackBlur,studentData,name}: StudentTableProps){


    

    return (

        <div className="w-[90%] h-screen rounded-md -mt-44">
       
           <div>
            <h1 className="text-black font-bold text-4xl font-sans ml-[6.5%] z-0 relative right-4">{name}</h1>
            <div className="w-[100%] h-[6vh] flex items-center justify-around mt-6 relative right-[1.5%]">
              <div className="w-[65%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
                <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
               
                <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
               
              </div>
              <button className="bg-cyan-500 rounded-md w-[7%] h-[6vh] xl:text-[0.8rem] 2xl:text-[1rem] text-center flex justify-center items-center text-white hover:bg-blue-600" onClick={handleAddBackBlur}>Add&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </button>
            </div>

            {/* <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
              <p>Name</p>
              <p>Date of Birth</p>
              <p>Country of Residence</p>
              <p>Account Manager</p>
              <p>Active Status</p>
              <p>Edit</p>
              <p>Delete</p>
                
            </div> */}

            
            <div className={`${studentData && studentData?.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-8`}>
              <table className="border-solid w-[90%] text-center mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
          
              <tbody className="overflow">
              <tr className="text-center w-full font-medium xl:text-[0.8rem] 2xl:text-[1rem] mx-auto h-[7vh]  bg-blue-200 opacity-[1] sticky top-0">
                   
                   <td className="rounded-bl-lg rounded-tl-lg"> Name</td>
                   <td className="">Date of Birth</td>
                   <td className="">Country of Residence</td>
                   <td className="">Account Manager</td>
                   <td className="">Active Status</td>
                 
                   <td className="">Edit</td>
                   <td className="rounded-br-lg rounded-tr-lg">Delete</td>
                 
               </tr>
               <tr className="bg-white h-[4vh] sticky top-[7vh]">
                   <td ></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   
                </tr>
               
              
                  {studentData && studentData.map((val,index)=><tr key={index} className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50">
                    <td className="h-[7vh]">{val && val?.student_name}</td>
                    <td className="h-[7vh] ">{val && val?.date_of_birth}</td>
                    <td className="h-[7vh]">{val && val?.country_of_citizenship}</td>
                    <td className="h-[7vh]">{val && val?.student_assignment[0] && val.student_assignment[0]?.account_manager && val.student_assignment[0].account_manager?.username}</td>
                    
                    {val?.is_active?<td className="h-[7vh] text-[#20A464]">Active</td>:<td className="h-[7vh]">Inactive</td>}
                
                    <td className="h-[7vh] cursor-pointer"><img className="mx-auto block" alt="edit-icon" src="/images/edit.png" onClick={()=>handleEditBackBlur(val && val?.id)} /></td>
                    <td className="h-[7vh] cursor-pointer"><img className="mx-auto block" alt="delete-icon" src="/images/delete.png" onClick={()=>handleDeleteBackBlur(val && val?.id)}/></td>

                  </tr>)}
                </tbody>
              
                
              
            
              </table>
              </div>
            
            </div>
            </div>
            
            
    )
}