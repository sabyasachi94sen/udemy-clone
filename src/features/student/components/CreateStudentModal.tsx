import { Account } from "@/api";
import { BaseModal, Button, Form, Input } from "@/shared/components";
import { useAccountManagerDropDownList, useCreateStudent} from "@/shared/services/student.sevices";
import { useModal } from "@/shared/stores/modal.store";
import {useRouter} from "next/router";

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

  const data = [];
  const router=useRouter()
  const { isModalOpen, onModalClose } = useModal();
  const { page, perPage } = router.query;

  const createStudentMutaton = useCreateStudent(() => {
    onModalClose();
  });

  const accountManagerDropDownList=useAccountManagerDropDownList({page})
  

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      title="Add a student to the roster"
      modalWidth="max-w-[90%]"
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
          onSubmit={(formData) => createStudentMutaton.mutate({ data: formData })}
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
                    />
                  </div>
                  <div className="flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Date of Birth</p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                      placeholder="Date of Birth"
                      type="date"
                      {...register("date_of_birth")}
                    />
                  </div>

                  <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Grade at Enrollment</p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      placeholder="Grade"
                      type="number"
                      {...register("current_grade")}
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
                    />
                  </div>

                  <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Country of Citizenship</p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("country_of_citizenship")}
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
                    >
                      <option>Select account manager</option>
                      {accountManagerDropDownList &&
                        accountManagerDropDownList?.data.map((item, index) => (
                          <option key={index} value={item.id}>
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
                  />
                </div>
                <div className="flex w-[80%] flex-col items-start text-lg font-bold">
                  <p className="ml-8">Phone Number</p>
                  <input
                    className="text-small relative left-8 mt-4 h-[5vh] w-[65%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                    placeholder="Phone Number"
                    type="tel"
                    {...register("phone_number")}
                  />
                </div>
              </div>

              <div className="mx-auto mt-7 h-[20vh] w-[50%] text-center text-lg font-bold">
                <p>Remarks</p>
                <textarea className="mx-auto mt-4 h-[15vh] w-[90%] bg-[#EEEEEE]" />
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