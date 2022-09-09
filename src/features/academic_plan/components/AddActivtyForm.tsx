import { useState } from "react"

interface AddActivityFormProps{
  onClick1: ()=>void;
  onClick2: ()=>void;
  activeData: {}[]
}
   

export function AddActivityForm({onClick1,onClick2,activeData}: AddActivityFormProps){

    const [storeActivityData,setStoreActivityData]=useState({type: "", subject: ""})
    const [activityTableData,setActivityTableData]=useState([])
    const [count,setCount]=useState(0)
    
    const submitActivity=()=>{

        const tempArr=activityTableData
        tempArr.push(storeActivityData)
         setActivityTableData(tempArr)
         setCount(count+1)


    }


    const setDataOnChange=(e)=>{
    setStoreActivityData({...storeActivityData,[e.target.name]:e.target.value})
    }

   


    return (
        <>
          <div className="w-[70%] h-[90vh] bg-white border-2 rounded-lg mt-10 pb-10">
             <div className="w-[80%] h-[10vh] flex justify-around items-center ml-20">
                 <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer" onClick={onClick2}>
                 <img alt="back-icon" src="/images/backArrow.png"/>
                </div>
              <h1 className="text-3xl font-bold ml-3 text-cyan-500">Add activity to Academic Enrichment Plan (Student)</h1>
            </div>
             

      <div className="w-full h-[8vh] flex justify-between mt-8">
          <div className="w-[70%] pl-5">
            <span className="text-md font-bold">Active Status</span>
             <select className="bg-[#EEEE] rounded-md w-[60%] h-[5vh] relative left-3 outline-none" name="type" onChange={setDataOnChange}>
                <option> Select Type</option>
                <option>Exam</option>
                </select>
          </div>

          <div className="w-[70%]">
            <span className="text-md font-bold">Activity Subject</span>
             <select className="bg-[#EEEE] rounded-md w-[60%] h-[5vh] relative left-3 outline-none"  name="subject" onChange={setDataOnChange}>
                <option> Select Subject</option>
                <option>Maths</option>
                <option>Physics</option>
             </select>
          </div>

          </div>
           <button onClick={submitActivity} className="bg-cyan-500 rounded-lg w-[15%] h-[6vh] mx-auto block mt-4 text-white">Submit</button>

           <div className="bg-[#3AB0FB52] h-[6vh] w-[100%] mt-10 mx-auto rounded-md text-[#5F5F5F] font-medium text-[0.7rem] flex justify-around items-center pr-4">
          <p>Activity name</p>
          <p>Type</p>
          <p>Subject</p>
          <p>Country of activity</p>
          <p>Application requirments</p>
          <p>Application deadline</p>
          <p>Activity start date</p>
          <p>Remarks</p>
          <p>Add to AEP</p>
          
        </div>

        
        <div className={`h-[40vh] mt-4 overflow-y-scroll`}>
          <table className="border-solid w-[100%] mx-auto relative font-sans font-medium text-[0.7rem] -mt-1   text-[#344054] break-all">
           <tbody className="overflow">
            {activityTableData.map((item,index)=>{
                return <tr key={index} className="h-[6vh]">
                    <td className="w-[5.3%] text-center">{item.subject} Exam</td>
                    <td className=" w-[5%] text-center">{item.type}</td>
                    <td className="w-[3%] text-center">{item.subject}</td>
                    <td className="w-[8%] text-center">Agra,India</td>
                    <td className="w-[7%] text-center">Fee,form</td>
                    <td className="w-[8%] text-center">20/01/2022</td>
                    <td className="w-[7%] text-center">21/02/2022</td>
                    <td className="w-[5%] pl-1"><input type="text" name="remarks" className="w-full h-[4vh] break-all mx-auto rounded-md bg-cyan-300">
                        </input></td>
                    <td className="w-[5%] text-center"><button onClick={()=>onClick1(activityTableData,index)} className="w-[80%] h-[4vh] text-white hover:bg-blue-500 bg-[#3AB0FB] rounded-lg">Add</button></td>
                </tr>
            })}
          </tbody>
          </table>
          </div>
          </div>
        </>
    )
}