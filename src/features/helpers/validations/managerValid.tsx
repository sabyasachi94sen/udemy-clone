import * as yup from "yup"



export const managerCreateValid=yup.object({
    manager_name:  yup.string().required("Name is a required field"),
    email: yup.string().email("Please enter a valid email").required("Email is a required field")
})


export const managerUpdateValid=yup.object({
    username: yup.string().required("Name is a required field"),
    email: yup.string().email("Please enter a valid email").required("Email is a required field")
})