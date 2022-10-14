import { getLocalStorage } from "@/features/helpers";
import { MenuBar,Navbar ,SettingsForm } from "@/features/home";
import router from "next/router";
import { useState,useEffect } from "react";



export default function SettingPage(){

  const [isLoading,setIsLoading]=useState(false)

  useEffect(()=>{
    if(getLocalStorage("token")==null)
    router.push("/login")
    
   setIsLoading(true)
  },[])
    return (

      <div>
        
        <div className="flex items-center">
          
          <div className="w-[90%] h-screen rounded-md bg-white flex flex-wrap items-center justify-center">
            {isLoading?
            <SettingsForm />: null}
          </div>
        </div>
     
      </div>
    )
}