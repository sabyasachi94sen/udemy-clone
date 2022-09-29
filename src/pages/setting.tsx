import { MenuBar,Navbar ,SettingsForm } from "@/features/home";


function SettingPage(){
    return (

      <div>
        <Navbar />
        <div className="flex items-center">
          <MenuBar />
          <div className="w-[90%] h-screen rounded-md bg-white flex flex-wrap items-center justify-center">
            <SettingsForm />
          </div>
        </div>
     
      </div>
    )
}


export default SettingPage
SettingPage.isPublicRoute = false;