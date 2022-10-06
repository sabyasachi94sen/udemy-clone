import { Account } from "@/api";
import { BaseModal, Button, Form, Input } from "@/shared/components";
import { useAccountManagerDropDownList} from "@/shared/services/student.sevices";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import {useRouter} from "next/router";

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

 
  const accountManagerDropDownList=useAccountManagerDropDownList({page})
  

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      title="View a student to the roster"
      modalWidth="max-w-[90%]"
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
                    country_of_residence:selectedData?.student_city_residence[0]?.country_of_residence,
                    city_of_residence:selectedData?.student_city_residence[0]?.city_of_residence,
                    country_of_citizenship: selectedData?.country_of_citizenship,
                   
                    is_active: selectedData?.is_active?"active":"inactive",
                    country_of_boarding_school: selectedData?.country_of_boarding_school,
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
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      placeholder="Student name"
                      type="text"
                      {...register("student_name")}
                      disabled
                    />
                  </div>
                  <div className="flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Date of Birth</p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                      placeholder="Date of Birth"
                      type="date"
                      {...register("date_of_birth")}
                      disabled
                    />
                  </div>

                  <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Grade at Enrollment</p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      placeholder="Grade"
                      type="number"
                      {...register("current_grade")}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="relative mt-10 flex h-[12vh] w-[90%] justify-between">
                  <div className="flex w-[45%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Country of Permanent Residence</p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("country_of_residence")}
                      disabled
                    >
                      <option>Select Country</option>
                      <option>India</option>
                    </select>
                  </div>
                  <div className="flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">City of Permanent Residence</p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                      {...register("city_of_residence")}
                      type="text"
                      disabled
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
                      <option>India</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative mt-10 flex h-[12vh] w-[95%] justify-between">
                  <div className="flex w-[55%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Assisgned Account Manager</p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("account_manager")}
                      disabled
                    >
                      <option>Select account manager</option>
                      {accountManagerDropDownList &&
                        accountManagerDropDownList?.data.map((item, index) => (
                          <option key={index} value={item.id} selected={selectedData?.student_assignment[0]?.account_manager?.username===item?.username?true:false}>
                            {item && item?.username}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex w-[37%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Active Status</p>
                    <select
                      {...register("is_active")}
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                       disabled
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
                      If attends boarding school in a country other than
                      permanent residence
                    </p>
                    <select
                      className="relative left-3 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-[1.1rem] font-medium"
                      {...register("country_of_boarding_school")}
                      disabled
                    >
                      <option>Select Country of Boarding School</option>
                      <option>India</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="relative mt-10 flex h-[12vh] w-[70%] justify-between">
                <div className="flex w-[80%] flex-col items-start text-lg font-bold">
                  <p className="ml-8">Email</p>
                  <input
                    className="text-small relative left-8 mt-4 h-[5vh] w-[93%] rounded-md bg-[#EEEE] pl-3 font-medium"
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                    disabled
                  />
                </div>
                <div className="flex w-[80%] flex-col items-start text-lg font-bold">
                  <p className="ml-8">Phone Number</p>
                  <input
                    className="text-small relative left-8 mt-4 h-[5vh] w-[65%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                    placeholder="Phone Number"
                    type="tel"
                    {...register("phone_number")}
                    disabled
                  />
                </div>
              </div>

              <div className="mx-auto mt-7 h-[20vh] w-[50%] text-center text-lg font-bold">
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
