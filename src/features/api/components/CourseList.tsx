import axios from "axios"



const CourseList=()=>{
    const config={
        url: "https://mocki.io/v1/c390fd0a-125f-44ef-8520-0e47ba3dfe1d",
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    }

    return axios(config)
}


export const CourseListObj={
    course_list: CourseList
}

