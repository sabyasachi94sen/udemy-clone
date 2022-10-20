import * as yup from "yup"


export const adminCreateValid=yup.object({
    name:  yup.string().required("Name is a required field"),
    email: yup.string().email("Please enter a valid email").required("Email is a required field")
})


export const adminUpdateValid=yup.object({
    username: yup.string().required("Name is a required field"),
    email: yup.string().email("Please enter a valid email").required("Email is a required field")
})