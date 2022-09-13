import { Button } from "@/shared/components"

interface AdminTableProps{
    onClick1: ()=>void;
    onClick2: ()=>void;
    onClick3: ()=>void;
    onClick4: ()=>void;
    adminData: {}[];
    name: string
  }
  

export function AdminTable({onClick1,onClick2,onClick3,onClick4,adminData,name}: AdminTableProps){


    

    return (

        <div className="w-[90%] h-screen rounded-md bg-white -mt-44">
       
           <div>
            <h1 className="text-black font-bold text-4xl font-sans ml-[6.5%] relative z-0">{name}</h1>
            <div className="w-[100%] h-[6vh] flex items-center justify-around mt-6 z-0">
              <div className="w-[65%] h-[6vh] flex items-center rounded-md pl-4 bg-gray-50 relative right-[0.5%]">
                <input className="w-[90%] h-[6vh] bg-gray-50  placeholder-gray-600 bg-white outline-none" name="search" placeholder="Search the staff member here"  type="text"/>
               
                <img alt="search-icon" className="ml-8 w-[1.5vw] h-[3.5vh]" src="/images/searchBlue.png" />
               
              </div>
              <button className="bg-cyan-500 rounded-md w-[7%] h-[6vh] xl:text-[0.8rem] 2xl:text-[1rem] text-center flex justify-center items-center text-white hover:bg-blue-600" onClick={onClick1}>Add&nbsp; <img alt="plus-icon" src="/images/plus.png" /> </button>
            </div>

            {/* <div className="bg-[#3AB0FB52] h-[6vh] w-[87%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[1rem] flex justify-around items-center">
              <p>Name</p>
              <p>Email</p>
              <p className="relative left-4">Last Update</p>
              <p>Active status</p>
              <p>Students</p>
              <p>Performance</p>
              <p className="relative left-2">Edit</p>
              <p>Delete</p>
                
            </div> */}

            
            <div className={`${adminData.length>10 ?`h-[60vh]`: `h-auto`} overflow-y-scroll mt-8`}>
              <table className="border-solid w-[88%] mx-auto relative text-center left-2 font-sans font-bold text-[0.9rem] -mt-1   text-[#344054] break-all">
          
                <tbody className="overflow bg-white">

                <tr className="text-center w-full font-medium text-[1rem] mx-auto h-[7vh]  bg-blue-200 opacity-[1] sticky top-0">
                   
                   <td className="rounded-bl-lg rounded-tl-lg"> Name</td>
                   <td className="">Email</td>
                   <td className="">Last update</td>
                   <td className="">Active Status</td>
                   {name!="Essai Super Admin Roster"?
                   <>
                   <td className="">Students</td>
                   <td className=""> Performance</td>
                   </>: ""}
                   <td className="">Edit</td>
                   <td className="rounded-br-lg rounded-tr-lg">Delete</td>
                 
               </tr>
               <tr className="bg-white h-[4vh] sticky top-[7vh]">
                   <td ></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   {name!="Essai Super Admin Roster"?
                   <>
                   <td></td>
                   <td></td>
                   </>: ""}
                  
                   <td></td>
                   <td></td>
                </tr>
               
                  {adminData.map((val,index)=><tr className="border-b-[1.5px] border-b-[#EDEDED] border-gray-50 bg-gray-50">
                    <td className={`h-[7vh] ${name==`Essai Super Admin Roster`?``: `hover:underline cursor-pointer`} `} onClick={onClick4}>{val.name}</td>
                    <td className="h-[7vh]">{val.email}</td>
                    <td className="h-[7vh]">{val.update}</td>
                    {val.status=="Active"?<td className="h-[7vh] text-[#20A464]">{val.status}</td>:<td className="h-[7vh]">{val.status}</td>}
                    
                    {name!="Essai Super Admin Roster"?
                   <>
                   <td className="h-[7vh]">{val.student}</td>
                    <td className="h-[7vh]">{val.performance}</td>
                   </>: ""}
                    
                    
                   
                    <td className="h-[7vh] cursor-pointer"><img alt="edit-icon" src="/images/edit.png" onClick={()=>onClick2(index)}  className="block mx-auto" /></td>
                    <td className="h-[7vh] cursor-pointer"><img alt="delete-icon" src="/images/delete.png" onClick={()=>onClick3(index)} className="block mx-auto"/></td>

                  </tr>)}
                </tbody>
                
              
                
              
            
              </table>
              </div>
            
            </div>
            </div>
            
            
    )
}


//comment