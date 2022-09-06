import { Button } from "@/shared/components"

interface StudentTableProps{
    onClick1: ()=>void;
    onClick2: ()=>void;
    onClick3: ()=>void;
    studentData: {}[];
    name: string
  }
  

export function StudentTable({onClick1,onClick2,onClick3,studentData,name}: StudentTableProps){


    

    return (

        <div className="w-[90%] h-screen rounded-md -mt-44">
       
           <div>
            <h1 className="text-black font-bold text-4xl font-sans ml-24 z-0 relative right-4">{name}</h1>
            <div className="w-[100%] h-[6vh] flex items-center justify-around mt-6 z-0">
              <div className="w-[65%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
                <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
               
                <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
               
              </div>
              <Button className="bg-cyan-500 rounder-md w-[8.1%] h-[6vh] text-[18px]" onClick={onClick1}>Add&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </Button>
            </div>

            <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
              <p>Name</p>
              <p>Date of Birth</p>
              <p>Country of Residence</p>
              <p>Account Manager</p>
              <p>Active Status</p>
              <p>Edit</p>
              <p>Delete</p>
                
            </div>

            
            <div className={`${studentData.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-4`}>
              <table className="border-solid w-[88%] mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
          
                <tbody className="overflow">
                  {studentData.map((val,index)=><tr className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50">
                    <td className="w-[13%] h-[7vh] pl-6">{val.name}</td>
                    <td className="w-[13%] h-[7vh] ">{val.dob}</td>
                    <td className="w-[15%] h-[7vh] pl-10">{val.country}</td>
                    <td className="w-[22%] h-[7vh] pl-32">{val.manager}</td>
                    
                    {val.status=="Active"?<td className="w-[14%] h-[7vh] text-[#20A464] pl-24">{val.status}</td>:<td className="w-[14%] h-[7vh] pl-32">{val.status}</td>}
                
                    <td className="w-[13%] h-[7vh] cursor-pointer pl-24"><img alt="edit-icon" src="/images/edit.png" onClick={()=>onClick2(index)} /></td>
                    <td className="w-[13%] h-[7vh] cursor-pointer pl-10"><img alt="delete-icon" src="/images/delete.png" onClick={()=>onClick3(index)}/></td>

                  </tr>)}
                </tbody>
              
                
              
            
              </table>
              </div>
            
            </div>
            </div>
            
            
    )
}