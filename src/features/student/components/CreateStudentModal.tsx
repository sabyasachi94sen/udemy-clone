import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { studentValid } from "@/features/helpers/validations";
import { toast } from "react-hot-toast";

import { Account } from "@/api";
import { CountryListObj } from "@/features/api";
import { BaseModal, Button, Form } from "@/shared/components";
import { useAccountManagerDropDownList, useCreateStudent } from "@/shared/services/student.sevices";
import { useModal } from "@/shared/stores/modal.store";


export function CreateStudentModal({ isOpen }: { isOpen: boolean }) {
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
  const { isModalOpen, onModalClose } = useModal();
  const { page, perPage } = router.query;

  const createStudentMutaton = useCreateStudent(() => {
    onModalClose();
  });

  const accountManagerDropDownList=useAccountManagerDropDownList({ page })

  const { data }=useQuery(["country_list"],()=> CountryListObj.country_list())
  const countries=data?.data;

  

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      modalWidth="max-w-[90%]"
      title="Add a student to the roster"
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <div className="m-auto h-[80vh] w-full overflow-y-scroll p-8">
        <Form<Account>
          form={{
                defaultValues: {
                    student_name: ""
                },
              }}
          onSubmit={(formData) =>{ 
            studentValid.validate(formData,{abortEarly:false}).then((res)=>{
              createStudentMutaton.mutate({ data: formData })
            }).catch((err)=>{
              err.inner.map((item)=>{
             
                  toast.error(item.message)
              
              })
            })
            }
          }
        >
          {({ register }) => (
            <div>
              <div className="">
                <div className="relative flex h-[12vh] w-[90%] justify-between">
                  <div className="flex w-[45%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Name <span className="text-red-500 ml-1">*</span></p>
                    
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[64%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      placeholder="Student name"
                      type="text"
                      {...register("student_name")}
                    />
                  </div>
                  <div className="flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-14">Date of Birth <span className="text-red-500 ml-1">*</span></p>
                    <input
                      className="text-small relative left-14 mt-4 h-[5vh] w-[94%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                      placeholder="Date of Birth"
                      type="date"
                      {...register("date_of_birth")}
                    />
                  </div>

                  <div className="ml-20 relative left-12 flex w-[36%] h-[30vh] flex-col items-start text-lg font-bold">
                  <p className="ml-8">Grade at PIPPAMS Registration<span className="text-red-500 ml-1">*</span></p>
                    <p className="text-sm text-gray-700 ml-8 mt-2">Please enter the student’s grade as of September 1 of the current academic year of registration, with academic year generally defined as Aug/Sept to May/June</p>
                    <input
                      className="text-small relative left-8 mt-[6vh] h-[5vh] w-[81%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      placeholder="Grade"
                      type="number"
                      {...register("current_grade")}
                    />
                  </div>
                </div>
              </div>

              <div className="relative mt-6 flex h-[12vh] w-[65%] justify-between">
                <div className="flex w-[76%] flex-col items-start text-lg font-bold">
                  <p className="ml-8">Email <span className="text-red-500 ml-1">*</span></p>
                  <input
                    className="text-small relative left-8 mt-4 h-[5vh] w-[70%] rounded-md bg-[#EEEE] pl-3 font-medium"
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                  />
                </div>
                <div className="flex w-[80%] ml-6 relative left-12 flex-col items-start text-lg font-bold">
                  <p className="ml-8">Phone Number <span className="text-red-500 ml-1">*</span></p>
                  <input
                    className="text-small relative left-6 mt-4 h-[5vh] w-[65%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                    placeholder="Phone Number"
                    type="tel"
                    {...register("phone_number")}
                  />
                </div>
              </div>

              <div>
                <div className="relative mt-10 flex h-[12vh] w-[90%] justify-between">
                  <div className="flex w-[45%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Country of Permanent Residence <span className="text-red-500 ml-1">*</span></p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[60%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("country_of_residence")}
                    >
                      <option>Select Country</option>
                      <option>N/A</option>
                      {countries?.map((item,index)=><option key={index}>{item?.name?.common}</option>)}
                    </select>
                  </div>
                  <div className="flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">City of Permanent Residence <span className="text-red-500 ml-1">*</span></p>
                    <input
                      className="text-small relative left-7 mt-4 h-[5vh] w-[88%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                      {...register("city_of_residence")}
                      type="text"
                    />
                  </div>

                  <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Country of Citizenship <span className="text-red-500 ml-1">*</span></p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[92%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("country_of_citizenship")}
                    >
                      <option>Select Country</option>
                      <option>N/A</option>
                      {countries?.map((item,index)=><option key={index}>{item?.name?.common}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative mt-10 flex h-[12vh] w-[95%] justify-between">
                  <div className="flex w-[55%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Assigned Staff <span className="text-red-500 ml-1">*</span></p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[60%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("account_manager")}
                    >
                      <option>Select Staff</option>
                      {accountManagerDropDownList &&
                        accountManagerDropDownList?.data.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item && item?.username}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex w-[37%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Active Status <span className="text-red-500 ml-1">*</span></p>
                    <select
                      {...register("is_active")}
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
                      <span className="text-red-500 ml-1">*</span>
                    </p>
                    <select
                      className="relative left-3 mt-4 h-[5vh] w-[80%] rounded-md bg-[#EEEE] pl-3 text-[1.1rem] font-medium"
                      {...register("country_of_boarding_school")}
                    >
                      <option>Select Country</option>
                      <option>N/A</option>
                      {countries?.map((item,index)=><option key={index}>{item?.name?.common}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              

              <div className="mx-auto mt-16 h-[20vh] w-[50%] text-center text-lg font-bold">
                <p>Remarks</p>
                <textarea className="mx-auto mt-4 h-[15vh] w-[90%] bg-[#EEEEEE]" {...register("remarks")} />
              </div>

              <div className="mx-auto pt-6 flex justify-center">
                <Button
                  isLoading={createStudentMutaton.isLoading}
                  type="submit"
                  width="w-[15%]"
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
        </Form>
      </div>
    </BaseModal>
  );
}
