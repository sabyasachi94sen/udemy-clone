import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState,useEffect } from "react";

import {  GetUserType } from "@/features/helpers";
import {
  Button,
  Input,
} from "@/shared/components";
import { useUpdateDetails,useUserDetails } from "@/shared/services/settings.service"

interface FormValues{
  username: string;
  email: string;
}


export function SettingsForm() {
  
  const router = useRouter();
  const { page, perPage } = router.query;

 const { handleSubmit,register }=useForm<FormValues>()

 const userType=GetUserType()

//  const userDetailsQuery=useUserDetails({ page })
//  const userDetailsMutation=useUpdateDetails()



 

  const  editUserDetails=(formValues:FormValues)=>{
    const mutateObj={
      
    };

      if(formValues.username==="" && formValues.email!=="")
            {
              mutateObj.username=userDetailsQuery?.username;
              mutateObj.email=formValues.email
            }
            else if(formValues.username!=="" && formValues.email===""){
              mutateObj.username=formValues.username;
              mutateObj.email=userDetailsQuery?.email
            }
            else if(formValues.username!=="" && formValues.email!==""){
              mutateObj=formValues
            }
    userDetailsMutation.mutate({ data: mutateObj })
  }



  return (
    <div className="-mt-14 h-auto w-[40%] rounded-lg bg-white bg-gray-200 pt-6 pl-24 pr-24 shadow-lg">
      <div className="mb-6">
        <div
        
          className={`mx-auto block h-[150px] w-[150px] rounded-[50%] border-2 text-[6rem] flex justify-center items-center border-white ${userDetailsQuery?.data?.avatar_color==="#fffff"?`text-black`:`text-white`}`}
          style={{backgroundColor: userDetailsQuery?.data?.avatar_color}}
        >{userDetailsQuery?.data?.username[0]}</div>
      </div>

      <div className="mb-1">
        <p className="mb-4 font-sans font-medium text-black">Name</p>
        <Input
          className="mb-4 w-full rounded-lg bg-cyan-500 py-2 px-1 text-black outline-none"
          defaultValue={userDetailsQuery?.data?.username}
          isDisabled={userType!=="super_admin"}
  
          type="text"
          {...register("username")}
        />
      </div>

      <div className="mb-1">
        <p className="mb-4 font-sans font-sans font-medium text-black">Email</p>
        <Input
          className="mb-4 w-full rounded-lg bg-cyan-500 py-2 px-1 text-black outline-none"
          defaultValue={userDetailsQuery?.data?.email}
          isDisabled={userType!=="super_admin"}
         
          type="email"
          {...register("email")}
        />
      </div>

      <div className="mb-1">
        <p className="mb-4 font-sans font-sans font-medium text-black">
          Organisation
        </p>
        <Input
          className="mb-4 w-full rounded-lg bg-cyan-500 py-2 px-1 text-black outline-none"
          isDisabled={userType!=="super_admin"}
          name="organisation"
          type="text"
        />
      </div>

      {/* <div className="mb-1">
        <p className="mb-4 font-sans font-sans font-medium text-black">
          Password
        </p>
        <input
          className="mb-4 w-full rounded-lg bg-cyan-200 py-2 px-1 text-gray-500 outline-none"
          name="password"
          type="password"
        />
      </div> */}

      <Link href="/reset-password">
        <p className="font-sans font-bold text-black hover:underline cursor-pointer" >
          Change your password info here.
        </p>
      </Link>

      <div className="mx-auto mb-10 mt-10 flex justify-center">
      

        <Button
          className={`h-[7vh] w-[90%] ${userType!=="super_admin"?`bg-cyan-500`: `hover:bg-blue-500 bg-cyan-500`} mx-auto rounded-md py-2 text-[21px] font-bold font-bold text-white`}
          isDisabled={userType!=="super_admin"}
          isLoading={userDetailsMutation.isLoading}
          type="submit" 
          type="button" width="full" 
          onClick={handleSubmit(editUserDetails)}
                  >
          Save
        </Button>
        
      </div>
    </div>
  );
}