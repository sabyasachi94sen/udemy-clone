import { Button } from "@/shared/components"

interface AddStudentProps{
    onClick1: ()=>void;
    title: string
}


export function AddStudent({onClick1,title}){

    return (
        <div className="w-[90%] mx-auto h-auto bg-[#FDFEFF] z-10 relative -mt-[150vh] border-2 rounded-xl">

            <div className="w-[45%] flex justify-between relative top-6 left-8" onClick={onClick1}>
              <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer">
                   <img alt="back-icon" src="/images/backArrow.png"/>
              </div>
              <h1 className="text-4xl text-[#3AB0FB] font-bold text-center">{title}</h1>
             
            </div>

            <div className="mt-20">
                <div className="flex justify-between relative w-[90%] h-[12vh] mt-10">
                    <div className="w-[45%] flex flex-col items-start font-bold text-lg">
                        <p className="ml-8">Name</p>
                        <input type="text" name="name" placeholder="Student name" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3"/>
                    </div>
                    <div className="w-[30%] flex flex-col items-start font-bold text-lg">
                        <p className="ml-8">Date of Birth</p>
                        <input type="date" name="dob" placeholder="Date of Birth" className="bg-[#EEEE] mt-4 font-bold text-xl rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3"/>

                    </div>

                    <div className="w-[30%] flex flex-col items-start font-bold text-lg ml-20">
                        <p className="ml-8">Grade at Enrollment</p>
                        <input type="number" name="grade" placeholder="Grade" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3"/>

                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-between relative w-[90%] h-[12vh] mt-10">
                    <div className="w-[45%] flex flex-col items-start font-bold text-lg">
                        <p className="ml-8">Country of Permanent Residence</p>
                        <select name="country" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3">
                            <option>Select Country</option>
                        </select>
                    </div>
                    <div className="w-[30%] flex flex-col items-start font-bold text-lg">
                        <p className="ml-8">City of Permanent Residance</p>
                        <input type="text" name="city" className="bg-[#EEEE] mt-4 font-bold text-xl rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3"/>

                    </div>

                    <div className="w-[30%] flex flex-col items-start font-bold text-lg ml-20">
                        <p className="ml-8">Country of Citizenship</p>
                        <select name="country" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3">
                            <option>Select Country</option>
                        </select>
                    </div>
                </div>
            </div>


            
            <div>
                <div className="flex justify-between relative w-[95%] h-[12vh] mt-10">
                    <div className="w-[55%] flex flex-col items-start font-bold text-lg">
                        <p className="ml-8">Assisgned Account Manager</p>
                        <select name="country" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3">
                            <option>Select account manager</option>
                        </select>
                    </div>
                    <div className="w-[37%] flex flex-col items-start font-bold text-lg">
                        <p className="ml-8">Active Status</p>
                        <select className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3">
                            <option>Select Status</option>
                        </select>
                    </div>

                    <div className="w-[42%] h-[15vh] flex flex-col items-start font-bold text-[1.1rem] ml-28 relative">
                        <p className="ml-2">Attends boarding school in another country</p>
                        <select name="country" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-3 text-small font-medium pl-3">
                            <option>Select Country of Onboarding School</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-[20vh] text-center mx-auto font-bold text-lg mt-7">
                <p>Remarks</p>
                <textarea className="bg-[#EEEEEE] w-[90%] h-[15vh] mx-auto mt-4"></textarea>


            </div>
            <div className="mx-auto w-[8%] font-bold mt-8 mb-10">
                <Button className="w-[100%] h-[6vh] rounded-md">Save</Button>
            </div>

        </div>

    )
}