import axios from "axios";

import { GetAuthToken } from "@/features/helpers"




const StudentInfoList=()=>{
    const token=GetAuthToken()

    const config={
        method: "get",
        url: "https://pippams-dev.eoraa.com/api/student/list/",
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },
          
         
    }

    return axios(config);
}


const StudentInfoAdd=(postData: object)=>{
   


     const randNum=Math.floor(Math.random()*10000000)
    
   
    const jsonObj=JSON.stringify({
        student_details:{
            student_name :postData.student_name,
           email: `abc${randNum}@gmail.com`,
           phone_number : "+91 9999999997",
            date_of_birth :postData.date_of_birth,
            current_grade :postData.current_grade,
            country_of_boarding_school :postData.country_of_boarding_school,
            country_of_citizenship :postData.country_of_citizenship,
            is_active :postData.is_active==="active"?true:false,
            residence : {
            city_of_residence :postData.city_of_residence,
            country_of_residence :postData.country_of_residence,
            },
        
        
        },
        account_manager :postData.account_manager
     
      
    })
     
 
     const token=GetAuthToken()
 
     const config={
         method: "post",
         url: "https://pippams-dev.eoraa.com/api/student/register/",
         headers: {
             "Content-Type": "application/json",
              "Authorization": token,
           },
           
           data: jsonObj
     }
 
     axios(config)
 }


const StudentInfoEdit=(putDataObj:object)=>{

    
 
     const token=GetAuthToken()
     const userId=putDataObj.id;
     const studentDetails={
        ...putDataObj.data
     }
     
     const randNum=Math.floor(Math.random()*10000000)
     const jsonObj=JSON.stringify({
        student_details:{
            student_name :studentDetails.student_name,
           email: `xyz${randNum}@gmail.com`,
           phone_number : "+91 9999999997",
            date_of_birth :studentDetails.date_of_birth,
            current_grade :studentDetails.current_grade,
            country_of_boarding_school :studentDetails.country_of_boarding_school,
            country_of_citizenship :studentDetails.country_of_citizenship,
            is_active :studentDetails.is_active==="active"?true:false,
            residence : {
            city_of_residence :studentDetails.city_of_residence,
            country_of_residence :studentDetails.country_of_residence,
            },
        
        
        },
        account_manager :studentDetails.account_manager
     
      
    })
 
     const config={
         method: "put",
         url: "https://pippams-dev.eoraa.com/api/student/ud/"+userId+"/",
         headers: {
             "Content-Type": "application/json",
              "Authorization": token,
           },
           
           data: jsonObj
     }
 
     axios(config)
 }
 

 const StudentInfoDelete=(userId:string)=>{

    
 
    const token=GetAuthToken()
    
   
    const config={
        method: "delete",
        url: "https://pippams-dev.eoraa.com/api/student/ud/"+userId+"/",
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },
          
         
    }

    axios(config)
}

 const ManagerList=()=>{

    const token=GetAuthToken()
    const config={
        method: "get",
        url: "https://pippams-dev.eoraa.com/api/assigned_account_managers/list/",
        headers: {
            "Content-Type": "application/json",
             "Authorization": token,
          },
          
         
    }

    return axios(config)
}


export const StudentResObj={
   student_info_list: StudentInfoList,
   student_info_add: StudentInfoAdd,
   student_info_edit: StudentInfoEdit,
   student_info_delete: StudentInfoDelete,
   manager_list:ManagerList
}