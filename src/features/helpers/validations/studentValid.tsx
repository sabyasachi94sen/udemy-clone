import * as yup from "yup"


export const studentValid=yup.object({
    student_name:  yup.string().required("Name is a required field"),
    date_of_birth: yup.string().required("Date of birth is a required field"),
    current_grade: yup.string().required("Grade is a required field"),
    email: yup.string().email("Please enter a valid email").required("Email is a required field"),
    phone_number: yup.string().required("Phone number is a required field"),
    country_of_residence:yup.string().required("Country of residence is a required field"),
    city_of_residence:yup.string().required("City is required field"),
    country_of_citizenship:yup.string().required("Country of citizenship is a required field"),
    account_manager:yup.string().required("Assigned Staff is a required field"),
    country_of_boarding_school:yup.string().required("Country of boarding school is a required field")

})


