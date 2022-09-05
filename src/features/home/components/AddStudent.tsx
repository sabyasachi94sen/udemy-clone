import { Button } from "@/shared/components"

interface AddStudentProps{
    onClick1: ()=>void
}


export function AddStudent({onClick1}){

    return (
        <div className="w-[90%] mx-auto h-[90vh] bg-[#FDFEFF] z-10 relative -mt-[118vh] rounded-xl">

            <div className="w-[40%] flex justify-between relative top-6 left-8" onClick={onClick1}>
              <div className="w-[50px] shadow-lg rounded-l-2 h-[5vh] flex items-center justify-center cursor-pointer">
                   <img alt="back-icon" src="/images/backArrow.png"/>
              </div>
              <h1 className="text-5xl text-[#3AB0FB] font-bold text-center">Add a student to the roster</h1>
             
            </div>

            <div className="mt-20">
                <div className="flex justify-between relative w-[90%] h-[12vh] mt-10">
                    <div className="w-[45%] flex flex-col items-start font-bold text-xl">
                        <p className="ml-8">Name</p>
                        <input type="text" name="name" placeholder="Student name" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3"/>
                    </div>
                    <div className="w-[30%] flex flex-col items-start font-bold text-xl">
                        <p className="ml-8">Date of Birth</p>
                        <input type="date" name="dob" placeholder="Date of Birth" className="bg-[#EEEE] mt-4 font-bold text-xl rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3"/>

                    </div>

                    <div className="w-[30%] flex flex-col items-start font-bold text-xl ml-20">
                        <p className="ml-8">Grade at Enrollment</p>
                        <input type="number" name="grade" placeholder="Grade" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3"/>

                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-between relative w-[98%] h-[12vh] mt-10">
                    <div className="w-[32%] flex flex-col items-start font-bold text-xl">
                        <p className="ml-8">Country of Permanent Residence</p>
                        <select name="country" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3">
                            <option>Select Country</option>
                        </select>
                    </div>
                    <div className="w-[30%] flex flex-col items-start font-bold text-xl ml-12">
                        <p className="ml-8">City of Permanent Residance</p>
                        <input type="text" name="city" className="bg-[#EEEE] mt-4 font-bold text-xl rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3"/>

                    </div>

                    <div className="w-[30%] flex flex-col items-start font-bold text-xl mr-14">
                        <p className="ml-8">Country of Citizenship</p>
                        <select name="country" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3">
                            <option>Select Country</option>
                        </select>
                    </div>
                </div>
            </div>


            
            <div>
                <div className="flex justify-between relative w-[98%] h-[12vh] mt-10">
                    <div className="w-[32%] flex flex-col items-start font-bold text-xl">
                        <p className="ml-8">Assisgned Account Manager</p>
                        <select name="country" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3">
                            <option>Select account manager</option>
                        </select>
                    </div>
                    <div className="w-[25%] flex flex-col items-start font-bold text-xl">
                        <p className="ml-8">Active Status</p>
                        <select className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3">
                            <option>Select Status</option>
                        </select>
                    </div>

                    <div className="w-[30%] flex flex-col items-start font-bold text-xl ml-20">
                        <p className="ml-8">Attends boarding school in another country</p>
                        <select name="country" className="bg-[#EEEE] mt-4 rounded-md w-[90%] h-[5vh] relative left-8 text-small font-medium pl-3">
                            <option>Select Country of Onboarding School</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-[20vh] text-center mx-auto font-bold text-xl mt-7">
                <p>Remarks</p>
                <textarea className="bg-[#EEEEEE] w-[90%] h-[15vh] mx-auto mt-4"></textarea>


            </div>
            <div className="mx-auto w-[8%] font-bold mt-4">
                <Button className="w-[100%] h-[6vh] rounded-md">Save</Button>
            </div>

        </div>

    )
}