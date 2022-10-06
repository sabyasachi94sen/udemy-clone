
import { handleMutation ,handleQuery } from "@/shared/services/api-client"

export interface StudentPostDataObjVal {
    student_name:               string;
    date_of_birth:              Date;
    current_grade:              string;
    country_of_residence:       string;
    city_of_residence:          string;
    country_of_citizenship:     string;
    account_manager:            string;
    is_active:                  string;
    country_of_boarding_school: string;
}


export interface StudentPutDataObjVal {
    data: StudentPayloadData;
    id:   number;
}

export interface StudentPayloadData {
    student_name:               string;
    date_of_birth:              Date;
    current_grade:              string;
    country_of_residence:       string;
    city_of_residence:          string;
    country_of_citizenship:     string;
    account_manager:            string;
    is_active:                  string;
    country_of_boarding_school: string;
}



const StudentInfoList=()=>handleQuery({ resourceUrl: "student/list" })


const StudentInfoAdd=(postData: StudentPostDataObjVal)=>{

   

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
            is_active :postData.is_active==="active",
            residence : {
            city_of_residence :postData.city_of_residence,
            country_of_residence :postData.country_of_residence,
            },
        
        
        },
        account_manager :postData.account_manager
     
      
    })
     
 
   

     
 return handleMutation({
    resourceUrl: "student/register",
    method: "POST",
    reqBody: jsonObj,
  })
 }


const StudentInfoEdit=(putDataObj:StudentPutDataObjVal)=>{

    

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
            is_active :studentDetails.is_active==="active",
            residence : {
            city_of_residence :studentDetails.city_of_residence,
            country_of_residence :studentDetails.country_of_residence,
            },
        
        
        },
        account_manager :studentDetails.account_manager
     
      
    })
 
   

    return handleMutation({
        resourceUrl: `student/ud/${userId}`,
        method: "PUT",
        reqBody: jsonObj,
      })
    
    
 }
 

 const StudentInfoDelete=(userId:string)=>handleMutation({
        resourceUrl: `student/ud/${userId}`,
        method: "DELETE",
       
      })

 const ManagerList=()=>handleQuery({ resourceUrl: `assigned_account_managers/list` })


export const StudentResObj={
   student_info_list: StudentInfoList,
   student_info_add: StudentInfoAdd,
   student_info_edit: StudentInfoEdit,
   student_info_delete: StudentInfoDelete,
   manager_list:ManagerList
}