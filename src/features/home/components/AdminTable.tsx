import { Button } from "@/shared/components"

interface AdminTableProps{
    onClick1: ()=>void;
    onClick2: ()=>void;
    onClick3: ()=>void;
    adminData: {}[];
    name: string
  }
  

export function AdminTable({onClick1,onClick2,onClick3,adminData,name}: AdminTableProps){


    

    return (

        <div className="w-[90%] h-screen rounded-md bg-white -mt-44">
       
           <div>
            <h1 className="text-black font-bold text-4xl font-sans ml-24 relative right-4 z-0">{name}</h1>
            <div className="w-[100%] h-[6vh] flex items-center justify-around mt-6 z-0">
              <div className="w-[65%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50">
                <input className="w-[90%] h-[6vh] bg-gray-50 pl-7 placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
               
                <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
               
              </div>
              <Button className="bg-cyan-500 rounder-md w-[8.1%] h-[6vh] text-[18px]" onClick={onClick1}>Add&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </Button>
            </div>

            <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
              <p>Name</p>
              <p>Email</p>
              <p className="relative left-4">Last Update</p>
              <p>Active status</p>
              <p>Students</p>
              <p>Performance</p>
              <p className="relative left-2">Edit</p>
              <p>Delete</p>
                
            </div>

            
            <div className={`${adminData.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-4`}>
              <table className="border-solid w-[88%] mx-auto relative left-2 font-sans font-bold text-[0.9rem] -mt-1  bg-gray-50 text-[#344054] break-all">
          
                <tbody className="overflow">
                  {adminData.map((val,index)=><tr className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50">
                    <td className="w-[13%] h-[7vh] pl-6">{val.name}</td>
                    <td className="w-[13%] h-[7vh]">{val.email}</td>
                    <td className="w-[13%] h-[7vh] pl-2">{val.update}</td>
                    {val.status=="Active"?<td className="w-[13%] h-[7vh] text-[#20A464] pl-7">{val.status}</td>:<td className="w-[13%] h-[7vh] pl-7">{val.status}</td>}
                    <td className="w-[13%] h-[7vh] pl-14">{val.student}</td>
                    <td className="w-[13%] h-[7vh] pl-12">{val.performance}</td>
                    <td className="w-[13%] h-[7vh] pl-16 cursor-pointer"><img alt="edit-icon" src="/images/edit.png" onClick={()=>onClick2(index)} /></td>
                    <td className="w-[13%] h-[7vh] pl-8 cursor-pointer"><img alt="delete-icon" src="/images/delete.png" onClick={()=>onClick3(index)}/></td>

                  </tr>)}
                </tbody>
              
                
              
            
              </table>
              </div>
            
            </div>
            </div>
            
            
    )
}