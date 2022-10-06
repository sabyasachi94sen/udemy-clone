import { MenuBar,Navbar ,SettingsForm } from "@/features/home";


export default function SettingPage(){
    return (

      <div>
        
        <div className="flex items-center">
          
          <div className="w-[90%] h-screen rounded-md bg-white flex flex-wrap items-center justify-center">
            <SettingsForm />
          </div>
        </div>
     
      </div>
    )
}

