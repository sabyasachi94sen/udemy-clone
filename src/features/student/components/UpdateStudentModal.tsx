import { Account } from "@/api";
import { BaseModal, Button, Form, Input } from "@/shared/components";
import { useAccountManagerDropDownList, useUpdateStudent} from "@/shared/services/student.sevices";
import { ModalState, useModal } from "@/shared/stores/modal.store";
import {useRouter} from "next/router";

export function UpdateStudentModal({ isOpen }: { isOpen: boolean }) {
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

  const countries=[{
    label: "India",
    value: "india"
   },{
    label: "Japan",
    value: "japan"
   },
   {
    label: "China",
    value: "china"
   },{
   label: "Indonesia",
    value: "indonesia"
   },
   {
    label: "Malaysia",
    value: "malaysia"
   },{
    label: "Thailand",
    value: "thailand"
   },
   {
    label: "Singapore",
    value: "singapore"
   },{
    label: "North Korea",
    value: "north korea"
   },
   {
    label: "Taiwan",
    value: "taiwan"
   },{
    label: "Vietnam",
    value: "vietnam"
   },
   {
    label: "Mongolia",
    value: "mongolia"
   },{
    label: "Myanmar",
    value: "myanmar"
   },
   {
    label: "Bangladesh",
    value: "bangladesh"
   },{
    label: "Sri lanka",
    value: "sri lanka"
   },
   {
    label: "Pakistan",
    value: "pakistan"
   },{
    label: "Oman",
    value: "oman"
   },
   {
    label: "Maldieves",
    value: "maldieves"
   },{
    label: "Uzbekistan",
    value: "uzbekistan"
   },
   {
    label: "Kuwait",
    value: "kuwait"
   },{
    label: "Saudi Arabia",
    value: "saudi arabia"
   }]
  



  const router=useRouter()
  const { isModalOpen, onModalClose, selectedData } =
  useModal() as ModalState<Account>;
  const { page, perPage } = router.query;

  const updateStudentMutaton = useUpdateStudent(() => {
    onModalClose();
  });

  const accountManagerDropDownList=useAccountManagerDropDownList({page})
  

  return (
    <BaseModal
      hasHeader
      showHeaderCloseButton
      isOpen={isModalOpen && isOpen}
      title="Edit student details"
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
                  
                    city_of_residence:selectedData?.student_city_residence[0]?.city_of_residence,
                    
                    
                    is_active: selectedData?.is_active?"active":"inactive",
                 
                    email:selectedData?.account?.email,
                    phone_number: selectedData?.phone_number,
                    remarks: selectedData?.remarks,
                },
              }}
          onSubmit={(formData) => updateStudentMutaton.mutate({ id: selectedData?.id,
            data: formData, })}
        >
          {({ register }) => (
            <div>
              <div className="">
                <div className="relative flex h-[12vh] w-[90%] justify-between">
                  <div className="flex w-[45%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Name <span className="text-red-500 ml-1">*</span></p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      placeholder="Student name"
                      type="text"
                      {...register("student_name")}
                    />
                  </div>
                  <div className="flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Date of Birth <span className="text-red-500 ml-1">*</span></p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                      placeholder="Date of Birth"
                      type="date"
                      {...register("date_of_birth")}
                    />
                  </div>

                  <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Grade at Enrollment <span className="text-red-500 ml-1">*</span></p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      placeholder="Grade"
                      type="number"
                      {...register("current_grade")}
                    />
                  </div>
                </div>
              </div>

              <div className="relative mt-6 flex h-[12vh] w-[73%] justify-between">
                <div className="flex w-[76%] flex-col items-start text-lg font-bold">
                  <p className="ml-8">Email <span className="text-red-500 ml-1">*</span></p>
                  <input
                    className="text-small relative left-8 mt-4 h-[5vh] w-[93%] rounded-md bg-[#EEEE] pl-3 font-medium"
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                  />
                </div>
                <div className="flex w-[80%] ml-6 flex-col items-start text-lg font-bold">
                  <p className="ml-8">Phone Number <span className="text-red-500 ml-1">*</span></p>
                  <input
                    className="text-small relative left-8 mt-4 h-[5vh] w-[65%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
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
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("country_of_residence")}
                    >
                       <option>Select Country</option>
                    
                    {countries.map((item,index)=><option key={index} selected={selectedData?.student_city_residence[0]?.country_of_residence===item.label}>{item.label}</option>)}
                    </select>
                  </div>
                  <div className="flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">City of Permanent Residence <span className="text-red-500 ml-1">*</span></p>
                    <input
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-xl font-bold font-medium"
                      {...register("city_of_residence")}
                      type="text"
                    />
                  </div>

                  <div className="ml-20 flex w-[30%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Country of Citizenship <span className="text-red-500 ml-1">*</span></p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("country_of_citizenship")}
                    >
                     <option>Select Country</option>
                    
                    {countries.map((item,index)=><option key={index} selected={selectedData?.country_of_citizenship===item.label}>{item.label}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative mt-10 flex h-[12vh] w-[95%] justify-between">
                  <div className="flex w-[55%] flex-col items-start text-lg font-bold">
                    <p className="ml-8">Assisgned Account Manager <span className="text-red-500 ml-1">*</span></p>
                    <select
                      className="text-small relative left-8 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 font-medium"
                      {...register("account_manager")}
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
                      If attends boarding school in a country other than
                      permanent residence
                      <span className="text-red-500 ml-1">*</span>
                    </p>
                    <select
                      className="relative left-3 mt-4 h-[5vh] w-[90%] rounded-md bg-[#EEEE] pl-3 text-[1.1rem] font-medium"
                      {...register("country_of_boarding_school")}
                    >
                      {countries.map((item,index)=><option key={index} selected={selectedData?.country_of_boarding_school===item.label}>{item.label}</option>)}
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
                  isLoading={updateStudentMutaton.isLoading}
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
