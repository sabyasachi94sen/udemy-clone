import { useRouter } from "next/router";

import { Account } from "@/api";
import { BaseModal, Form } from "@/shared/components";
import { useAccountManagerDropDownList } from "@/shared/services/student.sevices";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import { CountryListObj } from "@/features/api";
import { useQuery } from "@tanstack/react-query";

export function ViewStudentModal({ isOpen }: { isOpen: boolean }) {
  const activeOptions = [
    {
      option: "Active",
      value: "active",
    },
    {
      option: "Inactive",
      value: "inactive",
    },
  ];





  const router=useRouter()
  const { isModalOpen, onModalClose, selectedData } =
  useModal() as ModalState<Account>;
  const { page, perPage } = router.query;

 
  const accountManagerDropDownList=useAccountManagerDropDownList({ page })
  const { data }=useQuery(["country_list"],()=> CountryListObj.country_list())
    
  const countries=data?.data?.sort((a,b)=>{
   
    return a.name.common.localeCompare(b.name.common)
   })   
  

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-[90%]"
      title="View student details"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto h-[80vh] w-full overflow-y-scroll p-8">
        <Form<Account>
          form={{
                defaultValues: {
                    student_name: selectedData?.student_name,
                    date_of_birth: selectedData?.date_of_birth,
                    current_grade: selectedData?.current_grade,
                    
                    city_of_residence:selectedData?.student_city_residence[0]?.city_of_residence,
                    
                   
                    is_active: selectedData?.is_active?"active":"inactive",
                   
                    email:selectedData?.account?.email,
                    phone_number: selectedData?.phone_number,
                    remarks: selectedData?.remarks,
                },
              }}
     
        >
          {({ register }) => (
            <div>
              <div className="">
                <div className="relative flex h-[12vh] w-[90%] justify-between">
                  <div className="flex w-[45%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Name</p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[63%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      placeholder="Student name"
                      type="text"
                      {...register("student_name")}
                      disabled
                    />
                  </div>
                  <div className="flex w-[30%] flex-col items-start text-lg font-bold">
                  <p className="ml-14">Date of Birth</p>
                    <input
                      className="text-small relative left-14 mt-4 h-[5vh] w-[96%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                      placeholder="Date of Birth"
                      type="date"
                      {...register("date_of_birth")}
                      disabled
                    />
                  </div>

                  <div className="ml-20 relative left-12 flex w-[36%] h-[30vh] flex-col items-sta*rt text-lg font-bold">
                  <p className="ml-8">Grade at PIPPAMS Registration</p>
                    <p className="text-sm text-gray-700 ml-8 mt-2">Please enter the student’s grade as of September 1 of the current academic year of registration, with academic year generally defined as Aug/Sept to May/June</p>
                    <input
                      className="text-small relative left-8 mt-[6vh] h-[5vh] w-[78%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      placeholder="Grade"
                      type="number"
                      {...register("current_grade")}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="relative mt-6 flex h-[12vh] w-[73%] justify-between">
                <div className="flex w-[76%] flex-col items-start text-lg font-bold">
                  <p className="ml-8">Email</p>
                  <input
                    className="text-small relative left-8 mt-4 h-[5vh] w-[60%] rounded-md bg-[#EEEE] pl-3 font-medium"
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                    disabled
                  />
                </div>
                <div className="flex w-[80%] ml-1 flex-col items-start text-lg font-bold">
                  <p className="ml-8">Phone Number</p>
                  <input
                    className="text-small relative left-8 mt-4 h-[5vh] w-[58%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                    placeholder="Phone Number"
                    type="tel"
                    {...register("phone_number")}
                    disabled
                  />
                </div>
              </div>

              <div>
                <div className="relative mt-10 flex h-[12vh] w-[90%] justify-between">
                  <div className="flex w-[45%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Country of Permanent Residence</p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[60%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("country_of_residence")}
                      disabled
                    >
                      <option>Select Country</option>
                      <option selected={selectedData?.student_city_residence[0]?.country_of_residence==="N/A"}>N/A</option>
                      {countries?.map((item,index)=><option key={index} selected={selectedData?.student_city_residence[0]?.country_of_residence===item?.name?.common}>{item?.name?.common}</option>)}
                    </select>
                  </div>
                  <div className="flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">City of Permanent Residence</p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                      {...register("city_of_residence")}
                      disabled
                      type="text"
                    />
                  </div>

                  <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Country of Citizenship</p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("country_of_citizenship")}
                      disabled
                    >
                      <option>Select Country</option>
                      <option selected={selectedData?.student_city_residence[0]?.country_of_residence==="N/A"}>N/A</option>
                      {countries?.map((item,index)=><option key={index} selected={selectedData?.country_of_citizenship===item?.name?.common}>{item?.name?.common}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative mt-10 flex h-[12vh] w-[95%] justify-between">
                  <div className="flex w-[55%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Assigned Account Manager</p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[60%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("account_manager")}
                      disabled
                    >
                      <option>Select Staff</option>
                      {accountManagerDropDownList &&
                        accountManagerDropDownList?.data.map((item, index) => (
                          <option key={index} selected={selectedData?.student_assignment[0]?.account_manager?.username===item?.username} value={item.id}>
                            {item && item?.username}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex w-[37%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Active Status</p>
                    <select
                      {...register("is_active")}
                      disabled
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                    >
                      <option>Select Status</option>
                      {activeOptions.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative ml-28 flex h-[24vh] w-[42%] flex-col items-start text-[1rem] font-bold">
                    <p className="ml-2">
                     Country of boarding school (if applicable)
                    </p>
                    <select
                      className="relative left-3 mt-4 h-[5vh] w-[78%] rounded-md bg-[#EEEE] pl-3 text-[1.1rem] font-medium"
                      {...register("country_of_boarding_school")}
                      disabled
                    >
                      <option selected={selectedData?.student_city_residence[0]?.country_of_residence==="N/A"}>N/A</option>
                      {countries?.map((item,index)=><option key={index} selected={selectedData?.country_of_boarding_school===item?.name?.common}>{item?.name?.common}</option>)}
                    </select>
                  </div>
                </div>
              </div>

           

              <div className="mx-auto mt-16 h-[20vh] w-[50%] text-center text-lg font-bold">
                <p>Remarks</p>
                <textarea className="mx-auto mt-4 h-[15vh] w-[90%] bg-[#EEEEEE]" {...register("remarks")} disabled/>
              </div>

           
            </div>
          )}
        </Form>
      </div>
    </BaseModal>
  );
}
